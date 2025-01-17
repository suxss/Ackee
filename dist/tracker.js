!function(e) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).ackeeTracker = e()
    }
}((function() {
    return function e(t, n, r) {
        function i(a, l) {
            if (!n[a]) {
                if (!t[a]) {
                    var s = "function" == typeof require && require;
                    if (!l && s)
                        return s(a, !0);
                    if (o)
                        return o(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND",
                    u
                }
                var c = n[a] = {
                    exports: {}
                };
                t[a][0].call(c.exports, (function(e) {
                    return i(t[a][1][e] || e)
                }
                ), c, c.exports, e, t, n, r)
            }
            return n[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < r.length; a++)
            i(r[a]);
        return i
    }({
        1: [function(e, t, n) {
            (function(e) {
                (function() {
                    (function() {
                        "use strict";
                        var r = {
                            function: !0,
                            object: !0
                        }
                          , i = r[typeof window] && window || this
                          , o = r[typeof n] && n
                          , a = r[typeof t] && t && !t.nodeType && t
                          , l = o && a && "object" == typeof e && e;
                        !l || l.global !== l && l.window !== l && l.self !== l || (i = l);
                        var s = Math.pow(2, 53) - 1
                          , u = /\bOpera/
                          , c = Object.prototype
                          , d = c.hasOwnProperty
                          , b = c.toString;
                        function p(e) {
                            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
                        }
                        function f(e) {
                            return e = x(e),
                            /^(?:webOS|i(?:OS|P))/.test(e) ? e : p(e)
                        }
                        function h(e, t) {
                            for (var n in e)
                                d.call(e, n) && t(e[n], n, e)
                        }
                        function g(e) {
                            return null == e ? p(e) : b.call(e).slice(8, -1)
                        }
                        function S(e) {
                            return String(e).replace(/([ -])(?!$)/g, "$1?")
                        }
                        function m(e, t) {
                            var n = null;
                            return function(e, t) {
                                var n = -1
                                  , r = e ? e.length : 0;
                                if ("number" == typeof r && r > -1 && r <= s)
                                    for (; ++n < r; )
                                        t(e[n], n, e);
                                else
                                    h(e, t)
                            }(e, (function(r, i) {
                                n = t(n, r, i, e)
                            }
                            )),
                            n
                        }
                        function x(e) {
                            return String(e).replace(/^ +| +$/g, "")
                        }
                        var y = function e(t) {
                            var n = i
                              , r = t && "object" == typeof t && "String" != g(t);
                            r && (n = t,
                            t = null);
                            var o = n.navigator || {}
                              , a = o.userAgent || "";
                            t || (t = a);
                            var l, s, c, d, p, y = r ? !!o.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(b.toString()), v = "Object", w = r ? v : "ScriptBridgingProxyObject", O = r ? v : "Environment", E = r && n.java ? "JavaPackage" : g(n.java), M = r ? v : "RuntimeObject", P = /\bJava/.test(E) && n.java, I = P && g(n.environment) == O, A = P ? "a" : "α", C = P ? "b" : "β", k = n.document || {}, R = n.operamini || n.opera, B = u.test(B = r && R ? R["[[Class]]"] : g(R)) ? B : R = null, W = t, $ = [], T = null, F = t == a, j = F && R && "function" == typeof R.version && R.version(), G = m([{
                                label: "EdgeHTML",
                                pattern: "Edge"
                            }, "Trident", {
                                label: "WebKit",
                                pattern: "AppleWebKit"
                            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], (function(e, n) {
                                return e || RegExp("\\b" + (n.pattern || S(n)) + "\\b", "i").exec(t) && (n.label || n)
                            }
                            )), N = function(e) {
                                return m(e, (function(e, n) {
                                    return e || RegExp("\\b" + (n.pattern || S(n)) + "\\b", "i").exec(t) && (n.label || n)
                                }
                                ))
                            }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                                label: "Microsoft Edge",
                                pattern: "(?:Edge|Edg|EdgA|EdgiOS)"
                            }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                                label: "Samsung Internet",
                                pattern: "SamsungBrowser"
                            }, "SeaMonkey", {
                                label: "Silk",
                                pattern: "(?:Cloud9|Silk-Accelerated)"
                            }, "Sleipnir", "SlimBrowser", {
                                label: "SRWare Iron",
                                pattern: "Iron"
                            }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", {
                                label: "Yandex Browser",
                                pattern: "YaBrowser"
                            }, {
                                label: "UC Browser",
                                pattern: "UCBrowser"
                            }, "Opera Mini", {
                                label: "Opera Mini",
                                pattern: "OPiOS"
                            }, "Opera", {
                                label: "Opera",
                                pattern: "OPR"
                            }, "Chromium", "Chrome", {
                                label: "Chrome",
                                pattern: "(?:HeadlessChrome)"
                            }, {
                                label: "Chrome Mobile",
                                pattern: "(?:CriOS|CrMo)"
                            }, {
                                label: "Firefox",
                                pattern: "(?:Firefox|Minefield)"
                            }, {
                                label: "Firefox for iOS",
                                pattern: "FxiOS"
                            }, {
                                label: "IE",
                                pattern: "IEMobile"
                            }, {
                                label: "IE",
                                pattern: "MSIE"
                            }, "Safari"]), X = L([{
                                label: "BlackBerry",
                                pattern: "BB10"
                            }, "BlackBerry", {
                                label: "Galaxy S",
                                pattern: "GT-I9000"
                            }, {
                                label: "Galaxy S2",
                                pattern: "GT-I9100"
                            }, {
                                label: "Galaxy S3",
                                pattern: "GT-I9300"
                            }, {
                                label: "Galaxy S4",
                                pattern: "GT-I9500"
                            }, {
                                label: "Galaxy S5",
                                pattern: "SM-G900"
                            }, {
                                label: "Galaxy S6",
                                pattern: "SM-G920"
                            }, {
                                label: "Galaxy S6 Edge",
                                pattern: "SM-G925"
                            }, {
                                label: "Galaxy S7",
                                pattern: "SM-G930"
                            }, {
                                label: "Galaxy S7 Edge",
                                pattern: "SM-G935"
                            }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                                label: "Kindle Fire",
                                pattern: "(?:Cloud9|Silk-Accelerated)"
                            }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                                label: "Wii U",
                                pattern: "WiiU"
                            }, "Wii", "Xbox One", {
                                label: "Xbox 360",
                                pattern: "Xbox"
                            }, "Xoom"]), D = function(e) {
                                return m(e, (function(e, n, r) {
                                    return e || (n[X] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(X)] || RegExp("\\b" + S(r) + "(?:\\b|\\w*\\d)", "i").exec(t)) && r
                                }
                                ))
                            }({
                                Apple: {
                                    iPad: 1,
                                    iPhone: 1,
                                    iPod: 1
                                },
                                Alcatel: {},
                                Archos: {},
                                Amazon: {
                                    Kindle: 1,
                                    "Kindle Fire": 1
                                },
                                Asus: {
                                    Transformer: 1
                                },
                                "Barnes & Noble": {
                                    Nook: 1
                                },
                                BlackBerry: {
                                    PlayBook: 1
                                },
                                Google: {
                                    "Google TV": 1,
                                    Nexus: 1
                                },
                                HP: {
                                    TouchPad: 1
                                },
                                HTC: {},
                                Huawei: {},
                                Lenovo: {},
                                LG: {},
                                Microsoft: {
                                    Xbox: 1,
                                    "Xbox One": 1
                                },
                                Motorola: {
                                    Xoom: 1
                                },
                                Nintendo: {
                                    "Wii U": 1,
                                    Wii: 1
                                },
                                Nokia: {
                                    Lumia: 1
                                },
                                Oppo: {},
                                Samsung: {
                                    "Galaxy S": 1,
                                    "Galaxy S2": 1,
                                    "Galaxy S3": 1,
                                    "Galaxy S4": 1
                                },
                                Sony: {
                                    PlayStation: 1,
                                    "PlayStation Vita": 1
                                },
                                Xiaomi: {
                                    Mi: 1,
                                    Redmi: 1
                                }
                            }), K = function(e) {
                                return m(e, (function(e, n) {
                                    var r = n.pattern || S(n);
                                    return !e && (e = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t)) && (e = function(e, t, n) {
                                        var r = {
                                            "10.0": "10",
                                            6.4: "10 Technical Preview",
                                            6.3: "8.1",
                                            6.2: "8",
                                            6.1: "Server 2008 R2 / 7",
                                            "6.0": "Server 2008 / Vista",
                                            5.2: "Server 2003 / XP 64-bit",
                                            5.1: "XP",
                                            5.01: "2000 SP1",
                                            "5.0": "2000",
                                            "4.0": "NT",
                                            "4.90": "ME"
                                        };
                                        return t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r),
                                        e = String(e),
                                        t && n && (e = e.replace(RegExp(t, "i"), n)),
                                        f(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                                    }(e, r, n.label || n)),
                                    e
                                }
                                ))
                            }(["Windows Phone", "KaiOS", "Android", "CentOS", {
                                label: "Chrome OS",
                                pattern: "CrOS"
                            }, "Debian", {
                                label: "DragonFly BSD",
                                pattern: "DragonFly"
                            }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
                            function L(e) {
                                return m(e, (function(e, n) {
                                    var r = n.pattern || S(n);
                                    return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]),
                                    n = n.label || n,
                                    e = f(e[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))),
                                    e
                                }
                                ))
                            }
                            function V(e) {
                                return m(e, (function(e, n) {
                                    return e || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
                                }
                                ))
                            }
                            if (G && (G = [G]),
                            /\bAndroid\b/.test(K) && !X && (l = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t)) && (X = x(l[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null),
                            D && !X ? X = L([D]) : D && X && (X = X.replace(RegExp("^(" + S(D) + ")[-_.\\s]", "i"), D + " ").replace(RegExp("^(" + S(D) + ")[-_.]?(\\w)", "i"), D + " $2")),
                            (l = /\bGoogle TV\b/.exec(X)) && (X = l[0]),
                            /\bSimulator\b/i.test(t) && (X = (X ? X + " " : "") + "Simulator"),
                            "Opera Mini" == N && /\bOPiOS\b/.test(t) && $.push("running in Turbo/Uncompressed mode"),
                            "IE" == N && /\blike iPhone OS\b/.test(t) ? (D = (l = e(t.replace(/like iPhone OS/, ""))).manufacturer,
                            X = l.product) : /^iP/.test(X) ? (N || (N = "Safari"),
                            K = "iOS" + ((l = / OS ([\d_]+)/i.exec(t)) ? " " + l[1].replace(/_/g, ".") : "")) : "Konqueror" == N && /^Linux\b/i.test(K) ? K = "Kubuntu" : D && "Google" != D && (/Chrome/.test(N) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(X)) || /\bAndroid\b/.test(K) && /^Chrome/.test(N) && /\bVersion\//i.test(t) ? (N = "Android Browser",
                            K = /\bAndroid\b/.test(K) ? K : "Android") : "Silk" == N ? (/\bMobi/i.test(t) || (K = "Android",
                            $.unshift("desktop mode")),
                            /Accelerated *= *true/i.test(t) && $.unshift("accelerated")) : "UC Browser" == N && /\bUCWEB\b/.test(t) ? $.push("speed mode") : "PaleMoon" == N && (l = /\bFirefox\/([\d.]+)\b/.exec(t)) ? $.push("identifying as Firefox " + l[1]) : "Firefox" == N && (l = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (K || (K = "Firefox OS"),
                            X || (X = l[1])) : !N || (l = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(N)) ? (N && !X && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(l + "/") + 8)) && (N = null),
                            (l = X || D || K) && (X || D || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(K)) && (N = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(K) ? K : l) + " Browser")) : "Electron" == N && (l = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && $.push("Chromium " + l),
                            j || (j = V(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", S(N), "(?:Firefox|Minefield|NetFront)"])),
                            (l = ("iCab" == G && parseFloat(j) > 3 ? "WebKit" : /\bOpera\b/.test(N) && (/\bOPR\b/.test(t) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(G) && "WebKit" || !G && /\bMSIE\b/i.test(t) && ("Mac OS" == K ? "Tasman" : "Trident") || "WebKit" == G && /\bPlayStation\b(?! Vita\b)/i.test(N) && "NetFront") && (G = [l]),
                            "IE" == N && (l = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (N += " Mobile",
                            K = "Windows Phone " + (/\+$/.test(l) ? l : l + ".x"),
                            $.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (N = "IE Mobile",
                            K = "Windows Phone 8.x",
                            $.unshift("desktop mode"),
                            j || (j = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != N && "Trident" == G && (l = /\brv:([\d.]+)/.exec(t)) && (N && $.push("identifying as " + N + (j ? " " + j : "")),
                            N = "IE",
                            j = l[1]),
                            F) {
                                if (d = "global",
                                p = null != (c = n) ? typeof c[d] : "number",
                                /^(?:boolean|number|string|undefined)$/.test(p) || "object" == p && !c[d])
                                    g(l = n.runtime) == w ? (N = "Adobe AIR",
                                    K = l.flash.system.Capabilities.os) : g(l = n.phantom) == M ? (N = "PhantomJS",
                                    j = (l = l.version || null) && l.major + "." + l.minor + "." + l.patch) : "number" == typeof k.documentMode && (l = /\bTrident\/(\d+)/i.exec(t)) ? (j = [j, k.documentMode],
                                    (l = +l[1] + 4) != j[1] && ($.push("IE " + j[1] + " mode"),
                                    G && (G[1] = ""),
                                    j[1] = l),
                                    j = "IE" == N ? String(j[1].toFixed(1)) : j[0]) : "number" == typeof k.documentMode && /^(?:Chrome|Firefox)\b/.test(N) && ($.push("masking as " + N + " " + j),
                                    N = "IE",
                                    j = "11.0",
                                    G = ["Trident"],
                                    K = "Windows");
                                else if (P && (W = (l = P.lang.System).getProperty("os.arch"),
                                K = K || l.getProperty("os.name") + " " + l.getProperty("os.version")),
                                I) {
                                    try {
                                        j = n.require("ringo/engine").version.join("."),
                                        N = "RingoJS"
                                    } catch (e) {
                                        (l = n.system) && l.global.system == n.system && (N = "Narwhal",
                                        K || (K = l[0].os || null))
                                    }
                                    N || (N = "Rhino")
                                } else
                                    "object" == typeof n.process && !n.process.browser && (l = n.process) && ("object" == typeof l.versions && ("string" == typeof l.versions.electron ? ($.push("Node " + l.versions.node),
                                    N = "Electron",
                                    j = l.versions.electron) : "string" == typeof l.versions.nw && ($.push("Chromium " + j, "Node " + l.versions.node),
                                    N = "NW.js",
                                    j = l.versions.nw)),
                                    N || (N = "Node.js",
                                    W = l.arch,
                                    K = l.platform,
                                    j = (j = /[\d.]+/.exec(l.version)) ? j[0] : null));
                                K = K && f(K)
                            }
                            if (j && (l = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(j) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (F && o.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (T = /b/i.test(l) ? "beta" : "alpha",
                            j = j.replace(RegExp(l + "\\+?$"), "") + ("beta" == T ? C : A) + (/\d+\+?/.exec(l) || "")),
                            "Fennec" == N || "Firefox" == N && /\b(?:Android|Firefox OS|KaiOS)\b/.test(K))
                                N = "Firefox Mobile";
                            else if ("Maxthon" == N && j)
                                j = j.replace(/\.[\d.]+/, ".x");
                            else if (/\bXbox\b/i.test(X))
                                "Xbox 360" == X && (K = null),
                                "Xbox 360" == X && /\bIEMobile\b/.test(t) && $.unshift("mobile mode");
                            else if (!/^(?:Chrome|IE|Opera)$/.test(N) && (!N || X || /Browser|Mobi/.test(N)) || "Windows CE" != K && !/Mobi/i.test(t))
                                if ("IE" == N && F)
                                    try {
                                        null === n.external && $.unshift("platform preview")
                                    } catch (e) {
                                        $.unshift("embedded")
                                    }
                                else
                                    (/\bBlackBerry\b/.test(X) || /\bBB10\b/.test(t)) && (l = (RegExp(X.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || j) ? (K = ((l = [l, /BB10/.test(t)])[1] ? (X = null,
                                    D = "BlackBerry") : "Device Software") + " " + l[0],
                                    j = null) : this != h && "Wii" != X && (F && R || /Opera/.test(N) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == N && /\bOS X (?:\d+\.){2,}/.test(K) || "IE" == N && (K && !/^Win/.test(K) && j > 5.5 || /\bWindows XP\b/.test(K) && j > 8 || 8 == j && !/\bTrident\b/.test(t))) && !u.test(l = e.call(h, t.replace(u, "") + ";")) && l.name && (l = "ing as " + l.name + ((l = l.version) ? " " + l : ""),
                                    u.test(N) ? (/\bIE\b/.test(l) && "Mac OS" == K && (K = null),
                                    l = "identify" + l) : (l = "mask" + l,
                                    N = B ? f(B.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera",
                                    /\bIE\b/.test(l) && (K = null),
                                    F || (j = null)),
                                    G = ["Presto"],
                                    $.push(l));
                            else
                                N += " Mobile";
                            (l = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (l = [parseFloat(l.replace(/\.(\d)$/, ".0$1")), l],
                            "Safari" == N && "+" == l[1].slice(-1) ? (N = "WebKit Nightly",
                            T = "alpha",
                            j = l[1].slice(0, -1)) : j != l[1] && j != (l[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1]) || (j = null),
                            l[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t) || 0)[1],
                            537.36 == l[0] && 537.36 == l[2] && parseFloat(l[1]) >= 28 && "WebKit" == G && (G = ["Blink"]),
                            F && (y || l[1]) ? (G && (G[1] = "like Chrome"),
                            l = l[1] || ((l = l[0]) < 530 ? 1 : l < 532 ? 2 : l < 532.05 ? 3 : l < 533 ? 4 : l < 534.03 ? 5 : l < 534.07 ? 6 : l < 534.1 ? 7 : l < 534.13 ? 8 : l < 534.16 ? 9 : l < 534.24 ? 10 : l < 534.3 ? 11 : l < 535.01 ? 12 : l < 535.02 ? "13+" : l < 535.07 ? 15 : l < 535.11 ? 16 : l < 535.19 ? 17 : l < 536.05 ? 18 : l < 536.1 ? 19 : l < 537.01 ? 20 : l < 537.11 ? "21+" : l < 537.13 ? 23 : l < 537.18 ? 24 : l < 537.24 ? 25 : l < 537.36 ? 26 : "Blink" != G ? "27" : "28")) : (G && (G[1] = "like Safari"),
                            l = (l = l[0]) < 400 ? 1 : l < 500 ? 2 : l < 526 ? 3 : l < 533 ? 4 : l < 534 ? "4+" : l < 535 ? 5 : l < 537 ? 6 : l < 538 ? 7 : l < 601 ? 8 : l < 602 ? 9 : l < 604 ? 10 : l < 606 ? 11 : l < 608 ? 12 : "12"),
                            G && (G[1] += " " + (l += "number" == typeof l ? ".x" : /[.+]/.test(l) ? "" : "+")),
                            "Safari" == N && (!j || parseInt(j) > 45) ? j = l : "Chrome" == N && /\bHeadlessChrome/i.test(t) && $.unshift("headless")),
                            "Opera" == N && (l = /\bzbov|zvav$/.exec(K)) ? (N += " ",
                            $.unshift("desktop mode"),
                            "zvav" == l ? (N += "Mini",
                            j = null) : N += "Mobile",
                            K = K.replace(RegExp(" *" + l + "$"), "")) : "Safari" == N && /\bChrome\b/.exec(G && G[1]) ? ($.unshift("desktop mode"),
                            N = "Chrome Mobile",
                            j = null,
                            /\bOS X\b/.test(K) ? (D = "Apple",
                            K = "iOS 4.3+") : K = null) : /\bSRWare Iron\b/.test(N) && !j && (j = V("Chrome")),
                            j && 0 == j.indexOf(l = /[\d.]+$/.exec(K)) && t.indexOf("/" + l + "-") > -1 && (K = x(K.replace(l, ""))),
                            K && -1 != K.indexOf(N) && !RegExp(N + " OS").test(K) && (K = K.replace(RegExp(" *" + S(N) + " *"), "")),
                            G && !/\b(?:Avant|Nook)\b/.test(N) && (/Browser|Lunascape|Maxthon/.test(N) || "Safari" != N && /^iOS/.test(K) && /\bSafari\b/.test(G[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(N) && G[1]) && (l = G[G.length - 1]) && $.push(l),
                            $.length && ($ = ["(" + $.join("; ") + ")"]),
                            D && X && X.indexOf(D) < 0 && $.push("on " + D),
                            X && $.push((/^on /.test($[$.length - 1]) ? "" : "on ") + X),
                            K && (l = / ([\d.+]+)$/.exec(K),
                            s = l && "/" == K.charAt(K.length - l[0].length - 1),
                            K = {
                                architecture: 32,
                                family: l && !s ? K.replace(l[0], "") : K,
                                version: l ? l[1] : null,
                                toString: function() {
                                    var e = this.version;
                                    return this.family + (e && !s ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                                }
                            }),
                            (l = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(W)) && !/\bi686\b/i.test(W) ? (K && (K.architecture = 64,
                            K.family = K.family.replace(RegExp(" *" + l), "")),
                            N && (/\bWOW64\b/i.test(t) || F && /\w(?:86|32)$/.test(o.cpuClass || o.platform) && !/\bWin64; x64\b/i.test(t)) && $.unshift("32-bit")) : K && /^OS X/.test(K.family) && "Chrome" == N && parseFloat(j) >= 39 && (K.architecture = 64),
                            t || (t = null);
                            var _ = {};
                            return _.description = t,
                            _.layout = G && G[0],
                            _.manufacturer = D,
                            _.name = N,
                            _.prerelease = T,
                            _.product = X,
                            _.ua = t,
                            _.version = N && j,
                            _.os = K || {
                                architecture: null,
                                family: null,
                                version: null,
                                toString: function() {
                                    return "null"
                                }
                            },
                            _.parse = e,
                            _.toString = function() {
                                return this.description || ""
                            }
                            ,
                            _.version && $.unshift(j),
                            _.name && $.unshift(N),
                            K && N && (K != String(K).split(" ")[0] || K != N.split(" ")[0] && !X) && $.push(X ? "(" + K + ")" : "on " + K),
                            $.length && (_.description = $.join(" ")),
                            _
                        }();
                        o && a ? h(y, (function(e, t) {
                            o[t] = e
                        }
                        )) : i.platform = y
                    }
                    ).call(this)
                }
                ).call(this)
            }
            ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        2: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.create = n.detect = n.attributes = void 0;
            var r, i = (r = e("platform")) && r.__esModule ? r : {
                default: r
            };
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        l(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var s = "undefined" != typeof window
              , u = function(e) {
                return "88888888-8888-8888-8888-888888888888" === e
            }
              , c = function() {
                return "hidden" === document.visibilityState
            }
              , d = function() {
                var e = (location.search.split("source=")[1] || "").split("&")[0];
                return "" === e ? void 0 : e
            }
              , b = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = {
                    siteLocation: window.location.href,
                    siteReferrer: document.referrer,
                    source: d()
                }
                  , n = {
                    siteLanguage: (navigator.language || navigator.userLanguage).substr(0, 2),
                    screenWidth: screen.width,
                    screenHeight: screen.height,
                    screenColorDepth: screen.colorDepth,
                    deviceName: i.default.product,
                    deviceManufacturer: i.default.manufacturer,
                    osName: i.default.os.family,
                    osVersion: i.default.os.version,
                    browserName: i.default.name,
                    browserVersion: i.default.version,
                    browserWidth: window.outerWidth,
                    browserHeight: window.outerHeight
                };
                return a(a({}, t), !0 === e ? n : {})
            };
            n.attributes = b;
            var p = function(e, t) {
                return {
                    query: "\n\t\t\tmutation createRecord($domainId: ID!, $input: CreateRecordInput!) {\n\t\t\t\tcreateRecord(domainId: $domainId, input: $input) {\n\t\t\t\t\tpayload {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t",
                    variables: {
                        domainId: e,
                        input: t
                    }
                }
            }
              , f = function(e) {
                return {
                    query: "\n\t\t\tmutation updateRecord($recordId: ID!) {\n\t\t\t\tupdateRecord(id: $recordId) {\n\t\t\t\t\tsuccess\n\t\t\t\t}\n\t\t\t}\n\t\t",
                    variables: {
                        recordId: e
                    }
                }
            }
              , h = function(e, t, n, r) {
                var i = new XMLHttpRequest;
                i.open("POST", e),
                i.onload = function() {
                    if (200 !== i.status)
                        throw new Error("Server returned with an unhandled status");
                    var e = null;
                    try {
                        e = JSON.parse(i.responseText)
                    } catch (e) {
                        throw new Error("Failed to parse response from server")
                    }
                    if (null != e.errors)
                        throw new Error(e.errors[0].message);
                    if ("function" == typeof r)
                        return r(e)
                }
                ,
                i.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
                i.withCredentials = n.ignoreOwnVisits,
                i.setRequestHeader("sec-fetch-site", "cross-site"),
                i.send(JSON.stringify(t))
            }
              , g = function() {
                var e = document.querySelector("[data-ackee-domain-id]");
                if (null != e) {
                    var t = e.getAttribute("data-ackee-server") || ""
                      , n = e.getAttribute("data-ackee-domain-id")
                      , r = e.getAttribute("data-ackee-opts") || "{}";
                    S(t, JSON.parse(r)).record(n)
                }
            };
            n.detect = g;
            var S = function(e, t) {
                t = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = {};
                    return t.detailed = !0 === e.detailed,
                    t.ignoreLocalhost = !1 !== e.ignoreLocalhost,
                    t.ignoreOwnVisits = !1 !== e.ignoreOwnVisits,
                    t
                }(t);
                var n, r, i = function(e) {
                    var t = "/" === e.substr(-1);
                    return e + (!0 === t ? "" : "/") + "api"
                }(e), o = function() {}, a = {
                    record: function() {
                        return {
                            stop: o
                        }
                    },
                    updateRecord: function() {
                        return {
                            stop: o
                        }
                    },
                    action: o,
                    updateAction: o
                };
                if (!0 === t.ignoreLocalhost && !0 == ("" === (n = location.hostname) || "localhost" === n || "127.0.0.1" === n || "::1" === n))
                    return console.warn("Ackee ignores you because you are on localhost"),
                    a;
                if (!0 === (r = navigator.userAgent,
                /bot|crawler|spider|crawling/i.test(r)))
                    return console.warn("Ackee ignores you because you are a bot"),
                    a;
                return {
                    record: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b(t.detailed)
                          , r = arguments.length > 2 ? arguments[2] : void 0
                          , o = !1
                          , a = function() {
                            o = !0
                        };
                        return h(i, p(e, n), t, (function(e) {
                            var n = e.data.createRecord.payload.id;
                            if (!0 === u(n))
                                return console.warn("Ackee ignores you because this is your own site");
                            var a = setInterval((function() {
                                !0 !== o ? !0 !== c() && h(i, f(n), t) : clearInterval(a)
                            }
                            ), 15e3);
                            return "function" == typeof r ? r(n) : void 0
                        }
                        )),
                        {
                            stop: a
                        }
                    },
                    updateRecord: function(e) {
                        var n = !1
                          , r = function() {
                            n = !0
                        };
                        if (!0 === u(e))
                            return console.warn("Ackee ignores you because this is your own site"),
                            {
                                stop: r
                            };
                        var o = setInterval((function() {
                            !0 !== n ? !0 !== c() && h(i, f(e), t) : clearInterval(o)
                        }
                        ), 15e3);
                        return {
                            stop: r
                        }
                    },
                    action: function(e, n, r) {
                        h(i, function(e, t) {
                            return {
                                query: "\n\t\t\tmutation createAction($eventId: ID!, $input: CreateActionInput!) {\n\t\t\t\tcreateAction(eventId: $eventId, input: $input) {\n\t\t\t\t\tpayload {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t",
                                variables: {
                                    eventId: e,
                                    input: t
                                }
                            }
                        }(e, n), t, (function(e) {
                            var t = e.data.createAction.payload.id;
                            return !0 === u(t) ? console.warn("Ackee ignores you because this is your own site") : "function" == typeof r ? r(t) : void 0
                        }
                        ))
                    },
                    updateAction: function(e, n) {
                        if (!0 === u(e))
                            return console.warn("Ackee ignores you because this is your own site");
                        h(i, function(e, t) {
                            return {
                                query: "\n\t\t\tmutation updateAction($actionId: ID!, $input: UpdateActionInput!) {\n\t\t\t\tupdateAction(id: $actionId, input: $input) {\n\t\t\t\t\tsuccess\n\t\t\t\t}\n\t\t\t}\n\t\t",
                                variables: {
                                    actionId: e,
                                    input: t
                                }
                            }
                        }(e, n), t)
                    }
                }
            };
            n.create = S,
            !0 === s && g()
        }
        , {
            platform: 1
        }]
    }, {}, [2])(2)
}
));
