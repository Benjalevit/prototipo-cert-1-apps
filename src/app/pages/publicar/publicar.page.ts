import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
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
  IonCheckbox,
  IonChip,
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonProgressBar,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  ToastController,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-publicar',
  standalone: true,
  templateUrl: './publicar.page.html',
  styleUrls: ['./publicar.page.scss'],
  imports: [
    CurrencyPipe,
    ReactiveFormsModule,
    RouterLink,
    IonBackButton,
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCheckbox,
    IonChip,
    IonContent,
    IonFooter,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonProgressBar,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonTitle,
    IonToolbar,
  ],
})
export class PublicarPage {
  private readonly fb = inject(FormBuilder);
  private readonly service = inject(EstacionamientoService);
  private readonly router = inject(Router);
  private readonly toastController = inject(ToastController);
  enviado = false;
  readonly tiposDisponibles: { valor: TipoVehiculo; etiqueta: string }[] = [
    { valor: 'auto', etiqueta: 'Auto' }, { valor: 'camioneta', etiqueta: 'Camioneta' },
    { valor: 'moto', etiqueta: 'Moto' }, { valor: 'furgon', etiqueta: 'Furgón / van' },
  ];
  readonly caracteristicasDisponibles = ['Techado', 'Cámaras 24/7', 'Carga eléctrica', 'Acceso 24/7', 'Portón automático', 'Guardia presencial'];
  readonly formulario = this.fb.nonNullable.group({
    titulo: ['', [Validators.required, Validators.minLength(6)]], direccion: ['', Validators.required],
    comuna: ['', Validators.required], referencia: [''], precioHora: [1200, [Validators.required, Validators.min(100)]],
    precioDia: [8000, Validators.min(500)], tiposVehiculo: [['auto'] as TipoVehiculo[], Validators.required],
    caracteristicas: [['Techado'] as string[]], horarioInicio: [8, [Validators.required, Validators.min(0), Validators.max(23)]],
    horarioFin: [20, [Validators.required, Validators.min(1), Validators.max(24)]],
  });

  campoInvalido(nombre: keyof typeof this.formulario.controls): boolean { const campo = this.formulario.controls[nombre]; return campo.invalid && (campo.touched || this.enviado); }
  async publicar(): Promise<void> {
    this.enviado = true; this.formulario.markAllAsTouched();
    const valor = this.formulario.getRawValue();
    if (this.formulario.invalid || valor.tiposVehiculo.length === 0 || valor.horarioFin <= valor.horarioInicio) { await this.mostrarMensaje('Revisa los campos marcados antes de publicar.', 'danger'); return; }
    this.service.publicar({ ...valor, distancia: 'Nueva publicación' });
    await this.mostrarMensaje('Estacionamiento publicado y guardado correctamente.', 'success');
    void this.router.navigate(['/home']);
  }
  private async mostrarMensaje(message: string, color: string): Promise<void> { const toast = await this.toastController.create({ message, color, duration: 2200, position: 'top' }); await toast.present(); }
}
