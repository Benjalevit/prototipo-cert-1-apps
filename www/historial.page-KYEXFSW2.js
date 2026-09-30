import {
  Component,
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
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
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

// src/app/pages/historial/historial.page.ts
var HistorialPage = class _HistorialPage {
  static \u0275fac = function HistorialPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistorialPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistorialPage, selectors: [["app-historial"]], decls: 139, vars: 1, consts: [[1, "ion-no-border"], [1, "ion-padding"], [2, "font-size", "13.5px", "color", "var(--ink-soft)", "margin-top", "0"], ["value", "todas", "scrollable", "", "color", "primary"], ["value", "todas"], ["value", "encurso"], ["value", "proximas"], ["value", "finalizadas"], ["value", "canceladas"], [1, "section-label"], [2, "margin", "0 0 10px"], ["lines", "none"], ["slot", "start", 1, "res-thumb"], ["name", "car-sport-outline", 2, "color", "var(--emerald)", "font-size", "20px"], [2, "font-size", "14px", "font-weight", "600"], [2, "font-size", "12.5px", "color", "var(--ink-soft)"], ["slot", "end", 2, "text-align", "right"], ["color", "primary", 2, "border-radius", "14px"], [2, "font-size", "13.5px", "font-weight", "600", "margin-top", "6px"], ["color", "tertiary", 2, "--background", "var(--emerald-pale)", "--color", "var(--emerald-dark)", "border-radius", "14px"], ["slot", "start", 1, "res-thumb", "muted"], ["name", "car-sport-outline", 2, "color", "var(--ash)", "font-size", "20px"], ["color", "medium", 2, "border-radius", "14px"], ["expand", "block", "fill", "clear", "size", "small", "color", "primary"], ["name", "bus-outline", 2, "color", "var(--ash)", "font-size", "20px"], ["color", "danger", 2, "--background", "#F5EAE8", "--color", "#9A5B4C", "border-radius", "14px"], ["expand", "block", "fill", "clear", "size", "small", "color", "medium"], ["slot", "bottom", "color", "light"], ["tab", "buscar", "routerLink", "/home"], ["name", "search"], ["tab", "publicar", "routerLink", "/publicar"], ["name", "add-circle-outline"], ["tab", "reservas", "routerLink", "/historial", 3, "selected"], ["name", "time"], ["tab", "perfil", "routerLink", "/perfil"], ["name", "person-outline"]], template: function HistorialPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      \u0275\u0275text(3, "Mis reservas");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "ion-content")(5, "div", 1)(6, "p", 2);
      \u0275\u0275text(7, "Revisa tus reservas activas, pasadas y repite las que m\xE1s usas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "ion-segment", 3)(9, "ion-segment-button", 4)(10, "ion-label");
      \u0275\u0275text(11, "Todas (6)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "ion-segment-button", 5)(13, "ion-label");
      \u0275\u0275text(14, "En curso (1)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "ion-segment-button", 6)(16, "ion-label");
      \u0275\u0275text(17, "Pr\xF3ximas (1)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "ion-segment-button", 7)(19, "ion-label");
      \u0275\u0275text(20, "Finalizadas (3)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "ion-segment-button", 8)(22, "ion-label");
      \u0275\u0275text(23, "Canceladas (1)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 9);
      \u0275\u0275text(25, "HOY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "ion-card", 10)(27, "ion-item", 11)(28, "div", 12);
      \u0275\u0275element(29, "ion-icon", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "ion-label")(31, "h3", 14);
      \u0275\u0275text(32, "Estacionamiento subterr\xE1neo Av. Providencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p", 15);
      \u0275\u0275text(34, "Hoy \xB7 14:00 \u2014 18:00 \xB7 Auto");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 16)(36, "ion-badge", 17);
      \u0275\u0275text(37, "En curso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 18);
      \u0275\u0275text(39, "$5.100");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 9);
      \u0275\u0275text(41, "PR\xD3XIMAS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "ion-card", 10)(43, "ion-item", 11)(44, "div", 12);
      \u0275\u0275element(45, "ion-icon", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "ion-label")(47, "h3", 14);
      \u0275\u0275text(48, "Edificio Costanera, box subterr\xE1neo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "p", 15);
      \u0275\u0275text(50, "Vie 12 de septiembre \xB7 09:00 \u2014 18:00 \xB7 Auto");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 16)(52, "ion-badge", 19);
      \u0275\u0275text(53, "Confirmada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 18);
      \u0275\u0275text(55, "$9.000");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(56, "div", 9);
      \u0275\u0275text(57, "HISTORIAL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "ion-card", 10)(59, "ion-item", 11)(60, "div", 20);
      \u0275\u0275element(61, "ion-icon", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "ion-label")(63, "h3", 14);
      \u0275\u0275text(64, "Patio particular, calle Bilbao");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "p", 15);
      \u0275\u0275text(66, "28 de agosto \xB7 10:00 \u2014 13:00 \xB7 Auto");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 16)(68, "ion-badge", 22);
      \u0275\u0275text(69, "Finalizada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 18);
      \u0275\u0275text(71, "$2.100");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "ion-button", 23);
      \u0275\u0275text(73, "Reservar de nuevo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "ion-card", 10)(75, "ion-item", 11)(76, "div", 20);
      \u0275\u0275element(77, "ion-icon", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "ion-label")(79, "h3", 14);
      \u0275\u0275text(80, "Estacionamiento subterr\xE1neo Av. Providencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p", 15);
      \u0275\u0275text(82, "20 de agosto \xB7 08:00 \u2014 12:00 \xB7 Auto");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 16)(84, "ion-badge", 22);
      \u0275\u0275text(85, "Finalizada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 18);
      \u0275\u0275text(87, "$4.800");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "ion-button", 23);
      \u0275\u0275text(89, "Reservar de nuevo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "ion-card", 10)(91, "ion-item", 11)(92, "div", 20);
      \u0275\u0275element(93, "ion-icon", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "ion-label")(95, "h3", 14);
      \u0275\u0275text(96, "Galp\xF3n Suecia, sector poniente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p", 15);
      \u0275\u0275text(98, "14 de agosto \xB7 15:00 \u2014 19:00 \xB7 Camioneta");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 16)(100, "ion-badge", 22);
      \u0275\u0275text(101, "Finalizada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 18);
      \u0275\u0275text(103, "$3.600");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "ion-button", 23);
      \u0275\u0275text(105, "Reservar de nuevo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "ion-card", 10)(107, "ion-item", 11)(108, "div", 20);
      \u0275\u0275element(109, "ion-icon", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "ion-label")(111, "h3", 14);
      \u0275\u0275text(112, "Edificio Costanera, box subterr\xE1neo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p", 15);
      \u0275\u0275text(114, "2 de agosto \xB7 09:00 \u2014 11:00 \xB7 Auto");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "div", 16)(116, "ion-badge", 25);
      \u0275\u0275text(117, "Cancelada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "div", 18);
      \u0275\u0275text(119, "$0");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(120, "ion-button", 26);
      \u0275\u0275text(121, "Ver detalle");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(122, "ion-tab-bar", 27)(123, "ion-tab-button", 28);
      \u0275\u0275element(124, "ion-icon", 29);
      \u0275\u0275elementStart(125, "ion-label");
      \u0275\u0275text(126, "Buscar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "ion-tab-button", 30);
      \u0275\u0275element(128, "ion-icon", 31);
      \u0275\u0275elementStart(129, "ion-label");
      \u0275\u0275text(130, "Publicar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "ion-tab-button", 32);
      \u0275\u0275element(132, "ion-icon", 33);
      \u0275\u0275elementStart(133, "ion-label");
      \u0275\u0275text(134, "Reservas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "ion-tab-button", 34);
      \u0275\u0275element(136, "ion-icon", 35);
      \u0275\u0275elementStart(137, "ion-label");
      \u0275\u0275text(138, "Perfil");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(131);
      \u0275\u0275property("selected", true);
    }
  }, dependencies: [
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
    IonToolbar
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--ash);\n  letter-spacing: 0.02em;\n  margin: 18px 0 8px;\n}\n.res-thumb[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  background: var(--emerald-pale);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.res-thumb.muted[_ngcontent-%COMP%] {\n  background: var(--bg-soft);\n}\n/*# sourceMappingURL=historial.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistorialPage, [{
    type: Component,
    args: [{ selector: "app-historial", standalone: true, imports: [
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
      IonToolbar
    ], template: '<ion-header class="ion-no-border">\n    <ion-toolbar>\n      <ion-title>Mis reservas</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <div class="ion-padding">\n      <p style="font-size:13.5px;color:var(--ink-soft);margin-top:0;">Revisa tus reservas activas, pasadas y repite las que m\xE1s usas.</p>\n\n      <ion-segment value="todas" scrollable color="primary">\n        <ion-segment-button value="todas"><ion-label>Todas (6)</ion-label></ion-segment-button>\n        <ion-segment-button value="encurso"><ion-label>En curso (1)</ion-label></ion-segment-button>\n        <ion-segment-button value="proximas"><ion-label>Pr\xF3ximas (1)</ion-label></ion-segment-button>\n        <ion-segment-button value="finalizadas"><ion-label>Finalizadas (3)</ion-label></ion-segment-button>\n        <ion-segment-button value="canceladas"><ion-label>Canceladas (1)</ion-label></ion-segment-button>\n      </ion-segment>\n\n      <div class="section-label">HOY</div>\n      <ion-card style="margin:0 0 10px;">\n        <ion-item lines="none">\n          <div class="res-thumb" slot="start"><ion-icon name="car-sport-outline" style="color:var(--emerald);font-size:20px;"></ion-icon></div>\n          <ion-label>\n            <h3 style="font-size:14px;font-weight:600;">Estacionamiento subterr\xE1neo Av. Providencia</h3>\n            <p style="font-size:12.5px;color:var(--ink-soft);">Hoy \xB7 14:00 \u2014 18:00 \xB7 Auto</p>\n          </ion-label>\n          <div slot="end" style="text-align:right;">\n            <ion-badge color="primary" style="border-radius:14px;">En curso</ion-badge>\n            <div style="font-size:13.5px;font-weight:600;margin-top:6px;">$5.100</div>\n          </div>\n        </ion-item>\n      </ion-card>\n\n      <div class="section-label">PR\xD3XIMAS</div>\n      <ion-card style="margin:0 0 10px;">\n        <ion-item lines="none">\n          <div class="res-thumb" slot="start"><ion-icon name="car-sport-outline" style="color:var(--emerald);font-size:20px;"></ion-icon></div>\n          <ion-label>\n            <h3 style="font-size:14px;font-weight:600;">Edificio Costanera, box subterr\xE1neo</h3>\n            <p style="font-size:12.5px;color:var(--ink-soft);">Vie 12 de septiembre \xB7 09:00 \u2014 18:00 \xB7 Auto</p>\n          </ion-label>\n          <div slot="end" style="text-align:right;">\n            <ion-badge color="tertiary" style="--background:var(--emerald-pale);--color:var(--emerald-dark);border-radius:14px;">Confirmada</ion-badge>\n            <div style="font-size:13.5px;font-weight:600;margin-top:6px;">$9.000</div>\n          </div>\n        </ion-item>\n      </ion-card>\n\n      <div class="section-label">HISTORIAL</div>\n\n      <ion-card style="margin:0 0 10px;">\n        <ion-item lines="none">\n          <div class="res-thumb muted" slot="start"><ion-icon name="car-sport-outline" style="color:var(--ash);font-size:20px;"></ion-icon></div>\n          <ion-label>\n            <h3 style="font-size:14px;font-weight:600;">Patio particular, calle Bilbao</h3>\n            <p style="font-size:12.5px;color:var(--ink-soft);">28 de agosto \xB7 10:00 \u2014 13:00 \xB7 Auto</p>\n          </ion-label>\n          <div slot="end" style="text-align:right;">\n            <ion-badge color="medium" style="border-radius:14px;">Finalizada</ion-badge>\n            <div style="font-size:13.5px;font-weight:600;margin-top:6px;">$2.100</div>\n          </div>\n        </ion-item>\n        <ion-button expand="block" fill="clear" size="small" color="primary">Reservar de nuevo</ion-button>\n      </ion-card>\n\n      <ion-card style="margin:0 0 10px;">\n        <ion-item lines="none">\n          <div class="res-thumb muted" slot="start"><ion-icon name="car-sport-outline" style="color:var(--ash);font-size:20px;"></ion-icon></div>\n          <ion-label>\n            <h3 style="font-size:14px;font-weight:600;">Estacionamiento subterr\xE1neo Av. Providencia</h3>\n            <p style="font-size:12.5px;color:var(--ink-soft);">20 de agosto \xB7 08:00 \u2014 12:00 \xB7 Auto</p>\n          </ion-label>\n          <div slot="end" style="text-align:right;">\n            <ion-badge color="medium" style="border-radius:14px;">Finalizada</ion-badge>\n            <div style="font-size:13.5px;font-weight:600;margin-top:6px;">$4.800</div>\n          </div>\n        </ion-item>\n        <ion-button expand="block" fill="clear" size="small" color="primary">Reservar de nuevo</ion-button>\n      </ion-card>\n\n      <ion-card style="margin:0 0 10px;">\n        <ion-item lines="none">\n          <div class="res-thumb muted" slot="start"><ion-icon name="bus-outline" style="color:var(--ash);font-size:20px;"></ion-icon></div>\n          <ion-label>\n            <h3 style="font-size:14px;font-weight:600;">Galp\xF3n Suecia, sector poniente</h3>\n            <p style="font-size:12.5px;color:var(--ink-soft);">14 de agosto \xB7 15:00 \u2014 19:00 \xB7 Camioneta</p>\n          </ion-label>\n          <div slot="end" style="text-align:right;">\n            <ion-badge color="medium" style="border-radius:14px;">Finalizada</ion-badge>\n            <div style="font-size:13.5px;font-weight:600;margin-top:6px;">$3.600</div>\n          </div>\n        </ion-item>\n        <ion-button expand="block" fill="clear" size="small" color="primary">Reservar de nuevo</ion-button>\n      </ion-card>\n\n      <ion-card style="margin:0 0 10px;">\n        <ion-item lines="none">\n          <div class="res-thumb muted" slot="start"><ion-icon name="car-sport-outline" style="color:var(--ash);font-size:20px;"></ion-icon></div>\n          <ion-label>\n            <h3 style="font-size:14px;font-weight:600;">Edificio Costanera, box subterr\xE1neo</h3>\n            <p style="font-size:12.5px;color:var(--ink-soft);">2 de agosto \xB7 09:00 \u2014 11:00 \xB7 Auto</p>\n          </ion-label>\n          <div slot="end" style="text-align:right;">\n            <ion-badge color="danger" style="--background:#F5EAE8;--color:#9A5B4C;border-radius:14px;">Cancelada</ion-badge>\n            <div style="font-size:13.5px;font-weight:600;margin-top:6px;">$0</div>\n          </div>\n        </ion-item>\n        <ion-button expand="block" fill="clear" size="small" color="medium">Ver detalle</ion-button>\n      </ion-card>\n\n    </div>\n  </ion-content>\n\n  <ion-tab-bar slot="bottom" color="light">\n    <ion-tab-button tab="buscar" routerLink="/home"><ion-icon name="search"></ion-icon><ion-label>Buscar</ion-label></ion-tab-button>\n    <ion-tab-button tab="publicar" routerLink="/publicar"><ion-icon name="add-circle-outline"></ion-icon><ion-label>Publicar</ion-label></ion-tab-button>\n    <ion-tab-button tab="reservas" routerLink="/historial" [selected]="true"><ion-icon name="time"></ion-icon><ion-label>Reservas</ion-label></ion-tab-button>\n    <ion-tab-button tab="perfil" routerLink="/perfil"><ion-icon name="person-outline"></ion-icon><ion-label>Perfil</ion-label></ion-tab-button>\n  </ion-tab-bar>\n', styles: ['/* src/app/pages/historial/historial.page.scss */\n:host {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1 {\n  font-family: "Space Grotesk", sans-serif;\n}\n.section-label {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--ash);\n  letter-spacing: 0.02em;\n  margin: 18px 0 8px;\n}\n.res-thumb {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  background: var(--emerald-pale);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.res-thumb.muted {\n  background: var(--bg-soft);\n}\n/*# sourceMappingURL=historial.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistorialPage, { className: "HistorialPage", filePath: "src/app/pages/historial/historial.page.ts", lineNumber: 43 });
})();
export {
  HistorialPage
};
//# sourceMappingURL=historial.page-KYEXFSW2.js.map
