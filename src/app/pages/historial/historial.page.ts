import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonBadge,
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-historial',
  standalone: true,
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  imports: [
    RouterLink,
    IonBadge,
    IonButton,
    IonCard,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonTabBar,
    IonTabButton,
    IonTitle,
    IonToolbar,
  ],
})
export class HistorialPage {}
