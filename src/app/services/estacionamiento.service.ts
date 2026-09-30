import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

export type TipoVehiculo = 'auto' | 'camioneta' | 'moto' | 'furgon';
export interface Estacionamiento { id: string; titulo: string; direccion: string; comuna: string; referencia: string; distancia: string; precioHora: number; precioDia?: number; tiposVehiculo: TipoVehiculo[]; caracteristicas: string[]; disponible: boolean; horarioInicio: number; horarioFin: number; }
export interface Reserva { id: string; estacionamientoId: string; fecha: string; horaInicio: number; horaFin: number; vehiculo: TipoVehiculo; subtotal: number; tarifaServicio: number; total: number; creadaEn: string; }
export interface FiltrosEstacionamiento { texto?: string; tipo?: TipoVehiculo | 'cualquiera'; caracteristicas?: string[]; precioMaximo?: number; soloDisponibles?: boolean; }

@Injectable({ providedIn: 'root' })
export class EstacionamientoService {
  private readonly estacionamientosKey = 'parkspot_estacionamientos';
  private readonly reservasKey = 'parkspot_reservas';
  private readonly seleccionKey = 'parkspot_estacionamiento_seleccionado';
  private readonly estacionamientosSubject = new BehaviorSubject<Estacionamiento[]>(this.cargarEstacionamientos());
  readonly estacionamientos$ = this.estacionamientosSubject.asObservable();

  buscar(filtros: FiltrosEstacionamiento): Observable<Estacionamiento[]> {
    const texto = this.normalizar(filtros.texto ?? '');
    return this.estacionamientos$.pipe(map((items) => items.filter((item) => {
      const coincideTexto = !texto || [item.titulo, item.direccion, item.comuna].some((campo) => this.normalizar(campo).includes(texto));
      const coincideTipo = !filtros.tipo || filtros.tipo === 'cualquiera' || item.tiposVehiculo.includes(filtros.tipo);
      const coincideCaracteristicas = (filtros.caracteristicas ?? []).every((valor) => item.caracteristicas.includes(valor));
      const coincidePrecio = !filtros.precioMaximo || item.precioHora <= filtros.precioMaximo;
      const coincideDisponibilidad = !filtros.soloDisponibles || item.disponible;
      return coincideTexto && coincideTipo && coincideCaracteristicas && coincidePrecio && coincideDisponibilidad;
    })));
  }

  obtenerPorId(id: string | null): Estacionamiento | undefined { return this.estacionamientosSubject.value.find((item) => item.id === id); }
  obtenerSeleccionado(): Estacionamiento { return this.obtenerPorId(localStorage.getItem(this.seleccionKey)) ?? this.estacionamientosSubject.value[0]; }
  seleccionar(id: string): void { localStorage.setItem(this.seleccionKey, id); }

  publicar(datos: Omit<Estacionamiento, 'id' | 'disponible'>): Estacionamiento {
    const nuevo = { ...datos, id: `est-${Date.now()}`, disponible: true };
    const actualizados = [nuevo, ...this.estacionamientosSubject.value];
    this.estacionamientosSubject.next(actualizados);
    localStorage.setItem(this.estacionamientosKey, JSON.stringify(actualizados));
    this.seleccionar(nuevo.id);
    return nuevo;
  }

  calcularPrecio(estacionamiento: Estacionamiento, inicio: number, fin: number): Pick<Reserva, 'subtotal' | 'tarifaServicio' | 'total'> {
    const subtotal = Math.max(0, fin - inicio) * estacionamiento.precioHora;
    const tarifaServicio = subtotal > 0 ? 300 : 0;
    return { subtotal, tarifaServicio, total: subtotal + tarifaServicio };
  }

  crearReserva(datos: Pick<Reserva, 'estacionamientoId' | 'fecha' | 'horaInicio' | 'horaFin' | 'vehiculo'>): Reserva {
    const estacionamiento = this.obtenerPorId(datos.estacionamientoId);
    if (!estacionamiento) throw new Error('No se encontró el estacionamiento seleccionado.');
    if (datos.horaFin <= datos.horaInicio) throw new Error('La hora de salida debe ser posterior a la entrada.');
    const reserva = { ...datos, ...this.calcularPrecio(estacionamiento, datos.horaInicio, datos.horaFin), id: `res-${Date.now()}`, creadaEn: new Date().toISOString() };
    localStorage.setItem(this.reservasKey, JSON.stringify([reserva, ...this.obtenerReservas()]));
    return reserva;
  }

  obtenerReservas(): Reserva[] { return this.leerLocalStorage<Reserva[]>(this.reservasKey, []); }
  private cargarEstacionamientos(): Estacionamiento[] { return this.leerLocalStorage<Estacionamiento[]>(this.estacionamientosKey, ESTACIONAMIENTOS_INICIALES); }
  private leerLocalStorage<T>(clave: string, respaldo: T): T { try { const valor = localStorage.getItem(clave); return valor ? JSON.parse(valor) as T : respaldo; } catch { return respaldo; } }
  private normalizar(valor: string): string { return valor.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim(); }
}

const ESTACIONAMIENTOS_INICIALES: Estacionamiento[] = [
  { id: 'providencia-1650', titulo: 'Estacionamiento subterráneo Av. Providencia', direccion: 'Av. Providencia 1650', comuna: 'Providencia', referencia: 'A 220 m de Metro Los Leones', distancia: '220 m', precioHora: 1200, precioDia: 8000, tiposVehiculo: ['auto', 'camioneta'], caracteristicas: ['Techado', 'Cámaras 24/7', 'Acceso 24/7'], disponible: true, horarioInicio: 8, horarioFin: 22 },
  { id: 'bilbao-430', titulo: 'Patio particular, calle Bilbao', direccion: 'Francisco Bilbao 430', comuna: 'Providencia', referencia: 'A 400 m de Parque Bustamante', distancia: '400 m', precioHora: 700, precioDia: 5500, tiposVehiculo: ['auto', 'moto'], caracteristicas: ['Al aire libre', 'Acceso 24/7'], disponible: true, horarioInicio: 7, horarioFin: 23 },
  { id: 'costanera-90', titulo: 'Edificio Costanera, box subterráneo', direccion: 'Nueva Tobalaba 90', comuna: 'Providencia', referencia: 'A 180 m de Costanera Center', distancia: '180 m', precioHora: 1400, precioDia: 9000, tiposVehiculo: ['auto'], caracteristicas: ['Techado', 'Carga eléctrica', 'Cámaras 24/7'], disponible: true, horarioInicio: 8, horarioFin: 20 },
  { id: 'suecia-820', titulo: 'Galpón Suecia, sector poniente', direccion: 'Suecia 820', comuna: 'Providencia', referencia: 'A 650 m de Plaza Italia', distancia: '650 m', precioHora: 900, precioDia: 6500, tiposVehiculo: ['auto', 'moto'], caracteristicas: ['Techado'], disponible: false, horarioInicio: 9, horarioFin: 21 },
];
