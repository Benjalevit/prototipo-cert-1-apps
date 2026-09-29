import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol,
  IonCard, IonCardContent, IonBadge, IonButtons, IonButton,
  IonMenuButton, IonItem, IonLabel, IonInput, IonIcon,
  IonSelect, IonSelectOption, IonChip, IonFab, IonFabButton,
  IonTabBar, IonTabButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterLink, CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol,
    IonCard, IonCardContent, IonBadge, IonButtons, IonButton,
    IonMenuButton, IonItem, IonLabel, IonInput, IonIcon,
    IonSelect, IonSelectOption, IonChip, IonFab, IonFabButton,
    IonTabBar, IonTabButton,
  ],
})
export class HomePage {}