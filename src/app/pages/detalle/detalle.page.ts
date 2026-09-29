import { CurrencyPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EstacionamientoService } from '../../services/estacionamiento.service';
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonDatetime,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalle',
  standalone: true,
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  imports: [
    CurrencyPipe,
    NgFor,
    RouterLink,
    IonAvatar,
    IonBackButton,
    IonButton,
    IonButtons,
    IonChip,
    IonCol,
    IonContent,
    IonDatetime,
    IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonRow,
    IonTitle,
    IonToolbar,
  ],
})
export class DetallePage {
  private readonly service = inject(EstacionamientoService);
  private readonly route = inject(ActivatedRoute);
  readonly estacionamiento = this.service.obtenerPorId(this.route.snapshot.queryParamMap.get('id')) ?? this.service.obtenerSeleccionado();
  constructor() { this.service.seleccionar(this.estacionamiento.id); }
}
