"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_gurukul_accounts_accounts_module_ts"],{

/***/ 3533:
/*!*******************************************************************!*\
  !*** ./src/app/pages/gurukul/accounts/accounts-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsPageRoutingModule": () => (/* binding */ AccountsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _accounts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts.page */ 5789);




const routes = [
    {
        path: '',
        component: _accounts_page__WEBPACK_IMPORTED_MODULE_0__.AccountsPage
    }
];
let AccountsPageRoutingModule = class AccountsPageRoutingModule {
};
AccountsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountsPageRoutingModule);



/***/ }),

/***/ 5599:
/*!***********************************************************!*\
  !*** ./src/app/pages/gurukul/accounts/accounts.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsPageModule": () => (/* binding */ AccountsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts-routing.module */ 3533);
/* harmony import */ var _accounts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts.page */ 5789);







let AccountsPageModule = class AccountsPageModule {
};
AccountsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _accounts_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountsPageRoutingModule
        ],
        declarations: [_accounts_page__WEBPACK_IMPORTED_MODULE_1__.AccountsPage]
    })
], AccountsPageModule);



/***/ }),

/***/ 5789:
/*!*********************************************************!*\
  !*** ./src/app/pages/gurukul/accounts/accounts.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsPage": () => (/* binding */ AccountsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _accounts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts.page.html?ngResource */ 6038);
/* harmony import */ var _accounts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts.page.scss?ngResource */ 114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AccountsPage = class AccountsPage {
    constructor() { }
    ngOnInit() {
    }
};
AccountsPage.ctorParameters = () => [];
AccountsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-accounts',
        template: _accounts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_accounts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountsPage);



/***/ }),

/***/ 114:
/*!**********************************************************************!*\
  !*** ./src/app/pages/gurukul/accounts/accounts.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50cy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6038:
/*!**********************************************************************!*\
  !*** ./src/app/pages/gurukul/accounts/accounts.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"gurukul\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>accounts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gurukul_accounts_accounts_module_ts.js.map