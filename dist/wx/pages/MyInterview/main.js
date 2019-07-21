require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(295);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9f88b07e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(298);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(296)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9f88b07e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9f88b07e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\MyInterview\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9f88b07e", Component.options)
  } else {
    hotAPI.reload("data-v-9f88b07e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 296:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(6);

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
    props: {},
    components: {},
    data: function data() {
        return {
            tabNav: ['未开始', '已打卡', '已放弃', '全部']
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapState */])({
        list: function list(state) {
            return state.sign.list;
        },
        active: function active(state) {
            return state.sign.active;
        },
        page: function page(state) {
            return state.sign.page;
        },
        hasMore: function hasMore(state) {
            return state.sign.hasMore;
        }
    })),
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapMutations */])({
        updateState: 'sign/updateState'
    }), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
        getList: 'sign/getList'
    }), {
        tab: function tab(i) {
            this.updateState({ active: (i + 1) % 4, page: 1 });
            this.getList();
        },
        goDetail: function goDetail(id) {
            wx.navigateTo({ url: '/pages/Detail/main?id=' + id });
        }
    }),
    onShow: function onShow() {
        this.getList();
    },
    onReachBottom: function onReachBottom() {
        if (this.hasMore) {
            this.updateState({ page: this.page + 1 });
            this.getList();
        }
    }
});

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "interview-list"
  }, [_c('div', {
    staticClass: "tabNav"
  }, _vm._l((_vm.tabNav), function(item, index) {
    return _c('span', {
      key: index,
      class: (_vm.active + 3) % 4 === index ? 'active' : null,
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.tab(index)
        }
      }
    }, [_vm._v(_vm._s(item))])
  })), _vm._v(" "), _c('div', {
    staticClass: "cont-list"
  }, [(!_vm.list.length) ? _c('span', [_vm._v("当前分类还没有面试!")]) : _c('ul', {
    staticClass: "list-msg"
  }, _vm._l((_vm.list), function(ite, ind) {
    return _c('li', {
      key: ind,
      staticClass: "list-item",
      attrs: {
        "eventid": '1_' + ind
      },
      on: {
        "click": function($event) {
          _vm.goDetail(ite.id)
        }
      }
    }, [_c('div', {
      staticClass: "title"
    }, [_c('label', {
      staticClass: "h3"
    }, [_vm._v(_vm._s(ite.company))]), _vm._v(" "), _c('label', {
      staticClass: "tag"
    }, [_vm._v(_vm._s(ite.status == -1 ? '未开始' : ite.status == 0 ? '已打卡' : '已放弃'))])], 1), _vm._v(" "), _c('p', {
      staticClass: "area"
    }, [_vm._v(_vm._s(ite.description))]), _vm._v(" "), _c('div', {
      staticClass: "time"
    }, [_c('label', {
      staticClass: "interview-time"
    }, [_vm._v("面试时间:" + _vm._s(ite.start_time))]), _vm._v(" "), _c('label', {
      staticClass: "not-remind"
    }, [_vm._v(_vm._s(ite.remind ? '未提醒' : '已提醒'))])], 1)], 1)
  }))], 1), _vm._v(" "), (_vm.list.length && _vm.list.length >= 10) ? _c('p', {
    staticClass: "more"
  }, [_vm._v(_vm._s(_vm.hasMore ? '上拉加载更多' : '我是有底线的'))]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9f88b07e", esExports)
  }
}

/***/ })

},[294]);