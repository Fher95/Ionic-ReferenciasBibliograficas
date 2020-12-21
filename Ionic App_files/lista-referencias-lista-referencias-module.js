(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lista-referencias-lista-referencias-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lista-referencias/lista-referencias.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lista-referencias/lista-referencias.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Referencias Bibliográficas</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover()\">\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"_popOver($event)\">\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" name=\"ellipsis-vertical-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- List of Text Items -->\n  <ion-list>\n    <ion-item *ngFor=\"let item of refs\">\n      <ion-label>\n        <h2>{{item.titulopub}}</h2>\n        <h3>{{item.autores}}</h3>\n        <p>{{item.eventorevista}}</p>\n      </ion-label>\n      <ion-button (click)=\"this.verDetalles(item.id)\"\n        ><ion-icon name=\"eye-outline\"></ion-icon></ion-button\n      >\n      <ion-button color=\"danger\" (click)=\"this.eliminarReferencia(item.id)\"\n        ><ion-icon name=\"trash-outline\"></ion-icon></ion-button\n      >\n    </ion-item>\n  </ion-list>\n\n  <!-- fab placed to the top end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"this.onAgregarReferencia()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings-menu/settings-menu.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings-menu/settings-menu.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n  <!-- <ion-list-header>Ionic</ion-list-header> -->\n  <ion-item (click)=\"this.cerrarSesion()\" button>Cerrar Sesión</ion-item>  \n  <ion-item lines=\"none\" detail=\"false\" button (click)=\"dismissPopover()\">Cerrar</ion-item>  \n</ion-list>");

/***/ }),

/***/ "./src/app/lista-referencias/lista-referencias-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/lista-referencias/lista-referencias-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ListaReferenciasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaReferenciasPageRoutingModule", function() { return ListaReferenciasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lista_referencias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista-referencias.page */ "./src/app/lista-referencias/lista-referencias.page.ts");




const routes = [
    {
        path: '',
        component: _lista_referencias_page__WEBPACK_IMPORTED_MODULE_3__["ListaReferenciasPage"]
    }
];
let ListaReferenciasPageRoutingModule = class ListaReferenciasPageRoutingModule {
};
ListaReferenciasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListaReferenciasPageRoutingModule);



/***/ }),

/***/ "./src/app/lista-referencias/lista-referencias.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/lista-referencias/lista-referencias.module.ts ***!
  \***************************************************************/
/*! exports provided: ListaReferenciasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaReferenciasPageModule", function() { return ListaReferenciasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _lista_referencias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista-referencias-routing.module */ "./src/app/lista-referencias/lista-referencias-routing.module.ts");
/* harmony import */ var _lista_referencias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista-referencias.page */ "./src/app/lista-referencias/lista-referencias.page.ts");
/* harmony import */ var _settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../settings-menu/settings-menu.component */ "./src/app/settings-menu/settings-menu.component.ts");








let ListaReferenciasPageModule = class ListaReferenciasPageModule {
};
ListaReferenciasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lista_referencias_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListaReferenciasPageRoutingModule"]
        ],
        declarations: [_lista_referencias_page__WEBPACK_IMPORTED_MODULE_6__["ListaReferenciasPage"], _settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_7__["SettingsMenuComponent"]]
    })
], ListaReferenciasPageModule);



/***/ }),

/***/ "./src/app/lista-referencias/lista-referencias.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/lista-referencias/lista-referencias.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhLXJlZmVyZW5jaWFzL2xpc3RhLXJlZmVyZW5jaWFzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/lista-referencias/lista-referencias.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/lista-referencias/lista-referencias.page.ts ***!
  \*************************************************************/
/*! exports provided: ListaReferenciasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaReferenciasPage", function() { return ListaReferenciasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_referencias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/referencias.service */ "./src/app/services/referencias.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../settings-menu/settings-menu.component */ "./src/app/settings-menu/settings-menu.component.ts");








let ListaReferenciasPage = class ListaReferenciasPage {
    constructor(popoverController, authService, referenciaService, router) {
        this.popoverController = popoverController;
        this.authService = authService;
        this.referenciaService = referenciaService;
        this.router = router;
        this.currentPopover = null;
    }
    ionViewDidEnter() {
        const userId = this.authService.userIdActual;
        this.referenciaService.setCollections(userId);
        this.cargarLista();
        // this.authService.user$
        // .pipe(      
        //   tap((user) => {
        //     this.usuario = user;
        //     console.log('Usuario Lista referencias: ', user.uid);
        //     this.referenciaService.setCollections(user.uid);          
        //     this.cargarLista();
        //   })
        // ).subscribe();
    }
    ngOnInit() {
        // console.log('Usuario actual en lista: ', this.authService.getActualUser())
        // this.authService.user$.pipe(
        //   tap(
        //     user => {
        //       this.usuario = user;
        //       console.log('Usuario: ',this.usuario);
        //     }
        //   )
        // )
        // .subscribe();
    }
    cargarLista() {
        this.referenciaService
            .getReferencias()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((lista) => {
            this.refs = lista;
        }))
            .subscribe();
    }
    onAgregarReferencia() {
        this.router.navigate(["add-referencia"]);
    }
    eliminarReferencia(refId) {
        this.referenciaService.removeReferencia(refId);
    }
    verDetalles(idRef) {
        this.router.navigate(["add-referencia", idRef]);
    }
    _popOver(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popOver = yield this.popoverController.create({
                component: _settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_7__["SettingsMenuComponent"],
                cssClass: "my-popover-class",
                event: ev,
            });
            popOver.onDidDismiss().then((data) => { console.log(data); this.cerrarComponente(); });
            return yield popOver.present();
        });
    }
    cerrarComponente() {
        close();
    }
};
ListaReferenciasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_referencias_service__WEBPACK_IMPORTED_MODULE_5__["ReferenciasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ListaReferenciasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-lista-referencias",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lista-referencias.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lista-referencias/lista-referencias.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lista-referencias.page.scss */ "./src/app/lista-referencias/lista-referencias.page.scss")).default]
    })
], ListaReferenciasPage);



/***/ }),

/***/ "./src/app/settings-menu/settings-menu.component.scss":
/*!************************************************************!*\
  !*** ./src/app/settings-menu/settings-menu.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzLW1lbnUvc2V0dGluZ3MtbWVudS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/settings-menu/settings-menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/settings-menu/settings-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsMenuComponent", function() { return SettingsMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let SettingsMenuComponent = class SettingsMenuComponent {
    constructor(popCtrl, authService, router) {
        this.popCtrl = popCtrl;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() { }
    dismissPopover() {
        this.popCtrl.dismiss();
    }
    cerrarSesion() {
        this.authService.logout();
        this.dismissPopover();
        this.router.navigate(["login"]);
    }
};
SettingsMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SettingsMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-settings-menu",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings-menu/settings-menu.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings-menu.component.scss */ "./src/app/settings-menu/settings-menu.component.scss")).default]
    })
], SettingsMenuComponent);



/***/ })

}]);
//# sourceMappingURL=lista-referencias-lista-referencias-module.js.map