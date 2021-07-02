(function(e) {
    function n(n) {
        for (var o, a, s = n[0], u = n[1], c = n[2], l = 0, f = []; l < s.length; l++) a = s[l], Object.prototype.hasOwnProperty.call(i, a) && i[a] && f.push(i[a][0]), i[a] = 0;
        for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
        d && d(n);
        while (f.length) f.shift()();
        return r.push.apply(r, c || []), t()
    }

    function t() {
        for (var e, n = 0; n < r.length; n++) {
            for (var t = r[n], o = !0, a = 1; a < t.length; a++) {
                var u = t[a];
                0 !== i[u] && (o = !1)
            }
            o && (r.splice(n--, 1), e = s(s.s = t[0]))
        }
        return e
    }
    var o = {},
        i = {
            index: 0
        },
        r = [];

    function a(e) {
        return s.p + "static/js/" + ({
            "pages-error": "pages-error",
            "pages-forget-index": "pages-forget-index",
            "pages-gift-gift": "pages-gift-gift",
            "pages-goods-index": "pages-goods-index",
            "pages-home-index~pages-userinfo-recharge~pages-userinfo-suggestion": "pages-home-index~pages-userinfo-recharge~pages-userinfo-suggestion",
            "pages-home-index": "pages-home-index",
            "pages-userinfo-recharge": "pages-userinfo-recharge",
            "pages-userinfo-suggestion": "pages-userinfo-suggestion",
            "pages-login-index": "pages-login-index",
            "pages-register-index": "pages-register-index",
            "pages-userinfo-addAddress": "pages-userinfo-addAddress",
            "pages-userinfo-addbank": "pages-userinfo-addbank",
            "pages-userinfo-address": "pages-userinfo-address",
            "pages-userinfo-addsuggestion": "pages-userinfo-addsuggestion",
            "pages-userinfo-agentDetails": "pages-userinfo-agentDetails",
            "pages-userinfo-bank": "pages-userinfo-bank",
            "pages-userinfo-download": "pages-userinfo-download",
            "pages-userinfo-policy": "pages-userinfo-policy",
            "pages-userinfo-promotion": "pages-userinfo-promotion",
            "pages-userinfo-rechargeList": "pages-userinfo-rechargeList",
            "pages-userinfo-report": "pages-userinfo-report",
            "pages-userinfo-resetPassword": "pages-userinfo-resetPassword",
            "pages-userinfo-risk": "pages-userinfo-risk",
            "pages-userinfo-totalReport": "pages-userinfo-totalReport",
            "pages-userinfo-transaction": "pages-userinfo-transaction",
            "pages-userinfo-withdraw": "pages-userinfo-withdraw",
            "pages-userinfo-withdrawRecord": "pages-userinfo-withdrawRecord",
            "pages-webView-rechargeWebView": "pages-webView-rechargeWebView",
            "pages-webView-webView": "pages-webView-webView"
        }[e] || e) + "." + {
            "pages-error": "351ddfae",
            "pages-forget-index": "4390c70f",
            "pages-gift-gift": "45966a47",
            "pages-goods-index": "08cfda3f",
            "pages-home-index~pages-userinfo-recharge~pages-userinfo-suggestion": "5ee31715",
            "pages-home-index": "e436bb3f",
            "pages-userinfo-recharge": "e9cd8958",
            "pages-userinfo-suggestion": "98ad9f50",
            "pages-login-index": "320f81a2",
            "pages-register-index": "63c37140",
            "pages-userinfo-addAddress": "3e8390f0",
            "pages-userinfo-addbank": "2666691e",
            "pages-userinfo-address": "1cf77db0",
            "pages-userinfo-addsuggestion": "8adf703c",
            "pages-userinfo-agentDetails": "7f2a19ce",
            "pages-userinfo-bank": "756011bb",
            "pages-userinfo-download": "be5e727d",
            "pages-userinfo-policy": "913d9c49",
            "pages-userinfo-promotion": "f633aa00",
            "pages-userinfo-rechargeList": "9a821adc",
            "pages-userinfo-report": "1fabccc8",
            "pages-userinfo-resetPassword": "722a5376",
            "pages-userinfo-risk": "09a8017e",
            "pages-userinfo-totalReport": "7bc766ae",
            "pages-userinfo-transaction": "eceaff4f",
            "pages-userinfo-withdraw": "9907d3e2",
            "pages-userinfo-withdrawRecord": "957c1eac",
            "pages-webView-rechargeWebView": "5fcd8a72",
            "pages-webView-webView": "d05cba3f"
        }[e] + ".js"
    }

    function s(n) {
        if (o[n]) return o[n].exports;
        var t = o[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(t.exports, t, t.exports, s), t.l = !0, t.exports
    }
    s.e = function(e) {
        var n = [],
            t = i[e];
        if (0 !== t)
            if (t) n.push(t[2]);
            else {
                var o = new Promise((function(n, o) {
                    t = i[e] = [n, o]
                }));
                n.push(t[2] = o);
                var r, u = document.createElement("script");
                u.charset = "utf-8", u.timeout = 120, s.nc && u.setAttribute("nonce", s.nc), u.src = a(e);
                var c = new Error;
                r = function(n) {
                    u.onerror = u.onload = null, clearTimeout(l);
                    var t = i[e];
                    if (0 !== t) {
                        if (t) {
                            var o = n && ("load" === n.type ? "missing" : n.type),
                                r = n && n.target && n.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + o + ": " + r + ")", c.name = "ChunkLoadError", c.type = o, c.request = r, t[1](c)
                        }
                        i[e] = void 0
                    }
                };
                var l = setTimeout((function() {
                    r({
                        type: "timeout",
                        target: u
                    })
                }), 12e4);
                u.onerror = u.onload = r, document.head.appendChild(u)
            }
        return Promise.all(n)
    }, s.m = e, s.c = o, s.d = function(e, n, t) {
        s.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }, s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, n) {
        if (1 & n && (e = s(e)), 8 & n) return e;
        if (4 & n && "object" === typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (s.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var o in e) s.d(t, o, function(n) {
                return e[n]
            }.bind(null, o));
        return t
    }, s.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return s.d(n, "a", n), n
    }, s.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, s.p = "/", s.oe = function(e) {
        throw console.error(e), e
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = u.push.bind(u);
    u.push = n, u = u.slice();
    for (var l = 0; l < u.length; l++) n(u[l]);
    var d = c;
    r.push([0, "chunk-vendors"]), t()
})({
    0: function(e, n, t) {
        e.exports = t("7048")
    },
    "01c7": function(e, n, t) {
        "use strict";
        var o;
        t.d(n, "b", (function() {
            return i
        })), t.d(n, "c", (function() {
            return r
        })), t.d(n, "a", (function() {
            return o
        }));
        var i = function() {
                var e = this,
                    n = e.$createElement,
                    t = e._self._c || n;
                return t("App", {
                    attrs: {
                        keepAliveInclude: e.keepAliveInclude
                    }
                })
            },
            r = []
    },
    "0597": function(e, n, t) {
        "use strict";
        var o = t("b2bf"),
            i = t.n(o);
        i.a
    },
    "0a66": function(e, n, t) {
        var o = t("ffd6");
        "string" === typeof o && (o = [
            [e.i, o, ""]
        ]), o.locals && (e.exports = o.locals);
        var i = t("4f06").default;
        i("3af76e79", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    1094: function(e, n, t) {
        "use strict";
        t.d(n, "b", (function() {
            return i
        })), t.d(n, "c", (function() {
            return r
        })), t.d(n, "a", (function() {
            return o
        }));
        var o = {
                uniEasyinput: t("b4d6").default
            },
            i = function() {
                var e = this,
                    n = e.$createElement,
                    t = e._self._c || n;
                return t("v-uni-view", {
                    staticClass: "phone-area-wrapper"
                }, [t("uni-easyinput", {
                    attrs: {
                        placeholder: e.placeholder
                    },
                    on: {
                        focus: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.handlerFocus.apply(void 0, arguments)
                        },
                        input: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.handlerInput.apply(void 0, arguments)
                        }
                    },
                    model: {
                        value: e.phone,
                        callback: function(n) {
                            e.phone = n
                        },
                        expression: "phone"
                    }
                }, [e.icon ? t("template", {
                    slot: "left"
                }, [t("v-uni-image", {
                    staticClass: "icon-image",
                    attrs: {
                        mode: "aspectFit",
                        src: "/static/common/Mobile-number.png"
                    }
                })], 1) : e._e()], 2)], 1)
            },
            r = []
    },
    "124e": function(e, n, t) {
        "use strict";
        var o = t("4ea4");
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = o(t("5530")),
            r = t("2f62"),
            a = {
                globalData: {
                    text: "text",
                    balance: "6666",
                    token: "",
                    isLogin: !1,
                    userInfo: {},
                    Mysocket: {},
                    preiodInfo: {}
                },
                computed: (0, i.default)({}, (0, r.mapGetters)(["getIsLogin", "getToken", "getPreiodInfo"])),
                watch: {
                    getIsLogin: {
                        handler: function(e, n) {},
                        deep: !0,
                        immediate: !0
                    }
                },
                methods: {
                    getMyUserInfo: function() {
                        var e = this;
                        this.$request.request({
                            url: "/tokenLogin",
                            method: "POST"
                        }).then((function(n) {
                            n.isLogin && (uni.setStorage({
                                key: "token",
                                data: n.token
                            }), e.$store.commit("setBalacnce", n.balance), e.$store.commit("setToken", n.token), e.$store.commit("setUserInfo", n), e.$store.commit("setIsLogin", !0), e.$store.commit("setnotice", n.config))
                        }))
                    },
                    checkupdate: function() {
                        var e = this;
                        plus.runtime.getProperty(plus.runtime.appid, (function(n) {
                            e.$request.request({
                                url: "/update",
                                method: "POST",
                                data: {
                                    version: n.version,
                                    name: n.name
                                }
                            }).then((function(n) {
                                console.log(n), "no" != n.action && uni.showModal({
                                    title: "Update tip",
                                    content: n.note ? n.note : "Update App",
                                    showCancel: !1,
                                    confirmText: "confirm",
                                    success: function(t) {
                                        t.confirm && ("all" === n.action ? e.updateAppAll(n.pkgUrl) : e.downWgt(n.wgtUrl))
                                    }
                                })
                            }))
                        }))
                    },
                    updateAppAll: function(e) {
                        if ("iOS" === plus.os.name) plus.runtime.openURL(e);
                        else {
                            plus.nativeUI.showWaiting("Download the installation file...");
                            var n = plus.downloader.createDownload(e, {}, (function(e, n) {
                                if (plus.nativeUI.closeWaiting(), 200 === n) {
                                    var t = e.filename;
                                    console.log(e.filename), plus.runtime.install(t)
                                } else plus.downloader.clear(), alert("Download failed: " + n)
                            }));
                            n.start()
                        }
                    },
                    downWgt: function(e) {
                        var n = this;
                        plus.nativeUI.showWaiting("Download the updated file..."), plus.downloader.createDownload(e, {
                            filename: "_doc/update/"
                        }, (function(e, t) {
                            200 == t ? n.installWgt(e.filename) : plus.nativeUI.alert("Failed to download the update file！"), plus.nativeUI.closeWaiting()
                        })).start()
                    },
                    installWgt: function(e) {
                        plus.nativeUI.showWaiting("Install the update file..."), plus.runtime.install(e, {}, (function() {
                            plus.nativeUI.closeWaiting(), uni.showModal({
                                title: "Update tip",
                                content: "Application resource update completed！",
                                showCancel: !1,
                                confirmText: "confirm",
                                success: function(e) {
                                    plus.runtime.restart()
                                }
                            })
                        }), (function(e) {
                            plus.nativeUI.closeWaiting(), console.log("安装更新文件失败[" + e.code + "]：" + e.message), uni.showModal({
                                title: "Update tip",
                                content: "Failed to install the update file" + e.message,
                                showCancel: !1,
                                confirmText: "confirm"
                            })
                        }))
                    }
                },
                onLaunch: function() {},
                onShow: function() {
                    console.log("App Show")
                },
                onHide: function() {
                    console.log("App Hide")
                }
            };
        n.default = a
    },
    1736: function(e, n) {
        e.exports = {
            xxxnp: "https://dlfmalls.com"
        }
    },
    "19ac": function(e, n, t) {
        "use strict";
        var o = t("4ea4");
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = o(t("e143")),
            r = o(t("2f62")),
            a = o(t("ca5b")),
            s = t("1ae7"),
            u = t("77b2"),
            c = t("b8b5"),
            l = t("9d10");
        i.default.use(r.default);
        var d = new a.default({
                storage: window.sessionStorage,
                reducer: function(e) {
                    return {
                        userInfo: e.userInfo,
                        isLogin: e.isLogin,
                        token: e.token,
                        balance: e.balance,
                        preiodInfo: e.preiodInfo,
                        betResult: e.betResult,
                        notice: e.notice
                    }
                }
            }),
            f = new r.default.Store({
                state: s.state,
                mutations: u.mutations,
                actions: c.actions,
                getters: l.getters,
                plugins: [d.plugin]
            });
        n.default = f
    },
    "1ae7": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.state = void 0;
        var o = {
            isLogin: !1,
            userInfo: {},
            token: "",
            balance: 0,
            preiodInfo: {},
            betResult: [
                [],
                [],
                [],
                []
            ],
            notice: {},
            loginEjectNotice: !1
        };
        n.state = o
    },
    "1aed": function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("3bf3"),
            i = t("3fcf");
        for (var r in i) "default" !== r && function(e) {
            t.d(n, e, (function() {
                return i[e]
            }))
        }(r);
        t("1f69");
        var a, s = t("f0c5"),
            u = Object(s["a"])(i["default"], o["b"], o["c"], !1, null, "c72ddc8a", null, !1, o["a"], a);
        n["default"] = u.exports
    },
    "1f69": function(e, n, t) {
        "use strict";
        var o = t("0a66"),
            i = t.n(o);
        i.a
    },
    "1fac": function(e, n, t) {
        "use strict";
        (function(e) {
            var n = t("4ea4"),
                o = n(t("e143"));
            e["____89AC999____"] = !0, delete e["____89AC999____"], e.__uniConfig = {
                globalStyle: {
                    navigationBarTextStyle: "black",
                    navigationBarTitleText: "",
                    navigationBarBackgroundColor: "#ddd",
                    backgroundColor: "#f5f5f5"
                }
            }, e.__uniConfig.compilerVersion = "3.1.2", e.__uniConfig.router = {
                mode: "hash",
                base: "/"
            }, e.__uniConfig.publicPath = "/", e.__uniConfig["async"] = {
                loading: "AsyncLoading",
                error: "AsyncError",
                delay: 200,
                timeout: 6e4
            }, e.__uniConfig.debug = !1, e.__uniConfig.networkTimeout = {
                request: 6e4,
                connectSocket: 6e4,
                uploadFile: 6e4,
                downloadFile: 6e4
            }, e.__uniConfig.sdkConfigs = {}, e.__uniConfig.qqMapKey = "XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2", e.__uniConfig.nvue = {
                "flex-direction": "column"
            }, e.__uniConfig.__webpack_chunk_load__ = t.e, o.default.component("pages-home-index", (function(e) {
                var n = {
                    component: Promise.all([t.e("pages-home-index~pages-userinfo-recharge~pages-userinfo-suggestion"), t.e("pages-home-index")]).then(function() {
                        return e(t("53e7"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-login-index", (function(e) {
                var n = {
                    component: t.e("pages-login-index").then(function() {
                        return e(t("7bac"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-register-index", (function(e) {
                var n = {
                    component: t.e("pages-register-index").then(function() {
                        return e(t("3b1d"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-forget-index", (function(e) {
                var n = {
                    component: t.e("pages-forget-index").then(function() {
                        return e(t("bf35"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-policy", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-policy").then(function() {
                        return e(t("ab3f"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-promotion", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-promotion").then(function() {
                        return e(t("b1c5"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-suggestion", (function(e) {
                var n = {
                    component: Promise.all([t.e("pages-home-index~pages-userinfo-recharge~pages-userinfo-suggestion"), t.e("pages-userinfo-suggestion")]).then(function() {
                        return e(t("cc6a"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-resetPassword", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-resetPassword").then(function() {
                        return e(t("4686"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-withdraw", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-withdraw").then(function() {
                        return e(t("e926"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-withdrawRecord", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-withdrawRecord").then(function() {
                        return e(t("8c5e"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-webView-rechargeWebView", (function(e) {
                var n = {
                    component: t.e("pages-webView-rechargeWebView").then(function() {
                        return e(t("79a5"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-webView-webView", (function(e) {
                var n = {
                    component: t.e("pages-webView-webView").then(function() {
                        return e(t("d9c1"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-recharge", (function(e) {
                var n = {
                    component: Promise.all([t.e("pages-home-index~pages-userinfo-recharge~pages-userinfo-suggestion"), t.e("pages-userinfo-recharge")]).then(function() {
                        return e(t("4cac"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-download", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-download").then(function() {
                        return e(t("b537"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-bank", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-bank").then(function() {
                        return e(t("550d"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-address", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-address").then(function() {
                        return e(t("aec0"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-addAddress", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-addAddress").then(function() {
                        return e(t("6803"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-rechargeList", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-rechargeList").then(function() {
                        return e(t("fbb1"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-transaction", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-transaction").then(function() {
                        return e(t("3161"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-risk", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-risk").then(function() {
                        return e(t("1ba8"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-addbank", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-addbank").then(function() {
                        return e(t("a95b"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-addsuggestion", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-addsuggestion").then(function() {
                        return e(t("612f"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-gift-gift", (function(e) {
                var n = {
                    component: t.e("pages-gift-gift").then(function() {
                        return e(t("4d47"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-goods-index", (function(e) {
                var n = {
                    component: t.e("pages-goods-index").then(function() {
                        return e(t("64db"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-report", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-report").then(function() {
                        return e(t("9071"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-totalReport", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-totalReport").then(function() {
                        return e(t("4f0d"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-userinfo-agentDetails", (function(e) {
                var n = {
                    component: t.e("pages-userinfo-agentDetails").then(function() {
                        return e(t("0fc5"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), o.default.component("pages-error", (function(e) {
                var n = {
                    component: t.e("pages-error").then(function() {
                        return e(t("1f61"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), e.__uniRoutes = [{
                path: "/",
                alias: "/pages/home/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isEntry: !0
                            }, __uniConfig.globalStyle, {
                                titleNView: {
                                    type: "none"
                                }
                            })
                        }, [e("pages-home-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 1,
                    name: "pages-home-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/home/index",
                    isQuit: !0,
                    isEntry: !0,
                    windowTop: 0
                }
            }, {
                path: "/pages/login/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Login",
                                titleNView: {
                                    titleText: "Login"
                                }
                            })
                        }, [e("pages-login-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-login-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/login/index",
                    windowTop: 44
                }
            }, {
                path: "/pages/register/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                titleNView: {
                                    titleText: "Register"
                                }
                            })
                        }, [e("pages-register-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-register-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/register/index",
                    windowTop: 44
                }
            }, {
                path: "/pages/forget/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                titleNView: {
                                    titleText: "Forget"
                                }
                            })
                        }, [e("pages-forget-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-forget-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/forget/index",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/policy",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                titleNView: {
                                    titleText: "Privacy Policy"
                                }
                            })
                        }, [e("pages-userinfo-policy", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-policy",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/policy",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/promotion",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                titleNView: {
                                    titleText: "Promotion"
                                }
                            })
                        }, [e("pages-userinfo-promotion", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-promotion",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/promotion",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/suggestion",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                titleNView: {
                                    titleText: "Complaints & Suggestion",
                                    titleSize: "36rpx",
                                    buttons: [{
                                        type: "none",
                                        text: "",
                                        fontSrc: "/static/uni.ttf"
                                    }]
                                }
                            })
                        }, [e("pages-userinfo-suggestion", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-suggestion",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/suggestion",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/resetPassword",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                titleNView: {
                                    titleText: "Reset Password"
                                }
                            })
                        }, [e("pages-userinfo-resetPassword", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-resetPassword",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/resetPassword",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/withdraw",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "withdraw",
                                titleNView: {
                                    titleText: "withdraw",
                                    titleSize: "36rpx",
                                    buttons: [{
                                        type: "none",
                                        text: "",
                                        fontSrc: "/static/uni.ttf"
                                    }]
                                }
                            })
                        }, [e("pages-userinfo-withdraw", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-withdraw",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/withdraw",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/withdrawRecord",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                titleNView: {
                                    titleText: "Withdraw Record"
                                }
                            })
                        }, [e("pages-userinfo-withdrawRecord", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-withdrawRecord",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/withdrawRecord",
                    windowTop: 44
                }
            }, {
                path: "/pages/webView/rechargeWebView",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-webView-rechargeWebView", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-webView-rechargeWebView",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/webView/rechargeWebView",
                    windowTop: 44
                }
            }, {
                path: "/pages/webView/webView",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-webView-webView", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-webView-webView",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/webView/webView",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/recharge",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "recharge",
                                titleNView: {
                                    titleText: "recharge",
                                    titleSize: "36rpx",
                                    buttons: [{
                                        type: "none",
                                        text: "",
                                        fontSrc: "/static/uni.ttf"
                                    }]
                                }
                            })
                        }, [e("pages-userinfo-recharge", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-recharge",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/recharge",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/download",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                titleNView: {
                                    titleText: "Download"
                                }
                            })
                        }, [e("pages-userinfo-download", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-download",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/download",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/bank",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                titleNView: {
                                    titleText: "Bank Card",
                                    titleSize: "36rpx",
                                    buttons: [{
                                        type: "none",
                                        text: "",
                                        fontSrc: "/static/uni.ttf"
                                    }]
                                }
                            })
                        }, [e("pages-userinfo-bank", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-bank",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/bank",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/address",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                titleNView: {
                                    titleText: "Addresss"
                                }
                            })
                        }, [e("pages-userinfo-address", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-address",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/address",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/addAddress",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                titleNView: {
                                    titleText: "Add Address"
                                }
                            })
                        }, [e("pages-userinfo-addAddress", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-addAddress",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/addAddress",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/rechargeList",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Recharge Record"
                            })
                        }, [e("pages-userinfo-rechargeList", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-rechargeList",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/rechargeList",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/transaction",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Transaction"
                            })
                        }, [e("pages-userinfo-transaction", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-transaction",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/transaction",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/risk",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Risk Disclosure Agreement"
                            })
                        }, [e("pages-userinfo-risk", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-risk",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/risk",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/addbank",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Add Bank"
                            })
                        }, [e("pages-userinfo-addbank", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-addbank",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/addbank",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/addsuggestion",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Add Complaints & Suggestion"
                            })
                        }, [e("pages-userinfo-addsuggestion", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-addsuggestion",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/addsuggestion",
                    windowTop: 44
                }
            }, {
                path: "/pages/gift/gift",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Gift"
                            })
                        }, [e("pages-gift-gift", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-gift-gift",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/gift/gift",
                    windowTop: 44
                }
            }, {
                path: "/pages/goods/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Goods Detail"
                            })
                        }, [e("pages-goods-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-goods-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/goods/index",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/report",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Report"
                            })
                        }, [e("pages-userinfo-report", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-report",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/report",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/totalReport",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Total Report"
                            })
                        }, [e("pages-userinfo-totalReport", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-totalReport",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/totalReport",
                    windowTop: 44
                }
            }, {
                path: "/pages/userinfo/agentDetails",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-userinfo-agentDetails", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-userinfo-agentDetails",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/userinfo/agentDetails",
                    windowTop: 44
                }
            }, {
                path: "/pages/error",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "error"
                            })
                        }, [e("pages-error", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-error",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/error",
                    windowTop: 44
                }
            }, {
                path: "/preview-image",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-preview-image", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "preview-image",
                    pagePath: "/preview-image"
                }
            }, {
                path: "/choose-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-choose-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "choose-location",
                    pagePath: "/choose-location"
                }
            }, {
                path: "/open-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-open-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "open-location",
                    pagePath: "/open-location"
                }
            }], e.UniApp && new e.UniApp
        }).call(this, t("c8ba"))
    },
    "26b6": function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("1094"),
            i = t("9d30");
        for (var r in i) "default" !== r && function(e) {
            t.d(n, e, (function() {
                return i[e]
            }))
        }(r);
        t("0597");
        var a, s = t("f0c5"),
            u = Object(s["a"])(i["default"], o["b"], o["c"], !1, null, "2d16e1ce", null, !1, o["a"], a);
        n["default"] = u.exports
    },
    "354c": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            data: function() {
                return {
                    areaType: 0,
                    areaList: ["+91", "+86", "+855", "+82", "+81", "+66", "+84"],
                    phone: ""
                }
            },
            model: {
                prop: "value",
                event: "change"
            },
            props: {
                value: {
                    type: String
                },
                placeholder: {
                    type: String,
                    default: "Mobile Number"
                },
                icon: {
                    type: Boolean,
                    default: !0
                }
            },
            watch: {
                value: {
                    handler: function(e, n) {
                        this.phone = e
                    }
                },
                deep: !0,
                immediate: !0
            },
            created: function() {
                this.value && (this.phone = this.value)
            },
            methods: {
                handlerFocus: function() {
                    "" == this.value && this.$emit("change", "+91")
                },
                handlerInput: function(e) {
                    this.$emit("change", e)
                }
            }
        };
        n.default = o
    },
    "38eb": function(e, n, t) {
        var o = t("24fb");
        n = o(!1), n.push([e.i, '@font-face{font-family:uniicons;src:url(/static/uni.ttf)}@font-face{font-family:pingfang-jian;src:url(/static/pingfang-jian.ttf)}*{box-sizing:border-box;font-family:pingfang-jian,uniicons}.uni-body{background:#f1f1f1}uni-button.submit{background-color:#007aff;color:#fff}uni-image{will-change:transform}.uni-popup__wrapper-box{max-height:90%;max-width:90%;min-width:70%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.my-dialog{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;vertical-align:middle;margin-left:auto;margin-right:auto;width:100%;background-color:#fff;-webkit-border-radius:6px;border-radius:6px;overflow:hidden;height:100%}.my-dialog-title{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center;min-height:64px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-weight:700;color:#333;font-size:24px}.my-dialog-content{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;padding:12px;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;height:calc(100% - 140px);max-height:400px\r\n    /* overflow: scroll; */}.my-dialog-footer{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;min-height:60px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.my-dialog-btn{text-align:center;line-height:60px;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-shrink:0;flex-shrink:0;height:60px;border-top:1px solid #999;border-right:1px solid #999}.my-dialog-btn:last-child{border-right:0 solid #999;color:#2a67fe}.my-dialog-btn:first-child{color:#000}.bg-fff{background-color:#fff}.bg-success{background-color:#39b54a}.bg-primary{background-color:#007aff}.bg-danger{background-color:#ff4019}.shape-circle{width:20px;height:20px;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%}.bg-rv{background-image:-webkit-linear-gradient(290deg,#6739b6 50%,#e54d42 0);background-image:linear-gradient(160deg,#6739b6 50%,#e54d42 0)}.bg-gv{background-image:-webkit-linear-gradient(290deg,#6739b6 50%,#39b54a 0);background-image:linear-gradient(160deg,#6739b6 50%,#39b54a 0)}.violet{background-color:#6739b6}.green{background-color:#3ab54b}.red{background-color:#e54d42}.color-green{color:#3ab54b}.color-red{color:#e54d42}.color-fff{color:#fff}.color-primary{color:#007aff}.color-success{color:#3fc44c}.color-danger{color:#d9001b}.color-fbc343{color:#fbc343}.color-ffffff{color:#fff}.primary-btn{background-color:#007aff;color:#fff}.cancel-btn{\r\n\t/* \t\tbackground-color: #007aff;\r\n\t\t\tcolor: #FFFFFF; */}#common-form-wrapper .uni-input{box-sizing:border-box;border:1px solid #ddd;height:44px;padding:6px 12px;margin-bottom:12px;background:#fff;border-radius:4px}#common-form-wrapper .uni-input\t.input-placeholder{color:grey;font-size:15px}#common-form-wrapper .uni-input\t.uni-input-input{font-size:20px}.uni-easyinput .uni-easyinput__content{background-color:#fff;height:44px;border:1px solid #f2f2f2}.uni-easyinput .uni-easyinput__content\tuni-input{font-size:16px}.icon-image{width:20px;height:20px}.uni-picker-action-cancel{color:hsla(0,0%,100%,0)!important}.uni-picker-action-cancel::before{content:"cancel";width:120px;color:#888!important}.uni-picker-action-confirm{color:hsla(0,0%,100%,0)!important}.uni-picker-action-confirm::after{content:"confirm";width:120px;color:#007aff!important}.mt-72{margin-top:72px}.tabbar-wrapper .tabbar .tabbar-item uni-text{font-size:11px!important}.mrl{margin:0 4px}\r\n/* 解决头条小程序组件内引入字体不生效的问题 */\nhtml{font-size:10px!important}uni-page-head{box-shadow:0 2px 4px 0 rgba(0,0,0,.25)}.tabbar-wrapper{box-shadow:0 2px 4px 0 rgba(0,0,0,.25)}', ""]), e.exports = n
    },
    "39b9": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            pulldown: "",
            refreshempty: "",
            back: "",
            forward: "",
            more: "",
            "more-filled": "",
            scan: "",
            qq: "",
            weibo: "",
            weixin: "",
            pengyouquan: "",
            loop: "",
            refresh: "",
            "refresh-filled": "",
            arrowthindown: "",
            arrowthinleft: "",
            arrowthinright: "",
            arrowthinup: "",
            "undo-filled": "",
            undo: "",
            redo: "",
            "redo-filled": "",
            bars: "",
            chatboxes: "",
            camera: "",
            "chatboxes-filled": "",
            "camera-filled": "",
            "cart-filled": "",
            cart: "",
            "checkbox-filled": "",
            checkbox: "",
            arrowleft: "",
            arrowdown: "",
            arrowright: "",
            "smallcircle-filled": "",
            arrowup: "",
            circle: "",
            "eye-filled": "",
            "eye-slash-filled": "",
            "eye-slash": "",
            eye: "",
            "flag-filled": "",
            flag: "",
            "gear-filled": "",
            reload: "",
            gear: "",
            "hand-thumbsdown-filled": "",
            "hand-thumbsdown": "",
            "hand-thumbsup-filled": "",
            "heart-filled": "",
            "hand-thumbsup": "",
            heart: "",
            home: "",
            info: "",
            "home-filled": "",
            "info-filled": "",
            "circle-filled": "",
            "chat-filled": "",
            chat: "",
            "mail-open-filled": "",
            "email-filled": "",
            "mail-open": "",
            email: "",
            checkmarkempty: "",
            list: "",
            "locked-filled": "",
            locked: "",
            "map-filled": "",
            "map-pin": "",
            "map-pin-ellipse": "",
            map: "",
            "minus-filled": "",
            "mic-filled": "",
            minus: "",
            micoff: "",
            mic: "",
            clear: "",
            smallcircle: "",
            close: "",
            closeempty: "",
            paperclip: "",
            paperplane: "",
            "paperplane-filled": "",
            "person-filled": "",
            "contact-filled": "",
            person: "",
            contact: "",
            "images-filled": "",
            phone: "",
            images: "",
            image: "",
            "image-filled": "",
            "location-filled": "",
            location: "",
            "plus-filled": "",
            plus: "",
            plusempty: "",
            "help-filled": "",
            help: "",
            "navigate-filled": "",
            navigate: "",
            "mic-slash-filled": "",
            search: "",
            settings: "",
            sound: "",
            "sound-filled": "",
            "spinner-cycle": "",
            "download-filled": "",
            "personadd-filled": "",
            "videocam-filled": "",
            personadd: "",
            upload: "",
            "upload-filled": "",
            starhalf: "",
            "star-filled": "",
            star: "",
            trash: "",
            "phone-filled": "",
            compose: "",
            videocam: "",
            "trash-filled": "",
            download: "",
            "chatbubble-filled": "",
            chatbubble: "",
            "cloud-download": "",
            "cloud-upload-filled": "",
            "cloud-upload": "",
            "cloud-download-filled": "",
            headphones: "",
            shop: ""
        };
        n.default = o
    },
    "3bf3": function(e, n, t) {
        "use strict";
        var o;
        t.d(n, "b", (function() {
            return i
        })), t.d(n, "c", (function() {
            return r
        })), t.d(n, "a", (function() {
            return o
        }));
        var i = function() {
                var e = this,
                    n = e.$createElement,
                    t = e._self._c || n;
                return t("v-uni-view", {
                    staticClass: "segmented-control",
                    class: ["text" === e.styleType ? "segmented-control--text" : "segmented-control--button"],
                    style: {
                        borderColor: "text" === e.styleType ? "" : e.activeColor
                    }
                }, e._l(e.values, (function(n, o) {
                    return t("v-uni-view", {
                        key: o,
                        staticClass: "segmented-control__item",
                        class: ["text" === e.styleType ? "segmented-control__item--text" : "segmented-control__item--button", o === e.currentIndex && "button" === e.styleType ? "segmented-control__item--button--active" : "", 0 === o && "button" === e.styleType ? "segmented-control__item--button--first" : "", o === e.values.length - 1 && "button" === e.styleType ? "segmented-control__item--button--last" : ""],
                        style: {
                            backgroundColor: o === e.currentIndex && "button" === e.styleType ? e.activeColor : "",
                            borderColor: o === e.currentIndex && "text" === e.styleType || "button" === e.styleType ? e.activeColor : "transparent"
                        },
                        on: {
                            click: function(n) {
                                arguments[0] = n = e.$handleEvent(n), e._onClick(o)
                            }
                        }
                    }, [t("v-uni-text", {
                        staticClass: "segmented-control__text",
                        style: {
                            color: o === e.currentIndex ? "text" === e.styleType ? e.activeColor : "#fff" : "text" === e.styleType ? "#000" : e.activeColor
                        }
                    }, [e._v(e._s(n))])], 1)
                })), 1)
            },
            r = []
    },
    "3cd5": function(e, n, t) {
        var o = t("24fb"),
            i = t("1de5"),
            r = t("5b6d");
        n = o(!1);
        var a = i(r);
        n.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@font-face{font-family:uniicons;src:url(' + a + ') format("truetype")}.uni-icons[data-v-4c782b3f]{font-family:uniicons;text-decoration:none;text-align:center}', ""]), e.exports = n
    },
    "3fcf": function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("a6b0"),
            i = t.n(o);
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, (function() {
                return o[e]
            }))
        }(r);
        n["default"] = i.a
    },
    4343: function(e, n, t) {
        var o = t("38eb");
        "string" === typeof o && (o = [
            [e.i, o, ""]
        ]), o.locals && (e.exports = o.locals);
        var i = t("4f06").default;
        i("3245e79c", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    4748: function(e, n, t) {
        "use strict";
        t("4160"), t("a9e3"), t("b680"), t("b64b"), t("d3b7"), t("e25e"), t("4d63"), t("ac1f"), t("25f0"), t("5319"), t("1276"), t("159b"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.dateToString = n.getCurrentTime = n.checkAcc = n.exportTable = n.throttle = n.antiShake = n.getIsGetData = n.debounce = n.numberColorFun = n.stateTagFun = n.stateColorFun = n.numberDivide = n.numberFormat = void 0;
        var o = t("7488"),
            i = function(e, n) {
                if (!/^(-?\d+)(\.\d+)?$/.test(e)) return e;
                if (n && (e = (e * n).toFixed(2)), e % 1 == 0 && (e = parseInt(e)), 0 == e) return 0;
                "string" != typeof e && (e = e.toString());
                var t = parseInt(e),
                    o = t.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"),
                    i = "",
                    r = e.split(".");
                return 2 == r.length ? (i = r[1].toString(), 1 == i.length ? o + "." + i + "0" : o + "." + i) : o + i
            };
        n.numberFormat = i;
        var r = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
            return e || 0 === e ? isNaN(e) ? e : (/^(-?\d+)(\.\d+)?$/.test(e) || (e = 0), Number((e * n).toFixed(t))) : e
        };
        n.numberDivide = r;
        var a = function(e) {
            var n = "";
            switch (e) {
                case 0:
                case 1:
                case 4:
                case 7:
                case 10:
                    n = "color-success";
                    break;
                case 2:
                    n = "color-primary";
                    break;
                case 5:
                    n = "color-warning";
                    break;
                case 6:
                case 12:
                    n = "color-danger";
                    break;
                case 3:
                case 9:
                case 11:
                    n = "";
                    break;
                case 8:
                    n = "color-FF7F24";
                    break;
                default:
                    n = "";
                    break
            }
            return n
        };
        n.stateColorFun = a;
        var s = function(e) {
            var n = "";
            switch (e) {
                case 0:
                case 1:
                case 4:
                case 7:
                case 10:
                    n = "success";
                    break;
                case 2:
                    n = "";
                    break;
                case 5:
                    n = "warning";
                    break;
                case 6:
                case 12:
                    n = "danger";
                    break;
                case 3:
                case 9:
                case 11:
                    n = "info";
                    break;
                case 8:
                    n = "color-FF7F24";
                    break;
                default:
                    n = "info";
                    break
            }
            return n
        };
        n.stateTagFun = s;
        var u = function(e) {
            var n = "";
            return e > 0 ? n = "color-success" : e < 0 && (n = "color-danger"), n
        };
        n.numberColorFun = u;
        var c = function(e, n) {
            var t, o = n || 500;
            return function() {
                var n = this,
                    i = arguments;
                t && clearTimeout(t), t = setTimeout((function() {
                    t = null, e.apply(n, i)
                }), o)
            }
        };
        n.debounce = c;
        var l = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3,
                t = Date.parse(new Date),
                i = (0, o.getCookies)(e) || "",
                r = t - i > n;
            return r && (0, o.setCookies)(e, t), r
        };
        n.getIsGetData = l;
        var d = function(e, n) {
            var t, o = n || 3e3,
                i = !0;
            return function() {
                var n = arguments;
                i && (i = !1, e.apply(this, n), t && clearTimeout(t), t = setTimeout((function() {
                    i = !0, t = null
                }), o))
            }
        };
        n.antiShake = d;
        var f = function(e, n) {
            var t, o, i = n || 500;
            return function() {
                var n = this,
                    r = arguments,
                    a = +new Date;
                t && a - t < i ? (clearTimeout(o), o = setTimeout((function() {
                    t = a, e.apply(n, r)
                }), i)) : (t = a, e.apply(this, r))
            }
        };
        n.throttle = f;
        var g = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "fileName",
                n = document.createElement("a");
            n.setAttribute("style", "display:none"), n.setAttribute("href", "/download/index?fileName=".concat(e)), n.setAttribute("download", "".concat(e)), document.body.appendChild(n), n.click(), document.body.removeChild(n)
        };
        n.exportTable = g;
        var p = function(e) {
            if (!e || "" == e) return !1;
            if (e.length <= 1) return !1;
            var n = /^[A-Za-z0-9]{2,15}$/,
                t = n.test(e);
            return !!t && e
        };
        n.checkAcc = p;
        var m = function() {
            var e = new Date,
                n = new Date,
                t = n.getHours(),
                o = -e.getTimezoneOffset() / 60;
            o < 0 ? (o = Math.abs(o) + 8, n.setHours(t + o)) : (o -= 8, n.setHours(t - o));
            var i = n.getDay();
            i = 0 == i ? 7 : i;
            var r = n.getDate(),
                a = n.getMonth(),
                s = n.getFullYear();
            return {
                now: n,
                nowDayOfWeek: i,
                nowDay: r,
                nowMonth: a,
                nowYear: s
            }
        };
        n.getCurrentTime = m;
        var h = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd hh:mm:ss",
                t = {
                    "M+": e.getMonth() + 1,
                    "d+": e.getDate(),
                    "h+": e.getHours(),
                    "m+": e.getMinutes(),
                    "s+": e.getSeconds(),
                    "q+": Math.floor((e.getMonth() + 3) / 3),
                    S: e.getMilliseconds()
                };
            for (var o in /(y+)/.test(n) && (n = n.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), t) new RegExp("(" + o + ")").test(n) && (n = n.replace(RegExp.$1, 1 == RegExp.$1.length ? t[o] : ("00" + t[o]).substr(("" + t[o]).length)));
            return n
        };
        n.dateToString = h
    },
    4976: function(e, n, t) {
        "use strict";
        t("99af"), t("b680"), t("d3b7"), t("acd8"), t("e25e"), t("4d63"), t("ac1f"), t("25f0"), t("5319"), t("1276"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.timestampToTime = n.timeFormatFilter = n.numberFormatFilter = n.beforeNumberFormatFilter = void 0;
        var o = function(e) {
            return "" === e ? "无限制" : e
        };
        n.beforeNumberFormatFilter = o;
        var i = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!/^(-?\d+)(\.\d+)?$/.test(e)) return e;
            if (0 == e && 3 != t) return 0;
            n && (e = (e * n).toFixed(2));
            var i = "";
            parseFloat(e) < 0 && (i = "-"), o && parseFloat(e) > 0 && (i = "+"), e = Math.abs(e), e % 1 == 0 && (e = parseInt(e)), "string" != typeof e && (e = e.toString());
            var r, a = parseInt(e),
                s = a.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"),
                u = "",
                c = e.split(".");
            switch (2 == c.length && (u = c[1].toString()), t) {
                case 1:
                    r = 2 == c.length ? i + s + "." + u : i + s;
                    break;
                case 2:
                    r = i + s;
                    break;
                case 3:
                    r = 2 == c.length ? "." + u : u;
                    break;
                default:
                    r = 2 == c.length ? i + s + "." + u : i + s
            }
            return r
        };
        n.numberFormatFilter = i;
        var r = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "short";
            if (e) {
                var o = (new Date).getTime() - e * n,
                    i = new Date,
                    r = new Date(e * n),
                    a = (r.getHours(), r.getMinutes()),
                    s = i.getTimezoneOffset(),
                    u = 5.5;
                r.setMinutes(a + s + 60 * u);
                var c = "".concat(r.getFullYear(), "/").concat(r.getMonth() + 1 >= 10 ? r.getMonth() + 1 : "0" + (r.getMonth() + 1), "/").concat(r.getDate() >= 10 ? r.getDate() : "0" + r.getDate());
                if (c += " ", c += "".concat(r.getHours() >= 10 ? r.getHours() : "0" + r.getHours(), ":"), c += "".concat(r.getMinutes() >= 10 ? r.getMinutes() : "0" + r.getMinutes()), "long" == t) {
                    var l = Math.floor(o / 864e5),
                        d = Math.floor(o / 36e5),
                        f = Math.floor(o / 6e4);
                    c += l > 29 ? " - 30天前" : l > 0 ? " - ".concat(l, "天前") : d > 0 ? " - ".concat(d, "小时前") : f > 0 ? " - ".concat(f, "分钟前") : " - 1分钟内"
                }
                return c
            }
        };
        n.timeFormatFilter = r;
        var a = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "yyyy-MM-dd hh:mm:ss";
            if (0 == e) return "-";
            var o = new Date,
                i = new Date(e * n),
                r = (i.getHours(), i.getMinutes()),
                a = o.getTimezoneOffset(),
                s = 5.5;
            i.setMinutes(r + a + 60 * s);
            var u = {
                "M+": i.getMonth() + 1,
                "d+": i.getDate(),
                "h+": i.getHours(),
                "m+": i.getMinutes(),
                "s+": i.getSeconds(),
                "q+": Math.floor((i.getMonth() + 3) / 3),
                S: i.getMilliseconds()
            };
            for (var c in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (i.getFullYear() + "").substr(4 - RegExp.$1.length))), u) new RegExp("(" + c + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? u[c] : ("00" + u[c]).substr(("" + u[c]).length)));
            return t
        };
        n.timestampToTime = a
    },
    "4a17": function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("f29b"),
            i = t.n(o);
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, (function() {
                return o[e]
            }))
        }(r);
        n["default"] = i.a
    },
    "505c": function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("8c20"),
            i = t("b282");
        for (var r in i) "default" !== r && function(e) {
            t.d(n, e, (function() {
                return i[e]
            }))
        }(r);
        t("b16c");
        var a, s = t("f0c5"),
            u = Object(s["a"])(i["default"], o["b"], o["c"], !1, null, "4c782b3f", null, !1, o["a"], a);
        n["default"] = u.exports
    },
    "54f5": function(e, n, t) {
        "use strict";
        var o = t("5a57"),
            i = t.n(o);
        i.a
    },
    "5a57": function(e, n, t) {
        var o = t("78b2");
        "string" === typeof o && (o = [
            [e.i, o, ""]
        ]), o.locals && (e.exports = o.locals);
        var i = t("4f06").default;
        i("2b9194cf", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "5b6d": function(e, n, t) {
        e.exports = t.p + "static/fonts/uni.75745d34.ttf"
    },
    "5ea6": function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("01c7"),
            i = t("8899");
        for (var r in i) "default" !== r && function(e) {
            t.d(n, e, (function() {
                return i[e]
            }))
        }(r);
        t("60f4");
        var a, s = t("f0c5"),
            u = Object(s["a"])(i["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], a);
        n["default"] = u.exports
    },
    "60f4": function(e, n, t) {
        "use strict";
        var o = t("4343"),
            i = t.n(o);
        i.a
    },
    7048: function(e, n, t) {
        "use strict";
        var o = t("dbce"),
            i = t("4ea4");
        t("4de4"), t("4160"), t("b64b"), t("159b");
        var r = i(t("5530"));
        t("e260"), t("e6cf"), t("cca6"), t("a79d"), t("1fac"), t("1c31");
        var a = i(t("e143")),
            s = i(t("5ea6")),
            u = i(t("19ac")),
            c = i(t("c48a")),
            l = o(t("4976")),
            d = o(t("4748")),
            f = i(t("fb5f")),
            g = i(t("26b6")),
            p = i(t("1aed"));
        i(t("1736"));
        a.default.config.productionTip = !1, a.default.use(g.default), a.default.component("uniSegmentedControlT", p.default), Object.keys(d).forEach((function(e) {
            a.default.prototype["$".concat(e)] = d[e]
        })), Object.keys(l).forEach((function(e) {
            return a.default.filter(e, l[e])
        })), s.default.mpType = "app", a.default.prototype.$baseURL = location.origin || location.protocol + "//" + location.host, a.default.prototype.$request = c.default, a.default.prototype.$errorCode = f.default;
        var m = new a.default((0, r.default)({
            store: u.default
        }, s.default));
        m.$mount()
    },
    7488: function(e, n, t) {
        "use strict";
        t("ac1f"), t("1276"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.clearAll = n.clearCookies = n.getCookies = n.setCookies = n.clearLocalStorage = n.removeStorage = n.getStorage = n.setStorage = void 0;
        var o = function(e, n) {
            sessionStorage.setItem(e, JSON.stringify(n))
        };
        n.setStorage = o;
        var i = function(e) {
            var n = JSON.parse(sessionStorage.getItem(e));
            return n
        };
        n.getStorage = i;
        var r = function(e) {
            localStorage.removeItem(e), sessionStorage.removeItem(e)
        };
        n.removeStorage = r;
        var a = function() {
            localStorage.clear(), sessionStorage.clear()
        };
        n.clearLocalStorage = a;
        var s = function(e, n, t) {
            var o = new Date;
            o.setTime(o.getTime() + 24 * t * 60 * 60 * 1e3);
            var i = "expires=" + o.toUTCString();
            document.cookie = e + "=" + n + "; " + i
        };
        n.setCookies = s;
        var u = function(e) {
            for (var n = document.cookie, t = n.split("; "), o = 0; o < t.length; o++) {
                var i = t[o].split("=");
                if (i[0] == e) return decodeURI(i[1])
            }
            return ""
        };
        n.getCookies = u;
        var c = function() {
            var e = new Date;
            e.setTime(-1e3);
            for (var n = document.cookie, t = n.split("; "), o = 0; o < t.length; o++) {
                var i = t[o].split("=");
                document.cookie = i[0] + '=""; expires=' + e.toUTCString()
            }
        };
        n.clearCookies = c;
        var l = function() {
            a(), c()
        };
        n.clearAll = l
    },
    "77b2": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.mutations = void 0;
        var o = {
            setIsLogin: function(e, n) {
                e.isLogin = n
            },
            setUserInfo: function(e, n) {
                e.userInfo = n
            },
            setToken: function(e, n) {
                e.token = n
            },
            setBalacnce: function(e, n) {
                e.balance = n
            },
            setPreiodInfo: function(e, n) {
                e.preiodInfo = n
            },
            setbetResult: function(e, n) {
                e.betResult = n
            },
            setnotice: function(e, n) {
                e.notice = n
            },
            reSetState: function(e) {
                e.token = "", e.isLogin = !1, e.balance = 0, e.preiodInfo = {}, e.userInfo = {}, e.betResult = [
                    [],
                    [],
                    [],
                    []
                ], e.notice = {}
            }
        };
        n.mutations = o
    },
    "78b2": function(e, n, t) {
        var o = t("24fb");
        n = o(!1), n.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-easyinput[data-v-08dfab0c]{width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;text-align:left;color:#333;font-size:14px}.uni-easyinput__content[data-v-08dfab0c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;min-height:36px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-easyinput__content-input[data-v-08dfab0c]{width:auto;position:relative;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:2;font-size:14px}.is-textarea[data-v-08dfab0c]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.is-textarea-icon[data-v-08dfab0c]{margin-top:5px}.uni-easyinput__content-textarea[data-v-08dfab0c]{position:relative;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:1.5;font-size:14px;padding-top:6px;padding-bottom:10px;height:80px;min-height:80px;width:auto}.input-padding[data-v-08dfab0c]{padding-left:10px}.content-clear-icon[data-v-08dfab0c]{padding:0 5px}.label-icon[data-v-08dfab0c]{margin-right:5px;margin-top:-1px}.is-input-border[data-v-08dfab0c]{display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:1px solid #e5e5e5;border-radius:4px}.is-required[data-v-08dfab0c]{color:#dd524d}.uni-error-message[data-v-08dfab0c]{position:absolute;bottom:-17px;left:0;line-height:12px;color:#dd524d;font-size:12px;text-align:left}.uni-error-msg--boeder[data-v-08dfab0c]{position:relative;bottom:0;line-height:22px}.is-input-error-border[data-v-08dfab0c]{border-color:#dd524d}.uni-easyinput--border[data-v-08dfab0c]{margin-bottom:0;padding:10px 15px;border-top:1px #eee solid}.uni-easyinput-error[data-v-08dfab0c]{padding-bottom:0}.is-first-border[data-v-08dfab0c]{border:none}.is-disabled[data-v-08dfab0c]{background-color:#eee}', ""]), e.exports = n
    },
    8367: function(e, n, t) {
        "use strict";
        var o = t("4ea4");
        t("a4d3"), t("e01a"), t("d3b7"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = o(t("5530")),
            r = o(t("d4ec")),
            a = o(t("bee2")),
            s = o(t("ade3")),
            u = Symbol("config"),
            c = Symbol("isCompleteURL"),
            l = Symbol("requestBefore"),
            d = Symbol("requestAfter"),
            f = function() {
                function e() {
                    (0, r.default)(this, e), (0, s.default)(this, u, {
                        baseURL: "",
                        header: {
                            "content-type": "application/json"
                        },
                        method: "GET",
                        dataType: "json",
                        responseType: "text"
                    }), (0, s.default)(this, "interceptors", {
                        request: function(n) {
                            e[l] = n || function(e) {
                                return e
                            }
                        },
                        response: function(n) {
                            e[d] = n || function(e) {
                                return e
                            }
                        }
                    })
                }
                return (0, a.default)(e, [{
                    key: "request",
                    value: function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return n.baseURL = n.baseURL || this[u].baseURL, n.dataType = n.dataType || this[u].dataType, n.url = e[c](n.url) ? n.url : n.baseURL + n.url, n.data = n.data || n.params, n.header = (0, i.default)((0, i.default)({}, n.header), this[u].header), n.method = n.method || this[u].method, n = (0, i.default)((0, i.default)({}, n), e[l](n)), new Promise((function(t, o) {
                            n.success = function(n) {
                                t(e[d](n))
                            }, n.fail = function(n) {
                                o(e[d](n))
                            }, uni.request(n)
                        }))
                    }
                }, {
                    key: "get",
                    value: function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return t.url = e, t.data = n, t.method = "GET", this.request(t)
                    }
                }, {
                    key: "post",
                    value: function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return t.url = e, t.data = n, t.method = "POST", this.request(t)
                    }
                }, {
                    key: "setConfig",
                    value: function(e) {
                        this[u] = e(this[u])
                    }
                }, {
                    key: "getConfig",
                    value: function() {
                        return this[u]
                    }
                }], [{
                    key: l,
                    value: function(e) {
                        return e
                    }
                }, {
                    key: d,
                    value: function(e) {
                        return e
                    }
                }, {
                    key: c,
                    value: function(e) {
                        return /(http|https):\/\/([\w.]+\/?)\S*/.test(e)
                    }
                }]), e
            }(),
            g = f;
        n.default = g
    },
    8899: function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("124e"),
            i = t.n(o);
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, (function() {
                return o[e]
            }))
        }(r);
        n["default"] = i.a
    },
    "8c20": function(e, n, t) {
        "use strict";
        var o;
        t.d(n, "b", (function() {
            return i
        })), t.d(n, "c", (function() {
            return r
        })), t.d(n, "a", (function() {
            return o
        }));
        var i = function() {
                var e = this,
                    n = e.$createElement,
                    t = e._self._c || n;
                return t("v-uni-text", {
                    staticClass: "uni-icons",
                    class: [e.customIcons, e.customIcons ? e.type : ""],
                    style: {
                        color: e.color,
                        "font-size": e.size + "px"
                    },
                    on: {
                        click: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e._onClick.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(e.icons[e.type]))])
            },
            r = []
    },
    "9d10": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.getters = void 0;
        var o = {
            getToken: function(e) {
                return e.token
            },
            getUserInfo: function(e) {
                return e.userInfo
            },
            getIsLogin: function(e) {
                return e.isLogin
            },
            getBalance: function(e) {
                return e.balance
            },
            getPreiodInfo: function(e) {
                return e.preiodInfo
            },
            getbetResult: function(e) {
                return e.betResult
            },
            getnotice: function(e) {
                return e.notice
            }
        };
        n.getters = o
    },
    "9d30": function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("354c"),
            i = t.n(o);
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, (function() {
                return o[e]
            }))
        }(r);
        n["default"] = i.a
    },
    a6b0: function(e, n, t) {
        "use strict";
        t("a9e3"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = t("4748"),
            i = {
                name: "UniSegmentedControl",
                props: {
                    current: {
                        type: Number,
                        default: 0
                    },
                    values: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    activeColor: {
                        type: String,
                        default: "#007aff"
                    },
                    styleType: {
                        type: String,
                        default: "button"
                    }
                },
                data: function() {
                    return {
                        currentIndex: 0
                    }
                },
                watch: {
                    current: function(e) {
                        e !== this.currentIndex && (this.currentIndex = e)
                    }
                },
                created: function() {
                    this.currentIndex = this.current
                },
                methods: {
                    _onClick: (0, o.antiShake)((function(e) {
                        this.currentIndex !== e && (this.currentIndex = e, this.$emit("clickItem", {
                            currentIndex: e
                        }))
                    }), 1e3)
                }
            };
        n.default = i
    },
    aff9: function(e, n, t) {
        "use strict";
        t.d(n, "b", (function() {
            return i
        })), t.d(n, "c", (function() {
            return r
        })), t.d(n, "a", (function() {
            return o
        }));
        var o = {
                uniIcons: t("505c").default
            },
            i = function() {
                var e = this,
                    n = e.$createElement,
                    t = e._self._c || n;
                return t("v-uni-view", {
                    staticClass: "uni-easyinput",
                    class: {
                        "uni-easyinput-error": e.msg
                    },
                    style: {
                        color: e.inputBorder && e.msg ? "#dd524d" : e.styles.color
                    }
                }, [t("v-uni-view", {
                    staticClass: "uni-easyinput__content",
                    class: {
                        "is-input-border": e.inputBorder, "is-input-error-border": e.inputBorder && e.msg, "is-textarea": "textarea" === e.type, "is-disabled": e.disabled
                    },
                    style: {
                        "border-color": e.inputBorder && e.msg ? "#dd524d" : e.styles.borderColor,
                        "background-color": e.disabled ? e.styles.disableColor : ""
                    }
                }, [e.prefixIcon ? t("uni-icons", {
                    staticClass: "content-clear-icon",
                    attrs: {
                        type: e.prefixIcon,
                        color: "#c0c4cc"
                    },
                    on: {
                        click: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.onClickIcon("prefix")
                        }
                    }
                }) : e._e(), e._t("left"), "textarea" === e.type ? t("v-uni-textarea", {
                    staticClass: "uni-easyinput__content-textarea",
                    class: {
                        "input-padding": e.inputBorder
                    },
                    attrs: {
                        name: e.name,
                        value: e.val,
                        placeholder: e.placeholder,
                        placeholderStyle: e.placeholderStyle,
                        disabled: e.disabled,
                        maxlength: e.inputMaxlength,
                        focus: e.focused,
                        autoHeight: e.autoHeight
                    },
                    on: {
                        input: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.onInput.apply(void 0, arguments)
                        },
                        blur: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.onBlur.apply(void 0, arguments)
                        },
                        focus: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.onFocus.apply(void 0, arguments)
                        },
                        confirm: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.onConfirm.apply(void 0, arguments)
                        }
                    }
                }) : t("v-uni-input", {
                    staticClass: "uni-easyinput__content-input",
                    style: {
                        "padding-right": "password" === e.type || e.clearable || e.prefixIcon ? "" : "10px",
                        "padding-left": e.prefixIcon ? "" : "10px"
                    },
                    attrs: {
                        type: "password" === e.type ? "text" : e.type,
                        name: e.name,
                        value: e.val,
                        password: !e.showPassword && "password" === e.type,
                        placeholder: e.placeholder,
                        placeholderStyle: e.placeholderStyle,
                        disabled: e.disabled,
                        maxlength: e.inputMaxlength,
                        focus: e.focused
                    },
                    on: {
                        focus: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.onFocus.apply(void 0, arguments)
                        },
                        blur: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.onBlur.apply(void 0, arguments)
                        },
                        input: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.onInput.apply(void 0, arguments)
                        },
                        confirm: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.onConfirm.apply(void 0, arguments)
                        }
                    }
                }), "password" === e.type ? ["" != e.val ? t("uni-icons", {
                    staticClass: "content-clear-icon",
                    class: {
                        "is-textarea-icon": "textarea" === e.type
                    },
                    attrs: {
                        type: e.showPassword ? "eye-slash-filled" : "eye-filled",
                        size: 18,
                        color: "#c0c4cc"
                    },
                    on: {
                        click: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.onEyes.apply(void 0, arguments)
                        }
                    }
                }) : e._e()] : e.suffixIcon ? [e.suffixIcon ? t("uni-icons", {
                    staticClass: "content-clear-icon",
                    attrs: {
                        type: e.suffixIcon,
                        color: "#c0c4cc"
                    },
                    on: {
                        click: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.onClickIcon("suffix")
                        }
                    }
                }) : e._e()] : [e.clearable && e.focused && e.val ? t("uni-icons", {
                    staticClass: "content-clear-icon",
                    class: {
                        "is-textarea-icon": "textarea" === e.type
                    },
                    attrs: {
                        type: "clear",
                        size: e.clearSize,
                        color: "#c0c4cc"
                    },
                    on: {
                        click: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.onClear.apply(void 0, arguments)
                        }
                    }
                }) : e._e()], e._t("right")], 2)], 1)
            },
            r = []
    },
    b16c: function(e, n, t) {
        "use strict";
        var o = t("d313"),
            i = t.n(o);
        i.a
    },
    b282: function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("da94"),
            i = t.n(o);
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, (function() {
                return o[e]
            }))
        }(r);
        n["default"] = i.a
    },
    b2bf: function(e, n, t) {
        var o = t("e4de");
        "string" === typeof o && (o = [
            [e.i, o, ""]
        ]), o.locals && (e.exports = o.locals);
        var i = t("4f06").default;
        i("57a33918", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    b4d6: function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("aff9"),
            i = t("4a17");
        for (var r in i) "default" !== r && function(e) {
            t.d(n, e, (function() {
                return i[e]
            }))
        }(r);
        t("54f5");
        var a, s = t("f0c5"),
            u = Object(s["a"])(i["default"], o["b"], o["c"], !1, null, "08dfab0c", null, !1, o["a"], a);
        n["default"] = u.exports
    },
    b8b5: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.actions = void 0;
        var o = {
            setUserInfo: function(e, n) {
                var t = e.commit;
                t("setUserInfo", n)
            },
            setIsLogin: function(e, n) {
                var t = e.commit;
                t("setIsLogin", n)
            },
            setToken: function(e, n) {
                var t = e.commit;
                t("setToken", n)
            }
        };
        n.actions = o
    },
    c2dd: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.throttle = n.debounce = void 0;
        var o = function(e) {
            var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return function() {
                var i = this,
                    r = arguments;
                if (n && clearTimeout(n), o) {
                    var a = !n;
                    n = setTimeout((function() {
                        n = null
                    }), t), a && e.apply(i, r)
                } else n = setTimeout((function() {
                    e.apply(i, r)
                }), t)
            }
        };
        n.debounce = o;
        var i = function(e) {
            var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                i = 0;
            return function() {
                var r = this,
                    a = arguments;
                if (1 === o) {
                    var s = Date.now();
                    s - i > t && (e.apply(r, a), i = s)
                } else 2 === o && (n || (n = setTimeout((function() {
                    n = null, e.apply(r, a)
                }), t)))
            }
        };
        n.throttle = i
    },
    c48a: function(e, n, t) {
        "use strict";
        var o = t("4ea4");
        t("caad"), t("d3b7"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = o(t("8367")),
            r = o(t("19ac")),
            a = o(t("fb5f")),
            s = (o(t("1736")), new i.default);
        s.interceptors.request((function(e) {
            return e.header["Authorization"] = r.default.state.token, e.header["language"] = "EN", e
        })), s.interceptors.response((function(e) {
            if (e.data) switch (e.data.code) {
                case 200:
                    return e.data.data;
                case 402:
                case 10030008:
                case 10040002:
                case 10090002:
                case 10040009:
                case 10040008:
                case 401:
                    return uni.showToast({
                        icon: "none",
                        title: a.default[e.data.code] ? a.default[e.data.code].en : e.data.message,
                        duration: 2e3,
                        success: function(e) {
                            r.default.commit("reSetState"), uni.reLaunch({
                                url: "/pages/login/index"
                            })
                        }
                    }), Promise.reject(e.data.message);
                case 405:
                    var n = ["/p/game/record", "/p/game/period", "/p/myinfo"];
                    return n.includes(e.data.data.path) ? e.data.data : (uni.showToast({
                        icon: "none",
                        title: e.data.message,
                        duration: 2e3
                    }), Promise.reject(e.data.message));
                default:
                    return uni.showToast({
                        icon: "none",
                        title: a.default[e.data.code] ? a.default[e.data.code].en : e.data.message,
                        duration: 2e3
                    }), Promise.reject(e.data.message)
            } else {
                if (e.errMsg) return console.log("response.errMsg"), uni.navigateTo({
                    url: "/pages/error"
                }), console.log(e.errMsg), Promise.reject(e.errMsg);
                console.log("到了else")
            }
        })), s.setConfig((function(e) {
            return e.baseURL = (location.origin || location.protocol + "//" + location.host) + "/p", e.header["language"] = "EN", e
        }));
        var u = s;
        n.default = u
    },
    d313: function(e, n, t) {
        var o = t("3cd5");
        "string" === typeof o && (o = [
            [e.i, o, ""]
        ]), o.locals && (e.exports = o.locals);
        var i = t("4f06").default;
        i("c7242dd4", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    da94: function(e, n, t) {
        "use strict";
        var o = t("4ea4");
        t("a9e3"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = o(t("39b9")),
            r = {
                name: "UniIcons",
                props: {
                    type: {
                        type: String,
                        default: ""
                    },
                    color: {
                        type: String,
                        default: "#333333"
                    },
                    size: {
                        type: [Number, String],
                        default: 16
                    },
                    customIcons: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        icons: i.default
                    }
                },
                methods: {
                    _onClick: function() {
                        this.$emit("click")
                    }
                }
            };
        n.default = r
    },
    e4de: function(e, n, t) {
        var o = t("24fb");
        n = o(!1), n.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.phone-area-wrapper[data-v-2d16e1ce]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.phone-area-wrapper .uni-easyinput[data-v-2d16e1ce] .uni-easyinput__content{border:1px solid #ddd;background-color:#fff;height:44px;border-radius:4px}.phone-area-wrapper .uni-easyinput[data-v-2d16e1ce] .uni-easyinput__content uni-input{font-size:16px}.phone-area-wrapper .icon-image[data-v-2d16e1ce]{width:20px;height:20px;margin-left:12px}.phone-area-wrapper .phone-area[data-v-2d16e1ce]{font-size:16px;line-height:33px;height:32px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.phone-area-wrapper .phone-area .national_flag[data-v-2d16e1ce]{margin-right:2px;height:24px;width:24px}.phone-area-wrapper .phone[data-v-2d16e1ce]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;margin-left:4px;line-height:32px;height:32px}', ""]), e.exports = n
    },
    f29b: function(e, n, t) {
        "use strict";
        t("a9e3"), t("ac1f"), t("5319"), t("498a"), t("1e25"), t("eee7"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        t("c2dd");
        var o = {
            name: "uni-easyinput",
            props: {
                name: String,
                value: [Number, String],
                type: {
                    type: String,
                    default: "text"
                },
                customPrefixIcon: {
                    type: String,
                    default: ""
                },
                clearable: {
                    type: Boolean,
                    default: !0
                },
                autoHeight: {
                    type: Boolean,
                    default: !1
                },
                placeholder: String,
                placeholderStyle: String,
                focus: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                maxlength: {
                    type: [Number, String],
                    default: 140
                },
                confirmType: {
                    type: String,
                    default: "done"
                },
                clearSize: {
                    type: [Number, String],
                    default: 15
                },
                inputBorder: {
                    type: Boolean,
                    default: !0
                },
                prefixIcon: {
                    type: String,
                    default: ""
                },
                suffixIcon: {
                    type: String,
                    default: ""
                },
                trim: {
                    type: [Boolean, String],
                    default: !0
                },
                styles: {
                    type: Object,
                    default: function() {
                        return {
                            color: "#333",
                            disableColor: "#eee",
                            borderColor: "#e5e5e5"
                        }
                    }
                }
            },
            data: function() {
                return {
                    focused: !1,
                    errMsg: "",
                    val: "",
                    showMsg: "",
                    border: !1,
                    isFirstBorder: !1,
                    showClearIcon: !1,
                    showPassword: !1
                }
            },
            computed: {
                msg: function() {
                    return this.errorMessage || this.errMsg
                },
                inputMaxlength: function() {
                    return Number(this.maxlength)
                }
            },
            watch: {
                value: function(e) {
                    this.errMsg && (this.errMsg = ""), this.val = e, this.form && this.formItem && this.formItem.setValue(e)
                },
                focus: function(e) {
                    var n = this;
                    this.$nextTick((function() {
                        n.focused = n.focus
                    }))
                }
            },
            created: function() {
                this.val = this.value, this.form = this.getForm("uniForms"), this.formItem = this.getForm("uniFormsItem"), this.form && this.formItem && this.formItem.name && (this.rename = this.formItem.name, this.form.inputChildrens.push(this))
            },
            mounted: function() {
                var e = this;
                this.$nextTick((function() {
                    e.focused = e.focus
                }))
            },
            methods: {
                init: function() {},
                onClickIcon: function(e) {
                    this.$emit("iconClick", e)
                },
                getForm: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uniForms",
                        n = this.$parent,
                        t = n.$options.name;
                    while (t !== e) {
                        if (n = n.$parent, !n) return !1;
                        t = n.$options.name
                    }
                    return n
                },
                onEyes: function() {
                    this.showPassword = !this.showPassword
                },
                onInput: function(e) {
                    var n = e.detail.value;
                    this.trim && ("boolean" === typeof this.trim && this.trim && (n = this.trimStr(n)), "string" === typeof this.trim && (n = this.trimStr(n, this.trim))), this.errMsg && (this.errMsg = ""), this.val = n, this.$emit("input", n)
                },
                onFocus: function(e) {
                    this.$emit("focus", e)
                },
                onBlur: function(e) {
                    e.detail.value;
                    this.$emit("blur", e)
                },
                onConfirm: function(e) {
                    this.$emit("confirm", e.detail.value)
                },
                onClear: function(e) {
                    this.val = "", this.$emit("input", "")
                },
                fieldClick: function() {
                    this.$emit("click")
                },
                trimStr: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "both";
                    return "both" === n ? e.trim() : "left" === n ? e.trimLeft() : "right" === n ? e.trimRight() : "start" === n ? e.trimStart() : "end" === n ? e.trimEnd() : "all" === n ? e.replace(/\s+/g, "") : e
                }
            }
        };
        n.default = o
    },
    fb5f: function(e, n) {
        e.exports = {
            0: {
                zh: "请联系管理员",
                en: "Please contact the administrator"
            },
            200: {
                zh: "成功",
                en: "success"
            },
            402: {
                zh: "token 失效",
                en: "this jwt is invalid code"
            },
            403: {
                zh: "无访问权限",
                en: "No access rights"
            },
            405: {
                zh: "参数校验不通过的错误信息",
                en: ""
            },
            1e4: {
                zh: "系统错误",
                en: "system is error"
            },
            10010001: {
                zh: "验证码错误",
                en: "Error in verification code"
            },
            10010002: {
                zh: "短信发送失败",
                en: "Message failed to send"
            },
            1002e4: {
                zh: "没有找到池",
                en: "Pool is not find"
            },
            10020001: {
                zh: "",
                en: "period is not find"
            },
            10020002: {
                zh: "",
                en: "period is notperiod result is invalid"
            },
            10020003: {
                zh: "",
                en: "period is success"
            },
            10020004: {
                zh: "",
                en: "bet option is error"
            },
            10020005: {
                zh: "下注金额超标",
                en: "exceeding the limit"
            },
            10020006: {
                zh: "池赔率参数错误",
                en: "pool odds parameter error"
            },
            10020007: {
                zh: "投注上限参数错误",
                en: "pool bet limit parameter error"
            },
            10020008: {
                zh: "池费率必须小于1",
                en: "pool fee must Less than 1"
            },
            10020009: {
                zh: "",
                en: "period run a lottery"
            },
            10020010: {
                zh: "停止下注",
                en: "period is stop bet"
            },
            10030001: {
                zh: "账号不存在",
                en: "Account is not find"
            },
            10030002: {
                zh: "账号已存在",
                en: "Account already exists"
            },
            10030003: {
                zh: "邀请码不存在",
                en: "Invite code not exists"
            },
            10030004: {
                zh: "账号余额不足",
                en: "Account balance is not enough"
            },
            10030005: {
                zh: "注册失败",
                en: "Registration failed"
            },
            10030006: {
                zh: "用户名或密码错误",
                en: "Incorrect username or password"
            },
            10030007: {
                zh: "设备重复登陆",
                en: "Your account is logged in remotely"
            },
            10030008: {
                zh: "账号异常",
                en: "This user is disabled"
            },
            10030009: {
                zh: " 用户不允许绑定多个银行卡/UPI",
                en: "Users permanently bind multiple bank cards / UPI"
            },
            10030010: {
                zh: "同个银行卡不允许多账户绑定",
                en: "The same bank card does not allow multiple accounts to bind"
            },
            10030011: {
                zh: " 当日验证码发送超过限制",
                en: "The verification code sent on the day exceeds the limit"
            },
            10030012: {
                zh: " 暂无数据导出",
                en: "No data export"
            },
            10030013: {
                zh: " 投注金额错误",
                en: " Wrong bet amount"
            },
            10030014: {
                zh: " 手机格式错误",
                en: " Phone format error"
            },
            10040001: {
                zh: "用户名或密码错误",
                en: "Incorrect username or password"
            },
            10040002: {
                zh: "账号异常",
                en: "This admin is disabled"
            },
            10040003: {
                zh: "管理员不存在",
                en: "Admin does not exist"
            },
            10040004: {
                zh: "验证码错误",
                en: "Invite code not exists"
            },
            10040005: {
                zh: "密码不一致",
                en: "Inconsistent passwords"
            },
            10040006: {
                zh: "原始密码错误",
                en: "Original password error"
            },
            10040007: {
                zh: "谷歌验证码错误",
                en: "Google verify code error"
            },
            10040008: {
                zh: "不在白名单",
                en: "not in white list"
            },
            10040009: {
                zh: "您的账号在异地登录",
                en: "Your account is logged in remotely"
            },
            10040010: {
                zh: "新增代理失败，代理账户已存在",
                en: "Account already exists"
            },
            10050001: {
                zh: "密码错误",
                en: "Password error"
            },
            10050002: {
                zh: "提现金额低于最低限制",
                en: "The withdrawal amount is below the minimum limit"
            },
            10050003: {
                zh: "存在正在进行的取现订单",
                en: "Withdraw orders in progress exist"
            },
            10050004: {
                zh: "取现金额超过账户余额",
                en: "Cash withdrawal exceeds account balance"
            },
            10050005: {
                zh: "银行卡不存在",
                en: "Bank is not find"
            },
            10050006: {
                zh: "创建取现订单失败",
                en: "Create withdraw order fail"
            },
            10050007: {
                zh: "订单不存在",
                en: "Order is not find"
            },
            10050008: {
                zh: "订单状态错误",
                en: "Order state error"
            },
            10050009: {
                zh: "操作员错误",
                en: "Operator error"
            },
            10050010: {
                zh: "审核订单失败",
                en: "Audit order fail"
            },
            10050011: {
                zh: "取现失败",
                en: "Payout fail"
            },
            10050012: {
                zh: "超过每日取现次数",
                en: "Exceed the number of daily cash withdrawals"
            },
            10060001: {
                zh: "余额不足",
                en: "Roles have been assigned and cannot be deleted"
            },
            10060002: {
                zh: "红包不存在",
                en: "Red packet is not find"
            },
            10060003: {
                zh: "已抢完",
                en: "Already finished"
            },
            10060004: {
                zh: "已领取该红包",
                en: "Red Packets Received"
            },
            10060005: {
                zh: "已被撤回",
                en: "Red Packets Revoked"
            },
            10060006: {
                zh: "红包已过期返还",
                en: "Red packet has expired return"
            },
            10060007: {
                zh: "红包失效",
                en: "Red packet expired "
            },
            10060008: {
                zh: "红包过期时间错误",
                en: "Red packet  expired time error"
            },
            10070001: {
                zh: "角色已分配，不允许删除",
                en: "Roles have been assigned and cannot be deleted"
            },
            10080001: {
                zh: "订单不存在",
                en: "Order not exist"
            },
            10080002: {
                zh: "手动补单失败",
                en: "Order error"
            },
            10080003: {
                zh: " 手动充值失败",
                en: "Order recharge error"
            },
            10080004: {
                zh: " 提佣记录状态错误",
                en: "Commission state error"
            },
            10090001: {
                zh: " 用户名或密码错误",
                en: "Incorrect username or password"
            },
            10090002: {
                zh: " 账号异常",
                en: "This admin is disabled"
            },
            10090003: {
                zh: " 验证码错误",
                en: "Verify code error"
            },
            10090004: {
                zh: "  密码不一致",
                en: "Inconsistent passwords"
            },
            10090005: {
                zh: " Google验证码错误",
                en: "Google verify code error"
            },
            10090006: {
                zh: " 代理赠金失败",
                en: "Agent bonus error"
            },
            10090007: {
                zh: " 代理赠金记录不存在",
                en: "Agent bonus not exist"
            },
            10090008: {
                zh: " 代理不存在",
                en: "Agent not exist"
            },
            10090009: {
                zh: " 代理余额不足",
                en: "Agent insufficient balance"
            },
            10100001: {
                zh: "已使用，不允许删除 ",
                eh: ""
            },
            10100002: {
                zh: "非代理邀请的会员，不赠送方案 ",
                eh: "Members who are not invited by the agency will not give the scheme"
            },
            10110001: {
                zh: "方案不存在 ",
                eh: "scheme no exist"
            },
            10110002: {
                zh: "必须大于上一档，小于下一档 ",
                eh: "It has to be bigger than the last one, less than the next one"
            },
            10110003: {
                zh: "奖励不存在 ",
                eh: "reward no exist"
            },
            10110004: {
                zh: "该方案存在进行中的，不允许删除 ",
                eh: "The scheme exists in progress and is not allowed to be deleted"
            },
            10050014: {
                zh: "暂时无法取现",
                eh: "Temporarily unable to withdraw cash"
            }
        }
    },
    ffd6: function(e, n, t) {
        var o = t("24fb");
        n = o(!1), n.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.segmented-control[data-v-c72ddc8a]{display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:36px;overflow:hidden;cursor:pointer}.segmented-control__item[data-v-c72ddc8a]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;box-sizing:border-box;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.segmented-control__item--button[data-v-c72ddc8a]{border-style:solid;border-top-width:1px;border-bottom-width:1px;border-right-width:1px;border-left-width:0}.segmented-control__item--button--first[data-v-c72ddc8a]{border-left-width:1px;border-top-left-radius:5px;border-bottom-left-radius:5px}.segmented-control__item--button--last[data-v-c72ddc8a]{border-top-right-radius:5px;border-bottom-right-radius:5px}.segmented-control__item--text[data-v-c72ddc8a]{border-bottom-style:solid;border-bottom-width:3px}.segmented-control__text[data-v-c72ddc8a]{font-size:16px;line-height:20px;text-align:center}', ""]), e.exports = n
    }
});