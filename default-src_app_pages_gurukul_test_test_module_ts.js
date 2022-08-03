(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_gurukul_test_test_module_ts"],{

/***/ 8300:
/*!***********************************************************!*\
  !*** ./src/app/pages/gurukul/test/test-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPageRoutingModule": () => (/* binding */ TestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.page */ 3087);




const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_0__.TestPage
    }
];
let TestPageRoutingModule = class TestPageRoutingModule {
};
TestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TestPageRoutingModule);



/***/ }),

/***/ 4254:
/*!***************************************************!*\
  !*** ./src/app/pages/gurukul/test/test.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPageModule": () => (/* binding */ TestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-routing.module */ 8300);
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.page */ 3087);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-pdf-viewer */ 3940);
/* harmony import */ var _answer_sheets_answer_sheets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../answer-sheets/answer-sheets.module */ 1141);









let TestPageModule = class TestPageModule {
};
TestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _test_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestPageRoutingModule,
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__.PdfViewerModule,
            _answer_sheets_answer_sheets_module__WEBPACK_IMPORTED_MODULE_2__.AnswerSheetsPageModule
        ],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_1__.TestPage]
    })
], TestPageModule);



/***/ }),

/***/ 3087:
/*!*************************************************!*\
  !*** ./src/app/pages/gurukul/test/test.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPage": () => (/* binding */ TestPage)
/* harmony export */ });
/* harmony import */ var _Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _test_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.page.html?ngResource */ 7790);
/* harmony import */ var _test_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.page.scss?ngResource */ 4769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ 9763);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/data.service */ 9244);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 6578);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/constants/fb-collections */ 744);
/* harmony import */ var _answer_sheets_answer_sheets_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../answer-sheets/answer-sheets.page */ 558);













let TestPage = class TestPage {
  constructor(cd, dataService, stateService, storageService, loadingCtrl, commonService, modalCtrl) {
    this.cd = cd;
    this.dataService = dataService;
    this.stateService = stateService;
    this.storageService = storageService;
    this.loadingCtrl = loadingCtrl;
    this.commonService = commonService;
    this.modalCtrl = modalCtrl;
    this.test = null;
    this.segment = 'question-papers';
    this.schedule = null;
    this.questionPaper = null;
    this.isAudioPlaying = true;
    this.zoom = 1;
    this.answerSheets = [];
    this.courseId = this.stateService.getData('course')?.id;
    this.testId = this.stateService.getData('test')?.id;
    this.dataService.getTestById(this.testId).subscribe(resp => {
      this.test = resp;
      this.cd.detectChanges();
    });
    this.dataService.getQuestionPaperByTestId(this.testId).subscribe(resp => {
      this.questionPaper = resp[0];
      this.zoom = this.segment === 'question-papers' ? 1 : this.zoom;
      this.cd.detectChanges();
    });
    this.dataService.getAnswerSheets(this.testId).subscribe(resp => {
      this.answerSheets = resp;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {}

  segmentChanged(event) {
    console.log(event); // this.segment = event?.detail?.value;
  }

  playAudio(url) {
    console.log(this.audio.canPlayType);
    this.audio = new Audio(url); // if(this.audio.canPlayType)
  }

  playVideo(url) {//
  }

  download(file) {
    (0,file_saver__WEBPACK_IMPORTED_MODULE_7__.saveAs)(file.file_url, file.name);
  }

  uploadValuedAnswerSheert(answer) {
    this.modalCtrl.create({
      component: _answer_sheets_answer_sheets_page__WEBPACK_IMPORTED_MODULE_9__.AnswerSheetsPage,
      componentProps: {
        data: { ...answer,
          test: this.test
        }
      },
      backdropDismiss: false
    }).then(modal => {
      modal.present();
    }, err => {
      console.error('Error while opening modal:::::::::\n', err);
    });
  }

  uploadReview(event, student) {
    var _this = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedFile = event.target.files[0];
      const loading = yield _this.loadingCtrl.create({
        message: 'Uploading review'
      });
      loading.present();
      const file = {
        file: selectedFile,
        name: selectedFile.name
      };
      const upload = yield _this.storageService.uploadReview(file);

      if (upload && upload.file_url) {
        if (_this.test.reviews && _this.test.reviews.length > 0) {
          _this.test.reviews.push({
            file_url: upload.file_url,
            type: _this.commonService.getExtension(selectedFile.name),
            name: selectedFile.name,
            student_id: student.student_id,
            student_name: student.student_name
          });
        } else {
          _this.test.reviews = [{
            file_url: upload.file_url,
            type: _this.commonService.getExtension(selectedFile.name),
            name: selectedFile.name,
            student_id: student.student_id,
            student_name: student.student_name
          }];
        }

        yield _this.dataService.updateTest(_this.testId, _this.test);
        loading.dismiss();
      } else {
        console.error('Error while uploading file:::::::::::\n', upload);
        loading.dismiss();
      }
    })();
  }

  uploadQuestionPaper(event) {
    var _this2 = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedFile = event.target.files[0];
      const loading = yield _this2.loadingCtrl.create({
        message: 'Uploading question paper'
      });
      loading.present();

      try {
        const file = {
          file: selectedFile,
          name: _this2.courseId + '_G_' + _this2.testId + '_G_' + selectedFile.name,
          test_id: _this2.testId
        };
        const upload = yield _this2.storageService.pushFileToStorage(file, `uploads/question_papers/${file.name}`);

        if (upload && upload.file_url) {
          const questionPaper = {
            file_url: upload.file_url,
            type: _this2.commonService.getExtension(selectedFile.name),
            name: selectedFile.name,
            test_id: _this2.testId
          };

          if (_this2.commonService.isValidData(_this2.questionPaper?.id)) {
            questionPaper.id = _this2.questionPaper.id;
          }

          _this2.dataService.update(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_8__.FirebaseCollections.QUESTION_PAPERS, questionPaper).then(resp => {
            // console.log('resp::::::::::::\n', resp);
            loading.dismiss();
          }, err => {
            loading.dismiss();
            console.error('Error while uploading question paper:::::::::::\n', { ...err
            });

            if (err.code === 'not-found' || err.code === 'invalid-argument') {
              _this2.dataService.add(src_app_constants_fb_collections__WEBPACK_IMPORTED_MODULE_8__.FirebaseCollections.QUESTION_PAPERS, questionPaper).then(resp => {
                // console.log(resp);
                _this2.dataService.getScheduleByTestId(_this2.testId).subscribe(response => {
                  _this2.questionPaper = response[0];
                });
              }, error => {
                console.error('Error while adding question paper:::::::::::\n', error);
              });
            }
          });
        } else {
          console.error('Error while uploading question paper:::::::::::\n', upload);
          loading.dismiss();
        }
      } catch (exception) {
        console.error('Exception while uploading question paper:::::::::::\n', exception, { ...exception
        });
        loading.dismiss();
      }
    })();
  }

  fileSelected(event) {
    var _this3 = this;

    return (0,_Users_teja_Desktop_Teja_Gurukul_gurukul_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedFile = event.target.files[0];
      const loading = yield _this3.loadingCtrl.create({
        message: 'Uploading document'
      });
      loading.present();
      const file = {
        file: selectedFile,
        name: _this3.courseId + '_G_' + _this3.testId + '_G_' + selectedFile.name,
        test_id: _this3.testId
      };
      const upload = yield _this3.storageService.pushFileToStorage(file);

      if (upload && upload.file_url) {
        if (_this3.test.file_urls && _this3.test.file_urls.length > 0) {
          _this3.test.file_urls.push({
            file_url: upload.file_url,
            type: _this3.commonService.getExtension(selectedFile.name),
            name: selectedFile.name
          });
        } else {
          _this3.test.file_urls = [{
            file_url: upload.file_url,
            type: _this3.commonService.getExtension(selectedFile.name),
            name: selectedFile.name
          }];
        }

        yield _this3.dataService.updateTest(_this3.testId, _this3.test);
        loading.dismiss();
      } else {
        console.error('Error while uploading file:::::::::::\n', upload);
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

};

TestPage.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
}, {
  type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
}, {
  type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_5__.StateService
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
}];

TestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-test',
  template: _test_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_test_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TestPage);


/***/ }),

/***/ 5226:
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  "use strict";

  function b(a, b) {
    return "undefined" == typeof b ? b = {
      autoBom: !1
    } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
      autoBom: !b
    }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
      type: a.type
    }) : a;
  }

  function c(a, b, c) {
    var d = new XMLHttpRequest();
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }

  function d(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);

    try {
      b.send();
    } catch (a) {}

    return 200 <= b.status && 299 >= b.status;
  }

  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
    }
  }

  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
      a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
      g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
    var i = f.URL || f.webkitURL,
        j = document.createElement("a");
    g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
      i.revokeObjectURL(j.href);
    }, 4E4), setTimeout(function () {
      e(j);
    }, 0));
  } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
    if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
      var i = document.createElement("a");
      i.href = f, i.target = "_blank", setTimeout(function () {
        e(i);
      });
    }
  } : function (b, d, e, g) {
    if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
    var h = "application/octet-stream" === b.type,
        i = /constructor/i.test(f.HTMLElement) || f.safari,
        j = /CriOS\/[\d]+/.test(navigator.userAgent);

    if ((j || h && i || a) && "undefined" != typeof FileReader) {
      var k = new FileReader();
      k.onloadend = function () {
        var a = k.result;
        a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
      }, k.readAsDataURL(b);
    } else {
      var l = f.URL || f.webkitURL,
          m = l.createObjectURL(b);
      g ? g.location = m : location.href = m, g = null, setTimeout(function () {
        l.revokeObjectURL(m);
      }, 4E4);
    }
  });
  f.saveAs = g.saveAs = g,  true && (module.exports = g);
});

/***/ }),

/***/ 4769:
/*!**************************************************************!*\
  !*** ./src/app/pages/gurukul/test/test.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#fileInput,\n#uploadReview {\n  position: absolute;\n  opacity: 0;\n}\n\nion-avatar {\n  background: var(--ion-color-light);\n}\n\n.zoom-btns {\n  bottom: 20px;\n  right: 20px;\n  z-index: 99;\n  background: var(--ion-color-light);\n}\n\n.file .file-type {\n  height: 120px;\n  background-color: var(--ion-color-light);\n}\n\n.file .file-type img {\n  width: 100%;\n  height: 120px;\n}\n\n.file .file-type ion-icon {\n  font-size: 42px;\n}\n\n.file .file-name {\n  padding: 8px;\n  background-color: var(--ion-color-white);\n  position: relative;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBR0k7RUFDSSxhQUFBO0VBQ0Esd0NBQUE7QUFBUjs7QUFFUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQVo7O0FBR1E7RUFDSSxlQUFBO0FBRFo7O0FBS0k7RUFDSSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFIUiIsImZpbGUiOiJ0ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmaWxlSW5wdXQsXG4jdXBsb2FkUmV2aWV3IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLnpvb20tYnRucyB7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5maWxlIHtcbiAgICAuZmlsZS10eXBlIHtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZpbGUtbmFtZSB7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgIH1cbn1cblxuLy8gLmZpbGUge1xuLy8gICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuLy8gICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuXG4vLyAgICAgICAgIGltZyB7XG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgaW9uLWNhcmQtaGVhZGVyIHtcbi8vICAgICAgICAgcGFkZGluZzogMTZweCA4cHggMHB4O1xuLy8gICAgIH1cbi8vIH0iXX0= */";

/***/ }),

/***/ 7790:
/*!**************************************************************!*\
  !*** ./src/app/pages/gurukul/test/test.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" defaultHref=\"gurukul/courses/tests\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{test?.title || 'Test'}}</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-segment value=\"all\" color=\"medium\" scrollable=\"true\" mode=\"md\" [(ngModel)]=\"segment\">\n\n      <!-- <ion-segment-button value=\"schedule\">\n        <ion-label>Schedule</ion-label>\n      </ion-segment-button> -->\n\n      <ion-segment-button value=\"question-papers\">\n        <ion-label>Question Papers</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"summary-of-concepts\">\n        <ion-label>Summary of Concepts</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"answers\">\n        <ion-label>Answer Sheets</ion-label>\n      </ion-segment-button>\n      <!-- \n      <ion-segment-button value=\"review-comments\">\n        <ion-label>Review Comments</ion-label>\n      </ion-segment-button> -->\n\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"segment === 'schedule'\" class=\"w-100 h-100 position-relative\">\n    <p class=\"size-14 fw-bold m-0 p-3 ion-border\" style=\"background: var(--ion-color-light);\">\n      {{schedule?.name || 'Schedule Name'}}\n    </p>\n    <pdf-viewer [src]=\"schedule?.file_url\" (page)=\"0\" [zoom]=\"zoom\" (page-rendered)=\"pageRendered($event)\"\n      class=\"d-block w-100\" [render-text]=\"true\" [original-size]=\"false\"\n      style=\"height: calc(100% - 53px); background: var(--ion-color-medium);\">\n    </pdf-viewer>\n\n    <ion-buttons class=\"position-absolute zoom-btns rounded-pill shadow\"\n      *ngIf=\"schedule !== undefined && schedule !== null\">\n      <ion-button (click)=\"zoomIn()\">\n        <ion-icon slot=\"icon-only\" class=\"size-48\" name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"zoomOut()\">\n        <ion-icon slot=\"icon-only\" class=\"size-48\" name=\"remove-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n  <div *ngIf=\"segment === 'question-papers'\" class=\"w-100 h-100 position-relative\">\n    <p class=\"size-14 fw-bold m-0 p-3 ion-border\" style=\"background: var(--ion-color-light);\">\n      {{questionPaper?.name || 'Question Paper'}}\n    </p>\n    <pdf-viewer [src]=\"questionPaper?.file_url\" (page)=\"0\" [zoom]=\"zoom\" (page-rendered)=\"pageRendered($event)\"\n      class=\"d-block w-100\" [render-text]=\"true\" [original-size]=\"false\"\n      style=\"height: calc(100% - 53px); background: var(--ion-color-medium);\">\n    </pdf-viewer>\n\n    <ion-buttons class=\"position-absolute zoom-btns rounded-pill shadow\"\n      *ngIf=\"questionPaper !== undefined && questionPaper !== null\">\n      <ion-button (click)=\"zoomIn()\">\n        <ion-icon slot=\"icon-only\" class=\"size-48\" name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"zoomOut()\">\n        <ion-icon slot=\"icon-only\" class=\"size-48\" name=\"remove-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n\n  <div *ngIf=\"segment === 'summary-of-concepts'\">\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let file of test?.file_urls\" class=\"ion-margin-bottom\">\n        <ion-card class=\"h-100 ion-no-margin file\" color=\"white\">\n          <div class=\"file-type d-grid-center\" (click)=\"playVideo(file.file_url)\">\n            <img *ngIf=\"file.type === 'image'\" [src]=\"file.file_url\" load=\"lazy\" />\n            <div *ngIf=\"file.type === 'video'\">\n              <ion-icon color=\"medium\" name=\"film-outline\"></ion-icon>\n            </div>\n          </div>\n          <div class=\"file-name\">\n            <ion-text>\n              {{file.name}}\n            </ion-text>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf=\"segment === 'answers'\">\n    <ion-list>\n      <ion-item-sliding>\n        <ion-item *ngFor=\"let answer of answerSheets; let i = index\">\n          <ion-avatar slot=\"start\" color=\"medium\" class=\"d-grid-center\">\n            <img *ngIf=\"answer.type === 'image'\" [src]=\"answer.file_url\" load=\"lazy\" />\n            <ion-icon *ngIf=\"answer.type === 'audio'\" color=\"medium\" name=\"play-circle-outline\"></ion-icon>\n            <ion-icon *ngIf=\"answer.type === 'video'\" color=\"medium\" name=\"film-outline\"></ion-icon>\n            <ion-icon *ngIf=\"answer.type === 'pdf'\" color=\"medium\" name=\"document-text-outline\"></ion-icon>\n            <ion-icon *ngIf=\"answer.type === 'txt'\" color=\"medium\" name=\"document-text-outline\"></ion-icon>\n            <ion-icon *ngIf=\"answer.type === 'docx'\" color=\"medium\" name=\"document-text-outline\"></ion-icon>\n            <ion-icon *ngIf=\"answer.type === 'xd'\" color=\"medium\" name=\"document-text-outline\"></ion-icon>\n            <ion-icon *ngIf=\"answer.type === 'xlsx'\" color=\"medium\" name=\"document-text-outline\"></ion-icon>\n            <ion-icon *ngIf=\"answer.type === 'ppt'\" color=\"medium\" name=\"document-text-outline\"></ion-icon>\n            <ion-icon *ngIf=\"answer.type === 'archive'\" color=\"medium\" name=\"document-text-outline\"></ion-icon>\n          </ion-avatar>\n          <ion-label class=\"ion-text-wrap\">\n            <h2>\n              {{answer.student_name}}\n            </h2>\n            <p>{{answer.name}}</p>\n            <ion-button for=\"uploadReview\" class=\"ion-no-margin\" (click)=\"download(answer)\">\n              Download Answer Sheet\n            </ion-button>\n            <br />\n            <ion-button for=\"uploadReview\" class=\"ion-no-margin\" (click)=\"uploadValuedAnswerSheert(answer)\">\n              Upload Valued Answer Sheet\n            </ion-button>\n          </ion-label>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option>\n            <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"segment === 'review-comments'\">\n    <ion-list lines=\"none\">\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let file of test?.reviews\" class=\"ion-margin-bottom\">\n          <ion-card class=\"h-100 ion-no-margin file\" color=\"white\" (click)=\"download(file)\">\n            <div class=\"file-type d-grid-center\">\n              <img *ngIf=\"file.type === 'image'\" [src]=\"file.file_url\" load=\"lazy\" />\n              <div *ngIf=\"file.type === 'audio'\">\n                <ion-icon color=\"medium\" name=\"play-circle-outline\"></ion-icon>\n                <ion-icon color=\"medium\" name=\"pause-circle-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'video'\">\n                <ion-icon color=\"medium\" name=\"film-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'pdf'\">\n                <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'txt'\">\n                <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'docx'\">\n                <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'xd'\">\n                <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'xlsx'\">\n                <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'ppt'\">\n                <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n              </div>\n              <div *ngIf=\"file.type === 'archive'\">\n                <ion-icon color=\"medium\" name=\"document-text-outline\"></ion-icon>\n              </div>\n            </div>\n            <div class=\"file-name\">\n              <ion-text>\n                {{file.name}}\n              </ion-text>\n            </div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer *ngIf=\"segment === 'summary-of-concepts'\">\n  <ion-toolbar>\n    <input type=\"file\" #f id=\"fileInput\" (change)=\"fileSelected($event)\" accept=\"video/mp4,video/x-m4v,video/*\" />\n    <ion-button for=\"fileInput\" expand=\"full\" class=\"ion-no-margin\" size=\"large\" (click)=\"f.click()\">\n      <span style=\"font-size: 14px\">Upload summary of concept</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-footer *ngIf=\"segment === 'review-comments'\">\n  <ion-toolbar>\n    <input type=\"file\" #f id=\"fileInput\" (change)=\"fileSelected($event)\" />\n    <ion-button for=\"fileInput\" expand=\"full\" class=\"ion-no-margin\" size=\"large\" (click)=\"f.click()\">\n      <span style=\"font-size: 14px\">Upload Review</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-footer *ngIf=\"segment === 'question-papers'\">\n  <ion-toolbar>\n    <input type=\"file\" #f id=\"fileInput\" (change)=\"uploadQuestionPaper($event)\" accept=\"application/pdf\" />\n    <ion-button for=\"fileInput\" expand=\"full\" class=\"ion-no-margin\" size=\"large\" (click)=\"f.click()\">\n      <span style=\"font-size: 14px\">Upload Question Paper</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_gurukul_test_test_module_ts.js.map