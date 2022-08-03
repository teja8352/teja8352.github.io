"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_gurukul_orders_orders_module_ts"],{

/***/ 3760:
/*!***************************************************************!*\
  !*** ./src/app/pages/gurukul/orders/orders-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPageRoutingModule": () => (/* binding */ OrdersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.page */ 9025);




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_0__.OrdersPage
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ 758:
/*!*******************************************************!*\
  !*** ./src/app/pages/gurukul/orders/orders.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPageModule": () => (/* binding */ OrdersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders-routing.module */ 3760);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.page */ 9025);
/* harmony import */ var _payment_info_payment_info_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payment-info/payment-info.module */ 8166);








let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrdersPageRoutingModule,
            _payment_info_payment_info_module__WEBPACK_IMPORTED_MODULE_2__.PaymentInfoPageModule
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_1__.OrdersPage]
    })
], OrdersPageModule);



/***/ }),

/***/ 9025:
/*!*****************************************************!*\
  !*** ./src/app/pages/gurukul/orders/orders.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPage": () => (/* binding */ OrdersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _orders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.page.html?ngResource */ 2975);
/* harmony import */ var _orders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.page.scss?ngResource */ 5504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);
/* harmony import */ var _payment_info_payment_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../payment-info/payment-info.page */ 1283);










let OrdersPage = class OrdersPage {
    constructor(dataService, cd, modalCtrl, commonService, stateService, authService) {
        this.dataService = dataService;
        this.cd = cd;
        this.modalCtrl = modalCtrl;
        this.commonService = commonService;
        this.stateService = stateService;
        this.authService = authService;
        this.orders = [];
        this.dataService.getOrders().subscribe(res => {
            this.orders = res;
            console.log('orders:::::::::', this.orders);
            this.cd.detectChanges();
        });
    }
    ngOnInit() { }
    release(order) {
        this.dataService.updateOrder({ status: true, id: order.id }).then((resp) => {
            this.commonService.presentToast('Updated the payment status.', 'primary');
        }, err => {
            console.error('Error while adding the test:::::\n', err);
            this.commonService.presentToast('Unable to update order', 'danger');
        });
    }
    openScreenshot(payment_id) {
        this.modalCtrl.create({
            component: _payment_info_payment_info_page__WEBPACK_IMPORTED_MODULE_6__.PaymentInfoPage,
            componentProps: { payment_id },
        }).then((modal) => {
            modal.present();
        });
    }
    logout() {
        this.authService.logout();
    }
};
OrdersPage.ctorParameters = () => [
    { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__.StateService },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
OrdersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-orders',
        template: _orders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_orders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OrdersPage);



/***/ }),

/***/ 4580:
/*!***************************************************************************!*\
  !*** ./src/app/pages/gurukul/payment-info/payment-info-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentInfoPageRoutingModule": () => (/* binding */ PaymentInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _payment_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-info.page */ 1283);




const routes = [
    {
        path: '',
        component: _payment_info_page__WEBPACK_IMPORTED_MODULE_0__.PaymentInfoPage
    }
];
let PaymentInfoPageRoutingModule = class PaymentInfoPageRoutingModule {
};
PaymentInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentInfoPageRoutingModule);



/***/ }),

/***/ 8166:
/*!*******************************************************************!*\
  !*** ./src/app/pages/gurukul/payment-info/payment-info.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentInfoPageModule": () => (/* binding */ PaymentInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _payment_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-info-routing.module */ 4580);
/* harmony import */ var _payment_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-info.page */ 1283);







let PaymentInfoPageModule = class PaymentInfoPageModule {
};
PaymentInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentInfoPageRoutingModule
        ],
        declarations: [_payment_info_page__WEBPACK_IMPORTED_MODULE_1__.PaymentInfoPage]
    })
], PaymentInfoPageModule);



/***/ }),

/***/ 1283:
/*!*****************************************************************!*\
  !*** ./src/app/pages/gurukul/payment-info/payment-info.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentInfoPage": () => (/* binding */ PaymentInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _payment_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-info.page.html?ngResource */ 2626);
/* harmony import */ var _payment_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-info.page.scss?ngResource */ 4582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-inferrable-types */


let PaymentInfoPage = class PaymentInfoPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.payment_id = '';
    }
    ngOnInit() {
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
PaymentInfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
PaymentInfoPage.propDecorators = {
    payment_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PaymentInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-payment-info',
        template: _payment_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payment_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentInfoPage);



/***/ }),

/***/ 5504:
/*!******************************************************************!*\
  !*** ./src/app/pages/gurukul/orders/orders.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4582:
/*!******************************************************************************!*\
  !*** ./src/app/pages/gurukul/payment-info/payment-info.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LWluZm8ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2975:
/*!******************************************************************!*\
  !*** ./src/app/pages/gurukul/orders/orders.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"students\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      orders\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Orders</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"\">\n    <ion-row class=\"\">\n      <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let order of orders\">\n        <ion-card mode=\"ios\" class=\"ion-no-margin h-100\">\n          <ion-card-content>\n            <ion-text color=\"dark\">\n              <p>{{ order.course_name }}</p>\n              <p>{{ order.student_id }}</p>\n            </ion-text>\n            <ion-button [disabled]=\"order.status\" (click)=\"release(order)\">Release</ion-button>\n            <ion-button (click)=\"openScreenshot(order.payment_id)\">Transaction</ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ }),

/***/ 2626:
/*!******************************************************************************!*\
  !*** ./src/app/pages/gurukul/payment-info/payment-info.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"dark\">\n    <ion-title>Payment Info</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"dark\">\n\n  <div class=\"w-100 h-100\">\n    <img [src]=\"payment_id\" class=\"w-1oo h-100\" style=\"object-fit: contain;\">\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gurukul_orders_orders_module_ts.js.map