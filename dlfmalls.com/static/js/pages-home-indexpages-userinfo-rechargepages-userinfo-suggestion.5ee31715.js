(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-home-index~pages-userinfo-recharge~pages-userinfo-suggestion"], {
        "0442": function(t, n, a) {
            "use strict";
            var e = a("4ea4");
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = e(a("90e2")),
                o = {
                    top: "top",
                    bottom: "bottom",
                    center: "center",
                    message: "top",
                    dialog: "center",
                    share: "bottom"
                },
                r = {
                    data: function() {
                        return {
                            config: o,
                            popupWidth: 0,
                            popupHeight: 0
                        }
                    },
                    mixins: [i.default],
                    computed: {
                        isDesktop: function() {
                            return this.popupWidth >= 500 && this.popupHeight >= 500
                        }
                    },
                    mounted: function() {
                        var t = this,
                            n = function() {
                                var n = uni.getSystemInfoSync(),
                                    a = n.windowWidth,
                                    e = n.windowHeight,
                                    i = n.windowTop;
                                t.popupWidth = a, t.popupHeight = e + i
                            };
                        n(), window.addEventListener("resize", n), this.$once("hook:beforeDestroy", (function() {
                            window.removeEventListener("resize", n)
                        }))
                    }
                };
            n.default = r
        },
        1471: function(t, n, a) {
            var e = a("24fb");
            n = e(!1), n.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup[data-v-204588a4]{position:fixed;z-index:99}.fixforpc-z-index[data-v-204588a4]{z-index:999}.uni-popup__mask[data-v-204588a4]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.4);opacity:0}.mask-ani[data-v-204588a4]{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-mask[data-v-204588a4]{opacity:1}.uni-bottom-mask[data-v-204588a4]{opacity:1}.uni-center-mask[data-v-204588a4]{opacity:1}.uni-popup__wrapper[data-v-204588a4]{display:block;position:absolute}.top[data-v-204588a4]{top:var(--window-top)}.fixforpc-top[data-v-204588a4]{top:0}.bottom[data-v-204588a4]{bottom:0}.uni-popup__wrapper-box[data-v-204588a4]{display:block;position:relative;\r\n  /* iphonex 等安全区设置，底部安全区适配 */padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.content-ani[data-v-204588a4]{-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-content[data-v-204588a4]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-bottom-content[data-v-204588a4]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-center-content[data-v-204588a4]{-webkit-transform:scale(1);transform:scale(1);opacity:1}', ""]), t.exports = n
        },
        "384b": function(t, n, a) {
            "use strict";
            var e = a("4ea4");
            a("4160"), a("a9e3"), a("ac1f"), a("5319"), a("159b"), Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = e(a("5530")),
                o = {
                    name: "uniTransition",
                    props: {
                        show: {
                            type: Boolean,
                            default: !1
                        },
                        modeClass: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        duration: {
                            type: Number,
                            default: 300
                        },
                        styles: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        }
                    },
                    data: function() {
                        return {
                            isShow: !1,
                            transform: "",
                            ani: { in: "",
                                active: ""
                            }
                        }
                    },
                    watch: {
                        show: {
                            handler: function(t) {
                                t ? this.open() : this.close()
                            },
                            immediate: !0
                        }
                    },
                    computed: {
                        stylesObject: function() {
                            var t = (0, i.default)((0, i.default)({}, this.styles), {}, {
                                    "transition-duration": this.duration / 1e3 + "s"
                                }),
                                n = "";
                            for (var a in t) {
                                var e = this.toLine(a);
                                n += e + ":" + t[a] + ";"
                            }
                            return n
                        }
                    },
                    created: function() {},
                    methods: {
                        change: function() {
                            this.$emit("click", {
                                detail: this.isShow
                            })
                        },
                        open: function() {
                            var t = this;
                            for (var n in clearTimeout(this.timer), this.isShow = !0, this.transform = "", this.ani.in = "", this.getTranfrom(!1)) "opacity" === n ? this.ani.in = "fade-in" : this.transform += "".concat(this.getTranfrom(!1)[n], " ");
                            this.$nextTick((function() {
                                setTimeout((function() {
                                    t._animation(!0)
                                }), 50)
                            }))
                        },
                        close: function(t) {
                            clearTimeout(this.timer), this._animation(!1)
                        },
                        _animation: function(t) {
                            var n = this,
                                a = this.getTranfrom(t);
                            for (var e in this.transform = "", a) "opacity" === e ? this.ani.in = "fade-".concat(t ? "out" : "in") : this.transform += "".concat(a[e], " ");
                            this.timer = setTimeout((function() {
                                t || (n.isShow = !1), n.$emit("change", {
                                    detail: n.isShow
                                })
                            }), this.duration)
                        },
                        getTranfrom: function(t) {
                            var n = {
                                transform: ""
                            };
                            return this.modeClass.forEach((function(a) {
                                switch (a) {
                                    case "fade":
                                        n.opacity = t ? 1 : 0;
                                        break;
                                    case "slide-top":
                                        n.transform += "translateY(".concat(t ? "0" : "-100%", ") ");
                                        break;
                                    case "slide-right":
                                        n.transform += "translateX(".concat(t ? "0" : "100%", ") ");
                                        break;
                                    case "slide-bottom":
                                        n.transform += "translateY(".concat(t ? "0" : "100%", ") ");
                                        break;
                                    case "slide-left":
                                        n.transform += "translateX(".concat(t ? "0" : "-100%", ") ");
                                        break;
                                    case "zoom-in":
                                        n.transform += "scale(".concat(t ? 1 : .8, ") ");
                                        break;
                                    case "zoom-out":
                                        n.transform += "scale(".concat(t ? 1 : 1.2, ") ");
                                        break
                                }
                            })), n
                        },
                        _modeClassArr: function(t) {
                            var n = this.modeClass;
                            if ("string" !== typeof n) {
                                var a = "";
                                return n.forEach((function(n) {
                                    a += n + "-" + t + ","
                                })), a.substr(0, a.length - 1)
                            }
                            return n + "-" + t
                        },
                        toLine: function(t) {
                            return t.replace(/([A-Z])/g, "-$1").toLowerCase()
                        }
                    }
                };
            n.default = o
        },
        "3b3b": function(t, n, a) {
            "use strict";
            a.d(n, "b", (function() {
                return i
            })), a.d(n, "c", (function() {
                return o
            })), a.d(n, "a", (function() {
                return e
            }));
            var e = {
                    uniTransition: a("ec53").default
                },
                i = function() {
                    var t = this,
                        n = t.$createElement,
                        a = t._self._c || n;
                    return t.showPopup ? a("v-uni-view", {
                        staticClass: "uni-popup",
                        class: [t.popupstyle, t.isDesktop ? "fixforpc-z-index" : ""],
                        on: {
                            touchmove: function(n) {
                                n.stopPropagation(), n.preventDefault(), arguments[0] = n = t.$handleEvent(n), t.clear.apply(void 0, arguments)
                            }
                        }
                    }, [t.maskShow ? a("uni-transition", {
                        staticClass: "uni-mask--hook",
                        attrs: {
                            "mode-class": ["fade"],
                            styles: t.maskClass,
                            duration: t.duration,
                            show: t.showTrans
                        },
                        on: {
                            click: function(n) {
                                arguments[0] = n = t.$handleEvent(n), t.onTap.apply(void 0, arguments)
                            }
                        }
                    }) : t._e(), a("uni-transition", {
                        attrs: {
                            "mode-class": t.ani,
                            styles: t.transClass,
                            duration: t.duration,
                            show: t.showTrans
                        },
                        on: {
                            click: function(n) {
                                arguments[0] = n = t.$handleEvent(n), t.onTap.apply(void 0, arguments)
                            }
                        }
                    }, [a("v-uni-view", {
                        staticClass: "uni-popup__wrapper-box",
                        on: {
                            click: function(n) {
                                n.stopPropagation(), arguments[0] = n = t.$handleEvent(n), t.clear.apply(void 0, arguments)
                            }
                        }
                    }, [t._t("default")], 2)], 1), t.maskShow ? a("keypress", {
                        on: {
                            esc: function(n) {
                                arguments[0] = n = t.$handleEvent(n), t.onTap.apply(void 0, arguments)
                            }
                        }
                    }) : t._e()], 1) : t._e()
                },
                o = []
        },
        "56d6": function(t, n, a) {
            "use strict";
            var e = a("b76f"),
                i = a.n(e);
            i.a
        },
        "8c79": function(t, n, a) {
            "use strict";
            a.r(n);
            var e = a("3b3b"),
                i = a("c16e");
            for (var o in i) "default" !== o && function(t) {
                a.d(n, t, (function() {
                    return i[t]
                }))
            }(o);
            a("56d6");
            var r, s = a("f0c5"),
                c = Object(s["a"])(i["default"], e["b"], e["c"], !1, null, "204588a4", null, !1, e["a"], r);
            n["default"] = c.exports
        },
        "90e2": function(t, n, a) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                created: function() {
                    "message" === this.type && (this.maskShow = !1, this.childrenMsg = null)
                },
                methods: {
                    customOpen: function() {
                        this.childrenMsg && this.childrenMsg.open()
                    },
                    customClose: function() {
                        this.childrenMsg && this.childrenMsg.close()
                    }
                }
            };
            n.default = e
        },
        9865: function(t, n, a) {
            "use strict";
            var e;
            a.d(n, "b", (function() {
                return i
            })), a.d(n, "c", (function() {
                return o
            })), a.d(n, "a", (function() {
                return e
            }));
            var i = function() {
                    var t = this,
                        n = t.$createElement,
                        a = t._self._c || n;
                    return t.isShow ? a("v-uni-view", {
                        ref: "ani",
                        staticClass: "uni-transition",
                        class: [t.ani.in],
                        style: "transform:" + t.transform + ";" + t.stylesObject,
                        on: {
                            click: function(n) {
                                arguments[0] = n = t.$handleEvent(n), t.change.apply(void 0, arguments)
                            }
                        }
                    }, [t._t("default")], 2) : t._e()
                },
                o = []
        },
        aa5b: function(t, n, a) {
            "use strict";
            var e = a("4ea4");
            a("d3b7"), Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = e(a("ec53")),
                o = e(a("0442")),
                r = e(a("f444")),
                s = {
                    name: "UniPopup",
                    components: {
                        uniTransition: i.default,
                        keypress: r.default
                    },
                    props: {
                        animation: {
                            type: Boolean,
                            default: !0
                        },
                        type: {
                            type: String,
                            default: "center"
                        },
                        maskClick: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    provide: function() {
                        return {
                            popup: this
                        }
                    },
                    mixins: [o.default],
                    watch: {
                        type: {
                            handler: function(t) {
                                this[this.config[t]]()
                            },
                            immediate: !0
                        },
                        isDesktop: {
                            handler: function(t) {
                                this[this.config[this.type]]()
                            },
                            immediate: !0
                        },
                        maskClick: {
                            handler: function(t) {
                                this.mkclick = t
                            },
                            immediate: !0
                        }
                    },
                    data: function() {
                        return {
                            duration: 300,
                            ani: [],
                            showPopup: !1,
                            showTrans: !1,
                            maskClass: {
                                position: "fixed",
                                bottom: 0,
                                top: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.4)"
                            },
                            transClass: {
                                position: "fixed",
                                left: 0,
                                right: 0
                            },
                            maskShow: !0,
                            mkclick: !0,
                            popupstyle: this.isDesktop ? "fixforpc-top" : "top"
                        }
                    },
                    created: function() {
                        this.mkclick = this.maskClick, this.animation ? this.duration = 300 : this.duration = 0
                    },
                    methods: {
                        clear: function(t) {
                            t.stopPropagation()
                        },
                        open: function() {
                            var t = this;
                            this.showPopup = !0, this.$nextTick((function() {
                                new Promise((function(n) {
                                    clearTimeout(t.timer), t.timer = setTimeout((function() {
                                        t.showTrans = !0, t.$nextTick((function() {
                                            n()
                                        }))
                                    }), 50)
                                })).then((function(n) {
                                    clearTimeout(t.msgtimer), t.msgtimer = setTimeout((function() {
                                        t.customOpen && t.customOpen()
                                    }), 100), t.$emit("change", {
                                        show: !0,
                                        type: t.type
                                    })
                                }))
                            }))
                        },
                        close: function(t) {
                            var n = this;
                            this.showTrans = !1, this.$nextTick((function() {
                                n.$emit("change", {
                                    show: !1,
                                    type: n.type
                                }), clearTimeout(n.timer), n.customOpen && n.customClose(), n.timer = setTimeout((function() {
                                    n.showPopup = !1
                                }), 300)
                            }))
                        },
                        onTap: function() {
                            this.mkclick && this.close()
                        },
                        top: function() {
                            this.popupstyle = this.isDesktop ? "fixforpc-top" : "top", this.ani = ["slide-top"], this.transClass = {
                                position: "fixed",
                                left: 0,
                                right: 0
                            }
                        },
                        bottom: function() {
                            this.popupstyle = "bottom", this.ani = ["slide-bottom"], this.transClass = {
                                position: "fixed",
                                left: 0,
                                right: 0,
                                bottom: 0
                            }
                        },
                        center: function() {
                            this.popupstyle = "center", this.ani = ["zoom-out", "fade"], this.transClass = {
                                position: "fixed",
                                display: "flex",
                                flexDirection: "column",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                top: 0,
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        }
                    }
                };
            n.default = s
        },
        aba9: function(t, n, a) {
            "use strict";
            var e = a("b69f"),
                i = a.n(e);
            i.a
        },
        b432: function(t, n, a) {
            "use strict";
            a.r(n);
            var e = a("384b"),
                i = a.n(e);
            for (var o in e) "default" !== o && function(t) {
                a.d(n, t, (function() {
                    return e[t]
                }))
            }(o);
            n["default"] = i.a
        },
        b69f: function(t, n, a) {
            var e = a("b9aa");
            "string" === typeof e && (e = [
                [t.i, e, ""]
            ]), e.locals && (t.exports = e.locals);
            var i = a("4f06").default;
            i("2da368dc", e, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        b76f: function(t, n, a) {
            var e = a("1471");
            "string" === typeof e && (e = [
                [t.i, e, ""]
            ]), e.locals && (t.exports = e.locals);
            var i = a("4f06").default;
            i("10455607", e, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        b9aa: function(t, n, a) {
            var e = a("24fb");
            n = e(!1), n.push([t.i, ".uni-transition[data-v-d3037be4]{-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;z-index:998}.fade-in[data-v-d3037be4]{opacity:0}.fade-active[data-v-d3037be4]{opacity:1}.slide-top-in[data-v-d3037be4]{\n\t/* transition-property: transform, opacity; */-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-d3037be4]{-webkit-transform:translateY(0);transform:translateY(0)\n\t/* opacity: 1; */}.slide-right-in[data-v-d3037be4]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-d3037be4]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-d3037be4]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-d3037be4]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-d3037be4]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-d3037be4]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-d3037be4]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-d3037be4]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-d3037be4]{-webkit-transform:scale(1.2);transform:scale(1.2)}", ""]), t.exports = n
        },
        c16e: function(t, n, a) {
            "use strict";
            a.r(n);
            var e = a("aa5b"),
                i = a.n(e);
            for (var o in e) "default" !== o && function(t) {
                a.d(n, t, (function() {
                    return e[t]
                }))
            }(o);
            n["default"] = i.a
        },
        ec53: function(t, n, a) {
            "use strict";
            a.r(n);
            var e = a("9865"),
                i = a("b432");
            for (var o in i) "default" !== o && function(t) {
                a.d(n, t, (function() {
                    return i[t]
                }))
            }(o);
            a("aba9");
            var r, s = a("f0c5"),
                c = Object(s["a"])(i["default"], e["b"], e["c"], !1, null, "d3037be4", null, !1, e["a"], r);
            n["default"] = c.exports
        },
        f444: function(t, n, a) {
            "use strict";
            a("7db0"), a("caad"), a("b64b"), a("2532"), Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                name: "Keypress",
                props: {
                    disable: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    var t = this,
                        n = {
                            esc: ["Esc", "Escape"],
                            tab: "Tab",
                            enter: "Enter",
                            space: [" ", "Spacebar"],
                            up: ["Up", "ArrowUp"],
                            left: ["Left", "ArrowLeft"],
                            right: ["Right", "ArrowRight"],
                            down: ["Down", "ArrowDown"],
                            delete: ["Backspace", "Delete", "Del"]
                        },
                        a = function(a) {
                            if (!t.disable) {
                                var e = Object.keys(n).find((function(t) {
                                    var e = a.key,
                                        i = n[t];
                                    return i === e || Array.isArray(i) && i.includes(e)
                                }));
                                e && setTimeout((function() {
                                    t.$emit(e, {})
                                }), 0)
                            }
                        };
                    document.addEventListener("keyup", a), this.$once("hook:beforeDestroy", (function() {
                        document.removeEventListener("keyup", a)
                    }))
                },
                render: function() {}
            };
            n.default = e
        }
    }
]);