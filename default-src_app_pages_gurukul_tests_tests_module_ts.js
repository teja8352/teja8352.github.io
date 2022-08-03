"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_gurukul_tests_tests_module_ts"],{

/***/ 7994:
/*!*************************************************************!*\
  !*** ./src/app/pages/gurukul/tests/tests-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestsPageRoutingModule": () => (/* binding */ TestsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tests_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tests.page */ 1442);




const routes = [
    {
        path: '',
        component: _tests_page__WEBPACK_IMPORTED_MODULE_0__.TestsPage
    }
];
let TestsPageRoutingModule = class TestsPageRoutingModule {
};
TestsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TestsPageRoutingModule);



/***/ }),

/***/ 9894:
/*!*****************************************************!*\
  !*** ./src/app/pages/gurukul/tests/tests.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestsPageModule": () => (/* binding */ TestsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tests_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tests-routing.module */ 7994);
/* harmony import */ var _tests_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tests.page */ 1442);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-pdf-viewer */ 3940);








let TestsPageModule = class TestsPageModule {
};
TestsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__.PdfViewerModule,
            _tests_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestsPageRoutingModule
        ],
        declarations: [_tests_page__WEBPACK_IMPORTED_MODULE_1__.TestsPage]
    })
], TestsPageModule);



/***/ }),

/***/ 1442:
/*!***************************************************!*\
  !*** ./src/app/pages/gurukul/tests/tests.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestsPage": () => (/* binding */ TestsPage)
/* harmony export */ });
/* harmony import */ var _Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tests_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tests.page.html?ngResource */ 8683);
/* harmony import */ var _tests_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tests.page.scss?ngResource */ 826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/fb-collections */ 744);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 6578);
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/data/data.service */ 9244);











let TestsPage = class TestsPage {
  constructor(cd, dataService, stateService, storageService, loadingCtrl, commonService, modalCtrl) {
    this.cd = cd;
    this.dataService = dataService;
    this.stateService = stateService;
    this.storageService = storageService;
    this.loadingCtrl = loadingCtrl;
    this.commonService = commonService;
    this.modalCtrl = modalCtrl;
    this.tests = [];
    this.course = null;
    this.schedule = null;
    this.segment = 'schedule';
    this.zoom = 1;
    this.testSubscription = null;
    this.course = this.stateService.getData('course');
    this.testSubscription = this.dataService.getTests(this.course.id).subscribe(res => {
      this.tests = res;
      this.cd.detectChanges();
    });
    this.dataService.getScheduleByCourseId(this.course?.id).subscribe(resp => {
      this.schedule = resp[0];
      this.zoom = this.segment === 'schedule' ? 1 : this.zoom;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {}

  uploadSchedule(event) {
    var _this = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedFile = event.target.files[0];
      const loading = yield _this.loadingCtrl.create({
        message: 'Uploading schedule'
      });
      loading.present();

      try {
        const file = {
          file: selectedFile,
          name: _this.course?.id + '_G_' + selectedFile.name,
          course_id: _this.course.id
        };
        const upload = yield _this.storageService.pushFileToStorage(file, `uploads/schedule/${file.name}`);

        if (upload && upload.file_url) {
          const schedule = {
            file_url: upload.file_url,
            type: _this.commonService.getExtension(selectedFile.name),
            name: selectedFile.name,
            course_id: _this.course.id
          };

          if (_this.commonService.isValidData(_this.schedule?.id)) {
            schedule.id = _this.schedule.id;
          }

          _this.dataService.update(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_3__.FirebaseCollections.SCHEDULES, schedule).then(resp => {
            // console.log('resp::::::::::::\n', resp);
            loading.dismiss();
          }, err => {
            loading.dismiss();
            console.error('Error while uploading schdule:::::::::::\n', { ...err
            });

            if (err.code === 'not-found' || err.code === 'invalid-argument') {
              _this.dataService.add(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_3__.FirebaseCollections.SCHEDULES, schedule).then(resp => {
                // console.log(resp);
                _this.dataService.getScheduleByCourseId(_this.course?.id).subscribe(response => {
                  _this.schedule = response[0];
                });
              }, error => {
                console.error('Error while adding schdule:::::::::::\n', error);
              });
            }
          });
        } else {
          console.error('Error while uploading schdule:::::::::::\n', upload);
          loading.dismiss();
        }
      } catch (exception) {
        console.error('Exception while uploading schdule:::::::::::\n', exception, { ...exception
        });
        loading.dismiss();
      }
    })();
  }

  pageRendered(event) {// console.log('event::::::::::::::::::::\n', event);
  }

  zoomIn() {
    this.zoom = this.zoom === 0 ? 1 : this.zoom + 1;
  }

  zoomOut() {
    this.zoom = this.zoom - 1;

    if (this.zoom === 0) {
      this.zoom = 1;
    }
  }

  addTest() {
    var _this2 = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.commonService.navigateForward('add-test');
    })();
  }

  openTest(test) {
    var _this3 = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.stateService.setData('test', test);

      _this3.commonService.navigateForward('test');
    })();
  }

  deleteSchedule() {
    const schedule = { ...this.schedule
    };
    this.dataService.delete(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_3__.FirebaseCollections.SCHEDULES, {
      id: schedule.id
    }).then(resp => {
      this.storageService.deleteFile('uploads/schedule/' + this.course?.id + '_G_' + schedule.name);
    }, err => {
      console.error('Error while deleting schdule:::::::::::\n', err);
    });
  }

  deactivateTest(event, test) {
    event.stopPropagation();
    const status = test.status === 'INACTIVE' ? 'ACTIVE' : 'INACTIVE';
    this.dataService.updateTest(test.id, {
      status
    }).then(res => {//
    }, err => {
      console.error('Error wjile deleteing course::::::::::\n', err);
    });
  }

  deleteTest(event, test) {
    event.stopPropagation();
    this.dataService.updateTest(test.id, {
      status: 'DELETED'
    }).then(res => {//
    }, err => {
      console.error('Error wjile deleteing course::::::::::\n', err);
    });
  }

  trackByFn(index, item) {
    return item.id;
  }

  ngOnDestory() {
    this.testSubscription?.unsubscribe();
  }

};

TestsPage.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
}, {
  type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_7__.DataService
}, {
  type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__.StateService
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}];

TestsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-tests',
  template: _tests_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tests_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TestsPage);


/***/ }),

/***/ 826:
/*!****************************************************************!*\
  !*** ./src/app/pages/gurukul/tests/tests.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "#fileInput,\n#uploadReview {\n  position: absolute;\n  opacity: 0;\n}\n\n.zoom-btns {\n  bottom: 20px;\n  right: 20px;\n  z-index: 99;\n  background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0FBQ0oiLCJmaWxlIjoidGVzdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZpbGVJbnB1dCxcbiN1cGxvYWRSZXZpZXcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4uem9vbS1idG5zIHtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgei1pbmRleDogOTk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn0iXX0= */";

/***/ }),

/***/ 8683:
/*!****************************************************************!*\
  !*** ./src/app/pages/gurukul/tests/tests.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"gurukul/courses\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Tests\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-segment value=\"all\" color=\"medium\" scrollable=\"true\" mode=\"md\" [(ngModel)]=\"segment\">\n\n      <ion-segment-button value=\"schedule\">\n        <ion-label>Schedule</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"tests\">\n        <ion-label>Tests</ion-label>\n      </ion-segment-button>\n\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div *ngIf=\"segment === 'schedule'\" class=\"w-100 h-100 position-relative\">\n    <ion-toolbar color=\"light\">\n      <ion-title class=\"size-14 fw-bold m-0 p-3 ion-border\">\n        {{schedule?.name || 'Schedule Name'}}\n      </ion-title>\n      <ion-buttons slot=\"end\" *ngIf=\"schedule?.name.length > 0\">\n        <ion-button color=\"danger\" (click)=\"deleteSchedule()\">\n          <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <pdf-viewer [src]=\"schedule?.file_url || '../../../../assets/no_schedule.pdf'\" (page)=\"0\" [zoom]=\"zoom\"\n      (page-rendered)=\"pageRendered($event)\" class=\"d-block w-100\" [render-text]=\"true\" [original-size]=\"false\"\n      style=\"height: calc(100% - 53px); background: var(--ion-color-medium);\">\n    </pdf-viewer>\n\n    <ion-buttons class=\"position-absolute zoom-btns rounded-pill shadow\">\n      <ion-button (click)=\"zoomIn()\">\n        <ion-icon slot=\"icon-only\" class=\"size-48\" name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"zoomOut()\">\n        <ion-icon slot=\"icon-only\" class=\"size-48\" name=\"remove-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <div *ngIf=\"segment === 'tests'\" class=\"w-100 h-100 position-relative\">\n    <ion-header collapse=\"condense\">\n      <ion-toolbar>\n        <ion-title size=\"large\">Tests</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"\">\n        <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let test of tests;trackBy: trackByFn\">\n          <ion-item color=\"white\" class=\"border-right border-bottom ion-no-padding p-2 pl-3 h-100\"\n            style=\"--inner-padding-end: 0;\" (click)=\"test.status === 'DELETED' ? '' : openTest(test)\" lines=\"none\"\n            [ngClass]=\"{'disable-without-events': test.status === 'DELETED'}\">\n            <ion-label class=\"ion-text-wrap mb-0\">\n              <h2 class=\"fw-semi-bold\">\n                {{ test.title }}\n              </h2>\n              <ion-item lines=\"none\" class=\"ion-no-padding\" style=\"--inner-padding-end: 0;\">\n                <ion-button size=\"small\" [color]=\"test.status === 'ACTIVE' ? 'primary' : 'medium'\"\n                  (click)=\"deactivateTest($event, test)\">\n                  {{test.status === 'ACTIVE' ? 'Active' : 'Inactive'}}</ion-button>\n                <ion-buttons class=\"m-0\" slot=\"end\" *ngIf=\"test.status !== 'DELETED'\">\n                  <ion-button color=\"danger\" (click)=\"deleteTest($event, test)\">\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                  </ion-button>\n                </ion-buttons>\n              </ion-item>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"addTest()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n\n</ion-content>\n<ion-footer *ngIf=\"segment === 'schedule'\">\n  <ion-toolbar>\n    <input type=\"file\" #f id=\"fileInput\" (change)=\"uploadSchedule($event)\" accept=\"application/pdf\" />\n    <ion-button for=\"fileInput\" expand=\"full\" class=\"ion-no-margin\" size=\"large\" (click)=\"f.click()\">\n      <span style=\"font-size: 14px\">Upload Schedule</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_gurukul_tests_tests_module_ts.js.map