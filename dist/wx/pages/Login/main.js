require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(285);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_014d8c96_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(288);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(286)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-014d8c96"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_014d8c96_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\Login\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-014d8c96", Component.options)
  } else {
    hotAPI.reload("data-v-014d8c96", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 286:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(19);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            userTel: '',
            hasPhone: false,
            showSetting: false
        };
    },

    components: {},
    computed: {
        formatPhone: function formatPhone() {
            if (this.userTel) {
                return this.userTel.slice(0, 3) + '****' + this.userTel.slice(7, 11);
            } else {
                return '***********';
            }
        }
    },
    methods: {
        myInterview: function myInterview() {
            wx.navigateTo({
                url: '/pages/MyInterview/main'
            });
        },

        onLoad: function onLoad() {
            var that = this;
            // 查看是否授权
            wx.getSetting({
                success: function success(res) {
                    // console.log('loginRes...',res.authSetting)
                    if (res.authSetting['scope.userInfo']) {
                        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                        that.hasPhone = true;
                        wx.getUserInfo({
                            withCredentials: true,
                            success: function success(res) {

                                // console.log(res.userInfo)
                            }
                        });
                    } else {
                        // 未授权
                        that.hasPhone = false;
                    }
                }
            });
        },
        getphonenumber: function getphonenumber(e) {
            var _this = this;

            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var that, data;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = _this;
                                // console.log('e...',e)

                                if (!(e.target.errMsg != 'getPhoneNumber:fail user deny')) {
                                    _context.next = 8;
                                    break;
                                }

                                _context.next = 4;
                                return Object(__WEBPACK_IMPORTED_MODULE_3__services_index__["b" /* encryptData */])({
                                    encryptedData: e.target.encryptedData,
                                    iv: e.target.iv
                                });

                            case 4:
                                data = _context.sent;

                                // console.log(data)
                                that.userTel = data.data.phoneNumber;
                                _context.next = 9;
                                break;

                            case 8:
                                //授权失败
                                _this.showSetting = false;

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        }
    },
    created: function created() {}
});

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "person-center"
  }, [_c('div', {
    staticClass: "userInfo"
  }, [_vm._m(0), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.formatPhone))])], 1), _vm._v(" "), _c('div', {
    staticClass: "list-nav"
  }, [_c('div', {
    staticClass: "item-nav",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.myInterview
    }
  }, [_c('icon', {
    attrs: {
      "size": "18",
      "type": "waiting",
      "role": "img"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("我的面试")]), _vm._v(" "), _c('image', {
    attrs: {
      "src": "/static/images/arrow.svg"
    }
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "item-nav"
  }, [_c('icon', {
    attrs: {
      "size": "18",
      "type": "info",
      "role": "img"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("客服中心")]), _vm._v(" "), _c('image', {
    attrs: {
      "src": "/static/images/arrow.svg"
    }
  })], 1)], 1), _vm._v(" "), (!_vm.hasPhone) ? _c('button', {
    attrs: {
      "open-type": "getPhoneNumber",
      "eventid": '1'
    },
    on: {
      "getphonenumber": _vm.getphonenumber
    }
  }, [_vm._v("\n        获取手机号\n    ")]) : _vm._e(), _vm._v(" "), (_vm.showSetting) ? _c('button', {
    attrs: {
      "open-type": "openSetting"
    }
  }, [_vm._v("\n        设置权限\n    ")]) : _vm._e()], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "user-avtar"
  }, [_c('image', {
    attrs: {
      "src": "/static/images/my.png"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-014d8c96", esExports)
  }
}

/***/ })

},[284]);