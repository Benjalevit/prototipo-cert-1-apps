import {
  Component,
  IonApp,
  IonRouterOutlet,
  bootstrapApplication,
  provideIonicAngular,
  provideRouter,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
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

// node_modules/ionicons/dist/esm-es5/utils-2c56d1c8.js
var CACHED_MAP;
var getIconMap = function() {
  if (typeof window === "undefined") {
    return /* @__PURE__ */ new Map();
  } else {
    if (!CACHED_MAP) {
      var t = window;
      t.Ionicons = t.Ionicons || {};
      CACHED_MAP = t.Ionicons.map = t.Ionicons.map || /* @__PURE__ */ new Map();
    }
    return CACHED_MAP;
  }
};
var addIcons = function(t) {
  Object.keys(t).forEach((function(e) {
    addToIconMap(e, t[e]);
    var r = e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, "$1-$2").toLowerCase();
    if (e !== r) {
      addToIconMap(r, t[e]);
    }
  }));
};
var addToIconMap = function(t, e) {
  var r = getIconMap();
  var n = r.get(t);
  if (n === void 0) {
    r.set(t, e);
  } else if (n !== e) {
    console.warn('[Ionicons Warning]: Multiple icons were mapped to name "'.concat(t, '". Ensure that multiple icons are not mapped to the same icon name.'));
  }
};

// node_modules/ionicons/icons/index.mjs
var addCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M256 176v160M336 256H176' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var addOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M256 112v288M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var appsOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='64' y='64' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='216' y='64' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='368' y='64' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='64' y='216' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='216' y='216' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='368' y='216' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='64' y='368' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='216' y='368' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><rect x='368' y='368' width='80' height='80' rx='40' ry='40' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var bicycleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M388 288a76 76 0 1076 76 76.24 76.24 0 00-76-76zM124 288a76 76 0 1076 76 76.24 76.24 0 00-76-76z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M256 360v-86l-64-42 80-88 40 72h56' class='ionicon-fill-none ionicon-stroke-width'/><path d='M320 136a31.89 31.89 0 0032-32.1A31.55 31.55 0 00320.2 72a32 32 0 10-.2 64z'/></svg>";
var busOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='80' y='112' width='352' height='192' rx='32' ry='32' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect x='80' y='304' width='352' height='128' rx='32' ry='32' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M400 112H112a32.09 32.09 0 01-32-32h0a32.09 32.09 0 0132-32h288a32.09 32.09 0 0132 32h0a32.09 32.09 0 01-32 32zM144 432v22a10 10 0 01-10 10h-28a10 10 0 01-10-10v-22zM416 432v22a10 10 0 01-10 10h-28a10 10 0 01-10-10v-22z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='368' cy='368' r='16' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='144' cy='368' r='16' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M256 112v192M80 80v288M432 80v288' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var carOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M80 224l37.78-88.15C123.93 121.5 139.6 112 157.11 112h197.78c17.51 0 33.18 9.5 39.33 23.85L432 224M80 224h352v144H80zM112 368v32H80v-32M432 368v32h-32v-32' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='144' cy='288' r='16' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='368' cy='288' r='16' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var carSportOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M469.71 234.6c-7.33-9.73-34.56-16.43-46.08-33.94s-20.95-55.43-50.27-70S288 112 256 112s-88 4-117.36 18.63-38.75 52.52-50.27 70-38.75 24.24-46.08 33.97S29.8 305.84 32.94 336s9 48 9 48h86c14.08 0 18.66-5.29 47.46-8 31.6-3 62.6-4 80.6-4s50 1 81.58 4c28.8 2.73 33.53 8 47.46 8h85s5.86-17.84 9-48-2.04-91.67-9.33-101.4zM400 384h56v16h-56zM56 384h56v16H56z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M364.47 309.16c-5.91-6.83-25.17-12.53-50.67-16.35S279 288 256.2 288s-33.17 1.64-57.61 4.81-42.79 8.81-50.66 16.35C136.12 320.6 153.42 333.44 167 335c13.16 1.5 39.47.95 89.31.95s76.15.55 89.31-.95c13.56-1.65 29.62-13.6 18.85-25.84zM431.57 243.05a3.23 3.23 0 00-3.1-3c-11.81-.42-23.8.42-45.07 6.69a93.88 93.88 0 00-30.08 15.06c-2.28 1.78-1.47 6.59 1.39 7.1a455.32 455.32 0 0052.82 3.1c10.59 0 21.52-3 23.55-12.44a52.41 52.41 0 00.49-16.51zM80.43 243.05a3.23 3.23 0 013.1-3c11.81-.42 23.8.42 45.07 6.69a93.88 93.88 0 0130.08 15.06c2.28 1.78 1.47 6.59-1.39 7.1a455.32 455.32 0 01-52.82 3.1c-10.59 0-21.52-3-23.55-12.44a52.41 52.41 0 01-.49-16.51z'/><path stroke-linecap='round' stroke-linejoin='round' d='M432 192h16M64 192h16M78 211s46.35-12 178-12 178 12 178 12' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var cardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='48' y='96' width='416' height='320' rx='56' ry='56' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linejoin='round' stroke-width='60' d='M48 192h416M128 300h48v20h-48z' class='ionicon-fill-none'/></svg>";
var checkmark = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var checkmarkCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z'/></svg>";
var checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var chevronBackOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
var closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
var copyOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='128' y='128' width='336' height='336' rx='57' ry='57' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var documentTextOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var heartOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var imageOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='48' y='80' width='416' height='352' rx='48' ry='48' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='336' cy='176' r='32' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352M224 432l123.34-123.34a32 32 0 0143.11-2L464 368' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var informationCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M220 220h32v116' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M208 340h88' class='ionicon-fill-none ionicon-stroke-width'/><path d='M248 130a26 26 0 1026 26 26 26 0 00-26-26z'/></svg>";
var locationOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='256' cy='192' r='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var lockClosedOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M336 208v-95a80 80 0 00-160 0v95' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect x='96' y='208' width='320' height='272' rx='48' ry='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var navigateOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 64L64 240.14h200a8 8 0 018 8V448z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var notificationsOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var person = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z'/></svg>";
var personOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var pricetagOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M435.25 48h-122.9a14.46 14.46 0 00-10.2 4.2L56.45 297.9a28.85 28.85 0 000 40.7l117 117a28.85 28.85 0 0040.7 0L459.75 210a14.46 14.46 0 004.2-10.2v-123a28.66 28.66 0 00-28.7-28.8z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M384 160a32 32 0 1132-32 32 32 0 01-32 32z'/></svg>";
var search = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z'/></svg>";
var searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var shieldCheckmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M336 176L225.2 304 176 255.8' class='ionicon-fill-none ionicon-stroke-width'/><path d='M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var star = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z'/></svg>";
var statsChart = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M104 496H72a24 24 0 01-24-24V328a24 24 0 0124-24h32a24 24 0 0124 24v144a24 24 0 01-24 24zM328 496h-32a24 24 0 01-24-24V232a24 24 0 0124-24h32a24 24 0 0124 24v240a24 24 0 01-24 24zM440 496h-32a24 24 0 01-24-24V120a24 24 0 0124-24h32a24 24 0 0124 24v352a24 24 0 01-24 24zM216 496h-32a24 24 0 01-24-24V40a24 24 0 0124-24h32a24 24 0 0124 24v432a24 24 0 01-24 24z'/></svg>";
var swapHorizontalOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M304 48l112 112-112 112M398.87 160H96M208 464L96 352l112-112M114 352h302' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var time = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 01-16-16V128a16 16 0 0132 0v128h80a16 16 0 010 32z'/></svg>";
var timeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M256 128v144h96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";

// src/main.ts
addIcons({
  addOutline,
  addCircleOutline,
  appsOutline,
  bicycleOutline,
  busOutline,
  carSportOutline,
  carOutline,
  cardOutline,
  checkmark,
  checkmarkCircle,
  checkmarkOutline,
  chevronBackOutline,
  closeCircle,
  copyOutline,
  documentTextOutline,
  heartOutline,
  imageOutline,
  informationCircleOutline,
  lockClosedOutline,
  locationOutline,
  navigateOutline,
  notificationsOutline,
  person,
  personOutline,
  pricetagOutline,
  search,
  searchOutline,
  shieldCheckmarkOutline,
  star,
  statsChart,
  swapHorizontalOutline,
  time,
  timeOutline
});
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-app");
      \u0275\u0275element(1, "ion-router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [IonApp, IonRouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [IonApp, IonRouterOutlet],
      template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/main.ts", lineNumber: 92 });
})();
bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
    provideRouter([
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        loadComponent: () => import("./home.page-UNM63JOE.js").then((m) => m.HomePage)
      },
      {
        path: "detalle",
        loadComponent: () => import("./detalle.page-4WT5O2TN.js").then((m) => m.DetallePage)
      },
      {
        path: "reserva",
        loadComponent: () => import("./reserva.page-CHWCDHOY.js").then((m) => m.ReservaPage)
      },
      {
        path: "pago",
        loadComponent: () => import("./pago.page-PTBBKPJ6.js").then((m) => m.PagoPage)
      },
      {
        path: "activa",
        loadComponent: () => import("./activa.page-2KRVL6KH.js").then((m) => m.ActivaPage)
      },
      {
        path: "publicar",
        loadComponent: () => import("./publicar.page-G3REDOMR.js").then((m) => m.PublicarPage)
      },
      {
        path: "historial",
        loadComponent: () => import("./historial.page-KYEXFSW2.js").then((m) => m.HistorialPage)
      },
      {
        path: "perfil",
        loadComponent: () => import("./perfil.page-3PXPICR5.js").then((m) => m.PerfilPage)
      },
      {
        path: "dashboard",
        loadComponent: () => import("./dashboard.page-WCDZRHCE.js").then((m) => m.DashboardPage)
      },
      { path: "**", redirectTo: "home" }
    ])
  ]
});
export {
  AppComponent
};
//# sourceMappingURL=main.js.map
