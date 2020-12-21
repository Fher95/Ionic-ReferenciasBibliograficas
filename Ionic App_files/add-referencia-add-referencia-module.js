(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-referencia-add-referencia-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-referencia/add-referencia.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-referencia/add-referencia.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Agregar Referencia</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"formulario\">\n    <ion-item>\n      <ion-label position=\"floating\">Titulo Publicacion</ion-label>\n      <ion-input\n        type=\"text\"\n        formControlName=\"titulopub\"\n        name=\"titulo\"\n      ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Autores</ion-label>\n      <ion-input\n        type=\"text\"\n        formControlName=\"autores\"\n        name=\"autores\"\n      ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Tipo Publicacion</ion-label>\n      <ion-input\n        type=\"text\"\n        formControlName=\"tipopub\"\n        name=\"tipopub\"        \n      ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Evento o revista</ion-label>\n      <ion-input\n        type=\"text\"\n        formControlName=\"eventorevista\"\n        name=\"eventorevista\"        \n      ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Codigo identificador documento</ion-label>\n      <ion-input\n        type=\"text\"\n        formGroupName=\"doi\"\n        name=\"doi\"        \n      ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Año Publicacion</ion-label>\n      <ion-input\n        type=\"number\"\n        formControlName=\"anyopub\"\n        name=\"anyopub\"        \n      ></ion-input>\n    </ion-item>\n  </form>\n\n  <ion-row position=\"bottom\">\n    <ion-col>\n      <ion-button\n        type=\"submit\"\n        color=\"primary\"\n        expand=\"block\"        \n        (click)=\"guardarReferencia()\"\n      >\n        Guardar\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/add-referencia/add-referencia-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/add-referencia/add-referencia-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddReferenciaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReferenciaPageRoutingModule", function() { return AddReferenciaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_referencia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-referencia.page */ "./src/app/add-referencia/add-referencia.page.ts");




const routes = [
    {
        path: '',
        component: _add_referencia_page__WEBPACK_IMPORTED_MODULE_3__["AddReferenciaPage"]
    }
];
let AddReferenciaPageRoutingModule = class AddReferenciaPageRoutingModule {
};
AddReferenciaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddReferenciaPageRoutingModule);



/***/ }),

/***/ "./src/app/add-referencia/add-referencia.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/add-referencia/add-referencia.module.ts ***!
  \*********************************************************/
/*! exports provided: AddReferenciaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReferenciaPageModule", function() { return AddReferenciaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_referencia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-referencia-routing.module */ "./src/app/add-referencia/add-referencia-routing.module.ts");
/* harmony import */ var _add_referencia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-referencia.page */ "./src/app/add-referencia/add-referencia.page.ts");







let AddReferenciaPageModule = class AddReferenciaPageModule {
};
AddReferenciaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_referencia_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddReferenciaPageRoutingModule"]
        ],
        declarations: [_add_referencia_page__WEBPACK_IMPORTED_MODULE_6__["AddReferenciaPage"]]
    })
], AddReferenciaPageModule);



/***/ }),

/***/ "./src/app/add-referencia/add-referencia.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/add-referencia/add-referencia.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1yZWZlcmVuY2lhL2FkZC1yZWZlcmVuY2lhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/add-referencia/add-referencia.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/add-referencia/add-referencia.page.ts ***!
  \*******************************************************/
/*! exports provided: AddReferenciaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReferenciaPage", function() { return AddReferenciaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_referencias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/referencias.service */ "./src/app/services/referencias.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");









let AddReferenciaPage = class AddReferenciaPage {
    constructor(route, nav, referenciaService, loadingController, authService, db, fb) {
        this.route = route;
        this.nav = nav;
        this.referenciaService = referenciaService;
        this.loadingController = loadingController;
        this.authService = authService;
        this.db = db;
        this.fb = fb;
    }
    crearFormulario() {
        this.formulario = this.fb.group({
            idreferencia: [null],
            titulopub: [null],
            autores: [null],
            tipopub: [null],
            eventorevista: [null],
            doi: [null],
            anyopub: [null],
        });
    }
    ngOnInit() {
        this.idUsuario = this.authService.userIdActual;
        this.crearFormulario();
        const idRef = this.route.snapshot.params["id"];
        if (idRef) {
            this.cargarReferencia(idRef);
        }
    }
    cargarReferencia(idReferencia) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: "Cargando...",
            });
            yield loading.present();
            this.referenciaService
                .getReferencia(idReferencia)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((referencia) => {
                this.actualizarFormulario(referencia);
                loading.dismiss();
            }))
                .subscribe();
        });
    }
    actualizarFormulario(objReferencia) {
        this.formulario.patchValue({
            titulopub: objReferencia.titulopub,
            tipopub: objReferencia.tipopub,
            autores: objReferencia.autores,
            eventorevista: objReferencia.eventorevista,
            doi: objReferencia.doi,
            anyopub: objReferencia.anyopub,
            idreferencia: objReferencia.idreferencia,
        });
    }
    guardarReferencia() {
        const objReferencia = {
            titulopub: this.formulario.get("titulopub").value,
            tipopub: this.formulario.get("tipopub").value,
            autores: this.formulario.get("autores").value,
            eventorevista: this.formulario.get("eventorevista").value,
            doi: this.formulario.get("doi").value,
            anyopub: this.formulario.get("anyopub").value,
            idreferencia: this.formulario.get("idreferencia").value,
        };
        this.saveReferencia(objReferencia);
    }
    saveReferencia(objReferencia) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: "Guardando....",
            });
            yield loading.present();
            this.referenciaService.addReferencia(objReferencia).then(() => {
                loading.dismiss();
                this.nav.navigateForward("/lista-referencias");
            });
        });
    }
};
AddReferenciaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_referencias_service__WEBPACK_IMPORTED_MODULE_4__["ReferenciasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
AddReferenciaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-referencia",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-referencia.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-referencia/add-referencia.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-referencia.page.scss */ "./src/app/add-referencia/add-referencia.page.scss")).default]
    })
], AddReferenciaPage);



/***/ })

}]);
//# sourceMappingURL=add-referencia-add-referencia-module.js.map