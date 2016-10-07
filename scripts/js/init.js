window.dragableHeaders = function (a, e) {
    var t = {
        numSlides: 0,
        $elm: void 0,
        $dragHandler: void 0,
        dragAmount: 0,
        isDragging: !1,
        dragStartX: 0,
        dragStartY: 0,
        currentY: 0,
        currentX: 0,
        lastDragTime: 0,
        dragVelocity: 0,
        enabled: !0,
        minAspectRatio: .6,
        maxAspectRatio: 20 / 9
    };
    return t.init = function (a) {
        if (!isIE()) {
            t.checkAspectRatio(), e("body").toggleClass("dragable", t.enabled), t.$elm = e(a), t.$dragHandler = t.$elm.find(".drag-handler"), t.numSlides = t.$elm.find(".header-section").length;
            var n = t.$dragHandler.find(".header-section.active"), r = n.attr("data-slide");
            t.dragAmount = 100 * -r, t.$dragHandler.css({
                width: 100 * t.numSlides + "vw",
                transform: "translate3d(" + t.dragAmount + "vw, 0px, 0px)"
            }), e("body").attr("data-nav-style", e(".header-section").eq(r).find(".page-section").eq(0).attr("data-nav-style")), setTimeout(function () {
                t.$dragHandler.removeClass("no-anim")
            }), t.bindEvents()
        }
    }, t.bindEvents = function () {
        e("body").on("click", ".js-change-slide", function () {
            if (!isIE()) {
                if (e(this).attr("href") == a.location.pathname)return !1;
                if (t.enabled && e(a).width() >= 960) {
                    var n = e(this).attr("data-slide");
                    e(this).is(".right-button, .left-button");
                    return t.slideTo(n), !1
                }
                if (e(a).width() >= 960) {
                    e(".splashscreen").addClass("shown");
                    var n = e(this).attr("data-slide");
                    return isAnimating = !1, setTimeout(function () {
                        e(".splashscreen").addClass("start-anims"), t.enabled = !0, t.slideTo(n)
                    }, 1200), !1
                }
            }
        }).on("click", ".js-nav-button", function () {
            e("body").removeClass("scrolled");
            var a = e(".header-section.active"), t = a.find(".page-section.active");
            return e(".page-section.past").removeClass("past"), goToSlide(0, a, t), e("body").toggleClass("show-navigation"), !1
        }), t.$dragHandler.on("mousedown", function (a) {
            t.onHandleMouseDown(a), e(document).on("mouseup mousemove", function (a) {
                "mouseup" !== a.type && t.onDocumentMouseMove(a)
            })
        }), t.$dragHandler.on("touchstart", t.onHandleTouchStart), t.$elm.on("touchmove", t.onWrapperTouchMove), e(document).on("mouseup", t.onDocumentMouseUp), e(document).on("touchend", t.onDocumentTouchEnd), t.$dragHandler.on("click", t.onHandleClick), e(a).on("resize", t.onWindowResize), e(a).resize()
    }, t.onHandleMouseDown = function (a) {
        t.enabled && (e(a.target).is(".js-drag-override") || (a.preventDefault(), a.stopPropagation(), t.startDrag(a)))
    }, t.onHandleTouchStart = function (a) {
        t.enabled && !isTouchPad && matchesAspectRatio && !isAnimating && (e(a.target).is(".js-drag-override") || t.startTap(a))
    }, t.onDocumentMouseMove = function (a) {
        t.enabled && !isAnimating && t.isDragging && (t.currentX = a.clientX, t.animateDrag())
    }, t.onWrapperTouchMove = function (a) {
        if (0 == e(".header-section.active").scrollTop() && (t.enabled = !0), t.enabled && !isAnimating && t.isDragging) {
            t.currentX = a.originalEvent.touches[0].clientX, t.currentY = a.originalEvent.touches[0].clientY;
            var n = Math.abs(t.dragStartX - t.currentX), r = Math.abs(t.dragStartY - t.currentY);
            n > r && !t.$dragHandler.is(".scrolling") || t.$dragHandler.is(".moving") ? (t.$dragHandler.addClass("moving"), a.preventDefault(), a.stopPropagation(), t.animateDrag()) : (t.$dragHandler.addClass("scrolling"), 0 == e(".header-section.active").scrollTop() ? (t.enabled = !0, e("body").removeClass("scrolled")) : (t.enabled = !1, e("body").addClass("scrolled"))), t.dragStartY = t.currentY
        }
    }, t.onWrapperMouseDown = function (a) {
        t.enabled && !isAnimating && (e(a.target).is(".js-drag-override") || (a.preventDefault(), t.startTap(a)))
    }, t.onDocumentMouseUp = function (a) {
        e(a.target).is(".js-drag-override") || t.endDrag()
    }, t.onDocumentTouchEnd = function (a) {
        e(a.target).is(".js-drag-override") || t.endDrag()
    }, t.onHandleClick = function (a) {
        if (t.enabled && !isAnimating && e("body").is(".show-navigation")) {
            var n = e(a.target);
            n.is(".active") ? e("body").toggleClass("show-navigation") : n.is(".header-section") && t.slideTo(n.attr("data-slide"))
        }
    }, t.checkAspectRatio = function () {
        var n = e(a).width() / e(a).height();
        t.enabled = t.minAspectRatio <= n && n <= t.maxAspectRatio
    }, t.onWindowResize = function () {
        t.checkAspectRatio(), e("body").toggleClass("dragable", t.enabled), t.enabled = !e("body").is(".scrolled")
    }, t.startDrag = function (a) {
        t.isDragging = !0, t.dragStartX = a.clientX, t.lastDragTime = (new Date).getTime(), t.$dragHandler.addClass("dragging")
    }, t.endDrag = function () {
        t.$dragHandler.is(".scrolling") && 0 == e(".header-section.active").scrollTop() && (t.enabled = !0, e("body").removeClass("scrolled"));
        var a = -Math.round(t.dragAmount / 100);
        t.$dragHandler.removeClass("dragging scrolling moving"), t.slideTo(a), t.isDragging = !1, t.dragStartX = 0, t.currentX = 0
    }, t.startTap = function (a) {
        t.isDragging = !0, t.lastDragTime = (new Date).getTime(), t.dragStartX = a.originalEvent.touches[0].clientX, t.dragStartY = a.originalEvent.touches[0].clientY, t.$dragHandler.addClass("dragging")
    }, t.animateDrag = function () {
        var a = (new Date).getTime();
        t.dragVelocity = (t.dragStartX - t.currentX) / (t.lastDragTime - a);
        var n = t.convertVW(t.currentX - t.dragStartX);
        e("body").is(".show-navigation") && (n = 1.5 * n), t.dragAmount > 0 ? n /= t.dragAmount / 5 : t.dragAmount < 100 * -(t.numSlides - 1) && (n /= -((t.dragAmount + 100 * (t.numSlides - 1)) / 5)), t.dragAmount = t.dragAmount + n, t.updateTransform(), t.dragStartX = t.currentX, t.lastDragTime = a
    }, t.convertVW = function (t) {
        return t / e(a).width() * 100
    }, t.updateTransform = function () {
        t.$dragHandler.css({transform: "translate3d(" + t.dragAmount + "vw,0,0)"});
        var a = Math.max(0, Math.min(Math.round(-t.dragAmount / 100), t.numSlides - 1));
        e(".header-section").removeClass("active checkerboard"), e('.header-section[data-slide="' + a + '"], .header-section[data-slide="' + a + '"] .page-section[data-section="0"]').removeClass("past").addClass("active"), e("footer").removeClass("active")
    }, t.slideTo = function (a, n) {
        if (t.enabled || e(".splashscreen").is(".shown")) {
            a != e(".header-section.active").attr("data-slide") && e("video").each(function (a, e) {
                this.pause()
            }), a = Math.max(0, Math.min(a, t.numSlides - 1)), t.dragAmount = 100 * -a, e("body").attr("data-nav-style", e(".header-section").eq(a).find(".page-section").eq(0).attr("data-nav-style"));
            var r = "" == e(".header-section").eq(a).attr("data-url").replace("/", "") ? "home" : e(".header-section").eq(a).attr("data-url").replace("/", "");
            e("body").attr("data-page", r + "-body"), e("body").attr("data-active-slide", 0).attr("data-active-column", a), t.updateTransform(), !e('.header-section[data-slide="' + a + '"] .ajax-content').html().replace(/ /g, "").length > 1 && e(".header-section").each(function () {
                var a = e(this).find(".page-section").eq(0);
                a.removeClass(a.attr("data-anim-class")), this.offsetWidth = this.offsetWidth, a.addClass(a.attr("data-anim-class"))
            }), pageLoader.loadPage(a, n)
        }
    }, t
}(window, jQuery), $(function () {
    isIE() ? $("body").addClass("isIE") : dragableHeaders.init($(".dragable-headers"))
});
window.FooterAnimation = function (t, i) {
    function h(h) {
        // null != h && (this.elm = h, i(this.elm).addClass("generated"), this.width = i(this.elm).outerWidth(), this.height = i(this.elm).outerHeight(), this.canvas = i(this.elm).find(".canvas-anim")[0], this.canvas.width = this.width, this.canvas.height = this.height, this.ctx = this.canvas.getContext("2d"), this.target = {
        //     x: 0,
        //     y: this.height
        // }, this.circles = [], this.generate(), i("footer").is(".active") && registerRenderable(this.animate, this), i(t).on("resize", this.onResize.bind(this)))
    }

    function e(t, i, h) {
        function e() {
            s.pos.x = Math.random() * t, s.pos.y = i + 100 * Math.random(), s.alpha = .1 + .3 * Math.random(), s.scale = .1 + .3 * Math.random(), s.velocity = Math.random()
        }

        var s = this;
        !function () {
            s.pos = {}, e()
        }(), this.draw = function () {
            s.alpha <= 0 && e(), s.pos.y -= s.velocity, s.alpha -= 5e-4, h.beginPath(), h.arc(s.pos.x, s.pos.y, 10 * s.scale, 0, 2 * Math.PI, !1), h.fillStyle = "rgba(255,255,255," + s.alpha + ")", h.fill()
        }
    }

    return h.prototype = {
        generate: function () {
            this.circles = [];
            for (var t = 0; t < .5 * this.width; t++) {
                var i = new e(this.width, this.height, this.ctx);
                this.circles.push(i)
            }
        }, onResize: function () {
            this.width = i(this.elm).outerWidth(), this.height = i(this.elm).outerHeight(), this.canvas.width = this.width, this.canvas.height = this.height, this.generate()
        }, animate: function () {
            (!i("body").is(".fullscreen") || i(this.elm).parents(".page-section").is(".active")) && (this.ctx.clearRect(0, 0, this.width, this.height), i.each(this.circles, function (t, i) {
                i.draw()
            }))
        }
    }, h
}(window, jQuery);
function resize() {
    $(".sticky-elements").width($(".header-section.active .page-section").innerWidth())
}
function checkParticleJSObjects() {
    "string" !== pJSDom && $.each(pJSDom, function (e, t) {
        var n = checkElmVisible($(t.pJS.canvas.el));
        fpsLimiterEnabled ? (pJSDom[e].pJS.particles.move.enable = !1, unregisterRenderable(pJSDom[e].pJS.fn.vendors.draw)) : n && !pJSDom[e].pJS.particles.move.enable ? (pJSDom[e].pJS.particles.move.enable = !0, registerRenderable(pJSDom[e].pJS.fn.vendors.draw, pJSDom[e].pJS.fn.vendors)) : n || (pJSDom[e].pJS.particles.move.enable = !1, unregisterRenderable(pJSDom[e].pJS.fn.vendors.draw))
    }), footerAnim && ($("footer").is(".active") ? registerRenderable(footerAnim.animate, footerAnim) : unregisterRenderable(footerAnim.animate)), textToParticle.setRunning(checkElmVisible($('.header-section[data-slide="0"] .page-section[data-section="0"] .slides')))
}
function checkElmVisible(e) {
    if ($(window).width() < 960 || !matchesAspectRatio()) {
        var t = $(window).height();
        return e.parents(".header-section").is(".active") && e.offset().top <= t && e.offset().top + e.outerHeight() >= 0
    }
    var n = e.parents(".page-section").is(".active") && e.parents(".header-section").is(".active");
    return e.parent().is("#particles-js-contact-header, #particles-js-why-chakray-2") ? !0 : n
}
function isIE(e, t) {
    if ($.isArray(e)) {
        var n = arguments.callee, i = !1;
        return $.each(e, function (e, t) {
            return 1 == n(t) ? (i = !0, !1) : void 0
        }), i
    }
    var a, r = "IE", s = document.createElement("B"), o = document.documentElement;
    if (a = -1 !== navigator.appVersion.indexOf("rv:11.0"), "undefined" == typeof e && a)return !0;
    if (a = -1 !== navigator.appVersion.indexOf("MSIE 10"), "undefined" == typeof e && a)return !0;
    if (e) {
        if (10 == e)return -1 !== navigator.appVersion.indexOf("MSIE 10");
        r += " " + e, t && (r = t + " " + r)
    }
    return s.innerHTML = "<!--[if " + r + ']><b id="iecctest"></b><![endif]-->', o.appendChild(s), a = !!document.getElementById("iecctest"), o.removeChild(s), a
}
function checkFPS() {
    fpsLimiterEnabled || ($.each(frameAnimationFunctions, function (e, t) {
        t.fn.call(t.context)
    }), requestAnimationFrame(checkFPS))
}
function registerRenderable(e, t) {
    frameAnimationFunctions.push({fn: e, context: t})
}
function FPSChecker() {
    $(".header-section").each(function () {
        var e = $(this).find(".page-section").eq(0);
        e.removeClass(e.attr("data-anim-class"))
    }), drawTestSquares(), setTimeout(function () {
        stopTest = !0, $(".splashscreen").removeClass("shown start-anims"), $(".main-page-container").css("visibility", "visible"), $(".header-section").each(function () {
            var e = $(this).find(".page-section").eq(0);
            e.addClass(e.attr("data-anim-class"))
        }), frames >= 20 ? (fpsLimiterEnabled = !1, checkFPS()) : ($("body").find("video").each(function (e, t) {
            t.remove()
        }), $("body").addClass("fpsLimited"))
    }, 1500)
}
function drawTestSquares() {
    frames++;
    var e = document.getElementById("testCanvas"), t = e.getContext("2d"), n = 125, i = 125;
    e.width = n, e.height = i, t.clearRect(0, 0, n, i), t.fillStyle = "#fff";
    for (var a = 0; n >= a; a++)for (var r = 0; i >= r; r++)t.fillRect(a, r, 1, 1);
    stopTest || requestAnimationFrame(drawTestSquares)
}
function unregisterRenderable(e) {
    frameAnimationFunctions = frameAnimationFunctions.filter(function (t) {
        return t.fn != e
    })
}
$(document).ready(function () {
    function e(e) {
        for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
            for (var a = n[i]; " " == a.charAt(0);)a = a.substring(1);
            if (0 == a.indexOf(t))return a.substring(t.length, a.length)
        }
        return null
    }

    function t(e, t, n) {
        var i = new Date;
        i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
        var a = "expires=" + i.toUTCString();
        document.cookie = e + "=" + t + "; " + a
    }

    var n = function () {
        for (var e, t = 3, n = document.createElement("div"), i = n.getElementsByTagName("i"); n.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", i[0];);
        return t > 4 ? t : e
    }();
    if (9 > n) {
        var i = e("rememberpopup");
        if (null == i) {
            var a = "<div class='browser-message'>						   <h3>Browser outdated.</h3>						   <p>You are using an outdated browser. To get the best experience from this website install Chrome, Firefox or Internet Explore 9+. Thank you.</p>						   <span class='btn js-message-close'>Close</span>						   <p><small>*By closing this message you accept the use of cookies on this website.</small></p>					   </div>";
            $(a).appendTo(".message-overlay"), $(".message-overlay").show()
        }
    }
    if ($(".js-message-close").on("click", function () {
            t("rememberpopup", "Remember Popup", 1), $(".message-overlay").hide()
        }), $('a[rel^="external"]').click(function () {
            return window.open($(this).attr("href")), !1
        }), $(window).resize(resize), $("body").on("click", ".js-toggle-icon", function () {
            return $("body").addClass("show-navigation"), !1
        }).on("click", ".js-nav-close", function () {
            return $("body").removeClass("show-navigation"), !1
        }).on("click", function (e) {
        }).on("click", ".js-nav-icon", function () {
            return $(this).siblings(".sub-nav").toggleClass("open"), $(this).parent().toggleClass("open-child"), !1
        }).on("click", ".js-scroll-header", function () {
            var e = $(".js-header-image").outerHeight() - $("header").outerHeight();
            return $("body").animate({scrollTop: e + "px"}, 300), !1
        }), $("html").attr("data-useragent", navigator.userAgent), $("body").on("click", ".js-show-popup", function () {
            return $(".popup").toggleClass("shown"), $(".popup").is(".shown") ? isAnimating = !0 : isAnimating = !1, !1
        }), isIE())$("body").addClass("text-alt"), $("body").attr("data-nav-style", $(".header-section.active").find(".page-section").eq(0).attr("data-nav-style")); else {
        var r = new FontFaceObserver("CanvasText", {weight: 400});
        r.load().then(function () {
            textToParticle.generateParticleSlider()
        }, function () {
            textToParticle.generateParticleSlider()
        })
    }
    checkParticleJSObjects(), $(".header-section").on("scroll", function (e) {
        $("body").is(".fullscreen") ? $("body").removeClass("scrolled") : $("body").toggleClass("scrolled", $(".header-section.active").scrollTop() > 0)
    }), resize(), FPSChecker()
});
var triangulationBgs = [], frameAnimationFunctions = [], fpsLimiterEnabled = !0, frames = 0, fps = 0, stopTest = !1, lastRun = (new Date).getTime();
!function (e) {
    e.getDevicePixelRatio = function () {
        var t = 1;
        return void 0 !== e.screen.systemXDPI && void 0 !== e.screen.logicalXDPI && e.screen.systemXDPI > e.screen.logicalXDPI ? t = e.screen.systemXDPI / e.screen.logicalXDPI : void 0 !== e.devicePixelRatio && (t = e.devicePixelRatio), t
    }
}(this);
var devicePixelRatio = window.getDevicePixelRatio();
window.pageLoader = function (t, e) {
    var a = {jqXHR: void 0};
    return a.loadPage = function (e, n) {
        if (a.checkIfContentExists(e)) {
            var o = $(".header-section").eq(e).attr("data-url");
            n || t.history.pushState({}, "", o)
        } else {
            var i = $("body").find('.header-section[data-slide="' + e + '"]');
            i.find(".ajax-content").append($("<div>")), a.loadContent(i, n)
        }
    }, a.checkIfContentExists = function (t) {
        return 0 !== $("body").find('.header-section[data-slide="' + t + '"] .ajax-content div').length
    }, a.loadContent = function (e, n) {
        var o = e.attr("data-url");
        "undefined" != typeof a.jqXHR && a.jqXHR.abort(), n || t.history.pushState({}, "", o);
        try {
            ga("send", "pageview")
        } catch (i) {
        }
        a.jqXHR = $.ajax({url: o, method: "GET", dataType: "json"}).success(function (t) {
            a.cleanPage(), e.addClass("show-arrows"), e.find(".ajax-content").html(t.content), $("title").html(t.meta_title), $('meta[name="description"]').attr("name", t.meta_desc), setTimeout(function () {
                $("body").append(t.scripts), $(".splashscreen").removeClass("shown start-anims"), fpsLimiterEnabled && $("body").find("video").each(function (t, e) {
                    e.remove()
                })
            })
        }).fail(function (e, a, n, i) {
            0 !== a.status && 0 !== a.readyState && (t.location.href = o)
        })
    }, a.cleanPage = function () {
        textToParticle.setRunning(!1), $("video").each(function (t, e) {
            this.pause()
        }), $("body").removeClass("notTop"), $(".header-section").removeClass("show-arrows").find(".ajax-content").html(""), $("body").find("#pageScripts").remove(), "string" !== t.pJSDom && t.pJSDom.length > 0 && ($.each(t.pJSDom, function (t, e) {
            e.pJS.fn.vendors.destroypJS()
        }), t.pJSDom = []), "string" !== t.triangulationBgs && t.triangulationBgs.length > 0 && ($.each(t.triangulationBgs, function (t, e) {
            e.elm.stop()
        }), t.triangulationBgs = [])
    }, $(t).on("popstate", function () {
        var e = t.location.pathname;
        dragableHeaders.slideTo($("body").find('.header-section[data-url="' + e + '"]').attr("data-slide"), !0)
    }), a
}(window, jQuery);
function matchesAspectRatio() {
    var e = $(window).width() / $(window).height();
    return $(window).width() >= 960 && scrollingAspectRatio.minAspectRatio <= e && e <= scrollingAspectRatio.maxAspectRatio
}
function mouseScroll(e) {
    var t = (new Date).getTime();
    if (t - window.lastScroll < 100 && t - window.startedScrolling < 2e3)return void(window.lastScroll = t);
    if (window.startedScrolling = t, window.lastScroll = t, !$("body").is(".show-navigation") && !isAnimating) {
        if (isTouchPadDefined || (0 === eventCount && (eventCountStart = (new Date).getTime()), eventCount++, (new Date).getTime() - eventCountStart > 50 && (isTouchPad = eventCount > 5 ? !0 : !1, isTouchPadDefined = !0)), !matchesAspectRatio() || isAnimating || isTouchDevice || isTouchPad || $("body").is(".show-navigation")) {
            var a = $(".header-section.active").scrollTop() > 100 || $(".header-section.active").scrollTop() <= 1e3 && (e.wheelDelta < 0 || e.detail > 0);
            return $("body").toggleClass("scrolled", a), a ? dragableHeaders.enabled = !1 : dragableHeaders.enabled = !0, void checkParticleJSObjects()
        }
        e.wheelDelta > 0 || e.detail < 0 ? scroll("up") : (e.wheelDelta < 0 || e.detail > 0) && scroll("down"), $("body").toggleClass("scrolled", !matchesAspectRatio() && 0 !== $(".header-section.active").scrollTop()), 0 !== $(".header-section.active").scrollTop() && (dragableHeaders.enabled = !1)
    }
}
function scroll(e) {
    if (!(isAnimating || isTouchDevice || isTouchPad)) {
        isAnimating = !0;
        var t = $(".header-section.active"), a = t.find(".page-section").length;
        if ($("footer").is(".active")) {
            if ("up" != e)return void(isAnimating = !1);
            goToSlide(a - 1, t, $("footer"))
        } else {
            var i = t.find(".page-section.active"), o = i.attr("data-section");
            if ("up" == e ? o-- : "down" == e && o++, 0 > o)return void(isAnimating = !1);
            o > a - 1 && (o = "footer"), goToSlide(o, t, i)
        }
    }
}
function goToSlide(e, t, a) {
    $("body").attr("data-active-slide", e).addClass("notTop"), dragableHeaders.enabled = !1, 0 == e && (dragableHeaders.enabled = !0, $("body").removeClass("notTop")), "footer" == e ? animSlideOut(a, $("footer"), t) : animSlideOut(a, t.find('.page-section[data-section="' + e + '"]'), t)
}
function animSlideIn(e, t) {
    var a = 0;
    e.is(".form-section") && (e.parents(".header-section").addClass("checkerboard"), a = 800), $("body").attr("data-nav-style", e.attr("data-nav-style")), setTimeout(function () {
        var t = e.attr("data-anim-timing");
        e.addClass("active").removeClass("past"), e.find("video").each(function (e, t) {
            this.play()
        }), e.is(".services-header") && $(".triangulate-bg").removeClass("shown"), checkParticleJSObjects(), setTimeout(function () {
            isAnimating = !1, 0 == e.attr("data-section") && (dragableHeaders.enabled = !0, $("body").removeClass("scrolled"))
        }, t)
    }, a)
}
function animSlideOut(e, t, a) {
    var i = e.attr("data-anim-timing-out"), o = t.attr("data-section");
    e.removeClass("active past"), "footer" == o && (o = 100), $("video").each(function (e, t) {
        this.pause()
    }), a.find(".page-section").filter(function () {
        return parseInt($(this).attr("data-section")) < o
    }).addClass("past"), t.is(".contact-header") && e.parents(".header-section").removeClass("checkerboard"), e.is(".about-text") && !t.is(".about-profiles") && setTimeout(function () {
        e.addClass("remove"), setTimeout(function () {
            e.removeClass("remove")
        }, 1400)
    }), e.is(".services-header") && $(".triangulate-bg").addClass("shown"), setTimeout(function () {
        animSlideIn(t, a)
    }, i)
}
function throttle(e, t, a) {
    t || (t = 250);
    var i, o;
    return function () {
        var s = a || this, n = +new Date, c = arguments;
        i && i + t > n ? (clearTimeout(o), o = setTimeout(function () {
            i = n, e.apply(s, c)
        }, t)) : (i = n, e.apply(s, c))
    }
}
$(function () {
    if ($("body").on("click", ".js-scroll-to", function () {
            if ($(window).width() < 960)$("body").removeClass("fullscreen"), $("body").addClass("scrolled"), dragableHeaders.enabled = !1, $(".header-section.active").animate({scrollTop: $(window).height() - $(".sticky-elements").outerHeight()}, 200); else {
                var e = $(this).attr("data-slide"), t = $(".header-section.active"), a = t.find(".page-section.active");
                goToSlide(e, t, a)
            }
        }), isIE())$(".header-section.active").on("scroll", function () {
        $("body").toggleClass("scrolled", $(".header-section.active").scrollTop() > 0)
    }); else {
        var e = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
        document.attachEvent ? document.attachEvent("on" + e, mouseScroll) : document.addEventListener && document.addEventListener(e, mouseScroll)
    }
    isTouchDevice || isTouchPad || !matchesAspectRatio() ? ($("body").removeClass("fullscreen"), $("video").each(function () {
        this.play()
    })) : isIE() || $("body").addClass("fullscreen"), isIE() || $(window).on("resize", function () {
        isTouchDevice || isTouchPad || !matchesAspectRatio() ? ($("body").removeClass("fullscreen"), $("video").each(function () {
            this.play()
        })) : ($("body").addClass("fullscreen").removeClass("scrolled"), dragableHeaders.enabled = !0)
    })
});
var lastScroll = (new Date).getTime(), startedScrolling = lastScroll, isAnimating = !1, isTouchDevice = "ontouchstart" in document.documentElement, isTouchPad = !1, isTouchPadDefined = !1, eventCount = 0, scrollingAspectRatio = {
    minAspectRatio: 5 / 4,
    maxAspectRatio: 20 / 9
};
window.textToParticle = function (e, i) {
    var t = $(e).width() >= 960 ? 2 * Math.max(devicePixelRatio, Math.floor($(e).width() / 1e3)) : 1, r = {
        particleSlider: void 0,
        ptlGap: t,
        ptlSize: t,
        mouseForce: 900,
        srcCanvas: void 0,
        running: !1,
        width: $("#particle-slider").innerWidth(),
        height: $("#particle-slider").innerHeight(),
        textSettings: {fontSize: 3.5, fontFamily: "RR Beaver, sans-serif", fontColour: "#F7931D", textTop: 0},
        imageData: null,
        imageDataArray: [],
        currentText: "somaapps",
        pixelRatio: "undefined" != e.devicePixelRatio ? e.devicePixelRatio : 1
    };
    return r.generateParticleSlider = function () {
        r.particleSlider = new ParticleSlider({
            ptlGap: r.ptlGap,
            ptlSize: r.ptlSize,
            mouseForce: r.mouseForce,
            showArrowControls: !1,
            width: r.width,
            height: r.height
        }), r.srcCanvas = r.particleSlider.$srcCanv, r.srcCanvas.width = r.width, r.srcCanvas.height = r.height, r.updateResizeSettings(), $(e).resize(function () {
            r.updateResizeSettings()
        }), r.running && (r.particleSlider.running = !0, registerRenderable(r.particleSlider.nextFrame, r.particleSlider))
    }, r.setRunning = function (e) {
        "undefined" != typeof r.particleSlider && (r.particleSlider.running && !e ? (r.particleSlider.running = !1, unregisterRenderable(r.particleSlider.nextFrame)) : !r.particleSlider.running && e && (r.particleSlider.running = !0, registerRenderable(r.particleSlider.nextFrame, r.particleSlider))), r.running = e
    }, r.updateResizeSettings = function () {
        r.particleSlider.resize(), r.width = $(".draw").width(), r.height = $(".draw").height()
    }, r.convertVW = function (i) {
        return $(e).width() / 100 * i
    }, r.convertVH = function (i) {
        return $(e).height() / 100 * i
    }, r
}(window, jQuery);
window.TriangulationBg = function (i, t) {
    function s(s, n) {
        null != s && (this.elm = s, this.refreshDuration = 1e4, this.width = 0, this.height = 0, this.numPointsX = null, this.numPointsY = null, this.unitWidth = null, this.unitHeight = null, this.points = [], this.svg = null, this.snap = null, this.triangles = [], this.running = n, this.colourArrayId = 1, this.isRunning = !1, this.generate(), t(i).on("resize", this.onResize.bind(this)))
    }

    var n = {
        1: ["#252525", "#212121", "#1f1f1f", "#232323", "#272727", "#2a2a2a", "#282828", "#222222", "#242424"],
        2: ["#e2e2e2", "#dbdbdb", "#dedede", "#d9d9d9", "#dddddd", "#d8d8d8", "#dcdcdc", "#e0e0e0", "#d2d2d2", "#cdcdcd", "#d5d5d5"],
        3: ["#a61d22", "#a41b20", "#af262c", "#aa2126", "#a21a1f", "#9c1319", "#a41c21", "#9e151b", "#aa2227", "#ae262b", "#ad242a", "#af272c", "#ac2328"]
    }, h = {1: "#222222", 2: "#d8d8d8", 3: "#af262c"};
    return s.prototype = {
        generate: function () {
            t(this.elm).is(".careers-anim") ? (this.height = t(this.elm).parents(".careers-header").outerHeight(), this.width = t(this.elm).parents(".careers-header").outerWidth()) : (this.height = t(this.elm).siblings(".page-section").find(".right-half").outerHeight(), this.width = t(this.elm).siblings(".page-section").find(".right-half").outerWidth()), this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.setAttribute("width", this.width), this.svg.setAttribute("height", this.height), t(this.elm).append(this.svg), t(this.elm).css("background", h[this.colourArrayId]), this.unitSize = (this.width + this.height) / 20, this.numPointsX = 2 * Math.round(Math.ceil((this.width / this.unitSize + 1) / 1.75) / 2), this.numPointsY = 2 * Math.round(Math.ceil((this.height / this.unitSize + 1) / 1.75) / 2), this.unitWidth = Math.ceil(this.width / (this.numPointsX - 1)), this.unitHeight = Math.ceil(this.height / (this.numPointsY - 1)), this.points = [], this.triangles = [], this.snap = Snap(this.svg);
            for (var i = 0; i < this.numPointsY; i++)for (var s = 0; s < this.numPointsX; s++)this.points.push({
                x: this.unitWidth * s,
                y: this.unitHeight * i,
                originX: this.unitWidth * s,
                originY: this.unitHeight * i
            });
            this.randomize();
            for (var o = n[this.colourArrayId].length, e = 0; e < this.points.length; e++)if (this.points[e].originX != this.unitWidth * (this.numPointsX - 1) && this.points[e].originY != this.unitHeight * (this.numPointsY - 1))for (var r = this.points[e].x, a = this.points[e].y, u = this.points[e + 1].x, d = this.points[e + 1].y, g = this.points[e + this.numPointsX].x, l = this.points[e + this.numPointsX].y, p = this.points[e + this.numPointsX + 1].x, c = this.points[e + this.numPointsX + 1].y, m = Math.floor(2 * Math.random()), f = 0; 2 > f; f++) {
                var v = {};
                if (0 == m ? 0 == f ? (v.point1 = e, v.point2 = e + this.numPointsX, v.point3 = e + this.numPointsX + 1, v.d = this.convertPoints(r + "," + a + " " + g + "," + l + " " + p + "," + c)) : 1 == f && (v.point1 = e, v.point2 = e + 1, v.point3 = e + this.numPointsX + 1, v.d = this.convertPoints(r + "," + a + " " + u + "," + d + " " + p + "," + c)) : 1 == m && (0 == f ? (v.point1 = e, v.point2 = e + this.numPointsX, v.point3 = e + 1, v.d = this.convertPoints(r + "," + a + " " + g + "," + l + " " + u + "," + d)) : 1 == f && (v.point1 = e + this.numPointsX, v.point2 = e + 1, v.point3 = e + this.numPointsX + 1, v.d = this.convertPoints(g + "," + l + " " + u + "," + d + " " + p + "," + c))), t(this.elm).is(".careers-anim"))v.fill = "rgba(0,0,0,0)", v.stroke = "white"; else {
                    var P = n[this.colourArrayId][Math.floor(Math.random() * o)];
                    v.fill = P, v.stroke = P, v["stroke-width"] = 2
                }
                v.elm = this.snap.path(v), this.triangles.push(v)
            }
            this.refresh()
        }, randomize: function () {
            for (var i = 0; i < this.points.length; i++)0 != this.points[i].originX && this.points[i].originX != this.unitWidth * (this.numPointsX - 1) && (this.points[i].x = this.points[i].originX + Math.random() * this.unitWidth - this.unitWidth / 2), 0 != this.points[i].originY && this.points[i].originY != this.unitHeight * (this.numPointsY - 1) && (this.points[i].y = this.points[i].originY + Math.random() * this.unitHeight - this.unitHeight / 2)
        }, refresh: function () {
            this.randomize(), this.isRunning = !0;
            for (var i = 0; i < this.triangles.length; i++) {
                var t = this.triangles[i], s = this.convertPoints(this.points[t.point1].x + "," + this.points[t.point1].y + " " + this.points[t.point2].x + "," + this.points[t.point2].y + " " + this.points[t.point3].x + "," + this.points[t.point3].y), n = 0 == i ? function () {
                    this.isRunning = !1, this.running && this.refresh()
                }.bind(this) : void 0;
                t.elm.animate({d: s}, this.refreshDuration, void 0, n)
            }
        }, onResize: function () {
            t(this.svg).remove(), this.generate(this.elm)
        }, convertPoints: function (i) {
            for (var t = i.split(/\s+/), s = "", n = 0, h = t.length; h > n; n++)s += (n && "L" || "M") + t[n];
            return s
        }, setRunning: function (i) {
            this.running && !i ? this.running = !1 : !this.running && i && (0 == this.isRunning && this.refresh(), this.running = !0)
        }, pause: function () {
            this.setRunning(!1);
            for (var i = 0; i < this.triangles.length; i++) {
                var t = this.triangles[i];
                t.elm.pause()
            }
        }, play: function () {
            this.setRunning(!0);
            for (var i = 0; i < this.triangles.length; i++) {
                var t = this.triangles[i];
                t.elm.play()
            }
        }, stop: function () {
            this.setRunning(!1);
            for (var i = 0; i < this.triangles.length; i++) {
                var t = this.triangles[i];
                t.elm.stop()
            }
        }, transitionColours: function (i) {
            this.colourArrayId = parseInt(i), t(this.elm).css("background", h[this.colourArrayId]);
            for (var s = n[this.colourArrayId].length, o = 0; o < this.triangles.length; o++) {
                var e = this.triangles[o], r = n[this.colourArrayId][Math.floor(Math.random() * s)];
                e.elm.animate({fill: r, stroke: r}, 400)
            }
            this.refresh()
        }
    }, s
}(window, jQuery);
//# sourceMappingURL=init.js.map
