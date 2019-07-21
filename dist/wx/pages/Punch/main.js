require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(300);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e7ee8d8c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(303);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(301)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e7ee8d8c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e7ee8d8c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\Punch\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e7ee8d8c", Component.options)
  } else {
    hotAPI.reload("data-v-e7ee8d8c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 301:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_TencentMap__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_distance_js__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__(6);




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
    components: {
        TencentMap: __WEBPACK_IMPORTED_MODULE_4__components_TencentMap__["a" /* default */]
    },
    data: function data() {
        return {
            distance: 0
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_6_vuex__["d" /* mapState */])({
        info: function info(state) {
            return state.sign.info;
        },
        longitude: function longitude(state) {
            return state.index.longitude;
        },
        latitude: function latitude(state) {
            return state.index.latitude;
        }
    }), {
        distance: function distance() {
            return Object(__WEBPACK_IMPORTED_MODULE_5__utils_distance_js__["a" /* default */])(this.info.latitude, this.info.longitude);
        },
        markers: function markers() {
            if (this.info && __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(this.info)) {
                return [{
                    iconPath: '/static/images/job.png',
                    latitude: this.info.latitude,
                    longitude: this.info.longitude,
                    title: this.info.company,
                    width: 20,
                    height: 20
                }];
            } else {}
        }
    }),

    methods: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_6_vuex__["b" /* mapActions */])({
        updateDetail: 'sign/updateDetail'
    }), {
        // 点击标注物
        marketTap: function marketTap(e) {},
        updateDistance: function updateDistance(distance) {
            // console.log('distance....', distance)
            this.distance = distance;
        },
        goSign: function goSign() {
            var _this = this;

            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var distance, result;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                distance = _this.distance;

                                if (!(_this.distance < 100)) {
                                    _context.next = 9;
                                    break;
                                }

                                _context.next = 4;
                                return _this.updateDetail({
                                    id: _this.info.id,
                                    params: {
                                        status: 0,
                                        sign_time: +new Date()
                                    }
                                });

                            case 4:
                                result = _context.sent;

                                console.log('result...', result);
                                wx.showToast({
                                    title: '打卡成功', //提示的内容
                                    icon: 'none' // 图标
                                });
                                _context.next = 11;
                                break;

                            case 9:
                                if (_this.distance > 1000) {
                                    distance = (_this.distance / 1000).toFixed(2) + '公里';
                                    console.log(distance);
                                } else {
                                    distance = _this.distance + '米';
                                }
                                // console.log('distance...', distance, this.distance)
                                wx.showToast({
                                    title: '\u4F60\u8DDD\u79BB\u76EE\u7684\u5730\u8FD8\u6709' + distance + ',\u6682\u65F6\u8FD8\u4E0D\u80FD\u6253\u5361', //提示的内容
                                    icon: 'none'
                                });

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        }
    }),
    onShow: function onShow() {
        var _this2 = this;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            // 修改标题
                            wx.setNavigationBarTitle({ title: '打卡' + _this2.info.company });

                        case 1:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }))();
    },
    created: function created() {},
    mounted: function mounted() {}
});

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "punch"
  }, [_c('div', {
    staticClass: "map"
  }, [_c('TencentMap', {
    attrs: {
      "markers": _vm.markers,
      "updateDistance": _vm.updateDistance,
      "polyline": _vm.polyline,
      "points": _vm.points,
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "gopunch"
  }, [_c('button', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "tap": _vm.goSign
    }
  }, [_vm._v("打卡")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e7ee8d8c", esExports)
  }
}

/***/ })

},[299]);