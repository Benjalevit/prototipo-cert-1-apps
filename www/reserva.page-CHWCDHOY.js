import {
  EstacionamientoService
} from "./chunk-MWC3DZ7Y.js";
import {
  Component,
  CurrencyPipe,
  DatePipe,
  FormsModule,
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
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  RouterLink,
  TitleCasePipe,
  ToastController,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XCNWOMN7.js";
import "./chunk-2OSUYV27.js";
import "./chunk-ZANXXOCD.js";
import "./chunk-4LOO7PHZ.js";
import "./chunk-BAMIXZYL.js";
import "./chunk-QLFQEAXP.js";
import "./chunk-4V5LI525.js";
import "./chunk-T6B53M7P.js";
import "./chunk-FZZSIR43.js";
import "./chunk-X4NBNE3H.js";
import "./chunk-UXBVATRK.js";
import "./chunk-BVURRGCG.js";
import "./chunk-YAS4LRVC.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// src/app/pages/reserva/reserva.page.ts
function ReservaPage_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, "La salida debe ser posterior a la entrada.");
    \u0275\u0275elementEnd();
  }
}
function ReservaPage_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ReservaPage_button_45_Template_button_click_0_listener() {
      const tipo_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.seleccionarVehiculo(tipo_r2));
    });
    \u0275\u0275element(1, "ion-icon", 28);
    \u0275\u0275elementStart(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tipo_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.vehiculo === tipo_r2);
    \u0275\u0275advance();
    \u0275\u0275property("name", tipo_r2 === "moto" ? "bicycle-outline" : tipo_r2 === "auto" ? "car-sport-outline" : "bus-outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, tipo_r2));
  }
}
var ReservaPage = class _ReservaPage {
  service = inject(EstacionamientoService);
  router = inject(Router);
  toastController = inject(ToastController);
  estacionamiento = this.service.obtenerSeleccionado();
  fechaMinima = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  fecha = this.fechaMinima;
  horario = { lower: Math.max(14, this.estacionamiento.horarioInicio), upper: Math.min(18, this.estacionamiento.horarioFin) };
  vehiculo = this.estacionamiento.tiposVehiculo[0];
  enviado = false;
  get duracion() {
    return this.horario.upper - this.horario.lower;
  }
  get precio() {
    return this.service.calcularPrecio(this.estacionamiento, this.horario.lower, this.horario.upper);
  }
  seleccionarVehiculo(tipo) {
    this.vehiculo = tipo;
  }
  confirmar() {
    return __async(this, null, function* () {
      this.enviado = true;
      if (!this.fecha || this.duracion <= 0 || !this.vehiculo) {
        yield this.mostrarMensaje("Selecciona una fecha, un horario v\xE1lido y un veh\xEDculo.", "danger");
        return;
      }
      try {
        this.service.crearReserva({ estacionamientoId: this.estacionamiento.id, fecha: this.fecha, horaInicio: this.horario.lower, horaFin: this.horario.upper, vehiculo: this.vehiculo });
        yield this.mostrarMensaje("Reserva guardada. Contin\xFAa con el pago.", "success");
        void this.router.navigate(["/pago"]);
      } catch (error) {
        yield this.mostrarMensaje(error instanceof Error ? error.message : "No fue posible crear la reserva.", "danger");
      }
    });
  }
  mostrarMensaje(message, color) {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({ message, color, duration: 2200, position: "top" });
      yield toast.present();
    });
  }
  static \u0275fac = function ReservaPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservaPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservaPage, selectors: [["app-reserva"]], decls: 103, vars: 49, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/detalle", "color", "dark"], ["size", "small"], ["value", "0.5", "color", "primary"], [1, "ion-padding"], [1, "place-label"], [2, "font-size", "20px", "font-weight", "600", "margin", "2px 0 18px"], [2, "font-size", "15px"], ["presentation", "date", "locale", "es-CL", 3, "ngModelChange", "min", "ngModel"], ["dualKnobs", "true", "step", "1", "color", "primary", 3, "ngModelChange", "min", "max", "ngModel"], ["slot", "start", "name", "time-outline", "size", "small"], ["slot", "end", "name", "time-outline", "size", "small"], [2, "display", "flex", "justify-content", "space-between", "font-size", "12px", "color", "var(--ink-soft)"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-top", "12px", "font-size", "13px", "color", "var(--ink-soft)"], ["color", "primary"], ["class", "validation", 4, "ngIf"], [2, "display", "flex", "gap", "10px", "flex-wrap", "wrap"], ["type", "button", "class", "vehicle-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "summary-row"], [1, "summary-total"], ["lines", "none"], ["slot", "start", "name", "lock-closed-outline", "color", "medium"], [1, "ion-text-wrap", 2, "font-size", "12px", "color", "var(--ink-soft)"], [1, "ion-padding-horizontal", "ion-padding-bottom"], ["expand", "block", "color", "primary", 3, "click", "disabled"], [1, "validation"], ["type", "button", 1, "vehicle-card", 3, "click"], [2, "font-size", "22px", "color", "var(--emerald)", 3, "name"], [1, "label"]], template: function ReservaPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      \u0275\u0275element(3, "ion-back-button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title", 3);
      \u0275\u0275text(5, "Fecha y horario");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(6, "ion-progress-bar", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "ion-content")(8, "div", 5)(9, "div", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h1", 7);
      \u0275\u0275text(12, "Elige tu fecha, horario y veh\xEDculo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ion-card")(14, "ion-card-header")(15, "ion-card-title", 8);
      \u0275\u0275text(16, "Fecha");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "ion-datetime", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ReservaPage_Template_ion_datetime_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.fecha, $event) || (ctx.fecha = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "ion-card")(19, "ion-card-header")(20, "ion-card-title", 8);
      \u0275\u0275text(21, "Bloque horario");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "ion-card-content")(23, "ion-range", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ReservaPage_Template_ion_range_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.horario, $event) || (ctx.horario = $event);
        return $event;
      });
      \u0275\u0275element(24, "ion-icon", 11)(25, "ion-icon", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 13)(27, "span");
      \u0275\u0275text(28, "Entrada ");
      \u0275\u0275elementStart(29, "b");
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "span");
      \u0275\u0275text(32, "Salida ");
      \u0275\u0275elementStart(33, "b");
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 14);
      \u0275\u0275text(36, "Duraci\xF3n total ");
      \u0275\u0275elementStart(37, "ion-badge", 15);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(39, ReservaPage_div_39_Template, 2, 0, "div", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "ion-card")(41, "ion-card-header")(42, "ion-card-title", 8);
      \u0275\u0275text(43, "Veh\xEDculo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "ion-card-content", 17);
      \u0275\u0275template(45, ReservaPage_button_45_Template, 5, 6, "button", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "ion-card")(47, "ion-card-header")(48, "ion-card-title", 8);
      \u0275\u0275text(49, "Resumen");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "ion-card-content")(51, "div", 19)(52, "span");
      \u0275\u0275text(53, "Espacio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "b");
      \u0275\u0275text(55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 19)(57, "span");
      \u0275\u0275text(58, "Fecha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "b");
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 19)(63, "span");
      \u0275\u0275text(64, "Horario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "b");
      \u0275\u0275text(66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 19)(68, "span");
      \u0275\u0275text(69, "Veh\xEDculo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "b");
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "titlecase");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(73, "hr");
      \u0275\u0275elementStart(74, "div", 19)(75, "span");
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "b");
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "currency");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 19)(82, "span");
      \u0275\u0275text(83, "Tarifa de servicio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "b");
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "currency");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(87, "hr");
      \u0275\u0275elementStart(88, "div", 20)(89, "span");
      \u0275\u0275text(90, "Total a pagar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span");
      \u0275\u0275text(92);
      \u0275\u0275pipe(93, "currency");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(94, "ion-item", 21);
      \u0275\u0275element(95, "ion-icon", 22);
      \u0275\u0275elementStart(96, "ion-label", 23);
      \u0275\u0275text(97, "El precio se recalcula autom\xE1ticamente al mover el horario.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(98, "ion-footer", 0)(99, "ion-toolbar")(100, "div", 24)(101, "ion-button", 25);
      \u0275\u0275listener("click", function ReservaPage_Template_ion_button_click_101_listener() {
        return ctx.confirmar();
      });
      \u0275\u0275text(102, "Confirmar y continuar");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate2("", ctx.estacionamiento.direccion, ", ", ctx.estacionamiento.comuna);
      \u0275\u0275advance(7);
      \u0275\u0275property("min", ctx.fechaMinima);
      \u0275\u0275twoWayProperty("ngModel", ctx.fecha);
      \u0275\u0275advance(6);
      \u0275\u0275property("min", ctx.estacionamiento.horarioInicio)("max", ctx.estacionamiento.horarioFin);
      \u0275\u0275twoWayProperty("ngModel", ctx.horario);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.horario.lower, ":00");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.horario.upper, ":00");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", ctx.duracion, " ", ctx.duracion === 1 ? "hora" : "horas");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.enviado && ctx.duracion <= 0);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.estacionamiento.tiposVehiculo);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.estacionamiento.titulo);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 24, ctx.fecha, "dd/MM/yyyy"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.horario.lower, ":00 \u2014 ", ctx.horario.upper, ":00");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 27, ctx.vehiculo));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", ctx.duracion, " h \xD7 ", \u0275\u0275pipeBind4(77, 29, ctx.estacionamiento.precioHora, "CLP", "symbol-narrow", "1.0-0"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(80, 34, ctx.precio.subtotal, "CLP", "symbol-narrow", "1.0-0"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(86, 39, ctx.precio.tarifaServicio, "CLP", "symbol-narrow", "1.0-0"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(93, 44, ctx.precio.total, "CLP", "symbol-narrow", "1.0-0"));
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", ctx.duracion <= 0);
    }
  }, dependencies: [
    NgForOf,
    NgIf,
    FormsModule,
    NgControlStatus,
    NgModel,
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
    CurrencyPipe,
    DatePipe,
    TitleCasePipe
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n}\n.place-label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--ink-soft);\n}\n.vehicle-card[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 12px;\n  text-align: center;\n}\n.vehicle-card.selected[_ngcontent-%COMP%] {\n  border-color: var(--emerald);\n  background: var(--emerald-pale);\n}\n.vehicle-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: var(--ink-soft);\n  margin: 6px 0;\n}\n.summary-row[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--ink);\n  font-weight: 500;\n}\n.summary-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n  font-weight: 600;\n}\n.summary-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--emerald-dark);\n}\n.vehicle-card[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--ink);\n  cursor: pointer;\n  min-width: 95px;\n}\n.validation[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n  font-size: 12px;\n  margin-top: 10px;\n}\nhr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid var(--border);\n  margin: 12px 0;\n}\n/*# sourceMappingURL=reserva.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReservaPage, [{
    type: Component,
    args: [{ selector: "app-reserva", standalone: true, imports: [
      CurrencyPipe,
      DatePipe,
      NgForOf,
      NgIf,
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
      IonToolbar
    ], template: `<ion-header class="ion-no-border"><ion-toolbar><ion-buttons slot="start"><ion-back-button defaultHref="/detalle" color="dark"></ion-back-button></ion-buttons><ion-title size="small">Fecha y horario</ion-title></ion-toolbar><ion-progress-bar value="0.5" color="primary"></ion-progress-bar></ion-header>
<ion-content><div class="ion-padding"><div class="place-label">{{ estacionamiento.direccion }}, {{ estacionamiento.comuna }}</div><h1 style="font-size:20px;font-weight:600;margin:2px 0 18px;">Elige tu fecha, horario y veh\xEDculo</h1>
  <ion-card><ion-card-header><ion-card-title style="font-size:15px;">Fecha</ion-card-title></ion-card-header><ion-datetime presentation="date" locale="es-CL" [min]="fechaMinima" [(ngModel)]="fecha"></ion-datetime></ion-card>
  <ion-card><ion-card-header><ion-card-title style="font-size:15px;">Bloque horario</ion-card-title></ion-card-header><ion-card-content><ion-range dualKnobs="true" [min]="estacionamiento.horarioInicio" [max]="estacionamiento.horarioFin" step="1" [(ngModel)]="horario" color="primary"><ion-icon slot="start" name="time-outline" size="small"></ion-icon><ion-icon slot="end" name="time-outline" size="small"></ion-icon></ion-range><div style="display:flex;justify-content:space-between;font-size:12px;color:var(--ink-soft);"><span>Entrada <b>{{ horario.lower }}:00</b></span><span>Salida <b>{{ horario.upper }}:00</b></span></div><div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px;font-size:13px;color:var(--ink-soft);">Duraci\xF3n total <ion-badge color="primary">{{ duracion }} {{ duracion === 1 ? 'hora' : 'horas' }}</ion-badge></div><div class="validation" *ngIf="enviado && duracion <= 0">La salida debe ser posterior a la entrada.</div></ion-card-content></ion-card>
  <ion-card><ion-card-header><ion-card-title style="font-size:15px;">Veh\xEDculo</ion-card-title></ion-card-header><ion-card-content style="display:flex;gap:10px;flex-wrap:wrap;"><button type="button" class="vehicle-card" *ngFor="let tipo of estacionamiento.tiposVehiculo" [class.selected]="vehiculo === tipo" (click)="seleccionarVehiculo(tipo)"><ion-icon [name]="tipo === 'moto' ? 'bicycle-outline' : tipo === 'auto' ? 'car-sport-outline' : 'bus-outline'" style="font-size:22px;color:var(--emerald);"></ion-icon><div class="label">{{ tipo | titlecase }}</div></button></ion-card-content></ion-card>
  <ion-card><ion-card-header><ion-card-title style="font-size:15px;">Resumen</ion-card-title></ion-card-header><ion-card-content><div class="summary-row"><span>Espacio</span><b>{{ estacionamiento.titulo }}</b></div><div class="summary-row"><span>Fecha</span><b>{{ fecha | date:'dd/MM/yyyy' }}</b></div><div class="summary-row"><span>Horario</span><b>{{ horario.lower }}:00 \u2014 {{ horario.upper }}:00</b></div><div class="summary-row"><span>Veh\xEDculo</span><b>{{ vehiculo | titlecase }}</b></div><hr><div class="summary-row"><span>{{ duracion }} h \xD7 {{ estacionamiento.precioHora | currency:'CLP':'symbol-narrow':'1.0-0' }}</span><b>{{ precio.subtotal | currency:'CLP':'symbol-narrow':'1.0-0' }}</b></div><div class="summary-row"><span>Tarifa de servicio</span><b>{{ precio.tarifaServicio | currency:'CLP':'symbol-narrow':'1.0-0' }}</b></div><hr><div class="summary-total"><span>Total a pagar</span><span>{{ precio.total | currency:'CLP':'symbol-narrow':'1.0-0' }}</span></div></ion-card-content></ion-card>
  <ion-item lines="none"><ion-icon slot="start" name="lock-closed-outline" color="medium"></ion-icon><ion-label class="ion-text-wrap" style="font-size:12px;color:var(--ink-soft);">El precio se recalcula autom\xE1ticamente al mover el horario.</ion-label></ion-item>
</div></ion-content>
<ion-footer class="ion-no-border"><ion-toolbar><div class="ion-padding-horizontal ion-padding-bottom"><ion-button expand="block" color="primary" [disabled]="duracion <= 0" (click)="confirmar()">Confirmar y continuar</ion-button></div></ion-toolbar></ion-footer>
`, styles: ['/* src/app/pages/reserva/reserva.page.scss */\n:host {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1,\nh2,\nh3 {\n  font-family: "Space Grotesk", sans-serif;\n}\n.place-label {\n  font-size: 12.5px;\n  color: var(--ink-soft);\n}\n.vehicle-card {\n  flex: 1;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 12px;\n  text-align: center;\n}\n.vehicle-card.selected {\n  border-color: var(--emerald);\n  background: var(--emerald-pale);\n}\n.vehicle-card .label {\n  font-size: 12.5px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: var(--ink-soft);\n  margin: 6px 0;\n}\n.summary-row b {\n  color: var(--ink);\n  font-weight: 500;\n}\n.summary-total {\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n  font-weight: 600;\n}\n.summary-total span:last-child {\n  color: var(--emerald-dark);\n}\n.vehicle-card {\n  background: #fff;\n  color: var(--ink);\n  cursor: pointer;\n  min-width: 95px;\n}\n.validation {\n  color: var(--ion-color-danger);\n  font-size: 12px;\n  margin-top: 10px;\n}\nhr {\n  border: none;\n  border-top: 1px solid var(--border);\n  margin: 12px 0;\n}\n/*# sourceMappingURL=reserva.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservaPage, { className: "ReservaPage", filePath: "src/app/pages/reserva/reserva.page.ts", lineNumber: 63 });
})();
export {
  ReservaPage
};
//# sourceMappingURL=reserva.page-CHWCDHOY.js.map
