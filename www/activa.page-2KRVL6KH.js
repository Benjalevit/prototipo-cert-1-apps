import {
  Component,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
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

// src/app/pages/activa/activa.page.ts
var ActivaPage = class _ActivaPage {
  static \u0275fac = function ActivaPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActivaPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActivaPage, selectors: [["app-activa"]], decls: 80, vars: 0, consts: [[1, "ion-no-border"], ["color", "success"], ["size", "small", 2, "color", "#fff"], ["slot", "start"], ["defaultHref", "/home", "color", "dark"], ["size", "small"], [2, "margin-top", "0"], [1, "map-view"], [1, "map-grid"], [1, "route-line"], [1, "pin-me"], [1, "pin-dest-label"], [1, "ion-padding"], [2, "font-size", "15px", "font-weight", "600"], [2, "font-size", "13px", "color", "var(--ink-soft)", "margin-top", "2px"], ["expand", "block", "color", "primary", 2, "margin-top", "12px"], ["slot", "start", "name", "navigate-outline"], [1, "code-row"], [1, "label"], [1, "code"], ["size", "small", "fill", "outline", "color", "primary"], ["slot", "start", "name", "copy-outline"], [1, "ion-text-center"], [2, "font-size", "12px", "color", "var(--ink-soft)", "font-weight", "600", "letter-spacing", ".02em", "margin-bottom", "6px"], [1, "timer-ring"], ["width", "170", "height", "170", "viewBox", "0 0 180 180"], ["cx", "90", "cy", "90", "r", "78", "fill", "none", "stroke-width", "12", 1, "bg"], ["cx", "90", "cy", "90", "r", "78", "fill", "none", "stroke-width", "12", "stroke-dasharray", "490", "stroke-dashoffset", "165", 1, "fg"], [1, "timer-center"], [1, "time"], [1, "until"], [2, "display", "flex", "justify-content", "space-between", "font-size", "12.5px", "color", "var(--ink-soft)", "margin-bottom", "18px", "padding", "0 10px"], [2, "color", "var(--ink)"], ["expand", "block", "color", "primary"], ["expand", "block", "fill", "outline", "color", "medium"], ["lines", "none", 2, "margin-top", "10px", "--background", "var(--emerald-pale)", "border-radius", "8px"], ["slot", "start", "name", "information-circle-outline", "color", "success"], [1, "ion-text-wrap", 2, "font-size", "12px", "color", "var(--emerald-dark)", "text-align", "left"], [1, "info-row"], [2, "border", "none", "border-top", "1px solid var(--border)", "margin", "10px 0"]], template: function ActivaPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title", 2);
      \u0275\u0275text(3, "Est\xE1s estacionado \xB7 reserva PS-284719");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "ion-toolbar")(5, "ion-buttons", 3);
      \u0275\u0275element(6, "ion-back-button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "ion-title", 5);
      \u0275\u0275text(8, "Reserva activa");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "ion-content")(10, "ion-card", 6)(11, "div", 7);
      \u0275\u0275element(12, "div", 8)(13, "div", 9)(14, "div", 10);
      \u0275\u0275elementStart(15, "div", 11);
      \u0275\u0275text(16, "Tu estacionamiento");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "div", 13);
      \u0275\u0275text(19, "Estacionamiento subterr\xE1neo Av. Providencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 14);
      \u0275\u0275text(21, "Av. Providencia 1650, Providencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "ion-button", 15);
      \u0275\u0275element(23, "ion-icon", 16);
      \u0275\u0275text(24, " Navegar hasta el lugar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 17)(26, "div")(27, "div", 18);
      \u0275\u0275text(28, "C\xD3DIGO DE ACCESO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 19);
      \u0275\u0275text(30, "PS-284719");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "ion-button", 20);
      \u0275\u0275element(32, "ion-icon", 21);
      \u0275\u0275text(33, " Copiar ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "ion-card", 22)(35, "ion-card-content")(36, "div", 23);
      \u0275\u0275text(37, "TIEMPO RESTANTE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 24);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(39, "svg", 25);
      \u0275\u0275element(40, "circle", 26)(41, "circle", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(42, "div", 28)(43, "div", 29);
      \u0275\u0275text(44, "01:24:08");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 30);
      \u0275\u0275text(46, "hasta las 18:00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 31);
      \u0275\u0275text(48, " Inicio: ");
      \u0275\u0275elementStart(49, "b", 32);
      \u0275\u0275text(50, "14:00");
      \u0275\u0275elementEnd();
      \u0275\u0275text(51, " \xA0\xB7\xA0 Fin: ");
      \u0275\u0275elementStart(52, "b", 32);
      \u0275\u0275text(53, "18:00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "ion-button", 33);
      \u0275\u0275text(55, "Extender reserva");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "ion-button", 34);
      \u0275\u0275text(57, "Terminar reserva antes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "ion-item", 35);
      \u0275\u0275element(59, "ion-icon", 36);
      \u0275\u0275elementStart(60, "ion-label", 37);
      \u0275\u0275text(61, "Puedes extender el horario hasta 15 minutos antes del cierre, seg\xFAn disponibilidad.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(62, "ion-card")(63, "ion-card-content")(64, "div", 38)(65, "span");
      \u0275\u0275text(66, "Veh\xEDculo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "b");
      \u0275\u0275text(68, "Auto");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 38)(70, "span");
      \u0275\u0275text(71, "Fecha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "b");
      \u0275\u0275text(73, "Lunes 7 de septiembre");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(74, "hr", 39);
      \u0275\u0275elementStart(75, "div", 38)(76, "span");
      \u0275\u0275text(77, "Total pagado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "b");
      \u0275\u0275text(79, "$5.100");
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonTitle,
    IonToolbar
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-color-success:#0B8457;\n  --ion-color-success-contrast:#ffffff;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n}\n.map-view[_ngcontent-%COMP%] {\n  position: relative;\n  height: 220px;\n  background: var(--ash-light);\n  overflow: hidden;\n}\n.map-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(var(--border) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--border) 1px,\n      transparent 1px);\n  background-size: 32px 32px;\n  opacity: 0.5;\n}\n.route-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  left: 40px;\n  width: 150px;\n  height: 110px;\n  border: 2px dashed var(--emerald);\n  border-radius: 50%;\n  border-right-color: transparent;\n  border-bottom-color: transparent;\n  transform: rotate(20deg);\n}\n.pin-me[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 48px;\n  left: 36px;\n  width: 12px;\n  height: 12px;\n  background: var(--ink);\n  border: 3px solid #fff;\n  border-radius: 50%;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);\n}\n.pin-dest-label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  right: 60px;\n  background: var(--emerald);\n  color: #fff;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 4px 9px;\n  border-radius: 12px 12px 12px 2px;\n  white-space: nowrap;\n}\n.code-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 14px;\n  background: var(--bg-soft);\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.code-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--ash);\n  font-weight: 600;\n}\n.code-row[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  font-family: "Space Grotesk", sans-serif;\n  letter-spacing: 0.05em;\n}\n.timer-ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 170px;\n  height: 170px;\n  margin: 0 auto 14px;\n}\n.timer-ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.timer-ring[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  stroke: var(--bg-soft);\n}\n.timer-ring[_ngcontent-%COMP%]   .fg[_ngcontent-%COMP%] {\n  stroke: var(--emerald);\n  stroke-linecap: round;\n}\n.timer-center[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.timer-center[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  font-family: "Space Grotesk", sans-serif;\n}\n.timer-center[_ngcontent-%COMP%]   .until[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--ink-soft);\n  margin-top: 2px;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: var(--ink-soft);\n  margin: 8px 0;\n}\n.info-row[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--ink);\n  font-weight: 500;\n}\n/*# sourceMappingURL=activa.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivaPage, [{
    type: Component,
    args: [{ selector: "app-activa", standalone: true, imports: [
      IonBackButton,
      IonButton,
      IonButtons,
      IonCard,
      IonCardContent,
      IonContent,
      IonHeader,
      IonIcon,
      IonItem,
      IonLabel,
      IonTitle,
      IonToolbar
    ], template: '<ion-header class="ion-no-border">\n    <ion-toolbar color="success">\n      <ion-title size="small" style="color:#fff;">Est\xE1s estacionado \xB7 reserva PS-284719</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-buttons slot="start">\n        <ion-back-button defaultHref="/home" color="dark"></ion-back-button>\n      </ion-buttons>\n      <ion-title size="small">Reserva activa</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <ion-card style="margin-top:0;">\n      <div class="map-view">\n        <div class="map-grid"></div>\n        <div class="route-line"></div>\n        <div class="pin-me"></div>\n        <div class="pin-dest-label">Tu estacionamiento</div>\n      </div>\n      <div class="ion-padding">\n        <div style="font-size:15px;font-weight:600;">Estacionamiento subterr\xE1neo Av. Providencia</div>\n        <div style="font-size:13px;color:var(--ink-soft);margin-top:2px;">Av. Providencia 1650, Providencia</div>\n        <ion-button expand="block" color="primary" style="margin-top:12px;">\n          <ion-icon slot="start" name="navigate-outline"></ion-icon>\n          Navegar hasta el lugar\n        </ion-button>\n        <div class="code-row">\n          <div>\n            <div class="label">C\xD3DIGO DE ACCESO</div>\n            <div class="code">PS-284719</div>\n          </div>\n          <ion-button size="small" fill="outline" color="primary">\n            <ion-icon slot="start" name="copy-outline"></ion-icon>\n            Copiar\n          </ion-button>\n        </div>\n      </div>\n    </ion-card>\n\n    <ion-card class="ion-text-center">\n      <ion-card-content>\n        <div style="font-size:12px;color:var(--ink-soft);font-weight:600;letter-spacing:.02em;margin-bottom:6px;">TIEMPO RESTANTE</div>\n        <div class="timer-ring">\n          <svg width="170" height="170" viewBox="0 0 180 180">\n            <circle class="bg" cx="90" cy="90" r="78" fill="none" stroke-width="12"/>\n            <circle class="fg" cx="90" cy="90" r="78" fill="none" stroke-width="12" stroke-dasharray="490" stroke-dashoffset="165"/>\n          </svg>\n          <div class="timer-center">\n            <div class="time">01:24:08</div>\n            <div class="until">hasta las 18:00</div>\n          </div>\n        </div>\n        <div style="display:flex;justify-content:space-between;font-size:12.5px;color:var(--ink-soft);margin-bottom:18px;padding:0 10px;">\n          Inicio: <b style="color:var(--ink);">14:00</b> &nbsp;\xB7&nbsp; Fin: <b style="color:var(--ink);">18:00</b>\n        </div>\n\n        <ion-button expand="block" color="primary">Extender reserva</ion-button>\n        <ion-button expand="block" fill="outline" color="medium">Terminar reserva antes</ion-button>\n\n        <ion-item lines="none" style="margin-top:10px;--background:var(--emerald-pale);border-radius:8px;">\n          <ion-icon slot="start" name="information-circle-outline" color="success"></ion-icon>\n          <ion-label class="ion-text-wrap" style="font-size:12px;color:var(--emerald-dark);text-align:left;">Puedes extender el horario hasta 15 minutos antes del cierre, seg\xFAn disponibilidad.</ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <div class="info-row"><span>Veh\xEDculo</span><b>Auto</b></div>\n        <div class="info-row"><span>Fecha</span><b>Lunes 7 de septiembre</b></div>\n        <hr style="border:none;border-top:1px solid var(--border);margin:10px 0;">\n        <div class="info-row"><span>Total pagado</span><b>$5.100</b></div>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-content>\n', styles: ['/* src/app/pages/activa/activa.page.scss */\n:host {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-color-success:#0B8457;\n  --ion-color-success-contrast:#ffffff;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1,\nh2 {\n  font-family: "Space Grotesk", sans-serif;\n}\n.map-view {\n  position: relative;\n  height: 220px;\n  background: var(--ash-light);\n  overflow: hidden;\n}\n.map-grid {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(var(--border) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--border) 1px,\n      transparent 1px);\n  background-size: 32px 32px;\n  opacity: 0.5;\n}\n.route-line {\n  position: absolute;\n  top: 40px;\n  left: 40px;\n  width: 150px;\n  height: 110px;\n  border: 2px dashed var(--emerald);\n  border-radius: 50%;\n  border-right-color: transparent;\n  border-bottom-color: transparent;\n  transform: rotate(20deg);\n}\n.pin-me {\n  position: absolute;\n  top: 48px;\n  left: 36px;\n  width: 12px;\n  height: 12px;\n  background: var(--ink);\n  border: 3px solid #fff;\n  border-radius: 50%;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);\n}\n.pin-dest-label {\n  position: absolute;\n  bottom: 40px;\n  right: 60px;\n  background: var(--emerald);\n  color: #fff;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 4px 9px;\n  border-radius: 12px 12px 12px 2px;\n  white-space: nowrap;\n}\n.code-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 14px;\n  background: var(--bg-soft);\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.code-row .label {\n  font-size: 10.5px;\n  color: var(--ash);\n  font-weight: 600;\n}\n.code-row .code {\n  font-size: 16px;\n  font-weight: 600;\n  font-family: "Space Grotesk", sans-serif;\n  letter-spacing: 0.05em;\n}\n.timer-ring {\n  position: relative;\n  width: 170px;\n  height: 170px;\n  margin: 0 auto 14px;\n}\n.timer-ring svg {\n  transform: rotate(-90deg);\n}\n.timer-ring .bg {\n  stroke: var(--bg-soft);\n}\n.timer-ring .fg {\n  stroke: var(--emerald);\n  stroke-linecap: round;\n}\n.timer-center {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.timer-center .time {\n  font-size: 28px;\n  font-weight: 700;\n  font-family: "Space Grotesk", sans-serif;\n}\n.timer-center .until {\n  font-size: 11.5px;\n  color: var(--ink-soft);\n  margin-top: 2px;\n}\n.info-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: var(--ink-soft);\n  margin: 8px 0;\n}\n.info-row b {\n  color: var(--ink);\n  font-weight: 500;\n}\n/*# sourceMappingURL=activa.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActivaPage, { className: "ActivaPage", filePath: "src/app/pages/activa/activa.page.ts", lineNumber: 37 });
})();
export {
  ActivaPage
};
//# sourceMappingURL=activa.page-2KRVL6KH.js.map
