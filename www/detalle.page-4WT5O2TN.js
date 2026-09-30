import {
  EstacionamientoService
} from "./chunk-MWC3DZ7Y.js";
import {
  ActivatedRoute,
  Component,
  CurrencyPipe,
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
  NgForOf,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
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
import "./chunk-WDMUDEB6.js";

// src/app/pages/detalle/detalle.page.ts
function DetallePage_ion_chip_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-chip", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caracteristica_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(caracteristica_r1);
  }
}
var DetallePage = class _DetallePage {
  service = inject(EstacionamientoService);
  route = inject(ActivatedRoute);
  estacionamiento = this.service.obtenerPorId(this.route.snapshot.queryParamMap.get("id")) ?? this.service.obtenerSeleccionado();
  constructor() {
    this.service.seleccionar(this.estacionamiento.id);
  }
  static \u0275fac = function DetallePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetallePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetallePage, selectors: [["app-detalle"]], decls: 138, vars: 11, consts: [["translucent", "true", 1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/home", "color", "dark"], ["size", "small"], ["slot", "end"], ["slot", "icon-only", "name", "heart-outline", "color", "dark"], ["fullscreen", "true"], [1, "gallery"], [1, "g-main"], ["name", "car-sport-outline", 1, "gallery-icon"], [1, "g-count"], [1, "g-thumb"], ["name", "image-outline", 1, "thumb-icon"], ["name", "apps-outline", 1, "thumb-icon"], [1, "title-block"], [1, "address"], [1, "rating"], ["name", "star", "color", "warning"], [2, "margin-top", "12px", "display", "flex", "gap", "6px", "flex-wrap", "wrap"], ["outline", "", "color", "primary", 4, "ngFor", "ngForOf"], [1, "ion-padding"], [2, "font-size", "16px", "font-weight", "600"], [2, "padding", "0"], ["size", "4"], [1, "dim-card", "active"], ["name", "car-sport-outline", 1, "vehicle-icon"], [1, "label"], [1, "sub"], ["name", "bus-outline", 1, "vehicle-icon"], [1, "dim-card"], ["name", "bicycle-outline", 1, "vehicle-icon", "muted"], [2, "font-size", "16px", "font-weight", "600", "margin-top", "22px"], ["lines", "none"], ["slot", "start", "name", "checkmark-circle", "color", "primary"], [1, "ion-text-wrap", 2, "font-size", "13.5px"], ["slot", "start", "name", "close-circle", "color", "medium"], [2, "font-size", "16px", "font-weight", "600", "margin-top", "10px"], ["presentation", "date", "locale", "es-CL", "value", "2026-09-07", 2, "border", "1px solid var(--border)", "border-radius", "12px"], [1, "hours-row", 2, "display", "flex", "gap", "8px", "margin-top", "14px", "flex-wrap", "wrap"], ["outline", "", 1, "hour-chip"], ["color", "primary", 1, "hour-chip"], ["lines", "full"], [2, "width", "100%", "height", "100%", "background", "var(--ash-light)", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", "12px", "font-weight", "600", "color", "var(--emerald-dark)"], [1, "ion-text-wrap"], [2, "font-size", "13.5px", "font-weight", "600"], [2, "float", "right", "color", "var(--emerald)", "font-size", "12px"], [2, "font-size", "12px", "color", "var(--ink-soft)"], [2, "font-size", "13.5px"], [1, "ion-no-border"], [1, "booking-footer"], [1, "booking-price"], [2, "font-size", "11px", "color", "var(--ink-soft)"], ["color", "primary", "routerLink", "/reserva"], ["outline", "", "color", "primary"]], template: function DetallePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      \u0275\u0275element(3, "ion-back-button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title", 3);
      \u0275\u0275text(5, "Detalle del espacio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ion-buttons", 4)(7, "ion-button");
      \u0275\u0275element(8, "ion-icon", 5);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(9, "ion-content", 6)(10, "div", 7)(11, "div", 8);
      \u0275\u0275element(12, "ion-icon", 9);
      \u0275\u0275elementStart(13, "div", 10);
      \u0275\u0275text(14, "1 / 12 fotos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 11);
      \u0275\u0275element(16, "ion-icon", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275element(18, "ion-icon", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14)(20, "h1");
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 15);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 16);
      \u0275\u0275element(25, "ion-icon", 17);
      \u0275\u0275text(26, " 4.8 ");
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "(126 rese\xF1as)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 18);
      \u0275\u0275template(30, DetallePage_ion_chip_30_Template, 2, 1, "ion-chip", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 20)(32, "h2", 21);
      \u0275\u0275text(33, "Dimensiones y tipo de veh\xEDculo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "ion-grid", 22)(35, "ion-row")(36, "ion-col", 23)(37, "div", 24);
      \u0275\u0275element(38, "ion-icon", 25);
      \u0275\u0275elementStart(39, "div", 26);
      \u0275\u0275text(40, "Auto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 27);
      \u0275\u0275text(42, "Hasta 4,9 m");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "ion-col", 23)(44, "div", 24);
      \u0275\u0275element(45, "ion-icon", 28);
      \u0275\u0275elementStart(46, "div", 26);
      \u0275\u0275text(47, "Camioneta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 27);
      \u0275\u0275text(49, "Hasta 5,4 m");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "ion-col", 23)(51, "div", 29);
      \u0275\u0275element(52, "ion-icon", 30);
      \u0275\u0275elementStart(53, "div", 26);
      \u0275\u0275text(54, "Moto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 27);
      \u0275\u0275text(56, "No disponible");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(57, "h2", 31);
      \u0275\u0275text(58, "Reglas de uso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "ion-list", 32)(60, "ion-item");
      \u0275\u0275element(61, "ion-icon", 33);
      \u0275\u0275elementStart(62, "ion-label", 34);
      \u0275\u0275text(63, "Ingreso y salida disponibles las 24 horas mediante c\xF3digo QR.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "ion-item");
      \u0275\u0275element(65, "ion-icon", 33);
      \u0275\u0275elementStart(66, "ion-label", 34);
      \u0275\u0275text(67, "Extensi\xF3n de horario permitida desde la app hasta 15 minutos antes del cierre de la reserva.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "ion-item");
      \u0275\u0275element(69, "ion-icon", 35);
      \u0275\u0275elementStart(70, "ion-label", 34);
      \u0275\u0275text(71, "No se permite el uso del espacio fuera del bloque horario reservado.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "ion-item");
      \u0275\u0275element(73, "ion-icon", 35);
      \u0275\u0275elementStart(74, "ion-label", 34)(75, "b");
      \u0275\u0275text(76, "Cancelaci\xF3n gratuita");
      \u0275\u0275elementEnd();
      \u0275\u0275text(77, " hasta 1 hora antes del inicio de la reserva.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "h2", 36);
      \u0275\u0275text(79, "Disponibilidad");
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "ion-datetime", 37);
      \u0275\u0275elementStart(81, "div", 38)(82, "ion-chip", 39);
      \u0275\u0275text(83, "08:00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "ion-chip", 39);
      \u0275\u0275text(85, "10:00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "ion-chip", 39);
      \u0275\u0275text(87, "12:00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "ion-chip", 40);
      \u0275\u0275text(89, "14:00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "ion-chip", 40);
      \u0275\u0275text(91, "16:00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "ion-chip", 39);
      \u0275\u0275text(93, "18:00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "ion-chip", 39);
      \u0275\u0275text(95, "20:00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "h2", 31);
      \u0275\u0275text(97, "\u2605 4.8 \xB7 126 rese\xF1as");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "ion-list", 41)(99, "ion-item")(100, "ion-avatar", 1)(101, "div", 42);
      \u0275\u0275text(102, "MJ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "ion-label", 43)(104, "h3", 44);
      \u0275\u0275text(105, "Manuel J. ");
      \u0275\u0275elementStart(106, "span", 45);
      \u0275\u0275text(107, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "p", 46);
      \u0275\u0275text(109, "Agosto 2026");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "p", 47);
      \u0275\u0275text(111, "S\xFAper f\xE1cil de encontrar y el acceso con QR funcion\xF3 perfecto.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "ion-item")(113, "ion-avatar", 1)(114, "div", 42);
      \u0275\u0275text(115, "CT");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "ion-label", 43)(117, "h3", 44);
      \u0275\u0275text(118, "Carolina T. ");
      \u0275\u0275elementStart(119, "span", 45);
      \u0275\u0275text(120, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "p", 46);
      \u0275\u0275text(122, "Julio 2026");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "p", 47);
      \u0275\u0275text(124, "Buena iluminaci\xF3n y c\xE1maras visibles, me sent\xED segura dejando el auto varias horas.");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(125, "ion-footer", 48)(126, "ion-toolbar")(127, "div", 49)(128, "div")(129, "div", 50);
      \u0275\u0275text(130);
      \u0275\u0275pipe(131, "currency");
      \u0275\u0275elementStart(132, "span");
      \u0275\u0275text(133, "/ hora");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "div", 51);
      \u0275\u0275text(135, "Cancelaci\xF3n gratuita 1h antes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "ion-button", 52);
      \u0275\u0275text(137, "Reservar ahora");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275textInterpolate(ctx.estacionamiento.titulo);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate3("", ctx.estacionamiento.direccion, ", ", ctx.estacionamiento.comuna, " \xB7 ", ctx.estacionamiento.referencia);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.estacionamiento.caracteristicas);
      \u0275\u0275advance(100);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind4(131, 6, ctx.estacionamiento.precioHora, "CLP", "symbol-narrow", "1.0-0"), " ");
    }
  }, dependencies: [
    NgForOf,
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
    CurrencyPipe
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \n.brand[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background: var(--emerald);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n}\n.gallery[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 6px;\n  height: 220px;\n}\n.g-main[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  background: var(--emerald-pale);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.g-thumb[_ngcontent-%COMP%] {\n  background: var(--ash-light);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.g-count[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  background: rgba(22, 36, 28, 0.72);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.gallery-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: var(--emerald);\n  --ionicon-stroke-width:48px;\n  display: block;\n}\n.thumb-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--ash);\n  --ionicon-stroke-width:42px;\n  display: block;\n}\n.title-block[_ngcontent-%COMP%] {\n  padding: 16px 16px 0;\n}\n.title-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.address[_ngcontent-%COMP%] {\n  color: var(--ink-soft);\n  font-size: 13px;\n  margin-top: 4px;\n}\n.rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13.5px;\n  font-weight: 600;\n  margin-top: 6px;\n}\n.rating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--ink-soft);\n  font-weight: 400;\n}\n.dim-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 12px;\n  text-align: center;\n}\n.dim-card.active[_ngcontent-%COMP%] {\n  border-color: var(--emerald);\n  background: var(--emerald-pale);\n}\n.vehicle-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--emerald);\n  --ionicon-stroke-width:44px;\n  display: block;\n  margin: 0 auto 4px;\n}\n.vehicle-icon.muted[_ngcontent-%COMP%] {\n  color: var(--ash);\n}\n.dim-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n}\n.dim-card[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--ink-soft);\n  margin-top: 2px;\n}\n.hour-chip[_ngcontent-%COMP%] {\n  --background:#fff;\n  font-size: 12.5px;\n}\n.booking-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 10px 14px;\n}\n.booking-price[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--emerald-dark);\n}\n.booking-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--ink-soft);\n}\n/*# sourceMappingURL=detalle.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetallePage, [{
    type: Component,
    args: [{ selector: "app-detalle", standalone: true, imports: [
      CurrencyPipe,
      NgForOf,
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
      IonToolbar
    ], template: `<ion-header class="ion-no-border" translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/home" color="dark"></ion-back-button>
    </ion-buttons>
    <ion-title size="small">Detalle del espacio</ion-title>
    <ion-buttons slot="end">
      <ion-button>
        <ion-icon slot="icon-only" name="heart-outline" color="dark"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true">

  <div class="gallery">
    <div class="g-main">
      <ion-icon class="gallery-icon" name="car-sport-outline"></ion-icon>
      <div class="g-count">1 / 12 fotos</div>
    </div>
    <div class="g-thumb"><ion-icon class="thumb-icon" name="image-outline"></ion-icon></div>
    <div class="g-thumb"><ion-icon class="thumb-icon" name="apps-outline"></ion-icon></div>
  </div>

  <div class="title-block">
    <h1>{{ estacionamiento.titulo }}</h1>
    <div class="address">{{ estacionamiento.direccion }}, {{ estacionamiento.comuna }} \xB7 {{ estacionamiento.referencia }}</div>
    <div class="rating"><ion-icon name="star" color="warning"></ion-icon> 4.8 <span>(126 rese\xF1as)</span></div>
    <div style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap;">
      <ion-chip *ngFor="let caracteristica of estacionamiento.caracteristicas" outline color="primary">{{ caracteristica }}</ion-chip>
    </div>
  </div>

  <div class="ion-padding">

    <h2 style="font-size:16px;font-weight:600;">Dimensiones y tipo de veh\xEDculo</h2>
    <ion-grid style="padding:0;">
      <ion-row>
        <ion-col size="4">
          <div class="dim-card active">
            <ion-icon class="vehicle-icon" name="car-sport-outline"></ion-icon>
            <div class="label">Auto</div>
            <div class="sub">Hasta 4,9 m</div>
          </div>
        </ion-col>
        <ion-col size="4">
          <div class="dim-card active">
            <ion-icon class="vehicle-icon" name="bus-outline"></ion-icon>
            <div class="label">Camioneta</div>
            <div class="sub">Hasta 5,4 m</div>
          </div>
        </ion-col>
        <ion-col size="4">
          <div class="dim-card">
            <ion-icon class="vehicle-icon muted" name="bicycle-outline"></ion-icon>
            <div class="label">Moto</div>
            <div class="sub">No disponible</div>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>

    <h2 style="font-size:16px;font-weight:600;margin-top:22px;">Reglas de uso</h2>
    <ion-list lines="none">
      <ion-item>
        <ion-icon slot="start" name="checkmark-circle" color="primary"></ion-icon>
        <ion-label class="ion-text-wrap" style="font-size:13.5px;">Ingreso y salida disponibles las 24 horas mediante c\xF3digo QR.</ion-label>
      </ion-item>
      <ion-item>
        <ion-icon slot="start" name="checkmark-circle" color="primary"></ion-icon>
        <ion-label class="ion-text-wrap" style="font-size:13.5px;">Extensi\xF3n de horario permitida desde la app hasta 15 minutos antes del cierre de la reserva.</ion-label>
      </ion-item>
      <ion-item>
        <ion-icon slot="start" name="close-circle" color="medium"></ion-icon>
        <ion-label class="ion-text-wrap" style="font-size:13.5px;">No se permite el uso del espacio fuera del bloque horario reservado.</ion-label>
      </ion-item>
      <ion-item>
        <ion-icon slot="start" name="close-circle" color="medium"></ion-icon>
        <ion-label class="ion-text-wrap" style="font-size:13.5px;"><b>Cancelaci\xF3n gratuita</b> hasta 1 hora antes del inicio de la reserva.</ion-label>
      </ion-item>
    </ion-list>

    <h2 style="font-size:16px;font-weight:600;margin-top:10px;">Disponibilidad</h2>
    <ion-datetime presentation="date" locale="es-CL" value="2026-09-07" style="border:1px solid var(--border);border-radius:12px;"></ion-datetime>

    <div class="hours-row" style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap;">
      <ion-chip class="hour-chip" outline>08:00</ion-chip>
      <ion-chip class="hour-chip" outline>10:00</ion-chip>
      <ion-chip class="hour-chip" outline>12:00</ion-chip>
      <ion-chip class="hour-chip" color="primary">14:00</ion-chip>
      <ion-chip class="hour-chip" color="primary">16:00</ion-chip>
      <ion-chip class="hour-chip" outline>18:00</ion-chip>
      <ion-chip class="hour-chip" outline>20:00</ion-chip>
    </div>

    <h2 style="font-size:16px;font-weight:600;margin-top:22px;">\u2605 4.8 \xB7 126 rese\xF1as</h2>
    <ion-list lines="full">
      <ion-item>
        <ion-avatar slot="start"><div style="width:100%;height:100%;background:var(--ash-light);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;color:var(--emerald-dark);">MJ</div></ion-avatar>
        <ion-label class="ion-text-wrap">
          <h3 style="font-size:13.5px;font-weight:600;">Manuel J. <span style="float:right;color:var(--emerald);font-size:12px;">\u2605\u2605\u2605\u2605\u2605</span></h3>
          <p style="font-size:12px;color:var(--ink-soft);">Agosto 2026</p>
          <p style="font-size:13.5px;">S\xFAper f\xE1cil de encontrar y el acceso con QR funcion\xF3 perfecto.</p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start"><div style="width:100%;height:100%;background:var(--ash-light);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;color:var(--emerald-dark);">CT</div></ion-avatar>
        <ion-label class="ion-text-wrap">
          <h3 style="font-size:13.5px;font-weight:600;">Carolina T. <span style="float:right;color:var(--emerald);font-size:12px;">\u2605\u2605\u2605\u2605\u2605</span></h3>
          <p style="font-size:12px;color:var(--ink-soft);">Julio 2026</p>
          <p style="font-size:13.5px;">Buena iluminaci\xF3n y c\xE1maras visibles, me sent\xED segura dejando el auto varias horas.</p>
        </ion-label>
      </ion-item>
    </ion-list>

  </div>
</ion-content>

<ion-footer class="ion-no-border">
  <ion-toolbar>
    <div class="booking-footer">
      <div>
        <div class="booking-price">{{ estacionamiento.precioHora | currency:'CLP':'symbol-narrow':'1.0-0' }} <span>/ hora</span></div>
        <div style="font-size:11px;color:var(--ink-soft);">Cancelaci\xF3n gratuita 1h antes</div>
      </div>
      <ion-button color="primary" routerLink="/reserva">Reservar ahora</ion-button>
    </div>
  </ion-toolbar>
</ion-footer>
`, styles: ['/* src/app/pages/detalle/detalle.page.scss */\n:host {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1,\nh2,\nh3,\n.brand {\n  font-family: "Space Grotesk", sans-serif;\n}\n.brand-mark {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background: var(--emerald);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n}\n.gallery {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 6px;\n  height: 220px;\n}\n.g-main {\n  grid-row: 1/3;\n  background: var(--emerald-pale);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.g-thumb {\n  background: var(--ash-light);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.g-count {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  background: rgba(22, 36, 28, 0.72);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.gallery-icon {\n  font-size: 64px;\n  color: var(--emerald);\n  --ionicon-stroke-width:48px;\n  display: block;\n}\n.thumb-icon {\n  font-size: 28px;\n  color: var(--ash);\n  --ionicon-stroke-width:42px;\n  display: block;\n}\n.title-block {\n  padding: 16px 16px 0;\n}\n.title-block h1 {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.address {\n  color: var(--ink-soft);\n  font-size: 13px;\n  margin-top: 4px;\n}\n.rating {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13.5px;\n  font-weight: 600;\n  margin-top: 6px;\n}\n.rating span {\n  color: var(--ink-soft);\n  font-weight: 400;\n}\n.dim-card {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 12px;\n  text-align: center;\n}\n.dim-card.active {\n  border-color: var(--emerald);\n  background: var(--emerald-pale);\n}\n.vehicle-icon {\n  font-size: 22px;\n  color: var(--emerald);\n  --ionicon-stroke-width:44px;\n  display: block;\n  margin: 0 auto 4px;\n}\n.vehicle-icon.muted {\n  color: var(--ash);\n}\n.dim-card .label {\n  font-size: 12.5px;\n  font-weight: 600;\n}\n.dim-card .sub {\n  font-size: 10.5px;\n  color: var(--ink-soft);\n  margin-top: 2px;\n}\n.hour-chip {\n  --background:#fff;\n  font-size: 12.5px;\n}\n.booking-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 10px 14px;\n}\n.booking-price {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--emerald-dark);\n}\n.booking-price span {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--ink-soft);\n}\n/*# sourceMappingURL=detalle.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetallePage, { className: "DetallePage", filePath: "src/app/pages/detalle/detalle.page.ts", lineNumber: 55 });
})();
export {
  DetallePage
};
//# sourceMappingURL=detalle.page-4WT5O2TN.js.map
