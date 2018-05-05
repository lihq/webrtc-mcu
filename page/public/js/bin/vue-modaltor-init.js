!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define("vue-modaltor", [], factory) : "object" == typeof exports ? exports["vue-modaltor"] = factory() : root["vue-modaltor"] = factory()
}("undefined" != typeof self ? self : this, function() {
    return function(modules) {
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId])
                return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__),
            module.l = !0,
            module.exports
        }
        var installedModules = {};
        return __webpack_require__.m = modules,
        __webpack_require__.c = installedModules,
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            })
        }
        ,
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default
            }
            : function() {
                return module
            }
            ;
            return __webpack_require__.d(getter, "a", getter),
            getter
        }
        ,
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property)
        }
        ,
        __webpack_require__.p = "",
        __webpack_require__(__webpack_require__.s = 0)
    }([function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _vueModaltor = __webpack_require__(1)
          , _vueModaltor2 = function(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }(_vueModaltor)
          , modalTor = {
            install: function(Vue, options) {
                Vue.component("vue-modaltor", _vueModaltor2.default)
            }
        };
        exports.default = modalTor,
        "undefined" != typeof window && window.Vue && window.Vue.use(modalTor)
    }
    , function(module, exports, __webpack_require__) {
        __webpack_require__(2);
        var Component = __webpack_require__(7)(__webpack_require__(8), __webpack_require__(9), null, null);
        Component.options.__file = "E:\\fakor\\modaltor\\src\\vue-modaltor.vue",
        Component.esModule && Object.keys(Component.esModule).some(function(key) {
            return "default" !== key && "__esModule" !== key
        }) && console.error("named exports are not supported in *.vue files."),
        Component.options.functional && console.error("[vue-loader] vue-modaltor.vue: functional components are not supported with templates, they should use render functions."),
        module.exports = Component.exports
    }
    , function(module, exports, __webpack_require__) {
        var content = __webpack_require__(3);
        "string" == typeof content && (content = [[module.i, content, ""]]),
        content.locals && (module.exports = content.locals);
        __webpack_require__(5)("b6523272", content, !1)
    }
    , function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(4)(),
        exports.push([module.i, "\n.modal-vue-wrapper.modal-fade {\n  opacity: 0.1;\n  visibility: hidden;\n}\n.modal-vue-wrapper.modal-scale {\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  -o-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.modal-vue-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n  z-index: 99;\n  -webkit-transform: translate3D(0, 0, 0);\n  -ms-transform: translate3D(0, 0, 0);\n  -o-transform: translate3D(0, 0, 0);\n  transform: translate3D(0, 0, 0);\n  transition: all 0.2s cubic-bezier(0.52, 0.02, 0.19, 1.02);\n}\n.modal-vue-wrapper .modal-vue-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9001;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n  z-index: 999;\n}\n.modal-vue-wrapper .modal-vue-panel.modal-fade {\n  transform: scale(1) translate(0, -50%);\n}\n.modal-vue-wrapper .modal-vue-panel.modal-rotate {\n  transform: rotate(45deg) translate(0, -50%);\n}\n.modal-vue-wrapper .modal-vue-panel.modal-slide-right {\n  transform: translate(100px, -50%);\n}\n.modal-vue-wrapper .modal-vue-panel.modal-slide-left {\n  transform: translate(-100px, -50%);\n}\n.modal-vue-wrapper .modal-vue-panel.modal-slide-top {\n  transform: translate(0, -100%);\n}\n.modal-vue-wrapper .modal-vue-panel.modal-slide-bottom {\n  transform: translate(0, 100%);\n}\n.modal-vue-wrapper .modal-vue-panel {\n  z-index: 99999999999;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  background: #fff;\n  box-shadow: 0px 8px 46px rgba(0, 0, 0, 0.08), 0px 2px 6px rgba(0, 0, 0, 0.03);\n  position: absolute;\n  max-height: 100vh;\n  overflow-y: auto;\n  border-radius: 2px;\n  top: 50%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  opacity: 0;\n  transition-property: transform, opacity, width ;\n  transition-duration: 0.3s;\n  /* // 0.3s;  */\n  transition-delay: 0.05s;\n  transition-timing-function: cubic-bezier(0.52, 0.02, 0.19, 1.02);\n}\n.modal-vue-wrapper .modal-vue-panel::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5;\n}\n.modal-vue-wrapper .modal-vue-panel::-webkit-scrollbar {\n  width: 6px;\n  height: 5px;\n  background-color: #F5F5F5;\n}\n.modal-vue-wrapper .modal-vue-panel::-webkit-scrollbar-thumb {\n  background-color: #41b9d2;\n}\n.modal-vue-wrapper .modal-vue-panel .modal-vue-actions {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}\n.modal-vue-wrapper .modal-vue-panel .modal-vue-actions .modal-vue-action-close {\n  display: inline-block;\n  cursor: pointer;\n  color: #222C38;\n  text-align: center;\n  width: 42px;\n  height: 42px;\n  line-height: 42px;\n  border-radius: 50%;\n}\n.modal-vue-wrapper .modal-vue-panel .modal-vue-content {\n  display: flex;\n  align-items: center;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 24px;\n  padding-bottom: 24px;\n  line-height: 1.5;\n}\n.modal-vue-wrapper .modal-vue-panel .modal-vue-content .modal-vue-content-panel {\n  display: block;\n  text-align: justify;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 10px;\n  flex-grow: 1;\n}\n.modal-vue-wrapper .modal-vue-show {\n  transform: translate(0, -50%) !important;\n  opacity: 1 !important;\n}\n.modal-vue-wrapper-show,\n.modal-vue-wrapper-show.modal-fade,\n.modal-vue-wrapper-show.modal-scale {\n  visibility: visible;\n  opacity: 1;\n  background: rgba(255, 255, 255, 0.5);\n  -webkit-transform: translate3D(0, 0, 0);\n  -ms-transform: translate3D(0, 0, 0);\n  -o-transform: translate3D(0, 0, 0);\n  transform: translate3D(0, 0, 0);\n}\n.img-mode img {\n  box-shadow: 0px 8px 46px rgba(0, 0, 0, 0.08), 0px 2px 6px rgba(0, 0, 0, 0.03);\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 9999;\n}\n.modal-vue-actions-parent:before,\n.modal-vue-actions-parent:after {\n  content: '';\n  display: block;\n  width: 2px;\n  height: 30px;\n  position: absolute;\n  right: 30px;\n  top: 15px;\n  cursor: pointer;\n  z-index: 99;\n  background: #000;\n  border-radius: 100%;\n}\n.modal-vue-actions-parent:before {\n  transform: rotate(-45deg);\n}\n.modal-vue-actions-parent:after {\n  transform: rotate(45deg);\n}\n.modal-vue-actions-parent .modal-vue-action-close {\n  display: inline-block;\n  cursor: pointer;\n  color: #222C38;\n  text-align: center;\n  width: 42px;\n  height: 42px;\n  line-height: 42px;\n  border-radius: 50%;\n}\n", ""])
    }
    , function(module, exports) {
        module.exports = function() {
            var list = [];
            return list.toString = function() {
                for (var result = [], i = 0; i < this.length; i++) {
                    var item = this[i];
                    item[2] ? result.push("@media " + item[2] + "{" + item[1] + "}") : result.push(item[1])
                }
                return result.join("")
            }
            ,
            list.i = function(modules, mediaQuery) {
                "string" == typeof modules && (modules = [[null, modules, ""]]);
                for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    "number" == typeof id && (alreadyImportedModules[id] = !0)
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"),
                    list.push(item))
                }
            }
            ,
            list
        }
    }
    , function(module, exports, __webpack_require__) {
        function addStylesToDom(styles) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i]
                  , domStyle = stylesInDom[item.id];
                if (domStyle) {
                    domStyle.refs++;
                    for (var j = 0; j < domStyle.parts.length; j++)
                        domStyle.parts[j](item.parts[j]);
                    for (; j < item.parts.length; j++)
                        domStyle.parts.push(addStyle(item.parts[j]));
                    domStyle.parts.length > item.parts.length && (domStyle.parts.length = item.parts.length)
                } else {
                    for (var parts = [], j = 0; j < item.parts.length; j++)
                        parts.push(addStyle(item.parts[j]));
                    stylesInDom[item.id] = {
                        id: item.id,
                        refs: 1,
                        parts: parts
                    }
                }
            }
        }
        function createStyleElement() {
            var styleElement = document.createElement("style");
            return styleElement.type = "text/css",
            head.appendChild(styleElement),
            styleElement
        }
        function addStyle(obj) {
            var update, remove, styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]');
            if (styleElement) {
                if (isProduction)
                    return noop;
                styleElement.parentNode.removeChild(styleElement)
            }
            if (isOldIE) {
                var styleIndex = singletonCounter++;
                styleElement = singletonElement || (singletonElement = createStyleElement()),
                update = applyToSingletonTag.bind(null, styleElement, styleIndex, !1),
                remove = applyToSingletonTag.bind(null, styleElement, styleIndex, !0)
            } else
                styleElement = createStyleElement(),
                update = applyToTag.bind(null, styleElement),
                remove = function() {
                    styleElement.parentNode.removeChild(styleElement)
                }
                ;
            return update(obj),
            function(newObj) {
                if (newObj) {
                    if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
                        return;
                    update(obj = newObj)
                } else
                    remove()
            }
        }
        function applyToSingletonTag(styleElement, index, remove, obj) {
            var css = remove ? "" : obj.css;
            if (styleElement.styleSheet)
                styleElement.styleSheet.cssText = replaceText(index, css);
            else {
                var cssNode = document.createTextNode(css)
                  , childNodes = styleElement.childNodes;
                childNodes[index] && styleElement.removeChild(childNodes[index]),
                childNodes.length ? styleElement.insertBefore(cssNode, childNodes[index]) : styleElement.appendChild(cssNode)
            }
        }
        function applyToTag(styleElement, obj) {
            var css = obj.css
              , media = obj.media
              , sourceMap = obj.sourceMap;
            if (media && styleElement.setAttribute("media", media),
            sourceMap && (css += "\n/*# sourceURL=" + sourceMap.sources[0] + " */",
            css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */"),
            styleElement.styleSheet)
                styleElement.styleSheet.cssText = css;
            else {
                for (; styleElement.firstChild; )
                    styleElement.removeChild(styleElement.firstChild);
                styleElement.appendChild(document.createTextNode(css))
            }
        }
        var hasDocument = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !hasDocument)
            throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var listToStyles = __webpack_require__(6)
          , stylesInDom = {}
          , head = hasDocument && (document.head || document.getElementsByTagName("head")[0])
          , singletonElement = null
          , singletonCounter = 0
          , isProduction = !1
          , noop = function() {}
          , isOldIE = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        module.exports = function(parentId, list, _isProduction) {
            isProduction = _isProduction;
            var styles = listToStyles(parentId, list);
            return addStylesToDom(styles),
            function(newList) {
                for (var mayRemove = [], i = 0; i < styles.length; i++) {
                    var item = styles[i]
                      , domStyle = stylesInDom[item.id];
                    domStyle.refs--,
                    mayRemove.push(domStyle)
                }
                newList ? (styles = listToStyles(parentId, newList),
                addStylesToDom(styles)) : styles = [];
                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];
                    if (0 === domStyle.refs) {
                        for (var j = 0; j < domStyle.parts.length; j++)
                            domStyle.parts[j]();
                        delete stylesInDom[domStyle.id]
                    }
                }
            }
        }
        ;
        var replaceText = function() {
            var textStore = [];
            return function(index, replacement) {
                return textStore[index] = replacement,
                textStore.filter(Boolean).join("\n")
            }
        }()
    }
    , function(module, exports) {
        module.exports = function(parentId, list) {
            for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
                var item = list[i]
                  , id = item[0]
                  , css = item[1]
                  , media = item[2]
                  , sourceMap = item[3]
                  , part = {
                    id: parentId + ":" + i,
                    css: css,
                    media: media,
                    sourceMap: sourceMap
                };
                newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                    id: id,
                    parts: [part]
                })
            }
            return styles
        }
    }
    , function(module, exports) {
        module.exports = function(rawScriptExports, compiledTemplate, scopeId, cssModules) {
            var esModule, scriptExports = rawScriptExports = rawScriptExports || {}, type = typeof rawScriptExports.default;
            "object" !== type && "function" !== type || (esModule = rawScriptExports,
            scriptExports = rawScriptExports.default);
            var options = "function" == typeof scriptExports ? scriptExports.options : scriptExports;
            if (compiledTemplate && (options.render = compiledTemplate.render,
            options.staticRenderFns = compiledTemplate.staticRenderFns),
            scopeId && (options._scopeId = scopeId),
            cssModules) {
                var computed = Object.create(options.computed || null);
                Object.keys(cssModules).forEach(function(key) {
                    var module = cssModules[key];
                    computed[key] = function() {
                        return module
                    }
                }),
                options.computed = computed
            }
            return {
                esModule: esModule,
                exports: scriptExports,
                options: options
            }
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.default = {
            name: "modal-vue-perfect",
            props: {
                visible: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                resizeWidth: {
                    type: Object
                },
                animationPanel: {
                    type: String,
                    required: !1,
                    default: "modal-fade"
                },
                bgOverlay: {
                    type: String,
                    required: !1,
                    default: "rgba(0, 0, 0, 0.5)"
                },
                bgPanel: {
                    type: String,
                    required: !1,
                    default: "#fff"
                },
                animationParent: {
                    type: String,
                    required: !1,
                    default: "modal-fade"
                },
                imgMode: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                defaultWidth: {
                    type: String,
                    required: !1,
                    default: "50%"
                },
                closeScroll: {
                    type: Boolean,
                    required: !1,
                    default: !0
                }
            },
            data: function() {
                return {
                    width: this.defaultWidth || "80%",
                    open: !1,
                    isOpen: !1,
                    backups: {
                        body: {
                            height: null,
                            overflow: null,
                            paddingRight: null
                        }
                    }
                }
            },
            watch: {
                visible: function(val) {
                    var _this = this;
                    val ? (this.isOpen = !0,
                    setTimeout(function() {
                        return _this.open = !0
                    }, 30),
                    this.closeScroll && this._lockBody()) : (this.closeScroll && this._unlockBody(),
                    this.open = !1,
                    setTimeout(function() {
                        return _this.isOpen = !1
                    }, 300))
                }
            },
            beforeDestroy: function() {
                window.removeEventListener("resize", this.getWindowWidth),
                window.removeEventListener("resize", this.getWindowHeight)
            },
            mounted: function() {
                this.$nextTick(function() {
                    window.addEventListener("resize", this.getWindowWidth),
                    window.addEventListener("resize", this.getWindowHeight),
                    this.getWindowWidth(),
                    this.getWindowHeight()
                })
            },
            methods: {
                getWindowHeight: function(event) {
                    this.windowHeight = document.documentElement.clientHeight
                },
                getWindowWidth: function(event) {
                    var _this2 = this;
                    if (this.resizeWidth && Object.keys(this.resizeWidth).length > 0) {
                        this.windowWidth = document.documentElement.clientWidth;
                        var filter = Object.keys(this.resizeWidth).find(function(f) {
                            return f >= _this2.windowWidth
                        });
                        this.width = filter ? this.resizeWidth[filter] : this.defaultWidth
                    }
                },
                _lockBody: function() {
                    this.backups.body.height = document.body.style.height,
                    this.backups.body.overflow = document.body.style.overflow,
                    document.body.style.paddingRight = "15px",
                    document.body.style.height = "100%",
                    document.body.style.overflow = "hidden"
                },
                _unlockBody: function() {
                    document.body.style.height = this.backups.body.height,
                    document.body.style.overflow = this.backups.body.overflow,
                    document.body.style.paddingRight = this.backups.body.paddingRight
                }
            }
        }
    }
    , function(module, exports, __webpack_require__) {
        module.exports = {
            render: function() {
                var _vm = this
                  , _h = _vm.$createElement
                  , _c = _vm._self._c || _h;
                return _c("div", {
                    staticClass: "div"
                }, [_c("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isOpen,
                        expression: "isOpen"
                    }],
                    staticClass: "modal-vue-wrapper",
                    class: [_vm.animationParent, {
                        "modal-vue-wrapper-show": _vm.open
                    }]
                }, [_c("div", {
                    class: ["modal-vue-overlay", {
                        "modal-vue-actions-parent": _vm.imgMode
                    }],
                    style: {
                        backgroundColor: _vm.bgOverlay
                    },
                    on: {
                        click: function($event) {
                            _vm.$emit("hide")
                        }
                    }
                }), _vm._v(" "), _vm.imgMode ? _c("div", {
                    staticClass: "img-mode"
                }, [_vm._t("default")], 2) : _vm._e(), _vm._v(" "), _vm.imgMode ? _vm._e() : _c("div", {
                    class: ["modal-vue-panel", _vm.animationPanel, {
                        "modal-vue-show": _vm.open
                    }],
                    style: {
                        width: _vm.width,
                        backgroundColor: _vm.bgPanel
                    }
                }, [_c("div", {
                    staticClass: "modal-vue-content"
                }, [_vm.imgMode ? _vm._e() : _c("div", {
                    class: {
                        "modal-vue-actions": !_vm.imgMode
                    }
                }, [_c("div", {
                    staticClass: "modal-vue-action-close",
                    on: {
                        click: function($event) {
                            _vm.$emit("hide")
                        }
                    }
                }, [_c("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24"
                    }
                }, [_c("path", {
                    attrs: {
                        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                        fill: "#292c34"
                    }
                })])])]), _vm._v(" "), _c("div", {
                    staticClass: "modal-vue-content-panel"
                }, [_vm._t("default")], 2)])])])])
            },
            staticRenderFns: []
        },
        module.exports.render._withStripped = !0
    }
    ])
});
