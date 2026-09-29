import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {
  IonApp,
  IonRouterOutlet,
  provideIonicAngular,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideIonicAngular(),
    provideRouter([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./app/pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'detalle',
        loadComponent: () =>
          import('./app/pages/detalle/detalle.page')
            .then((m) => m.DetallePage),
      },
      {
        path: 'reserva',
        loadComponent: () =>
          import('./app/pages/reserva/reserva.page')
            .then((m) => m.ReservaPage),
      },
    ]),
  ],
});