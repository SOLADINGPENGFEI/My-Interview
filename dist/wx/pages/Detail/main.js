require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(269);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_345009db_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(272);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(270)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-345009db"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_345009db_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\Detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-345009db", Component.options)
  } else {
    hotAPI.reload("data-v-345009db", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 270:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(6);



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
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            data: {}
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["d" /* mapState */])({
        info: function info(state) {
            return state.sign.info;
        }
    })),
    methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])({
        getDetail: 'sign/getDetail',
        updateDetail: 'sign/updateDetail'
    }), {
        //拨打电话
        makePhone: function makePhone() {
            wx.makePhoneCall({ phoneNumber: this.info.phone });
        },
        cancelRemind: function cancelRemind(e) {
            // 取消提醒
            this.updateDetail({
                id: this.id,
                params: { remind: e.target.value ? 1 : -1 }
            });
        },

        //打卡
        gopunch: function gopunch() {
            wx.navigateTo({ url: '/pages/Punch/main' });
        },

        //放弃面试
        giveup: function giveup() {
            var _this = this;

            wx.showModal({
                title: '温馨提示', // 提示的标题
                content: '确定要放弃本次面试吗?', //提示的内容
                success: function () {
                    var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(res) {
                        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        if (!res.confirm) {
                                            _context.next = 3;
                                            break;
                                        }

                                        _context.next = 3;
                                        return _this.updateDetail({
                                            id: _this.id,
                                            params: { status: 1 }
                                        });

                                    case 3:
                                    case 'end':
                                        return _context.stop();
                                }
                            }
                        }, _callee, _this);
                    }));

                    return function success(_x) {
                        return _ref.apply(this, arguments);
                    };
                }()
            });
        }
    }),
    created: function created() {},
    mounted: function mounted() {},
    onLoad: function onLoad(options) {
        // 获取id
        this.id = options.id;
        // 把view属性加到响应监听里面
        this.$set(this.data, 'view', options.view || false);
    },
    onShow: function onShow() {
        var _this2 = this;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            wx.showLoading({
                                title: '加载数据中...', //提示的内容
                                mask: true //显示透明蒙层,防止触摸穿透
                            });
                            _context2.next = 3;
                            return _this2.getDetail(_this2.id);

                        case 3:
                            // 修改标题
                            wx.setNavigationBarTitle({ title: _this2.info.company });
                            wx.hideLoading();

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }))();
    },
    onShareAppMessage: function onShareAppMessage() {
        return {
            title: this.info.company + '的面试',
            path: '/pages/sign/detail/main?view=1&id=' + this.id,
            success: res = {},
            fail: function fail() {},
            complete: function complete() {}
        };
    }
});

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail"
  }, [_c('ul', {
    staticClass: "interview_detail"
  }, [_c('li', [_c('label', [_vm._v("面试地址:")]), _vm._v(" "), _c('span', {
    staticClass: "address"
  }, [_vm._v(_vm._s(_vm.info.address && _vm.info.address.address))])], 1), _vm._v(" "), _c('li', [_c('label', [_vm._v("面试时间:")]), _vm._v(" "), _c('span', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.info.start_time))])], 1), _vm._v(" "), _c('li', [_c('label', [_vm._v("联系方式:")]), _vm._v(" "), _c('span', {
    staticClass: "tel",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.makePhone
    }
  }, [_vm._v(_vm._s(_vm.info.phone))])], 1), _vm._v(" "), _c('li', [_c('label', [_vm._v("是否提醒:")]), _vm._v(" "), _c('span', {
    staticClass: "remind"
  }, [_vm._v(_vm._s(_vm.info.remind ? '未提醒' : '已提醒'))])], 1), _vm._v(" "), _c('li', [_c('label', [_vm._v("面试状态:")]), _vm._v(" "), _c('span', {
    staticClass: "status"
  }, [_vm._v(_vm._s(_vm.info.status == -1 ? '未开始' : _vm.info.status == 0 ? '已打卡' : '已放弃'))])], 1), _vm._v(" "), _c('li', [_c('label', [_vm._v("取消提醒:")]), _vm._v(" "), _c('switch', {
    staticClass: "cancel",
    attrs: {
      "checked": _vm.info.remind === 1,
      "eventid": '1'
    },
    on: {
      "change": _vm.cancelRemind
    }
  })], 1)], 1), _vm._v(" "), (_vm.info.status == -1) ? _c('div', {
    staticClass: "btns"
  }, [_c('button', {
    staticClass: "card",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.gopunch
    }
  }, [_vm._v("去打卡")]), _vm._v(" "), _c('button', {
    staticClass: "abandon",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.giveup
    }
  }, [_vm._v("放弃面试")])], 1) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-345009db", esExports)
  }
}

/***/ })

},[268]);