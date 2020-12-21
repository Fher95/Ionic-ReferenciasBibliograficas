(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verificar-email-verificar-email-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verificar-email/verificar-email.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verificar-email/verificar-email.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>VerificarEmail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p>Lo sentimos, su cuenta aún no ha sido registrada y activada.</p>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/verificar-email/verificar-email-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/verificar-email/verificar-email-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: VerificarEmailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificarEmailPageRoutingModule", function() { return VerificarEmailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _verificar_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verificar-email.page */ "./src/app/verificar-email/verificar-email.page.ts");




const routes = [
    {
        path: '',
        component: _verificar_email_page__WEBPACK_IMPORTED_MODULE_3__["VerificarEmailPage"]
    }
];
let VerificarEmailPageRoutingModule = class VerificarEmailPageRoutingModule {
};
VerificarEmailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerificarEmailPageRoutingModule);



/***/ }),

/***/ "./src/app/verificar-email/verificar-email.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/verificar-email/verificar-email.module.ts ***!
  \***********************************************************/
/*! exports provided: VerificarEmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificarEmailPageModule", function() { return VerificarEmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _verificar_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verificar-email-routing.module */ "./src/app/verificar-email/verificar-email-routing.module.ts");
/* harmony import */ var _verificar_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verificar-email.page */ "./src/app/verificar-email/verificar-email.page.ts");







let VerificarEmailPageModule = class VerificarEmailPageModule {
};
VerificarEmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verificar_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerificarEmailPageRoutingModule"]
        ],
        declarations: [_verificar_email_page__WEBPACK_IMPORTED_MODULE_6__["VerificarEmailPage"]]
    })
], VerificarEmailPageModule);



/***/ }),

/***/ "./src/app/verificar-email/verificar-email.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/verificar-email/verificar-email.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhci1lbWFpbC92ZXJpZmljYXItZW1haWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/verificar-email/verificar-email.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/verificar-email/verificar-email.page.ts ***!
  \*********************************************************/
/*! exports provided: VerificarEmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificarEmailPage", function() { return VerificarEmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let VerificarEmailPage = class VerificarEmailPage {
    constructor() { }
    ngOnInit() {
    }
};
VerificarEmailPage.ctorParameters = () => [];
VerificarEmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verificar-email',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./verificar-email.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verificar-email/verificar-email.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./verificar-email.page.scss */ "./src/app/verificar-email/verificar-email.page.scss")).default]
    })
], VerificarEmailPage);



/***/ })

}]);
//# sourceMappingURL=verificar-email-verificar-email-module.js.map