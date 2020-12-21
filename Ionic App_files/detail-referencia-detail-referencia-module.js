(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-referencia-detail-referencia-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-referencia/detail-referencia.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-referencia/detail-referencia.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>DetailReferencia</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/detail-referencia/detail-referencia-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/detail-referencia/detail-referencia-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: DetailReferenciaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailReferenciaPageRoutingModule", function() { return DetailReferenciaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_referencia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-referencia.page */ "./src/app/detail-referencia/detail-referencia.page.ts");




const routes = [
    {
        path: '',
        component: _detail_referencia_page__WEBPACK_IMPORTED_MODULE_3__["DetailReferenciaPage"]
    }
];
let DetailReferenciaPageRoutingModule = class DetailReferenciaPageRoutingModule {
};
DetailReferenciaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailReferenciaPageRoutingModule);



/***/ }),

/***/ "./src/app/detail-referencia/detail-referencia.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/detail-referencia/detail-referencia.module.ts ***!
  \***************************************************************/
/*! exports provided: DetailReferenciaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailReferenciaPageModule", function() { return DetailReferenciaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detail_referencia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-referencia-routing.module */ "./src/app/detail-referencia/detail-referencia-routing.module.ts");
/* harmony import */ var _detail_referencia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-referencia.page */ "./src/app/detail-referencia/detail-referencia.page.ts");







let DetailReferenciaPageModule = class DetailReferenciaPageModule {
};
DetailReferenciaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_referencia_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailReferenciaPageRoutingModule"]
        ],
        declarations: [_detail_referencia_page__WEBPACK_IMPORTED_MODULE_6__["DetailReferenciaPage"]]
    })
], DetailReferenciaPageModule);



/***/ }),

/***/ "./src/app/detail-referencia/detail-referencia.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/detail-referencia/detail-referencia.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1yZWZlcmVuY2lhL2RldGFpbC1yZWZlcmVuY2lhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/detail-referencia/detail-referencia.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/detail-referencia/detail-referencia.page.ts ***!
  \*************************************************************/
/*! exports provided: DetailReferenciaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailReferenciaPage", function() { return DetailReferenciaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DetailReferenciaPage = class DetailReferenciaPage {
    constructor() { }
    ngOnInit() {
    }
};
DetailReferenciaPage.ctorParameters = () => [];
DetailReferenciaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-referencia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-referencia.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-referencia/detail-referencia.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-referencia.page.scss */ "./src/app/detail-referencia/detail-referencia.page.scss")).default]
    })
], DetailReferenciaPage);



/***/ })

}]);
//# sourceMappingURL=detail-referencia-detail-referencia-module.js.map