(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chat"],{

/***/ 71:
/*!***************************************************************************!*\
  !*** C:/wwwroot/chat/chat-min-app/main.js?{"page":"pages%2Fchat%2Fchat"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/chat.vue */ 72));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 72:
/*!********************************************************!*\
  !*** C:/wwwroot/chat/chat-min-app/pages/chat/chat.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=bf16e7f4&scoped=true& */ 73);
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ 75);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_vue_vue_type_style_index_0_id_bf16e7f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&id=bf16e7f4&scoped=true&lang=scss& */ 80);
/* harmony import */ var _HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bf16e7f4",
  null,
  false,
  _chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chat/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 73:
/*!***************************************************************************************************!*\
  !*** C:/wwwroot/chat/chat-min-app/pages/chat/chat.vue?vue&type=template&id=bf16e7f4&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=template&id=bf16e7f4&scoped=true& */ 74);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 74:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/wwwroot/chat/chat-min-app/pages/chat/chat.vue?vue&type=template&id=bf16e7f4&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.messageList, function (message, index) {
    var $orig = _vm.__get_orig(message)
    var m0 =
      message.type == 2 ? _vm.formatShowContentFile(message.content) : null
    var m1 =
      message.type == 3
        ? _vm.formatShowContentAudioDuration(message.content)
        : null
    return {
      $orig: $orig,
      m0: m0,
      m1: m1,
    }
  })
  var g0 = _vm.form.textMessage.length
  var g1 = _vm.form.textMessage.length
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        g0: g0,
        g1: g1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 75:
/*!*********************************************************************************!*\
  !*** C:/wwwroot/chat/chat-min-app/pages/chat/chat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=script&lang=js& */ 76);
/* harmony import */ var _HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 76:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/wwwroot/chat/chat-min-app/pages/chat/chat.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 77));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 79));
var _config = __webpack_require__(/*! ../../helper/config */ 31);
var _api = __webpack_require__(/*! ../../api/api.js */ 42);
var _enum = __webpack_require__(/*! ../../helper/enum */ 35);
var _websocket = __webpack_require__(/*! ../../helper/websocket.js */ 30);
var _date = __webpack_require__(/*! ../../helper/date.js */ 68);
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
//
//

// 获取全局唯一的录音管理器 recorderManager
var recorderManager = uni.getRecorderManager();
var innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = true;
var _default = {
  data: function data() {
    return {
      messageList: [],
      isGroupChat: true,
      userInfo: uni.getStorageSync('userInfo'),
      userAvatar: uni.getStorageSync('avatar'),
      friendInfo: {},
      //私聊用户信息
      form: {
        textMessage: "" //文本消息
      },

      pageBottomHeight: 0,
      roomInfo: {},
      //聊天室信息

      // text: 'uni-app',
      audioIsOk: false,
      //录音是否有效：邮箱时将录音文件发送到服务器
      voicePath: ''
    };
  },
  created: function created() {},
  computed: {
    computedClasses: function computedClasses(item) {
      return function (item) {
        return {
          'class1': true,
          'class2': true // 根据循环中的参数生成类名
        };
      };
    }
  },
  mounted: function mounted(option) {},
  onLoad: function onLoad(option) {
    var _this2 = this;
    // let self = this;
    // recorderManager.onStop(function (res) {
    // 	console.log('recorder stop' + JSON.stringify(res));
    // 	self.voicePath = res.tempFilePath;
    // });

    var _this = this;
    recorderManager.onStop(function (audioRes) {
      console.log('录音回调事件：' + JSON.stringify(audioRes));
      console.log(audioRes.tempFilePath);
      _this.voicePath = audioRes.tempFilePath;
      if (!_this.audioIsOk) {
        console.log('用户取消录音发送');
        return;
      }
      //上传文件
      (0, _api.uploadFile)({
        filepath: _this.voicePath,
        formData: {
          subject: "RoomAudioFile"
        }
      }).then(function (fileRes) {
        var _this$roomInfo$roomId, _fileRes$attachmentId, _fileRes$filepath;
        console.log("uploadRadioRes:", fileRes);
        //构建成语音文件消息发送
        (0, _api.sendMessage)({
          "type": _enum.Enum.messageType.audio,
          "receiver": 0,
          "roomId": parseInt((_this$roomInfo$roomId = _this.roomInfo.roomId) !== null && _this$roomInfo$roomId !== void 0 ? _this$roomInfo$roomId : 0),
          "content": JSON.stringify({
            attachmentId: (_fileRes$attachmentId = fileRes.attachmentId) !== null && _fileRes$attachmentId !== void 0 ? _fileRes$attachmentId : 0,
            filepath: (_fileRes$filepath = fileRes.filepath) !== null && _fileRes$filepath !== void 0 ? _fileRes$filepath : "",
            duration: audioRes.duration
          })
        }).then(function (messageRes) {
          console.log('sendAudioMessageRes', messageRes);
          _this.showSelfMessage(messageRes);
        });
      });
    });

    //option为object类型，会序列化上个页面传递的参数
    console.log("chat.onLoad.option...", option); //打印出上个页面传递的参数。
    this.handleAsyncInfo(option);

    // 在页面的逻辑部分（例如 .js 文件中）
    uni.getSystemInfo({
      success: function success(res) {
        // 获取屏幕的可视区域高度
        var windowHeight = res.windowHeight;
        // 获取导航栏的高度
        var navigationBarHeight = res.statusBarHeight + 44; // 假设导航栏高度为状态栏高度加上标题栏高度

        // 计算页面的可视化高度
        var pageHeight = windowHeight - navigationBarHeight;
        console.log("页面的可视化高度：" + pageHeight);

        // 在页面的逻辑部分（例如 .js 文件中）
        uni.createSelectorQuery().select('.bottom-operation-tabbar').boundingClientRect(function (rect) {
          if (rect) {
            var elementHeight = rect.height;
            console.log("元素的高度：" + elementHeight);
            _this2.pageBottomHeight = -(pageHeight + elementHeight);
          } else {
            console.log("未找到指定元素");
          }
        }).exec();
      }
    });
  },
  onShow: function onShow() {
    var _this3 = this;
    uni.onSocketMessage(function (res) {
      console.log('Chat...收到服务器内容：' + res.data);
      _this3.handleWebsocketData(res.data);
    });
  },
  methods: {
    handleAsyncInfo: function handleAsyncInfo(option) {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _option$roomId, _this4$roomInfo$roomI;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('查询聊天室消息------------');
                _context.next = 3;
                return (0, _api.getRoomList)({
                  roomId: (_option$roomId = option.roomId) !== null && _option$roomId !== void 0 ? _option$roomId : 0
                }).then(function (res) {
                  var _res$;
                  console.log("roomList", res);
                  var roomInfo = (_res$ = res[0]) !== null && _res$ !== void 0 ? _res$ : "";
                  if (!roomInfo) {
                    console.log("聊天室信息无法获取：", res);
                    return;
                  }
                  _this4.roomInfo = roomInfo;

                  //查询好友信息
                  var roomTitle = "";
                  if (roomInfo.type == 1) {
                    var _this4$friendInfo$nic;
                    //私聊好友数据更新
                    _this4.friendInfo = _this4.getFriendInfoByRoomUserListData(roomInfo.users);
                    roomTitle = (_this4$friendInfo$nic = _this4.friendInfo.nickname) !== null && _this4$friendInfo$nic !== void 0 ? _this4$friendInfo$nic : "--";
                  } else if (roomInfo.type == 2) {
                    //群聊
                    roomTitle = roomInfo.title;
                  }
                  uni.setNavigationBarTitle({
                    title: roomTitle || "聊天室"
                  });
                }).catch(function (err) {
                  console.log(err);
                });
              case 3:
                // console.log('查询好友信息---------------0')
                // //查询好友信息
                // await userDetail({id: parseInt(option.id||0)}).then(res => {
                // 	this.friendInfo = res
                // 	this.friendInfo.id = parseInt(res.id)
                // 	if (this.friendInfo.id) {
                // 	}
                // }).catch(err => {
                // 	console.log(err)
                // })

                //查询群信息
                console.log('发送消息已读状态---------------1');
                _context.next = 6;
                return (0, _api.getMessageList)({
                  page: 1,
                  pageSize: 10000,
                  roomId: _this4.roomInfo.roomId
                }).then(function (res) {
                  // console.log(res)
                  if (res.list) {
                    _this4.messageList = res.list;
                    _this4.$forceUpdate(); // 强制组件重新渲染
                  }
                });
              case 6:
                //发送消息已读状态
                console.log('消息设置已读---------------1');
                _context.next = 9;
                return (0, _api.setMessageReadStatus)({
                  roomId: parseInt((_this4$roomInfo$roomI = _this4.roomInfo.roomId) !== null && _this4$roomInfo$roomI !== void 0 ? _this4$roomInfo$roomI : 0)
                }).then(function (res) {
                  console.log(res);
                });
              case 9:
                _this4.$nextTick(function () {
                  _this4.scrollToBottom();
                });
              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //通过用户列表获取好友信息
    getFriendInfoByRoomUserListData: function getFriendInfoByRoomUserListData() {
      var users = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.userId && user.userId != this.userInfo.id) {
          return user;
        }
      }
      return [];
    },
    // 点击发送消息
    clickSendMessage: function clickSendMessage() {
      var _this$roomInfo$roomId2,
        _this5 = this;
      if (this.form.textMessage.lenght <= 0) {
        console.log('请输入消息');
        return;
      }

      //私聊消息接收人
      var receiver = parseInt(this.friendInfo.id);

      //考虑先把消息显示，后续接收到消息后标记为发生成功 TODO
      // 需要增加前端自定义消息ID，这样能判断服务器回收后的消息ID，这样能判断是否上传成功
      (0, _api.sendMessage)({
        "type": _enum.Enum.messageType.text,
        //目前仅支持text
        "receiver": receiver,
        "roomId": parseInt((_this$roomInfo$roomId2 = this.roomInfo.roomId) !== null && _this$roomInfo$roomId2 !== void 0 ? _this$roomInfo$roomId2 : 0),
        //暂不支持
        "content": this.form.textMessage
      }).then(function (res) {
        console.log('sendMessageRes', res);
        _this5.showSelfMessage(res);
        _this5.form.textMessage = "";
      });

      // console.log("消息准备推送到服务器")
      // let messageJson = JSON.stringify({
      // 	"type": Enum.messageType.text,//目前仅支持text
      // 	"receiver": receiver,
      // 	"roomId": parseInt(this.roomInfo.roomId ?? 0),//暂不支持
      // 	"content": this.form.textMessage,
      // })
      // uni.sendSocketMessage({
      // 	data: messageJson
      // });

      // this.form.textMessage = ""

      //发送消息到ws服务器
    },
    // 显示自己的消息在聊天页面
    showSelfMessage: function showSelfMessage(message) {
      var _message$messageId,
        _this6 = this;
      message.id = (_message$messageId = message.messageId) !== null && _message$messageId !== void 0 ? _message$messageId : 0;
      this.messageList.push(message);
      this.$nextTick(function () {
        _this6.scrollToBottom();
      });
    },
    // 显示他人的消息在聊天页面
    showOtherUserMessage: function showOtherUserMessage(messageData) {
      this.messageList.push(messageData);
    },
    handleWebsocketData: function handleWebsocketData(message) {
      var _this7 = this;
      if (message == "ping") {
        //发送pong返回给服务器
      } else {
        //处理业务数据
        var messageData = JSON.parse(message);
        if (messageData) {}
        var sender = parseInt(messageData.sender);
        var receiver = parseInt(messageData.receiver);
        var roomId = parseInt(messageData.roomId);
        var friendId = this.friendInfo.userId;
        var roomType = messageData.roomInfo.type;
        if (roomId !== this.roomInfo.roomId) {
          //私聊判断消息是否属于当前页面的用户
          console.log("\u6D88\u606F\u6765\u4E86\uFF0C\u4F46\u4E0D\u5C5E\u4E8E\u5F53\u524D\u804A\u5929\u5BA4\u7684\u597D\u53CB\u4FE1\u606F\uFF0C\u6682\u4E0D\u663E\u793A\uFF0C\uFF0C\u5F53\u524D\u804A\u5929\u6846\u597D\u53CBID=".concat(friendId, " sender=").concat(sender, " receiver=").concat(receiver, " groupId=").concat(groupId));
          return;
        }
        var messageTypes = [1, 2, 3, 4];
        if (messageTypes.includes(messageData.type)) {
          console.log("能处理的消息：", messageData);
          this.messageList.push(messageData);
          this.$nextTick(function () {
            _this7.scrollToBottom();
          });
        } else {
          //不支持显示的消息
          console.log('消息不支持显示:', messageData);
        }
      }
    },
    scrollToBottom: function scrollToBottom() {
      uni.pageScrollTo({
        selector: "#viewBottomTag"
      });
    },
    inputFocus: function inputFocus(e) {
      console.log("inputFocus....", e.detail.height);
      this.pageBottomHeight = e.detail.height;
    },
    inputBlur: function inputBlur() {
      console.log("inputBlur....");
      this.pageBottomHeight = 0;
    },
    getClass: function getClass() {
      return 'getClass';
    },
    formatShowContentFile: function formatShowContentFile(content) {
      var _data$filepath;
      //文件类消息处理为json数据
      var data = JSON.parse(content);
      return (_data$filepath = data.filepath) !== null && _data$filepath !== void 0 ? _data$filepath : "";
    },
    formatShowContentAudioDuration: function formatShowContentAudioDuration(content) {
      var _data$duration;
      //文件类消息处理为json数据
      var data = JSON.parse(content);
      var d = (_data$duration = data.duration) !== null && _data$duration !== void 0 ? _data$duration : 0;
      d = d <= 0 ? 0 : Math.floor(parseInt(d) / 1000);
      console.log(content, d);
      return d + "''";
    },
    chooseMedia: function chooseMedia() {
      var _this8 = this;
      uni.chooseMedia({
        count: 3,
        mediaType: ['image', 'video'],
        sourceType: ['album', 'camera'],
        maxDuration: 30,
        camera: 'back',
        success: function success(loaclFileRes) {
          var _loaclFileRes$tempFil;
          console.log("loaclFileRes.....", loaclFileRes.tempFiles);
          var filepath = (_loaclFileRes$tempFil = loaclFileRes.tempFiles[0]["tempFilePath"]) !== null && _loaclFileRes$tempFil !== void 0 ? _loaclFileRes$tempFil : "";
          if (!filepath) {
            uni.showToast({
              title: "文件未读取成功，请重新操作",
              duration: 5000,
              icon: 'none'
            });
            return;
          }
          //获取到微信头像后马上下载到本地，随后上传到服务器
          (0, _api.uploadFile)({
            filepath: filepath,
            formData: {
              subject: "RoomFile"
            }
          }).then(function (res) {
            var _this8$roomInfo$roomI, _res$attachmentId, _res$filepath;
            console.log("RoomFileUploadFileOk:", res);
            //构建成图片消息发送
            (0, _api.sendMessage)({
              "type": _enum.Enum.messageType.image,
              //目前仅支持text
              "receiver": 0,
              "roomId": parseInt((_this8$roomInfo$roomI = _this8.roomInfo.roomId) !== null && _this8$roomInfo$roomI !== void 0 ? _this8$roomInfo$roomI : 0),
              "content": JSON.stringify({
                attachmentId: (_res$attachmentId = res.attachmentId) !== null && _res$attachmentId !== void 0 ? _res$attachmentId : 0,
                filepath: (_res$filepath = res.filepath) !== null && _res$filepath !== void 0 ? _res$filepath : ""
              })
            }).then(function (res) {
              console.log('sendMessageRes', res);
              _this8.showSelfMessage(res);
              _this8.form.textMessage = "";
            });
          }).catch(function (f) {
            console.log("RoomFileUploadFileError", f);
          });
        }
      });
    },
    previewImage: function previewImage(message) {
      var _data$filepath2;
      //文件类消息处理为json数据
      var data = JSON.parse(message.content);
      var imgArr = [];
      imgArr.push((_data$filepath2 = data.filepath) !== null && _data$filepath2 !== void 0 ? _data$filepath2 : "");
      //预览图片
      uni.previewImage({
        urls: imgArr,
        current: imgArr[0]
      });
    },
    // =================== 录音模块 ===================			
    startAudio: function startAudio() {
      var _this9 = this;
      console.log('用户开始录音');
      recorderManager.start();
      uni.showModal({
        title: '温馨提示',
        content: '正在录音中，点击完成后录音立即发送',
        cancelText: '取消',
        confirmText: '完成',
        success: function success(res) {
          if (res.confirm) {
            console.log('用户完成录音', recorderManager);
            recorderManager.stop();
            _this9.audioIsOk = true;
          } else if (res.cancel) {
            console.log('用户取消录音', recorderManager);
            recorderManager.stop();
            _this9.audioIsOk = false;
          }
        }
      });
    },
    audioPlay: function audioPlay(content) {
      console.log('播放录音');
      var data = JSON.parse(content);
      if (data.filepath) {
        innerAudioContext.src = data.filepath;
        innerAudioContext.play();
      } else {
        console.log('录入文件不存在');
      }
    } // =================== 录音模块 ===================
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 80:
/*!******************************************************************************************************************!*\
  !*** C:/wwwroot/chat/chat-min-app/pages/chat/chat.vue?vue&type=style&index=0&id=bf16e7f4&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_bf16e7f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.4.08.2024040127/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=style&index=0&id=bf16e7f4&scoped=true&lang=scss& */ 81);
/* harmony import */ var _HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_bf16e7f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_bf16e7f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_bf16e7f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_bf16e7f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_08_2024040127_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_id_bf16e7f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 81:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/wwwroot/chat/chat-min-app/pages/chat/chat.vue?vue&type=style&index=0&id=bf16e7f4&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[71,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat/chat.js.map