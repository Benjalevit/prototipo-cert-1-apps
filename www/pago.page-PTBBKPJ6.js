import {
  Component,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonProgressBar,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
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

// src/app/pages/pago/pago.page.ts
var PagoPage = class _PagoPage {
  static \u0275fac = function PagoPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagoPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagoPage, selectors: [["app-pago"]], decls: 193, vars: 0, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/reserva", "color", "dark"], ["size", "small"], ["value", "1", "color", "primary"], [1, "ion-padding"], [2, "font-size", "12.5px", "color", "var(--ink-soft)"], [2, "font-size", "20px", "font-weight", "600", "margin", "2px 0 18px"], ["value", "tarjeta", "color", "primary"], ["value", "tarjeta"], ["name", "card-outline"], ["value", "transferencia"], ["name", "swap-horizontal-outline"], ["value", "webpay"], ["name", "document-text-outline"], ["lines", "full"], ["position", "stacked"], ["value", "4051 8842 0192 3456", "inputmode", "numeric"], ["value", "08 / 29"], ["lines", "none"], ["value", "123", "type", "password"], [2, "display", "flex", "gap", "6px", "padding", "0 16px 14px"], ["outline", "", 2, "font-size", "10px", "height", "20px"], ["value", "Benjam\xEDn Bravo"], [2, "font-size", "15px"], ["value", "Boleta electr\xF3nica a mi nombre"], [1, "summary-row"], [2, "border", "none", "border-top", "1px solid var(--border)", "margin", "10px 0"], [1, "summary-total"], ["slot", "start", "name", "lock-closed-outline", "color", "medium"], [1, "ion-text-wrap", 2, "font-size", "12px", "color", "var(--ink-soft)"], [2, "border", "none", "border-top", "1px dashed var(--border)", "margin", "34px 0 20px"], [2, "text-align", "center", "font-size", "11px", "font-weight", "600", "color", "var(--ash)", "letter-spacing", ".03em", "margin-bottom", "16px"], [1, "confirm-card"], [1, "confirm-check"], ["name", "checkmark", 2, "color", "#fff", "font-size", "22px"], [2, "font-size", "18px", "font-weight", "600", "margin", "0 0 4px"], [2, "font-size", "13px", "color", "var(--ink-soft)", "margin", "0 0 14px"], [2, "text-align", "left"], ["size", "6"], [2, "font-size", "10.5px", "color", "var(--ash)", "font-weight", "600"], [2, "font-size", "13px"], [1, "qr-box"], [1, "qr-grid"], [1, "qr-cell", "on"], [1, "qr-cell"], [2, "font-size", "11px", "color", "var(--ink-soft)"], [2, "display", "block", "font-size", "15px", "font-family", "'Space Grotesk',sans-serif", "letter-spacing", ".06em"], [2, "display", "flex", "gap", "8px", "margin-top", "18px"], ["expand", "block", "fill", "solid", "color", "primary", "size", "small"], ["expand", "block", "fill", "outline", "color", "medium", "size", "small"], [1, "ion-padding-horizontal", "ion-padding-bottom"], ["expand", "block", "color", "primary", "routerLink", "/activa"]], template: function PagoPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      \u0275\u0275element(3, "ion-back-button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title", 3);
      \u0275\u0275text(5, "Pago");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(6, "ion-progress-bar", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "ion-content")(8, "div", 5)(9, "div", 6);
      \u0275\u0275text(10, "Estacionamiento subterr\xE1neo Av. Providencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h1", 7);
      \u0275\u0275text(12, "Elige tu m\xE9todo de pago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ion-segment", 8)(14, "ion-segment-button", 9);
      \u0275\u0275element(15, "ion-icon", 10);
      \u0275\u0275elementStart(16, "ion-label");
      \u0275\u0275text(17, "Tarjeta");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "ion-segment-button", 11);
      \u0275\u0275element(19, "ion-icon", 12);
      \u0275\u0275elementStart(20, "ion-label");
      \u0275\u0275text(21, "Transferencia");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "ion-segment-button", 13);
      \u0275\u0275element(23, "ion-icon", 14);
      \u0275\u0275elementStart(24, "ion-label");
      \u0275\u0275text(25, "Webpay");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "ion-card")(27, "ion-list", 15)(28, "ion-item")(29, "ion-label", 16);
      \u0275\u0275text(30, "N\xFAmero de tarjeta");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "ion-input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "ion-item")(33, "ion-label", 16);
      \u0275\u0275text(34, "Vencimiento");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "ion-input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "ion-item", 19)(37, "ion-label", 16);
      \u0275\u0275text(38, "CVV");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "ion-input", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 21)(41, "ion-chip", 22);
      \u0275\u0275text(42, "Visa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "ion-chip", 22);
      \u0275\u0275text(44, "Mastercard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "ion-chip", 22);
      \u0275\u0275text(46, "Redcompra");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "ion-item", 19)(48, "ion-label", 16);
      \u0275\u0275text(49, "Nombre del titular");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "ion-input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "ion-card")(52, "ion-card-header")(53, "ion-card-title", 24);
      \u0275\u0275text(54, "Facturaci\xF3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "ion-item", 19)(56, "ion-label", 16);
      \u0275\u0275text(57, "RUT o boleta");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "ion-input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "ion-card")(60, "ion-card-header")(61, "ion-card-title", 24);
      \u0275\u0275text(62, "Resumen de tu reserva");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "ion-card-content")(64, "div", 26)(65, "span");
      \u0275\u0275text(66, "Fecha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "b");
      \u0275\u0275text(68, "Lun 7 de septiembre");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 26)(70, "span");
      \u0275\u0275text(71, "Horario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "b");
      \u0275\u0275text(73, "14:00 \u2014 18:00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 26)(75, "span");
      \u0275\u0275text(76, "Veh\xEDculo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "b");
      \u0275\u0275text(78, "Auto");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(79, "hr", 27);
      \u0275\u0275elementStart(80, "div", 26)(81, "span");
      \u0275\u0275text(82, "4 horas \xD7 $1.200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "b");
      \u0275\u0275text(84, "$4.800");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 26)(86, "span");
      \u0275\u0275text(87, "Tarifa de servicio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "b");
      \u0275\u0275text(89, "$300");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(90, "hr", 27);
      \u0275\u0275elementStart(91, "div", 28)(92, "span");
      \u0275\u0275text(93, "Total a pagar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "span");
      \u0275\u0275text(95, "$5.100");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(96, "ion-item", 19);
      \u0275\u0275element(97, "ion-icon", 29);
      \u0275\u0275elementStart(98, "ion-label", 30);
      \u0275\u0275text(99, "Pago seguro y encriptado");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(100, "hr", 31);
      \u0275\u0275elementStart(101, "div", 32);
      \u0275\u0275text(102, "VISTA POSTERIOR AL PAGO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 33)(104, "div", 34);
      \u0275\u0275element(105, "ion-icon", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "h2", 36);
      \u0275\u0275text(107, "\xA1Reserva confirmada!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "p", 37);
      \u0275\u0275text(109, "Muestra este c\xF3digo al llegar o escanea el QR en el acceso del estacionamiento.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "ion-grid", 38)(111, "ion-row")(112, "ion-col", 39)(113, "div", 40);
      \u0275\u0275text(114, "LUGAR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 41);
      \u0275\u0275text(116, "Av. Providencia");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "ion-col", 39)(118, "div", 40);
      \u0275\u0275text(119, "FECHA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 41);
      \u0275\u0275text(121, "Lun 7 sept");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "ion-col", 39)(123, "div", 40);
      \u0275\u0275text(124, "HORARIO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "div", 41);
      \u0275\u0275text(126, "14:00 \u2014 18:00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "ion-col", 39)(128, "div", 40);
      \u0275\u0275text(129, "TOTAL PAGADO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 41);
      \u0275\u0275text(131, "$5.100");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(132, "div", 42)(133, "div", 43);
      \u0275\u0275element(134, "div", 44)(135, "div", 44)(136, "div", 44)(137, "div", 45)(138, "div", 44)(139, "div", 45)(140, "div", 44)(141, "div", 44)(142, "div", 44)(143, "div", 44)(144, "div", 45)(145, "div", 44)(146, "div", 45)(147, "div", 44)(148, "div", 45)(149, "div", 44)(150, "div", 45)(151, "div", 44)(152, "div", 44)(153, "div", 45)(154, "div", 44)(155, "div", 44)(156, "div", 45)(157, "div", 44)(158, "div", 44)(159, "div", 45)(160, "div", 44)(161, "div", 45)(162, "div", 45)(163, "div", 45)(164, "div", 44)(165, "div", 44)(166, "div", 45)(167, "div", 45)(168, "div", 44)(169, "div", 45)(170, "div", 44)(171, "div", 44)(172, "div", 44)(173, "div", 45)(174, "div", 44)(175, "div", 45)(176, "div", 44)(177, "div", 44)(178, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "div", 46);
      \u0275\u0275text(180, "C\xF3digo de acceso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "b", 47);
      \u0275\u0275text(182, "PS-284719");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "div", 48)(184, "ion-button", 49);
      \u0275\u0275text(185, "Agregar al calendario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "ion-button", 50);
      \u0275\u0275text(187, "Descargar comprobante");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(188, "ion-footer", 0)(189, "ion-toolbar")(190, "div", 51)(191, "ion-button", 52);
      \u0275\u0275text(192, "Pagar $5.100");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [
    RouterLink,
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonChip,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonProgressBar,
    IonRow,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: var(--ink-soft);\n  margin: 6px 0;\n}\n.summary-row[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--ink);\n  font-weight: 500;\n}\n.summary-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n  font-weight: 600;\n}\n.summary-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--emerald-dark);\n}\n.confirm-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  background: var(--bg-soft);\n  padding: 24px;\n  text-align: center;\n}\n.confirm-check[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--emerald);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 12px;\n}\n.qr-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 16px;\n  margin: 16px auto 0;\n  max-width: 190px;\n}\n.qr-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(9, 1fr);\n  gap: 2px;\n  width: 150px;\n  height: 150px;\n  margin: 0 auto 10px;\n}\n.qr-cell[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.qr-cell.on[_ngcontent-%COMP%] {\n  background: var(--ink);\n}\n/*# sourceMappingURL=pago.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagoPage, [{
    type: Component,
    args: [{ selector: "app-pago", standalone: true, imports: [
      RouterLink,
      IonBackButton,
      IonButton,
      IonButtons,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardTitle,
      IonChip,
      IonCol,
      IonContent,
      IonFooter,
      IonGrid,
      IonHeader,
      IonIcon,
      IonInput,
      IonItem,
      IonLabel,
      IonList,
      IonProgressBar,
      IonRow,
      IonSegment,
      IonSegmentButton,
      IonTitle,
      IonToolbar
    ], template: `<ion-header class="ion-no-border">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button defaultHref="/reserva" color="dark"></ion-back-button>
      </ion-buttons>
      <ion-title size="small">Pago</ion-title>
    </ion-toolbar>
    <ion-progress-bar value="1" color="primary"></ion-progress-bar>
  </ion-header>

  <ion-content>
    <div class="ion-padding">
      <div style="font-size:12.5px;color:var(--ink-soft);">Estacionamiento subterr\xE1neo Av. Providencia</div>
      <h1 style="font-size:20px;font-weight:600;margin:2px 0 18px;">Elige tu m\xE9todo de pago</h1>

      <ion-segment value="tarjeta" color="primary">
        <ion-segment-button value="tarjeta">
          <ion-icon name="card-outline"></ion-icon>
          <ion-label>Tarjeta</ion-label>
        </ion-segment-button>
        <ion-segment-button value="transferencia">
          <ion-icon name="swap-horizontal-outline"></ion-icon>
          <ion-label>Transferencia</ion-label>
        </ion-segment-button>
        <ion-segment-button value="webpay">
          <ion-icon name="document-text-outline"></ion-icon>
          <ion-label>Webpay</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-card>
        <ion-list lines="full">
          <ion-item>
            <ion-label position="stacked">N\xFAmero de tarjeta</ion-label>
            <ion-input value="4051 8842 0192 3456" inputmode="numeric"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Vencimiento</ion-label>
            <ion-input value="08 / 29"></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked">CVV</ion-label>
            <ion-input value="123" type="password"></ion-input>
          </ion-item>
        </ion-list>
        <div style="display:flex;gap:6px;padding:0 16px 14px;">
          <ion-chip outline style="font-size:10px;height:20px;">Visa</ion-chip>
          <ion-chip outline style="font-size:10px;height:20px;">Mastercard</ion-chip>
          <ion-chip outline style="font-size:10px;height:20px;">Redcompra</ion-chip>
        </div>
        <ion-item lines="none">
          <ion-label position="stacked">Nombre del titular</ion-label>
          <ion-input value="Benjam\xEDn Bravo"></ion-input>
        </ion-item>
      </ion-card>

      <ion-card>
        <ion-card-header><ion-card-title style="font-size:15px;">Facturaci\xF3n</ion-card-title></ion-card-header>
        <ion-item lines="none">
          <ion-label position="stacked">RUT o boleta</ion-label>
          <ion-input value="Boleta electr\xF3nica a mi nombre"></ion-input>
        </ion-item>
      </ion-card>

      <ion-card>
        <ion-card-header><ion-card-title style="font-size:15px;">Resumen de tu reserva</ion-card-title></ion-card-header>
        <ion-card-content>
          <div class="summary-row"><span>Fecha</span><b>Lun 7 de septiembre</b></div>
          <div class="summary-row"><span>Horario</span><b>14:00 \u2014 18:00</b></div>
          <div class="summary-row"><span>Veh\xEDculo</span><b>Auto</b></div>
          <hr style="border:none;border-top:1px solid var(--border);margin:10px 0;">
          <div class="summary-row"><span>4 horas \xD7 $1.200</span><b>$4.800</b></div>
          <div class="summary-row"><span>Tarifa de servicio</span><b>$300</b></div>
          <hr style="border:none;border-top:1px solid var(--border);margin:10px 0;">
          <div class="summary-total"><span>Total a pagar</span><span>$5.100</span></div>
        </ion-card-content>
      </ion-card>

      <ion-item lines="none">
        <ion-icon slot="start" name="lock-closed-outline" color="medium"></ion-icon>
        <ion-label class="ion-text-wrap" style="font-size:12px;color:var(--ink-soft);">Pago seguro y encriptado</ion-label>
      </ion-item>

      <hr style="border:none;border-top:1px dashed var(--border);margin:34px 0 20px;">
      <div style="text-align:center;font-size:11px;font-weight:600;color:var(--ash);letter-spacing:.03em;margin-bottom:16px;">VISTA POSTERIOR AL PAGO</div>

      <div class="confirm-card">
        <div class="confirm-check"><ion-icon name="checkmark" style="color:#fff;font-size:22px;"></ion-icon></div>
        <h2 style="font-size:18px;font-weight:600;margin:0 0 4px;">\xA1Reserva confirmada!</h2>
        <p style="font-size:13px;color:var(--ink-soft);margin:0 0 14px;">Muestra este c\xF3digo al llegar o escanea el QR en el acceso del estacionamiento.</p>

        <ion-grid style="text-align:left;">
          <ion-row>
            <ion-col size="6"><div style="font-size:10.5px;color:var(--ash);font-weight:600;">LUGAR</div><div style="font-size:13px;">Av. Providencia</div></ion-col>
            <ion-col size="6"><div style="font-size:10.5px;color:var(--ash);font-weight:600;">FECHA</div><div style="font-size:13px;">Lun 7 sept</div></ion-col>
            <ion-col size="6"><div style="font-size:10.5px;color:var(--ash);font-weight:600;">HORARIO</div><div style="font-size:13px;">14:00 \u2014 18:00</div></ion-col>
            <ion-col size="6"><div style="font-size:10.5px;color:var(--ash);font-weight:600;">TOTAL PAGADO</div><div style="font-size:13px;">$5.100</div></ion-col>
          </ion-row>
        </ion-grid>

        <div class="qr-box">
          <div class="qr-grid">
            <div class="qr-cell on"></div><div class="qr-cell on"></div><div class="qr-cell on"></div><div class="qr-cell"></div><div class="qr-cell on"></div><div class="qr-cell"></div><div class="qr-cell on"></div><div class="qr-cell on"></div><div class="qr-cell on"></div>
            <div class="qr-cell on"></div><div class="qr-cell"></div><div class="qr-cell on"></div><div class="qr-cell"></div><div class="qr-cell on"></div><div class="qr-cell"></div><div class="qr-cell on"></div><div class="qr-cell"></div><div class="qr-cell on"></div>
            <div class="qr-cell on"></div><div class="qr-cell"></div><div class="qr-cell on"></div><div class="qr-cell on"></div><div class="qr-cell"></div><div class="qr-cell on"></div><div class="qr-cell on"></div><div class="qr-cell"></div><div class="qr-cell on"></div>
            <div class="qr-cell"></div><div class="qr-cell"></div><div class="qr-cell"></div><div class="qr-cell on"></div><div class="qr-cell on"></div><div class="qr-cell"></div><div class="qr-cell"></div><div class="qr-cell on"></div><div class="qr-cell"></div>
            <div class="qr-cell on"></div><div class="qr-cell on"></div><div class="qr-cell on"></div><div class="qr-cell"></div><div class="qr-cell on"></div><div class="qr-cell"></div><div class="qr-cell on"></div><div class="qr-cell on"></div><div class="qr-cell on"></div>
          </div>
          <div style="font-size:11px;color:var(--ink-soft);">C\xF3digo de acceso</div>
          <b style="display:block;font-size:15px;font-family:'Space Grotesk',sans-serif;letter-spacing:.06em;">PS-284719</b>
        </div>

        <div style="display:flex;gap:8px;margin-top:18px;">
          <ion-button expand="block" fill="solid" color="primary" size="small">Agregar al calendario</ion-button>
          <ion-button expand="block" fill="outline" color="medium" size="small">Descargar comprobante</ion-button>
        </div>
      </div>
    </div>
  </ion-content>

  <ion-footer class="ion-no-border">
    <ion-toolbar>
      <div class="ion-padding-horizontal ion-padding-bottom">
        <ion-button expand="block" color="primary" routerLink="/activa">Pagar $5.100</ion-button>
      </div>
    </ion-toolbar>
  </ion-footer>
`, styles: ['/* src/app/pages/pago/pago.page.scss */\n:host {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1,\nh2 {\n  font-family: "Space Grotesk", sans-serif;\n}\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: var(--ink-soft);\n  margin: 6px 0;\n}\n.summary-row b {\n  color: var(--ink);\n  font-weight: 500;\n}\n.summary-total {\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n  font-weight: 600;\n}\n.summary-total span:last-child {\n  color: var(--emerald-dark);\n}\n.confirm-card {\n  border-radius: 16px;\n  background: var(--bg-soft);\n  padding: 24px;\n  text-align: center;\n}\n.confirm-check {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--emerald);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 12px;\n}\n.qr-box {\n  background: #fff;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 16px;\n  margin: 16px auto 0;\n  max-width: 190px;\n}\n.qr-grid {\n  display: grid;\n  grid-template-columns: repeat(9, 1fr);\n  gap: 2px;\n  width: 150px;\n  height: 150px;\n  margin: 0 auto 10px;\n}\n.qr-cell {\n  background: #fff;\n}\n.qr-cell.on {\n  background: var(--ink);\n}\n/*# sourceMappingURL=pago.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagoPage, { className: "PagoPage", filePath: "src/app/pages/pago/pago.page.ts", lineNumber: 63 });
})();
export {
  PagoPage
};
//# sourceMappingURL=pago.page-PTBBKPJ6.js.map
