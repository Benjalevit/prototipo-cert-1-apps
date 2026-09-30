import { CurrencyPipe, DatePipe, NgFor, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EstacionamientoService, TipoVehiculo } from '../../services/estacionamiento.service';
import {
  IonBackButton,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonDatetime,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonProgressBar,
  IonRange,
  IonTitle,
  IonToolbar,
  ToastController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-reserva',
  standalone: true,
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
  imports: [
    CurrencyPipe,
    DatePipe,
    NgFor,
    FormsModule,
    TitleCasePipe,
    RouterLink,
    IonBackButton,
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonDatetime,
    IonFooter,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonProgressBar,
    IonRange,
    IonTitle,
    IonToolbar,
  ],
})
export class ReservaPage {
  private readonly service = inject(EstacionamientoService);
  private readonly router = inject(Router);
  private readonly toastController = inject(ToastController);
  readonly estacionamiento = this.service.obtenerSeleccionado();
  readonly fechaMinima = new Date().toISOString().slice(0, 10);
  fecha = this.fechaMinima;
  horario = { lower: Math.max(14, this.estacionamiento.horarioInicio), upper: Math.min(18, this.estacionamiento.horarioFin) };
  vehiculo: TipoVehiculo = this.estacionamiento.tiposVehiculo[0];
  enviado = false;

  get duracion(): number { return this.horario.upper - this.horario.lower; }
  get precio() { return this.service.calcularPrecio(this.estacionamiento, this.horario.lower, this.horario.upper); }
  seleccionarVehiculo(tipo: TipoVehiculo): void { this.vehiculo = tipo; }
  async confirmar(): Promise<void> {
    this.enviado = true;
    if (!this.fecha || this.duracion <= 0 || !this.vehiculo) { await this.mostrarMensaje('Selecciona una fecha, un horario válido y un vehículo.', 'danger'); return; }
    try {
      this.service.crearReserva({ estacionamientoId: this.estacionamiento.id, fecha: this.fecha, horaInicio: this.horario.lower, horaFin: this.horario.upper, vehiculo: this.vehiculo });
      await this.mostrarMensaje('Reserva guardada. Continúa con el pago.', 'success');
      void this.router.navigate(['/pago']);
    } catch (error) { await this.mostrarMensaje(error instanceof Error ? error.message : 'No fue posible crear la reserva.', 'danger'); }
  }
  private async mostrarMensaje(message: string, color: string): Promise<void> { const toast = await this.toastController.create({ message, color, duration: 2200, position: 'top' }); await toast.present(); }
}
