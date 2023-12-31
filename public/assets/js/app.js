!(function (h) {
    "use strict";
    function e(t, a) {
        var e = document.createElement("script");
        (e.type = "text/javascript"),
            e.readyState
                ? (e.onreadystatechange = function () {
                      ("loaded" != e.readyState && "complete" != e.readyState) || ((e.onreadystatechange = null), a());
                  })
                : (e.onload = function () {
                      a();
                  }),
            (e.src = t),
            document.getElementsByTagName("body")[0].appendChild(e);
    }
    var a = "assets/vendor";
    h(window), h(window).height(), h(window).width(), h(document);
    h.fn.exists = function () {
        return 0 < this.length;
    };
    var t = function () {
            h(".ec-nav").length &&
                h(window).scroll(function () {
                    100 <= h(window).scrollTop() ? h(".ec-nav.sticky-top").addClass("shadow-v1") : h(".ec-nav.sticky-top").removeClass("shadow-v1");
                });
        },
        o = function () {
            h("[data-scrollto]").on("click", function () {
                var t = "#" + h(this).data("scrollto");
                if (0 < h(t).length) {
                    h(".header").length && h(".header").height(), h("html").animate({ scrollTop: h(t).offset().top }, 700);
                }
                return !1;
            });
        },
        n = function () {
            h(".dropdown-menu a.dropdown-toggle").on("click", function (t) {
                h(this), h(this).offsetParent(".dropdown-menu");
                return (
                    h(this).next().hasClass("show") || h(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),
                    h(this).next(".dropdown-menu").toggleClass("show"),
                    h(this).parent("li").toggleClass("show"),
                    h(this)
                        .parents("li.nav-item.dropdown.show")
                        .on("hidden.bs.dropdown", function (t) {
                            h(".dropdown-menu .show").removeClass("show");
                        }),
                    !1
                );
            });
        },
        i = function () {
            h(".site-search-toggler").on("click", function (t) {
                t.preventDefault(), h(".site-search").addClass("open");
            }),
                h(".site-search__close").on("click", function () {
                    h(".site-search").removeClass("open");
                });
        },
        s = function () {
            h(".hamburger").on("click", function (t) {
                h(this).toggleClass("is-active");
            });
        },
        c = function () {
            h(".input-group--focus .form-control")
                .on("focus", function () {
                    h(this).parent(".input-group").addClass("state--focus");
                })
                .on("blur", function () {
                    h(this).parent(".input-group").removeClass("state--focus");
                });
        },
        d = function () {
            h(".animated-share__trigger").on("click", function (t) {
                t.preventDefault(), h(this).parent(".animated-share").toggleClass("active");
            });
        },
        l = function () {
            h(".ec-touchspin").each(function () {
                var t = h(this),
                    a = t.find(".ec-touchspin__plus"),
                    e = t.find(".ec-touchspin__minus"),
                    o = t.find(".ec-touchspin__result"),
                    n = parseInt(o.val());
                o.on("change", function () {
                    n = parseInt(h(this).val());
                }),
                    a.on("click", function () {
                        (n += 1), o.val(n);
                    }),
                    e.on("click", function () {
                        0 < n && ((n -= 1), o.val(n));
                    });
            });
        },
        r = function () {
            h(".ec-rating").exists() &&
                h(".ec-rating").each(function () {
                    var t = h(this),
                        a = t.find("> *"),
                        e = t.data("state-class");
                    a.on("mouseenter", function () {
                        h(this).addClass(e), h(this).prevAll().addClass(e), h(this).nextAll().not(".active").removeClass(e);
                    }),
                        a.on("mouseleave", function () {
                            a.not(".active").removeClass(e);
                        }),
                        a.on("click", function () {
                            h(this).addClass("active " + e),
                                h(this)
                                    .prevAll()
                                    .addClass("active " + e),
                                h(this)
                                    .nextAll()
                                    .removeClass("active " + e);
                        });
                });
        },
        u = function () {
            document.body.offsetHeight;
            h(window).on("scroll", function () {
                600 < h(this).scrollTop() ? h(".scroll-top").addClass("active") : h(".scroll-top").removeClass("active");
            }),
                h(".scroll-top").on("click", function () {
                    return h("html, body").animate({ scrollTop: 0 }, 500), !1;
                });
        },
        f = function () {
            h("[data-offset-top], [data-offset-top-md], [data-offset-top-lg], [data-offset-top-xl]").exists() &&
                (h("[data-offset-top]").each(function () {
                    var t = h(this),
                        a = t.data("offset-top");
                    t.css({ marginTop: a });
                }),
                768 < h(window).width() &&
                    h("[data-offset-top-md]").each(function () {
                        var t = h(this),
                            a = t.data("offset-top-md");
                        t.css({ marginTop: a });
                    }),
                992 < h(window).width() &&
                    h("[data-offset-top-lg]").each(function () {
                        var t = h(this),
                            a = t.data("offset-top-lg");
                        t.css({ marginTop: a });
                    }),
                1200 < h(window).width() &&
                    h("[data-offset-top-xl]").each(function () {
                        var t = h(this),
                            a = t.data("offset-top-xl");
                        t.css({ marginTop: a });
                    }));
        };
    h(function () {
        t(), o(), n(), i(), s(), c(), l(), r(), d(), f(), u();
    });
    var p = function () {
            h("[data-typed-text]").exists() &&
                e(a + "/typed.js/typed.min.js", function () {
                    var t = h("[data-typed-text]").data("typed-text").split(",");
                    new Typed("[data-typed-text]", { strings: t, typeSpeed: 80, loop: !0, backSpeed: 80, showCursor: !1 });
                });
        },
        m = function () {
            h(".isotop-filter").exists() &&
                e(a + "/isotope-layout/dist/isotope.pkgd.min.js", function () {
                    var e = h(".isotop-filter");
                    e.imagesLoaded(function () {
                        e.isotope({ percentPosition: !0 });
                    });
                    var o = h(".nav-isotop-filter");
                    o.on("click", "a.nav-link", function (t) {
                        t.preventDefault();
                        var a = h(this).data("filter");
                        e.isotope({ filter: a }), o.find(".active").removeClass("active"), h(this).addClass("active");
                    });
                });
        },
        g = function () {
            h(".js-masonry").exists() &&
                e(a + "/isotope-layout/dist/isotope.pkgd.min.js", function () {
                    var t = h(".js-masonry");
                    t.imagesLoaded(function () {
                        t.masonry({ itemSelector: ".masonry-item" });
                    });
                });
        },
        v = function () {
            h("[data-fancybox]").exists() &&
                e(a + "/fancybox-v3.5.7/dist/jquery.fancybox.min.js", function () {
                    h("[data-fancybox]").fancybox({ animationEffect: "zoom-in-out" });
                });
        },
        w = function () {
            h(".slick-carousel").exists() &&
                e(a + "/slick-1.8.1/slick/slick.min.js", function () {
                    h(".slick-carousel").slick({
                        customPaging: function () {
                            return "<span class='slick-dot'></span>";
                        },
                    });
                });
        },
        x = function () {
            h("[data-slick-margin]").each(function () {
                var t = h(this).data("slick-margin");
                h(this).find(".slick-list").css({ marginLeft: -t, marginRight: -t }), h(this).find(".slick-slide").css({ marginLeft: t, marginRight: t });
            });
        },
        y = function () {
            /*
            h(".owl-carousel").exists() &&
                e(a + "/OwlCarousel2-2.3.4/dist/owl.carousel.min.js", function () {
                    h(".owl-carousel").each(function () {
                        var t = h(this),
                            a = t.data("items") ? t.data("items") : 3,
                            e = t.data("items-tablet") ? t.data("items-tablet") : 2,
                            o = t.data("items-mobile") ? t.data("items-mobile") : 1,
                            n = t.data("items-mobile-wide") ? t.data("items-mobile-wide") : 2,
                            i = !t.data("loop") || t.data("loop"),
                            s = !t.attr("data-autoplay") || t.data("autoplay"),
                            c = t.data("autospeed") ? t.data("autospeed") : 3e3,
                            d = t.data("smartspeed") ? t.data("smartspeed") : 800,
                            l = !!t.data("autoheight") && t.data("autoheight"),
                            r = t.data("space") ? t.data("space") : 0,
                            u = !!t.data("dots") && t.data("dots"),
                            f = t.data("state-outer-class") ? t.data("state-outer-class") : null,
                            p = !!t.data("dots-class") && t.data("dots-class"),
                            m = !!t.data("arrow") && t.data("arrow");
                        h(this).owlCarousel({
                            loop: i,
                            items: a,
                            autoplay: s,
                            autoplayTimeout: c,
                            smartSpeed: d,
                            margin: r,
                            dots: u,
                            nav: m,
                            dotsClass: "owl-dots " + p,
                            stageOuterClass: "owl-stage-outer " + f,
                            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
                            autoHeight: l,
                            responsive: { 0: { items: o }, 576: { items: n }, 750: { items: e }, 1170: { items: a } },
                        });
                    });
                });
            */
        },
        k = function () {
            /*
            h(".jarallax").exists() &&
                e(a + "/jarallax/dist/jarallax.min.js", function () {
                    h(".jarallax").jarallax();
                });
            */
        },
        j = function () {
            //new WOW({ boxClass: "wow", animateClass: "animated", offset: 10, mobile: !1, live: !0 }).init();
        },
        C = function () {
            h(".js-circle").exists() &&
                e(a + "/circles-js/circles.min.js", function () {
                    h(".js-circle").each(function (t) {
                        var a = h(this),
                            e = "js-circle-" + t;
                        h(this).attr("id", e);
                        var o = a.data("radius") ? a.data("radius") : 60,
                            n = a.data("value") ? a.data("value") : 70,
                            i = a.data("border-width") ? a.data("border-width") : 6,
                            s = a.data("text-suffix") ? a.data("text-suffix") : null,
                            c = (a.data("text-size") && a.data("text-size"), a.data("text-color") && a.data("text-color"), a.data("maxValue") ? a.data("maxValue") : 100);
                        Circles.create({
                            id: e,
                            radius: o,
                            value: n,
                            maxValue: c,
                            width: i,
                            text: function (t) {
                                return t + (s || null);
                            },
                            colors: [a.data("border-color") || "#eee", a.data("border-fg-color") || "#000"],
                        }),
                            a.find(".circles-text").css({ fontSize: a.data("text-size"), color: a.data("text-color") });
                    });
                });
        },
        b = function () {
            if (h(".google-map").exists()) {
                var t = h(".google-map"),
                    a = t.data("key");
                a
                    ? e("https://maps.googleapis.com/maps/api/js?key=" + a, function () {
                          t.each(function (t, i) {
                              var a = h(this),
                                  s = a.data("address"),
                                  e = a.data("zoom") ? a.data("zoom") : 8,
                                  o = a.data("map-type") ? a.data("map-type") : "roadmap",
                                  c = a.data("style") ? a.data("style") : "assets/data/map-style.json",
                                  d = a.data("marker") ? a.data("marker") : "assets/img/map-marker.png",
                                  l = { zoom: e, mapTypeId: o };
                              new google.maps.Geocoder().geocode({ address: s }, function (t, a) {
                                  if (a == google.maps.GeocoderStatus.OK) {
                                      l.center = t[0].geometry.location;
                                      var e = new google.maps.Map(i, l);
                                      h.getJSON(c, function (t) {
                                          e.setOptions({ styles: t });
                                      });
                                      var o = new google.maps.Marker({ map: e, position: t[0].geometry.location, icon: d }),
                                          n = new google.maps.InfoWindow({ content: s });
                                      google.maps.event.addListener(o, "click", function () {
                                          n.open(e, o);
                                      });
                                  } else alert("The address could not be found for the following reason: " + a);
                              });
                          });
                      })
                    : h(t).text("Please provide a valid key");
            }
        },
        S = function () {
            h('[data-toggle="datetimepicker"]').exists() &&
                e(a + "/moment/moment.min.js", function () {
                    e(a + "/tempus-dominus-datetimepicker/js/tempusdominus-bootstrap-4.min.js", function () {
                        h("#ec-datetimepicker").datetimepicker({
                            icons: {
                                time: "far fa-clock",
                                date: "ti-calendar",
                                up: "ti-angle-up",
                                down: "ti-angle-down",
                                previous: "ti-angle-left",
                                next: "ti-angle-right",
                                today: "far fa-calendar-check-o",
                                clear: "far fa-trash",
                                close: "ti-home",
                            },
                        }),
                            h("#ec-datepicker").datetimepicker({
                                format: "L",
                                icons: {
                                    time: "far fa-clock",
                                    date: "ti-calendar",
                                    up: "ti-angle-up",
                                    down: "ti-angle-down",
                                    previous: "ti-angle-left",
                                    next: "ti-angle-right",
                                    today: "far fa-calendar-check-o",
                                    clear: "far fa-trash",
                                    close: "ti-close",
                                },
                            }),
                            h("#ec-timepicker").datetimepicker({
                                format: "LT",
                                icons: {
                                    time: "far fa-clock",
                                    date: "ti-calendar",
                                    up: "ti-angle-up",
                                    down: "ti-angle-down",
                                    previous: "ti-angle-left",
                                    next: "ti-angle-right",
                                    today: "far fa-calendar-check-o",
                                    clear: "far fa-trash",
                                    close: "ti-close",
                                },
                            }),
                            h("#ec-datetimepicker-sbs").datetimepicker({
                                sideBySide: !0,
                                icons: {
                                    time: "far fa-clock",
                                    date: "ti-calendar",
                                    up: "ti-angle-up",
                                    down: "ti-angle-down",
                                    previous: "ti-angle-left",
                                    next: "ti-angle-right",
                                    today: "far fa-calendar-check-o",
                                    clear: "far fa-trash",
                                    close: "ti-close",
                                },
                            });
                    });
                });
        },
        T = function () {
            h(".ec-range-slider").exists() &&
                e("assets/vendor/nouislider/distribute/nouislider.min.js", function () {
                    (function () {
                        var t = document.getElementById("rangeSlide1");
                        noUiSlider.create(t, { start: [50, 380], connect: !0, tooltips: !0, range: { min: 0, max: 500 } });
                        var e = [document.getElementById("noUiSliders_1_input"), document.getElementById("noUiSliders_1_1_input")];
                        t.noUiSlider.on("update", function (t, a) {
                            e[a].value = t[a];
                        });
                    })();
                    var t = document.getElementById("rangeSlide2");
                    noUiSlider.create(t, { start: [70], connect: [!0, !1], tooltips: !0, range: { min: 0, max: 500 } });
                });
        },
        _ = function () {
            h("[data-countdown]").exists() &&
                e(a + "/jquery.countdown/dist/jquery.countdown.min.js", function () {
                    h("[data-countdown]").each(function () {
                        var a = h(this),
                            t = h(this).data("countdown");
                        a.countdown(t, function (t) {
                            0 < a.find(".countdown-days").length && a.find(".countdown-days").text(t.strftime("%D")),
                                0 < a.find(".countdown-hours").length && a.find(".countdown-hours").text(t.strftime("%H")),
                                0 < a.find(".countdown-minutes").length && a.find(".countdown-minutes").text(t.strftime("%M")),
                                0 < a.find(".countdown-seconds").length && a.find(".countdown-seconds").text(t.strftime("%S"));
                        });
                    });
                });
        },
        z = function () {
            /*
            if (h(".ec-counter").exists()) {
                var t = h(".ec-counter");
                e(a + "/countTo/countTo.min.js", function () {
                    e(a + "/appear-master/dist/appear.min.js", function () {
                        appear({
                            elements: function () {
                                return t;
                            },
                            appear: function (t) {
                                h(t).countTo();
                            },
                        });
                    });
                });
            }
            */
        };
    h(document).ready(function () {
        p(), m(), g(), w(), x(), y(), T(), v(), S(), k(), _(), j(), z(), b(), C();
    }),
        h('[data-toggle="tooltip"]').each(function () {
            var t = h(this),
                a = t.data("skin");
            t.tooltip({ template: '<div class="tooltip ' + (a ? "tooltip-" + a : " ") + '" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>' });
        }),
        h('[data-toggle="tooltip"]').on("click", function () {
            h('[data-toggle="tooltip"]').not(this).tooltip("hide");
        }),
        h('[data-toggle="popover"]').each(function () {
            var t = h(this),
                a = t.data("skin");
            t.popover({ template: '<div class="popover ' + (a ? "popover-" + a : " ") + '"role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' });
        }),
        h('[data-toggle="popover"]').on("click", function () {
            h('[data-toggle="popover"]').not(this).popover("hide");
        });
})(jQuery);
