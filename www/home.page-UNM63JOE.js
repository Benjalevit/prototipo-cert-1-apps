import {
  EstacionamientoService
} from "./chunk-MWC3DZ7Y.js";
import {
  AsyncPipe,
  Component,
  CurrencyPipe,
  FormsModule,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonChip,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
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
import "./chunk-WDMUDEB6.js";

// src/app/pages/home/home.page.ts
function HomePage_div_49_ion_card_7_ion_chip_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-chip", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caracteristica_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(caracteristica_r2);
  }
}
function HomePage_div_49_ion_card_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-card", 38)(1, "div", 39)(2, "div", 40)(3, "ion-badge", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "ion-icon", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 43)(7, "div", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 46);
    \u0275\u0275template(12, HomePage_div_49_ion_card_7_ion_chip_12_Template, 2, 1, "ion-chip", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 48)(14, "div", 49);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "currency");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "/ hora");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ion-button", 50);
    \u0275\u0275listener("click", function HomePage_div_49_ion_card_7_Template_ion_button_click_19_listener() {
      const espacio_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.verDetalle(espacio_r3));
    });
    \u0275\u0275text(20, "Reservar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const espacio_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("color", espacio_r3.disponible ? "primary" : "medium");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(espacio_r3.disponible ? "Disponible" : "Ocupado");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(espacio_r3.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(espacio_r3.referencia);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", espacio_r3.caracteristicas.slice(0, 2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind4(16, 8, espacio_r3.precioHora, "CLP", "symbol-narrow", "1.0-0"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("color", espacio_r3.disponible ? "primary" : "medium")("disabled", !espacio_r3.disponible);
  }
}
function HomePage_div_49_ion_card_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-card")(1, "ion-card-content", 52);
    \u0275\u0275element(2, "ion-icon", 53);
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Sin resultados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Prueba otra ubicaci\xF3n o quita alg\xFAn filtro.");
    \u0275\u0275elementEnd()()();
  }
}
function HomePage_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 34)(2, "div")(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 35);
    \u0275\u0275text(6, "Los resultados cambian al escribir o seleccionar filtros");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, HomePage_div_49_ion_card_7_Template, 21, 13, "ion-card", 36)(8, HomePage_div_49_ion_card_8_Template, 7, 0, "ion-card", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resultados_r5 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", resultados_r5.length, " espacios encontrados");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", resultados_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", resultados_r5.length === 0);
  }
}
var HomePage = class _HomePage {
  estacionamientoService = inject(EstacionamientoService);
  router = inject(Router);
  texto = "";
  tipo = "cualquiera";
  techado = false;
  camaras = false;
  disponibles = false;
  precioBajo = false;
  resultados$ = this.estacionamientoService.buscar({});
  buscar() {
    const caracteristicas = [];
    if (this.techado)
      caracteristicas.push("Techado");
    if (this.camaras)
      caracteristicas.push("C\xE1maras 24/7");
    this.resultados$ = this.estacionamientoService.buscar({ texto: this.texto, tipo: this.tipo, caracteristicas, precioMaximo: this.precioBajo ? 1500 : void 0, soloDisponibles: this.disponibles });
  }
  alternarFiltro(filtro) {
    this[filtro] = !this[filtro];
    this.buscar();
  }
  verDetalle(espacio) {
    this.estacionamientoService.seleccionar(espacio.id);
    void this.router.navigate(["/detalle"], { queryParams: { id: espacio.id } });
  }
  static \u0275fac = function HomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home"]], decls: 68, vars: 14, consts: [[1, "ion-no-border"], ["slot", "start"], [1, "brand-mark"], ["slot", "end"], ["color", "dark"], [1, "hero"], [1, "search-card"], ["lines", "full"], ["slot", "start", "name", "location-outline", "color", "medium"], ["position", "stacked"], ["placeholder", "Direcci\xF3n o comuna", 3, "ngModelChange", "ionInput", "ngModel"], ["lines", "none"], ["slot", "start", "name", "car-outline", "color", "medium"], ["interface", "popover", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "cualquiera"], ["value", "auto"], ["value", "camioneta"], ["value", "moto"], ["value", "furgon"], [1, "ion-padding"], ["expand", "block", "color", "primary", 3, "click"], ["slot", "start", "name", "search-outline"], [1, "chips-row"], [3, "click", "color", "outline"], ["class", "ion-padding", 4, "ngIf"], ["slot", "bottom", "color", "light"], ["tab", "buscar", "routerLink", "/home", 3, "selected"], ["name", "search"], ["tab", "publicar", "routerLink", "/publicar"], ["name", "add-circle-outline"], ["tab", "reservas", "routerLink", "/historial"], ["name", "time-outline"], ["tab", "perfil", "routerLink", "/perfil"], ["name", "person-outline"], [1, "results-head"], [1, "results-count"], ["class", "spot", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "spot"], [1, "spot-row"], [1, "spot-thumb"], [2, "position", "absolute", "top", "8px", "left", "8px", 3, "color"], ["name", "car-sport-outline", 2, "font-size", "36px", "color", "var(--emerald)"], [1, "spot-body"], [1, "spot-title"], [1, "spot-sub"], [2, "margin-top", "6px", "display", "flex", "gap", "6px", "flex-wrap", "wrap"], ["outline", "", "style", "font-size:11px;height:22px;", 4, "ngFor", "ngForOf"], [1, "spot-foot"], [1, "price"], ["size", "small", "fill", "outline", 3, "click", "color", "disabled"], ["outline", "", 2, "font-size", "11px", "height", "22px"], [1, "ion-text-center"], ["name", "search-outline", 2, "font-size", "36px", "color", "var(--ash)"]], template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "div", 2);
      \u0275\u0275text(4, "P");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "ion-title");
      \u0275\u0275text(6, "ParkSpot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "ion-buttons", 3);
      \u0275\u0275element(8, "ion-menu-button", 4);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "ion-content")(10, "div", 5)(11, "h1");
      \u0275\u0275text(12, "Encuentra d\xF3nde estacionar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p");
      \u0275\u0275text(14, "Busca espacios por ubicaci\xF3n, veh\xEDculo y caracter\xEDsticas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "ion-card", 6)(16, "ion-item", 7);
      \u0275\u0275element(17, "ion-icon", 8);
      \u0275\u0275elementStart(18, "ion-label", 9);
      \u0275\u0275text(19, "Ubicaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "ion-input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function HomePage_Template_ion_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.texto, $event) || (ctx.texto = $event);
        return $event;
      });
      \u0275\u0275listener("ionInput", function HomePage_Template_ion_input_ionInput_20_listener() {
        return ctx.buscar();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "ion-item", 11);
      \u0275\u0275element(22, "ion-icon", 12);
      \u0275\u0275elementStart(23, "ion-label", 9);
      \u0275\u0275text(24, "Tipo de veh\xEDculo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "ion-select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function HomePage_Template_ion_select_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.tipo, $event) || (ctx.tipo = $event);
        return $event;
      });
      \u0275\u0275listener("ionChange", function HomePage_Template_ion_select_ionChange_25_listener() {
        return ctx.buscar();
      });
      \u0275\u0275elementStart(26, "ion-select-option", 14);
      \u0275\u0275text(27, "Cualquiera");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "ion-select-option", 15);
      \u0275\u0275text(29, "Auto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "ion-select-option", 16);
      \u0275\u0275text(31, "Camioneta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "ion-select-option", 17);
      \u0275\u0275text(33, "Moto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "ion-select-option", 18);
      \u0275\u0275text(35, "Furg\xF3n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 19)(37, "ion-button", 20);
      \u0275\u0275listener("click", function HomePage_Template_ion_button_click_37_listener() {
        return ctx.buscar();
      });
      \u0275\u0275element(38, "ion-icon", 21);
      \u0275\u0275text(39, "Buscar");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 22)(41, "ion-chip", 23);
      \u0275\u0275listener("click", function HomePage_Template_ion_chip_click_41_listener() {
        return ctx.alternarFiltro("techado");
      });
      \u0275\u0275text(42, "Techado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "ion-chip", 23);
      \u0275\u0275listener("click", function HomePage_Template_ion_chip_click_43_listener() {
        return ctx.alternarFiltro("camaras");
      });
      \u0275\u0275text(44, "Con c\xE1maras");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "ion-chip", 23);
      \u0275\u0275listener("click", function HomePage_Template_ion_chip_click_45_listener() {
        return ctx.alternarFiltro("disponibles");
      });
      \u0275\u0275text(46, "Disponible ahora");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "ion-chip", 23);
      \u0275\u0275listener("click", function HomePage_Template_ion_chip_click_47_listener() {
        return ctx.alternarFiltro("precioBajo");
      });
      \u0275\u0275text(48, "Hasta $1.500 / hr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(49, HomePage_div_49_Template, 9, 3, "div", 24);
      \u0275\u0275pipe(50, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "ion-tab-bar", 25)(52, "ion-tab-button", 26);
      \u0275\u0275element(53, "ion-icon", 27);
      \u0275\u0275elementStart(54, "ion-label");
      \u0275\u0275text(55, "Buscar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "ion-tab-button", 28);
      \u0275\u0275element(57, "ion-icon", 29);
      \u0275\u0275elementStart(58, "ion-label");
      \u0275\u0275text(59, "Publicar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "ion-tab-button", 30);
      \u0275\u0275element(61, "ion-icon", 31);
      \u0275\u0275elementStart(62, "ion-label");
      \u0275\u0275text(63, "Reservas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "ion-tab-button", 32);
      \u0275\u0275element(65, "ion-icon", 33);
      \u0275\u0275elementStart(66, "ion-label");
      \u0275\u0275text(67, "Perfil");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275twoWayProperty("ngModel", ctx.texto);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.tipo);
      \u0275\u0275advance(16);
      \u0275\u0275property("color", ctx.techado ? "primary" : "medium")("outline", !ctx.techado);
      \u0275\u0275advance(2);
      \u0275\u0275property("color", ctx.camaras ? "primary" : "medium")("outline", !ctx.camaras);
      \u0275\u0275advance(2);
      \u0275\u0275property("color", ctx.disponibles ? "primary" : "medium")("outline", !ctx.disponibles);
      \u0275\u0275advance(2);
      \u0275\u0275property("color", ctx.precioBajo ? "primary" : "medium")("outline", !ctx.precioBajo);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(50, 12, ctx.resultados$));
      \u0275\u0275advance(3);
      \u0275\u0275property("selected", true);
    }
  }, dependencies: [
    FormsModule,
    NgControlStatus,
    NgModel,
    NgForOf,
    NgIf,
    RouterLink,
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonChip,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonMenuButton,
    IonSelect,
    IonSelectOption,
    IonTabBar,
    IonTabButton,
    IonTitle,
    IonToolbar,
    AsyncPipe,
    CurrencyPipe
  ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-toolbar-background:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \n.brand[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background: var(--emerald);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n}\n.hero[_ngcontent-%COMP%] {\n  background: var(--bg-soft);\n  padding: 20px 16px;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0;\n}\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 16px;\n  color: var(--ink-soft);\n  font-size: 14px;\n}\n.search-card[_ngcontent-%COMP%] {\n  --padding-start:0;\n  --padding-end:0;\n  margin: 0;\n}\n.chips-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 14px;\n  flex-wrap: wrap;\n}\n.results-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin: 18px 0 10px;\n}\n.results-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  margin: 0;\n}\n.results-count[_ngcontent-%COMP%] {\n  color: var(--ink-soft);\n  font-size: 12.5px;\n  margin-top: 2px;\n}\nion-card.spot[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\n.spot-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  padding: 12px;\n}\n.spot-thumb[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 84px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: var(--emerald-pale);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.spot-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.spot-title[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 600;\n}\n.spot-sub[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--ink-soft);\n  margin-top: 2px;\n}\n.spot-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 8px;\n}\n.price[_ngcontent-%COMP%] {\n  font-size: 15.5px;\n  font-weight: 700;\n  color: var(--emerald-dark);\n}\n.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--ink-soft);\n}\n.map-panel[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 14px;\n  background: var(--ash-light);\n  height: 260px;\n  margin: 6px 0 8px;\n}\n.map-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(var(--border) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--border) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  opacity: 0.5;\n}\n.pin[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translate(-50%, -100%);\n}\n.pin-price[_ngcontent-%COMP%] {\n  background: var(--emerald);\n  color: #fff;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 3px 7px;\n  border-radius: 12px;\n  white-space: nowrap;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.pin-price.full[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--ash);\n  border: 1px solid var(--ash);\n}\n.how[_ngcontent-%COMP%] {\n  padding: 22px 0 8px;\n}\n.how[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n/*# sourceMappingURL=home.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [
      AsyncPipe,
      CurrencyPipe,
      FormsModule,
      NgForOf,
      NgIf,
      RouterLink,
      IonBadge,
      IonButton,
      IonButtons,
      IonCard,
      IonCardContent,
      IonChip,
      IonCol,
      IonContent,
      IonFab,
      IonFabButton,
      IonGrid,
      IonHeader,
      IonIcon,
      IonInput,
      IonItem,
      IonLabel,
      IonMenuButton,
      IonRow,
      IonSelect,
      IonSelectOption,
      IonTabBar,
      IonTabButton,
      IonTitle,
      IonToolbar
    ], template: `<ion-header class="ion-no-border"><ion-toolbar><ion-buttons slot="start"><div class="brand-mark">P</div></ion-buttons><ion-title>ParkSpot</ion-title><ion-buttons slot="end"><ion-menu-button color="dark"></ion-menu-button></ion-buttons></ion-toolbar></ion-header>
<ion-content>
  <div class="hero">
    <h1>Encuentra d\xF3nde estacionar</h1><p>Busca espacios por ubicaci\xF3n, veh\xEDculo y caracter\xEDsticas</p>
    <ion-card class="search-card">
      <ion-item lines="full"><ion-icon slot="start" name="location-outline" color="medium"></ion-icon><ion-label position="stacked">Ubicaci\xF3n</ion-label><ion-input [(ngModel)]="texto" placeholder="Direcci\xF3n o comuna" (ionInput)="buscar()"></ion-input></ion-item>
      <ion-item lines="none"><ion-icon slot="start" name="car-outline" color="medium"></ion-icon><ion-label position="stacked">Tipo de veh\xEDculo</ion-label><ion-select [(ngModel)]="tipo" interface="popover" (ionChange)="buscar()"><ion-select-option value="cualquiera">Cualquiera</ion-select-option><ion-select-option value="auto">Auto</ion-select-option><ion-select-option value="camioneta">Camioneta</ion-select-option><ion-select-option value="moto">Moto</ion-select-option><ion-select-option value="furgon">Furg\xF3n</ion-select-option></ion-select></ion-item>
      <div class="ion-padding"><ion-button expand="block" color="primary" (click)="buscar()"><ion-icon slot="start" name="search-outline"></ion-icon>Buscar</ion-button></div>
    </ion-card>
    <div class="chips-row"><ion-chip [color]="techado ? 'primary' : 'medium'" [outline]="!techado" (click)="alternarFiltro('techado')">Techado</ion-chip><ion-chip [color]="camaras ? 'primary' : 'medium'" [outline]="!camaras" (click)="alternarFiltro('camaras')">Con c\xE1maras</ion-chip><ion-chip [color]="disponibles ? 'primary' : 'medium'" [outline]="!disponibles" (click)="alternarFiltro('disponibles')">Disponible ahora</ion-chip><ion-chip [color]="precioBajo ? 'primary' : 'medium'" [outline]="!precioBajo" (click)="alternarFiltro('precioBajo')">Hasta $1.500 / hr</ion-chip></div>
  </div>
  <div class="ion-padding" *ngIf="resultados$ | async as resultados">
    <div class="results-head"><div><h2>{{ resultados.length }} espacios encontrados</h2><div class="results-count">Los resultados cambian al escribir o seleccionar filtros</div></div></div>
    <ion-card class="spot" *ngFor="let espacio of resultados"><div class="spot-row"><div class="spot-thumb"><ion-badge [color]="espacio.disponible ? 'primary' : 'medium'" style="position:absolute;top:8px;left:8px;">{{ espacio.disponible ? 'Disponible' : 'Ocupado' }}</ion-badge><ion-icon name="car-sport-outline" style="font-size:36px;color:var(--emerald);"></ion-icon></div><div class="spot-body"><div class="spot-title">{{ espacio.titulo }}</div><div class="spot-sub">{{ espacio.referencia }}</div><div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap;"><ion-chip *ngFor="let caracteristica of espacio.caracteristicas.slice(0, 2)" outline style="font-size:11px;height:22px;">{{ caracteristica }}</ion-chip></div><div class="spot-foot"><div class="price">{{ espacio.precioHora | currency:'CLP':'symbol-narrow':'1.0-0' }} <span>/ hora</span></div><ion-button size="small" fill="outline" [color]="espacio.disponible ? 'primary' : 'medium'" [disabled]="!espacio.disponible" (click)="verDetalle(espacio)">Reservar</ion-button></div></div></div></ion-card>
    <ion-card *ngIf="resultados.length === 0"><ion-card-content class="ion-text-center"><ion-icon name="search-outline" style="font-size:36px;color:var(--ash);"></ion-icon><h2>Sin resultados</h2><p>Prueba otra ubicaci\xF3n o quita alg\xFAn filtro.</p></ion-card-content></ion-card>
  </div>
</ion-content>
<ion-tab-bar slot="bottom" color="light"><ion-tab-button tab="buscar" routerLink="/home" [selected]="true"><ion-icon name="search"></ion-icon><ion-label>Buscar</ion-label></ion-tab-button><ion-tab-button tab="publicar" routerLink="/publicar"><ion-icon name="add-circle-outline"></ion-icon><ion-label>Publicar</ion-label></ion-tab-button><ion-tab-button tab="reservas" routerLink="/historial"><ion-icon name="time-outline"></ion-icon><ion-label>Reservas</ion-label></ion-tab-button><ion-tab-button tab="perfil" routerLink="/perfil"><ion-icon name="person-outline"></ion-icon><ion-label>Perfil</ion-label></ion-tab-button></ion-tab-bar>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/home/home.page.scss */\n:host {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-toolbar-background:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1,\nh2,\nh3,\n.brand {\n  font-family: "Space Grotesk", sans-serif;\n}\n.brand-mark {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background: var(--emerald);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n}\n.hero {\n  background: var(--bg-soft);\n  padding: 20px 16px;\n}\n.hero h1 {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0;\n}\n.hero p {\n  margin: 6px 0 16px;\n  color: var(--ink-soft);\n  font-size: 14px;\n}\n.search-card {\n  --padding-start:0;\n  --padding-end:0;\n  margin: 0;\n}\n.chips-row {\n  display: flex;\n  gap: 8px;\n  margin-top: 14px;\n  flex-wrap: wrap;\n}\n.results-head {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin: 18px 0 10px;\n}\n.results-head h2 {\n  font-size: 17px;\n  font-weight: 600;\n  margin: 0;\n}\n.results-count {\n  color: var(--ink-soft);\n  font-size: 12.5px;\n  margin-top: 2px;\n}\nion-card.spot {\n  margin: 0 0 12px;\n}\n.spot-row {\n  display: flex;\n  gap: 14px;\n  padding: 12px;\n}\n.spot-thumb {\n  width: 96px;\n  height: 84px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: var(--emerald-pale);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.spot-body {\n  flex: 1;\n  min-width: 0;\n}\n.spot-title {\n  font-size: 14.5px;\n  font-weight: 600;\n}\n.spot-sub {\n  font-size: 12.5px;\n  color: var(--ink-soft);\n  margin-top: 2px;\n}\n.spot-foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 8px;\n}\n.price {\n  font-size: 15.5px;\n  font-weight: 700;\n  color: var(--emerald-dark);\n}\n.price span {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--ink-soft);\n}\n.map-panel {\n  position: relative;\n  overflow: hidden;\n  border-radius: 14px;\n  background: var(--ash-light);\n  height: 260px;\n  margin: 6px 0 8px;\n}\n.map-grid {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(var(--border) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--border) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  opacity: 0.5;\n}\n.pin {\n  position: absolute;\n  transform: translate(-50%, -100%);\n}\n.pin-price {\n  background: var(--emerald);\n  color: #fff;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 3px 7px;\n  border-radius: 12px;\n  white-space: nowrap;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.pin-price.full {\n  background: #fff;\n  color: var(--ash);\n  border: 1px solid var(--ash);\n}\n.how {\n  padding: 22px 0 8px;\n}\n.how h2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n/*# sourceMappingURL=home.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/pages/home/home.page.ts", lineNumber: 71 });
})();
export {
  HomePage
};
//# sourceMappingURL=home.page-UNM63JOE.js.map
