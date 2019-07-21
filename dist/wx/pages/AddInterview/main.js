require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(253);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_01bb2d2c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(256);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(254)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-01bb2d2c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_01bb2d2c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\AddInterview\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01bb2d2c", Component.options)
  } else {
    hotAPI.reload("data-v-01bb2d2c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 254:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(6);




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
//
//
//
//
//


var moment = __webpack_require__(0);

var range = [["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], ["00", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ["00分", "10分", "20分", "30分", "40分", "50分"]];

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            info: {
                date: [0, 0, 0]
            }
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["d" /* mapState */])({
        current: function current(state) {
            return state.interview.current;
        }
    }), {
        //按钮是否可点击
        btnEnable: function btnEnable() {
            // 判断公司名称是否为空
            if (!this.current.company) {
                return false;
            }
            //判断手机是否符合规范
            if (!/^1(3|4|5|7|8)\d{9}$/.test(this.current.phone) || !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.phone)) {
                return false;
            }
            // 判断公司地址
            if (!this.current.address.address) {
                return false;
            }
            return true;
        },

        // 处理面试日期
        dateRange: function dateRange() {
            var dateRange = [].concat(range);
            // 如果时间是今天,过滤掉现在之前的小时
            if (!this.info.date[0]) {
                dateRange[1] = dateRange[1].filter(function (item) {
                    return item > moment().hour();
                });
            } else {
                dateRange[1] = range[1];
            }
            // 格式化小时
            dateRange[1] = dateRange[1].map(function (item) {
                return item + '点';
            });
            // 计算当前日期之后的十天
            dateRange[0] = dateRange[0].map(function (item) {
                return moment().add(item, 'days').date() + '号';
            });
            return dateRange;
        },

        // 显示的日期
        dateShow: function dateShow() {
            return moment().add(moment().hour() == 23 ? this.info.date[0] - 1 : this.info.date[0], 'd').add(this.info.date[1] + 1, 'h').minute(this.info.date[2] * 10).format('YYYY-MM-DD HH:mm');
        }
    }),
    methods: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({
        myAddress: function myAddress() {
            wx.navigateTo({
                url: '/pages/Address/main'
            });
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapActions */])({
        submitInterview: 'interview/submit'
    }), Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["c" /* mapMutations */])({
        updateState: 'interview/updateState'
    }), {
        // 监听多列选择器每列变化
        columnChange: function columnChange(e) {
            // console.log('column...e',e)
            var _e$target = e.target,
                column = _e$target.column,
                value = _e$target.value;

            var date = [].concat(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default()(this.info.date));
            date[column] = value;
            this.info.date = date;
        },
        showTimeTip: function showTimeTip() {
            wx.showToast({
                title: '在面试前一个小时我们会通知您',
                icon: 'none'
            });
        },

        // 点击确认提交添加面试
        submit: function submit(e) {
            var _this = this;

            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var data;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (_this.current.company) {
                                    _context.next = 3;
                                    break;
                                }

                                wx.showToast({
                                    title: '请输入公司名称', //提示的内容
                                    icon: 'none' //图标
                                });
                                return _context.abrupt('return', false);

                            case 3:
                                if (!(!/^1(3|4|5|7|8)\d{9}$/.test(_this.current.phone) || !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(_this.current.phone))) {
                                    _context.next = 6;
                                    break;
                                }

                                wx.showToast({
                                    title: '请输入面试联系人的手机或座机', //提示的内容
                                    icon: 'none' //图标
                                });
                                return _context.abrupt('return', false);

                            case 6:
                                if (_this.current.address.address) {
                                    _context.next = 9;
                                    break;
                                }

                                wx.showToast({
                                    title: '请选择公司地址', //提示的内容
                                    icon: 'none' //图标
                                });
                                return _context.abrupt('return', false);

                            case 9:
                                // 添加时间戳到表单
                                _this.current.start_time = moment(_this.dateShow).unix() * 1000;
                                // 添加form_id
                                _this.current.form_id = e.target.formId;
                                // this.submiting = true
                                _context.next = 13;
                                return _this.submitInterview(_this.current);

                            case 13:
                                data = _context.sent;

                                // console.log('submitData...',data)
                                // this.submiting = false
                                //处理添加的结果
                                if (data.code === 0) {
                                    wx.showModal({
                                        title: '温馨提示', //提示的标题
                                        content: data.msg, //提示的内容
                                        showCancel: false,
                                        confirmText: '确定', //确定按钮的文字,默认为取消,最多4个字符
                                        confirmColor: '#197DBF', //确定按钮的文字颜色
                                        success: function success(res) {
                                            if (res.confirm) {
                                                _this.updateState({
                                                    form_id: '',
                                                    company: '',
                                                    address: '',
                                                    phone: ''
                                                });
                                                wx.navigateTo({ url: '/pages/MyInterview/main' });
                                            }
                                        }
                                    });
                                } else {
                                    wx.showModal({
                                        title: 'data.mag', //提示的内容
                                        icon: 'fail' //图标
                                    });
                                }

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        }
    }),
    created: function created() {}
});

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    staticClass: "addInterview",
    attrs: {
      "report-submit": "",
      "eventid": '6'
    },
    on: {
      "submit": _vm.submit
    }
  }, [_c('div', {
    staticClass: "message"
  }, [_c('h3', [_vm._v("面试信息")]), _vm._v(" "), _c('div', [_c('span', [_vm._v("公司名称")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.current.company),
      expression: "current.company"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入公司名称",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.current.company)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.current.company = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', [_c('span', [_vm._v("公司电话")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.current.phone),
      expression: "current.phone"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入面试联系人电话",
      "maxlength": "11",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.current.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.current.phone = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', [_c('span', [_vm._v("面试时间")]), _vm._v(" "), _c('picker', {
    staticClass: "pick",
    attrs: {
      "mode": "multiSelector",
      "value": _vm.info.date,
      "range": _vm.dateRange,
      "eventid": '2'
    },
    on: {
      "change": _vm.dateChange,
      "columnchange": _vm.columnChange
    }
  }, [_c('view', {
    staticClass: "picker"
  }, [_vm._v("\n                    " + _vm._s(_vm.dateShow) + "\n                ")])]), _vm._v(" "), _c('icon', {
    attrs: {
      "size": "18",
      "type": "info",
      "role": "img",
      "eventid": '3'
    },
    on: {
      "click": _vm.showTimeTip
    }
  })], 1), _vm._v(" "), _c('div', [_c('span', [_vm._v("面试地址")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.current.address.address),
      expression: "current.address.address"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入面试地址",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.current.address.address)
    },
    on: {
      "click": _vm.myAddress,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.current.address.address = $event.target.value
      }
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [_c('h3', [_vm._v("备注信息")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.current.description),
      expression: "current.description"
    }],
    attrs: {
      "name": "",
      "id": "area",
      "placeholder": "备注信息(可选,100个字以内)",
      "eventid": '5'
    },
    domProps: {
      "value": (_vm.current.description)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.current.description = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('button', {
    class: _vm.btnEnable ? '' : 'disable',
    attrs: {
      "form-type": "submit"
    }
  }, [_vm._v("确认")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-01bb2d2c", esExports)
  }
}

/***/ })

},[252]);