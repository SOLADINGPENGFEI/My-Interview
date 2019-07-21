require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(258);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6c261c40_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(261);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(259)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6c261c40"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6c261c40_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\Address\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c261c40", Component.options)
  } else {
    hotAPI.reload("data-v-6c261c40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 259:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index_js__ = __webpack_require__(25);

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
            searchData: [],
            address: ''
        };
    },

    watch: {
        // 监听input框变化,调用智能提示
        address: function address(val, oldVal) {
            this.search(val);
        }
    },
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        select: function select(index) {
            console.log('index...', index);
            //更新当前地址
            this.updateState({
                address: this.searchData[index]
            });
            //返回上一页
            wx.navigateBack();
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapMutations */])({
        updateState: 'interview/updateState'
    })),
    created: function created() {
        var _this = this;

        var that = this;
        this.search = Object(__WEBPACK_IMPORTED_MODULE_2__utils_index_js__["a" /* debounce */])(function (val) {
            _this.$map.search({
                keyword: val,
                region: '北京',
                key: that.$map.key,
                page_size: 10,
                page_index: 1,
                success: function success(res) {
                    console.log(res);
                    that.searchData = res.data;
                }
            });
        }, 300);
    }
});

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "address"
  }, [_c('div', {
    staticClass: "searchAddress"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("北京")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address),
      expression: "address"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请选择面试地址",
      "focus": "",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "search-cont"
  }, [_c('ul', {
    staticClass: "list"
  }, _vm._l((_vm.searchData), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "hover-class": "hover",
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.select(index)
        }
      }
    }, [_c('image', {
      attrs: {
        "src": "/static/images/location.svg"
      }
    }), _vm._v(" "), _c('div', [_c('h3', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.address))])], 1)])
  }))], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6c261c40", esExports)
  }
}

/***/ })

},[257]);