import {
  EstacionamientoService
} from "./chunk-MWC3DZ7Y.js";
import {
  Component,
  CurrencyPipe,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  IonBackButton,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCheckbox,
  IonChip,
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonProgressBar,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  ReactiveFormsModule,
  Router,
  RouterLink,
  ToastController,
  Validators,
  inject,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/pages/publicar/publicar.page.ts
function PublicarPage_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, "Ingresa un t\xEDtulo de al menos 6 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function PublicarPage_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, "La direcci\xF3n es obligatoria.");
    \u0275\u0275elementEnd();
  }
}
function PublicarPage_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, "La comuna es obligatoria.");
    \u0275\u0275elementEnd();
  }
}
function PublicarPage_ion_select_option_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tipo_r1 = ctx.$implicit;
    \u0275\u0275property("value", tipo_r1.valor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tipo_r1.etiqueta);
  }
}
function PublicarPage_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, "La hora de t\xE9rmino debe ser posterior a la de inicio.");
    \u0275\u0275elementEnd();
  }
}
function PublicarPage_ion_select_option_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caracteristica_r2 = ctx.$implicit;
    \u0275\u0275property("value", caracteristica_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(caracteristica_r2);
  }
}
function PublicarPage_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, "El precio m\xEDnimo es $100.");
    \u0275\u0275elementEnd();
  }
}
var PublicarPage = class _PublicarPage {
  fb = inject(FormBuilder);
  service = inject(EstacionamientoService);
  router = inject(Router);
  toastController = inject(ToastController);
  enviado = false;
  tiposDisponibles = [
    { valor: "auto", etiqueta: "Auto" },
    { valor: "camioneta", etiqueta: "Camioneta" },
    { valor: "moto", etiqueta: "Moto" },
    { valor: "furgon", etiqueta: "Furg\xF3n / van" }
  ];
  caracteristicasDisponibles = ["Techado", "C\xE1maras 24/7", "Carga el\xE9ctrica", "Acceso 24/7", "Port\xF3n autom\xE1tico", "Guardia presencial"];
  formulario = this.fb.nonNullable.group({
    titulo: ["", [Validators.required, Validators.minLength(6)]],
    direccion: ["", Validators.required],
    comuna: ["", Validators.required],
    referencia: [""],
    precioHora: [1200, [Validators.required, Validators.min(100)]],
    precioDia: [8e3, Validators.min(500)],
    tiposVehiculo: [["auto"], Validators.required],
    caracteristicas: [["Techado"]],
    horarioInicio: [8, [Validators.required, Validators.min(0), Validators.max(23)]],
    horarioFin: [20, [Validators.required, Validators.min(1), Validators.max(24)]]
  });
  campoInvalido(nombre) {
    const campo = this.formulario.controls[nombre];
    return campo.invalid && (campo.touched || this.enviado);
  }
  publicar() {
    return __async(this, null, function* () {
      this.enviado = true;
      this.formulario.markAllAsTouched();
      const valor = this.formulario.getRawValue();
      if (this.formulario.invalid || valor.tiposVehiculo.length === 0 || valor.horarioFin <= valor.horarioInicio) {
        yield this.mostrarMensaje("Revisa los campos marcados antes de publicar.", "danger");
        return;
      }
      this.service.publicar(__spreadProps(__spreadValues({}, valor), { distancia: "Nueva publicaci\xF3n" }));
      yield this.mostrarMensaje("Estacionamiento publicado y guardado correctamente.", "success");
      void this.router.navigate(["/home"]);
    });
  }
  mostrarMensaje(message, color) {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({ message, color, duration: 2200, position: "top" });
      yield toast.present();
    });
  }
  static \u0275fac = function PublicarPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicarPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicarPage, selectors: [["app-publicar"]], decls: 85, vars: 14, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/home", "color", "dark"], ["size", "small"], ["value", "0.75", "color", "primary"], [3, "ngSubmit", "formGroup"], [1, "ion-padding"], [2, "font-size", "13.5px", "color", "var(--ink-soft)", "margin-top", "0"], [2, "font-size", "15px"], ["lines", "full"], ["position", "stacked"], ["formControlName", "titulo", "placeholder", "Ej: Estacionamiento techado en Providencia"], ["class", "field-error", 4, "ngIf"], ["formControlName", "direccion", "placeholder", "Calle y n\xFAmero"], ["formControlName", "comuna", "placeholder", "Ej: Providencia"], ["lines", "none"], ["formControlName", "referencia", "autoGrow", "true", "placeholder", "Ej: port\xF3n azul junto a la farmacia"], ["formControlName", "tiposVehiculo", "multiple", "true"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "horarioInicio"], ["type", "number", "formControlName", "horarioFin"], ["formControlName", "caracteristicas", "multiple", "true"], ["type", "number", "formControlName", "precioHora"], ["type", "number", "formControlName", "precioDia"], [1, "price-preview"], ["type", "submit", "expand", "block", "color", "primary"], ["type", "button", "expand", "block", "fill", "clear", "color", "medium", "routerLink", "/home"], [1, "field-error"], [3, "value"]], template: function PublicarPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      \u0275\u0275element(3, "ion-back-button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title", 3);
      \u0275\u0275text(5, "Publica tu espacio");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(6, "ion-progress-bar", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "ion-content")(8, "form", 5);
      \u0275\u0275listener("ngSubmit", function PublicarPage_Template_form_ngSubmit_8_listener() {
        return ctx.publicar();
      });
      \u0275\u0275elementStart(9, "div", 6)(10, "p", 7);
      \u0275\u0275text(11, "Completa los datos. La publicaci\xF3n quedar\xE1 disponible en el inicio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ion-card")(13, "ion-card-header")(14, "ion-card-title", 8);
      \u0275\u0275text(15, "Informaci\xF3n principal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "ion-list", 9)(17, "ion-item")(18, "ion-label", 10);
      \u0275\u0275text(19, "T\xEDtulo *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "ion-input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, PublicarPage_div_21_Template, 2, 0, "div", 12);
      \u0275\u0275elementStart(22, "ion-item")(23, "ion-label", 10);
      \u0275\u0275text(24, "Direcci\xF3n *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "ion-input", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, PublicarPage_div_26_Template, 2, 0, "div", 12);
      \u0275\u0275elementStart(27, "ion-item")(28, "ion-label", 10);
      \u0275\u0275text(29, "Comuna *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "ion-input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, PublicarPage_div_31_Template, 2, 0, "div", 12);
      \u0275\u0275elementStart(32, "ion-item", 15)(33, "ion-label", 10);
      \u0275\u0275text(34, "Referencia de acceso");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "ion-textarea", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "ion-card")(37, "ion-card-header")(38, "ion-card-title", 8);
      \u0275\u0275text(39, "Disponibilidad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "ion-list", 9)(41, "ion-item")(42, "ion-label", 10);
      \u0275\u0275text(43, "Veh\xEDculos permitidos *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "ion-select", 17);
      \u0275\u0275template(45, PublicarPage_ion_select_option_45_Template, 2, 2, "ion-select-option", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "ion-item")(47, "ion-label", 10);
      \u0275\u0275text(48, "Hora de inicio");
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "ion-input", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "ion-item", 15)(51, "ion-label", 10);
      \u0275\u0275text(52, "Hora de t\xE9rmino");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "ion-input", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(54, PublicarPage_div_54_Template, 2, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "ion-card")(56, "ion-card-header")(57, "ion-card-title", 8);
      \u0275\u0275text(58, "Caracter\xEDsticas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "ion-item", 15)(60, "ion-label", 10);
      \u0275\u0275text(61, "Selecciona las que correspondan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "ion-select", 21);
      \u0275\u0275template(63, PublicarPage_ion_select_option_63_Template, 2, 2, "ion-select-option", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "ion-card")(65, "ion-card-header")(66, "ion-card-title", 8);
      \u0275\u0275text(67, "Precio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "ion-list", 9)(69, "ion-item")(70, "ion-label", 10);
      \u0275\u0275text(71, "Precio por hora *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "ion-input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(73, PublicarPage_div_73_Template, 2, 0, "div", 12);
      \u0275\u0275elementStart(74, "ion-item", 15)(75, "ion-label", 10);
      \u0275\u0275text(76, "Precio por d\xEDa");
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "ion-input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 24);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "currency");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "ion-button", 25);
      \u0275\u0275text(82, "Publicar espacio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "ion-button", 26);
      \u0275\u0275text(84, "Cancelar");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.formulario);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.campoInvalido("titulo"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.campoInvalido("direccion"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.campoInvalido("comuna"));
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.tiposDisponibles);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.enviado && ctx.formulario.value.horarioFin <= ctx.formulario.value.horarioInicio);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.caracteristicasDisponibles);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.campoInvalido("precioHora"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Vista previa: ", \u0275\u0275pipeBind4(80, 9, ctx.formulario.value.precioHora || 0, "CLP", "symbol-narrow", "1.0-0"), " / hora");
    }
  }, dependencies: [
    NgIf,
    NgForOf,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    RouterLink,
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonProgressBar,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonTitle,
    IonToolbar,
    CurrencyPipe
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n}\n.card-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ink-soft);\n  margin: 0 16px 6px;\n}\n.photo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  padding: 0 16px 16px;\n}\n.photo-slot[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border: 1.5px dashed var(--border);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  color: var(--ash);\n  font-size: 9.5px;\n  text-align: center;\n}\n.photo-slot.filled[_ngcontent-%COMP%] {\n  border-style: solid;\n  background: var(--emerald-pale);\n  color: var(--emerald-dark);\n  position: relative;\n}\n.cover-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  background: var(--emerald);\n  color: #fff;\n  font-size: 8px;\n  font-weight: 700;\n  padding: 2px 5px;\n  border-radius: 5px;\n}\n.price-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 12px;\n  text-align: center;\n  flex: 1;\n}\n.price-card.active[_ngcontent-%COMP%] {\n  border-color: var(--emerald);\n  background: var(--emerald-pale);\n}\n.price-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--ink-soft);\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n.price-card[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n}\n.preview-photo[_ngcontent-%COMP%] {\n  height: 110px;\n  background: var(--emerald-pale);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.field-error[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n  font-size: 12px;\n  padding: 5px 16px 9px;\n}\n.price-preview[_ngcontent-%COMP%] {\n  padding: 10px 16px 16px;\n  color: var(--emerald-dark);\n  font-weight: 700;\n  text-align: right;\n}\n/*# sourceMappingURL=publicar.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicarPage, [{
    type: Component,
    args: [{ selector: "app-publicar", standalone: true, imports: [
      CurrencyPipe,
      NgIf,
      NgForOf,
      ReactiveFormsModule,
      RouterLink,
      IonBackButton,
      IonBadge,
      IonButton,
      IonButtons,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardTitle,
      IonCheckbox,
      IonChip,
      IonContent,
      IonFooter,
      IonHeader,
      IonInput,
      IonItem,
      IonLabel,
      IonList,
      IonProgressBar,
      IonSelect,
      IonSelectOption,
      IonTextarea,
      IonTitle,
      IonToolbar
    ], template: `<ion-header class="ion-no-border"><ion-toolbar><ion-buttons slot="start"><ion-back-button defaultHref="/home" color="dark"></ion-back-button></ion-buttons><ion-title size="small">Publica tu espacio</ion-title></ion-toolbar><ion-progress-bar value="0.75" color="primary"></ion-progress-bar></ion-header>
<ion-content><form [formGroup]="formulario" (ngSubmit)="publicar()"><div class="ion-padding"><p style="font-size:13.5px;color:var(--ink-soft);margin-top:0;">Completa los datos. La publicaci\xF3n quedar\xE1 disponible en el inicio.</p>
  <ion-card><ion-card-header><ion-card-title style="font-size:15px;">Informaci\xF3n principal</ion-card-title></ion-card-header><ion-list lines="full">
    <ion-item><ion-label position="stacked">T\xEDtulo *</ion-label><ion-input formControlName="titulo" placeholder="Ej: Estacionamiento techado en Providencia"></ion-input></ion-item><div class="field-error" *ngIf="campoInvalido('titulo')">Ingresa un t\xEDtulo de al menos 6 caracteres.</div>
    <ion-item><ion-label position="stacked">Direcci\xF3n *</ion-label><ion-input formControlName="direccion" placeholder="Calle y n\xFAmero"></ion-input></ion-item><div class="field-error" *ngIf="campoInvalido('direccion')">La direcci\xF3n es obligatoria.</div>
    <ion-item><ion-label position="stacked">Comuna *</ion-label><ion-input formControlName="comuna" placeholder="Ej: Providencia"></ion-input></ion-item><div class="field-error" *ngIf="campoInvalido('comuna')">La comuna es obligatoria.</div>
    <ion-item lines="none"><ion-label position="stacked">Referencia de acceso</ion-label><ion-textarea formControlName="referencia" autoGrow="true" placeholder="Ej: port\xF3n azul junto a la farmacia"></ion-textarea></ion-item>
  </ion-list></ion-card>
  <ion-card><ion-card-header><ion-card-title style="font-size:15px;">Disponibilidad</ion-card-title></ion-card-header><ion-list lines="full"><ion-item><ion-label position="stacked">Veh\xEDculos permitidos *</ion-label><ion-select formControlName="tiposVehiculo" multiple="true"><ion-select-option *ngFor="let tipo of tiposDisponibles" [value]="tipo.valor">{{ tipo.etiqueta }}</ion-select-option></ion-select></ion-item><ion-item><ion-label position="stacked">Hora de inicio</ion-label><ion-input type="number" formControlName="horarioInicio"></ion-input></ion-item><ion-item lines="none"><ion-label position="stacked">Hora de t\xE9rmino</ion-label><ion-input type="number" formControlName="horarioFin"></ion-input></ion-item></ion-list><div class="field-error" *ngIf="enviado && formulario.value.horarioFin! <= formulario.value.horarioInicio!">La hora de t\xE9rmino debe ser posterior a la de inicio.</div></ion-card>
  <ion-card><ion-card-header><ion-card-title style="font-size:15px;">Caracter\xEDsticas</ion-card-title></ion-card-header><ion-item lines="none"><ion-label position="stacked">Selecciona las que correspondan</ion-label><ion-select formControlName="caracteristicas" multiple="true"><ion-select-option *ngFor="let caracteristica of caracteristicasDisponibles" [value]="caracteristica">{{ caracteristica }}</ion-select-option></ion-select></ion-item></ion-card>
  <ion-card><ion-card-header><ion-card-title style="font-size:15px;">Precio</ion-card-title></ion-card-header><ion-list lines="full"><ion-item><ion-label position="stacked">Precio por hora *</ion-label><ion-input type="number" formControlName="precioHora"></ion-input></ion-item><div class="field-error" *ngIf="campoInvalido('precioHora')">El precio m\xEDnimo es $100.</div><ion-item lines="none"><ion-label position="stacked">Precio por d\xEDa</ion-label><ion-input type="number" formControlName="precioDia"></ion-input></ion-item></ion-list><div class="price-preview">Vista previa: {{ formulario.value.precioHora || 0 | currency:'CLP':'symbol-narrow':'1.0-0' }} / hora</div></ion-card>
  <ion-button type="submit" expand="block" color="primary">Publicar espacio</ion-button><ion-button type="button" expand="block" fill="clear" color="medium" routerLink="/home">Cancelar</ion-button>
</div></form></ion-content>
`, styles: ['/* src/app/pages/publicar/publicar.page.scss */\n:host {\n  --ion-font-family:"Inter",sans-serif;\n  --ion-color-primary:#0B8457;\n  --ion-color-primary-rgb:11,132,87;\n  --ion-color-primary-contrast:#ffffff;\n  --ion-color-primary-contrast-rgb:255,255,255;\n  --ion-color-primary-shade:#066241;\n  --ion-color-primary-tint:#26935f;\n  --ion-background-color:#ffffff;\n  --ion-text-color:#16241C;\n  --emerald:#0B8457;\n  --emerald-dark:#066241;\n  --emerald-pale:#E4F3EB;\n  --ash:#7C917D;\n  --ash-light:#DCE6DC;\n  --ink:#16241C;\n  --ink-soft:#57685B;\n  --border:#E1E8E1;\n  --bg-soft:#F3F8F4;\n}\nh1,\nh2 {\n  font-family: "Space Grotesk", sans-serif;\n}\n.card-hint {\n  font-size: 12px;\n  color: var(--ink-soft);\n  margin: 0 16px 6px;\n}\n.photo-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  padding: 0 16px 16px;\n}\n.photo-slot {\n  aspect-ratio: 1;\n  border: 1.5px dashed var(--border);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  color: var(--ash);\n  font-size: 9.5px;\n  text-align: center;\n}\n.photo-slot.filled {\n  border-style: solid;\n  background: var(--emerald-pale);\n  color: var(--emerald-dark);\n  position: relative;\n}\n.cover-tag {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  background: var(--emerald);\n  color: #fff;\n  font-size: 8px;\n  font-weight: 700;\n  padding: 2px 5px;\n  border-radius: 5px;\n}\n.price-card {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 12px;\n  text-align: center;\n  flex: 1;\n}\n.price-card.active {\n  border-color: var(--emerald);\n  background: var(--emerald-pale);\n}\n.price-card .label {\n  font-size: 11px;\n  color: var(--ink-soft);\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n.price-card .val {\n  font-size: 15px;\n  font-weight: 700;\n}\n.preview-photo {\n  height: 110px;\n  background: var(--emerald-pale);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.field-error {\n  color: var(--ion-color-danger);\n  font-size: 12px;\n  padding: 5px 16px 9px;\n}\n.price-preview {\n  padding: 10px 16px 16px;\n  color: var(--emerald-dark);\n  font-weight: 700;\n  text-align: right;\n}\n/*# sourceMappingURL=publicar.page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicarPage, { className: "PublicarPage", filePath: "src/app/pages/publicar/publicar.page.ts", lineNumber: 70 });
})();
export {
  PublicarPage
};
//# sourceMappingURL=publicar.page-G3REDOMR.js.map
