/* MOBILE IN IMAGE - NATIVE */
(function () {
    var YoAds = (function (t) {
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
                createElement(t, e = {}) {
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
                        return null;
                    } catch (t) {
                        return null;
                    }
                },
                generateUrlAd(t, e, r, n, i, a = "") {
                    var o = (e = (e = (e = (e = (e = e.replace(/\[timestamp\]/g, Date.now())).replace(/\[yo_pid\]/g, r)).replace(/\[yo_bid\]/g, n.id)).replace(/\[yo_aid\]/g, a)).replace(/\[yo_ref\]/g, encodeURIComponent(i.purl))).indexOf(
                        "//"
                    );
                    if (o < 0 || o > 6) (e = `${t}/${e}?pid=${r}&bid=${n.id}`), a && (e = e + "&aid=" + a);
                    else {
                        var s = "?";
                        e.match(/.*\?((.*)(&?))+/g) && (s = "&"), (e = `${e}${s}pid=${r}&bid=${n.id}`);
                    }
                    if (n.ldp.length > 0) {
                        var c = "?";
                        -1 !== e.indexOf("?") && (c = "&"), (e += `${c}clk=${encodeURIComponent(n.ldp)}`);
                    }
                    return e;
                },
                setRect(t, e, r, n, i) {
                    t.style.clip = `rect(${e}px, ${r}px, ${n}px, ${i}px)`;
                },
                easingYomedia(t, e, r, n) {
                    try {
                        var i = this;
                        if (!e) return;
                        var a = e.style.height;
                        (a = (a = a.replace("px", "")).replace("%", "")), (a = parseFloat(a));
                        var o = r - a,
                            s = o > 0 ? a + Math.ceil(o / 5) : a + Math.floor(o / 5);
                        if (((e.style.height = s + "px"), s <= 0 && "function" == typeof n && n(), (r = r > 0 ? Math.ceil(r) : Math.floor(r)), 0 == o)) return void clearTimeout(t);
                        t = setTimeout(function () {
                            i.easingYomedia(t, e, r, n);
                        }, 20);
                    } catch (e) {
                        "function" == typeof n && n();
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
                renderBackup(t, e, r) {
                    if (r) {
                        var n = this.createElement("div", { id: "yomedia-backup-" + t }),
                            i = document.getElementById("yomedia-delivery-" + t);
                        i || (i = this.getCurrentScript()), this.insertAfter(n, i), r && (r.replace(/\[yo_cb\]/g, Date.now()), postscribe("#yomedia-backup-" + t, r.replace(/\[yo_cb\]/g, Date.now()).replace(/\[yo_page_url\]/g, e.purl)));
                    }
                },
                insertAdsByConfig(t, e, r) {
                    var n,
                        i = "after",
                        a = null;
                    if ("object" == typeof e && "object" == typeof e.pl && "object" == typeof e.pl.pls && void 0 !== e.pl.pls.selector) {
                        var o = e.pl.pls.selector;
                        (n = document.querySelector(o)), (i = e.pl.pls.pst_type ? e.pl.pls.pst_type : "after"), (a = e.pl.pls.pst_value ? e.pl.pls.pst_value : null);
                    }
                    switch ((n || ((n = document.getElementById("yomedia-delivery-" + t) ? document.getElementById("yomedia-delivery-" + t) : this.getCurrentScript()), (i = "after")), i)) {
                        case "after":
                            this.insertAfter(r, n);
                            break;
                        case "before":
                            n.parentNode ? n.parentNode.insertBefore(r, n) : n.appendChild(r);
                            break;
                        case "first":
                            n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r);
                            break;
                        case "middle":
                            this.findAndInsertPosition(r, n, 0, n.clientHeight, 50);
                            break;
                        case "last":
                            n.appendChild(r);
                            break;
                        case "content":
                            null !== a ? this.findAndInsertPosition(r, n, 0, n.clientHeight, parseInt(a)) : this.findAndInsertPosition(r, n, 0, n.clientHeight, 50);
                    }
                },
                findAndInsertPosition(t, e, r, n, i) {
                    var a,
                        o = e.childNodes;
                    if (o.length > 0) {
                        for (var s = 0; s < o.length; s++) {
                            var c = o[s];
                            if (c.clientHeight > 0 && (((r += c.clientHeight) + c.clientHeight) / n) * 100 > i) {
                                a = c;
                                break;
                            }
                        }
                        a || (a = o[Math.ceil(o.length / 2)]), a.parentNode ? this.insertAfter(t, a) : a.appendChild(t);
                    } else e.appendChild(t);
                },
            };
        },
        function (t, e, r) {
            const n = r(0),
                i = r(2).default,
                a = r(4);
            t.exports = {
                showAds(t, e) {
                    var r = this,
                        n = !1,
                        i = 0;
                    const { pid: a, bnr: o, web: s } = t;
                    var c = setInterval(function () {
                        try {
                            if (!n) {
                                var l;
                                if ("object" == typeof s && "object" == typeof s.pl && void 0 !== s.pl.pls) {
                                    var u = s.pl.pls.selector;
                                    l = document.querySelector(u);
                                }
                                if ((l || (l = document.body), l)) {
                                    for (var p, d = l.querySelectorAll("img"), h = 0; h < d.length; h++) {
                                        let t = d[h],
                                            e = getComputedStyle(t);
                                        if (!0 === t.complete && "none" != e.display && "hidden" != e.visibility && e.opacity > 0 && t.clientWidth >= o.ctv.content_min_width && t.clientHeight >= o.ctv.content_min_height) {
                                            p = t;
                                            break;
                                        }
                                    }
                                    p && ((n = !0), p.parentNode && "A" === p.parentNode.nodeName && (p = p.parentNode), r.renderAds(p, t, e), clearInterval(c));
                                }
                            }
                            (i += 10) > 5e3 && !n && (r.renderBackup(a, s, e), clearInterval(c));
                        } catch (t) {
                            console.log(t);
                        }
                    }, 10);
                },
                renderAds(t, e, r) {
                    const { pid: a, bnr: o, trk: s, cli: c, web: l, camp: u, advi: p, mdom: d } = e;
                    var h = getComputedStyle(t),
                        f = n.createElement("div", { id: "zones-ads-" + a, style: `position: relative; display: inline-block; width: auto; height: auto; margin: ${h.margin || "auto"}; padding: ${h.padding || "0px"};` });
                    h.maxWidth && (f.style.maxWidth = h.maxWidth);
                    var m = n.createElement("div", { id: "wrapper-ads-" + a, style: `position: relative; display: inline-block; width: ${t.clientWidth}px; height: auto; margin: 0px;` }),
                        g = t.cloneNode(!0);
                    f.appendChild(g), f.appendChild(m);
                    var y = {
                            src: t.clientHeight >= t.clientWidth && void 0 !== o.ctv.portrait_source && o.ctv.portrait_source.length > 0 ? n.generateUrlAd(d, o.ctv.portrait_source, a, o, l) : n.generateUrlAd(d, o.ctv.source, a, o, l),
                            id: a,
                            style: `width: ${t.clientWidth}px; height: ${t.clientHeight}px; border: none; z-index: 2; position: absolute; margin: auto; left: 0px; right: 0px; bottom: 0px;`,
                        },
                        v = n.createElement("iframe", y);
                    m.appendChild(v), t.parentNode.replaceChild(f, t);
                    const { dom: _, evs: T, ttr: k } = s;
                    var b = new i(_, p, T, k, c, l, u, o, { element: v, duration: 1e3, margin: "0px" });
                    n.addEventListenerHandle(v, "load", function () {
                        (v.style.height = Math.max(f.clientHeight, g.clientHeight) + "px"), (v.style.width = g.clientWidth + "px"), b.impression(), b.viewability();
                    }),
                        this.processedAds(a, b, o);
                },
                processedAds(t, e, r) {
                    const i = this;
                    n.addEventListenerHandle(window, "message", function (a) {
                        try {
                            var o = n.parseMessage(a);
                            if (o.pid == t && o.bid == r.id)
                                switch (o.act) {
                                    case "yomedia_close_ads":
                                        i.closeAds(t);
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
                closeAds(t) {
                    document.getElementById(t) && ((document.getElementById(t).style.display = "none"), (document.getElementById(t).style.width = "0px;"), (document.getElementById(t).style.height = "0px;")),
                        document.getElementById("wrapper-ads-" + t) && (document.getElementById("view-ads-" + t).style.display = "none");
                },
            };
        },
        function (t, e, r) {
            "use strict";
            r.r(e);
            const n = r(0),
                i = r(3).default;
            e.default = class extends i {
                constructor(t, e, r, n = {}, i = {}, a = {}, o = {}, s = {}, c = {}) {
                    var { element: l, duration: u, margin: p } = c;
                    super(l, u || 100, p || "0px"),
                        (this.domain = t),
                        (this.adview = e),
                        (this.events = r),
                        (this.third_party_trackings = n),
                        (this.client = i),
                        (this.website = a),
                        (this.campaign = o),
                        (this.banner = s),
                        (this.mapping_events = {
                            impression: "",
                            start: "",
                            firstQuartile: "",
                            midpoint: "",
                            thirdQuartile: "",
                            complete: "",
                            viewable: "",
                            click: "",
                            mute: "",
                            unmute: "",
                            pause: "",
                            play: "",
                            resume: "",
                            skip: "",
                        });
                }
                generateUrl(t) {
                    if (void 0 !== this.mapping_events[t]) {
                        let e = this.mapping_events[t];
                        if ("object" == typeof this.events && void 0 !== this.events[e]) {
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
                    t && this.executeTracking(t), this.executeTracking3rd("click"), this.element && !1 === this.is_viewable && ((this.is_viewable = !0), this.viewable());
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
                viewability() {
                    this.element && !1 === this.is_viewable && this.execute(this.viewable.bind(this));
                }
            };
        },
        function (t, e, r) {
            "use strict";
            r.r(e);
            e.default = class {
                constructor(t, e = 1e3, r = "0px") {
                    (this.element = t), (this.duration = e), (this.margin = r), (this.timer = 0), (this.interval = null), (this.interval_time = 10), (this.is_viewable = !1), (this.target = null);
                }
                execute(t) {
                    let e = [];
                    for (let t = 0; t <= 100; t++) e.push(t / 100);
                    var r = this;
                    new IntersectionObserver(
                        function (e) {
                            r.checkViewability(e, t);
                        },
                        { root: null, rootMargin: r.margin, threshold: e }
                    ).observe(this.element);
                }
                checkViewability(t, e) {
                    var r = this;
                    t.forEach(function (t) {
                        t.isIntersecting &&
                            (t.intersectionRatio >= 0.5
                                ? ((r.target = t.target),
                                  r.interval ||
                                      (r.interval = setInterval(function () {
                                          (r.timer += r.interval_time), r.element === r.target && r.timer >= r.duration && (r.is_viewable || ((r.is_viewable = !0), e(), clearInterval(r.interval)));
                                      }, r.interval_time)))
                                : ((r.target = null), (r.timer = 0), clearInterval(r.interval), (r.interval = null)));
                    });
                }
            };
        },
        function (t, e, r) {
            /**
             * @file postscribe
             * @description Asynchronously write javascript, even with document.write.
             * @version v2.0.8
             * @see {@link https://krux.github.io/postscribe}
             * @license MIT
             * @author Derek Brans
             * @copyright 2016 Krux Digital, Inc
             */
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
                            l = [],
                            u = null;
                        function p() {
                            var t = l.shift();
                            if (t) {
                                var e = a.last(t);
                                e.afterDequeue(), (t.stream = d.apply(void 0, t)), e.afterStreamStart();
                            }
                        }
                        function d(t, e, r) {
                            ((u = new i.default(t, r)).id = c++), (u.name = r.name || u.id), (h.streams[u.name] = u);
                            var a = t.ownerDocument,
                                s = { close: a.close, open: a.open, write: a.write, writeln: a.writeln };
                            function l(t) {
                                (t = r.beforeWrite(t)), u.write(t), r.afterWrite(t);
                            }
                            n(a, {
                                close: o,
                                open: o,
                                write: function () {
                                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                                    return l(e.join(""));
                                },
                                writeln: function () {
                                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                                    return l(e.join("") + "\n");
                                },
                            });
                            var d = u.win.onerror || o;
                            return (
                                (u.win.onerror = function (t, e, n) {
                                    r.error({ msg: t + " - " + e + ": " + n }), d.apply(u.win, [t, e, n]);
                                }),
                                u.write(e, function () {
                                    n(a, s), (u.win.onerror = d), r.done(), (u = null), p();
                                }),
                                u
                            );
                        }
                        function h(t, e, r) {
                            if (a.isFunction(r)) r = { done: r };
                            else if ("clear" === r) return (l = []), (u = null), void (c = 0);
                            r = a.defaults(r, s);
                            var n = [(t = /^#/.test(t) ? window.document.getElementById(t.substr(1)) : t.jquery ? t[0] : t), e, r];
                            return (
                                (t.postscribe = {
                                    cancel: function () {
                                        n.stream ? n.stream.abort() : (n[1] = o);
                                    },
                                }),
                                r.beforeEnqueue(n),
                                l.push(n),
                                u || p(),
                                t.postscribe
                            );
                        }
                        n(h, { streams: {}, queue: l, WriteStream: i.default });
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
                        var l = (function () {
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
                                                var l = e++;
                                                n.push(c.replace(/(\/?>)/, " data-ps-id=" + l + " $1")),
                                                    "ps-script" !== s.attrs.id && "ps-style" !== s.attrs.id && i.push("atomicTag" === s.type ? "" : "<" + s.tagName + " data-ps-proxyof=" + l + (s.unary ? " />" : ">"));
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
                        e.default = l;
                    },
                    function (t, e, r) {
                        /**
                         * @file prescribe
                         * @description Tiny, forgiving HTML parser
                         * @version vundefined
                         * @see {@link https://github.com/krux/prescribe/}
                         * @license MIT
                         * @author Derek Brans
                         * @copyright 2016 Krux Digital, Inc
                         */
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
                                    var l = { comment: /^<!--/, endTag: /^<\//, atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i, startTag: /^</, chars: /^[^<]/ },
                                        u = (function () {
                                            function t() {
                                                var e = this,
                                                    r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                c(this, t), (this.stream = r);
                                                var o = !1,
                                                    s = {};
                                                for (var l in n) n.hasOwnProperty(l) && (i.autoFix && (s[l + "Fix"] = !0), (o = o || s[l + "Fix"]));
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
                                                    for (var t in l)
                                                        if (l.hasOwnProperty(t) && l[t].test(this.stream)) {
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
                                    for (var p in ((e.default = u),
                                    (u.tokenToString = function (t) {
                                        return t.toString();
                                    }),
                                    (u.escapeAttributes = function (t) {
                                        var e = {};
                                        for (var r in t) t.hasOwnProperty(r) && (e[r] = (0, o.escapeQuotes)(t[r], null));
                                        return e;
                                    }),
                                    (u.supports = n),
                                    n))
                                        n.hasOwnProperty(p) && (u.browserHasFlaw = u.browserHasFlaw || (!n[p] && p));
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
    var urlParams = new URLSearchParams(window.location.search);
    var bannerURL = urlParams.get('b'); 
    var domainURL = urlParams.get('c');
    let log = {
        style:'color: #FFFFFF; font-size: 12px; padding: 5px;',
        info:(msg)=>{
            console.log(`%c${msg}`,`background: #5DADE2; ${log.style}`)
        },
        success:(msg)=>{
            console.log(`%c${msg}`,`background: #008000; ${log.style}`)
        },
    }
    
    if(domainURL == null || domainURL == 'null') {
        domainURL = 'demo';
    }
    if(bannerURL){
        log.success(`Banner source: https://${domainURL}.yomedia.vn/${bannerURL}`);
        YoAds.showAds(
            {
                pid: "c9ebf62ffb614239b0353f4ec9185d23",
                aid: "72ad2d5120034aceb51de63c8d4fc043",
                web: {
                    id: "b8f28f0e65dd47509d931f9850f7cbf6",
                    purl: "https://demo.yomedia.vn/",
                    spurl: "https://demo.yomedia.vn/",
                    pl: { pls: { min_width: "1", min_height: "1", max_width: "1", max_height: "1", selector: "#newsDetail > div > main > div > div > div.post_details.stickydetails > div > div" }, plt: "display" },
                    cat: [
                        
                    ],
                },
                camp: {
                },
                trk: {
                    dom: "",
                    evs: {
                        
                    },
                    ttr: {},
                },
                cli: { u: "83d157703201c2c829975747e78db277" },
                advi: "display",
                bnr: {
                    id: "63f12b2efbf34818a40687efd6fca920",
                    ctv: { source: `https://${domainURL}.yomedia.vn/${bannerURL}`, portrait_source: "", content_min_width: "150", content_min_height: "150" },
                    ldp: "https://yomedia.vn/",
                },
            },
            ""
        );
    }
})();
