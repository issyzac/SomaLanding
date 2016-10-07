!function () {
    function e(e, t) {
        c ? e.addEventListener("scroll", t, !1) : e.attachEvent("scroll", t)
    }

    function t(e) {
        document.body ? e() : c ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", function () {
            "interactive" != document.readyState && "complete" != document.readyState || e()
        })
    }

    function n(e) {
        this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(e)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c)
    }

    function i(e, t) {
        e.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:" + t + ";"
    }

    function o(e) {
        var t = e.a.offsetWidth, n = t + 100;
        return e.f.style.width = n + "px", e.c.scrollLeft = n, e.b.scrollLeft = e.b.scrollWidth + 100, e.g !== t ? (e.g = t, !0) : !1
    }

    function s(t, n) {
        function i() {
            var e = s;
            o(e) && null !== e.a.parentNode && n(e.g)
        }

        var s = t;
        e(t.b, i), e(t.c, i), o(t)
    }

    function a(e, t) {
        var n = t || {};
        this.family = e, this.style = n.style || "normal", this.weight = n.weight || "normal", this.stretch = n.stretch || "normal"
    }

    function d() {
        if (null === h) {
            var e = document.createElement("div");
            try {
                e.style.font = "condensed 100px sans-serif"
            } catch (t) {
            }
            h = "" !== e.style.font
        }
        return h
    }

    function l(e, t) {
        return [e.style, e.weight, d() ? e.stretch : "", "100px", t].join(" ")
    }

    var c = !!document.addEventListener, r = null, h = null, f = !!window.FontFace;
    a.prototype.load = function (e, o) {
        var a = this, d = e || "BESbswy", c = o || 3e3, h = (new Date).getTime();
        return new Promise(function (e, o) {
            if (f) {
                var u = new Promise(function (e, t) {
                    function n() {
                        (new Date).getTime() - h >= c ? t() : document.fonts.load(l(a, a.family), d).then(function (t) {
                            1 <= t.length ? e() : setTimeout(n, 25)
                        }, function () {
                            t()
                        })
                    }

                    n()
                }), p = new Promise(function (e, t) {
                    setTimeout(t, c)
                });
                Promise.race([p, u]).then(function () {
                    e(a)
                }, function () {
                    o(a)
                })
            } else t(function () {
                function t() {
                    var t;
                    (t = -1 != w && -1 != y || -1 != w && -1 != v || -1 != y && -1 != v) && ((t = w != y && w != v && y != v) || (null === r && (t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), r = !!t && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10))), t = r && (w == b && y == b && v == b || w == x && y == x && v == x || w == g && y == g && v == g)), t = !t), t && (null !== E.parentNode && E.parentNode.removeChild(E), clearTimeout(T), e(a))
                }

                function f() {
                    if ((new Date).getTime() - h >= c)null !== E.parentNode && E.parentNode.removeChild(E), o(a); else {
                        var e = document.hidden;
                        (!0 === e || void 0 === e) && (w = u.a.offsetWidth, y = p.a.offsetWidth, v = m.a.offsetWidth, t()), T = setTimeout(f, 50)
                    }
                }

                var u = new n(d), p = new n(d), m = new n(d), w = -1, y = -1, v = -1, b = -1, x = -1, g = -1, E = document.createElement("div"), T = 0;
                E.dir = "ltr", i(u, l(a, "sans-serif")), i(p, l(a, "serif")), i(m, l(a, "monospace")), E.appendChild(u.a), E.appendChild(p.a), E.appendChild(m.a), document.body.appendChild(E), b = u.a.offsetWidth, x = p.a.offsetWidth, g = m.a.offsetWidth, f(), s(u, function (e) {
                    w = e, t()
                }), i(u, l(a, '"' + a.family + '",sans-serif')), s(p, function (e) {
                    y = e, t()
                }), i(p, l(a, '"' + a.family + '",serif')), s(m, function (e) {
                    v = e, t()
                }), i(m, l(a, '"' + a.family + '",monospace'))
            })
        })
    }, window.FontFaceObserver = a, window.FontFaceObserver.prototype.check = window.FontFaceObserver.prototype.load = a.prototype.load, "undefined" != typeof module && (module.exports = window.FontFaceObserver)
}();
function ParticleSlider(t) {
    var e = this;
    if (e.sliderId = "particle-slider", e.color = "#fff", e.hoverColor = "#88f", e.width = 0, e.height = 0, e.ptlGap = 0, e.ptlSize = 1, e.slideDelay = 10, e.arrowPadding = 10, e.showArrowControls = !0, e.onNextSlide = null, e.onWidthChange = null, e.onHeightChange = null, e.onSizeChange = null, e.monochrome = !1, e.mouseForce = 1e4, e.restless = !0, e.imgs = [], t)for (var r = ["color", "hoverColor", "width", "height", "ptlGap", "ptlSize", "slideDelay", "arrowPadding", "sliderId", "showArrowControls", "onNextSlide", "monochrome", "mouseForce", "restless", "imgs", "onSizeChange", "onWidthChange", "onHeightChange"], i = 0, o = r.length; o > i; i++)t[r[i]] && (e[r[i]] = t[r[i]]);
    e.$container = e.$("#" + e.sliderId), e.$$children = e.$container.childNodes, e.$controlsContainer = e.$(".controls"), e.$$slides = e.$(".slide", e.$(".slides").childNodes, !0), e.$controlLeft = null, e.$controlRight = null, e.$canv = e.$(".draw"), e.$srcCanv = document.createElement("canvas"), e.$srcCanv.style.display = "none", e.$container.appendChild(e.$srcCanv), e.$prevCanv = document.createElement("canvas"), e.$prevCanv.style.display = "none", e.$nextCanv = document.createElement("canvas"), e.$nextCanv.style.display = "none", e.$overlay = document.createElement("p"), e.imgControlPrev = null, e.imgControlNext = null, e.$$slides.length <= 1 && (e.showArrowControls = !1), e.$controlsContainer && e.$controlsContainer.childNodes && 1 == e.showArrowControls ? (e.$controlLeft = e.$(".left", e.$controlsContainer.childNodes), e.$controlRight = e.$(".right", e.$controlsContainer.childNodes), e.imgControlPrev = new Image, e.imgControlNext = new Image, e.imgControlPrev.onload = function () {
        e.$prevCanv.height = this.height, e.$prevCanv.width = this.width, e.loadingStep()
    }, e.imgControlNext.onload = function () {
        e.$nextCanv.height = this.height, e.$nextCanv.width = this.width, e.loadingStep()
    }, e.imgControlPrev.src = e.$controlLeft.getAttribute("data-src"), e.imgControlNext.src = e.$controlRight.getAttribute("data-src")) : e.showArrowControls = !1, e.width <= 0 && (e.width = e.$container.clientWidth), e.height <= 0 && (e.height = e.$container.clientHeight), e.mouseDownRegion = 0, e.colorArr = e.parseColor(e.color), e.hoverColorArr = e.parseColor(e.hoverColor), e.mx = -1, e.my = -1, e.swipeOffset = 0, e.cw = e.getCw(), e.ch = e.getCh(), e.frame = 0, e.nextSlideTimer = !1, e.currImg = 0, e.lastImg = 0, e.imagesLoaded = 0, e.pxlBuffer = {first: null}, e.recycleBuffer = {first: null}, e.ctx = e.$canv.getContext("2d"), e.srcCtx = e.$srcCanv.getContext("2d"), e.prevCtx = e.$prevCanv.getContext("2d"), e.nextCtx = e.$nextCanv.getContext("2d"), e.$canv.width = e.cw, e.$canv.height = e.ch, e.shuffle = function () {
        for (var t, e, r = 0, i = this.length; i > r; r++)e = Math.floor(Math.random() * i), t = this[r], this[r] = this[e], this[e] = t
    }, Array.prototype.shuffle = e.shuffle, e.$canv.onmouseout = function () {
        e.mx = -1, e.my = -1, e.mouseDownRegion = 0
    }, e.$canv.onmousemove = function (t) {
        function r(t) {
            var r = 0, i = 0, o = "string" == typeof t ? e.$(t) : t;
            if (o) {
                r = o.offsetLeft, i = o.offsetTop;
                for (var n = document.getElementsByTagName("body")[0]; o.offsetParent && o != n;)r += o.offsetParent.offsetLeft, i += o.offsetParent.offsetTop, o = o.offsetParent
            }
            this.x = r, this.y = i
        }

        var i = new r(e.$container);
        e.mx = t.clientX - i.x + document.body.scrollLeft + document.documentElement.scrollLeft, e.my = t.clientY - i.y + document.body.scrollTop + document.documentElement.scrollTop
    }, e.$canv.onmousedown = function () {
        if (e.imgs.length > 1) {
            var t = 0;
            e.mx >= 0 && e.mx < 2 * e.arrowPadding + e.$prevCanv.width ? t = -1 : e.mx > 0 && e.mx > e.cw - (2 * e.arrowPadding + e.$nextCanv.width) && (t = 1), e.mouseDownRegion = t
        }
    }, e.$canv.onmouseup = function () {
        if (e.imgs.length > 1) {
            var t = "";
            e.mx >= 0 && e.mx < 2 * e.arrowPadding + e.$prevCanv.width ? t = -1 : e.mx > 0 && e.mx > e.cw - (2 * e.arrowPadding + e.$nextCanv.width) && (t = 1), 0 != t && 0 != e.mouseDownRegion && (t != e.mouseDownRegion && (t *= -1), e.nextSlideTimer && clearTimeout(e.nextSlideTimer), e.nextSlide(t)), e.mouseDownRegion = 0
        }
    }, e.running = !1
}
var psParticle = function (t) {
    this.ps = t, this.ttl = null, this.color = t.colorArr, this.next = null, this.prev = null, this.gravityX = 0, this.gravityY = 0, this.x = Math.random() * t.cw, this.y = Math.random() * t.ch, this.velocityX = 10 * Math.random() - 5, this.velocityY = 10 * Math.random() - 5
};
psParticle.prototype.move = function () {
    var t = this.ps, e = this;
    if (null != this.ttl && this.ttl-- <= 0)return t.swapList(e, t.pxlBuffer, t.recycleBuffer), void(this.ttl = null);
    var r = this.gravityX + t.swipeOffset - this.x, i = this.gravityY - this.y, o = Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2)), n = Math.atan2(i, r), l = .01 * o;
    1 == t.restless ? l += .1 * Math.random() - .05 : .01 > l && (this.x = this.gravityX + .25, this.y = this.gravityY + .25);
    var a = 0, s = 0;
    if (t.mx >= 0 && t.mouseForce) {
        var c = this.x - t.mx, h = this.y - t.my;
        a = Math.min(t.mouseForce / (Math.pow(c, 2) + Math.pow(h, 2)), t.mouseForce), s = Math.atan2(h, c), "function" == typeof this.color && (s += Math.PI, a *= .001 + .1 * Math.random() - .05)
    } else a = 0, s = 0;
    this.velocityX += l * Math.cos(n) + a * Math.cos(s), this.velocityY += l * Math.sin(n) + a * Math.sin(s), this.velocityX *= .92, this.velocityY *= .92, this.x += this.velocityX, this.y += this.velocityY
}, ParticleSlider.prototype.Particle = psParticle, ParticleSlider.prototype.swapList = function (t, e, r) {
    var i = this;
    null == t ? t = new i.Particle(i) : e.first == t ? null != t.next ? (t.next.prev = null, e.first = t.next) : e.first = null : null == t.next ? t.prev.next = null : (t.prev.next = t.next, t.next.prev = t.prev), null == r.first ? (r.first = t, t.prev = null, t.next = null) : (t.next = r.first, r.first.prev = t, r.first = t, t.prev = null)
}, ParticleSlider.prototype.parseColor = function (t) {
    var e, t = t.replace(" ", "");
    if (e = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(t))e = [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]; else if (e = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(t))e = [17 * parseInt(e[1], 16), 17 * parseInt(e[2], 16), 17 * parseInt(e[3], 16)]; else if (e = /^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(t))e = [+e[1], +e[2], +e[3], +e[4]]; else {
        if (!(e = /^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(t)))return null;
        e = [+e[1], +e[2], +e[3]]
    }
    return isNaN(e[3]) && (e[3] = 1), e[3] *= 255, e
}, ParticleSlider.prototype.loadingStep = function () {
    return
}, ParticleSlider.prototype.$ = function (t, e, r) {
    var i = this;
    if ("." == t[0]) {
        var o = t.substr(1);
        e || (e = i.$$children);
        for (var n = [], l = 0, a = e.length; a > l; l++)e[l].className && e[l].className == o && n.push(e[l]);
        return 0 == n.length ? null : 1 != n.length || r ? n : n[0]
    }
    return document.getElementById(t.substr(1))
}, ParticleSlider.prototype.nextFrame = function () {
    if (this.running) {
        var t = this;
        1 == t.mouseDownRegion && t.mx < t.cw / 2 || -1 == t.mouseDownRegion && t.mx > t.cw / 2 ? t.swipeOffset = t.mx - t.cw / 2 : t.swipeOffset = 0;
        for (var e = t.pxlBuffer.first, r = null; null != e;)r = e.next, e.move(), e = r;
        t.ctx.clearRect(0, 0, t.$canv.width, t.$canv.height), t.drawParticles()
    }
}, ParticleSlider.prototype.nextSlide = function (t) {
    return
}, ParticleSlider.prototype.drawParticles = function () {
    var t, e, r = this, i = r.pxlBuffer.first;
    for (r.ctx.fillStyle = "#F7931D"; null != i;)t = ~~i.x, e = ~~i.y, r.ctx.fillRect(t, e, r.ptlSize, r.ptlSize), i = i.next
}, ParticleSlider.prototype.getPixelFromImageData = function (t, e, r) {
    for (var o = this, n = [], l = 0; l < t.width; l += o.ptlGap + 1)for (var a = 0; a < t.height; a += o.ptlGap + 1)i = 4 * (a * t.width + l), t.data[i + 3] > 0 && n.push({
        x: e + l,
        y: r + a,
        color: "#fff"
    });
    return n
}, ParticleSlider.prototype.init = function (t) {
    var e = this, r = $(window).width() >= 960 ? textToParticle.convertVW(textToParticle.textSettings.fontSize) : textToParticle.textSettings.fontSize;
    e.$canv.width = $("body").find(".draw").outerWidth(), e.$canv.height = $("body").find(".draw").outerHeight() + .2 * r, e.srcCtx.font = r + "px " + textToParticle.textSettings.fontFamily, e.srcCtx.fillStyle = textToParticle.textSettings.fontColour, e.$srcCanv.width = e.srcCtx.measureText(textToParticle.currentText).width, e.$srcCanv.height = .7 * r, $(window).width() < 960 && (e.$srcCanv.height += textToParticle.convertVW(5)), e.srcCtx.clearRect(0, 0, $(window).width(), $(window).height()), e.srcCtx.font = r + "px " + textToParticle.textSettings.fontFamily, e.srcCtx.fillStyle = textToParticle.textSettings.fontColour;
    var i = .68 * r;
    e.srcCtx.fillText(textToParticle.currentText, 0, i);
    for (var o = e.getPixelFromImageData(e.srcCtx.getImageData(0, 0, e.$srcCanv.width, e.$srcCanv.height), ~~($(".draw").parents(".fullscreen-section").outerWidth() / 2 - e.$srcCanv.width / 2), ~~($(".draw").parents(".fullscreen-section").outerHeight() / 2 - e.$srcCanv.height / 2)), n = e.pxlBuffer.first, l = 0, a = o.length; a > l; l++) {
        var s = null;
        null != n ? (s = n, n = n.next) : (e.swapList(e.recycleBuffer.first, e.recycleBuffer, e.pxlBuffer), s = e.pxlBuffer.first), s.gravityX = o[l].x, s.gravityY = o[l].y, s.color = o[l].color
    }
    for (; null != n;)n.ttl = ~~(10 * Math.random()), n.gravityY = ~~(e.ch * Math.random()), n.gravityX = ~~(e.cw * Math.random()), n = n.next
}, ParticleSlider.prototype.getCw = function () {
    var t = this;
    return Math.min(document.body.clientWidth, t.width, t.$container.clientWidth)
}, ParticleSlider.prototype.getCh = function () {
    var t = this;
    return Math.min(document.body.clientHeight, t.height, t.$container.clientHeight)
}, ParticleSlider.prototype.resize = function () {
    var t = this;
    $(window).width() < 760 ? (textToParticle.textSettings.fontSize = 55, textToParticle.textSettings.textTop = 70) : $(window).width() < 960 ? (textToParticle.textSettings.fontSize = 135, textToParticle.textSettings.textTop = 65.625) : (textToParticle.textSettings.fontSize = 10.5, textToParticle.textSettings.textTop = 65.625), setTimeout(function () {
        t.init(!0)
    })
}, ParticleSlider.prototype.setColor = function (t) {
    var e = this;
    e.colorArr = e.parseColor(t)
}, ParticleSlider.prototype.setHoverColor = function (t) {
    var e = this;
    e.hoverColorArr = e.parseColor(t)
};
function hexToRgb(e) {
    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    e = e.replace(t, function (e, t, a, i) {
        return t + t + a + a + i + i
    });
    var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return a ? {r: parseInt(a[1], 16), g: parseInt(a[2], 16), b: parseInt(a[3], 16)} : null
}
function clamp(e, t, a) {
    return Math.min(Math.max(e, t), a)
}
function isInArray(e, t) {
    return t.indexOf(e) > -1
}
var pJS = function (e, t) {
    var a = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {el: a, w: a.offsetWidth, h: a.offsetHeight},
        particles: {
            number: {value: 400, density: {enable: !0, value_area: 800}},
            color: {value: "#F7931D"},
            shape: {
                type: "circle",
                stroke: {width: 0, color: "#ff0000"},
                polygon: {nb_sides: 5},
                image: {src: "", width: 100, height: 100}
            },
            opacity: {value: 1, random: !1, anim: {enable: !1, speed: 2, opacity_min: 0, sync: !1}},
            size: {value: 20, random: !1, anim: {enable: !1, speed: 20, size_min: 0, sync: !1}},
            line_linked: {enable: !0, distance: 100, color: "#fff", opacity: 1, width: 1},
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {enable: !1, rotateX: 3e3, rotateY: 3e3}
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {onhover: {enable: !0, mode: "grab"}, onclick: {enable: !0, mode: "push"}, resize: !0},
            modes: {
                grab: {distance: 100, line_linked: {opacity: 1}},
                bubble: {distance: 200, size: 80, duration: .4},
                repulse: {distance: 200, duration: .4},
                push: {particles_nb: 4},
                remove: {particles_nb: 2}
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {interact: {}, modes: {}, vendors: {}},
        tmp: {}
    };
    var i = this.pJS;
    t && Object.deepExtend(i, t), i.tmp.obj = {
        size_value: i.particles.size.value,
        size_anim_speed: i.particles.size.anim.speed,
        move_speed: i.particles.move.speed,
        line_linked_distance: i.particles.line_linked.distance,
        line_linked_width: i.particles.line_linked.width,
        mode_grab_distance: i.interactivity.modes.grab.distance,
        mode_bubble_distance: i.interactivity.modes.bubble.distance,
        mode_bubble_size: i.interactivity.modes.bubble.size,
        mode_repulse_distance: i.interactivity.modes.repulse.distance
    }, i.fn.retinaInit = function () {
        i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio
    }, i.fn.canvasInit = function () {
        i.canvas.ctx = i.canvas.el.getContext("2d")
    }, i.fn.canvasSize = function () {
        i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () {
            i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles()
        })
    }, i.fn.canvasPaint = function () {
    }, i.fn.canvasClear = function () {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h)
    }, i.fn.particle = function (e, t, a) {
        if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = a ? a.x : Math.random() * i.canvas.w, this.y = a ? a.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, a), this.color = {}, "object" == typeof e.value)if (e.value instanceof Array) {
            var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
            this.color.rgb = hexToRgb(s)
        } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
            r: e.value.r,
            g: e.value.g,
            b: e.value.b
        }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
            h: e.value.h,
            s: e.value.s,
            l: e.value.l
        }); else"random" == e.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var r = {};
        switch (i.particles.move.direction) {
            case"top":
                r = {x: 0, y: -1};
                break;
            case"top-right":
                r = {x: .5, y: -.5};
                break;
            case"right":
                r = {x: 1, y: -0};
                break;
            case"bottom-right":
                r = {x: .5, y: .5};
                break;
            case"bottom":
                r = {x: 0, y: 1};
                break;
            case"bottom-left":
                r = {x: -.5, y: 1};
                break;
            case"left":
                r = {x: -1, y: 0};
                break;
            case"top-left":
                r = {x: -.5, y: -.5};
                break;
            default:
                r = {x: 0, y: 0}
        }
        i.particles.move.straight ? (this.vx = r.x, this.vy = r.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = r.x + Math.random() - .5, this.vy = r.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var n = i.particles.shape.type;
        if ("object" == typeof n) {
            if (n instanceof Array) {
                var c = n[Math.floor(Math.random() * n.length)];
                this.shape = c
            }
        } else this.shape = n;
        if ("image" == this.shape) {
            var o = i.particles.shape;
            this.img = {
                src: o.image.src,
                ratio: o.image.width / o.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1))
        }
    }, i.fn.particle.prototype.draw = function () {
        function e() {
            i.canvas.ctx.drawImage(n, t.x - a, t.y - a, 2 * a, 2 * a / t.img.ratio)
        }

        var t = this;
        if (void 0 != t.radius_bubble)var a = t.radius_bubble; else var a = t.radius;
        if (void 0 != t.opacity_bubble)var s = t.opacity_bubble; else var s = t.opacity;
        if (t.color.rgb)var r = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + s + ")"; else var r = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + s + ")";
        switch (i.canvas.ctx.fillStyle = r, i.canvas.ctx.beginPath(), t.shape) {
            case"circle":
                i.canvas.ctx.arc(t.x, t.y, a, 0, 2 * Math.PI, !1);
                break;
            case"edge":
                i.canvas.ctx.rect(t.x - a, t.y - a, 2 * a, 2 * a);
                break;
            case"triangle":
                i.fn.vendors.drawShape(i.canvas.ctx, t.x - a, t.y + a / 1.66, 2 * a, 3, 2);
                break;
            case"polygon":
                i.fn.vendors.drawShape(i.canvas.ctx, t.x - a / (i.particles.shape.polygon.nb_sides / 3.5), t.y - a / .76, 2.66 * a / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
                break;
            case"star":
                i.fn.vendors.drawShape(i.canvas.ctx, t.x - 2 * a / (i.particles.shape.polygon.nb_sides / 4), t.y - a / 1.52, 2 * a * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
                break;
            case"image":
                if ("svg" == i.tmp.img_type)var n = t.img.obj; else var n = i.tmp.img_obj;
                n && e()
        }
        i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill()
    }, i.fn.particlesCreate = function () {
        for (var e = 0; e < i.particles.number.value; e++)i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value))
    }, i.fn.particlesUpdate = function () {
        for (var e = 0; e < i.particles.array.length; e++) {
            var t = i.particles.array[e];
            if (i.particles.move.enable) {
                var a = i.particles.move.speed / 2;
                t.x += t.vx * a, t.y += t.vy * a
            }
            if (i.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= i.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= i.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), i.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= i.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= i.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == i.particles.move.out_mode)var s = {
                x_left: t.radius,
                x_right: i.canvas.w,
                y_top: t.radius,
                y_bottom: i.canvas.h
            }; else var s = {
                x_left: -t.radius,
                x_right: i.canvas.w + t.radius,
                y_top: -t.radius,
                y_bottom: i.canvas.h + t.radius
            };
            switch (t.x - t.radius > i.canvas.w ? (t.x = s.x_left, t.y = Math.random() * i.canvas.h) : t.x + t.radius < 0 && (t.x = s.x_right, t.y = Math.random() * i.canvas.h), t.y - t.radius > i.canvas.h ? (t.y = s.y_top, t.x = Math.random() * i.canvas.w) : t.y + t.radius < 0 && (t.y = s.y_bottom, t.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
                case"bounce":
                    t.x + t.radius > i.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > i.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
            }
            if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(t), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(t), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(t), i.particles.line_linked.enable || i.particles.move.attract.enable)for (var r = e + 1; r < i.particles.array.length; r++) {
                var n = i.particles.array[r];
                i.particles.line_linked.enable && i.fn.interact.linkParticles(t, n), i.particles.move.attract.enable && i.fn.interact.attractParticles(t, n), i.particles.move.bounce && i.fn.interact.bounceParticles(t, n)
            }
        }
    }, i.fn.particlesDraw = function () {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();
        for (var e = 0; e < i.particles.array.length; e++) {
            var t = i.particles.array[e];
            t.draw()
        }
    }, i.fn.particlesEmpty = function () {
        i.particles.array = []
    }, i.fn.particlesRefresh = function () {
        i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start()
    }, i.fn.interact.linkParticles = function (e, t) {
        var a = e.x - t.x, s = e.y - t.y, r = Math.sqrt(a * a + s * s);
        if (r <= i.particles.line_linked.distance) {
            var n = i.particles.line_linked.opacity - r / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
            if (n > 0) {
                var c = i.particles.line_linked.color_rgb_line;
                i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(t.x, t.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
            }
        }
    }, i.fn.interact.attractParticles = function (e, t) {
        var a = e.x - t.x, s = e.y - t.y, r = Math.sqrt(a * a + s * s);
        if (r <= i.particles.line_linked.distance) {
            var n = a / (1e3 * i.particles.move.attract.rotateX), c = s / (1e3 * i.particles.move.attract.rotateY);
            e.vx -= n, e.vy -= c, t.vx += n, t.vy += c
        }
    }, i.fn.interact.bounceParticles = function (e, t) {
        var a = e.x - t.x, i = e.y - t.y, s = Math.sqrt(a * a + i * i), r = e.radius + t.radius;
        r >= s && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
    }, i.fn.modes.pushParticles = function (e, t) {
        i.tmp.pushing = !0;
        for (var a = 0; e > a; a++)i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
            x: t ? t.pos_x : Math.random() * i.canvas.w,
            y: t ? t.pos_y : Math.random() * i.canvas.h
        })), a == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1)
    }, i.fn.modes.removeParticles = function (e) {
        i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw()
    }, i.fn.modes.bubbleParticle = function (e) {
        function t() {
            e.opacity_bubble = e.opacity, e.radius_bubble = e.radius
        }

        function a(t, a, s, r, c) {
            if (t != a)if (i.tmp.bubble_duration_end) {
                if (void 0 != s) {
                    var o = r - p * (r - t) / i.interactivity.modes.bubble.duration, l = t - o;
                    d = t + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d)
                }
            } else if (n <= i.interactivity.modes.bubble.distance) {
                if (void 0 != s)var v = s; else var v = r;
                if (v != t) {
                    var d = r - p * (r - t) / i.interactivity.modes.bubble.duration;
                    "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d)
                }
            } else"size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0)
        }

        if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
            var s = e.x - i.interactivity.mouse.pos_x, r = e.y - i.interactivity.mouse.pos_y, n = Math.sqrt(s * s + r * r), c = 1 - n / i.interactivity.modes.bubble.distance;
            if (n <= i.interactivity.modes.bubble.distance) {
                if (c >= 0 && "mousemove" == i.interactivity.status) {
                    if (i.interactivity.modes.bubble.size != i.particles.size.value)if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                        var o = e.radius + i.interactivity.modes.bubble.size * c;
                        o >= 0 && (e.radius_bubble = o)
                    } else {
                        var l = e.radius - i.interactivity.modes.bubble.size, o = e.radius - l * c;
                        o > 0 ? e.radius_bubble = o : e.radius_bubble = 0
                    }
                    if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value)if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
                        var v = i.interactivity.modes.bubble.opacity * c;
                        v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v)
                    } else {
                        var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
                        v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v)
                    }
                }
            } else t();
            "mouseleave" == i.interactivity.status && t()
        } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
            if (i.tmp.bubble_clicking) {
                var s = e.x - i.interactivity.mouse.click_pos_x, r = e.y - i.interactivity.mouse.click_pos_y, n = Math.sqrt(s * s + r * r), p = ((new Date).getTime() - i.interactivity.mouse.click_time) / 1e3;
                p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1)
            }
            i.tmp.bubble_clicking && (a(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), a(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
        }
    }, i.fn.modes.repulseParticle = function (e) {
        function t() {
            var t = Math.atan2(d, p);
            if (e.vx = m * Math.cos(t), e.vy = m * Math.sin(t), "bounce" == i.particles.move.out_mode) {
                var a = {x: e.x + e.vx, y: e.y + e.vy};
                a.x + e.radius > i.canvas.w ? e.vx = -e.vx : a.x - e.radius < 0 && (e.vx = -e.vx), a.y + e.radius > i.canvas.h ? e.vy = -e.vy : a.y - e.radius < 0 && (e.vy = -e.vy)
            }
        }

        if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
            var a = e.x - i.interactivity.mouse.pos_x, s = e.y - i.interactivity.mouse.pos_y, r = Math.sqrt(a * a + s * s), n = {
                x: a / r,
                y: s / r
            }, c = i.interactivity.modes.repulse.distance, o = 100, l = clamp(1 / c * (-1 * Math.pow(r / c, 2) + 1) * c * o, 0, 50), v = {
                x: e.x + n.x * l,
                y: e.y + n.y * l
            };
            "bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y)
        } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode))if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
            var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3), p = i.interactivity.mouse.click_pos_x - e.x, d = i.interactivity.mouse.click_pos_y - e.y, u = p * p + d * d, m = -c / u * 1;
            c >= u && t()
        } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i)
    }, i.fn.modes.grabParticle = function (e) {
        if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
            var t = e.x - i.interactivity.mouse.pos_x, a = e.y - i.interactivity.mouse.pos_y, s = Math.sqrt(t * t + a * a);
            if (s <= i.interactivity.modes.grab.distance) {
                var r = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
                if (r > 0) {
                    var n = i.particles.line_linked.color_rgb_line;
                    i.canvas.ctx.strokeStyle = "rgba(" + n.r + "," + n.g + "," + n.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
                }
            }
        }
    }, i.fn.vendors.eventsListeners = function () {
        "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (e) {
            if (i.interactivity.el == window)var t = e.clientX, a = e.clientY; else var t = e.offsetX || e.clientX, a = e.offsetY || e.clientY;
            i.interactivity.mouse.pos_x = t, i.interactivity.mouse.pos_y = a, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove"
        }), i.interactivity.el.addEventListener("mouseleave", function (e) {
            i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave"
        })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () {
            if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = (new Date).getTime(), i.interactivity.events.onclick.enable)switch (i.interactivity.events.onclick.mode) {
                case"push":
                    i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
                    break;
                case"remove":
                    i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
                    break;
                case"bubble":
                    i.tmp.bubble_clicking = !0;
                    break;
                case"repulse":
                    i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () {
                        i.tmp.repulse_clicking = !1
                    }, 1e3 * i.interactivity.modes.repulse.duration)
            }
        })
    }, i.fn.vendors.densityAutoParticles = function () {
        if (i.particles.number.density.enable) {
            var e = i.canvas.el.width * i.canvas.el.height / 1e3;
            i.tmp.retina && (e /= 2 * i.canvas.pxratio);
            var t = e * i.particles.number.value / i.particles.number.density.value_area, a = i.particles.array.length - t;
            0 > a ? i.fn.modes.pushParticles(Math.abs(a)) : i.fn.modes.removeParticles(a)
        }
    }, i.fn.vendors.checkOverlap = function (e, t) {
        for (var a = 0; a < i.particles.array.length; a++) {
            var s = i.particles.array[a], r = e.x - s.x, n = e.y - s.y, c = Math.sqrt(r * r + n * n);
            c <= e.radius + s.radius && (e.x = t ? t.x : Math.random() * i.canvas.w, e.y = t ? t.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e))
        }
    }, i.fn.vendors.createSvgImg = function (e) {
        var t = i.tmp.source_svg, a = /#([0-9A-F]{3,6})/gi, s = t.replace(a, function (t, a, i, s) {
            if (e.color.rgb)var r = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")"; else var r = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
            return r
        }), r = new Blob([s], {type: "image/svg+xml;charset=utf-8"}), n = window.URL || window.webkitURL || window, c = n.createObjectURL(r), o = new Image;
        o.addEventListener("load", function () {
            e.img.obj = o, e.img.loaded = !0, n.revokeObjectURL(c), i.tmp.count_svg++
        }), o.src = c
    }, i.fn.vendors.destroypJS = function () {
        a.remove(), pJSDom = null
    }, i.fn.vendors.drawShape = function (e, t, a, i, s, r) {
        var n = s * r, c = s / r, o = 180 * (c - 2) / c, l = Math.PI - Math.PI * o / 180;
        e.save(), e.beginPath(), e.translate(t, a), e.moveTo(0, 0);
        for (var v = 0; n > v; v++)e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
        e.fill(), e.restore()
    }, i.fn.vendors.exportImg = function () {
        window.open(i.canvas.el.toDataURL("image/png"), "_blank")
    }, i.fn.vendors.loadImg = function (e) {
        if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src)if ("svg" == e) {
            var t = new XMLHttpRequest;
            t.open("GET", i.particles.shape.image.src), t.onreadystatechange = function (e) {
                4 == t.readyState && (200 == t.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0))
            }, t.send()
        } else {
            var a = new Image;
            a.addEventListener("load", function () {
                i.tmp.img_obj = a, i.fn.vendors.checkBeforeDraw()
            }), a.src = i.particles.shape.image.src
        } else console.log("Error pJS - No image.src"), i.tmp.img_error = !0
    }, i.fn.vendors.draw = function () {
        "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value && i.fn.particlesDraw() : void 0 != i.tmp.img_obj && i.fn.particlesDraw() : i.fn.particlesDraw()
    }, i.fn.vendors.checkBeforeDraw = function () {
        "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimationFrame(check) : i.tmp.img_error || (i.fn.vendors.init(), registerRenderable(i.fn.vendors.draw, i.fn.vendors)) : (i.fn.vendors.init(), registerRenderable(i.fn.vendors.draw, i.fn.vendors))
    }, i.fn.vendors.init = function () {
        i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color)
    }, i.fn.vendors.start = function () {
        isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw()
    }, i.fn.vendors.eventsListeners(), i.fn.vendors.start()
};
Object.deepExtend = function (e, t) {
    for (var a in t)t[a] && t[a].constructor && t[a].constructor === Object ? (e[a] = e[a] || {}, arguments.callee(e[a], t[a])) : e[a] = t[a];
    return e
}, window.pJSDom = [], window.particlesJS = function (e, t) {
    "string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
    var a = document.getElementById(e), i = "particles-js-canvas-el", s = a.getElementsByClassName(i);
    if (s.length)for (; s.length > 0;)a.removeChild(s[0]);
    var r = document.createElement("canvas");
    r.className = i, r.style.width = "100%", r.style.height = "100%";
    var n = document.getElementById(e).appendChild(r);
    null != n && pJSDom.push(new pJS(e, t))
}, window.particlesJS.load = function (e, t, a) {
    var i = new XMLHttpRequest;
    i.open("GET", t), i.onreadystatechange = function (t) {
        if (4 == i.readyState)if (200 == i.status) {
            var s = JSON.parse(t.currentTarget.response);
            window.particlesJS(e, s), a && a()
        } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found")
    }, i.send()
};

!function (t) {
    function e() {
    }

    function n(t, e) {
        return function () {
            t.apply(e, arguments)
        }
    }

    function o(t) {
        if ("object" != typeof this)throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t)throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], s(t, this)
    }

    function r(t, e) {
        for (; 3 === t._state;)t = t._value;
        return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void l(function () {
            var n = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null === n)return void(1 === t._state ? i : u)(e.promise, t._value);
            var o;
            try {
                o = n(t._value)
            } catch (r) {
                return void u(e.promise, r)
            }
            i(e.promise, o)
        }))
    }

    function i(t, e) {
        try {
            if (e === t)throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var r = e.then;
                if (e instanceof o)return t._state = 3, t._value = e, void f(t);
                if ("function" == typeof r)return void s(n(r, e), t)
            }
            t._state = 1, t._value = e, f(t)
        } catch (i) {
            u(t, i)
        }
    }

    function u(t, e) {
        t._state = 2, t._value = e, f(t)
    }

    function f(t) {
        2 === t._state && 0 === t._deferreds.length && l(function () {
            t._handled || d(t._value)
        });
        for (var e = 0, n = t._deferreds.length; n > e; e++)r(t, t._deferreds[e]);
        t._deferreds = null
    }

    function c(t, e, n) {
        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
    }

    function s(t, e) {
        var n = !1;
        try {
            t(function (t) {
                n || (n = !0, i(e, t))
            }, function (t) {
                n || (n = !0, u(e, t))
            })
        } catch (o) {
            if (n)return;
            n = !0, u(e, o)
        }
    }

    var a = setTimeout, l = "function" == typeof setImmediate && setImmediate || function (t) {
            a(t, 0)
        }, d = function (t) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
    };
    o.prototype["catch"] = function (t) {
        return this.then(null, t)
    }, o.prototype.then = function (t, n) {
        var o = new this.constructor(e);
        return r(this, new c(t, n, o)), o
    }, o.all = function (t) {
        var e = Array.prototype.slice.call(t);
        return new o(function (t, n) {
            function o(i, u) {
                try {
                    if (u && ("object" == typeof u || "function" == typeof u)) {
                        var f = u.then;
                        if ("function" == typeof f)return void f.call(u, function (t) {
                            o(i, t)
                        }, n)
                    }
                    e[i] = u, 0 === --r && t(e)
                } catch (c) {
                    n(c)
                }
            }

            if (0 === e.length)return t([]);
            for (var r = e.length, i = 0; i < e.length; i++)o(i, e[i])
        })
    }, o.resolve = function (t) {
        return t && "object" == typeof t && t.constructor === o ? t : new o(function (e) {
            e(t)
        })
    }, o.reject = function (t) {
        return new o(function (e, n) {
            n(t)
        })
    }, o.race = function (t) {
        return new o(function (e, n) {
            for (var o = 0, r = t.length; r > o; o++)t[o].then(e, n)
        })
    }, o._setImmediateFn = function (t) {
        l = t
    }, o._setUnhandledRejectionFn = function (t) {
        d = t
    }, "undefined" != typeof module && module.exports ? module.exports = o : t.Promise || (t.Promise = o)
}(this);
!function () {
    for (var n = 0, i = ["ms", "moz", "webkit", "o"], e = 0; e < i.length && !window.requestAnimationFrame; ++e)window.requestAnimationFrame = window[i[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i[e] + "CancelAnimationFrame"] || window[i[e] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (i, e) {
        var a = (new Date).getTime(), o = Math.max(0, 16 - (a - n)), t = window.setTimeout(function () {
            i(a + o)
        }, o);
        return n = a + o, t
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (n) {
        clearTimeout(n)
    })
}();

!function (t) {
    var e, n, r = "0.4.2", i = "hasOwnProperty", o = /[\.\/]/, a = /\s*,\s*/, s = "*", u = function (t, e) {
        return t - e
    }, l = {n: {}}, c = function () {
        for (var t = 0, e = this.length; e > t; t++)if ("undefined" != typeof this[t])return this[t]
    }, f = function () {
        for (var t = this.length; --t;)if ("undefined" != typeof this[t])return this[t]
    }, h = function (t, r) {
        t = String(t);
        var i, o = n, a = Array.prototype.slice.call(arguments, 2), s = h.listeners(t), l = 0, d = [], p = {}, g = [], m = e;
        g.firstDefined = c, g.lastDefined = f, e = t, n = 0;
        for (var v = 0, y = s.length; y > v; v++)"zIndex" in s[v] && (d.push(s[v].zIndex), s[v].zIndex < 0 && (p[s[v].zIndex] = s[v]));
        for (d.sort(u); d[l] < 0;)if (i = p[d[l++]], g.push(i.apply(r, a)), n)return n = o, g;
        for (v = 0; y > v; v++)if (i = s[v], "zIndex" in i)if (i.zIndex == d[l]) {
            if (g.push(i.apply(r, a)), n)break;
            do if (l++, i = p[d[l]], i && g.push(i.apply(r, a)), n)break; while (i)
        } else p[i.zIndex] = i; else if (g.push(i.apply(r, a)), n)break;
        return n = o, e = m, g
    };
    h._events = l, h.listeners = function (t) {
        var e, n, r, i, a, u, c, f, h = t.split(o), d = l, p = [d], g = [];
        for (i = 0, a = h.length; a > i; i++) {
            for (f = [], u = 0, c = p.length; c > u; u++)for (d = p[u].n, n = [d[h[i]], d[s]], r = 2; r--;)e = n[r], e && (f.push(e), g = g.concat(e.f || []));
            p = f
        }
        return g
    }, h.on = function (t, e) {
        if (t = String(t), "function" != typeof e)return function () {
        };
        for (var n = t.split(a), r = 0, i = n.length; i > r; r++)!function (t) {
            for (var n, r = t.split(o), i = l, a = 0, s = r.length; s > a; a++)i = i.n, i = i.hasOwnProperty(r[a]) && i[r[a]] || (i[r[a]] = {n: {}});
            for (i.f = i.f || [], a = 0, s = i.f.length; s > a; a++)if (i.f[a] == e) {
                n = !0;
                break
            }
            !n && i.f.push(e)
        }(n[r]);
        return function (t) {
            +t == +t && (e.zIndex = +t)
        }
    }, h.f = function (t) {
        var e = [].slice.call(arguments, 1);
        return function () {
            h.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
        }
    }, h.stop = function () {
        n = 1
    }, h.nt = function (t) {
        return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
    }, h.nts = function () {
        return e.split(o)
    }, h.off = h.unbind = function (t, e) {
        if (!t)return void(h._events = l = {n: {}});
        var n = t.split(a);
        if (n.length > 1)for (var r = 0, u = n.length; u > r; r++)h.off(n[r], e); else {
            n = t.split(o);
            var c, f, d, r, u, p, g, m = [l];
            for (r = 0, u = n.length; u > r; r++)for (p = 0; p < m.length; p += d.length - 2) {
                if (d = [p, 1], c = m[p].n, n[r] != s)c[n[r]] && d.push(c[n[r]]); else for (f in c)c[i](f) && d.push(c[f]);
                m.splice.apply(m, d)
            }
            for (r = 0, u = m.length; u > r; r++)for (c = m[r]; c.n;) {
                if (e) {
                    if (c.f) {
                        for (p = 0, g = c.f.length; g > p; p++)if (c.f[p] == e) {
                            c.f.splice(p, 1);
                            break
                        }
                        !c.f.length && delete c.f
                    }
                    for (f in c.n)if (c.n[i](f) && c.n[f].f) {
                        var v = c.n[f].f;
                        for (p = 0, g = v.length; g > p; p++)if (v[p] == e) {
                            v.splice(p, 1);
                            break
                        }
                        !v.length && delete c.n[f].f
                    }
                } else {
                    delete c.f;
                    for (f in c.n)c.n[i](f) && c.n[f].f && delete c.n[f].f
                }
                c = c.n
            }
        }
    }, h.once = function (t, e) {
        var n = function () {
            return h.unbind(t, n), e.apply(this, arguments)
        };
        return h.on(t, n)
    }, h.version = r, h.toString = function () {
        return "You are running Eve " + r
    }, "undefined" != typeof module && module.exports ? module.exports = h : "function" == typeof define && define.amd ? define("eve", [], function () {
        return h
    }) : t.eve = h
}(this), function (t, e) {
    if ("function" == typeof define && define.amd)define(["eve"], function (n) {
        return e(t, n)
    }); else if ("undefined" != typeof exports) {
        var n = require("eve");
        module.exports = e(t, n)
    } else e(t, t.eve)
}(window || this, function (t, e) {
    var n = function (e) {
        var n = {}, r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (t) {
                setTimeout(t, 16)
            }, i = Array.isArray || function (t) {
                return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
            }, o = 0, a = "M" + (+new Date).toString(36), s = function () {
            return a + (o++).toString(36)
        }, u = Date.now || function () {
                return +new Date
            }, l = function (t) {
            var e = this;
            if (null == t)return e.s;
            var n = e.s - t;
            e.b += e.dur * n, e.B += e.dur * n, e.s = t
        }, c = function (t) {
            var e = this;
            return null == t ? e.spd : void(e.spd = t)
        }, f = function (t) {
            var e = this;
            return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
        }, h = function () {
            var t = this;
            delete n[t.id], t.update(), e("mina.stop." + t.id, t)
        }, d = function () {
            var t = this;
            t.pdif || (delete n[t.id], t.update(), t.pdif = t.get() - t.b)
        }, p = function () {
            var t = this;
            t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t)
        }, g = function () {
            var t, e = this;
            if (i(e.start)) {
                t = [];
                for (var n = 0, r = e.start.length; r > n; n++)t[n] = +e.start[n] + (e.end[n] - e.start[n]) * e.easing(e.s)
            } else t = +e.start + (e.end - e.start) * e.easing(e.s);
            e.set(t)
        }, m = function () {
            var t = 0;
            for (var i in n)if (n.hasOwnProperty(i)) {
                var o = n[i], a = o.get();
                t++, o.s = (a - o.b) / (o.dur / o.spd), o.s >= 1 && (delete n[i], o.s = 1, t--, function (t) {
                    setTimeout(function () {
                        e("mina.finish." + t.id, t)
                    })
                }(o)), o.update()
            }
            t && r(m)
        }, v = function (t, e, i, o, a, u, y) {
            var x = {
                id: s(),
                start: t,
                end: e,
                b: i,
                s: 0,
                dur: o - i,
                spd: 1,
                get: a,
                set: u,
                easing: y || v.linear,
                status: l,
                speed: c,
                duration: f,
                stop: h,
                pause: d,
                resume: p,
                update: g
            };
            n[x.id] = x;
            var b, w = 0;
            for (b in n)if (n.hasOwnProperty(b) && (w++, 2 == w))break;
            return 1 == w && r(m), x
        };
        return v.time = u, v.getById = function (t) {
            return n[t] || null
        }, v.linear = function (t) {
            return t
        }, v.easeout = function (t) {
            return Math.pow(t, 1.7)
        }, v.easein = function (t) {
            return Math.pow(t, .48)
        }, v.easeinout = function (t) {
            if (1 == t)return 1;
            if (0 == t)return 0;
            var e = .48 - t / 1.04, n = Math.sqrt(.1734 + e * e), r = n - e, i = Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1), o = -n - e, a = Math.pow(Math.abs(o), 1 / 3) * (0 > o ? -1 : 1), s = i + a + .5;
            return 3 * (1 - s) * s * s + s * s * s
        }, v.backin = function (t) {
            if (1 == t)return 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, v.backout = function (t) {
            if (0 == t)return 0;
            t -= 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t + e) + 1
        }, v.elastic = function (t) {
            return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin(2 * (t - .075) * Math.PI / .3) + 1
        }, v.bounce = function (t) {
            var e, n = 7.5625, r = 2.75;
            return 1 / r > t ? e = n * t * t : 2 / r > t ? (t -= 1.5 / r, e = n * t * t + .75) : 2.5 / r > t ? (t -= 2.25 / r, e = n * t * t + .9375) : (t -= 2.625 / r, e = n * t * t + .984375), e
        }, t.mina = v, v
    }("undefined" == typeof e ? function () {
    } : e), r = function (t) {
        function n(t, e) {
            if (t) {
                if (t.nodeType)return S(t);
                if (i(t, "array") && n.set)return n.set.apply(n, t);
                if (t instanceof y)return t;
                if (null == e)return t = k.doc.querySelector(String(t)), S(t)
            }
            return t = null == t ? "100%" : t, e = null == e ? "100%" : e, new w(t, e)
        }

        function r(t, e) {
            if (e) {
                if ("#text" == t && (t = k.doc.createTextNode(e.text || e["#text"] || "")), "#comment" == t && (t = k.doc.createComment(e.text || e["#text"] || "")), "string" == typeof t && (t = r(t)), "string" == typeof e)return 1 == t.nodeType ? "xlink:" == e.substring(0, 6) ? t.getAttributeNS(X, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS($, e.substring(4)) : t.getAttribute(e) : "text" == e ? t.nodeValue : null;
                if (1 == t.nodeType) {
                    for (var n in e)if (e[_](n)) {
                        var i = T(e[n]);
                        i ? "xlink:" == n.substring(0, 6) ? t.setAttributeNS(X, n.substring(6), i) : "xml:" == n.substring(0, 4) ? t.setAttributeNS($, n.substring(4), i) : t.setAttribute(n, i) : t.removeAttribute(n)
                    }
                } else"text" in e && (t.nodeValue = e.text)
            } else t = k.doc.createElementNS($, t);
            return t
        }

        function i(t, e) {
            return e = T.prototype.toLowerCase.call(e), "finite" == e ? isFinite(t) : "array" == e && (t instanceof Array || Array.isArray && Array.isArray(t)) ? !0 : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || q.call(t).slice(8, -1).toLowerCase() == e
        }

        function o(t) {
            if ("function" == typeof t || Object(t) !== t)return t;
            var e = new t.constructor;
            for (var n in t)t[_](n) && (e[n] = o(t[n]));
            return e
        }

        function a(t, e) {
            for (var n = 0, r = t.length; r > n; n++)if (t[n] === e)return t.push(t.splice(n, 1)[0])
        }

        function s(t, e, n) {
            function r() {
                var i = Array.prototype.slice.call(arguments, 0), o = i.join("␀"), s = r.cache = r.cache || {}, u = r.count = r.count || [];
                return s[_](o) ? (a(u, o), n ? n(s[o]) : s[o]) : (u.length >= 1e3 && delete s[u.shift()], u.push(o), s[o] = t.apply(e, i), n ? n(s[o]) : s[o])
            }

            return r
        }

        function u(t, e, n, r, i, o) {
            if (null == i) {
                var a = t - n, s = e - r;
                return a || s ? (180 + 180 * A.atan2(-s, -a) / P + 360) % 360 : 0
            }
            return u(t, e, i, o) - u(n, r, i, o)
        }

        function l(t) {
            return t % 360 * P / 180
        }

        function c(t) {
            return 180 * t / P % 360
        }

        function f(t) {
            var e = [];
            return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (t, n, r) {
                return r = r.split(/\s*,\s*|\s+/), "rotate" == n && 1 == r.length && r.push(0, 0), "scale" == n && (r.length > 2 ? r = r.slice(0, 2) : 2 == r.length && r.push(0, 0), 1 == r.length && r.push(r[0], 0, 0)), e.push("skewX" == n ? ["m", 1, 0, A.tan(l(r[0])), 1, 0, 0] : "skewY" == n ? ["m", 1, A.tan(l(r[0])), 0, 1, 0, 0] : [n.charAt(0)].concat(r)), t
            }), e
        }

        function h(t, e) {
            var r = tt(t), i = new n.Matrix;
            if (r)for (var o = 0, a = r.length; a > o; o++) {
                var s, u, l, c, f, h = r[o], d = h.length, p = T(h[0]).toLowerCase(), g = h[0] != p, m = g ? i.invert() : 0;
                "t" == p && 2 == d ? i.translate(h[1], 0) : "t" == p && 3 == d ? g ? (s = m.x(0, 0), u = m.y(0, 0), l = m.x(h[1], h[2]), c = m.y(h[1], h[2]), i.translate(l - s, c - u)) : i.translate(h[1], h[2]) : "r" == p ? 2 == d ? (f = f || e, i.rotate(h[1], f.x + f.width / 2, f.y + f.height / 2)) : 4 == d && (g ? (l = m.x(h[2], h[3]), c = m.y(h[2], h[3]), i.rotate(h[1], l, c)) : i.rotate(h[1], h[2], h[3])) : "s" == p ? 2 == d || 3 == d ? (f = f || e, i.scale(h[1], h[d - 1], f.x + f.width / 2, f.y + f.height / 2)) : 4 == d ? g ? (l = m.x(h[2], h[3]), c = m.y(h[2], h[3]), i.scale(h[1], h[1], l, c)) : i.scale(h[1], h[1], h[2], h[3]) : 5 == d && (g ? (l = m.x(h[3], h[4]), c = m.y(h[3], h[4]), i.scale(h[1], h[2], l, c)) : i.scale(h[1], h[2], h[3], h[4])) : "m" == p && 7 == d && i.add(h[1], h[2], h[3], h[4], h[5], h[6])
            }
            return i
        }

        function d(t) {
            var e = t.node.ownerSVGElement && S(t.node.ownerSVGElement) || t.node.parentNode && S(t.node.parentNode) || n.select("svg") || n(0, 0), r = e.select("defs"), i = null == r ? !1 : r.node;
            return i || (i = b("defs", e.node).node), i
        }

        function p(t) {
            return t.node.ownerSVGElement && S(t.node.ownerSVGElement) || n.select("svg")
        }

        function m(t, e, n) {
            function i(t) {
                if (null == t)return L;
                if (t == +t)return t;
                r(l, {width: t});
                try {
                    return l.getBBox().width
                } catch (e) {
                    return 0
                }
            }

            function o(t) {
                if (null == t)return L;
                if (t == +t)return t;
                r(l, {height: t});
                try {
                    return l.getBBox().height
                } catch (e) {
                    return 0
                }
            }

            function a(r, i) {
                null == e ? u[r] = i(t.attr(r) || 0) : r == e && (u = i(null == n ? t.attr(r) || 0 : n))
            }

            var s = p(t).node, u = {}, l = s.querySelector(".svg---mgr");
            switch (l || (l = r("rect"), r(l, {
                x: -9e9,
                y: -9e9,
                width: 10,
                height: 10,
                "class": "svg---mgr",
                fill: "none"
            }), s.appendChild(l)), t.type) {
                case"rect":
                    a("rx", i), a("ry", o);
                case"image":
                    a("width", i), a("height", o);
                case"text":
                    a("x", i), a("y", o);
                    break;
                case"circle":
                    a("cx", i), a("cy", o), a("r", i);
                    break;
                case"ellipse":
                    a("cx", i), a("cy", o), a("rx", i), a("ry", o);
                    break;
                case"line":
                    a("x1", i), a("x2", i), a("y1", o), a("y2", o);
                    break;
                case"marker":
                    a("refX", i), a("markerWidth", i), a("refY", o), a("markerHeight", o);
                    break;
                case"radialGradient":
                    a("fx", i), a("fy", o);
                    break;
                case"tspan":
                    a("dx", i), a("dy", o);
                    break;
                default:
                    a(e, i)
            }
            return s.removeChild(l), u
        }

        function v(t) {
            i(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
            for (var e = 0, n = 0, r = this.node; this[e];)delete this[e++];
            for (e = 0; e < t.length; e++)"set" == t[e].type ? t[e].forEach(function (t) {
                r.appendChild(t.node)
            }) : r.appendChild(t[e].node);
            var o = r.childNodes;
            for (e = 0; e < o.length; e++)this[n++] = S(o[e]);
            return this
        }

        function y(t) {
            if (t.snap in H)return H[t.snap];
            var e;
            try {
                e = t.ownerSVGElement
            } catch (n) {
            }
            this.node = t, e && (this.paper = new w(e)), this.type = t.tagName || t.nodeName;
            var r = this.id = U(this);
            if (this.anims = {}, this._ = {transform: []}, t.snap = r, H[r] = this, "g" == this.type && (this.add = v), this.type in {
                    g: 1,
                    mask: 1,
                    pattern: 1,
                    symbol: 1
                })for (var i in w.prototype)w.prototype[_](i) && (this[i] = w.prototype[i])
        }

        function x(t) {
            this.node = t
        }

        function b(t, e) {
            var n = r(t);
            e.appendChild(n);
            var i = S(n);
            return i
        }

        function w(t, e) {
            var n, i, o, a = w.prototype;
            if (t && "svg" == t.tagName) {
                if (t.snap in H)return H[t.snap];
                var s = t.ownerDocument;
                n = new y(t), i = t.getElementsByTagName("desc")[0], o = t.getElementsByTagName("defs")[0], i || (i = r("desc"), i.appendChild(s.createTextNode("Created with Snap")), n.node.appendChild(i)), o || (o = r("defs"), n.node.appendChild(o)), n.defs = o;
                for (var u in a)a[_](u) && (n[u] = a[u]);
                n.paper = n.root = n
            } else n = b("svg", k.doc.body), r(n.node, {height: e, version: 1.1, width: t, xmlns: $});
            return n
        }

        function S(t) {
            return t ? t instanceof y || t instanceof x ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new w(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new w(t.contentDocument.getElementsByTagName("svg")[0]) : new y(t) : t
        }

        function C(t, e) {
            for (var n = 0, r = t.length; r > n; n++) {
                var i = {type: t[n].type, attr: t[n].attr()}, o = t[n].children();
                e.push(i), o.length && C(o, i.childNodes = [])
            }
        }

        n.version = "0.4.0", n.toString = function () {
            return "Snap v" + this.version
        }, n._ = {};
        var k = {win: t.window, doc: t.window.document};
        n._.glob = k;
        var _ = "hasOwnProperty", T = String, B = parseFloat, F = parseInt, A = Math, M = A.max, N = A.min, j = A.abs, P = (A.pow, A.PI), L = (A.round, ""), q = Object.prototype.toString, E = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i, V = (n._.separator = /[,\s]+/, /[\s]*,[\s]*/), O = {
            hs: 1,
            rg: 1
        }, G = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi, D = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi, R = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/gi, z = 0, I = "S" + (+new Date).toString(36), U = function (t) {
            return (t && t.type ? t.type : L) + I + (z++).toString(36)
        }, X = "http://www.w3.org/1999/xlink", $ = "http://www.w3.org/2000/svg", H = {};
        n.url = function (t) {
            return "url('#" + t + "')"
        }, n._.$ = r, n._.id = U, n.format = function () {
            var t = /\{([^\}]+)\}/g, e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, n = function (t, n, r) {
                var i = r;
                return n.replace(e, function (t, e, n, r, o) {
                    e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && o && (i = i()))
                }), i = (null == i || i == r ? t : i) + ""
            };
            return function (e, r) {
                return T(e).replace(t, function (t, e) {
                    return n(t, e, r)
                })
            }
        }(), n._.clone = o, n._.cacher = s, n.rad = l, n.deg = c, n.sin = function (t) {
            return A.sin(n.rad(t))
        }, n.tan = function (t) {
            return A.tan(n.rad(t))
        }, n.cos = function (t) {
            return A.cos(n.rad(t))
        }, n.asin = function (t) {
            return n.deg(A.asin(t))
        }, n.acos = function (t) {
            return n.deg(A.acos(t))
        }, n.atan = function (t) {
            return n.deg(A.atan(t))
        }, n.atan2 = function (t) {
            return n.deg(A.atan2(t))
        }, n.angle = u, n.len = function (t, e, r, i) {
            return Math.sqrt(n.len2(t, e, r, i))
        }, n.len2 = function (t, e, n, r) {
            return (t - n) * (t - n) + (e - r) * (e - r)
        }, n.closestPoint = function (t, e, n) {
            function r(t) {
                var r = t.x - e, i = t.y - n;
                return r * r + i * i
            }

            for (var i, o, a, s, u = t.node, l = u.getTotalLength(), c = l / u.pathSegList.numberOfItems * .125, f = 1 / 0, h = 0; l >= h; h += c)(s = r(a = u.getPointAtLength(h))) < f && (i = a, o = h, f = s);
            for (c *= .5; c > .5;) {
                var d, p, g, m, v, y;
                (g = o - c) >= 0 && (v = r(d = u.getPointAtLength(g))) < f ? (i = d, o = g, f = v) : (m = o + c) <= l && (y = r(p = u.getPointAtLength(m))) < f ? (i = p, o = m, f = y) : c *= .5
            }
            return i = {x: i.x, y: i.y, length: o, distance: Math.sqrt(f)}
        }, n.is = i, n.snapTo = function (t, e, n) {
            if (n = i(n, "finite") ? n : 10, i(t, "array")) {
                for (var r = t.length; r--;)if (j(t[r] - e) <= n)return t[r]
            } else {
                t = +t;
                var o = e % t;
                if (n > o)return e - o;
                if (o > t - n)return e - o + t
            }
            return e
        }, n.getRGB = s(function (t) {
            if (!t || (t = T(t)).indexOf("-") + 1)return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: Q};
            if ("none" == t)return {r: -1, g: -1, b: -1, hex: "none", toString: Q};
            if (!(O[_](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = Y(t)), !t)return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: Q
            };
            var e, r, o, a, s, u, l = t.match(E);
            return l ? (l[2] && (o = F(l[2].substring(5), 16), r = F(l[2].substring(3, 5), 16), e = F(l[2].substring(1, 3), 16)), l[3] && (o = F((s = l[3].charAt(3)) + s, 16), r = F((s = l[3].charAt(2)) + s, 16), e = F((s = l[3].charAt(1)) + s, 16)), l[4] && (u = l[4].split(V), e = B(u[0]), "%" == u[0].slice(-1) && (e *= 2.55), r = B(u[1]), "%" == u[1].slice(-1) && (r *= 2.55), o = B(u[2]), "%" == u[2].slice(-1) && (o *= 2.55), "rgba" == l[1].toLowerCase().slice(0, 4) && (a = B(u[3])), u[3] && "%" == u[3].slice(-1) && (a /= 100)), l[5] ? (u = l[5].split(V), e = B(u[0]), "%" == u[0].slice(-1) && (e /= 100), r = B(u[1]), "%" == u[1].slice(-1) && (r /= 100), o = B(u[2]), "%" == u[2].slice(-1) && (o /= 100), ("deg" == u[0].slice(-3) || "°" == u[0].slice(-1)) && (e /= 360), "hsba" == l[1].toLowerCase().slice(0, 4) && (a = B(u[3])), u[3] && "%" == u[3].slice(-1) && (a /= 100), n.hsb2rgb(e, r, o, a)) : l[6] ? (u = l[6].split(V), e = B(u[0]), "%" == u[0].slice(-1) && (e /= 100), r = B(u[1]), "%" == u[1].slice(-1) && (r /= 100), o = B(u[2]), "%" == u[2].slice(-1) && (o /= 100), ("deg" == u[0].slice(-3) || "°" == u[0].slice(-1)) && (e /= 360), "hsla" == l[1].toLowerCase().slice(0, 4) && (a = B(u[3])), u[3] && "%" == u[3].slice(-1) && (a /= 100), n.hsl2rgb(e, r, o, a)) : (e = N(A.round(e), 255), r = N(A.round(r), 255), o = N(A.round(o), 255), a = N(M(a, 0), 1), l = {
                r: e,
                g: r,
                b: o,
                toString: Q
            }, l.hex = "#" + (16777216 | o | r << 8 | e << 16).toString(16).slice(1), l.opacity = i(a, "finite") ? a : 1, l)) : {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: Q
            }
        }, n), n.hsb = s(function (t, e, r) {
            return n.hsb2rgb(t, e, r).hex
        }), n.hsl = s(function (t, e, r) {
            return n.hsl2rgb(t, e, r).hex
        }), n.rgb = s(function (t, e, n, r) {
            if (i(r, "finite")) {
                var o = A.round;
                return "rgba(" + [o(t), o(e), o(n), +r.toFixed(2)] + ")"
            }
            return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
        });
        var Y = function (t) {
            var e = k.doc.getElementsByTagName("head")[0] || k.doc.getElementsByTagName("svg")[0], n = "rgb(255, 0, 0)";
            return (Y = s(function (t) {
                if ("red" == t.toLowerCase())return n;
                e.style.color = n, e.style.color = t;
                var r = k.doc.defaultView.getComputedStyle(e, L).getPropertyValue("color");
                return r == n ? null : r
            }))(t)
        }, W = function () {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        }, Z = function () {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        }, Q = function () {
            return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
        }, J = function (t, e, r) {
            if (null == e && i(t, "object") && "r" in t && "g" in t && "b" in t && (r = t.b, e = t.g, t = t.r), null == e && i(t, string)) {
                var o = n.getRGB(t);
                t = o.r, e = o.g, r = o.b
            }
            return (t > 1 || e > 1 || r > 1) && (t /= 255, e /= 255, r /= 255), [t, e, r]
        }, K = function (t, e, r, o) {
            t = A.round(255 * t), e = A.round(255 * e), r = A.round(255 * r);
            var a = {r: t, g: e, b: r, opacity: i(o, "finite") ? o : 1, hex: n.rgb(t, e, r), toString: Q};
            return i(o, "finite") && (a.opacity = o), a
        };
        n.color = function (t) {
            var e;
            return i(t, "object") && "h" in t && "s" in t && "b" in t ? (e = n.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : i(t, "object") && "h" in t && "s" in t && "l" in t ? (e = n.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (i(t, "string") && (t = n.getRGB(t)), i(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = n.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = n.rgb2hsb(t), t.v = e.b) : (t = {hex: "none"}, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = Q, t
        }, n.hsb2rgb = function (t, e, n, r) {
            i(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, r = t.o, t = t.h), t *= 360;
            var o, a, s, u, l;
            return t = t % 360 / 60, l = n * e, u = l * (1 - j(t % 2 - 1)), o = a = s = n - l, t = ~~t, o += [l, u, 0, 0, u, l][t], a += [u, l, l, u, 0, 0][t], s += [0, 0, u, l, l, u][t], K(o, a, s, r)
        }, n.hsl2rgb = function (t, e, n, r) {
            i(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
            var o, a, s, u, l;
            return t = t % 360 / 60, l = 2 * e * (.5 > n ? n : 1 - n), u = l * (1 - j(t % 2 - 1)), o = a = s = n - l / 2, t = ~~t, o += [l, u, 0, 0, u, l][t], a += [u, l, l, u, 0, 0][t], s += [0, 0, u, l, l, u][t], K(o, a, s, r)
        }, n.rgb2hsb = function (t, e, n) {
            n = J(t, e, n), t = n[0], e = n[1], n = n[2];
            var r, i, o, a;
            return o = M(t, e, n), a = o - N(t, e, n), r = 0 == a ? null : o == t ? (e - n) / a : o == e ? (n - t) / a + 2 : (t - e) / a + 4, r = (r + 360) % 6 * 60 / 360, i = 0 == a ? 0 : a / o, {
                h: r,
                s: i,
                b: o,
                toString: W
            }
        }, n.rgb2hsl = function (t, e, n) {
            n = J(t, e, n), t = n[0], e = n[1], n = n[2];
            var r, i, o, a, s, u;
            return a = M(t, e, n), s = N(t, e, n), u = a - s, r = 0 == u ? null : a == t ? (e - n) / u : a == e ? (n - t) / u + 2 : (t - e) / u + 4, r = (r + 360) % 6 * 60 / 360, o = (a + s) / 2, i = 0 == u ? 0 : .5 > o ? u / (2 * o) : u / (2 - 2 * o), {
                h: r,
                s: i,
                l: o,
                toString: Z
            }
        }, n.parsePathString = function (t) {
            if (!t)return null;
            var e = n.path(t);
            if (e.arr)return n.path.clone(e.arr);
            var r = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0}, o = [];
            return i(t, "array") && i(t[0], "array") && (o = n.path.clone(t)), o.length || T(t).replace(G, function (t, e, n) {
                var i = [], a = e.toLowerCase();
                if (n.replace(R, function (t, e) {
                        e && i.push(+e)
                    }), "m" == a && i.length > 2 && (o.push([e].concat(i.splice(0, 2))), a = "l", e = "m" == e ? "l" : "L"), "o" == a && 1 == i.length && o.push([e, i[0]]), "r" == a)o.push([e].concat(i)); else for (; i.length >= r[a] && (o.push([e].concat(i.splice(0, r[a]))), r[a]););
            }), o.toString = n.path.toString, e.arr = n.path.clone(o), o
        };
        var tt = n.parseTransformString = function (t) {
            if (!t)return null;
            var e = [];
            return i(t, "array") && i(t[0], "array") && (e = n.path.clone(t)), e.length || T(t).replace(D, function (t, n, r) {
                var i = [];
                n.toLowerCase(), r.replace(R, function (t, e) {
                    e && i.push(+e)
                }), e.push([n].concat(i))
            }), e.toString = n.path.toString, e
        };
        n._.svgTransform2string = f, n._.rgTransform = /^[a-z][\s]*-?\.?\d/i, n._.transform2matrix = h, n._unit2px = m, k.doc.contains || k.doc.compareDocumentPosition ? function (t, e) {
            var n = 9 == t.nodeType ? t.documentElement : t, r = e && e.parentNode;
            return t == r || !(!r || 1 != r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
        } : function (t, e) {
            if (e)for (; e;)if (e = e.parentNode, e == t)return !0;
            return !1
        }, n._.getSomeDefs = d, n._.getSomeSVG = p, n.select = function (t) {
            return t = T(t).replace(/([^\\]):/g, "$1\\:"), S(k.doc.querySelector(t))
        }, n.selectAll = function (t) {
            for (var e = k.doc.querySelectorAll(t), r = (n.set || Array)(), i = 0; i < e.length; i++)r.push(S(e[i]));
            return r
        }, setInterval(function () {
            for (var t in H)if (H[_](t)) {
                var e = H[t], n = e.node;
                ("svg" != e.type && !n.ownerSVGElement || "svg" == e.type && (!n.parentNode || "ownerSVGElement" in n.parentNode && !n.ownerSVGElement)) && delete H[t]
            }
        }, 1e4), y.prototype.attr = function (t, n) {
            var r = this, o = r.node;
            if (!t) {
                if (1 != o.nodeType)return {text: o.nodeValue};
                for (var a = o.attributes, s = {}, u = 0, l = a.length; l > u; u++)s[a[u].nodeName] = a[u].nodeValue;
                return s
            }
            if (i(t, "string")) {
                if (!(arguments.length > 1))return e("snap.util.getattr." + t, r).firstDefined();
                var c = {};
                c[t] = n, t = c
            }
            for (var f in t)t[_](f) && e("snap.util.attr." + f, r, t[f]);
            return r
        }, n.parse = function (t) {
            var e = k.doc.createDocumentFragment(), n = !0, r = k.doc.createElement("div");
            if (t = T(t), t.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", n = !1), r.innerHTML = t, t = r.getElementsByTagName("svg")[0])if (n)e = t; else for (; t.firstChild;)e.appendChild(t.firstChild);
            return new x(e)
        }, n.fragment = function () {
            for (var t = Array.prototype.slice.call(arguments, 0), e = k.doc.createDocumentFragment(), r = 0, i = t.length; i > r; r++) {
                var o = t[r];
                o.node && o.node.nodeType && e.appendChild(o.node), o.nodeType && e.appendChild(o), "string" == typeof o && e.appendChild(n.parse(o).node)
            }
            return new x(e)
        }, n._.make = b, n._.wrap = S, w.prototype.el = function (t, e) {
            var n = b(t, this.node);
            return e && n.attr(e), n
        }, y.prototype.children = function () {
            for (var t = [], e = this.node.childNodes, r = 0, i = e.length; i > r; r++)t[r] = n(e[r]);
            return t
        }, y.prototype.toJSON = function () {
            var t = [];
            return C([this], t), t[0]
        }, e.on("snap.util.getattr", function () {
            var t = e.nt();
            t = t.substring(t.lastIndexOf(".") + 1);
            var n = t.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
            });
            return et[_](n) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : r(this.node, t)
        });
        var et = {
            "alignment-baseline": 0,
            "baseline-shift": 0,
            clip: 0,
            "clip-path": 0,
            "clip-rule": 0,
            color: 0,
            "color-interpolation": 0,
            "color-interpolation-filters": 0,
            "color-profile": 0,
            "color-rendering": 0,
            cursor: 0,
            direction: 0,
            display: 0,
            "dominant-baseline": 0,
            "enable-background": 0,
            fill: 0,
            "fill-opacity": 0,
            "fill-rule": 0,
            filter: 0,
            "flood-color": 0,
            "flood-opacity": 0,
            font: 0,
            "font-family": 0,
            "font-size": 0,
            "font-size-adjust": 0,
            "font-stretch": 0,
            "font-style": 0,
            "font-variant": 0,
            "font-weight": 0,
            "glyph-orientation-horizontal": 0,
            "glyph-orientation-vertical": 0,
            "image-rendering": 0,
            kerning: 0,
            "letter-spacing": 0,
            "lighting-color": 0,
            marker: 0,
            "marker-end": 0,
            "marker-mid": 0,
            "marker-start": 0,
            mask: 0,
            opacity: 0,
            overflow: 0,
            "pointer-events": 0,
            "shape-rendering": 0,
            "stop-color": 0,
            "stop-opacity": 0,
            stroke: 0,
            "stroke-dasharray": 0,
            "stroke-dashoffset": 0,
            "stroke-linecap": 0,
            "stroke-linejoin": 0,
            "stroke-miterlimit": 0,
            "stroke-opacity": 0,
            "stroke-width": 0,
            "text-anchor": 0,
            "text-decoration": 0,
            "text-rendering": 0,
            "unicode-bidi": 0,
            visibility: 0,
            "word-spacing": 0,
            "writing-mode": 0
        };
        e.on("snap.util.attr", function (t) {
            var n = e.nt(), i = {};
            n = n.substring(n.lastIndexOf(".") + 1), i[n] = t;
            var o = n.replace(/-(\w)/gi, function (t, e) {
                return e.toUpperCase()
            }), a = n.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
            });
            et[_](a) ? this.node.style[o] = null == t ? L : t : r(this.node, i)
        }), function () {
        }(w.prototype), n.ajax = function (t, n, r, o) {
            var a = new XMLHttpRequest, s = U();
            if (a) {
                if (i(n, "function"))o = r, r = n, n = null; else if (i(n, "object")) {
                    var u = [];
                    for (var l in n)n.hasOwnProperty(l) && u.push(encodeURIComponent(l) + "=" + encodeURIComponent(n[l]));
                    n = u.join("&")
                }
                return a.open(n ? "POST" : "GET", t, !0), n && (a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), r && (e.once("snap.ajax." + s + ".0", r), e.once("snap.ajax." + s + ".200", r), e.once("snap.ajax." + s + ".304", r)), a.onreadystatechange = function () {
                    4 == a.readyState && e("snap.ajax." + s + "." + a.status, o, a)
                }, 4 == a.readyState ? a : (a.send(n), a)
            }
        }, n.load = function (t, e, r) {
            n.ajax(t, function (t) {
                var i = n.parse(t.responseText);
                r ? e.call(r, i) : e(i)
            })
        };
        var nt = function (t) {
            var e = t.getBoundingClientRect(), n = t.ownerDocument, r = n.body, i = n.documentElement, o = i.clientTop || r.clientTop || 0, a = i.clientLeft || r.clientLeft || 0, s = e.top + (g.win.pageYOffset || i.scrollTop || r.scrollTop) - o, u = e.left + (g.win.pageXOffset || i.scrollLeft || r.scrollLeft) - a;
            return {y: s, x: u}
        };
        return n.getElementByPoint = function (t, e) {
            var n = this, r = (n.canvas, k.doc.elementFromPoint(t, e));
            if (k.win.opera && "svg" == r.tagName) {
                var i = nt(r), o = r.createSVGRect();
                o.x = t - i.x, o.y = e - i.y, o.width = o.height = 1;
                var a = r.getIntersectionList(o, null);
                a.length && (r = a[a.length - 1])
            }
            return r ? S(r) : null
        }, n.plugin = function (t) {
            t(n, y, w, k, x)
        }, k.win.Snap = n, n
    }(t || this);
    return r.plugin(function (r, i, o, a, s) {
        function u(t, e) {
            if (null == e) {
                var n = !0;
                if (e = t.node.getAttribute("linearGradient" == t.type || "radialGradient" == t.type ? "gradientTransform" : "pattern" == t.type ? "patternTransform" : "transform"), !e)return new r.Matrix;
                e = r._.svgTransform2string(e)
            } else e = r._.rgTransform.test(e) ? p(e).replace(/\.{3}|\u2026/g, t._.transform || "") : r._.svgTransform2string(e), d(e, "array") && (e = r.path ? r.path.toString.call(e) : p(e)), t._.transform = e;
            var i = r._.transform2matrix(e, t.getBBox(1));
            return n ? i : void(t.matrix = i)
        }

        function l(t) {
            function e(t, e) {
                var n = m(t.node, e);
                n = n && n.match(o), n = n && n[2], n && "#" == n.charAt() && (n = n.substring(1), n && (s[n] = (s[n] || []).concat(function (n) {
                    var r = {};
                    r[e] = URL(n), m(t.node, r)
                })))
            }

            function n(t) {
                var e = m(t.node, "xlink:href");
                e && "#" == e.charAt() && (e = e.substring(1), e && (s[e] = (s[e] || []).concat(function (e) {
                    t.attr("xlink:href", "#" + e)
                })))
            }

            for (var r, i = t.selectAll("*"), o = /^\s*url\(("|'|)(.*)\1\)\s*$/, a = [], s = {}, u = 0, l = i.length; l > u; u++) {
                r = i[u], e(r, "fill"), e(r, "stroke"), e(r, "filter"), e(r, "mask"), e(r, "clip-path"), n(r);
                var c = m(r.node, "id");
                c && (m(r.node, {id: r.id}), a.push({old: c, id: r.id}))
            }
            for (u = 0, l = a.length; l > u; u++) {
                var f = s[a[u].old];
                if (f)for (var h = 0, d = f.length; d > h; h++)f[h](a[u].id)
            }
        }

        function c(t, e, n) {
            return function (r) {
                var i = r.slice(t, e);
                return 1 == i.length && (i = i[0]), n ? n(i) : i
            }
        }

        function f(t) {
            return function () {
                var e = t ? "<" + this.type : "", n = this.node.attributes, r = this.node.childNodes;
                if (t)for (var i = 0, o = n.length; o > i; i++)e += " " + n[i].name + '="' + n[i].value.replace(/"/g, '\\"') + '"';
                if (r.length) {
                    for (t && (e += ">"), i = 0, o = r.length; o > i; i++)3 == r[i].nodeType ? e += r[i].nodeValue : 1 == r[i].nodeType && (e += b(r[i]).toString());
                    t && (e += "</" + this.type + ">")
                } else t && (e += "/>");
                return e
            }
        }

        var h = i.prototype, d = r.is, p = String, g = r._unit2px, m = r._.$, v = r._.make, y = r._.getSomeDefs, x = "hasOwnProperty", b = r._.wrap;
        h.getBBox = function (t) {
            if (!r.Matrix || !r.path)return this.node.getBBox();
            var e = this, n = new r.Matrix;
            if (e.removed)return r._.box();
            for (; "use" == e.type;)if (t || (n = n.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original)e = e.original; else {
                var i = e.attr("xlink:href");
                e = e.original = e.node.ownerDocument.getElementById(i.substring(i.indexOf("#") + 1))
            }
            var o = e._, a = r.path.get[e.type] || r.path.get.deflt;
            try {
                return t ? (o.bboxwt = a ? r.path.getBBox(e.realPath = a(e)) : r._.box(e.node.getBBox()), r._.box(o.bboxwt)) : (e.realPath = a(e), e.matrix = e.transform().localMatrix, o.bbox = r.path.getBBox(r.path.map(e.realPath, n.add(e.matrix))), r._.box(o.bbox))
            } catch (s) {
                return r._.box()
            }
        };
        var w = function () {
            return this.string
        };
        h.transform = function (t) {
            var e = this._;
            if (null == t) {
                for (var n, i = this, o = new r.Matrix(this.node.getCTM()), a = u(this), s = [a], l = new r.Matrix, c = a.toTransformString(), f = p(a) == p(this.matrix) ? p(e.transform) : c; "svg" != i.type && (i = i.parent());)s.push(u(i));
                for (n = s.length; n--;)l.add(s[n]);
                return {
                    string: f,
                    globalMatrix: o,
                    totalMatrix: l,
                    localMatrix: a,
                    diffMatrix: o.clone().add(a.invert()),
                    global: o.toTransformString(),
                    total: l.toTransformString(),
                    local: c,
                    toString: w
                }
            }
            return t instanceof r.Matrix ? (this.matrix = t, this._.transform = t.toTransformString()) : u(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? m(this.node, {gradientTransform: this.matrix}) : "pattern" == this.type ? m(this.node, {patternTransform: this.matrix}) : m(this.node, {transform: this.matrix})), this
        }, h.parent = function () {
            return b(this.node.parentNode)
        }, h.append = h.add = function (t) {
            if (t) {
                if ("set" == t.type) {
                    var e = this;
                    return t.forEach(function (t) {
                        e.add(t)
                    }), this
                }
                t = b(t), this.node.appendChild(t.node), t.paper = this.paper
            }
            return this
        }, h.appendTo = function (t) {
            return t && (t = b(t), t.append(this)), this
        }, h.prepend = function (t) {
            if (t) {
                if ("set" == t.type) {
                    var e, n = this;
                    return t.forEach(function (t) {
                        e ? e.after(t) : n.prepend(t), e = t
                    }), this
                }
                t = b(t);
                var r = t.parent();
                this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), r && r.add()
            }
            return this
        }, h.prependTo = function (t) {
            return t = b(t), t.prepend(this), this
        }, h.before = function (t) {
            if ("set" == t.type) {
                var e = this;
                return t.forEach(function (t) {
                    var n = t.parent();
                    e.node.parentNode.insertBefore(t.node, e.node), n && n.add()
                }), this.parent().add(), this
            }
            t = b(t);
            var n = t.parent();
            return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), n && n.add(), t.paper = this.paper, this
        }, h.after = function (t) {
            t = b(t);
            var e = t.parent();
            return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
        }, h.insertBefore = function (t) {
            t = b(t);
            var e = this.parent();
            return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
        }, h.insertAfter = function (t) {
            t = b(t);
            var e = this.parent();
            return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
        }, h.remove = function () {
            var t = this.parent();
            return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
        }, h.select = function (t) {
            return b(this.node.querySelector(t))
        }, h.selectAll = function (t) {
            for (var e = this.node.querySelectorAll(t), n = (r.set || Array)(), i = 0; i < e.length; i++)n.push(b(e[i]));
            return n
        }, h.asPX = function (t, e) {
            return null == e && (e = this.attr(t)), +g(this, t, e)
        }, h.use = function () {
            var t, e = this.node.id;
            return e || (e = this.id, m(this.node, {id: e})), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? v(this.type, this.node.parentNode) : v("use", this.node.parentNode), m(t.node, {"xlink:href": "#" + e}), t.original = this, t
        }, h.clone = function () {
            var t = b(this.node.cloneNode(!0));
            return m(t.node, "id") && m(t.node, {id: t.id}), l(t), t.insertAfter(this), t
        }, h.toDefs = function () {
            var t = y(this);
            return t.appendChild(this.node), this
        }, h.pattern = h.toPattern = function (t, e, n, r) {
            var i = v("pattern", y(this));
            return null == t && (t = this.getBBox()), d(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, t = t.x), m(i.node, {
                x: t,
                y: e,
                width: n,
                height: r,
                patternUnits: "userSpaceOnUse",
                id: i.id,
                viewBox: [t, e, n, r].join(" ")
            }), i.node.appendChild(this.node), i
        }, h.marker = function (t, e, n, r, i, o) {
            var a = v("marker", y(this));
            return null == t && (t = this.getBBox()), d(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, i = t.refX || t.cx, o = t.refY || t.cy, t = t.x), m(a.node, {
                viewBox: [t, e, n, r].join(" "),
                markerWidth: n,
                markerHeight: r,
                orient: "auto",
                refX: i || 0,
                refY: o || 0,
                id: a.id
            }), a.node.appendChild(this.node), a
        };
        var S = function (t, e, r, i) {
            "function" != typeof r || r.length || (i = r, r = n.linear), this.attr = t, this.dur = e, r && (this.easing = r), i && (this.callback = i)
        };
        r._.Animation = S, r.animation = function (t, e, n, r) {
            return new S(t, e, n, r)
        }, h.inAnim = function () {
            var t = this, e = [];
            for (var n in t.anims)t.anims[x](n) && !function (t) {
                e.push({
                    anim: new S(t._attrs, t.dur, t.easing, t._callback),
                    mina: t,
                    curStatus: t.status(),
                    status: function (e) {
                        return t.status(e)
                    },
                    stop: function () {
                        t.stop()
                    }
                })
            }(t.anims[n]);
            return e
        }, r.animate = function (t, r, i, o, a, s) {
            "function" != typeof a || a.length || (s = a, a = n.linear);
            var u = n.time(), l = n(t, r, u, u + o, n.time, i, a);
            return s && e.once("mina.finish." + l.id, s), l
        }, h.stop = function () {
            for (var t = this.inAnim(), e = 0, n = t.length; n > e; e++)t[e].stop();
            return this
        }, h.animate = function (t, r, i, o) {
            "function" != typeof i || i.length || (o = i, i = n.linear), t instanceof S && (o = t.callback, i = t.easing, r = t.dur, t = t.attr);
            var a, s, u, l, f = [], h = [], g = {}, m = this;
            for (var v in t)if (t[x](v)) {
                m.equal ? (l = m.equal(v, p(t[v])), a = l.from, s = l.to, u = l.f) : (a = +m.attr(v), s = +t[v]);
                var y = d(a, "array") ? a.length : 1;
                g[v] = c(f.length, f.length + y, u), f = f.concat(a), h = h.concat(s)
            }
            var b = n.time(), w = n(f, h, b, b + r, n.time, function (t) {
                var e = {};
                for (var n in g)g[x](n) && (e[n] = g[n](t));
                m.attr(e)
            }, i);
            return m.anims[w.id] = w, w._attrs = t, w._callback = o, e("snap.animcreated." + m.id, w), e.once("mina.finish." + w.id, function () {
                delete m.anims[w.id], o && o.call(m)
            }), e.once("mina.stop." + w.id, function () {
                delete m.anims[w.id]
            }), m
        };
        var C = {};
        h.data = function (t, n) {
            var i = C[this.id] = C[this.id] || {};
            if (0 == arguments.length)return e("snap.data.get." + this.id, this, i, null),
                i;
            if (1 == arguments.length) {
                if (r.is(t, "object")) {
                    for (var o in t)t[x](o) && this.data(o, t[o]);
                    return this
                }
                return e("snap.data.get." + this.id, this, i[t], t), i[t]
            }
            return i[t] = n, e("snap.data.set." + this.id, this, n, t), this
        }, h.removeData = function (t) {
            return null == t ? C[this.id] = {} : C[this.id] && delete C[this.id][t], this
        }, h.outerSVG = h.toString = f(1), h.innerSVG = f(), h.toDataURL = function () {
            if (t && t.btoa) {
                var e = this.getBBox(), n = r.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                    x: +e.x.toFixed(3),
                    y: +e.y.toFixed(3),
                    width: +e.width.toFixed(3),
                    height: +e.height.toFixed(3),
                    contents: this.outerSVG()
                });
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(n)))
            }
        }, s.prototype.select = h.select, s.prototype.selectAll = h.selectAll
    }), r.plugin(function (t) {
        function e(t, e, r, i, o, a) {
            return null == e && "[object SVGMatrix]" == n.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +r, this.d = +i, this.e = +o, this.f = +a) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }

        var n = Object.prototype.toString, r = String, i = Math, o = "";
        !function (n) {
            function a(t) {
                return t[0] * t[0] + t[1] * t[1]
            }

            function s(t) {
                var e = i.sqrt(a(t));
                t[0] && (t[0] /= e), t[1] && (t[1] /= e)
            }

            n.add = function (t, n, r, i, o, a) {
                var s, u, l, c, f = [[], [], []], h = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]], d = [[t, r, o], [n, i, a], [0, 0, 1]];
                for (t && t instanceof e && (d = [[t.a, t.c, t.e], [t.b, t.d, t.f], [0, 0, 1]]), s = 0; 3 > s; s++)for (u = 0; 3 > u; u++) {
                    for (c = 0, l = 0; 3 > l; l++)c += h[s][l] * d[l][u];
                    f[s][u] = c
                }
                return this.a = f[0][0], this.b = f[1][0], this.c = f[0][1], this.d = f[1][1], this.e = f[0][2], this.f = f[1][2], this
            }, n.invert = function () {
                var t = this, n = t.a * t.d - t.b * t.c;
                return new e(t.d / n, -t.b / n, -t.c / n, t.a / n, (t.c * t.f - t.d * t.e) / n, (t.b * t.e - t.a * t.f) / n)
            }, n.clone = function () {
                return new e(this.a, this.b, this.c, this.d, this.e, this.f)
            }, n.translate = function (t, e) {
                return this.add(1, 0, 0, 1, t, e)
            }, n.scale = function (t, e, n, r) {
                return null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r), this
            }, n.rotate = function (e, n, r) {
                e = t.rad(e), n = n || 0, r = r || 0;
                var o = +i.cos(e).toFixed(9), a = +i.sin(e).toFixed(9);
                return this.add(o, a, -a, o, n, r), this.add(1, 0, 0, 1, -n, -r)
            }, n.x = function (t, e) {
                return t * this.a + e * this.c + this.e
            }, n.y = function (t, e) {
                return t * this.b + e * this.d + this.f
            }, n.get = function (t) {
                return +this[r.fromCharCode(97 + t)].toFixed(4)
            }, n.toString = function () {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }, n.offset = function () {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, n.determinant = function () {
                return this.a * this.d - this.b * this.c
            }, n.split = function () {
                var e = {};
                e.dx = this.e, e.dy = this.f;
                var n = [[this.a, this.c], [this.b, this.d]];
                e.scalex = i.sqrt(a(n[0])), s(n[0]), e.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * e.shear, n[1][1] - n[0][1] * e.shear], e.scaley = i.sqrt(a(n[1])), s(n[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
                var r = -n[0][1], o = n[1][1];
                return 0 > o ? (e.rotate = t.deg(i.acos(o)), 0 > r && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(i.asin(r)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
            }, n.toTransformString = function (t) {
                var e = t || this.split();
                return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : o) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : o) + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : o))
            }
        }(e.prototype), t.Matrix = e, t.matrix = function (t, n, r, i, o, a) {
            return new e(t, n, r, i, o, a)
        }
    }), r.plugin(function (t, n, r, i, o) {
        function a(r) {
            return function (i) {
                if (e.stop(), i instanceof o && 1 == i.node.childNodes.length && ("radialGradient" == i.node.firstChild.tagName || "linearGradient" == i.node.firstChild.tagName || "pattern" == i.node.firstChild.tagName) && (i = i.node.firstChild, d(this).appendChild(i), i = f(i)), i instanceof n)if ("radialGradient" == i.type || "linearGradient" == i.type || "pattern" == i.type) {
                    i.node.id || g(i.node, {id: i.id});
                    var a = m(i.node.id)
                } else a = i.attr(r); else if (a = t.color(i), a.error) {
                    var s = t(d(this).ownerSVGElement).gradient(i);
                    s ? (s.node.id || g(s.node, {id: s.id}), a = m(s.node.id)) : a = i
                } else a = v(a);
                var u = {};
                u[r] = a, g(this.node, u), this.node.style[r] = x
            }
        }

        function s(t) {
            e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
        }

        function u(t) {
            for (var e = [], n = t.childNodes, r = 0, i = n.length; i > r; r++) {
                var o = n[r];
                3 == o.nodeType && e.push(o.nodeValue), "tspan" == o.tagName && e.push(1 == o.childNodes.length && 3 == o.firstChild.nodeType ? o.firstChild.nodeValue : u(o))
            }
            return e
        }

        function l() {
            return e.stop(), this.node.style.fontSize
        }

        var c = t._.make, f = t._.wrap, h = t.is, d = t._.getSomeDefs, p = /^url\(#?([^)]+)\)$/, g = t._.$, m = t.url, v = String, y = t._.separator, x = "";
        e.on("snap.util.attr.mask", function (t) {
            if (t instanceof n || t instanceof o) {
                if (e.stop(), t instanceof o && 1 == t.node.childNodes.length && (t = t.node.firstChild, d(this).appendChild(t), t = f(t)), "mask" == t.type)var r = t; else r = c("mask", d(this)), r.node.appendChild(t.node);
                !r.node.id && g(r.node, {id: r.id}), g(this.node, {mask: m(r.id)})
            }
        }), function (t) {
            e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t)
        }(function (t) {
            if (t instanceof n || t instanceof o) {
                if (e.stop(), "clipPath" == t.type)var r = t; else r = c("clipPath", d(this)), r.node.appendChild(t.node), !r.node.id && g(r.node, {id: r.id});
                g(this.node, {"clip-path": m(r.node.id || r.id)})
            }
        }), e.on("snap.util.attr.fill", a("fill")), e.on("snap.util.attr.stroke", a("stroke"));
        var b = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        e.on("snap.util.grad.parse", function (t) {
            t = v(t);
            var e = t.match(b);
            if (!e)return null;
            var n = e[1], r = e[2], i = e[3];
            return r = r.split(/\s*,\s*/).map(function (t) {
                return +t == t ? +t : t
            }), 1 == r.length && 0 == r[0] && (r = []), i = i.split("-"), i = i.map(function (t) {
                t = t.split(":");
                var e = {color: t[0]};
                return t[1] && (e.offset = parseFloat(t[1])), e
            }), {type: n, params: r, stops: i}
        }), e.on("snap.util.attr.d", function (n) {
            e.stop(), h(n, "array") && h(n[0], "array") && (n = t.path.toString.call(n)), n = v(n), n.match(/[ruo]/i) && (n = t.path.toAbsolute(n)), g(this.node, {d: n})
        })(-1), e.on("snap.util.attr.#text", function (t) {
            e.stop(), t = v(t);
            for (var n = i.doc.createTextNode(t); this.node.firstChild;)this.node.removeChild(this.node.firstChild);
            this.node.appendChild(n)
        })(-1), e.on("snap.util.attr.path", function (t) {
            e.stop(), this.attr({d: t})
        })(-1), e.on("snap.util.attr.class", function (t) {
            e.stop(), this.node.className.baseVal = t
        })(-1), e.on("snap.util.attr.viewBox", function (t) {
            var n;
            n = h(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : h(t, "array") ? t.join(" ") : t, g(this.node, {viewBox: n}), e.stop()
        })(-1), e.on("snap.util.attr.transform", function (t) {
            this.transform(t), e.stop()
        })(-1), e.on("snap.util.attr.r", function (t) {
            "rect" == this.type && (e.stop(), g(this.node, {rx: t, ry: t}))
        })(-1), e.on("snap.util.attr.textpath", function (t) {
            if (e.stop(), "text" == this.type) {
                var r, i, o;
                if (!t && this.textPath) {
                    for (i = this.textPath; i.node.firstChild;)this.node.appendChild(i.node.firstChild);
                    return i.remove(), void delete this.textPath
                }
                if (h(t, "string")) {
                    var a = d(this), s = f(a.parentNode).path(t);
                    a.appendChild(s.node), r = s.id, s.attr({id: r})
                } else t = f(t), t instanceof n && (r = t.attr("id"), r || (r = t.id, t.attr({id: r})));
                if (r)if (i = this.textPath, o = this.node, i)i.attr({"xlink:href": "#" + r}); else {
                    for (i = g("textPath", {"xlink:href": "#" + r}); o.firstChild;)i.appendChild(o.firstChild);
                    o.appendChild(i), this.textPath = f(i)
                }
            }
        })(-1), e.on("snap.util.attr.text", function (t) {
            if ("text" == this.type) {
                for (var n = this.node, r = function (t) {
                    var e = g("tspan");
                    if (h(t, "array"))for (var n = 0; n < t.length; n++)e.appendChild(r(t[n])); else e.appendChild(i.doc.createTextNode(t));
                    return e.normalize && e.normalize(), e
                }; n.firstChild;)n.removeChild(n.firstChild);
                for (var o = r(t); o.firstChild;)n.appendChild(o.firstChild)
            }
            e.stop()
        })(-1), e.on("snap.util.attr.fontSize", s)(-1), e.on("snap.util.attr.font-size", s)(-1), e.on("snap.util.getattr.transform", function () {
            return e.stop(), this.transform()
        })(-1), e.on("snap.util.getattr.textpath", function () {
            return e.stop(), this.textPath
        })(-1), function () {
            function n(n) {
                return function () {
                    e.stop();
                    var r = i.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + n);
                    return "none" == r ? r : t(i.doc.getElementById(r.match(p)[1]))
                }
            }

            function r(t) {
                return function (n) {
                    e.stop();
                    var r = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                    if ("" == n || !n)return void(this.node.style[r] = "none");
                    if ("marker" == n.type) {
                        var i = n.node.id;
                        return i || g(n.node, {id: n.id}), void(this.node.style[r] = m(i))
                    }
                }
            }

            e.on("snap.util.getattr.marker-end", n("end"))(-1), e.on("snap.util.getattr.markerEnd", n("end"))(-1), e.on("snap.util.getattr.marker-start", n("start"))(-1), e.on("snap.util.getattr.markerStart", n("start"))(-1), e.on("snap.util.getattr.marker-mid", n("mid"))(-1), e.on("snap.util.getattr.markerMid", n("mid"))(-1), e.on("snap.util.attr.marker-end", r("end"))(-1), e.on("snap.util.attr.markerEnd", r("end"))(-1), e.on("snap.util.attr.marker-start", r("start"))(-1), e.on("snap.util.attr.markerStart", r("start"))(-1), e.on("snap.util.attr.marker-mid", r("mid"))(-1), e.on("snap.util.attr.markerMid", r("mid"))(-1)
        }(), e.on("snap.util.getattr.r", function () {
            return "rect" == this.type && g(this.node, "rx") == g(this.node, "ry") ? (e.stop(), g(this.node, "rx")) : void 0
        })(-1), e.on("snap.util.getattr.text", function () {
            if ("text" == this.type || "tspan" == this.type) {
                e.stop();
                var t = u(this.node);
                return 1 == t.length ? t[0] : t
            }
        })(-1), e.on("snap.util.getattr.#text", function () {
            return this.node.textContent
        })(-1), e.on("snap.util.getattr.viewBox", function () {
            e.stop();
            var n = g(this.node, "viewBox");
            return n ? (n = n.split(y), t._.box(+n[0], +n[1], +n[2], +n[3])) : void 0
        })(-1), e.on("snap.util.getattr.points", function () {
            var t = g(this.node, "points");
            return e.stop(), t ? t.split(y) : void 0
        })(-1), e.on("snap.util.getattr.path", function () {
            var t = g(this.node, "d");
            return e.stop(), t
        })(-1), e.on("snap.util.getattr.class", function () {
            return this.node.className.baseVal
        })(-1), e.on("snap.util.getattr.fontSize", l)(-1), e.on("snap.util.getattr.font-size", l)(-1)
    }), r.plugin(function (t, e) {
        var n = /\S+/g, r = String, i = e.prototype;
        i.addClass = function (t) {
            var e, i, o, a, s = r(t || "").match(n) || [], u = this.node, l = u.className.baseVal, c = l.match(n) || [];
            if (s.length) {
                for (e = 0; o = s[e++];)i = c.indexOf(o), ~i || c.push(o);
                a = c.join(" "), l != a && (u.className.baseVal = a)
            }
            return this
        }, i.removeClass = function (t) {
            var e, i, o, a, s = r(t || "").match(n) || [], u = this.node, l = u.className.baseVal, c = l.match(n) || [];
            if (c.length) {
                for (e = 0; o = s[e++];)i = c.indexOf(o), ~i && c.splice(i, 1);
                a = c.join(" "), l != a && (u.className.baseVal = a)
            }
            return this
        }, i.hasClass = function (t) {
            var e = this.node, r = e.className.baseVal, i = r.match(n) || [];
            return !!~i.indexOf(t)
        }, i.toggleClass = function (t, e) {
            if (null != e)return e ? this.addClass(t) : this.removeClass(t);
            var r, i, o, a, s = (t || "").match(n) || [], u = this.node, l = u.className.baseVal, c = l.match(n) || [];
            for (r = 0; o = s[r++];)i = c.indexOf(o), ~i ? c.splice(i, 1) : c.push(o);
            return a = c.join(" "), l != a && (u.className.baseVal = a), this
        }
    }), r.plugin(function () {
        function t(t) {
            return t
        }

        function n(t) {
            return function (e) {
                return +e.toFixed(3) + t
            }
        }

        var r = {
            "+": function (t, e) {
                return t + e
            }, "-": function (t, e) {
                return t - e
            }, "/": function (t, e) {
                return t / e
            }, "*": function (t, e) {
                return t * e
            }
        }, i = String, o = /[a-z]+$/i, a = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        e.on("snap.util.attr", function (t) {
            var n = i(t).match(a);
            if (n) {
                var s = e.nt(), u = s.substring(s.lastIndexOf(".") + 1), l = this.attr(u), c = {};
                e.stop();
                var f = n[3] || "", h = l.match(o), d = r[n[1]];
                if (h && h == f ? t = d(parseFloat(l), +n[2]) : (l = this.asPX(u), t = d(this.asPX(u), this.asPX(u, n[2] + f))), isNaN(l) || isNaN(t))return;
                c[u] = t, this.attr(c)
            }
        })(-10), e.on("snap.util.equal", function (s, u) {
            var l = i(this.attr(s) || ""), c = i(u).match(a);
            if (c) {
                e.stop();
                var f = c[3] || "", h = l.match(o), d = r[c[1]];
                return h && h == f ? {
                    from: parseFloat(l),
                    to: d(parseFloat(l), +c[2]),
                    f: n(h)
                } : (l = this.asPX(s), {from: l, to: d(l, this.asPX(s, c[2] + f)), f: t})
            }
        })(-10)
    }), r.plugin(function (n, r, i, o) {
        var a = i.prototype, s = n.is;
        a.rect = function (t, e, n, r, i, o) {
            var a;
            return null == o && (o = i), s(t, "object") && "[object Object]" == t ? a = t : null != t && (a = {
                x: t,
                y: e,
                width: n,
                height: r
            }, null != i && (a.rx = i, a.ry = o)), this.el("rect", a)
        }, a.circle = function (t, e, n) {
            var r;
            return s(t, "object") && "[object Object]" == t ? r = t : null != t && (r = {
                cx: t,
                cy: e,
                r: n
            }), this.el("circle", r)
        };
        var u = function () {
            function t() {
                this.parentNode.removeChild(this)
            }

            return function (e, n) {
                var r = o.doc.createElement("img"), i = o.doc.body;
                r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function () {
                    n.call(r), r.onload = r.onerror = null, i.removeChild(r)
                }, r.onerror = t, i.appendChild(r), r.src = e
            }
        }();
        a.image = function (t, e, r, i, o) {
            var a = this.el("image");
            if (s(t, "object") && "src" in t)a.attr(t); else if (null != t) {
                var l = {"xlink:href": t, preserveAspectRatio: "none"};
                null != e && null != r && (l.x = e, l.y = r), null != i && null != o ? (l.width = i, l.height = o) : u(t, function () {
                    n._.$(a.node, {width: this.offsetWidth, height: this.offsetHeight})
                }), n._.$(a.node, l)
            }
            return a
        }, a.ellipse = function (t, e, n, r) {
            var i;
            return s(t, "object") && "[object Object]" == t ? i = t : null != t && (i = {
                cx: t,
                cy: e,
                rx: n,
                ry: r
            }), this.el("ellipse", i)
        }, a.path = function (t) {
            var e;
            return s(t, "object") && !s(t, "array") ? e = t : t && (e = {d: t}), this.el("path", e)
        }, a.group = a.g = function (t) {
            var e = this.el("g");
            return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
        }, a.svg = function (t, e, n, r, i, o, a, u) {
            var l = {};
            return s(t, "object") && null == e ? l = t : (null != t && (l.x = t), null != e && (l.y = e), null != n && (l.width = n), null != r && (l.height = r), null != i && null != o && null != a && null != u && (l.viewBox = [i, o, a, u])), this.el("svg", l)
        }, a.mask = function (t) {
            var e = this.el("mask");
            return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
        }, a.ptrn = function (t, e, n, r, i, o, a, u) {
            if (s(t, "object"))var l = t; else l = {patternUnits: "userSpaceOnUse"}, t && (l.x = t), e && (l.y = e), null != n && (l.width = n), null != r && (l.height = r), l.viewBox = null != i && null != o && null != a && null != u ? [i, o, a, u] : [t || 0, e || 0, n || 0, r || 0];
            return this.el("pattern", l)
        }, a.use = function (t) {
            return null != t ? (t instanceof r && (t.attr("id") || t.attr({id: n._.id(t)}), t = t.attr("id")), "#" == String(t).charAt() && (t = t.substring(1)), this.el("use", {"xlink:href": "#" + t})) : r.prototype.use.call(this)
        }, a.symbol = function (t, e, n, r) {
            var i = {};
            return null != t && null != e && null != n && null != r && (i.viewBox = [t, e, n, r]), this.el("symbol", i)
        }, a.text = function (t, e, n) {
            var r = {};
            return s(t, "object") ? r = t : null != t && (r = {x: t, y: e, text: n || ""}), this.el("text", r)
        }, a.line = function (t, e, n, r) {
            var i = {};
            return s(t, "object") ? i = t : null != t && (i = {x1: t, x2: n, y1: e, y2: r}), this.el("line", i)
        }, a.polyline = function (t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return s(t, "object") && !s(t, "array") ? e = t : null != t && (e = {points: t}), this.el("polyline", e)
        }, a.polygon = function (t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return s(t, "object") && !s(t, "array") ? e = t : null != t && (e = {points: t}), this.el("polygon", e)
        }, function () {
            function r() {
                return this.selectAll("stop")
            }

            function i(t, e) {
                var r = c("stop"), i = {offset: +e + "%"};
                return t = n.color(t), i["stop-color"] = t.hex, t.opacity < 1 && (i["stop-opacity"] = t.opacity), c(r, i), this.node.appendChild(r), this
            }

            function o() {
                if ("linearGradient" == this.type) {
                    var t = c(this.node, "x1") || 0, e = c(this.node, "x2") || 1, r = c(this.node, "y1") || 0, i = c(this.node, "y2") || 0;
                    return n._.box(t, r, math.abs(e - t), math.abs(i - r))
                }
                var o = this.node.cx || .5, a = this.node.cy || .5, s = this.node.r || 0;
                return n._.box(o - s, a - s, 2 * s, 2 * s)
            }

            function s(t, n) {
                function r(t, e) {
                    for (var n = (e - f) / (t - h), r = h; t > r; r++)a[r].offset = +(+f + n * (r - h)).toFixed(2);
                    h = t, f = e
                }

                var i, o = e("snap.util.grad.parse", null, n).firstDefined();
                if (!o)return null;
                o.params.unshift(t), i = "l" == o.type.toLowerCase() ? u.apply(0, o.params) : l.apply(0, o.params), o.type != o.type.toLowerCase() && c(i.node, {gradientUnits: "userSpaceOnUse"});
                var a = o.stops, s = a.length, f = 0, h = 0;
                s--;
                for (var d = 0; s > d; d++)"offset" in a[d] && r(d, a[d].offset);
                for (a[s].offset = a[s].offset || 100, r(s, a[s].offset), d = 0; s >= d; d++) {
                    var p = a[d];
                    i.addStop(p.color, p.offset)
                }
                return i
            }

            function u(t, e, a, s, u) {
                var l = n._.make("linearGradient", t);
                return l.stops = r, l.addStop = i, l.getBBox = o, null != e && c(l.node, {
                    x1: e,
                    y1: a,
                    x2: s,
                    y2: u
                }), l
            }

            function l(t, e, a, s, u, l) {
                var f = n._.make("radialGradient", t);
                return f.stops = r, f.addStop = i, f.getBBox = o, null != e && c(f.node, {
                    cx: e,
                    cy: a,
                    r: s
                }), null != u && null != l && c(f.node, {fx: u, fy: l}), f
            }

            var c = n._.$;
            a.gradient = function (t) {
                return s(this.defs, t)
            }, a.gradientLinear = function (t, e, n, r) {
                return u(this.defs, t, e, n, r)
            }, a.gradientRadial = function (t, e, n, r, i) {
                return l(this.defs, t, e, n, r, i)
            }, a.toString = function () {
                var t, e = this.node.ownerDocument, r = e.createDocumentFragment(), i = e.createElement("div"), o = this.node.cloneNode(!0);
                return r.appendChild(i), i.appendChild(o), n._.$(o, {xmlns: "http://www.w3.org/2000/svg"}), t = i.innerHTML, r.removeChild(r.firstChild), t
            }, a.toDataURL = function () {
                return t && t.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
            }, a.clear = function () {
                for (var t, e = this.node.firstChild; e;)t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : a.clear.call({node: e}), e = t
            }
        }()
    }), r.plugin(function (t, e) {
        function n(t) {
            var e = n.ps = n.ps || {};
            return e[t] ? e[t].sleep = 100 : e[t] = {sleep: 100}, setTimeout(function () {
                for (var n in e)e[E](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
            }), e[t]
        }

        function r(t, e, n, r) {
            return null == t && (t = e = n = r = 0), null == e && (e = t.y, n = t.width, r = t.height, t = t.x), {
                x: t,
                y: e,
                width: n,
                w: n,
                height: r,
                h: r,
                x2: t + n,
                y2: e + r,
                cx: t + n / 2,
                cy: e + r / 2,
                r1: G.min(n, r) / 2,
                r2: G.max(n, r) / 2,
                r0: G.sqrt(n * n + r * r) / 2,
                path: S(t, e, n, r),
                vb: [t, e, n, r].join(" ")
            }
        }

        function i() {
            return this.join(",").replace(V, "$1")
        }

        function o(t) {
            var e = q(t);
            return e.toString = i, e
        }

        function a(t, e, n, r, i, o, a, s, l) {
            return null == l ? d(t, e, n, r, i, o, a, s) : u(t, e, n, r, i, o, a, s, p(t, e, n, r, i, o, a, s, l))
        }

        function s(n, r) {
            function i(t) {
                return +(+t).toFixed(3)
            }

            return t._.cacher(function (t, o, s) {
                t instanceof e && (t = t.attr("d")), t = M(t);
                for (var l, c, f, h, d, p = "", g = {}, m = 0, v = 0, y = t.length; y > v; v++) {
                    if (f = t[v], "M" == f[0])l = +f[1], c = +f[2]; else {
                        if (h = a(l, c, f[1], f[2], f[3], f[4], f[5], f[6]), m + h > o) {
                            if (r && !g.start) {
                                if (d = a(l, c, f[1], f[2], f[3], f[4], f[5], f[6], o - m), p += ["C" + i(d.start.x), i(d.start.y), i(d.m.x), i(d.m.y), i(d.x), i(d.y)], s)return p;
                                g.start = p, p = ["M" + i(d.x), i(d.y) + "C" + i(d.n.x), i(d.n.y), i(d.end.x), i(d.end.y), i(f[5]), i(f[6])].join(), m += h, l = +f[5], c = +f[6];
                                continue
                            }
                            if (!n && !r)return d = a(l, c, f[1], f[2], f[3], f[4], f[5], f[6], o - m)
                        }
                        m += h, l = +f[5], c = +f[6]
                    }
                    p += f.shift() + f
                }
                return g.end = p, d = n ? m : r ? g : u(l, c, f[0], f[1], f[2], f[3], f[4], f[5], 1)
            }, null, t._.clone)
        }

        function u(t, e, n, r, i, o, a, s, u) {
            var l = 1 - u, c = I(l, 3), f = I(l, 2), h = u * u, d = h * u, p = c * t + 3 * f * u * n + 3 * l * u * u * i + d * a, g = c * e + 3 * f * u * r + 3 * l * u * u * o + d * s, m = t + 2 * u * (n - t) + h * (i - 2 * n + t), v = e + 2 * u * (r - e) + h * (o - 2 * r + e), y = n + 2 * u * (i - n) + h * (a - 2 * i + n), x = r + 2 * u * (o - r) + h * (s - 2 * o + r), b = l * t + u * n, w = l * e + u * r, S = l * i + u * a, C = l * o + u * s, k = 90 - 180 * G.atan2(m - y, v - x) / D;
            return {x: p, y: g, m: {x: m, y: v}, n: {x: y, y: x}, start: {x: b, y: w}, end: {x: S, y: C}, alpha: k}
        }

        function l(e, n, i, o, a, s, u, l) {
            t.is(e, "array") || (e = [e, n, i, o, a, s, u, l]);
            var c = A.apply(null, e);
            return r(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y)
        }

        function c(t, e, n) {
            return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
        }

        function f(t, e) {
            return t = r(t), e = r(e), c(e, t.x, t.y) || c(e, t.x2, t.y) || c(e, t.x, t.y2) || c(e, t.x2, t.y2) || c(t, e.x, e.y) || c(t, e.x2, e.y) || c(t, e.x, e.y2) || c(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
        }

        function h(t, e, n, r, i) {
            var o = -3 * e + 9 * n - 9 * r + 3 * i, a = t * o + 6 * e - 12 * n + 6 * r;
            return t * a - 3 * e + 3 * n
        }

        function d(t, e, n, r, i, o, a, s, u) {
            null == u && (u = 1), u = u > 1 ? 1 : 0 > u ? 0 : u;
            for (var l = u / 2, c = 12, f = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, g = 0; c > g; g++) {
                var m = l * f[g] + l, v = h(m, t, n, i, a), y = h(m, e, r, o, s), x = v * v + y * y;
                p += d[g] * G.sqrt(x)
            }
            return l * p
        }

        function p(t, e, n, r, i, o, a, s, u) {
            if (!(0 > u || d(t, e, n, r, i, o, a, s) < u)) {
                var l, c = 1, f = c / 2, h = c - f, p = .01;
                for (l = d(t, e, n, r, i, o, a, s, h); U(l - u) > p;)f /= 2, h += (u > l ? 1 : -1) * f, l = d(t, e, n, r, i, o, a, s, h);
                return h
            }
        }

        function g(t, e, n, r, i, o, a, s) {
            if (!(z(t, n) < R(i, a) || R(t, n) > z(i, a) || z(e, r) < R(o, s) || R(e, r) > z(o, s))) {
                var u = (t * r - e * n) * (i - a) - (t - n) * (i * s - o * a), l = (t * r - e * n) * (o - s) - (e - r) * (i * s - o * a), c = (t - n) * (o - s) - (e - r) * (i - a);
                if (c) {
                    var f = u / c, h = l / c, d = +f.toFixed(2), p = +h.toFixed(2);
                    if (!(d < +R(t, n).toFixed(2) || d > +z(t, n).toFixed(2) || d < +R(i, a).toFixed(2) || d > +z(i, a).toFixed(2) || p < +R(e, r).toFixed(2) || p > +z(e, r).toFixed(2) || p < +R(o, s).toFixed(2) || p > +z(o, s).toFixed(2)))return {
                        x: f,
                        y: h
                    }
                }
            }
        }

        function m(t, e, n) {
            var r = l(t), i = l(e);
            if (!f(r, i))return n ? 0 : [];
            for (var o = d.apply(0, t), a = d.apply(0, e), s = ~~(o / 8), c = ~~(a / 8), h = [], p = [], m = {}, v = n ? 0 : [], y = 0; s + 1 > y; y++) {
                var x = u.apply(0, t.concat(y / s));
                h.push({x: x.x, y: x.y, t: y / s})
            }
            for (y = 0; c + 1 > y; y++)x = u.apply(0, e.concat(y / c)), p.push({x: x.x, y: x.y, t: y / c});
            for (y = 0; s > y; y++)for (var b = 0; c > b; b++) {
                var w = h[y], S = h[y + 1], C = p[b], k = p[b + 1], _ = U(S.x - w.x) < .001 ? "y" : "x", T = U(k.x - C.x) < .001 ? "y" : "x", B = g(w.x, w.y, S.x, S.y, C.x, C.y, k.x, k.y);
                if (B) {
                    if (m[B.x.toFixed(4)] == B.y.toFixed(4))continue;
                    m[B.x.toFixed(4)] = B.y.toFixed(4);
                    var F = w.t + U((B[_] - w[_]) / (S[_] - w[_])) * (S.t - w.t), A = C.t + U((B[T] - C[T]) / (k[T] - C[T])) * (k.t - C.t);
                    F >= 0 && 1 >= F && A >= 0 && 1 >= A && (n ? v++ : v.push({x: B.x, y: B.y, t1: F, t2: A}))
                }
            }
            return v
        }

        function v(t, e) {
            return x(t, e)
        }

        function y(t, e) {
            return x(t, e, 1)
        }

        function x(t, e, n) {
            t = M(t), e = M(e);
            for (var r, i, o, a, s, u, l, c, f, h, d = n ? 0 : [], p = 0, g = t.length; g > p; p++) {
                var v = t[p];
                if ("M" == v[0])r = s = v[1], i = u = v[2]; else {
                    "C" == v[0] ? (f = [r, i].concat(v.slice(1)), r = f[6], i = f[7]) : (f = [r, i, r, i, s, u, s, u], r = s, i = u);
                    for (var y = 0, x = e.length; x > y; y++) {
                        var b = e[y];
                        if ("M" == b[0])o = l = b[1], a = c = b[2]; else {
                            "C" == b[0] ? (h = [o, a].concat(b.slice(1)), o = h[6], a = h[7]) : (h = [o, a, o, a, l, c, l, c], o = l, a = c);
                            var w = m(f, h, n);
                            if (n)d += w; else {
                                for (var S = 0, C = w.length; C > S; S++)w[S].segment1 = p, w[S].segment2 = y, w[S].bez1 = f, w[S].bez2 = h;
                                d = d.concat(w)
                            }
                        }
                    }
                }
            }
            return d
        }

        function b(t, e, n) {
            var r = w(t);
            return c(r, e, n) && x(t, [["M", e, n], ["H", r.x2 + 10]], 1) % 2 == 1
        }

        function w(t) {
            var e = n(t);
            if (e.bbox)return q(e.bbox);
            if (!t)return r();
            t = M(t);
            for (var i, o = 0, a = 0, s = [], u = [], l = 0, c = t.length; c > l; l++)if (i = t[l], "M" == i[0])o = i[1], a = i[2], s.push(o), u.push(a); else {
                var f = A(o, a, i[1], i[2], i[3], i[4], i[5], i[6]);
                s = s.concat(f.min.x, f.max.x), u = u.concat(f.min.y, f.max.y), o = i[5], a = i[6]
            }
            var h = R.apply(0, s), d = R.apply(0, u), p = z.apply(0, s), g = z.apply(0, u), m = r(h, d, p - h, g - d);
            return e.bbox = q(m), m
        }

        function S(t, e, n, r, o) {
            if (o)return [["M", +t + +o, e], ["l", n - 2 * o, 0], ["a", o, o, 0, 0, 1, o, o], ["l", 0, r - 2 * o], ["a", o, o, 0, 0, 1, -o, o], ["l", 2 * o - n, 0], ["a", o, o, 0, 0, 1, -o, -o], ["l", 0, 2 * o - r], ["a", o, o, 0, 0, 1, o, -o], ["z"]];
            var a = [["M", t, e], ["l", n, 0], ["l", 0, r], ["l", -n, 0], ["z"]];
            return a.toString = i, a
        }

        function C(t, e, n, r, o) {
            if (null == o && null == r && (r = n), t = +t, e = +e, n = +n, r = +r, null != o)var a = Math.PI / 180, s = t + n * Math.cos(-r * a), u = t + n * Math.cos(-o * a), l = e + n * Math.sin(-r * a), c = e + n * Math.sin(-o * a), f = [["M", s, l], ["A", n, n, 0, +(o - r > 180), 0, u, c]]; else f = [["M", t, e], ["m", 0, -r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]];
            return f.toString = i, f
        }

        function k(e) {
            var r = n(e), a = String.prototype.toLowerCase;
            if (r.rel)return o(r.rel);
            t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
            var s = [], u = 0, l = 0, c = 0, f = 0, h = 0;
            "M" == e[0][0] && (u = e[0][1], l = e[0][2], c = u, f = l, h++, s.push(["M", u, l]));
            for (var d = h, p = e.length; p > d; d++) {
                var g = s[d] = [], m = e[d];
                if (m[0] != a.call(m[0]))switch (g[0] = a.call(m[0]), g[0]) {
                    case"a":
                        g[1] = m[1], g[2] = m[2], g[3] = m[3], g[4] = m[4], g[5] = m[5], g[6] = +(m[6] - u).toFixed(3), g[7] = +(m[7] - l).toFixed(3);
                        break;
                    case"v":
                        g[1] = +(m[1] - l).toFixed(3);
                        break;
                    case"m":
                        c = m[1], f = m[2];
                    default:
                        for (var v = 1, y = m.length; y > v; v++)g[v] = +(m[v] - (v % 2 ? u : l)).toFixed(3)
                } else {
                    g = s[d] = [], "m" == m[0] && (c = m[1] + u, f = m[2] + l);
                    for (var x = 0, b = m.length; b > x; x++)s[d][x] = m[x]
                }
                var w = s[d].length;
                switch (s[d][0]) {
                    case"z":
                        u = c, l = f;
                        break;
                    case"h":
                        u += +s[d][w - 1];
                        break;
                    case"v":
                        l += +s[d][w - 1];
                        break;
                    default:
                        u += +s[d][w - 2], l += +s[d][w - 1]
                }
            }
            return s.toString = i, r.rel = o(s), s
        }

        function _(e) {
            var r = n(e);
            if (r.abs)return o(r.abs);
            if (L(e, "array") && L(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length)return [["M", 0, 0]];
            var a, s = [], u = 0, l = 0, c = 0, f = 0, h = 0;
            "M" == e[0][0] && (u = +e[0][1], l = +e[0][2], c = u, f = l, h++, s[0] = ["M", u, l]);
            for (var d, p, g = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), m = h, v = e.length; v > m; m++) {
                if (s.push(d = []), p = e[m], a = p[0], a != a.toUpperCase())switch (d[0] = a.toUpperCase(), d[0]) {
                    case"A":
                        d[1] = p[1], d[2] = p[2], d[3] = p[3], d[4] = p[4], d[5] = p[5], d[6] = +p[6] + u, d[7] = +p[7] + l;
                        break;
                    case"V":
                        d[1] = +p[1] + l;
                        break;
                    case"H":
                        d[1] = +p[1] + u;
                        break;
                    case"R":
                        for (var y = [u, l].concat(p.slice(1)), x = 2, b = y.length; b > x; x++)y[x] = +y[x] + u, y[++x] = +y[x] + l;
                        s.pop(), s = s.concat(j(y, g));
                        break;
                    case"O":
                        s.pop(), y = C(u, l, p[1], p[2]), y.push(y[0]), s = s.concat(y);
                        break;
                    case"U":
                        s.pop(), s = s.concat(C(u, l, p[1], p[2], p[3])), d = ["U"].concat(s[s.length - 1].slice(-2));
                        break;
                    case"M":
                        c = +p[1] + u, f = +p[2] + l;
                    default:
                        for (x = 1, b = p.length; b > x; x++)d[x] = +p[x] + (x % 2 ? u : l)
                } else if ("R" == a)y = [u, l].concat(p.slice(1)), s.pop(), s = s.concat(j(y, g)), d = ["R"].concat(p.slice(-2)); else if ("O" == a)s.pop(), y = C(u, l, p[1], p[2]), y.push(y[0]), s = s.concat(y); else if ("U" == a)s.pop(), s = s.concat(C(u, l, p[1], p[2], p[3])), d = ["U"].concat(s[s.length - 1].slice(-2)); else for (var w = 0, S = p.length; S > w; w++)d[w] = p[w];
                if (a = a.toUpperCase(), "O" != a)switch (d[0]) {
                    case"Z":
                        u = +c, l = +f;
                        break;
                    case"H":
                        u = d[1];
                        break;
                    case"V":
                        l = d[1];
                        break;
                    case"M":
                        c = d[d.length - 2], f = d[d.length - 1];
                    default:
                        u = d[d.length - 2], l = d[d.length - 1]
                }
            }
            return s.toString = i, r.abs = o(s), s
        }

        function T(t, e, n, r) {
            return [t, e, n, r, n, r]
        }

        function B(t, e, n, r, i, o) {
            var a = 1 / 3, s = 2 / 3;
            return [a * t + s * n, a * e + s * r, a * i + s * n, a * o + s * r, i, o]
        }

        function F(e, n, r, i, o, a, s, u, l, c) {
            var f, h = 120 * D / 180, d = D / 180 * (+o || 0), p = [], g = t._.cacher(function (t, e, n) {
                var r = t * G.cos(n) - e * G.sin(n), i = t * G.sin(n) + e * G.cos(n);
                return {x: r, y: i}
            });
            if (c)k = c[0], _ = c[1], S = c[2], C = c[3]; else {
                f = g(e, n, -d), e = f.x, n = f.y, f = g(u, l, -d), u = f.x, l = f.y;
                var m = (G.cos(D / 180 * o), G.sin(D / 180 * o), (e - u) / 2), v = (n - l) / 2, y = m * m / (r * r) + v * v / (i * i);
                y > 1 && (y = G.sqrt(y), r = y * r, i = y * i);
                var x = r * r, b = i * i, w = (a == s ? -1 : 1) * G.sqrt(U((x * b - x * v * v - b * m * m) / (x * v * v + b * m * m))), S = w * r * v / i + (e + u) / 2, C = w * -i * m / r + (n + l) / 2, k = G.asin(((n - C) / i).toFixed(9)), _ = G.asin(((l - C) / i).toFixed(9));
                k = S > e ? D - k : k, _ = S > u ? D - _ : _, 0 > k && (k = 2 * D + k), 0 > _ && (_ = 2 * D + _), s && k > _ && (k -= 2 * D), !s && _ > k && (_ -= 2 * D)
            }
            var T = _ - k;
            if (U(T) > h) {
                var B = _, A = u, M = l;
                _ = k + h * (s && _ > k ? 1 : -1), u = S + r * G.cos(_), l = C + i * G.sin(_), p = F(u, l, r, i, o, 0, s, A, M, [_, B, S, C])
            }
            T = _ - k;
            var N = G.cos(k), j = G.sin(k), P = G.cos(_), L = G.sin(_), q = G.tan(T / 4), E = 4 / 3 * r * q, V = 4 / 3 * i * q, O = [e, n], R = [e + E * j, n - V * N], z = [u + E * L, l - V * P], I = [u, l];
            if (R[0] = 2 * O[0] - R[0], R[1] = 2 * O[1] - R[1], c)return [R, z, I].concat(p);
            p = [R, z, I].concat(p).join().split(",");
            for (var X = [], $ = 0, H = p.length; H > $; $++)X[$] = $ % 2 ? g(p[$ - 1], p[$], d).y : g(p[$], p[$ + 1], d).x;
            return X
        }

        function A(t, e, n, r, i, o, a, s) {
            for (var u, l, c, f, h, d, p, g, m = [], v = [[], []], y = 0; 2 > y; ++y)if (0 == y ? (l = 6 * t - 12 * n + 6 * i, u = -3 * t + 9 * n - 9 * i + 3 * a, c = 3 * n - 3 * t) : (l = 6 * e - 12 * r + 6 * o, u = -3 * e + 9 * r - 9 * o + 3 * s, c = 3 * r - 3 * e), U(u) < 1e-12) {
                if (U(l) < 1e-12)continue;
                f = -c / l, f > 0 && 1 > f && m.push(f)
            } else p = l * l - 4 * c * u, g = G.sqrt(p), 0 > p || (h = (-l + g) / (2 * u), h > 0 && 1 > h && m.push(h), d = (-l - g) / (2 * u), d > 0 && 1 > d && m.push(d));
            for (var x, b = m.length, w = b; b--;)f = m[b], x = 1 - f, v[0][b] = x * x * x * t + 3 * x * x * f * n + 3 * x * f * f * i + f * f * f * a, v[1][b] = x * x * x * e + 3 * x * x * f * r + 3 * x * f * f * o + f * f * f * s;
            return v[0][w] = t, v[1][w] = e, v[0][w + 1] = a, v[1][w + 1] = s, v[0].length = v[1].length = w + 2, {
                min: {
                    x: R.apply(0, v[0]),
                    y: R.apply(0, v[1])
                }, max: {x: z.apply(0, v[0]), y: z.apply(0, v[1])}
            }
        }

        function M(t, e) {
            var r = !e && n(t);
            if (!e && r.curve)return o(r.curve);
            for (var i = _(t), a = e && _(e), s = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, u = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, l = (function (t, e, n) {
                var r, i;
                if (!t)return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                switch (!(t[0] in {T: 1, Q: 1}) && (e.qx = e.qy = null), t[0]) {
                    case"M":
                        e.X = t[1], e.Y = t[2];
                        break;
                    case"A":
                        t = ["C"].concat(F.apply(0, [e.x, e.y].concat(t.slice(1))));
                        break;
                    case"S":
                        "C" == n || "S" == n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y), t = ["C", r, i].concat(t.slice(1));
                        break;
                    case"T":
                        "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(B(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                        break;
                    case"Q":
                        e.qx = t[1], e.qy = t[2], t = ["C"].concat(B(e.x, e.y, t[1], t[2], t[3], t[4]));
                        break;
                    case"L":
                        t = ["C"].concat(T(e.x, e.y, t[1], t[2]));
                        break;
                    case"H":
                        t = ["C"].concat(T(e.x, e.y, t[1], e.y));
                        break;
                    case"V":
                        t = ["C"].concat(T(e.x, e.y, e.x, t[1]));
                        break;
                    case"Z":
                        t = ["C"].concat(T(e.x, e.y, e.X, e.Y))
                }
                return t
            }), c = function (t, e) {
                if (t[e].length > 7) {
                    t[e].shift();
                    for (var n = t[e]; n.length;)h[e] = "A", a && (d[e] = "A"), t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                    t.splice(e, 1), v = z(i.length, a && a.length || 0)
                }
            }, f = function (t, e, n, r, o) {
                t && e && "M" == t[o][0] && "M" != e[o][0] && (e.splice(o, 0, ["M", r.x, r.y]), n.bx = 0, n.by = 0, n.x = t[o][1], n.y = t[o][2], v = z(i.length, a && a.length || 0))
            }, h = [], d = [], p = "", g = "", m = 0, v = z(i.length, a && a.length || 0); v > m; m++) {
                i[m] && (p = i[m][0]), "C" != p && (h[m] = p, m && (g = h[m - 1])), i[m] = l(i[m], s, g), "A" != h[m] && "C" == p && (h[m] = "C"), c(i, m), a && (a[m] && (p = a[m][0]), "C" != p && (d[m] = p, m && (g = d[m - 1])), a[m] = l(a[m], u, g), "A" != d[m] && "C" == p && (d[m] = "C"), c(a, m)), f(i, a, s, u, m), f(a, i, u, s, m);
                var y = i[m], x = a && a[m], b = y.length, w = a && x.length;
                s.x = y[b - 2], s.y = y[b - 1], s.bx = O(y[b - 4]) || s.x, s.by = O(y[b - 3]) || s.y, u.bx = a && (O(x[w - 4]) || u.x), u.by = a && (O(x[w - 3]) || u.y), u.x = a && x[w - 2], u.y = a && x[w - 1]
            }
            return a || (r.curve = o(i)), a ? [i, a] : i
        }

        function N(t, e) {
            if (!e)return t;
            var n, r, i, o, a, s, u;
            for (t = M(t), i = 0, a = t.length; a > i; i++)for (u = t[i], o = 1, s = u.length; s > o; o += 2)n = e.x(u[o], u[o + 1]), r = e.y(u[o], u[o + 1]), u[o] = n, u[o + 1] = r;
            return t
        }

        function j(t, e) {
            for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                var o = [{x: +t[r - 2], y: +t[r - 1]}, {x: +t[r], y: +t[r + 1]}, {
                    x: +t[r + 2],
                    y: +t[r + 3]
                }, {x: +t[r + 4], y: +t[r + 5]}];
                e ? r ? i - 4 == r ? o[3] = {x: +t[0], y: +t[1]} : i - 2 == r && (o[2] = {
                    x: +t[0],
                    y: +t[1]
                }, o[3] = {x: +t[2], y: +t[3]}) : o[0] = {
                    x: +t[i - 2],
                    y: +t[i - 1]
                } : i - 4 == r ? o[3] = o[2] : r || (o[0] = {
                    x: +t[r],
                    y: +t[r + 1]
                }), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
            }
            return n
        }

        var P = e.prototype, L = t.is, q = t._.clone, E = "hasOwnProperty", V = /,?([a-z]),?/gi, O = parseFloat, G = Math, D = G.PI, R = G.min, z = G.max, I = G.pow, U = G.abs, X = s(1), $ = s(), H = s(0, 1), Y = t._unit2px, W = {
            path: function (t) {
                return t.attr("path")
            }, circle: function (t) {
                var e = Y(t);
                return C(e.cx, e.cy, e.r)
            }, ellipse: function (t) {
                var e = Y(t);
                return C(e.cx || 0, e.cy || 0, e.rx, e.ry)
            }, rect: function (t) {
                var e = Y(t);
                return S(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
            }, image: function (t) {
                var e = Y(t);
                return S(e.x || 0, e.y || 0, e.width, e.height)
            }, line: function (t) {
                return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
            }, polyline: function (t) {
                return "M" + t.attr("points")
            }, polygon: function (t) {
                return "M" + t.attr("points") + "z"
            }, deflt: function (t) {
                var e = t.node.getBBox();
                return S(e.x, e.y, e.width, e.height)
            }
        };
        t.path = n, t.path.getTotalLength = X, t.path.getPointAtLength = $, t.path.getSubpath = function (t, e, n) {
            if (this.getTotalLength(t) - n < 1e-6)return H(t, e).end;
            var r = H(t, n, 1);
            return e ? H(r, e).end : r
        }, P.getTotalLength = function () {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, P.getPointAtLength = function (t) {
            return $(this.attr("d"), t)
        }, P.getSubpath = function (e, n) {
            return t.path.getSubpath(this.attr("d"), e, n)
        }, t._.box = r, t.path.findDotsAtSegment = u, t.path.bezierBBox = l, t.path.isPointInsideBBox = c, t.closest = function (e, n, i, o) {
            for (var a = 100, s = r(e - a / 2, n - a / 2, a, a), u = [], l = i[0].hasOwnProperty("x") ? function (t) {
                return {x: i[t].x, y: i[t].y}
            } : function (t) {
                return {x: i[t], y: o[t]}
            }, f = 0; 1e6 >= a && !f;) {
                for (var h = 0, d = i.length; d > h; h++) {
                    var p = l(h);
                    if (c(s, p.x, p.y)) {
                        f++, u.push(p);
                        break
                    }
                }
                f || (a *= 2, s = r(e - a / 2, n - a / 2, a, a))
            }
            if (1e6 != a) {
                var g, m = 1 / 0;
                for (h = 0, d = u.length; d > h; h++) {
                    var v = t.len(e, n, u[h].x, u[h].y);
                    m > v && (m = v, u[h].len = v, g = u[h])
                }
                return g
            }
        }, t.path.isBBoxIntersect = f, t.path.intersection = v, t.path.intersectionNumber = y, t.path.isPointInside = b, t.path.getBBox = w, t.path.get = W, t.path.toRelative = k, t.path.toAbsolute = _, t.path.toCubic = M, t.path.map = N, t.path.toString = i, t.path.clone = o
    }), r.plugin(function (t) {
        var r = Math.max, i = Math.min, o = function (t) {
            if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t)for (var e = 0, n = t.length; n > e; e++)t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
        }, a = o.prototype;
        a.push = function () {
            for (var t, e, n = 0, r = arguments.length; r > n; n++)t = arguments[n], t && (e = this.items.length, this[e] = this.items[e] = t, this.length++);
            return this
        }, a.pop = function () {
            return this.length && delete this[this.length--], this.items.pop()
        }, a.forEach = function (t, e) {
            for (var n = 0, r = this.items.length; r > n; n++)if (t.call(e, this.items[n], n) === !1)return this;
            return this
        }, a.animate = function (r, i, o, a) {
            "function" != typeof o || o.length || (a = o, o = n.linear), r instanceof t._.Animation && (a = r.callback, o = r.easing, i = o.dur, r = r.attr);
            var s = arguments;
            if (t.is(r, "array") && t.is(s[s.length - 1], "array"))var u = !0;
            var l, c = function () {
                l ? this.b = l : l = this.b
            }, f = 0, h = this, d = a && function () {
                    ++f == h.length && a.call(this)
                };
            return this.forEach(function (t, n) {
                e.once("snap.animcreated." + t.id, c), u ? s[n] && t.animate.apply(t, s[n]) : t.animate(r, i, o, d)
            })
        }, a.remove = function () {
            for (; this.length;)this.pop().remove();
            return this
        }, a.bind = function (t, e, n) {
            var r = {};
            if ("function" == typeof e)this.bindings[t] = e; else {
                var i = n || t;
                this.bindings[t] = function (t) {
                    r[i] = t, e.attr(r)
                }
            }
            return this
        }, a.attr = function (t) {
            var e = {};
            for (var n in t)this.bindings[n] ? this.bindings[n](t[n]) : e[n] = t[n];
            for (var r = 0, i = this.items.length; i > r; r++)this.items[r].attr(e);
            return this
        }, a.clear = function () {
            for (; this.length;)this.pop()
        }, a.splice = function (t, e) {
            t = 0 > t ? r(this.length + t, 0) : t, e = r(0, i(this.length - t, e));
            var n, a = [], s = [], u = [];
            for (n = 2; n < arguments.length; n++)u.push(arguments[n]);
            for (n = 0; e > n; n++)s.push(this[t + n]);
            for (; n < this.length - t; n++)a.push(this[t + n]);
            var l = u.length;
            for (n = 0; n < l + a.length; n++)this.items[t + n] = this[t + n] = l > n ? u[n] : a[n - l];
            for (n = this.items.length = this.length -= e - l; this[n];)delete this[n++];
            return new o(s)
        }, a.exclude = function (t) {
            for (var e = 0, n = this.length; n > e; e++)if (this[e] == t)return this.splice(e, 1), !0;
            return !1
        }, a.insertAfter = function (t) {
            for (var e = this.items.length; e--;)this.items[e].insertAfter(t);
            return this
        }, a.getBBox = function () {
            for (var t = [], e = [], n = [], o = [], a = this.items.length; a--;)if (!this.items[a].removed) {
                var s = this.items[a].getBBox();
                t.push(s.x), e.push(s.y), n.push(s.x + s.width), o.push(s.y + s.height)
            }
            return t = i.apply(0, t), e = i.apply(0, e), n = r.apply(0, n), o = r.apply(0, o), {
                x: t,
                y: e,
                x2: n,
                y2: o,
                width: n - t,
                height: o - e,
                cx: t + (n - t) / 2,
                cy: e + (o - e) / 2
            }
        }, a.clone = function (t) {
            t = new o;
            for (var e = 0, n = this.items.length; n > e; e++)t.push(this.items[e].clone());
            return t
        }, a.toString = function () {
            return "Snap‘s set"
        }, a.type = "set", t.Set = o, t.set = function () {
            var t = new o;
            return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
        }
    }), r.plugin(function (t, n) {
        function r(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
                case"t":
                    return [e, 0, 0];
                case"m":
                    return [e, 1, 0, 0, 1, 0, 0];
                case"r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case"s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
            }
        }

        function i(e, n, i) {
            n = g(n).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], n = t.parseTransformString(n) || [];
            for (var o, a, s, u, f = Math.max(e.length, n.length), h = [], d = [], p = 0; f > p; p++) {
                if (s = e[p] || r(n[p]), u = n[p] || r(s), s[0] != u[0] || "r" == s[0].toLowerCase() && (s[2] != u[2] || s[3] != u[3]) || "s" == s[0].toLowerCase() && (s[3] != u[3] || s[4] != u[4])) {
                    e = t._.transform2matrix(e, i()), n = t._.transform2matrix(n, i()), h = [["m", e.a, e.b, e.c, e.d, e.e, e.f]], d = [["m", n.a, n.b, n.c, n.d, n.e, n.f]];
                    break
                }
                for (h[p] = [], d[p] = [], o = 0, a = Math.max(s.length, u.length); a > o; o++)o in s && (h[p][o] = s[o]), o in u && (d[p][o] = u[o])
            }
            return {from: c(h), to: c(d), f: l(h)}
        }

        function o(t) {
            return t
        }

        function a(t) {
            return function (e) {
                return +e.toFixed(3) + t
            }
        }

        function s(t) {
            return t.join(" ")
        }

        function u(e) {
            return t.rgb(e[0], e[1], e[2])
        }

        function l(t) {
            var e, n, r, i, o, a, s = 0, u = [];
            for (e = 0, n = t.length; n > e; e++) {
                for (o = "[", a = ['"' + t[e][0] + '"'], r = 1, i = t[e].length; i > r; r++)a[r] = "val[" + s++ + "]";
                o += a + "]", u[e] = o
            }
            return Function("val", "return Snap.path.toString.call([" + u + "])")
        }

        function c(t) {
            for (var e = [], n = 0, r = t.length; r > n; n++)for (var i = 1, o = t[n].length; o > i; i++)e.push(t[n][i]);
            return e
        }

        function f(t) {
            return isFinite(parseFloat(t))
        }

        function h(e, n) {
            return t.is(e, "array") && t.is(n, "array") ? e.toString() == n.toString() : !1
        }

        var d = {}, p = /[a-z]+$/i, g = String;
        d.stroke = d.fill = "colour", n.prototype.equal = function (t, n) {
            return e("snap.util.equal", this, t, n).firstDefined()
        }, e.on("snap.util.equal", function (e, n) {
            var r, m, v = g(this.attr(e) || ""), y = this;
            if (f(v) && f(n))return {from: parseFloat(v), to: parseFloat(n), f: o};
            if ("colour" == d[e])return r = t.color(v), m = t.color(n), {
                from: [r.r, r.g, r.b, r.opacity],
                to: [m.r, m.g, m.b, m.opacity],
                f: u
            };
            if ("viewBox" == e)return r = this.attr(e).vb.split(" ").map(Number), m = n.split(" ").map(Number), {
                from: r,
                to: m,
                f: s
            };
            if ("transform" == e || "gradientTransform" == e || "patternTransform" == e)return n instanceof t.Matrix && (n = n.toTransformString()), t._.rgTransform.test(n) || (n = t._.svgTransform2string(n)), i(v, n, function () {
                return y.getBBox(1)
            });
            if ("d" == e || "path" == e)return r = t.path.toCubic(v, n), {from: c(r[0]), to: c(r[1]), f: l(r[0])};
            if ("points" == e)return r = g(v).split(t._.separator), m = g(n).split(t._.separator), {
                from: r,
                to: m,
                f: function (t) {
                    return t
                }
            };
            var x = v.match(p), b = g(n).match(p);
            return x && h(x, b) ? {from: parseFloat(v), to: parseFloat(n), f: a(x)} : {
                from: this.asPX(e),
                to: this.asPX(e, n),
                f: o
            }
        })
    }), r.plugin(function (t, n, r, i) {
        for (var o = n.prototype, a = "hasOwnProperty", s = ("createTouch" in i.doc), u = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], l = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }, c = (function (t, e) {
            var n = "y" == t ? "scrollTop" : "scrollLeft", r = e && e.node ? e.node.ownerDocument : i.doc;
            return r[n in r.documentElement ? "documentElement" : "body"][n]
        }), f = function () {
            return this.originalEvent.preventDefault()
        }, h = function () {
            return this.originalEvent.stopPropagation()
        }, d = function (t, e, n, r) {
            var i = s && l[e] ? l[e] : e, o = function (i) {
                var o = c("y", r), u = c("x", r);
                if (s && l[a](e))for (var d = 0, p = i.targetTouches && i.targetTouches.length; p > d; d++)if (i.targetTouches[d].target == t || t.contains(i.targetTouches[d].target)) {
                    var g = i;
                    i = i.targetTouches[d], i.originalEvent = g, i.preventDefault = f, i.stopPropagation = h;
                    break
                }
                var m = i.clientX + u, v = i.clientY + o;
                return n.call(r, i, m, v)
            };
            return e !== i && t.addEventListener(e, o, !1), t.addEventListener(i, o, !1), function () {
                return e !== i && t.removeEventListener(e, o, !1), t.removeEventListener(i, o, !1), !0
            }
        }, p = [], g = function (t) {
            for (var n, r = t.clientX, i = t.clientY, o = c("y"), a = c("x"), u = p.length; u--;) {
                if (n = p[u], s) {
                    for (var l, f = t.touches && t.touches.length; f--;)if (l = t.touches[f], l.identifier == n.el._drag.id || n.el.node.contains(l.target)) {
                        r = l.clientX, i = l.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                        break
                    }
                } else t.preventDefault();
                var h = n.el.node;
                h.nextSibling, h.parentNode, h.style.display, r += a, i += o, e("snap.drag.move." + n.el.id, n.move_scope || n.el, r - n.el._drag.x, i - n.el._drag.y, r, i, t)
            }
        }, m = function (n) {
            t.unmousemove(g).unmouseup(m);
            for (var r, i = p.length; i--;)r = p[i], r.el._drag = {}, e("snap.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, n), e.off("snap.drag.*." + r.el.id);
            p = []
        }, v = u.length; v--;)!function (e) {
            t[e] = o[e] = function (n, r) {
                if (t.is(n, "function"))this.events = this.events || [], this.events.push({
                    name: e,
                    f: n,
                    unbind: d(this.node || document, e, n, r || this)
                }); else for (var i = 0, o = this.events.length; o > i; i++)if (this.events[i].name == e)try {
                    this.events[i].f.call(this)
                } catch (a) {
                }
                return this
            }, t["un" + e] = o["un" + e] = function (t) {
                for (var n = this.events || [], r = n.length; r--;)if (n[r].name == e && (n[r].f == t || !t))return n[r].unbind(), n.splice(r, 1), !n.length && delete this.events, this;
                return this
            }
        }(u[v]);
        o.hover = function (t, e, n, r) {
            return this.mouseover(t, n).mouseout(e, r || n)
        }, o.unhover = function (t, e) {
            return this.unmouseover(t).unmouseout(e)
        };
        var y = [];
        o.drag = function (n, r, i, o, a, s) {
            function u(u, l, f) {
                (u.originalEvent || u).preventDefault(), c._drag.x = l, c._drag.y = f, c._drag.id = u.identifier, !p.length && t.mousemove(g).mouseup(m), p.push({
                    el: c,
                    move_scope: o,
                    start_scope: a,
                    end_scope: s
                }), r && e.on("snap.drag.start." + c.id, r), n && e.on("snap.drag.move." + c.id, n), i && e.on("snap.drag.end." + c.id, i), e("snap.drag.start." + c.id, a || o || c, l, f, u)
            }

            function l(t, n, r) {
                e("snap.draginit." + c.id, c, t, n, r)
            }

            var c = this;
            if (!arguments.length) {
                var f;
                return c.drag(function (t, e) {
                    this.attr({transform: f + (f ? "T" : "t") + [t, e]})
                }, function () {
                    f = this.transform().local
                })
            }
            return e.on("snap.draginit." + c.id, u), c._drag = {}, y.push({el: c, start: u, init: l}), c.mousedown(l), c
        }, o.undrag = function () {
            for (var n = y.length; n--;)y[n].el == this && (this.unmousedown(y[n].init), y.splice(n, 1), e.unbind("snap.drag.*." + this.id), e.unbind("snap.draginit." + this.id));
            return !y.length && t.unmousemove(g).unmouseup(m), this
        }
    }), r.plugin(function (t, n, r) {
        var i = (n.prototype, r.prototype), o = /^\s*url\((.+)\)/, a = String, s = t._.$;
        t.filter = {}, i.filter = function (e) {
            var r = this;
            "svg" != r.type && (r = r.paper);
            var i = t.parse(a(e)), o = t._.id(), u = (r.node.offsetWidth, r.node.offsetHeight, s("filter"));
            return s(u, {id: o, filterUnits: "userSpaceOnUse"}), u.appendChild(i.node), r.defs.appendChild(u), new n(u)
        }, e.on("snap.util.getattr.filter", function () {
            e.stop();
            var n = s(this.node, "filter");
            if (n) {
                var r = a(n).match(o);
                return r && t.select(r[1])
            }
        }), e.on("snap.util.attr.filter", function (r) {
            if (r instanceof n && "filter" == r.type) {
                e.stop();
                var i = r.node.id;
                i || (s(r.node, {id: r.id}), i = r.id), s(this.node, {filter: t.url(i)})
            }
            r && "none" != r || (e.stop(), this.node.removeAttribute("filter"))
        }), t.filter.blur = function (e, n) {
            null == e && (e = 2);
            var r = null == n ? e : [e, n];
            return t.format('<feGaussianBlur stdDeviation="{def}"/>', {def: r})
        }, t.filter.blur.toString = function () {
            return this()
        }, t.filter.shadow = function (e, n, r, i, o) {
            return "string" == typeof r && (i = r, o = i, r = 4), "string" != typeof i && (o = i, i = "#000"), i = i || "#000", null == r && (r = 4), null == o && (o = 1), null == e && (e = 0, n = 2), null == n && (n = e), i = t.color(i), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: i,
                dx: e,
                dy: n,
                blur: r,
                opacity: o
            })
        }, t.filter.shadow.toString = function () {
            return this()
        }, t.filter.grayscale = function (e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - e),
                b: .7152 - .7152 * (1 - e),
                c: .0722 - .0722 * (1 - e),
                d: .2126 - .2126 * (1 - e),
                e: .7152 + .2848 * (1 - e),
                f: .0722 - .0722 * (1 - e),
                g: .2126 - .2126 * (1 - e),
                h: .0722 + .9278 * (1 - e)
            })
        }, t.filter.grayscale.toString = function () {
            return this()
        }, t.filter.sepia = function (e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - e),
                b: .769 - .769 * (1 - e),
                c: .189 - .189 * (1 - e),
                d: .349 - .349 * (1 - e),
                e: .686 + .314 * (1 - e),
                f: .168 - .168 * (1 - e),
                g: .272 - .272 * (1 - e),
                h: .534 - .534 * (1 - e),
                i: .131 + .869 * (1 - e)
            })
        }, t.filter.sepia.toString = function () {
            return this()
        }, t.filter.saturate = function (e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {amount: 1 - e})
        }, t.filter.saturate.toString = function () {
            return this()
        }, t.filter.hueRotate = function (e) {
            return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {angle: e})
        }, t.filter.hueRotate.toString = function () {
            return this()
        }, t.filter.invert = function (e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: 1 - e
            })
        }, t.filter.invert.toString = function () {
            return this()
        }, t.filter.brightness = function (e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {amount: e})
        }, t.filter.brightness.toString = function () {
            return this()
        }, t.filter.contrast = function (e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: .5 - e / 2
            })
        }, t.filter.contrast.toString = function () {
            return this()
        }
    }), r.plugin(function (t, e) {
        var n = t._.box, r = t.is, i = /^[^a-z]*([tbmlrc])/i, o = function () {
            return "T" + this.dx + "," + this.dy
        };
        e.prototype.getAlign = function (t, e) {
            null == e && r(t, "string") && (e = t, t = null), t = t || this.paper;
            var a = t.getBBox ? t.getBBox() : n(t), s = this.getBBox(), u = {};
            switch (e = e && e.match(i), e = e ? e[1].toLowerCase() : "c") {
                case"t":
                    u.dx = 0, u.dy = a.y - s.y;
                    break;
                case"b":
                    u.dx = 0, u.dy = a.y2 - s.y2;
                    break;
                case"m":
                    u.dx = 0, u.dy = a.cy - s.cy;
                    break;
                case"l":
                    u.dx = a.x - s.x, u.dy = 0;
                    break;
                case"r":
                    u.dx = a.x2 - s.x2, u.dy = 0;
                    break;
                default:
                    u.dx = a.cx - s.cx, u.dy = 0
            }
            return u.toString = o, u
        }, e.prototype.align = function (t, e) {
            return this.transform("..." + this.getAlign(t, e))
        }
    }), r
});
this.createjs = this.createjs || {}, createjs.extend = function (t, e) {
    "use strict";
    function i() {
        this.constructor = t
    }

    return i.prototype = e.prototype, t.prototype = new i
}, this.createjs = this.createjs || {}, createjs.promote = function (t, e) {
    "use strict";
    var i = t.prototype, n = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
    if (n) {
        i[(e += "_") + "constructor"] = n.constructor;
        for (var r in n)i.hasOwnProperty(r) && "function" == typeof n[r] && (i[e + r] = n[r])
    }
    return t
}, this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e, i) {
        this.type = t, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!e, this.cancelable = !!i, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
    }

    var e = t.prototype;
    e.preventDefault = function () {
        this.defaultPrevented = this.cancelable && !0
    }, e.stopPropagation = function () {
        this.propagationStopped = !0
    }, e.stopImmediatePropagation = function () {
        this.immediatePropagationStopped = this.propagationStopped = !0
    }, e.remove = function () {
        this.removed = !0
    }, e.clone = function () {
        return new t(this.type, this.bubbles, this.cancelable)
    }, e.set = function (t) {
        for (var e in t)this[e] = t[e];
        return this
    }, e.toString = function () {
        return "[Event (type=" + this.type + ")]"
    }, createjs.Event = t
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t() {
        this._listeners = null, this._captureListeners = null
    }

    var e = t.prototype;
    t.initialize = function (t) {
        t.addEventListener = e.addEventListener, t.on = e.on, t.removeEventListener = t.off = e.removeEventListener, t.removeAllEventListeners = e.removeAllEventListeners, t.hasEventListener = e.hasEventListener, t.dispatchEvent = e.dispatchEvent, t._dispatchEvent = e._dispatchEvent, t.willTrigger = e.willTrigger
    }, e.addEventListener = function (t, e, i) {
        var n;
        n = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
        var r = n[t];
        return r && this.removeEventListener(t, e, i), r = n[t], r ? r.push(e) : n[t] = [e], e
    }, e.on = function (t, e, i, n, r, s) {
        return e.handleEvent && (i = i || e, e = e.handleEvent), i = i || this, this.addEventListener(t, function (t) {
            e.call(i, t, r), n && t.remove()
        }, s)
    }, e.removeEventListener = function (t, e, i) {
        var n = i ? this._captureListeners : this._listeners;
        if (n) {
            var r = n[t];
            if (r)for (var s = 0, o = r.length; o > s; s++)if (r[s] == e) {
                1 == o ? delete n[t] : r.splice(s, 1);
                break
            }
        }
    }, e.off = e.removeEventListener, e.removeAllEventListeners = function (t) {
        t ? (this._listeners && delete this._listeners[t], this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null
    }, e.dispatchEvent = function (t, e, i) {
        if ("string" == typeof t) {
            var n = this._listeners;
            if (!(e || n && n[t]))return !0;
            t = new createjs.Event(t, e, i)
        } else t.target && t.clone && (t = t.clone());
        try {
            t.target = this
        } catch (r) {
        }
        if (t.bubbles && this.parent) {
            for (var s = this, o = [s]; s.parent;)o.push(s = s.parent);
            var a, u = o.length;
            for (a = u - 1; a >= 0 && !t.propagationStopped; a--)o[a]._dispatchEvent(t, 1 + (0 == a));
            for (a = 1; u > a && !t.propagationStopped; a++)o[a]._dispatchEvent(t, 3)
        } else this._dispatchEvent(t, 2);
        return !t.defaultPrevented
    }, e.hasEventListener = function (t) {
        var e = this._listeners, i = this._captureListeners;
        return !!(e && e[t] || i && i[t])
    }, e.willTrigger = function (t) {
        for (var e = this; e;) {
            if (e.hasEventListener(t))return !0;
            e = e.parent
        }
        return !1
    }, e.toString = function () {
        return "[EventDispatcher]"
    }, e._dispatchEvent = function (t, e) {
        var i, n = 1 == e ? this._captureListeners : this._listeners;
        if (t && n) {
            var r = n[t.type];
            if (!r || !(i = r.length))return;
            try {
                t.currentTarget = this
            } catch (s) {
            }
            try {
                t.eventPhase = e
            } catch (s) {
            }
            t.removed = !1, r = r.slice();
            for (var o = 0; i > o && !t.immediatePropagationStopped; o++) {
                var a = r[o];
                a.handleEvent ? a.handleEvent(t) : a(t), t.removed && (this.off(t.type, a, 1 == e), t.removed = !1)
            }
        }
    }, createjs.EventDispatcher = t
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t() {
        throw"Ticker cannot be instantiated."
    }

    t.RAF_SYNCHED = "synched", t.RAF = "raf", t.TIMEOUT = "timeout", t.useRAF = !1, t.timingMode = null, t.maxDelta = 0, t.paused = !1, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher.initialize(t), t._addEventListener = t.addEventListener, t.addEventListener = function () {
        return !t._inited && t.init(), t._addEventListener.apply(t, arguments)
    }, t._inited = !1, t._startTime = 0, t._pausedTime = 0, t._ticks = 0, t._pausedTicks = 0, t._interval = 50, t._lastTime = 0, t._times = null, t._tickTimes = null, t._timerId = null, t._raf = !0, t.setInterval = function (e) {
        t._interval = e, t._inited && t._setupTick()
    }, t.getInterval = function () {
        return t._interval
    }, t.setFPS = function (e) {
        t.setInterval(1e3 / e)
    }, t.getFPS = function () {
        return 1e3 / t._interval
    };
    try {
        Object.defineProperties(t, {
            interval: {get: t.getInterval, set: t.setInterval},
            framerate: {get: t.getFPS, set: t.setFPS}
        })
    } catch (e) {
        console.log(e)
    }
    t.init = function () {
        t._inited || (t._inited = !0, t._times = [], t._tickTimes = [], t._startTime = t._getTime(), t._times.push(t._lastTime = 0), t.interval = t._interval)
    }, t.reset = function () {
        if (t._raf) {
            var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
            e && e(t._timerId)
        } else clearTimeout(t._timerId);
        t.removeAllEventListeners("tick"), t._timerId = t._times = t._tickTimes = null, t._startTime = t._lastTime = t._ticks = 0, t._inited = !1
    }, t.getMeasuredTickTime = function (e) {
        var i = 0, n = t._tickTimes;
        if (!n || n.length < 1)return -1;
        e = Math.min(n.length, e || 0 | t.getFPS());
        for (var r = 0; e > r; r++)i += n[r];
        return i / e
    }, t.getMeasuredFPS = function (e) {
        var i = t._times;
        return !i || i.length < 2 ? -1 : (e = Math.min(i.length - 1, e || 0 | t.getFPS()), 1e3 / ((i[0] - i[e]) / e))
    }, t.setPaused = function (e) {
        t.paused = e
    }, t.getPaused = function () {
        return t.paused
    }, t.getTime = function (e) {
        return t._startTime ? t._getTime() - (e ? t._pausedTime : 0) : -1
    }, t.getEventTime = function (e) {
        return t._startTime ? (t._lastTime || t._startTime) - (e ? t._pausedTime : 0) : -1
    }, t.getTicks = function (e) {
        return t._ticks - (e ? t._pausedTicks : 0)
    }, t._handleSynch = function () {
        t._timerId = null, t._setupTick(), t._getTime() - t._lastTime >= .97 * (t._interval - 1) && t._tick()
    }, t._handleRAF = function () {
        t._timerId = null, t._setupTick(), t._tick()
    }, t._handleTimeout = function () {
        t._timerId = null, t._setupTick(), t._tick()
    }, t._setupTick = function () {
        if (null == t._timerId) {
            var e = t.timingMode || t.useRAF && t.RAF_SYNCHED;
            if (e == t.RAF_SYNCHED || e == t.RAF) {
                var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                if (i)return t._timerId = i(e == t.RAF ? t._handleRAF : t._handleSynch), void(t._raf = !0)
            }
            t._raf = !1, t._timerId = setTimeout(t._handleTimeout, t._interval)
        }
    }, t._tick = function () {
        var e = t.paused, i = t._getTime(), n = i - t._lastTime;
        if (t._lastTime = i, t._ticks++, e && (t._pausedTicks++, t._pausedTime += n), t.hasEventListener("tick")) {
            var r = new createjs.Event("tick"), s = t.maxDelta;
            r.delta = s && n > s ? s : n, r.paused = e, r.time = i, r.runTime = i - t._pausedTime, t.dispatchEvent(r)
        }
        for (t._tickTimes.unshift(t._getTime() - i); t._tickTimes.length > 100;)t._tickTimes.pop();
        for (t._times.unshift(i); t._times.length > 100;)t._times.pop()
    };
    var i = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
    t._getTime = function () {
        return (i && i.call(performance) || (new Date).getTime()) - t._startTime
    }, createjs.Ticker = t
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(e, i, n) {
        this.ignoreGlobalPause = !1, this.loop = !1, this.duration = 0, this.pluginData = n || {}, this.target = e, this.position = null, this.passive = !1, this._paused = !1, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], this._prevPosition = 0, this._stepPosition = 0, this._prevPos = -1, this._target = e, this._useTicks = !1, this._inited = !1, this._registered = !1, i && (this._useTicks = i.useTicks, this.ignoreGlobalPause = i.ignoreGlobalPause, this.loop = i.loop, i.onChange && this.addEventListener("change", i.onChange), i.override && t.removeTweens(e)), i && i.paused ? this._paused = !0 : createjs.Tween._register(this, !0), i && null != i.position && this.setPosition(i.position, t.NONE)
    }

    var e = createjs.extend(t, createjs.EventDispatcher);
    t.NONE = 0, t.LOOP = 1, t.REVERSE = 2, t.IGNORE = {}, t._tweens = [], t._plugins = {}, t.get = function (e, i, n, r) {
        return r && t.removeTweens(e), new t(e, i, n)
    }, t.tick = function (e, i) {
        for (var n = t._tweens.slice(), r = n.length - 1; r >= 0; r--) {
            var s = n[r];
            i && !s.ignoreGlobalPause || s._paused || s.tick(s._useTicks ? 1 : e)
        }
    }, t.handleEvent = function (t) {
        "tick" == t.type && this.tick(t.delta, t.paused)
    }, t.removeTweens = function (e) {
        if (e.tweenjs_count) {
            for (var i = t._tweens, n = i.length - 1; n >= 0; n--) {
                var r = i[n];
                r._target == e && (r._paused = !0, i.splice(n, 1))
            }
            e.tweenjs_count = 0
        }
    }, t.removeAllTweens = function () {
        for (var e = t._tweens, i = 0, n = e.length; n > i; i++) {
            var r = e[i];
            r._paused = !0, r.target && (r.target.tweenjs_count = 0)
        }
        e.length = 0
    }, t.hasActiveTweens = function (e) {
        return e ? null != e.tweenjs_count && !!e.tweenjs_count : t._tweens && !!t._tweens.length
    }, t.installPlugin = function (e, i) {
        var n = e.priority;
        null == n && (e.priority = n = 0);
        for (var r = 0, s = i.length, o = t._plugins; s > r; r++) {
            var a = i[r];
            if (o[a]) {
                for (var u = o[a], c = 0, h = u.length; h > c && !(n < u[c].priority); c++);
                o[a].splice(c, 0, e)
            } else o[a] = [e]
        }
    }, t._register = function (e, i) {
        var n = e._target, r = t._tweens;
        if (i && !e._registered)n && (n.tweenjs_count = n.tweenjs_count ? n.tweenjs_count + 1 : 1), r.push(e), !t._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", t), t._inited = !0); else if (!i && e._registered) {
            n && n.tweenjs_count--;
            for (var s = r.length; s--;)if (r[s] == e) {
                r.splice(s, 1);
                break
            }
        }
        e._registered = i
    }, e.wait = function (t, e) {
        if (null == t || 0 >= t)return this;
        var i = this._cloneProps(this._curQueueProps);
        return this._addStep({d: t, p0: i, e: this._linearEase, p1: i, v: e})
    }, e.to = function (t, e, i) {
        return (isNaN(e) || 0 > e) && (e = 0), this._addStep({
            d: e || 0,
            p0: this._cloneProps(this._curQueueProps),
            e: i,
            p1: this._cloneProps(this._appendQueueProps(t))
        })
    }, e.call = function (t, e, i) {
        return this._addAction({f: t, p: e ? e : [this], o: i ? i : this._target})
    }, e.set = function (t, e) {
        return this._addAction({f: this._set, o: this, p: [t, e ? e : this._target]})
    }, e.play = function (t) {
        return t || (t = this), this.call(t.setPaused, [!1], t)
    }, e.pause = function (t) {
        return t || (t = this), this.call(t.setPaused, [!0], t)
    }, e.setPosition = function (t, e) {
        0 > t && (t = 0), null == e && (e = 1);
        var i = t, n = !1;
        if (i >= this.duration && (this.loop ? i %= this.duration : (i = this.duration, n = !0)), i == this._prevPos)return n;
        var r = this._prevPos;
        if (this.position = this._prevPos = i, this._prevPosition = t, this._target)if (n)this._updateTargetProps(null, 1); else if (this._steps.length > 0) {
            for (var s = 0, o = this._steps.length; o > s && !(this._steps[s].t > i); s++);
            var a = this._steps[s - 1];
            this._updateTargetProps(a, (this._stepPosition = i - a.t) / a.d)
        }
        return 0 != e && this._actions.length > 0 && (this._useTicks ? this._runActions(i, i) : 1 == e && r > i ? (r != this.duration && this._runActions(r, this.duration), this._runActions(0, i, !0)) : this._runActions(r, i)), n && this.setPaused(!0), this.dispatchEvent("change"), n
    }, e.tick = function (t) {
        this._paused || this.setPosition(this._prevPosition + t)
    }, e.setPaused = function (e) {
        return this._paused === !!e ? this : (this._paused = !!e, t._register(this, !e), this)
    }, e.w = e.wait, e.t = e.to, e.c = e.call, e.s = e.set, e.toString = function () {
        return "[Tween]"
    }, e.clone = function () {
        throw"Tween can not be cloned."
    }, e._updateTargetProps = function (e, i) {
        var n, r, s, o, a, u;
        if (e || 1 != i) {
            if (this.passive = !!e.v, this.passive)return;
            e.e && (i = e.e(i, 0, 1, 1)), n = e.p0, r = e.p1
        } else this.passive = !1, n = r = this._curQueueProps;
        for (var c in this._initQueueProps) {
            null == (o = n[c]) && (n[c] = o = this._initQueueProps[c]), null == (a = r[c]) && (r[c] = a = o), s = o == a || 0 == i || 1 == i || "number" != typeof o ? 1 == i ? a : o : o + (a - o) * i;
            var h = !1;
            if (u = t._plugins[c])for (var l = 0, _ = u.length; _ > l; l++) {
                var p = u[l].tween(this, c, s, n, r, i, !!e && n == r, !e);
                p == t.IGNORE ? h = !0 : s = p
            }
            h || (this._target[c] = s)
        }
    }, e._runActions = function (t, e, i) {
        var n = t, r = e, s = -1, o = this._actions.length, a = 1;
        for (t > e && (n = e, r = t, s = o, o = a = -1); (s += a) != o;) {
            var u = this._actions[s], c = u.t;
            (c == r || c > n && r > c || i && c == t) && u.f.apply(u.o, u.p)
        }
    }, e._appendQueueProps = function (e) {
        var i, n, r, s, o;
        for (var a in e)if (void 0 === this._initQueueProps[a]) {
            if (n = this._target[a], i = t._plugins[a])for (r = 0, s = i.length; s > r; r++)n = i[r].init(this, a, n);
            this._initQueueProps[a] = this._curQueueProps[a] = void 0 === n ? null : n
        } else n = this._curQueueProps[a];
        for (var a in e) {
            if (n = this._curQueueProps[a], i = t._plugins[a])for (o = o || {}, r = 0, s = i.length; s > r; r++)i[r].step && i[r].step(this, a, n, e[a], o);
            this._curQueueProps[a] = e[a]
        }
        return o && this._appendQueueProps(o), this._curQueueProps
    }, e._cloneProps = function (t) {
        var e = {};
        for (var i in t)e[i] = t[i];
        return e
    }, e._addStep = function (t) {
        return t.d > 0 && (this._steps.push(t), t.t = this.duration, this.duration += t.d), this
    }, e._addAction = function (t) {
        return t.t = this.duration, this._actions.push(t), this
    }, e._set = function (t, e) {
        for (var i in t)e[i] = t[i]
    }, createjs.Tween = createjs.promote(t, "EventDispatcher")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e, i) {
        this.EventDispatcher_constructor(), this.ignoreGlobalPause = !1, this.duration = 0, this.loop = !1, this.position = null, this._paused = !1, this._tweens = [], this._labels = null, this._labelList = null, this._prevPosition = 0, this._prevPos = -1, this._useTicks = !1, this._registered = !1, i && (this._useTicks = i.useTicks, this.loop = i.loop, this.ignoreGlobalPause = i.ignoreGlobalPause, i.onChange && this.addEventListener("change", i.onChange)), t && this.addTween.apply(this, t), this.setLabels(e), i && i.paused ? this._paused = !0 : createjs.Tween._register(this, !0), i && null != i.position && this.setPosition(i.position, createjs.Tween.NONE)
    }

    var e = createjs.extend(t, createjs.EventDispatcher);
    e.addTween = function (t) {
        var e = arguments.length;
        if (e > 1) {
            for (var i = 0; e > i; i++)this.addTween(arguments[i]);
            return arguments[0]
        }
        return 0 == e ? null : (this.removeTween(t), this._tweens.push(t), t.setPaused(!0), t._paused = !1, t._useTicks = this._useTicks, t.duration > this.duration && (this.duration = t.duration), this._prevPos >= 0 && t.setPosition(this._prevPos, createjs.Tween.NONE), t)
    }, e.removeTween = function (t) {
        var e = arguments.length;
        if (e > 1) {
            for (var i = !0, n = 0; e > n; n++)i = i && this.removeTween(arguments[n]);
            return i
        }
        if (0 == e)return !1;
        for (var r = this._tweens, n = r.length; n--;)if (r[n] == t)return r.splice(n, 1), t.duration >= this.duration && this.updateDuration(), !0;
        return !1
    }, e.addLabel = function (t, e) {
        this._labels[t] = e;
        var i = this._labelList;
        if (i) {
            for (var n = 0, r = i.length; r > n && !(e < i[n].position); n++);
            i.splice(n, 0, {label: t, position: e})
        }
    }, e.setLabels = function (t) {
        this._labels = t ? t : {}
    }, e.getLabels = function () {
        var t = this._labelList;
        if (!t) {
            t = this._labelList = [];
            var e = this._labels;
            for (var i in e)t.push({label: i, position: e[i]});
            t.sort(function (t, e) {
                return t.position - e.position
            })
        }
        return t
    }, e.getCurrentLabel = function () {
        var t = this.getLabels(), e = this.position, i = t.length;
        if (i) {
            for (var n = 0; i > n && !(e < t[n].position); n++);
            return 0 == n ? null : t[n - 1].label
        }
        return null
    }, e.gotoAndPlay = function (t) {
        this.setPaused(!1), this._goto(t)
    }, e.gotoAndStop = function (t) {
        this.setPaused(!0), this._goto(t)
    }, e.setPosition = function (t, e) {
        var i = this._calcPosition(t), n = !this.loop && t >= this.duration;
        if (i == this._prevPos)return n;
        this._prevPosition = t, this.position = this._prevPos = i;
        for (var r = 0, s = this._tweens.length; s > r; r++)if (this._tweens[r].setPosition(i, e), i != this._prevPos)return !1;
        return n && this.setPaused(!0), this.dispatchEvent("change"), n
    }, e.setPaused = function (t) {
        this._paused = !!t, createjs.Tween._register(this, !t)
    }, e.updateDuration = function () {
        this.duration = 0;
        for (var t = 0, e = this._tweens.length; e > t; t++) {
            var i = this._tweens[t];
            i.duration > this.duration && (this.duration = i.duration)
        }
    }, e.tick = function (t) {
        this.setPosition(this._prevPosition + t)
    }, e.resolve = function (t) {
        var e = Number(t);
        return isNaN(e) && (e = this._labels[t]), e
    }, e.toString = function () {
        return "[Timeline]"
    }, e.clone = function () {
        throw"Timeline can not be cloned."
    }, e._goto = function (t) {
        var e = this.resolve(t);
        null != e && this.setPosition(e)
    }, e._calcPosition = function (t) {
        return 0 > t ? 0 : t < this.duration ? t : this.loop ? t % this.duration : this.duration
    }, createjs.Timeline = createjs.promote(t, "EventDispatcher")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t() {
        throw"Ease cannot be instantiated."
    }

    t.linear = function (t) {
        return t
    }, t.none = t.linear, t.get = function (t) {
        return -1 > t && (t = -1), t > 1 && (t = 1), function (e) {
            return 0 == t ? e : 0 > t ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
        }
    }, t.getPowIn = function (t) {
        return function (e) {
            return Math.pow(e, t)
        }
    }, t.getPowOut = function (t) {
        return function (e) {
            return 1 - Math.pow(1 - e, t)
        }
    }, t.getPowInOut = function (t) {
        return function (e) {
            return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t))
        }
    }, t.quadIn = t.getPowIn(2), t.quadOut = t.getPowOut(2), t.quadInOut = t.getPowInOut(2), t.cubicIn = t.getPowIn(3), t.cubicOut = t.getPowOut(3), t.cubicInOut = t.getPowInOut(3), t.quartIn = t.getPowIn(4), t.quartOut = t.getPowOut(4), t.quartInOut = t.getPowInOut(4), t.quintIn = t.getPowIn(5), t.quintOut = t.getPowOut(5), t.quintInOut = t.getPowInOut(5), t.sineIn = function (t) {
        return 1 - Math.cos(t * Math.PI / 2)
    }, t.sineOut = function (t) {
        return Math.sin(t * Math.PI / 2)
    }, t.sineInOut = function (t) {
        return -.5 * (Math.cos(Math.PI * t) - 1)
    }, t.getBackIn = function (t) {
        return function (e) {
            return e * e * ((t + 1) * e - t)
        }
    }, t.backIn = t.getBackIn(1.7), t.getBackOut = function (t) {
        return function (e) {
            return --e * e * ((t + 1) * e + t) + 1
        }
    }, t.backOut = t.getBackOut(1.7), t.getBackInOut = function (t) {
        return t *= 1.525, function (e) {
            return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
        }
    }, t.backInOut = t.getBackInOut(1.7), t.circIn = function (t) {
        return -(Math.sqrt(1 - t * t) - 1)
    }, t.circOut = function (t) {
        return Math.sqrt(1 - --t * t)
    }, t.circInOut = function (t) {
        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    }, t.bounceIn = function (e) {
        return 1 - t.bounceOut(1 - e)
    }, t.bounceOut = function (t) {
        return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, t.bounceInOut = function (e) {
        return .5 > e ? .5 * t.bounceIn(2 * e) : .5 * t.bounceOut(2 * e - 1) + .5
    }, t.getElasticIn = function (t, e) {
        var i = 2 * Math.PI;
        return function (n) {
            if (0 == n || 1 == n)return n;
            var r = e / i * Math.asin(1 / t);
            return -(t * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - r) * i / e))
        }
    }, t.elasticIn = t.getElasticIn(1, .3), t.getElasticOut = function (t, e) {
        var i = 2 * Math.PI;
        return function (n) {
            if (0 == n || 1 == n)return n;
            var r = e / i * Math.asin(1 / t);
            return t * Math.pow(2, -10 * n) * Math.sin((n - r) * i / e) + 1
        }
    }, t.elasticOut = t.getElasticOut(1, .3), t.getElasticInOut = function (t, e) {
        var i = 2 * Math.PI;
        return function (n) {
            var r = e / i * Math.asin(1 / t);
            return (n *= 2) < 1 ? -.5 * (t * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - r) * i / e)) : t * Math.pow(2, -10 * (n -= 1)) * Math.sin((n - r) * i / e) * .5 + 1
        }
    }, t.elasticInOut = t.getElasticInOut(1, .3 * 1.5), createjs.Ease = t
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t() {
        throw"MotionGuidePlugin cannot be instantiated."
    }

    t.priority = 0, t._rotOffS, t._rotOffE, t._rotNormS, t._rotNormE, t.install = function () {
        return createjs.Tween.installPlugin(t, ["guide", "x", "y", "rotation"]), createjs.Tween.IGNORE
    }, t.init = function (t, e, i) {
        var n = t.target;
        return n.hasOwnProperty("x") || (n.x = 0), n.hasOwnProperty("y") || (n.y = 0), n.hasOwnProperty("rotation") || (n.rotation = 0), "rotation" == e && (t.__needsRot = !0), "guide" == e ? null : i
    }, t.step = function (e, i, n, r, s) {
        if ("rotation" == i && (e.__rotGlobalS = n, e.__rotGlobalE = r, t.testRotData(e, s)), "guide" != i)return r;
        var o, a = r;
        a.hasOwnProperty("path") || (a.path = []);
        var u = a.path;
        if (a.hasOwnProperty("end") || (a.end = 1), a.hasOwnProperty("start") || (a.start = n && n.hasOwnProperty("end") && n.path === u ? n.end : 0), a.hasOwnProperty("_segments") && a._length)return r;
        var c = u.length, h = 10;
        if (!(c >= 6 && (c - 2) % 4 == 0))throw"invalid 'path' data, please see documentation for valid paths";
        a._segments = [], a._length = 0;
        for (var l = 2; c > l; l += 4) {
            for (var _, p, f = u[l - 2], d = u[l - 1], v = u[l + 0], g = u[l + 1], m = u[l + 2], w = u[l + 3], P = f, T = d, E = 0, b = [], O = 1; h >= O; O++) {
                var k = O / h, I = 1 - k;
                _ = I * I * f + 2 * I * k * v + k * k * m, p = I * I * d + 2 * I * k * g + k * k * w, E += b[b.push(Math.sqrt((o = _ - P) * o + (o = p - T) * o)) - 1], P = _, T = p
            }
            a._segments.push(E), a._segments.push(b), a._length += E
        }
        o = a.orient, a.orient = !0;
        var j = {};
        return t.calc(a, a.start, j), e.__rotPathS = Number(j.rotation.toFixed(5)), t.calc(a, a.end, j), e.__rotPathE = Number(j.rotation.toFixed(5)), a.orient = !1, t.calc(a, a.end, s), a.orient = o, a.orient ? (e.__guideData = a, t.testRotData(e, s), r) : r
    }, t.testRotData = function (t, e) {
        if (void 0 === t.__rotGlobalS || void 0 === t.__rotGlobalE) {
            if (t.__needsRot)return;
            void 0 !== t._curQueueProps.rotation ? t.__rotGlobalS = t.__rotGlobalE = t._curQueueProps.rotation : t.__rotGlobalS = t.__rotGlobalE = e.rotation = t.target.rotation || 0
        }
        if (void 0 !== t.__guideData) {
            var i = t.__guideData, n = t.__rotGlobalE - t.__rotGlobalS, r = t.__rotPathE - t.__rotPathS, s = n - r;
            if ("auto" == i.orient)s > 180 ? s -= 360 : -180 > s && (s += 360); else if ("cw" == i.orient) {
                for (; 0 > s;)s += 360;
                0 == s && n > 0 && 180 != n && (s += 360)
            } else if ("ccw" == i.orient) {
                for (s = n - (r > 180 ? 360 - r : r); s > 0;)s -= 360;
                0 == s && 0 > n && -180 != n && (s -= 360)
            }
            i.rotDelta = s, i.rotOffS = t.__rotGlobalS - t.__rotPathS, t.__rotGlobalS = t.__rotGlobalE = t.__guideData = t.__needsRot = void 0
        }
    }, t.tween = function (e, i, n, r, s, o, a, u) {
        var c = s.guide;
        if (void 0 == c || c === r.guide)return n;
        if (c.lastRatio != o) {
            var h = (c.end - c.start) * (a ? c.end : o) + c.start;
            switch (t.calc(c, h, e.target), c.orient) {
                case"cw":
                case"ccw":
                case"auto":
                    e.target.rotation += c.rotOffS + c.rotDelta * o;
                    break;
                case"fixed":
                default:
                    e.target.rotation += c.rotOffS
            }
            c.lastRatio = o
        }
        return "rotation" != i || c.orient && "false" != c.orient ? e.target[i] : n
    }, t.calc = function (t, e, i) {
        if (void 0 == t._segments)throw"Missing critical pre-calculated information, please file a bug";
        void 0 == i && (i = {x: 0, y: 0, rotation: 0});
        for (var n = t._segments, r = t.path, s = t._length * e, o = n.length - 2, a = 0; s > n[a] && o > a;)s -= n[a], a += 2;
        var u = n[a + 1], c = 0;
        for (o = u.length - 1; s > u[c] && o > c;)s -= u[c], c++;
        var h = c / ++o + s / (o * u[c]);
        a = 2 * a + 2;
        var l = 1 - h;
        return i.x = l * l * r[a - 2] + 2 * l * h * r[a + 0] + h * h * r[a + 2], i.y = l * l * r[a - 1] + 2 * l * h * r[a + 1] + h * h * r[a + 3], t.orient && (i.rotation = 57.2957795 * Math.atan2((r[a + 1] - r[a - 1]) * l + (r[a + 3] - r[a + 1]) * h, (r[a + 0] - r[a - 2]) * l + (r[a + 2] - r[a + 0]) * h)), i
    }, createjs.MotionGuidePlugin = t
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    var t = createjs.TweenJS = createjs.TweenJS || {};
    t.version = "0.6.2", t.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
}();
!function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    var e = 0, i = Array.prototype.slice;
    t.cleanData = function (e) {
        return function (i) {
            var n, s, o;
            for (o = 0; null != (s = i[o]); o++)try {
                n = t._data(s, "events"), n && n.remove && t(s).triggerHandler("remove")
            } catch (r) {
            }
            e(i)
        }
    }(t.cleanData), t.widget = function (e, i, n) {
        var s, o, r, a, u = {}, d = e.split(".")[0];
        return e = e.split(".")[1], s = d + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function (e) {
            return !!t.data(e, s)
        }, t[d] = t[d] || {}, o = t[d][e], r = t[d][e] = function (t, e) {
            return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e)
        }, t.extend(r, o, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function (e, n) {
            return t.isFunction(n) ? void(u[e] = function () {
                var t = function () {
                    return i.prototype[e].apply(this, arguments)
                }, s = function (t) {
                    return i.prototype[e].apply(this, t)
                };
                return function () {
                    var e, i = this._super, o = this._superApply;
                    return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                }
            }()) : void(u[e] = n)
        }), r.prototype = t.widget.extend(a, {widgetEventPrefix: o ? a.widgetEventPrefix || e : e}, u, {
            constructor: r,
            namespace: d,
            widgetName: e,
            widgetFullName: s
        }), o ? (t.each(o._childConstructors, function (e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, r, i._proto)
        }), delete o._childConstructors) : i._childConstructors.push(r), t.widget.bridge(e, r), r
    }, t.widget.extend = function (e) {
        for (var n, s, o = i.call(arguments, 1), r = 0, a = o.length; a > r; r++)for (n in o[r])s = o[r][n], o[r].hasOwnProperty(n) && void 0 !== s && (t.isPlainObject(s) ? e[n] = t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], s) : t.widget.extend({}, s) : e[n] = s);
        return e
    }, t.widget.bridge = function (e, n) {
        var s = n.prototype.widgetFullName || e;
        t.fn[e] = function (o) {
            var r = "string" == typeof o, a = i.call(arguments, 1), u = this;
            return o = !r && a.length ? t.widget.extend.apply(null, [o].concat(a)) : o, r ? this.each(function () {
                var i, n = t.data(this, s);
                return "instance" === o ? (u = n, !1) : n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, a), i !== n && void 0 !== i ? (u = i && i.jquery ? u.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
            }) : this.each(function () {
                var e = t.data(this, s);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, s, new n(o, this))
            }), u
        }
    }, t.Widget = function () {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (i, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === n && this.destroy()
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function () {
            return this.element
        },
        option: function (e, i) {
            var n, s, o, r = e;
            if (0 === arguments.length)return t.widget.extend({}, this.options);
            if ("string" == typeof e)if (r = {}, n = e.split("."), e = n.shift(), n.length) {
                for (s = r[e] = t.widget.extend({}, this.options[e]), o = 0; o < n.length - 1; o++)s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                if (e = n.pop(), 1 === arguments.length)return void 0 === s[e] ? null : s[e];
                s[e] = i
            } else {
                if (1 === arguments.length)return void 0 === this.options[e] ? null : this.options[e];
                r[e] = i
            }
            return this._setOptions(r), this
        },
        _setOptions: function (t) {
            var e;
            for (e in t)this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _on: function (e, i, n) {
            var s, o = this;
            "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function (n, r) {
                function a() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0
                }

                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                var u = n.match(/^([\w:-]*)\s*(.*)$/), d = u[1] + o.eventNamespace, h = u[2];
                h ? s.delegate(h, d, a) : i.bind(d, a)
            })
        },
        _off: function (e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function (t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments)
            }

            var n = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                }, focusout: function (e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (e, i, n) {
            var s, o, r = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)for (s in o)s in i || (i[s] = o[s]);
            return this.element.trigger(i, n), !(t.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, i) {
        t.Widget.prototype["_" + e] = function (n, s, o) {
            "string" == typeof s && (s = {effect: s});
            var r, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
            s = s || {}, "number" == typeof s && (s = {duration: s}), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function (i) {
                t(this)[e](), o && o.call(n[0]), i()
            })
        }
    });
    t.widget
});
!function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "jquery.ui.widget"], e) : "object" == typeof exports ? e(require("jquery"), require("./vendor/jquery.ui.widget")) : e(window.jQuery)
}(function (e) {
    "use strict";
    function t(t) {
        var i = "dragover" === t;
        return function (r) {
            r.dataTransfer = r.originalEvent && r.originalEvent.dataTransfer;
            var n = r.dataTransfer;
            n && -1 !== e.inArray("Files", n.types) && this._trigger(t, e.Event(t, {delegatedEvent: r})) !== !1 && (r.preventDefault(), i && (n.dropEffect = "copy"))
        }
    }

    e.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || e('<input type="file">').prop("disabled")), e.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader), e.support.xhrFormDataFileUpload = !!window.FormData, e.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice), e.widget("blueimp.fileupload", {
        options: {
            dropZone: e(document),
            pasteZone: void 0,
            fileInput: void 0,
            replaceFileInput: !0,
            paramName: void 0,
            singleFileUploads: !0,
            limitMultiFileUploads: void 0,
            limitMultiFileUploadSize: void 0,
            limitMultiFileUploadSizeOverhead: 512,
            sequentialUploads: !1,
            limitConcurrentUploads: void 0,
            forceIframeTransport: !1,
            redirect: void 0,
            redirectParamName: void 0,
            postMessage: void 0,
            multipart: !0,
            maxChunkSize: void 0,
            uploadedBytes: void 0,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            autoUpload: !0,
            messages: {uploadedBytes: "Uploaded bytes exceed file size"},
            i18n: function (t, i) {
                return t = this.messages[t] || t.toString(), i && e.each(i, function (e, i) {
                    t = t.replace("{" + e + "}", i)
                }), t
            },
            formData: function (e) {
                return e.serializeArray()
            },
            add: function (t, i) {
                return t.isDefaultPrevented() ? !1 : void((i.autoUpload || i.autoUpload !== !1 && e(this).fileupload("option", "autoUpload")) && i.process().done(function () {
                    i.submit()
                }))
            },
            processData: !1,
            contentType: !1,
            cache: !1
        },
        _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
        _blobSlice: e.support.blobSlice && function () {
            var e = this.slice || this.webkitSlice || this.mozSlice;
            return e.apply(this, arguments)
        },
        _BitrateTimer: function () {
            this.timestamp = Date.now ? Date.now() : (new Date).getTime(), this.loaded = 0, this.bitrate = 0, this.getBitrate = function (e, t, i) {
                var r = e - this.timestamp;
                return (!this.bitrate || !i || r > i) && (this.bitrate = (t - this.loaded) * (1e3 / r) * 8, this.loaded = t, this.timestamp = e), this.bitrate
            }
        },
        _isXHRUpload: function (t) {
            return !t.forceIframeTransport && (!t.multipart && e.support.xhrFileUpload || e.support.xhrFormDataFileUpload)
        },
        _getFormData: function (t) {
            var i;
            return "function" === e.type(t.formData) ? t.formData(t.form) : e.isArray(t.formData) ? t.formData : "object" === e.type(t.formData) ? (i = [], e.each(t.formData, function (e, t) {
                i.push({name: e, value: t})
            }), i) : []
        },
        _getTotal: function (t) {
            var i = 0;
            return e.each(t, function (e, t) {
                i += t.size || 1
            }), i
        },
        _initProgressObject: function (t) {
            var i = {loaded: 0, total: 0, bitrate: 0};
            t._progress ? e.extend(t._progress, i) : t._progress = i
        },
        _initResponseObject: function (e) {
            var t;
            if (e._response)for (t in e._response)e._response.hasOwnProperty(t) && delete e._response[t]; else e._response = {}
        },
        _onProgress: function (t, i) {
            if (t.lengthComputable) {
                var r, n = Date.now ? Date.now() : (new Date).getTime();
                if (i._time && i.progressInterval && n - i._time < i.progressInterval && t.loaded !== t.total)return;
                i._time = n, r = Math.floor(t.loaded / t.total * (i.chunkSize || i._progress.total)) + (i.uploadedBytes || 0), this._progress.loaded += r - i._progress.loaded, this._progress.bitrate = this._bitrateTimer.getBitrate(n, this._progress.loaded, i.bitrateInterval), i._progress.loaded = i.loaded = r, i._progress.bitrate = i.bitrate = i._bitrateTimer.getBitrate(n, r, i.bitrateInterval), this._trigger("progress", e.Event("progress", {delegatedEvent: t}), i), this._trigger("progressall", e.Event("progressall", {delegatedEvent: t}), this._progress)
            }
        },
        _initProgressListener: function (t) {
            var i = this, r = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
            r.upload && (e(r.upload).bind("progress", function (e) {
                var r = e.originalEvent;
                e.lengthComputable = r.lengthComputable, e.loaded = r.loaded, e.total = r.total, i._onProgress(e, t)
            }), t.xhr = function () {
                return r
            })
        },
        _isInstanceOf: function (e, t) {
            return Object.prototype.toString.call(t) === "[object " + e + "]"
        },
        _initXHRData: function (t) {
            var i, r = this, n = t.files[0], o = t.multipart || !e.support.xhrFileUpload, s = "array" === e.type(t.paramName) ? t.paramName[0] : t.paramName;
            t.headers = e.extend({}, t.headers), t.contentRange && (t.headers["Content-Range"] = t.contentRange), o && !t.blob && this._isInstanceOf("File", n) || (t.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(n.name) + '"'), o ? e.support.xhrFormDataFileUpload && (t.postMessage ? (i = this._getFormData(t), t.blob ? i.push({
                name: s,
                value: t.blob
            }) : e.each(t.files, function (r, n) {
                i.push({name: "array" === e.type(t.paramName) && t.paramName[r] || s, value: n})
            })) : (r._isInstanceOf("FormData", t.formData) ? i = t.formData : (i = new FormData, e.each(this._getFormData(t), function (e, t) {
                i.append(t.name, t.value)
            })), t.blob ? i.append(s, t.blob, n.name) : e.each(t.files, function (n, o) {
                (r._isInstanceOf("File", o) || r._isInstanceOf("Blob", o)) && i.append("array" === e.type(t.paramName) && t.paramName[n] || s, o, o.uploadName || o.name)
            })), t.data = i) : (t.contentType = n.type || "application/octet-stream", t.data = t.blob || n), t.blob = null
        },
        _initIframeSettings: function (t) {
            var i = e("<a></a>").prop("href", t.url).prop("host");
            t.dataType = "iframe " + (t.dataType || ""), t.formData = this._getFormData(t), t.redirect && i && i !== location.host && t.formData.push({
                name: t.redirectParamName || "redirect",
                value: t.redirect
            })
        },
        _initDataSettings: function (e) {
            this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e)
        },
        _getParamName: function (t) {
            var i = e(t.fileInput), r = t.paramName;
            return r ? e.isArray(r) || (r = [r]) : (r = [], i.each(function () {
                for (var t = e(this), i = t.prop("name") || "files[]", n = (t.prop("files") || [1]).length; n;)r.push(i), n -= 1
            }), r.length || (r = [i.prop("name") || "files[]"])), r
        },
        _initFormSettings: function (t) {
            t.form && t.form.length || (t.form = e(t.fileInput.prop("form")), t.form.length || (t.form = e(this.options.fileInput.prop("form")))), t.paramName = this._getParamName(t), t.url || (t.url = t.form.prop("action") || location.href), t.type = (t.type || "string" === e.type(t.form.prop("method")) && t.form.prop("method") || "").toUpperCase(), "POST" !== t.type && "PUT" !== t.type && "PATCH" !== t.type && (t.type = "POST"), t.formAcceptCharset || (t.formAcceptCharset = t.form.attr("accept-charset"))
        },
        _getAJAXSettings: function (t) {
            var i = e.extend({}, this.options, t);
            return this._initFormSettings(i), this._initDataSettings(i), i
        },
        _getDeferredState: function (e) {
            return e.state ? e.state() : e.isResolved() ? "resolved" : e.isRejected() ? "rejected" : "pending"
        },
        _enhancePromise: function (e) {
            return e.success = e.done, e.error = e.fail, e.complete = e.always, e
        },
        _getXHRPromise: function (t, i, r) {
            var n = e.Deferred(), o = n.promise();
            return i = i || this.options.context || o, t === !0 ? n.resolveWith(i, r) : t === !1 && n.rejectWith(i, r), o.abort = n.promise, this._enhancePromise(o)
        },
        _addConvenienceMethods: function (t, i) {
            var r = this, n = function (t) {
                return e.Deferred().resolveWith(r, t).promise()
            };
            i.process = function (t, o) {
                return (t || o) && (i._processQueue = this._processQueue = (this._processQueue || n([this])).pipe(function () {
                    return i.errorThrown ? e.Deferred().rejectWith(r, [i]).promise() : n(arguments)
                }).pipe(t, o)), this._processQueue || n([this])
            }, i.submit = function () {
                return "pending" !== this.state() && (i.jqXHR = this.jqXHR = r._trigger("submit", e.Event("submit", {delegatedEvent: t}), this) !== !1 && r._onSend(t, this)), this.jqXHR || r._getXHRPromise()
            }, i.abort = function () {
                return this.jqXHR ? this.jqXHR.abort() : (this.errorThrown = "abort", r._trigger("fail", null, this), r._getXHRPromise(!1))
            }, i.state = function () {
                return this.jqXHR ? r._getDeferredState(this.jqXHR) : this._processQueue ? r._getDeferredState(this._processQueue) : void 0
            }, i.processing = function () {
                return !this.jqXHR && this._processQueue && "pending" === r._getDeferredState(this._processQueue)
            }, i.progress = function () {
                return this._progress
            }, i.response = function () {
                return this._response
            }
        },
        _getUploadedBytes: function (e) {
            var t = e.getResponseHeader("Range"), i = t && t.split("-"), r = i && i.length > 1 && parseInt(i[1], 10);
            return r && r + 1
        },
        _chunkedUpload: function (t, i) {
            t.uploadedBytes = t.uploadedBytes || 0;
            var r, n, o = this, s = t.files[0], a = s.size, l = t.uploadedBytes, p = t.maxChunkSize || a, u = this._blobSlice, d = e.Deferred(), h = d.promise();
            return this._isXHRUpload(t) && u && (l || a > p) && !t.data ? i ? !0 : l >= a ? (s.error = t.i18n("uploadedBytes"), this._getXHRPromise(!1, t.context, [null, "error", s.error])) : (n = function () {
                var i = e.extend({}, t), h = i._progress.loaded;
                i.blob = u.call(s, l, l + p, s.type), i.chunkSize = i.blob.size, i.contentRange = "bytes " + l + "-" + (l + i.chunkSize - 1) + "/" + a, o._initXHRData(i), o._initProgressListener(i), r = (o._trigger("chunksend", null, i) !== !1 && e.ajax(i) || o._getXHRPromise(!1, i.context)).done(function (r, s, p) {
                    l = o._getUploadedBytes(p) || l + i.chunkSize, h + i.chunkSize - i._progress.loaded && o._onProgress(e.Event("progress", {
                        lengthComputable: !0,
                        loaded: l - i.uploadedBytes,
                        total: l - i.uploadedBytes
                    }), i), t.uploadedBytes = i.uploadedBytes = l, i.result = r, i.textStatus = s, i.jqXHR = p, o._trigger("chunkdone", null, i), o._trigger("chunkalways", null, i), a > l ? n() : d.resolveWith(i.context, [r, s, p])
                }).fail(function (e, t, r) {
                    i.jqXHR = e, i.textStatus = t, i.errorThrown = r, o._trigger("chunkfail", null, i), o._trigger("chunkalways", null, i), d.rejectWith(i.context, [e, t, r])
                })
            }, this._enhancePromise(h), h.abort = function () {
                return r.abort()
            }, n(), h) : !1
        },
        _beforeSend: function (e, t) {
            0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer, this._progress.loaded = this._progress.total = 0, this._progress.bitrate = 0), this._initResponseObject(t), this._initProgressObject(t), t._progress.loaded = t.loaded = t.uploadedBytes || 0, t._progress.total = t.total = this._getTotal(t.files) || 1, t._progress.bitrate = t.bitrate = 0, this._active += 1, this._progress.loaded += t.loaded, this._progress.total += t.total
        },
        _onDone: function (t, i, r, n) {
            var o = n._progress.total, s = n._response;
            n._progress.loaded < o && this._onProgress(e.Event("progress", {
                lengthComputable: !0,
                loaded: o,
                total: o
            }), n), s.result = n.result = t, s.textStatus = n.textStatus = i, s.jqXHR = n.jqXHR = r, this._trigger("done", null, n)
        },
        _onFail: function (e, t, i, r) {
            var n = r._response;
            r.recalculateProgress && (this._progress.loaded -= r._progress.loaded, this._progress.total -= r._progress.total), n.jqXHR = r.jqXHR = e, n.textStatus = r.textStatus = t, n.errorThrown = r.errorThrown = i, this._trigger("fail", null, r)
        },
        _onAlways: function (e, t, i, r) {
            this._trigger("always", null, r)
        },
        _onSend: function (t, i) {
            i.submit || this._addConvenienceMethods(t, i);
            var r, n, o, s, a = this, l = a._getAJAXSettings(i), p = function () {
                return a._sending += 1, l._bitrateTimer = new a._BitrateTimer, r = r || ((n || a._trigger("send", e.Event("send", {delegatedEvent: t}), l) === !1) && a._getXHRPromise(!1, l.context, n) || a._chunkedUpload(l) || e.ajax(l)).done(function (e, t, i) {
                        a._onDone(e, t, i, l)
                    }).fail(function (e, t, i) {
                        a._onFail(e, t, i, l)
                    }).always(function (e, t, i) {
                        if (a._onAlways(e, t, i, l), a._sending -= 1, a._active -= 1, l.limitConcurrentUploads && l.limitConcurrentUploads > a._sending)for (var r = a._slots.shift(); r;) {
                            if ("pending" === a._getDeferredState(r)) {
                                r.resolve();
                                break
                            }
                            r = a._slots.shift()
                        }
                        0 === a._active && a._trigger("stop")
                    })
            };
            return this._beforeSend(t, l), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (o = e.Deferred(), this._slots.push(o), s = o.pipe(p)) : (this._sequence = this._sequence.pipe(p, p), s = this._sequence), s.abort = function () {
                return n = [void 0, "abort", "abort"], r ? r.abort() : (o && o.rejectWith(l.context, n), p())
            }, this._enhancePromise(s)) : p()
        },
        _onAdd: function (t, i) {
            var r, n, o, s, a = this, l = !0, p = e.extend({}, this.options, i), u = i.files, d = u.length, h = p.limitMultiFileUploads, c = p.limitMultiFileUploadSize, f = p.limitMultiFileUploadSizeOverhead, g = 0, _ = this._getParamName(p), m = 0;
            if (!c || d && void 0 !== u[0].size || (c = void 0), (p.singleFileUploads || h || c) && this._isXHRUpload(p))if (p.singleFileUploads || c || !h)if (!p.singleFileUploads && c)for (o = [], r = [], s = 0; d > s; s += 1)g += u[s].size + f, (s + 1 === d || g + u[s + 1].size + f > c || h && s + 1 - m >= h) && (o.push(u.slice(m, s + 1)), n = _.slice(m, s + 1), n.length || (n = _), r.push(n), m = s + 1, g = 0); else r = _; else for (o = [], r = [], s = 0; d > s; s += h)o.push(u.slice(s, s + h)), n = _.slice(s, s + h), n.length || (n = _), r.push(n); else o = [u], r = [_];
            return i.originalFiles = u, e.each(o || u, function (n, s) {
                var p = e.extend({}, i);
                return p.files = o ? s : [s], p.paramName = r[n], a._initResponseObject(p), a._initProgressObject(p), a._addConvenienceMethods(t, p), l = a._trigger("add", e.Event("add", {delegatedEvent: t}), p)
            }), l
        },
        _replaceFileInput: function (t) {
            var i = t.fileInput, r = i.clone(!0);
            t.fileInputClone = r, e("<form></form>").append(r)[0].reset(), i.after(r).detach(), e.cleanData(i.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function (e, t) {
                return t === i[0] ? r[0] : t
            }), i[0] === this.element[0] && (this.element = r)
        },
        _handleFileTreeEntry: function (t, i) {
            var r, n = this, o = e.Deferred(), s = function (e) {
                e && !e.entry && (e.entry = t), o.resolve([e])
            }, a = function (e) {
                n._handleFileTreeEntries(e, i + t.name + "/").done(function (e) {
                    o.resolve(e)
                }).fail(s)
            }, l = function () {
                r.readEntries(function (e) {
                    e.length ? (p = p.concat(e), l()) : a(p)
                }, s)
            }, p = [];
            return i = i || "", t.isFile ? t._file ? (t._file.relativePath = i, o.resolve(t._file)) : t.file(function (e) {
                e.relativePath = i, o.resolve(e)
            }, s) : t.isDirectory ? (r = t.createReader(), l()) : o.resolve([]), o.promise()
        },
        _handleFileTreeEntries: function (t, i) {
            var r = this;
            return e.when.apply(e, e.map(t, function (e) {
                return r._handleFileTreeEntry(e, i)
            })).pipe(function () {
                return Array.prototype.concat.apply([], arguments)
            })
        },
        _getDroppedFiles: function (t) {
            t = t || {};
            var i = t.items;
            return i && i.length && (i[0].webkitGetAsEntry || i[0].getAsEntry) ? this._handleFileTreeEntries(e.map(i, function (e) {
                var t;
                return e.webkitGetAsEntry ? (t = e.webkitGetAsEntry(), t && (t._file = e.getAsFile()), t) : e.getAsEntry()
            })) : e.Deferred().resolve(e.makeArray(t.files)).promise()
        },
        _getSingleFileInputFiles: function (t) {
            t = e(t);
            var i, r, n = t.prop("webkitEntries") || t.prop("entries");
            if (n && n.length)return this._handleFileTreeEntries(n);
            if (i = e.makeArray(t.prop("files")), i.length)void 0 === i[0].name && i[0].fileName && e.each(i, function (e, t) {
                t.name = t.fileName, t.size = t.fileSize
            }); else {
                if (r = t.prop("value"), !r)return e.Deferred().resolve([]).promise();
                i = [{name: r.replace(/^.*\\/, "")}]
            }
            return e.Deferred().resolve(i).promise()
        },
        _getFileInputFiles: function (t) {
            return t instanceof e && 1 !== t.length ? e.when.apply(e, e.map(t, this._getSingleFileInputFiles)).pipe(function () {
                return Array.prototype.concat.apply([], arguments)
            }) : this._getSingleFileInputFiles(t)
        },
        _onChange: function (t) {
            var i = this, r = {fileInput: e(t.target), form: e(t.target.form)};
            this._getFileInputFiles(r.fileInput).always(function (n) {
                r.files = n, i.options.replaceFileInput && i._replaceFileInput(r), i._trigger("change", e.Event("change", {delegatedEvent: t}), r) !== !1 && i._onAdd(t, r)
            })
        },
        _onPaste: function (t) {
            var i = t.originalEvent && t.originalEvent.clipboardData && t.originalEvent.clipboardData.items, r = {files: []};
            i && i.length && (e.each(i, function (e, t) {
                var i = t.getAsFile && t.getAsFile();
                i && r.files.push(i)
            }), this._trigger("paste", e.Event("paste", {delegatedEvent: t}), r) !== !1 && this._onAdd(t, r))
        },
        _onDrop: function (t) {
            t.dataTransfer = t.originalEvent && t.originalEvent.dataTransfer;
            var i = this, r = t.dataTransfer, n = {};
            r && r.files && r.files.length && (t.preventDefault(), this._getDroppedFiles(r).always(function (r) {
                n.files = r, i._trigger("drop", e.Event("drop", {delegatedEvent: t}), n) !== !1 && i._onAdd(t, n)
            }))
        },
        _onDragOver: t("dragover"),
        _onDragEnter: t("dragenter"),
        _onDragLeave: t("dragleave"),
        _initEventHandlers: function () {
            this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                dragover: this._onDragOver,
                drop: this._onDrop,
                dragenter: this._onDragEnter,
                dragleave: this._onDragLeave
            }), this._on(this.options.pasteZone, {paste: this._onPaste})), e.support.fileInput && this._on(this.options.fileInput, {change: this._onChange})
        },
        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, "dragenter dragleave dragover drop"), this._off(this.options.pasteZone, "paste"), this._off(this.options.fileInput, "change")
        },
        _setOption: function (t, i) {
            var r = -1 !== e.inArray(t, this._specialOptions);
            r && this._destroyEventHandlers(), this._super(t, i), r && (this._initSpecialOptions(), this._initEventHandlers())
        },
        _initSpecialOptions: function () {
            var t = this.options;
            void 0 === t.fileInput ? t.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : t.fileInput instanceof e || (t.fileInput = e(t.fileInput)), t.dropZone instanceof e || (t.dropZone = e(t.dropZone)), t.pasteZone instanceof e || (t.pasteZone = e(t.pasteZone))
        },
        _getRegExp: function (e) {
            var t = e.split("/"), i = t.pop();
            return t.shift(), new RegExp(t.join("/"), i)
        },
        _isRegExpOption: function (t, i) {
            return "url" !== t && "string" === e.type(i) && /^\/.*\/[igm]{0,3}$/.test(i)
        },
        _initDataAttributes: function () {
            var t = this, i = this.options, r = this.element.data();
            e.each(this.element[0].attributes, function (e, n) {
                var o, s = n.name.toLowerCase();
                /^data-/.test(s) && (s = s.slice(5).replace(/-[a-z]/g, function (e) {
                    return e.charAt(1).toUpperCase()
                }), o = r[s], t._isRegExpOption(s, o) && (o = t._getRegExp(o)), i[s] = o)
            })
        },
        _create: function () {
            this._initDataAttributes(), this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), this._sending = this._active = 0, this._initProgressObject(this), this._initEventHandlers()
        },
        active: function () {
            return this._active
        },
        progress: function () {
            return this._progress
        },
        add: function (t) {
            var i = this;
            t && !this.options.disabled && (t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function (e) {
                t.files = e, i._onAdd(null, t)
            }) : (t.files = e.makeArray(t.files), this._onAdd(null, t)))
        },
        send: function (t) {
            if (t && !this.options.disabled) {
                if (t.fileInput && !t.files) {
                    var i, r, n = this, o = e.Deferred(), s = o.promise();
                    return s.abort = function () {
                        return r = !0, i ? i.abort() : (o.reject(null, "abort", "abort"), s)
                    }, this._getFileInputFiles(t.fileInput).always(function (e) {
                        if (!r) {
                            if (!e.length)return void o.reject();
                            t.files = e, i = n._onSend(null, t), i.then(function (e, t, i) {
                                o.resolve(e, t, i)
                            }, function (e, t, i) {
                                o.reject(e, t, i)
                            })
                        }
                    }), this._enhancePromise(s)
                }
                if (t.files = e.makeArray(t.files), t.files.length)return this._onSend(null, t)
            }
            return this._getXHRPromise(!1, t && t.context)
        }
    })
});
!function (t, e) {
    "use strict";
    t.ajaxPrefilter(function (t, e, a) {
        return t.iframe ? (t.originalURL = t.url, "iframe") : void 0
    }), t.ajaxTransport("iframe", function (e, a, n) {
        function i() {
            l.each(function (e, a) {
                var n = t(a);
                n.data("clone").replaceWith(n)
            }), o.remove(), r.one("load", function () {
                r.remove()
            }), r.attr("src", "javascript:false;")
        }

        var o = null, r = null, d = "iframe-" + t.now(), l = t(e.files).filter(":file:enabled"), u = null, c = null;
        return e.dataTypes.shift(), e.data = a.data, l.length ? (o = t("<form enctype='multipart/form-data' method='post'></form>").hide().attr({
            action: e.originalURL,
            target: d
        }), "string" == typeof e.data && e.data.length > 0 && t.error("data must not be serialized"), t.each(e.data || {}, function (e, a) {
            t.isPlainObject(a) && (e = a.name, a = a.value), t("<input type='hidden' />").attr({
                name: e,
                value: a
            }).appendTo(o)
        }), t("<input type='hidden' value='IFrame' name='X-Requested-With' />").appendTo(o), c = e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + ("*" !== e.dataTypes[0] ? ", */*; q=0.01" : "") : e.accepts["*"], t("<input type='hidden' name='X-HTTP-Accept'>").attr("value", c).appendTo(o), u = l.after(function (e) {
            var a = t(this), n = a.clone().prop("disabled", !0);
            return a.data("clone", n), n
        }).next(), l.appendTo(o), {
            send: function (e, a) {
                r = t("<iframe src='javascript:false;' name='" + d + "' id='" + d + "' style='display:none'></iframe>"), r.one("load", function () {
                    r.one("load", function () {
                        var t = this.contentWindow ? this.contentWindow.document : this.contentDocument ? this.contentDocument : this.document, e = t.documentElement ? t.documentElement : t.body, n = e.getElementsByTagName("textarea")[0], o = n && n.getAttribute("data-type") || null, r = n && n.getAttribute("data-status") || 200, d = n && n.getAttribute("data-statusText") || "OK", l = {
                            html: e.innerHTML,
                            text: o ? n.value : e ? e.textContent || e.innerText : null
                        };
                        i(), a(r, d, l, o ? "Content-Type: " + o : null)
                    }), o[0].submit()
                }), t("body").append(o, r)
            }, abort: function () {
                null !== r && (r.unbind("load").attr("src", "javascript:false;"), i())
            }
        }) : void 0
    })
}(jQuery);
//# sourceMappingURL=scripts.js.map
