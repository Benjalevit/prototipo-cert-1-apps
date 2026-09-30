import {
  BehaviorSubject,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-XCNWOMN7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/services/estacionamiento.service.ts
var EstacionamientoService = class _EstacionamientoService {
  estacionamientosKey = "parkspot_estacionamientos";
  reservasKey = "parkspot_reservas";
  seleccionKey = "parkspot_estacionamiento_seleccionado";
  estacionamientosSubject = new BehaviorSubject(this.cargarEstacionamientos());
  estacionamientos$ = this.estacionamientosSubject.asObservable();
  buscar(filtros) {
    const texto = this.normalizar(filtros.texto ?? "");
    return this.estacionamientos$.pipe(map((items) => items.filter((item) => {
      const coincideTexto = !texto || [item.titulo, item.direccion, item.comuna].some((campo) => this.normalizar(campo).includes(texto));
      const coincideTipo = !filtros.tipo || filtros.tipo === "cualquiera" || item.tiposVehiculo.includes(filtros.tipo);
      const coincideCaracteristicas = (filtros.caracteristicas ?? []).every((valor) => item.caracteristicas.includes(valor));
      const coincidePrecio = !filtros.precioMaximo || item.precioHora <= filtros.precioMaximo;
      const coincideDisponibilidad = !filtros.soloDisponibles || item.disponible;
      return coincideTexto && coincideTipo && coincideCaracteristicas && coincidePrecio && coincideDisponibilidad;
    })));
  }
  obtenerPorId(id) {
    return this.estacionamientosSubject.value.find((item) => item.id === id);
  }
  obtenerSeleccionado() {
    return this.obtenerPorId(localStorage.getItem(this.seleccionKey)) ?? this.estacionamientosSubject.value[0];
  }
  seleccionar(id) {
    localStorage.setItem(this.seleccionKey, id);
  }
  publicar(datos) {
    const nuevo = __spreadProps(__spreadValues({}, datos), { id: `est-${Date.now()}`, disponible: true });
    const actualizados = [nuevo, ...this.estacionamientosSubject.value];
    this.estacionamientosSubject.next(actualizados);
    localStorage.setItem(this.estacionamientosKey, JSON.stringify(actualizados));
    this.seleccionar(nuevo.id);
    return nuevo;
  }
  calcularPrecio(estacionamiento, inicio, fin) {
    const subtotal = Math.max(0, fin - inicio) * estacionamiento.precioHora;
    const tarifaServicio = subtotal > 0 ? 300 : 0;
    return { subtotal, tarifaServicio, total: subtotal + tarifaServicio };
  }
  crearReserva(datos) {
    const estacionamiento = this.obtenerPorId(datos.estacionamientoId);
    if (!estacionamiento)
      throw new Error("No se encontr\xF3 el estacionamiento seleccionado.");
    if (datos.horaFin <= datos.horaInicio)
      throw new Error("La hora de salida debe ser posterior a la entrada.");
    const reserva = __spreadProps(__spreadValues(__spreadValues({}, datos), this.calcularPrecio(estacionamiento, datos.horaInicio, datos.horaFin)), { id: `res-${Date.now()}`, creadaEn: (/* @__PURE__ */ new Date()).toISOString() });
    localStorage.setItem(this.reservasKey, JSON.stringify([reserva, ...this.obtenerReservas()]));
    return reserva;
  }
  obtenerReservas() {
    return this.leerLocalStorage(this.reservasKey, []);
  }
  cargarEstacionamientos() {
    return this.leerLocalStorage(this.estacionamientosKey, ESTACIONAMIENTOS_INICIALES);
  }
  leerLocalStorage(clave, respaldo) {
    try {
      const valor = localStorage.getItem(clave);
      return valor ? JSON.parse(valor) : respaldo;
    } catch {
      return respaldo;
    }
  }
  normalizar(valor) {
    return valor.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }
  static \u0275fac = function EstacionamientoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EstacionamientoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EstacionamientoService, factory: _EstacionamientoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EstacionamientoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var ESTACIONAMIENTOS_INICIALES = [
  { id: "providencia-1650", titulo: "Estacionamiento subterr\xE1neo Av. Providencia", direccion: "Av. Providencia 1650", comuna: "Providencia", referencia: "A 220 m de Metro Los Leones", distancia: "220 m", precioHora: 1200, precioDia: 8e3, tiposVehiculo: ["auto", "camioneta"], caracteristicas: ["Techado", "C\xE1maras 24/7", "Acceso 24/7"], disponible: true, horarioInicio: 8, horarioFin: 22 },
  { id: "bilbao-430", titulo: "Patio particular, calle Bilbao", direccion: "Francisco Bilbao 430", comuna: "Providencia", referencia: "A 400 m de Parque Bustamante", distancia: "400 m", precioHora: 700, precioDia: 5500, tiposVehiculo: ["auto", "moto"], caracteristicas: ["Al aire libre", "Acceso 24/7"], disponible: true, horarioInicio: 7, horarioFin: 23 },
  { id: "costanera-90", titulo: "Edificio Costanera, box subterr\xE1neo", direccion: "Nueva Tobalaba 90", comuna: "Providencia", referencia: "A 180 m de Costanera Center", distancia: "180 m", precioHora: 1400, precioDia: 9e3, tiposVehiculo: ["auto"], caracteristicas: ["Techado", "Carga el\xE9ctrica", "C\xE1maras 24/7"], disponible: true, horarioInicio: 8, horarioFin: 20 },
  { id: "suecia-820", titulo: "Galp\xF3n Suecia, sector poniente", direccion: "Suecia 820", comuna: "Providencia", referencia: "A 650 m de Plaza Italia", distancia: "650 m", precioHora: 900, precioDia: 6500, tiposVehiculo: ["auto", "moto"], caracteristicas: ["Techado"], disponible: false, horarioInicio: 9, horarioFin: 21 }
];

export {
  EstacionamientoService
};
//# sourceMappingURL=chunk-MWC3DZ7Y.js.map
