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
export class AppComponent {}

bootstrapApplication(AppComponent, {
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
          import('./app/pages/detalle/detalle.page').then((m) => m.DetallePage),
      },
      {
        path: 'reserva',
        loadComponent: () =>
          import('./app/pages/reserva/reserva.page').then((m) => m.ReservaPage),
      },
      {
        path: 'pago',
        loadComponent: () =>
          import('./app/pages/pago/pago.page').then((m) => m.PagoPage),
      },
      {
        path: 'activa',
        loadComponent: () =>
          import('./app/pages/activa/activa.page').then((m) => m.ActivaPage),
      },
      {
        path: 'publicar',
        loadComponent: () =>
          import('./app/pages/publicar/publicar.page').then((m) => m.PublicarPage),
      },
      {
        path: 'historial',
        loadComponent: () =>
          import('./app/pages/historial/historial.page').then((m) => m.HistorialPage),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./app/pages/perfil/perfil.page').then((m) => m.PerfilPage),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./app/pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      { path: '**', redirectTo: 'home' },
    ]),
  ],
});
