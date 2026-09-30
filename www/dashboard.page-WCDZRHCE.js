import {
  Component,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonRow,
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

// src/app/pages/dashboard/dashboard.page.ts
var DashboardPage = class _DashboardPage {
  static \u0275fac = function DashboardPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardPage, selectors: [["app-dashboard"]], decls: 203, vars: 1, consts: [[1, "ion-no-border"], ["slot", "start"], [2, "width", "28px", "height", "28px", "border-radius", "7px", "background", "var(--emerald)", "display", "flex", "align-items", "center", "justify-content", "center", "color", "#fff", "font-weight", "700", "font-size", "13px"], [1, "ion-padding"], [2, "display", "flex", "justify-content", "space-between", "align-items", "flex-end", "margin-bottom", "16px"], [2, "font-size", "18px", "font-weight", "600", "margin", "0"], [2, "font-size", "12.5px", "color", "var(--ink-soft)", "margin-top", "2px"], ["size", "small", "color", "primary", "routerLink", "/publicar"], ["slot", "start", "name", "add-outline"], [2, "padding", "0"], ["size", "6"], [1, "stat-card"], [1, "stat-label"], [1, "stat-value"], [1, "stat-delta"], [1, "stat-delta", "flat"], [2, "margin-top", "18px"], [2, "font-size", "15px"], [1, "chart-row"], [1, "bar-col"], [1, "bar", 2, "height", "44px"], [1, "bar-label"], [1, "bar", 2, "height", "60px"], [1, "bar", "peak", 2, "height", "84px"], [1, "bar", 2, "height", "54px"], ["presentation", "date", "locale", "es-CL", "value", "2026-09-02"], ["lines", "full"], ["slot", "start", 1, "req-avatar"], [2, "font-size", "13.5px", "font-weight", "600"], [2, "font-size", "12px", "color", "var(--ink-soft)"], ["side", "end"], ["color", "success"], ["color", "medium"], ["lines", "none"], [2, "font-size", "11px", "color", "var(--ink-soft)", "text-align", "center", "padding", "6px 0 14px"], [2, "display", "flex", "align-items", "baseline", "gap", "10px"], [1, "rating-score"], [2, "color", "var(--emerald)", "font-size", "13px", "font-weight", "600"], [2, "margin-top", "14px", "display", "flex", "flex-direction", "column", "gap", "5px"], [1, "rbar-row"], [1, "rbar-track"], [1, "rbar-fill", 2, "width", "82%"], [1, "rbar-fill", 2, "width", "13%"], [1, "rbar-fill", 2, "width", "4%"], [1, "rbar-fill", 2, "width", "1%"], [1, "rbar-fill", 2, "width", "0%"], ["slot", "start", 1, "listing-thumb"], ["name", "car-sport-outline", 2, "color", "var(--emerald)", "font-size", "18px"], ["slot", "end", "color", "tertiary", 2, "--background", "var(--emerald-pale)", "--color", "var(--emerald-dark)"], ["slot", "bottom", "color", "light"], ["tab", "buscar", "routerLink", "/home"], ["name", "search-outline"], ["tab", "panel", "routerLink", "/dashboard", 3, "selected"], ["name", "stats-chart"], ["tab", "reservas", "routerLink", "/historial"], ["name", "time-outline"], ["tab", "perfil", "routerLink", "/perfil"], ["name", "person-outline"]], template: function DashboardPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "div", 2);
      \u0275\u0275text(4, "P");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "ion-title");
      \u0275\u0275text(6, "Panel de anfitri\xF3n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ion-content")(8, "div", 3)(9, "div", 4)(10, "div")(11, "h1", 5);
      \u0275\u0275text(12, "Hola Benjam\xEDn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 6);
      \u0275\u0275text(14, "As\xED va tu espacio este mes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "ion-button", 7);
      \u0275\u0275element(16, "ion-icon", 8);
      \u0275\u0275text(17, " Publicar ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "ion-grid", 9)(19, "ion-row")(20, "ion-col", 10)(21, "div", 11)(22, "div", 12);
      \u0275\u0275text(23, "Ingresos este mes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 13);
      \u0275\u0275text(25, "$184.300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 14);
      \u0275\u0275text(27, "+18% vs agosto");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "ion-col", 10)(29, "div", 11)(30, "div", 12);
      \u0275\u0275text(31, "Reservas completadas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 13);
      \u0275\u0275text(33, "47");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 14);
      \u0275\u0275text(35, "+6 vs agosto");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "ion-col", 10)(37, "div", 11)(38, "div", 12);
      \u0275\u0275text(39, "Ocupaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 13);
      \u0275\u0275text(41, "68%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 15);
      \u0275\u0275text(43, "Similar a agosto");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "ion-col", 10)(45, "div", 11)(46, "div", 12);
      \u0275\u0275text(47, "Solicitudes pendientes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 13);
      \u0275\u0275text(49, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 15);
      \u0275\u0275text(51, "Requieren respuesta");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(52, "ion-card", 16)(53, "ion-card-header")(54, "ion-card-title", 17);
      \u0275\u0275text(55, "Ingresos por semana");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 18)(57, "div", 19);
      \u0275\u0275element(58, "div", 20);
      \u0275\u0275elementStart(59, "div", 21);
      \u0275\u0275text(60, "S1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 19);
      \u0275\u0275element(62, "div", 22);
      \u0275\u0275elementStart(63, "div", 21);
      \u0275\u0275text(64, "S2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 19);
      \u0275\u0275element(66, "div", 23);
      \u0275\u0275elementStart(67, "div", 21);
      \u0275\u0275text(68, "S3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 19);
      \u0275\u0275element(70, "div", 24);
      \u0275\u0275elementStart(71, "div", 21);
      \u0275\u0275text(72, "S4");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(73, "ion-card")(74, "ion-card-header")(75, "ion-card-title", 17);
      \u0275\u0275text(76, "Calendario de ocupaci\xF3n \xB7 Septiembre");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(77, "ion-datetime", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "ion-card")(79, "ion-card-header")(80, "ion-card-title", 17);
      \u0275\u0275text(81, "Solicitudes pendientes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "ion-list")(83, "ion-item-sliding")(84, "ion-item", 26)(85, "div", 27);
      \u0275\u0275text(86, "MJ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "ion-label")(88, "h3", 28);
      \u0275\u0275text(89, "Manuel Jara");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "p", 29);
      \u0275\u0275text(91, "Mi\xE9 9 sept \xB7 09:00 \u2014 13:00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "ion-item-options", 30)(93, "ion-item-option", 31);
      \u0275\u0275text(94, "Aceptar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "ion-item-option", 32);
      \u0275\u0275text(96, "Rechazar");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(97, "ion-item-sliding")(98, "ion-item", 26)(99, "div", 27);
      \u0275\u0275text(100, "CT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "ion-label")(102, "h3", 28);
      \u0275\u0275text(103, "Carolina Toro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "p", 29);
      \u0275\u0275text(105, "Jue 10 sept \xB7 14:00 \u2014 20:00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "ion-item-options", 30)(107, "ion-item-option", 31);
      \u0275\u0275text(108, "Aceptar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "ion-item-option", 32);
      \u0275\u0275text(110, "Rechazar");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "ion-item-sliding")(112, "ion-item", 33)(113, "div", 27);
      \u0275\u0275text(114, "RP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "ion-label")(116, "h3", 28);
      \u0275\u0275text(117, "Rodrigo Pe\xF1a");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "p", 29);
      \u0275\u0275text(119, "Vie 11 sept \xB7 08:00 \u2014 12:00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(120, "ion-item-options", 30)(121, "ion-item-option", 31);
      \u0275\u0275text(122, "Aceptar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "ion-item-option", 32);
      \u0275\u0275text(124, "Rechazar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(125, "p", 34);
      \u0275\u0275text(126, "Desliza cada solicitud para aceptar o rechazar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "ion-card")(128, "ion-card-header")(129, "ion-card-title", 17);
      \u0275\u0275text(130, "Calificaci\xF3n como anfitri\xF3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "ion-card-content")(132, "div", 35)(133, "div", 36);
      \u0275\u0275text(134, "4.8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div")(136, "div", 37);
      \u0275\u0275text(137, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div", 29);
      \u0275\u0275text(139, "126 rese\xF1as");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "div", 38)(141, "div", 39);
      \u0275\u0275text(142, "5 ");
      \u0275\u0275elementStart(143, "div", 40);
      \u0275\u0275element(144, "div", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div", 39);
      \u0275\u0275text(146, "4 ");
      \u0275\u0275elementStart(147, "div", 40);
      \u0275\u0275element(148, "div", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "div", 39);
      \u0275\u0275text(150, "3 ");
      \u0275\u0275elementStart(151, "div", 40);
      \u0275\u0275element(152, "div", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "div", 39);
      \u0275\u0275text(154, "2 ");
      \u0275\u0275elementStart(155, "div", 40);
      \u0275\u0275element(156, "div", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "div", 39);
      \u0275\u0275text(158, "1 ");
      \u0275\u0275elementStart(159, "div", 40);
      \u0275\u0275element(160, "div", 45);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(161, "ion-card")(162, "ion-card-header")(163, "ion-card-title", 17);
      \u0275\u0275text(164, "Tus espacios publicados");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "ion-list", 26)(166, "ion-item")(167, "div", 46);
      \u0275\u0275element(168, "ion-icon", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "ion-label")(170, "h3", 28);
      \u0275\u0275text(171, "Espacio en Av. Providencia 1650");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "p", 29);
      \u0275\u0275text(173, "$1.200 / hora \xB7 68% ocupaci\xF3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "ion-badge", 48);
      \u0275\u0275text(175, "Activo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "ion-item", 33)(177, "div", 46);
      \u0275\u0275element(178, "ion-icon", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "ion-label")(180, "h3", 28);
      \u0275\u0275text(181, "Patio calle Bilbao");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "p", 29);
      \u0275\u0275text(183, "$700 / hora \xB7 41% ocupaci\xF3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "ion-badge", 48);
      \u0275\u0275text(185, "Activo");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(186, "ion-tab-bar", 49)(187, "ion-tab-button", 50);
      \u0275\u0275element(188, "ion-icon", 51);
      \u0275\u0275elementStart(189, "ion-label");
      \u0275\u0275text(190, "Buscar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "ion-tab-button", 52);
      \u0275\u0275element(192, "ion-icon", 53);
      \u0275\u0275elementStart(193, "ion-label");
      \u0275\u0275text(194, "Panel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "ion-tab-button", 54);
      \u0275\u0275element(196, "ion-icon", 55);
      \u0275\u0275elementStart(197, "ion-label");
      \u0275\u0275text(198, "Reservas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "ion-tab-button", 56);
      \u0275\u0275element(200, "ion-icon", 57);
      \u0275\u0275elementStart(201, "ion-label");
      \u0275\u0275text(202, "Perfil");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(191);
      \u0275\u0275property("selected", true);
    }
  }, dependencies: [
    RouterLink,
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonDatetime,
    IonGrid,
    IonHeader,
    IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
    IonRow,
    IonTabBar,
    IonTabButton,
    IonTitle,
    IonToolbar
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 14px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--ink-soft);\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 700;\n}\n.stat-delta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--emerald-dark);\n  margin-top: 3px;\n  font-weight: 600;\n}\n.stat-delta.flat[_ngcontent-%COMP%] {\n  color: var(--ink-soft);\n}\n.chart-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  height: 100px;\n  margin-top: 6px;\n  padding: 0 16px 16px;\n}\n.bar-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.bar[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--emerald-pale);\n  border-radius: 6px 6px 0 0;\n}\n.bar.peak[_ngcontent-%COMP%] {\n  background: var(--emerald);\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--ink-soft);\n}\n.req-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--ash-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--emerald-dark);\n  flex-shrink: 0;\n}\n.rating-score[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  font-family: "Space Grotesk", sans-serif;\n}\n.rbar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: var(--ink-soft);\n}\n.rbar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: var(--bg-soft);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.rbar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--emerald);\n}\n.listing-thumb[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: var(--emerald-pale);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=dashboard.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardPage, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [
      RouterLink,
      IonBadge,
      IonButton,
      IonButtons,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardTitle,
      IonCol,
      IonContent,
      IonDatetime,
      IonGrid,
      IonHeader,
      IonIcon,
      IonItem,
      IonItemOption,
      IonItemOptions,
      IonItemSliding,
      IonLabel,
      IonList,
      IonRow,
      IonTabBar,
      IonTabButton,
      IonTitle,
      IonToolbar
    ], template: '<ion-header class="ion-no-border">\n    <ion-toolbar>\n      <ion-buttons slot="start"><div style="width:28px;height:28px;border-radius:7px;background:var(--emerald);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:13px;">P</div></ion-buttons>\n      <ion-title>Panel de anfitri\xF3n</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <div class="ion-padding">\n      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:16px;">\n        <div>\n          <h1 style="font-size:18px;font-weight:600;margin:0;">Hola Benjam\xEDn</h1>\n          <div style="font-size:12.5px;color:var(--ink-soft);margin-top:2px;">As\xED va tu espacio este mes</div>\n        </div>\n        <ion-button size="small" color="primary" routerLink="/publicar">\n          <ion-icon slot="start" name="add-outline"></ion-icon>\n          Publicar\n        </ion-button>\n      </div>\n\n      <ion-grid style="padding:0;">\n        <ion-row>\n          <ion-col size="6">\n            <div class="stat-card"><div class="stat-label">Ingresos este mes</div><div class="stat-value">$184.300</div><div class="stat-delta">+18% vs agosto</div></div>\n          </ion-col>\n          <ion-col size="6">\n            <div class="stat-card"><div class="stat-label">Reservas completadas</div><div class="stat-value">47</div><div class="stat-delta">+6 vs agosto</div></div>\n          </ion-col>\n          <ion-col size="6">\n            <div class="stat-card"><div class="stat-label">Ocupaci\xF3n</div><div class="stat-value">68%</div><div class="stat-delta flat">Similar a agosto</div></div>\n          </ion-col>\n          <ion-col size="6">\n            <div class="stat-card"><div class="stat-label">Solicitudes pendientes</div><div class="stat-value">3</div><div class="stat-delta flat">Requieren respuesta</div></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-card style="margin-top:18px;">\n        <ion-card-header><ion-card-title style="font-size:15px;">Ingresos por semana</ion-card-title></ion-card-header>\n        <div class="chart-row">\n          <div class="bar-col"><div class="bar" style="height:44px;"></div><div class="bar-label">S1</div></div>\n          <div class="bar-col"><div class="bar" style="height:60px;"></div><div class="bar-label">S2</div></div>\n          <div class="bar-col"><div class="bar peak" style="height:84px;"></div><div class="bar-label">S3</div></div>\n          <div class="bar-col"><div class="bar" style="height:54px;"></div><div class="bar-label">S4</div></div>\n        </div>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header><ion-card-title style="font-size:15px;">Calendario de ocupaci\xF3n \xB7 Septiembre</ion-card-title></ion-card-header>\n        <ion-datetime presentation="date" locale="es-CL" value="2026-09-02"></ion-datetime>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header><ion-card-title style="font-size:15px;">Solicitudes pendientes</ion-card-title></ion-card-header>\n        <ion-list>\n          <ion-item-sliding>\n            <ion-item lines="full">\n              <div class="req-avatar" slot="start">MJ</div>\n              <ion-label>\n                <h3 style="font-size:13.5px;font-weight:600;">Manuel Jara</h3>\n                <p style="font-size:12px;color:var(--ink-soft);">Mi\xE9 9 sept \xB7 09:00 \u2014 13:00</p>\n              </ion-label>\n            </ion-item>\n            <ion-item-options side="end">\n              <ion-item-option color="success">Aceptar</ion-item-option>\n              <ion-item-option color="medium">Rechazar</ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n          <ion-item-sliding>\n            <ion-item lines="full">\n              <div class="req-avatar" slot="start">CT</div>\n              <ion-label>\n                <h3 style="font-size:13.5px;font-weight:600;">Carolina Toro</h3>\n                <p style="font-size:12px;color:var(--ink-soft);">Jue 10 sept \xB7 14:00 \u2014 20:00</p>\n              </ion-label>\n            </ion-item>\n            <ion-item-options side="end">\n              <ion-item-option color="success">Aceptar</ion-item-option>\n              <ion-item-option color="medium">Rechazar</ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n          <ion-item-sliding>\n            <ion-item lines="none">\n              <div class="req-avatar" slot="start">RP</div>\n              <ion-label>\n                <h3 style="font-size:13.5px;font-weight:600;">Rodrigo Pe\xF1a</h3>\n                <p style="font-size:12px;color:var(--ink-soft);">Vie 11 sept \xB7 08:00 \u2014 12:00</p>\n              </ion-label>\n            </ion-item>\n            <ion-item-options side="end">\n              <ion-item-option color="success">Aceptar</ion-item-option>\n              <ion-item-option color="medium">Rechazar</ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n        <p style="font-size:11px;color:var(--ink-soft);text-align:center;padding:6px 0 14px;">Desliza cada solicitud para aceptar o rechazar</p>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header><ion-card-title style="font-size:15px;">Calificaci\xF3n como anfitri\xF3n</ion-card-title></ion-card-header>\n        <ion-card-content>\n          <div style="display:flex;align-items:baseline;gap:10px;">\n            <div class="rating-score">4.8</div>\n            <div><div style="color:var(--emerald);font-size:13px;font-weight:600;">\u2605\u2605\u2605\u2605\u2605</div><div style="font-size:12px;color:var(--ink-soft);">126 rese\xF1as</div></div>\n          </div>\n          <div style="margin-top:14px;display:flex;flex-direction:column;gap:5px;">\n            <div class="rbar-row">5 <div class="rbar-track"><div class="rbar-fill" style="width:82%;"></div></div></div>\n            <div class="rbar-row">4 <div class="rbar-track"><div class="rbar-fill" style="width:13%;"></div></div></div>\n            <div class="rbar-row">3 <div class="rbar-track"><div class="rbar-fill" style="width:4%;"></div></div></div>\n            <div class="rbar-row">2 <div class="rbar-track"><div class="rbar-fill" style="width:1%;"></div></div></div>\n            <div class="rbar-row">1 <div class="rbar-track"><div class="rbar-fill" style="width:0%;"></div></div></div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header><ion-card-title style="font-size:15px;">Tus espacios publicados</ion-card-title></ion-card-header>\n        <ion-list lines="full">\n          <ion-item>\n            <div class="listing-thumb" slot="start"><ion-icon name="car-sport-outline" style="color:var(--emerald);font-size:18px;"></ion-icon></div>\n            <ion-label>\n              <h3 style="font-size:13.5px;font-weight:600;">Espacio en Av. Providencia 1650</h3>\n              <p style="font-size:12px;color:var(--ink-soft);">$1.200 / hora \xB7 68% ocupaci\xF3n</p>\n            </ion-label>\n            <ion-badge slot="end" color="tertiary" style="--background:var(--emerald-pale);--color:var(--emerald-dark);">Activo</ion-badge>\n          </ion-item>\n          <ion-item lines="none">\n            <div class="listing-thumb" slot="start"><ion-icon name="car-sport-outline" style="color:var(--emerald);font-size:18px;"></ion-icon></div>\n            <ion-label>\n              <h3 style="font-size:13.5px;font-weight:600;">Patio calle Bilbao</h3>\n              <p style="font-size:12px;color:var(--ink-soft);">$700 / hora \xB7 41% ocupaci\xF3n</p>\n            </ion-label>\n            <ion-badge slot="end" color="tertiary" style="--background:var(--emerald-pale);--color:var(--emerald-dark);">Activo</ion-badge>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    </div>\n  </ion-content>\n\n  <ion-tab-bar slot="bottom" color="light">\n    <ion-tab-button tab="buscar" routerLink="/home"><ion-icon name="search-outline"></ion-icon><ion-label>Buscar</ion-label></ion-tab-button>\n    <ion-tab-button tab="panel" routerLink="/dashboard" [selected]="true"><ion-icon name="stats-chart"></ion-icon><ion-label>Panel</ion-label></ion-tab-button>\n    <ion-tab-button tab="reservas" routerLink="/historial"><ion-icon name="time-outline"></ion-icon><ion-label>Reservas</ion-label></ion-tab-button>\n    <ion-tab-button tab="perfil" routerLink="/perfil"><ion-icon name="person-outline"></ion-icon><ion-label>Perfil</ion-label></ion-tab-button>\n  </ion-tab-bar>\n', styles: ['/* src/app/pages/dashboard/dashboard.page.scss */\n:host {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1 {\n  font-family: "Space Grotesk", sans-serif;\n}\n.stat-card {\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 14px;\n}\n.stat-label {\n  font-size: 11px;\n  color: var(--ink-soft);\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n.stat-value {\n  font-size: 19px;\n  font-weight: 700;\n}\n.stat-delta {\n  font-size: 11px;\n  color: var(--emerald-dark);\n  margin-top: 3px;\n  font-weight: 600;\n}\n.stat-delta.flat {\n  color: var(--ink-soft);\n}\n.chart-row {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  height: 100px;\n  margin-top: 6px;\n  padding: 0 16px 16px;\n}\n.bar-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.bar {\n  width: 100%;\n  background: var(--emerald-pale);\n  border-radius: 6px 6px 0 0;\n}\n.bar.peak {\n  background: var(--emerald);\n}\n.bar-label {\n  font-size: 10px;\n  color: var(--ink-soft);\n}\n.req-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--ash-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--emerald-dark);\n  flex-shrink: 0;\n}\n.rating-score {\n  font-size: 32px;\n  font-weight: 700;\n  font-family: "Space Grotesk", sans-serif;\n}\n.rbar-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: var(--ink-soft);\n}\n.rbar-track {\n  flex: 1;\n  height: 6px;\n  background: var(--bg-soft);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.rbar-fill {\n  height: 100%;\n  background: var(--emerald);\n}\n.listing-thumb {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: var(--emerald-pale);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=dashboard.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardPage, { className: "DashboardPage", filePath: "src/app/pages/dashboard/dashboard.page.ts", lineNumber: 63 });
})();
export {
  DashboardPage
};
//# sourceMappingURL=dashboard.page-WCDZRHCE.js.map
