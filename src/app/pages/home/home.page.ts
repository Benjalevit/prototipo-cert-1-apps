import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Estacionamiento, EstacionamientoService, TipoVehiculo } from '../../services/estacionamiento.service';
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonChip,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    AsyncPipe,
    CurrencyPipe,
    FormsModule,
    NgFor,
    NgIf,
    RouterLink,
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonChip,
    IonCol,
    IonContent,
    IonFab,
    IonFabButton,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonMenuButton,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonTabBar,
    IonTabButton,
    IonTitle,
    IonToolbar,
  ],
})
export class HomePage {
  private readonly estacionamientoService = inject(EstacionamientoService);
  private readonly router = inject(Router);
  texto = '';
  tipo: TipoVehiculo | 'cualquiera' = 'cualquiera';
  techado = false;
  camaras = false;
  disponibles = false;
  precioBajo = false;
  resultados$ = this.estacionamientoService.buscar({});

  buscar(): void {
    const caracteristicas: string[] = [];
    if (this.techado) caracteristicas.push('Techado');
    if (this.camaras) caracteristicas.push('Cámaras 24/7');
    this.resultados$ = this.estacionamientoService.buscar({ texto: this.texto, tipo: this.tipo, caracteristicas, precioMaximo: this.precioBajo ? 1500 : undefined, soloDisponibles: this.disponibles });
  }
  alternarFiltro(filtro: 'techado' | 'camaras' | 'disponibles' | 'precioBajo'): void { this[filtro] = !this[filtro]; this.buscar(); }
  verDetalle(espacio: Estacionamiento): void { this.estacionamientoService.seleccionar(espacio.id); void this.router.navigate(['/detalle'], { queryParams: { id: espacio.id } }); }
}
