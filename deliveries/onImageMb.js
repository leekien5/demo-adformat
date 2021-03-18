function isValidURL(str) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex .test(str)) {
        alert("Please enter valid URL.");
        return false;
    } else {
        return true;
    }
}

(function () {
    var YoAdsOnImagePC = (function (t) {
        var e = {};
        function r(n) {
            if (e[n]) return e[n].exports;
            var i = (e[n] = { i: n, l: !1, exports: {} });
            return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
        }
        return (
            (r.m = t),
            (r.c = e),
            (r.d = function (t, e, n) {
                r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
            }),
            (r.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (r.t = function (t, e) {
                if ((1 & e && (t = r(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var i in t)
                        r.d(
                            n,
                            i,
                            function (e) {
                                return t[e];
                            }.bind(null, i)
                        );
                return n;
            }),
            (r.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return r.d(e, "a", e), e;
            }),
            (r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (r.p = ""),
            r((r.s = 1))
        );
    })([
        function (t, e) {
            t.exports = {
                removeEmpty: (t) => (
                    Object.keys(t).forEach((e) => {
                        (void 0 !== t[e] && null !== t[e] && 0 !== t[e].length) || delete t[e];
                    }),
                    t
                ),
                isEmpty: (t) => (t.constructor === Object ? 0 === Object.keys(t).length : t.constructor === Array && 0 === t.length),
                createElement(t, e) {
                    var r = document.createElement(t);
                    if (!this.isEmpty(e)) for (var n in e) r.setAttribute(n, e[n]);
                    return r;
                },
                loadImage(t) {
                    new Image().src = t;
                },
                getDeviceRatio: () => window.devicePixelRatio || 1,
                getXRatio: (t) => (t ? window.innerWidth / t : 1),
                getYRatio(t) {
                    if (t) return window.innerHeight / t;
                },
                addEventListenerHandle(t, e, r, n) {
                    (n = n || !1), "addEventListener" in t ? t.addEventListener(e, r, n) : "attachEvent" in obj && t.attachEvent("on" + e, r);
                },
                parseMessage(t) {
                    try {
                        if ("object" == typeof t && void 0 !== t.data) {
                            let t = JSON.parse(event.data);
                            const { pid: e, act: r, des: n, bid: i } = t;
                            return { pid: e, bid: i, act: r, des: n };
                        }
                    } catch (t) {
                        return null;
                    }
                },
                generateUrlAd(t, e, r, n, i) {
                    var a = (e = (e = (e = (e = e.replace(/\[timestamp\]/g, Date.now())).replace(/\[yo_pid\]/g, r)).replace(/\[yo_bid\]/g, n.id)).replace(/\[yo_ref\]/g, encodeURIComponent(i.purl))).indexOf("//");
                    if (((a < 0 || a > 6) && (e = `${t}/${e}?pid=${r}&bid=${n.id}`), n.ldp.length > 0)) {
                        var o = "?";
                        -1 !== e.indexOf("?") && (o = "&"), (e += `${o}clk=${encodeURIComponent(n.ldp)}`);
                    }
                    return e;
                },
                setRect(t, e, r, n, i) {
                    t.style.clip = `rect(${e}px, ${r}px, ${n}px, ${i}px)`;
                },
                easingYomedia(t, e, r) {
                    try {
                        var n = this;
                        if (!e) return;
                        var i = e.style.height;
                        (i = (i = i.replace("px", "")).replace("%", "")), (i = parseFloat(i));
                        var a = r - i,
                            o = a > 0 ? i + Math.ceil(a / 5) : i + Math.floor(a / 5);
                        if (
                            ((e.style.height = o + "px"),
                            o <= 0 &&
                                setTimeout(function () {
                                    e.remove();
                                }, 200),
                            (r = r > 0 ? Math.ceil(r) : Math.floor(r)),
                            0 == a)
                        )
                            return void clearTimeout(t);
                        t = setTimeout(function () {
                            n.easingYomedia(t, e, r);
                        }, 20);
                    } catch (e) {
                        setTimeout(function () {
                            e.remove();
                        }, 200);
                    }
                },
                getCurrentScript() {
                    return document.currentScript || (t = document.getElementsByTagName("script"))[t.length - 1];
                    var t;
                },
                insertAfter(t, e) {
                    var r = e.nextSibling;
                    r ? r.parentNode.insertBefore(t, r) : e.parentNode.appendChild(t);
                },
            };
        },
        function (t, e, r) {
            const n = r(0),
                i = r(2).default,
                a = r(3);
            t.exports = {
                showAds(t, e) {
                    var r = this,
                        n = !1,
                        i = 0;
                    const { pid: a, bnr: o, web: s } = t;
                    var c = setInterval(function () {
                        try {
                            if (!n) {
                                var u;
                                if ("object" == typeof s && "object" == typeof s.pl && void 0 !== s.pl.pls) {
                                    var l = s.pl.pls.selector;
                                    u = document.querySelector(l);
                                }
                                if ((u || (u = document.body), u)) {
                                    for (var p, d = u.querySelectorAll("img"), h = 0; h < d.length; h++) {
                                        let t = d[h];
                                        if (t.clientWidth >= o.ctv.content_min_width && t.clientHeight >= o.ctv.content_min_height) {
                                            p = t;
                                            break;
                                        }
                                    }
                                    p && ((n = !0), r.renderAds(p, t, e), clearInterval(c));
                                }
                            }
                            (i += 10) > 5e3 && !n && (r.renderBackup(a, s, e), clearInterval(c));
                        } catch (t) {}
                    }, 10);
                },
                renderAds(t, e, r) {
                    const { pid: a, bnr: o, trk: s, cli: c, web: u, camp: l, advi: p, mdom: d } = e;
                    var h = Object.assign({}, getComputedStyle(t));
                    t.style.marginTop = "0px";
                    var f = t.clientWidth / (o.ctv.width / o.ctv.height),
                        m = t.clientWidth / (o.ctv.width / o.ctv.min_height),
                        g = n.createElement("div", { id: "wrapper-ads-" + a, style: `position: relative; display: inline-block; margin: ${h.marginTop} ${h.marginRight} 0px ${h.marginLeft}; width: 100%; height: ${m}px;` });
                    t.parentNode.insertBefore(g, t);
                    var y = n.createElement("div", { id: "content-ads-" + a, style: `position: absolute; width: ${t.clientWidth}px; margin: 0px auto; top: 0px; clip: rect(0px, ${t.clientWidth}px, ${m}px, 0px);` }),
                        v = { src: n.generateUrlAd(d, o.ctv.source, a, o, u), id: a, style: `width: 100%; height: ${f}px; border: none; z-index: 2; position: relative; transition: height 1s ease-out 0s; overflow: hidden;` },
                        T = n.createElement("iframe", v);
                    y.appendChild(T), g.appendChild(y);
                    const { dom: _, evs: k, ttr: x } = s;
                    var b = new i(_, p, k, x, c, u, l, o);
                    n.addEventListenerHandle(T, "load", function () {
                        b.impression();
                    }),
                        this.processedAds(a, b, o, t.clientWidth, m, t.clientWidth, m + t.clientHeight + 14, h);
                },
                processedAds(t, e, r, i, a, o, s, c) {
                    const u = this;
                    n.addEventListenerHandle(window, "message", function (i) {
                        try {
                            var l = n.parseMessage(i);
                            if (l.pid == t && l.bid == r.id)
                                switch (l.act) {
                                    case "yomedia_collapse_ads":
                                        u.colapseAds(t, o, a);
                                        break;
                                    case "yomedia_expand_ads":
                                        u.expandAds(t, o, s);
                                        break;
                                    case "yomedia_close_ads":
                                        u.closeAds(t, c);
                                        break;
                                    case "yomedia_click_ads":
                                        e.click();
                                        break;
                                    case "yomedia_click_through_ads":
                                        e.clickThrough();
                                        break;
                                    case "yomedia_start_ads":
                                        e.start();
                                        break;
                                    case "yomedia_first_quartile_ads":
                                        e.firstQuartile();
                                        break;
                                    case "yomedia_midpoint_ads":
                                        e.midpoint();
                                        break;
                                    case "yomedia_third_quartile_ads":
                                        e.thirdQuartile();
                                        break;
                                    case "yomedia_complete_ads":
                                        e.complete();
                                        break;
                                    case "yomedia_mute_ads":
                                        e.mute();
                                        break;
                                    case "yomedia_unmute_ads":
                                        e.unmute();
                                        break;
                                    case "yomedia_pause_ads":
                                        e.pause();
                                        break;
                                    case "yomedia_resume_ads":
                                        e.resume();
                                        break;
                                    case "yomedia_skip_ads":
                                        e.skip();
                                }
                        } catch (t) {}
                    });
                },
                renderBackup(t, e, r) {
                    if (r) {
                        var i = n.createElement("div", { id: "yomedia-backup-" + t }),
                            o = document.getElementById("yomedia-delivery-" + t);
                        o || (o = n.getCurrentScript()), n.insertAfter(i, o), r && (r.replace(/\[yo_cb\]/g, Date.now()), a("#yomedia-backup-" + t, r.replace(/\[yo_cb\]/g, Date.now()).replace(/\[yo_page_url\]/g, e.purl)));
                    }
                },
                colapseAds(t, e, r) {
                    n.setRect(document.getElementById("content-ads-" + t), 0, e, r, 0);
                },
                expandAds(t, e, r) {
                    n.setRect(document.getElementById("content-ads-" + t), 0, e, r, 0);
                },
                closeAds(t, e) {
                    n.easingYomedia(void 0, document.getElementById("wrapper-ads-" + t), 0), (document.getElementById("wrapper-ads-" + t).style.marginTop = e.marginTop);
                },
            };
        },
        function (t, e, r) {
            "use strict";
            r.r(e);
            const n = r(0);
            e.default = class {
                constructor(t, e, r, n = {}, i = {}, a = {}, o = {}, s = {}) {
                    (this.domain = t),
                        (this.adview = e),
                        (this.events = r),
                        (this.third_party_trackings = n),
                        (this.client = i),
                        (this.website = a),
                        (this.campaign = o),
                        (this.banner = s),
                        (this.mapping_events = {
                            impression: "EVT_IMPRESSION",
                            start: "EVT_START",
                            firstQuartile: "EVT_FIRST",
                            midpoint: "EVT_MID",
                            thirdQuartile: "EVT_THIRD",
                            complete: "EVT_COMPLETE",
                            viewable: "EVT_VIEWABLE",
                            click: "EVT_CLICK",
                            mute: "EVT_MUTE",
                            unmute: "EVT_UNMUTE",
                            pause: "EVT_PAUSE",
                            play: "EVT_PLAY",
                            resume: "EVT_RESUME",
                            skip: "EVT_SKIP",
                        });
                }
                generateUrl(t) {
                    if (void 0 !== this.mapping_events[t]) {
                        let e = this.mapping_events[t];
                        if (void 0 !== this.events[e]) {
                            let t = this.events[e].evt,
                                r = this.events[e].id;
                            return `${this.domain}/${this.adview}?event=${r}&token=${t}&ord=${Date.now()}`;
                        }
                    }
                    return null;
                }
                executeTracking(t) {
                    n.loadImage(t);
                }
                replaceMacro(t) {
                    return (
                        (t = t.replace(/\[timestamp\]/g, Date.now())),
                        void 0 !== this.client.u && (t = t.replace(/\[yo_uuid\]/g, this.client.u)),
                        void 0 !== this.website.purl && (t = t.replace(/\[yo_ref\]/g, encodeURIComponent(this.website.purl))),
                        t
                    );
                }
                executeTracking3rd(t) {
                    if (!n.isEmpty(this.third_party_trackings) && void 0 !== this.third_party_trackings[t]) {
                        let e = this.third_party_trackings[t];
                        for (let t = 0; t < e.length; t++) this.executeTracking(this.replaceMacro(e[t]));
                    }
                }
                impression() {
                    var t = this.generateUrl("impression");
                    t && this.executeTracking(t), this.executeTracking3rd("impression");
                }
                getLandingPage() {
                    var t = "";
                    return void 0 !== this.banner.ldp && this.banner.ldp.length > 0 && (t = this.replaceMacro(this.banner.ldp)), t;
                }
                click() {
                    var t = this.generateUrl("click");
                    t && this.executeTracking(t), this.executeTracking3rd("click");
                }
                clickThrough() {
                    this.click();
                    var t = this.getLandingPage();
                    t && window.open(t, "_blank");
                }
                start() {
                    var t = this.generateUrl("start");
                    t && this.executeTracking(t), this.executeTracking3rd("start");
                }
                firstQuartile() {
                    var t = this.generateUrl("firstQuartile");
                    t && this.executeTracking(t), this.executeTracking3rd("firstQuartile");
                }
                midpoint() {
                    var t = this.generateUrl("midpoint");
                    t && this.executeTracking(t), this.executeTracking3rd("midpoint");
                }
                thirdQuartile() {
                    var t = this.generateUrl("thirdQuartile");
                    t && this.executeTracking(t), this.executeTracking3rd("thirdQuartile");
                }
                complete() {
                    var t = this.generateUrl("complete");
                    t && this.executeTracking(t), this.executeTracking3rd("complete");
                }
                mute() {
                    var t = this.generateUrl("mute");
                    t && this.executeTracking(t), this.executeTracking3rd("mute");
                }
                unmute() {
                    var t = this.generateUrl("unmute");
                    t && this.executeTracking(t), this.executeTracking3rd("unmute");
                }
                pause() {
                    var t = this.generateUrl("pause");
                    t && this.executeTracking(t), this.executeTracking3rd("pause");
                }
                resume() {
                    var t = this.generateUrl("resume");
                    t && this.executeTracking(t), this.executeTracking3rd("resume");
                }
                skip() {
                    var t = this.generateUrl("skip");
                    t && this.executeTracking(t), this.executeTracking3rd("skip");
                }
                close() {
                    var t = this.generateUrl("close");
                    t && this.executeTracking(t), this.executeTracking3rd("close");
                }
                minimize() {
                    var t = this.generateUrl("minimize");
                    t && this.executeTracking(t), this.executeTracking3rd("minimize");
                }
                viewable() {
                    var t = this.generateUrl("viewable");
                    t && this.executeTracking(t), this.executeTracking3rd("viewable");
                }
            };
        },
        function (t, e, r) {
            var n;
            (n = function () {
                return (function (t) {
                    var e = {};
                    function r(n) {
                        if (e[n]) return e[n].exports;
                        var i = (e[n] = { exports: {}, id: n, loaded: !1 });
                        return t[n].call(i.exports, i, i.exports, r), (i.loaded = !0), i.exports;
                    }
                    return (r.m = t), (r.c = e), (r.p = ""), r(0);
                })([
                    function (t, e, r) {
                        "use strict";
                        var n = (function (t) {
                            return t && t.__esModule ? t : { default: t };
                        })(r(1));
                        t.exports = n.default;
                    },
                    function (t, e, r) {
                        "use strict";
                        e.__esModule = !0;
                        var n =
                            Object.assign ||
                            function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = arguments[e];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                                }
                                return t;
                            };
                        e.default = h;
                        var i = (function (t) {
                                return t && t.__esModule ? t : { default: t };
                            })(r(2)),
                            a = (function (t) {
                                if (t && t.__esModule) return t;
                                var e = {};
                                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return (e.default = t), e;
                            })(r(4));
                        function o() {}
                        var s = {
                                afterAsync: o,
                                afterDequeue: o,
                                afterStreamStart: o,
                                afterWrite: o,
                                autoFix: !0,
                                beforeEnqueue: o,
                                beforeWriteToken: function (t) {
                                    return t;
                                },
                                beforeWrite: function (t) {
                                    return t;
                                },
                                done: o,
                                error: function (t) {
                                    throw new Error(t.msg);
                                },
                                releaseAsync: !1,
                            },
                            c = 0,
                            u = [],
                            l = null;
                        function p() {
                            var t = u.shift();
                            if (t) {
                                var e = a.last(t);
                                e.afterDequeue(), (t.stream = d.apply(void 0, t)), e.afterStreamStart();
                            }
                        }
                        function d(t, e, r) {
                            ((l = new i.default(t, r)).id = c++), (l.name = r.name || l.id), (h.streams[l.name] = l);
                            var a = t.ownerDocument,
                                s = { close: a.close, open: a.open, write: a.write, writeln: a.writeln };
                            function u(t) {
                                (t = r.beforeWrite(t)), l.write(t), r.afterWrite(t);
                            }
                            n(a, {
                                close: o,
                                open: o,
                                write: function () {
                                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                                    return u(e.join(""));
                                },
                                writeln: function () {
                                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                                    return u(e.join("") + "\n");
                                },
                            });
                            var d = l.win.onerror || o;
                            return (
                                (l.win.onerror = function (t, e, n) {
                                    r.error({ msg: t + " - " + e + ": " + n }), d.apply(l.win, [t, e, n]);
                                }),
                                l.write(e, function () {
                                    n(a, s), (l.win.onerror = d), r.done(), (l = null), p();
                                }),
                                l
                            );
                        }
                        function h(t, e, r) {
                            if (a.isFunction(r)) r = { done: r };
                            else if ("clear" === r) return (u = []), (l = null), void (c = 0);
                            r = a.defaults(r, s);
                            var n = [(t = /^#/.test(t) ? window.document.getElementById(t.substr(1)) : t.jquery ? t[0] : t), e, r];
                            return (
                                (t.postscribe = {
                                    cancel: function () {
                                        n.stream ? n.stream.abort() : (n[1] = o);
                                    },
                                }),
                                r.beforeEnqueue(n),
                                u.push(n),
                                l || p(),
                                t.postscribe
                            );
                        }
                        n(h, { streams: {}, queue: u, WriteStream: i.default });
                    },
                    function (t, e, r) {
                        "use strict";
                        e.__esModule = !0;
                        var n =
                                Object.assign ||
                                function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = arguments[e];
                                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                                    }
                                    return t;
                                },
                            i = (function (t) {
                                return t && t.__esModule ? t : { default: t };
                            })(r(3)),
                            a = (function (t) {
                                if (t && t.__esModule) return t;
                                var e = {};
                                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return (e.default = t), e;
                            })(r(4));
                        function o(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        }
                        function s(t, e) {
                            var r = "data-ps-" + e,
                                n = t.getAttribute(r);
                            return a.existy(n) ? String(n) : n;
                        }
                        function c(t, e) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                n = "data-ps-" + e;
                            a.existy(r) && "" !== r ? t.setAttribute(n, r) : t.removeAttribute(n);
                        }
                        var u = (function () {
                            function t(e) {
                                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                o(this, t),
                                    (this.root = e),
                                    (this.options = r),
                                    (this.doc = e.ownerDocument),
                                    (this.win = this.doc.defaultView || this.doc.parentWindow),
                                    (this.parser = new i.default("", { autoFix: r.autoFix })),
                                    (this.actuals = [e]),
                                    (this.proxyHistory = ""),
                                    (this.proxyRoot = this.doc.createElement(e.nodeName)),
                                    (this.scriptStack = []),
                                    (this.writeQueue = []),
                                    c(this.proxyRoot, "proxyof", 0);
                            }
                            return (
                                (t.prototype.write = function () {
                                    var t;
                                    for ((t = this.writeQueue).push.apply(t, arguments); !this.deferredRemote && this.writeQueue.length; ) {
                                        var e = this.writeQueue.shift();
                                        a.isFunction(e) ? this._callFunction(e) : this._writeImpl(e);
                                    }
                                }),
                                (t.prototype._callFunction = function (t) {
                                    var e = { type: "function", value: t.name || t.toString() };
                                    this._onScriptStart(e), t.call(this.win, this.doc), this._onScriptDone(e);
                                }),
                                (t.prototype._writeImpl = function (t) {
                                    this.parser.append(t);
                                    for (var e = void 0, r = void 0, n = void 0, i = []; (e = this.parser.readToken()) && !(r = a.isScript(e)) && !(n = a.isStyle(e)); ) (e = this.options.beforeWriteToken(e)) && i.push(e);
                                    i.length > 0 && this._writeStaticTokens(i), r && this._handleScriptToken(e), n && this._handleStyleToken(e);
                                }),
                                (t.prototype._writeStaticTokens = function (t) {
                                    var e = this._buildChunk(t);
                                    return e.actual ? ((e.html = this.proxyHistory + e.actual), (this.proxyHistory += e.proxy), (this.proxyRoot.innerHTML = e.html), this._walkChunk(), e) : null;
                                }),
                                (t.prototype._buildChunk = function (t) {
                                    for (var e = this.actuals.length, r = [], n = [], i = [], a = t.length, o = 0; o < a; o++) {
                                        var s = t[o],
                                            c = s.toString();
                                        if ((r.push(c), s.attrs)) {
                                            if (!/^noscript$/i.test(s.tagName)) {
                                                var u = e++;
                                                n.push(c.replace(/(\/?>)/, " data-ps-id=" + u + " $1")),
                                                    "ps-script" !== s.attrs.id && "ps-style" !== s.attrs.id && i.push("atomicTag" === s.type ? "" : "<" + s.tagName + " data-ps-proxyof=" + u + (s.unary ? " />" : ">"));
                                            }
                                        } else n.push(c), i.push("endTag" === s.type ? c : "");
                                    }
                                    return { tokens: t, raw: r.join(""), actual: n.join(""), proxy: i.join("") };
                                }),
                                (t.prototype._walkChunk = function () {
                                    for (var t = void 0, e = [this.proxyRoot]; a.existy((t = e.shift())); ) {
                                        var r = 1 === t.nodeType;
                                        if (!r || !s(t, "proxyof")) {
                                            r && ((this.actuals[s(t, "id")] = t), c(t, "id"));
                                            var n = t.parentNode && s(t.parentNode, "proxyof");
                                            n && this.actuals[n].appendChild(t);
                                        }
                                        e.unshift.apply(e, a.toArray(t.childNodes));
                                    }
                                }),
                                (t.prototype._handleScriptToken = function (t) {
                                    var e = this,
                                        r = this.parser.clear();
                                    r && this.writeQueue.unshift(r),
                                        (t.src = t.attrs.src || t.attrs.SRC),
                                        (t = this.options.beforeWriteToken(t)) &&
                                            (t.src && this.scriptStack.length ? (this.deferredRemote = t) : this._onScriptStart(t),
                                            this._writeScriptToken(t, function () {
                                                e._onScriptDone(t);
                                            }));
                                }),
                                (t.prototype._handleStyleToken = function (t) {
                                    var e = this.parser.clear();
                                    e && this.writeQueue.unshift(e), (t.type = t.attrs.type || t.attrs.TYPE || "text/css"), (t = this.options.beforeWriteToken(t)) && this._writeStyleToken(t), e && this.write();
                                }),
                                (t.prototype._writeStyleToken = function (t) {
                                    var e = this._buildStyle(t);
                                    this._insertCursor(e, "ps-style"), t.content && (e.styleSheet && !e.sheet ? (e.styleSheet.cssText = t.content) : e.appendChild(this.doc.createTextNode(t.content)));
                                }),
                                (t.prototype._buildStyle = function (t) {
                                    var e = this.doc.createElement(t.tagName);
                                    return (
                                        e.setAttribute("type", t.type),
                                        a.eachKey(t.attrs, function (t, r) {
                                            e.setAttribute(t, r);
                                        }),
                                        e
                                    );
                                }),
                                (t.prototype._insertCursor = function (t, e) {
                                    this._writeImpl('<span id="' + e + '"/>');
                                    var r = this.doc.getElementById(e);
                                    r && r.parentNode.replaceChild(t, r);
                                }),
                                (t.prototype._onScriptStart = function (t) {
                                    (t.outerWrites = this.writeQueue), (this.writeQueue = []), this.scriptStack.unshift(t);
                                }),
                                (t.prototype._onScriptDone = function (t) {
                                    t === this.scriptStack[0]
                                        ? (this.scriptStack.shift(), this.write.apply(this, t.outerWrites), !this.scriptStack.length && this.deferredRemote && (this._onScriptStart(this.deferredRemote), (this.deferredRemote = null)))
                                        : this.options.error({ msg: "Bad script nesting or script finished twice" });
                                }),
                                (t.prototype._writeScriptToken = function (t, e) {
                                    var r = this._buildScript(t),
                                        n = this._shouldRelease(r),
                                        i = this.options.afterAsync;
                                    t.src &&
                                        ((r.src = t.src),
                                        this._scriptLoadHandler(
                                            r,
                                            n
                                                ? i
                                                : function () {
                                                      e(), i();
                                                  }
                                        ));
                                    try {
                                        this._insertCursor(r, "ps-script"), (r.src && !n) || e();
                                    } catch (t) {
                                        this.options.error(t), e();
                                    }
                                }),
                                (t.prototype._buildScript = function (t) {
                                    var e = this.doc.createElement(t.tagName);
                                    return (
                                        a.eachKey(t.attrs, function (t, r) {
                                            e.setAttribute(t, r);
                                        }),
                                        t.content && (e.text = t.content),
                                        e
                                    );
                                }),
                                (t.prototype._scriptLoadHandler = function (t, e) {
                                    function r() {
                                        t = t.onload = t.onreadystatechange = t.onerror = null;
                                    }
                                    var i = this.options.error;
                                    function a() {
                                        r(), null != e && e(), (e = null);
                                    }
                                    function o(t) {
                                        r(), i(t), null != e && e(), (e = null);
                                    }
                                    function s(t, e) {
                                        var r = t["on" + e];
                                        null != r && (t["_on" + e] = r);
                                    }
                                    s(t, "load"),
                                        s(t, "error"),
                                        n(t, {
                                            onload: function () {
                                                if (t._onload)
                                                    try {
                                                        t._onload.apply(this, Array.prototype.slice.call(arguments, 0));
                                                    } catch (e) {
                                                        o({ msg: "onload handler failed " + e + " @ " + t.src });
                                                    }
                                                a();
                                            },
                                            onerror: function () {
                                                if (t._onerror)
                                                    try {
                                                        t._onerror.apply(this, Array.prototype.slice.call(arguments, 0));
                                                    } catch (e) {
                                                        return void o({ msg: "onerror handler failed " + e + " @ " + t.src });
                                                    }
                                                o({ msg: "remote script failed " + t.src });
                                            },
                                            onreadystatechange: function () {
                                                /^(loaded|complete)$/.test(t.readyState) && a();
                                            },
                                        });
                                }),
                                (t.prototype._shouldRelease = function (t) {
                                    return !/^script$/i.test(t.nodeName) || !!(this.options.releaseAsync && t.src && t.hasAttribute("async"));
                                }),
                                t
                            );
                        })();
                        e.default = u;
                    },
                    function (t, e, r) {
                        var n;
                        (n = function () {
                            return (function (t) {
                                var e = {};
                                function r(n) {
                                    if (e[n]) return e[n].exports;
                                    var i = (e[n] = { exports: {}, id: n, loaded: !1 });
                                    return t[n].call(i.exports, i, i.exports, r), (i.loaded = !0), i.exports;
                                }
                                return (r.m = t), (r.c = e), (r.p = ""), r(0);
                            })([
                                function (t, e, r) {
                                    "use strict";
                                    var n = (function (t) {
                                        return t && t.__esModule ? t : { default: t };
                                    })(r(1));
                                    t.exports = n.default;
                                },
                                function (t, e, r) {
                                    "use strict";
                                    e.__esModule = !0;
                                    var n = s(r(2)),
                                        i = s(r(3)),
                                        a = (function (t) {
                                            return t && t.__esModule ? t : { default: t };
                                        })(r(6)),
                                        o = r(5);
                                    function s(t) {
                                        if (t && t.__esModule) return t;
                                        var e = {};
                                        if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                        return (e.default = t), e;
                                    }
                                    function c(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                    }
                                    var u = { comment: /^<!--/, endTag: /^<\//, atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i, startTag: /^</, chars: /^[^<]/ },
                                        l = (function () {
                                            function t() {
                                                var e = this,
                                                    r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                c(this, t), (this.stream = r);
                                                var o = !1,
                                                    s = {};
                                                for (var u in n) n.hasOwnProperty(u) && (i.autoFix && (s[u + "Fix"] = !0), (o = o || s[u + "Fix"]));
                                                o
                                                    ? ((this._readToken = (0, a.default)(this, s, function () {
                                                          return e._readTokenImpl();
                                                      })),
                                                      (this._peekToken = (0, a.default)(this, s, function () {
                                                          return e._peekTokenImpl();
                                                      })))
                                                    : ((this._readToken = this._readTokenImpl), (this._peekToken = this._peekTokenImpl));
                                            }
                                            return (
                                                (t.prototype.append = function (t) {
                                                    this.stream += t;
                                                }),
                                                (t.prototype.prepend = function (t) {
                                                    this.stream = t + this.stream;
                                                }),
                                                (t.prototype._readTokenImpl = function () {
                                                    var t = this._peekTokenImpl();
                                                    if (t) return (this.stream = this.stream.slice(t.length)), t;
                                                }),
                                                (t.prototype._peekTokenImpl = function () {
                                                    for (var t in u)
                                                        if (u.hasOwnProperty(t) && u[t].test(this.stream)) {
                                                            var e = i[t](this.stream);
                                                            if (e) return "startTag" === e.type && /script|style/i.test(e.tagName) ? null : ((e.text = this.stream.substr(0, e.length)), e);
                                                        }
                                                }),
                                                (t.prototype.peekToken = function () {
                                                    return this._peekToken();
                                                }),
                                                (t.prototype.readToken = function () {
                                                    return this._readToken();
                                                }),
                                                (t.prototype.readTokens = function (t) {
                                                    for (var e = void 0; (e = this.readToken()); ) if (t[e.type] && !1 === t[e.type](e)) return;
                                                }),
                                                (t.prototype.clear = function () {
                                                    var t = this.stream;
                                                    return (this.stream = ""), t;
                                                }),
                                                (t.prototype.rest = function () {
                                                    return this.stream;
                                                }),
                                                t
                                            );
                                        })();
                                    for (var p in ((e.default = l),
                                    (l.tokenToString = function (t) {
                                        return t.toString();
                                    }),
                                    (l.escapeAttributes = function (t) {
                                        var e = {};
                                        for (var r in t) t.hasOwnProperty(r) && (e[r] = (0, o.escapeQuotes)(t[r], null));
                                        return e;
                                    }),
                                    (l.supports = n),
                                    n))
                                        n.hasOwnProperty(p) && (l.browserHasFlaw = l.browserHasFlaw || (!n[p] && p));
                                },
                                function (t, e) {
                                    "use strict";
                                    e.__esModule = !0;
                                    var r = !1,
                                        n = !1,
                                        i = window.document.createElement("div");
                                    try {
                                        var a = "<P><I></P></I>";
                                        (i.innerHTML = a), (e.tagSoup = r = i.innerHTML !== a);
                                    } catch (t) {
                                        e.tagSoup = r = !1;
                                    }
                                    try {
                                        (i.innerHTML = "<P><i><P></P></i></P>"), (e.selfClose = n = 2 === i.childNodes.length);
                                    } catch (t) {
                                        e.selfClose = n = !1;
                                    }
                                    (i = null), (e.tagSoup = r), (e.selfClose = n);
                                },
                                function (t, e, r) {
                                    "use strict";
                                    e.__esModule = !0;
                                    var n =
                                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                            ? function (t) {
                                                  return typeof t;
                                              }
                                            : function (t) {
                                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                              };
                                    (e.comment = function (t) {
                                        var e = t.indexOf("--\x3e");
                                        if (e >= 0) return new i.CommentToken(t.substr(4, e - 1), e + 3);
                                    }),
                                        (e.chars = function (t) {
                                            var e = t.indexOf("<");
                                            return new i.CharsToken(e >= 0 ? e : t.length);
                                        }),
                                        (e.startTag = o),
                                        (e.atomicTag = function (t) {
                                            var e = o(t);
                                            if (e) {
                                                var r = t.slice(e.length);
                                                if (r.match(new RegExp("</\\s*" + e.tagName + "\\s*>", "i"))) {
                                                    var n = r.match(new RegExp("([\\s\\S]*?)</\\s*" + e.tagName + "\\s*>", "i"));
                                                    if (n) return new i.AtomicTagToken(e.tagName, n[0].length + e.length, e.attrs, e.booleanAttrs, n[1]);
                                                }
                                            }
                                        }),
                                        (e.endTag = function (t) {
                                            var e = t.match(a.endTag);
                                            if (e) return new i.EndTagToken(e[1], e[0].length);
                                        });
                                    var i = r(4),
                                        a = {
                                            startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                            endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                            attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                            fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                                        };
                                    function o(t) {
                                        var e, r, o;
                                        if (-1 !== t.indexOf(">")) {
                                            var s = t.match(a.startTag);
                                            if (s) {
                                                var c =
                                                    ((e = {}),
                                                    (r = {}),
                                                    (o = s[2]),
                                                    s[2].replace(a.attr, function (t, n) {
                                                        arguments[2] || arguments[3] || arguments[4] || arguments[5]
                                                            ? arguments[5]
                                                                ? ((e[arguments[5]] = ""), (r[arguments[5]] = !0))
                                                                : (e[n] = arguments[2] || arguments[3] || arguments[4] || (a.fillAttr.test(n) && n) || "")
                                                            : (e[n] = ""),
                                                            (o = o.replace(t, ""));
                                                    }),
                                                    { v: new i.StartTagToken(s[1], s[0].length, e, r, !!s[3], o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")) });
                                                if ("object" === (void 0 === c ? "undefined" : n(c))) return c.v;
                                            }
                                        }
                                    }
                                },
                                function (t, e, r) {
                                    "use strict";
                                    (e.__esModule = !0), (e.EndTagToken = e.AtomicTagToken = e.StartTagToken = e.TagToken = e.CharsToken = e.CommentToken = e.Token = void 0);
                                    var n = r(5);
                                    function i(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                    }
                                    (e.Token = function t(e, r) {
                                        i(this, t), (this.type = e), (this.length = r), (this.text = "");
                                    }),
                                        (e.CommentToken = (function () {
                                            function t(e, r) {
                                                i(this, t), (this.type = "comment"), (this.length = r || (e ? e.length : 0)), (this.text = ""), (this.content = e);
                                            }
                                            return (
                                                (t.prototype.toString = function () {
                                                    return "\x3c!--" + this.content;
                                                }),
                                                t
                                            );
                                        })()),
                                        (e.CharsToken = (function () {
                                            function t(e) {
                                                i(this, t), (this.type = "chars"), (this.length = e), (this.text = "");
                                            }
                                            return (
                                                (t.prototype.toString = function () {
                                                    return this.text;
                                                }),
                                                t
                                            );
                                        })());
                                    var a = (e.TagToken = (function () {
                                        function t(e, r, n, a, o) {
                                            i(this, t), (this.type = e), (this.length = n), (this.text = ""), (this.tagName = r), (this.attrs = a), (this.booleanAttrs = o), (this.unary = !1), (this.html5Unary = !1);
                                        }
                                        return (
                                            (t.formatTag = function (t) {
                                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                                    r = "<" + t.tagName;
                                                for (var i in t.attrs)
                                                    if (t.attrs.hasOwnProperty(i)) {
                                                        r += " " + i;
                                                        var a = t.attrs[i];
                                                        (void 0 !== t.booleanAttrs && void 0 !== t.booleanAttrs[i]) || (r += '="' + (0, n.escapeQuotes)(a) + '"');
                                                    }
                                                return t.rest && (r += " " + t.rest), t.unary && !t.html5Unary ? (r += "/>") : (r += ">"), null != e && (r += e + "</" + t.tagName + ">"), r;
                                            }),
                                            t
                                        );
                                    })());
                                    (e.StartTagToken = (function () {
                                        function t(e, r, n, a, o, s) {
                                            i(this, t), (this.type = "startTag"), (this.length = r), (this.text = ""), (this.tagName = e), (this.attrs = n), (this.booleanAttrs = a), (this.html5Unary = !1), (this.unary = o), (this.rest = s);
                                        }
                                        return (
                                            (t.prototype.toString = function () {
                                                return a.formatTag(this);
                                            }),
                                            t
                                        );
                                    })()),
                                        (e.AtomicTagToken = (function () {
                                            function t(e, r, n, a, o) {
                                                i(this, t),
                                                    (this.type = "atomicTag"),
                                                    (this.length = r),
                                                    (this.text = ""),
                                                    (this.tagName = e),
                                                    (this.attrs = n),
                                                    (this.booleanAttrs = a),
                                                    (this.unary = !1),
                                                    (this.html5Unary = !1),
                                                    (this.content = o);
                                            }
                                            return (
                                                (t.prototype.toString = function () {
                                                    return a.formatTag(this, this.content);
                                                }),
                                                t
                                            );
                                        })()),
                                        (e.EndTagToken = (function () {
                                            function t(e, r) {
                                                i(this, t), (this.type = "endTag"), (this.length = r), (this.text = ""), (this.tagName = e);
                                            }
                                            return (
                                                (t.prototype.toString = function () {
                                                    return "</" + this.tagName + ">";
                                                }),
                                                t
                                            );
                                        })());
                                },
                                function (t, e) {
                                    "use strict";
                                    (e.__esModule = !0),
                                        (e.escapeQuotes = function (t) {
                                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                                            return t
                                                ? t.replace(/([^"]*)"/g, function (t, e) {
                                                      return /\\/.test(e) ? e + '"' : e + '\\"';
                                                  })
                                                : e;
                                        });
                                },
                                function (t, e) {
                                    "use strict";
                                    (e.__esModule = !0),
                                        (e.default = function (t, e, r) {
                                            var o = (function () {
                                                    var t = [];
                                                    return (
                                                        (t.last = function () {
                                                            return this[this.length - 1];
                                                        }),
                                                        (t.lastTagNameEq = function (t) {
                                                            var e = this.last();
                                                            return e && e.tagName && e.tagName.toUpperCase() === t.toUpperCase();
                                                        }),
                                                        (t.containsTagName = function (t) {
                                                            for (var e, r = 0; (e = this[r]); r++) if (e.tagName === t) return !0;
                                                            return !1;
                                                        }),
                                                        t
                                                    );
                                                })(),
                                                s = {
                                                    startTag: function (r) {
                                                        var i = r.tagName;
                                                        "TR" === i.toUpperCase() && o.lastTagNameEq("TABLE")
                                                            ? (t.prepend("<TBODY>"), c())
                                                            : e.selfCloseFix && n.test(i) && o.containsTagName(i)
                                                            ? o.lastTagNameEq(i)
                                                                ? a(t, o)
                                                                : (t.prepend("</" + r.tagName + ">"), c())
                                                            : r.unary || o.push(r);
                                                    },
                                                    endTag: function (n) {
                                                        o.last() ? (e.tagSoupFix && !o.lastTagNameEq(n.tagName) ? a(t, o) : o.pop()) : e.tagSoupFix && (r(), c());
                                                    },
                                                };
                                            function c() {
                                                var e = (function (t, e) {
                                                    var r = t.stream,
                                                        n = i(e());
                                                    return (t.stream = r), n;
                                                })(t, r);
                                                e && s[e.type] && s[e.type](e);
                                            }
                                            return function () {
                                                return c(), i(r());
                                            };
                                        });
                                    var r = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                        n = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                                    function i(t) {
                                        return t && "startTag" === t.type && ((t.unary = r.test(t.tagName) || t.unary), (t.html5Unary = !/\/>$/.test(t.text))), t;
                                    }
                                    function a(t, e) {
                                        var r = e.pop();
                                        t.prepend("</" + r.tagName + ">");
                                    }
                                },
                            ]);
                        }),
                            (t.exports = n());
                    },
                    function (t, e) {
                        "use strict";
                        e.__esModule = !0;
                        var r =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                  };
                        function n(t) {
                            return null != t;
                        }
                        function i(t, e, r) {
                            var n = void 0,
                                i = (t && t.length) || 0;
                            for (n = 0; n < i; n++) e.call(r, t[n], n);
                        }
                        function a(t, e, r) {
                            for (var n in t) t.hasOwnProperty(n) && e.call(r, n, t[n]);
                        }
                        function o(t, e) {
                            return !(!t || ("startTag" !== t.type && "atomicTag" !== t.type) || !("tagName" in t) || !~t.tagName.toLowerCase().indexOf(e));
                        }
                        (e.existy = n),
                            (e.isFunction = function (t) {
                                return "function" == typeof t;
                            }),
                            (e.each = i),
                            (e.eachKey = a),
                            (e.defaults = function (t, e) {
                                return (
                                    (t = t || {}),
                                    a(e, function (e, r) {
                                        n(t[e]) || (t[e] = r);
                                    }),
                                    t
                                );
                            }),
                            (e.toArray = function (t) {
                                try {
                                    return Array.prototype.slice.call(t);
                                } catch (a) {
                                    var e =
                                        ((n = []),
                                        i(t, function (t) {
                                            n.push(t);
                                        }),
                                        { v: n });
                                    if ("object" === (void 0 === e ? "undefined" : r(e))) return e.v;
                                }
                                var n;
                            }),
                            (e.last = function (t) {
                                return t[t.length - 1];
                            }),
                            (e.isTag = o),
                            (e.isScript = function (t) {
                                return o(t, "script");
                            }),
                            (e.isStyle = function (t) {
                                return o(t, "style");
                            });
                    },
                ]);
            }),
                (t.exports = n());
        },
    ]);
    let urlParams = new URLSearchParams(window.location.search);
    let bannerURL = urlParams.get('b');
    if(bannerURL){
        if(isValidURL(bannerURL)) {
            YoAdsOnImagePC.showAds(
                {
                    pid: "63b862c6ab8145d09799b786e15587cb",
                    web: {
                        id: "b8f28f0e65dd47509d931f9850f7cbf6",
                        purl: "http://demo.yomedia.vn/kimyen/full-format-new-mb/index.html",
                        spurl: "http://demo.yomedia.vn/kimyen/full-format-new-mb/index.html",
                        pl: { pls: { min_width: "1", min_height: "1", max_width: "1", max_height: "1" }, plt: "mobile" },
                        cat: [],
                    },
                    camp: {
                        fid: "394a4923b73b4c9883d8033c4c922611",
                        fln: "Yomedia Testing On Image MB June 2020",
                        aid: "04b628115524489bae1dfe64d233f99e",
                        cat: { num_id: "99", category_name: "Arts & Entertainment", trackid: "2016070110000000001", iab: "IAB1" },
                    },
                    trk: {
                        dom: "http://tracking.yomedia.vn",
                        evs: {
                        },
                        ttr: {},
                    },
                    cli: { u: "b1888d205f449571312093d17d3657ed" },
                    advi: "mobile",
                    bnr: {
                        id: "c31e7877bffb4bab8c81fd274ef0f8a4",
                        ctv: { source: `${bannerURL}`, width: "600", height: "650", min_height: "125", content_min_width: "200", content_min_height: "50" },
                        ldp: "https://pinetech.vn",
                    },
                    gtr: [],
                    mdom: "https://demo.yomedia.vn",
                    ddom: "https://delivery.yomedia.vn",
                    aut: "205d31c6-815b-44d5-a889-c57ef834f96c",
                    asc: "async",
                },
                "<script>console.log('T');console.log(\"Test\");</script>"
            );
        } else{
            console.log('Wrong URL, please check again.');
        }
    }else {
        console.log('Empty banner, please add one!');

    }
})();
