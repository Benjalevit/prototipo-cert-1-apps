import {
  Component,
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSegment,
  IonSegmentButton,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToggle,
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

// src/app/pages/perfil/perfil.page.ts
var PerfilPage = class _PerfilPage {
  static \u0275fac = function PerfilPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PerfilPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerfilPage, selectors: [["app-perfil"]], decls: 207, vars: 1, consts: [[1, "ion-no-border"], [1, "ion-padding"], [1, "ion-text-center"], [1, "avatar-big"], [2, "font-size", "15px", "font-weight", "600"], [2, "font-size", "12.5px", "color", "var(--ink-soft)", "margin-top", "2px"], [2, "font-size", "11px", "color", "var(--ash)", "margin-top", "8px"], [2, "border-radius", "12px", "overflow", "hidden", "border", "1px solid var(--border)"], ["button", "", "lines", "full", "color", "light"], ["slot", "start", "name", "person-outline", "color", "primary"], ["button", "", "lines", "full"], ["slot", "start", "name", "car-outline"], ["slot", "start", "name", "card-outline"], ["slot", "start", "name", "notifications-outline"], ["slot", "start", "name", "shield-checkmark-outline"], ["button", "", "lines", "none", "routerLink", "/dashboard"], ["slot", "start", "name", "stats-chart"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "font-size", "15px"], ["lines", "full"], ["position", "stacked"], ["value", "Benjam\xEDn Bravo"], ["value", "+56 9 8123 4567"], ["lines", "none"], ["value", "benjamin.bravo@correo.cl"], ["expand", "block", "fill", "clear", "color", "primary", "size", "small"], ["slot", "start", 1, "vehicle-icon"], ["name", "car-sport-outline", 2, "color", "var(--emerald)"], [2, "font-size", "13.5px", "font-weight", "600"], [2, "font-size", "12px", "color", "var(--ink-soft)"], ["slot", "end", "color", "tertiary", 2, "--background", "var(--emerald-pale)", "--color", "var(--emerald-dark)"], ["name", "bus-outline", 2, "color", "var(--emerald)"], ["slot", "start", "name", "add-outline"], ["slot", "start", 1, "pay-icon", 2, "font-size", "9px", "font-weight", "700"], ["value", "todas", 2, "padding", "0 16px 12px"], ["value", "todas"], ["value", "reservas"], ["value", "promos"], [2, "--background", "var(--bg-soft)"], ["slot", "start", 1, "notif-icon", "reminder"], ["name", "time-outline", "color", "primary"], [1, "ion-text-wrap"], [2, "font-size", "13.5px", "color", "var(--ink)"], [2, "font-size", "11px", "color", "var(--ink-soft)"], ["slot", "end", 2, "width", "7px", "height", "7px", "border-radius", "50%", "background", "var(--emerald)"], ["slot", "start", 1, "notif-icon", "confirm"], ["name", "checkmark-outline", "color", "primary"], ["slot", "start", 1, "notif-icon", "promo"], ["name", "pricetag-outline", "color", "medium"], ["slot", "end", "checked", "true", "color", "primary"], ["slot", "end", "color", "primary"], ["slot", "bottom", "color", "light"], ["tab", "buscar", "routerLink", "/home"], ["name", "search-outline"], ["tab", "publicar", "routerLink", "/publicar"], ["name", "add-circle-outline"], ["tab", "reservas", "routerLink", "/historial"], ["name", "time-outline"], ["tab", "perfil", "routerLink", "/perfil", 3, "selected"], ["name", "person"]], template: function PerfilPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      \u0275\u0275text(3, "Mi perfil");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "ion-content")(5, "div", 1)(6, "ion-card", 2)(7, "ion-card-content")(8, "div", 3);
      \u0275\u0275text(9, "BB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 4);
      \u0275\u0275text(11, "Benjam\xEDn Bravo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 5);
      \u0275\u0275text(13, "benjamin.bravo@correo.cl");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 6);
      \u0275\u0275text(15, "Miembro desde marzo 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "ion-list", 7)(17, "ion-item", 8);
      \u0275\u0275element(18, "ion-icon", 9);
      \u0275\u0275elementStart(19, "ion-label");
      \u0275\u0275text(20, "Datos personales");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "ion-item", 10);
      \u0275\u0275element(22, "ion-icon", 11);
      \u0275\u0275elementStart(23, "ion-label");
      \u0275\u0275text(24, "Veh\xEDculos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "ion-item", 10);
      \u0275\u0275element(26, "ion-icon", 12);
      \u0275\u0275elementStart(27, "ion-label");
      \u0275\u0275text(28, "M\xE9todos de pago");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "ion-item", 10);
      \u0275\u0275element(30, "ion-icon", 13);
      \u0275\u0275elementStart(31, "ion-label");
      \u0275\u0275text(32, "Notificaciones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "ion-item", 10);
      \u0275\u0275element(34, "ion-icon", 14);
      \u0275\u0275elementStart(35, "ion-label");
      \u0275\u0275text(36, "Seguridad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "ion-item", 15);
      \u0275\u0275element(38, "ion-icon", 16);
      \u0275\u0275elementStart(39, "ion-label");
      \u0275\u0275text(40, "Panel de anfitri\xF3n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "ion-card")(42, "ion-card-header", 17)(43, "ion-card-title", 18);
      \u0275\u0275text(44, "Datos personales");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "ion-list", 19)(46, "ion-item")(47, "ion-label", 20);
      \u0275\u0275text(48, "Nombre");
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "ion-input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "ion-item")(51, "ion-label", 20);
      \u0275\u0275text(52, "Tel\xE9fono");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "ion-input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "ion-item", 23)(55, "ion-label", 20);
      \u0275\u0275text(56, "Correo");
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "ion-input", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "ion-button", 25);
      \u0275\u0275text(59, "Guardar cambios");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "ion-card")(61, "ion-card-header")(62, "ion-card-title", 18);
      \u0275\u0275text(63, "Veh\xEDculos guardados");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "ion-list", 19)(65, "ion-item")(66, "div", 26);
      \u0275\u0275element(67, "ion-icon", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "ion-label")(69, "h3", 28);
      \u0275\u0275text(70, "Toyota Yaris gris");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p", 29);
      \u0275\u0275text(72, "Patente RXFT-32");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "ion-badge", 30);
      \u0275\u0275text(74, "Predeterminado");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "ion-item", 23)(76, "div", 26);
      \u0275\u0275element(77, "ion-icon", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "ion-label")(79, "h3", 28);
      \u0275\u0275text(80, "Suzuki Jimny negra");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p", 29);
      \u0275\u0275text(82, "Patente HJKL-89");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(83, "ion-button", 25);
      \u0275\u0275element(84, "ion-icon", 32);
      \u0275\u0275text(85, "Agregar veh\xEDculo ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "ion-card")(87, "ion-card-header")(88, "ion-card-title", 18);
      \u0275\u0275text(89, "M\xE9todos de pago");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "ion-list", 19)(91, "ion-item")(92, "div", 33);
      \u0275\u0275text(93, "VISA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "ion-label")(95, "h3", 28);
      \u0275\u0275text(96, "Visa terminada en 3456");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p", 29);
      \u0275\u0275text(98, "Vence 08/29");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "ion-badge", 30);
      \u0275\u0275text(100, "Predeterminada");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "ion-item", 23)(102, "div", 33);
      \u0275\u0275text(103, "WP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "ion-label")(105, "h3", 28);
      \u0275\u0275text(106, "Webpay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "p", 29);
      \u0275\u0275text(108, "Sin datos guardados");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(109, "ion-button", 25);
      \u0275\u0275element(110, "ion-icon", 32);
      \u0275\u0275text(111, "Agregar m\xE9todo ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "ion-card")(113, "ion-card-header")(114, "ion-card-title", 18);
      \u0275\u0275text(115, "Centro de notificaciones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "ion-segment", 34)(117, "ion-segment-button", 35)(118, "ion-label");
      \u0275\u0275text(119, "Todas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "ion-segment-button", 36)(121, "ion-label");
      \u0275\u0275text(122, "Reservas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "ion-segment-button", 37)(124, "ion-label");
      \u0275\u0275text(125, "Promociones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "ion-list", 19)(127, "ion-item", 38)(128, "div", 39);
      \u0275\u0275element(129, "ion-icon", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "ion-label", 41)(131, "p", 42);
      \u0275\u0275text(132, "Tu reserva en ");
      \u0275\u0275elementStart(133, "b");
      \u0275\u0275text(134, "Av. Providencia 1650");
      \u0275\u0275elementEnd();
      \u0275\u0275text(135, " termina en 30 minutos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "p", 43);
      \u0275\u0275text(137, "Hace 5 min");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(138, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "ion-item")(140, "div", 45);
      \u0275\u0275element(141, "ion-icon", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "ion-label", 41)(143, "p", 42);
      \u0275\u0275text(144, "Reserva confirmada para el ");
      \u0275\u0275elementStart(145, "b");
      \u0275\u0275text(146, "viernes 12 de septiembre");
      \u0275\u0275elementEnd();
      \u0275\u0275text(147, ", 09:00 \u2014 18:00.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "p", 43);
      \u0275\u0275text(149, "Hoy, 10:42");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(150, "ion-item")(151, "div", 47);
      \u0275\u0275element(152, "ion-icon", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "ion-label", 41)(154, "p", 42);
      \u0275\u0275text(155, "15% de descuento en tu pr\xF3xima reserva por ser usuario frecuente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "p", 43);
      \u0275\u0275text(157, "Ayer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(158, "ion-item", 23)(159, "div", 45);
      \u0275\u0275element(160, "ion-icon", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "ion-label", 41)(162, "p", 42);
      \u0275\u0275text(163, "Pago de ");
      \u0275\u0275elementStart(164, "b");
      \u0275\u0275text(165, "$5.100");
      \u0275\u0275elementEnd();
      \u0275\u0275text(166, " procesado correctamente.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "p", 43);
      \u0275\u0275text(168, "Lunes, 14:03");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(169, "ion-card")(170, "ion-card-header")(171, "ion-card-title", 18);
      \u0275\u0275text(172, "Preferencias de notificaci\xF3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "ion-list", 19)(174, "ion-item")(175, "ion-label");
      \u0275\u0275text(176, "Recordatorios de reserva");
      \u0275\u0275elementEnd();
      \u0275\u0275element(177, "ion-toggle", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "ion-item")(179, "ion-label");
      \u0275\u0275text(180, "Confirmaciones de pago");
      \u0275\u0275elementEnd();
      \u0275\u0275element(181, "ion-toggle", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "ion-item")(183, "ion-label");
      \u0275\u0275text(184, "Promociones y novedades");
      \u0275\u0275elementEnd();
      \u0275\u0275element(185, "ion-toggle", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "ion-item", 23)(187, "ion-label");
      \u0275\u0275text(188, "Notificaciones por correo");
      \u0275\u0275elementEnd();
      \u0275\u0275element(189, "ion-toggle", 49);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(190, "ion-tab-bar", 51)(191, "ion-tab-button", 52);
      \u0275\u0275element(192, "ion-icon", 53);
      \u0275\u0275elementStart(193, "ion-label");
      \u0275\u0275text(194, "Buscar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "ion-tab-button", 54);
      \u0275\u0275element(196, "ion-icon", 55);
      \u0275\u0275elementStart(197, "ion-label");
      \u0275\u0275text(198, "Publicar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "ion-tab-button", 56);
      \u0275\u0275element(200, "ion-icon", 57);
      \u0275\u0275elementStart(201, "ion-label");
      \u0275\u0275text(202, "Reservas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "ion-tab-button", 58);
      \u0275\u0275element(204, "ion-icon", 59);
      \u0275\u0275elementStart(205, "ion-label");
      \u0275\u0275text(206, "Perfil");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(203);
      \u0275\u0275property("selected", true);
    }
  }, dependencies: [
    RouterLink,
    IonBadge,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonSegment,
    IonSegmentButton,
    IonTabBar,
    IonTabButton,
    IonTitle,
    IonToggle,
    IonToolbar
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\n.avatar-big[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: var(--emerald-pale);\n  color: var(--emerald-dark);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0 auto 10px;\n  font-family: "Space Grotesk", sans-serif;\n}\n.vehicle-icon[_ngcontent-%COMP%], \n.pay-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: var(--emerald-pale);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.notif-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.notif-icon.reminder[_ngcontent-%COMP%], \n.notif-icon.confirm[_ngcontent-%COMP%] {\n  background: var(--emerald-pale);\n}\n.notif-icon.promo[_ngcontent-%COMP%] {\n  background: var(--ash-light);\n}\n/*# sourceMappingURL=perfil.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerfilPage, [{
    type: Component,
    args: [{ selector: "app-perfil", standalone: true, imports: [
      RouterLink,
      IonBadge,
      IonButton,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardTitle,
      IonContent,
      IonHeader,
      IonIcon,
      IonInput,
      IonItem,
      IonLabel,
      IonList,
      IonSegment,
      IonSegmentButton,
      IonTabBar,
      IonTabButton,
      IonTitle,
      IonToggle,
      IonToolbar
    ], template: '<ion-header class="ion-no-border">\n    <ion-toolbar>\n      <ion-title>Mi perfil</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <div class="ion-padding">\n\n      <ion-card class="ion-text-center">\n        <ion-card-content>\n          <div class="avatar-big">BB</div>\n          <div style="font-size:15px;font-weight:600;">Benjam\xEDn Bravo</div>\n          <div style="font-size:12.5px;color:var(--ink-soft);margin-top:2px;">benjamin.bravo@correo.cl</div>\n          <div style="font-size:11px;color:var(--ash);margin-top:8px;">Miembro desde marzo 2025</div>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-list style="border-radius:12px;overflow:hidden;border:1px solid var(--border);">\n        <ion-item button lines="full" color="light"><ion-icon slot="start" name="person-outline" color="primary"></ion-icon><ion-label>Datos personales</ion-label></ion-item>\n        <ion-item button lines="full"><ion-icon slot="start" name="car-outline"></ion-icon><ion-label>Veh\xEDculos</ion-label></ion-item>\n        <ion-item button lines="full"><ion-icon slot="start" name="card-outline"></ion-icon><ion-label>M\xE9todos de pago</ion-label></ion-item>\n        <ion-item button lines="full"><ion-icon slot="start" name="notifications-outline"></ion-icon><ion-label>Notificaciones</ion-label></ion-item>\n        <ion-item button lines="full"><ion-icon slot="start" name="shield-checkmark-outline"></ion-icon><ion-label>Seguridad</ion-label></ion-item>\n        <ion-item button lines="none" routerLink="/dashboard"><ion-icon slot="start" name="stats-chart"></ion-icon><ion-label>Panel de anfitri\xF3n</ion-label></ion-item>\n      </ion-list>\n\n      <ion-card>\n        <ion-card-header style="display:flex;justify-content:space-between;align-items:center;">\n          <ion-card-title style="font-size:15px;">Datos personales</ion-card-title>\n        </ion-card-header>\n        <ion-list lines="full">\n          <ion-item><ion-label position="stacked">Nombre</ion-label><ion-input value="Benjam\xEDn Bravo"></ion-input></ion-item>\n          <ion-item><ion-label position="stacked">Tel\xE9fono</ion-label><ion-input value="+56 9 8123 4567"></ion-input></ion-item>\n          <ion-item lines="none"><ion-label position="stacked">Correo</ion-label><ion-input value="benjamin.bravo@correo.cl"></ion-input></ion-item>\n        </ion-list>\n        <ion-button expand="block" fill="clear" color="primary" size="small">Guardar cambios</ion-button>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header><ion-card-title style="font-size:15px;">Veh\xEDculos guardados</ion-card-title></ion-card-header>\n        <ion-list lines="full">\n          <ion-item>\n            <div class="vehicle-icon" slot="start"><ion-icon name="car-sport-outline" style="color:var(--emerald);"></ion-icon></div>\n            <ion-label><h3 style="font-size:13.5px;font-weight:600;">Toyota Yaris gris</h3><p style="font-size:12px;color:var(--ink-soft);">Patente RXFT-32</p></ion-label>\n            <ion-badge slot="end" color="tertiary" style="--background:var(--emerald-pale);--color:var(--emerald-dark);">Predeterminado</ion-badge>\n          </ion-item>\n          <ion-item lines="none">\n            <div class="vehicle-icon" slot="start"><ion-icon name="bus-outline" style="color:var(--emerald);"></ion-icon></div>\n            <ion-label><h3 style="font-size:13.5px;font-weight:600;">Suzuki Jimny negra</h3><p style="font-size:12px;color:var(--ink-soft);">Patente HJKL-89</p></ion-label>\n          </ion-item>\n        </ion-list>\n        <ion-button expand="block" fill="clear" color="primary" size="small">\n          <ion-icon slot="start" name="add-outline"></ion-icon>Agregar veh\xEDculo\n        </ion-button>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header><ion-card-title style="font-size:15px;">M\xE9todos de pago</ion-card-title></ion-card-header>\n        <ion-list lines="full">\n          <ion-item>\n            <div class="pay-icon" slot="start" style="font-size:9px;font-weight:700;">VISA</div>\n            <ion-label><h3 style="font-size:13.5px;font-weight:600;">Visa terminada en 3456</h3><p style="font-size:12px;color:var(--ink-soft);">Vence 08/29</p></ion-label>\n            <ion-badge slot="end" color="tertiary" style="--background:var(--emerald-pale);--color:var(--emerald-dark);">Predeterminada</ion-badge>\n          </ion-item>\n          <ion-item lines="none">\n            <div class="pay-icon" slot="start" style="font-size:9px;font-weight:700;">WP</div>\n            <ion-label><h3 style="font-size:13.5px;font-weight:600;">Webpay</h3><p style="font-size:12px;color:var(--ink-soft);">Sin datos guardados</p></ion-label>\n          </ion-item>\n        </ion-list>\n        <ion-button expand="block" fill="clear" color="primary" size="small">\n          <ion-icon slot="start" name="add-outline"></ion-icon>Agregar m\xE9todo\n        </ion-button>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header><ion-card-title style="font-size:15px;">Centro de notificaciones</ion-card-title></ion-card-header>\n        <ion-segment value="todas" style="padding:0 16px 12px;">\n          <ion-segment-button value="todas"><ion-label>Todas</ion-label></ion-segment-button>\n          <ion-segment-button value="reservas"><ion-label>Reservas</ion-label></ion-segment-button>\n          <ion-segment-button value="promos"><ion-label>Promociones</ion-label></ion-segment-button>\n        </ion-segment>\n\n        <ion-list lines="full">\n          <ion-item style="--background:var(--bg-soft);">\n            <div class="notif-icon reminder" slot="start"><ion-icon name="time-outline" color="primary"></ion-icon></div>\n            <ion-label class="ion-text-wrap"><p style="font-size:13.5px;color:var(--ink);">Tu reserva en <b>Av. Providencia 1650</b> termina en 30 minutos.</p><p style="font-size:11px;color:var(--ink-soft);">Hace 5 min</p></ion-label>\n            <div slot="end" style="width:7px;height:7px;border-radius:50%;background:var(--emerald);"></div>\n          </ion-item>\n          <ion-item>\n            <div class="notif-icon confirm" slot="start"><ion-icon name="checkmark-outline" color="primary"></ion-icon></div>\n            <ion-label class="ion-text-wrap"><p style="font-size:13.5px;color:var(--ink);">Reserva confirmada para el <b>viernes 12 de septiembre</b>, 09:00 \u2014 18:00.</p><p style="font-size:11px;color:var(--ink-soft);">Hoy, 10:42</p></ion-label>\n          </ion-item>\n          <ion-item>\n            <div class="notif-icon promo" slot="start"><ion-icon name="pricetag-outline" color="medium"></ion-icon></div>\n            <ion-label class="ion-text-wrap"><p style="font-size:13.5px;color:var(--ink);">15% de descuento en tu pr\xF3xima reserva por ser usuario frecuente.</p><p style="font-size:11px;color:var(--ink-soft);">Ayer</p></ion-label>\n          </ion-item>\n          <ion-item lines="none">\n            <div class="notif-icon confirm" slot="start"><ion-icon name="checkmark-outline" color="primary"></ion-icon></div>\n            <ion-label class="ion-text-wrap"><p style="font-size:13.5px;color:var(--ink);">Pago de <b>$5.100</b> procesado correctamente.</p><p style="font-size:11px;color:var(--ink-soft);">Lunes, 14:03</p></ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header><ion-card-title style="font-size:15px;">Preferencias de notificaci\xF3n</ion-card-title></ion-card-header>\n        <ion-list lines="full">\n          <ion-item><ion-label>Recordatorios de reserva</ion-label><ion-toggle slot="end" checked="true" color="primary"></ion-toggle></ion-item>\n          <ion-item><ion-label>Confirmaciones de pago</ion-label><ion-toggle slot="end" checked="true" color="primary"></ion-toggle></ion-item>\n          <ion-item><ion-label>Promociones y novedades</ion-label><ion-toggle slot="end" color="primary"></ion-toggle></ion-item>\n          <ion-item lines="none"><ion-label>Notificaciones por correo</ion-label><ion-toggle slot="end" checked="true" color="primary"></ion-toggle></ion-item>\n        </ion-list>\n      </ion-card>\n\n    </div>\n  </ion-content>\n\n  <ion-tab-bar slot="bottom" color="light">\n    <ion-tab-button tab="buscar" routerLink="/home"><ion-icon name="search-outline"></ion-icon><ion-label>Buscar</ion-label></ion-tab-button>\n    <ion-tab-button tab="publicar" routerLink="/publicar"><ion-icon name="add-circle-outline"></ion-icon><ion-label>Publicar</ion-label></ion-tab-button>\n    <ion-tab-button tab="reservas" routerLink="/historial"><ion-icon name="time-outline"></ion-icon><ion-label>Reservas</ion-label></ion-tab-button>\n    <ion-tab-button tab="perfil" routerLink="/perfil" [selected]="true"><ion-icon name="person"></ion-icon><ion-label>Perfil</ion-label></ion-tab-button>\n  </ion-tab-bar>\n', styles: ['/* src/app/pages/perfil/perfil.page.scss */\n:host {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\n.avatar-big {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: var(--emerald-pale);\n  color: var(--emerald-dark);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0 auto 10px;\n  font-family: "Space Grotesk", sans-serif;\n}\n.vehicle-icon,\n.pay-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: var(--emerald-pale);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.notif-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.notif-icon.reminder,\n.notif-icon.confirm {\n  background: var(--emerald-pale);\n}\n.notif-icon.promo {\n  background: var(--ash-light);\n}\n/*# sourceMappingURL=perfil.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerfilPage, { className: "PerfilPage", filePath: "src/app/pages/perfil/perfil.page.ts", lineNumber: 55 });
})();
export {
  PerfilPage
};
//# sourceMappingURL=perfil.page-3PXPICR5.js.map
