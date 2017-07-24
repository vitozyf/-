/**
 * Created by 74016 on 2017/5/6.
 */
var isTouch = Modernizr.touchevents,
    isMobile = false,
    mobile = false,
    win_width = 0,
    win_height = 0,
    navItem = 0,
    atH = 60,
    pagenH = 0,
    scrollH = 0,
    $menuBtn = jQuery('.menu-handler'),
    $menuBox = jQuery(".menuBox"),
    $menuA = $menuBox.find(".itemA"),
    $submenu = $menuBox.find(".subMenu"),
    $pusher = jQuery(".pusher-black");
if (Modernizr.touchevents) {
    _mousemove = "touchmove";
    _click = "touchend";
    _mousedown = "touchstart";
    _mouseup = "touchend";
    _mouseenter = "touchstart";
} else {
    _mousemove = "mousemove";
    _click = "click";
    _mousedown = "mousedown";
    _mouseup = "mouseup";
    _mouseenter = "mouseenter";
};
var pageInit = {
        init: function () {
            win_width = $(window).width();
            win_height = $(window).height();
            if (win_width <= 1024) {
                isMobile = true;
                atH = 54;
            } else if (win_width > 1024) {
                isMobile = false;
                atH = 60;
            };
        },
        setImgMax: function (img, imgW, imgH, tW, tH) {
            var tWidth = tW || win_width;
            var tHeight = tH || win_height;
            var coe = imgH / imgW;
            var coe2 = tHeight / tWidth;
            if (coe < coe2) {
                var imgWidth = tHeight / coe;
                img.css({ height: tHeight, width: imgWidth, left: -(imgWidth - tWidth) / 2, top: 0 });
            } else {
                var imgHeight = tWidth * coe;
                img.css({ height: imgHeight, width: tWidth, left: 0, top: -(imgHeight - tHeight) / 2 });
            };
        },
        setScroll: function (anchorCur) {
            jQuery("html,body").animate({ scrollTop: jQuery(anchorCur).offset().top - atH }, 200);
        }
    },
    menu = {
        init: function () {
            $menuBtn.bind(_click, function () {
                if (navItem == 0) {
                    jQuery(this).addClass("active");
                    jQuery("html").addClass("menuOpen");
                    $menuBox.removeClass('openMneu');
                    navItem = 1;
                } else {
                    jQuery(this).removeClass("active");
                    $menuBox.addClass('openMneu');
                    jQuery("html").removeClass("menuOpen");
                    navItem = 0;
                }
            });
            $pusher.bind(_click, function () {
                $menuBtn.removeClass("active");
                $menuBox.addClass('openMneu');
                jQuery("html").removeClass("menuOpen");
                navItem = 0;
            });
        },
        subMenu: function () {
            jQuery(".menu>li>.itemA").click(function (e) {
                var menuA = $(this);
                var subcur = $(this).parents("li");
                if (subcur.find(".subMenu").size() > 0) {
                    if (menuA.hasClass("itemA active")) {
                        subcur.find(".subMenu").stop(false, false).slideUp();
                        menuA.removeClass("active");
                    } else {
                        $menuA.removeClass("active");
                        $submenu.stop(false, false).slideUp();
                        subcur.find(".subMenu").stop(false, false).slideDown();
                        menuA.addClass("active");
                        e.preventDefault();
                    }
                }
            });
        }
    },
    dock = {
        init: function () {
            jQuery(".dockCon li").mouseenter(function () {
                jQuery(this).find(".con").stop(false, false).animate({ right: 46, "opacity": "show" }, 300);
            }).mouseleave(function () {
                jQuery(this).find(".con").stop(false, false).animate({ right: 0, "opacity": "hide" }, 300);
            });
        }
    };
jQuery(window).resize(function () {
    pageInit.init();
    pageBanner();
});
function getHash() {
    var hash = location.href.split("#")[1];
    if (hash) {
        pageInit.setScroll("#" + hash);
    }
};
function pageBanner() {
    if (!isMobile) {
        jQuery('.pbanner4').css("height", jQuery(".pbanner4 .load-img").height());
    } else {
        jQuery('.pbanner4').css("height", "auto");
    }
};
load();
function load() {
    var maxNum = $(".pbanner4 .load-img").size();
    var curNum = 0;
    jQuery(".pbanner4 .load-img").each(function () {
        $(this).attr("src", $(this).attr("_src"));
        jQuery(this).load(function () {
            curNum++;
            if (curNum == maxNum) {
                pageBanner();
            }
        });
    });
};
$(document).ready(function () {
    pageInit.init();
    menu.init();
    menu.subMenu();
    dock.init();
    if (jQuery(window).scrollTop() >= 120) {
        jQuery(".top").addClass("fixedTop");
    }
    setPopUp(jQuery('.jz-yd-btn'), "扫描此二维码进行预定");
    setPopUp(jQuery('.fsharp .a1'), "关注官网微信");
    function setPopUp(obj, title) {
        obj.click(function () {
            var str = '<div class="popUpblack"><div class="popUp"><div class="img"><img src="' + obj.attr("data-img") + '"/></div><div class="t">' + title + '</div></div></div>';
            $("body").append(str);
            jQuery(".popUpblack").fadeIn();
            jQuery(".popUp").animate({ marginTop: "-132" }, 400);
            $(".popUp .close").click(function () {
                $(".popUpblack").remove();
            });
            jQuery(".popUpblack").click(function () { $(".popUpblack").remove(); });
            return false;
        });
    };
    jQuery(window).scroll(function () {
        var sT = $(window).scrollTop();
        if (sT >= 120 && !isMobile) {
            jQuery(".top").addClass("fixedTop");
        } else {
            jQuery(".top").removeClass("fixedTop");
        };
        if (sT < win_height && !isMobile) {
            jQuery('.pbanner .pimg').css({ 'transform': "translate(0px," + (sT) / 1.5 + "px)", '-webkit-transform': "translate(0px," + (sT) / 1.5 + "px)" });
            jQuery('.pbanner2 .pimg').css({ 'transform': "translate(0px," + (sT) / 1.5 + "px)", '-webkit-transform': "translate(0px," + (sT) / 1.5 + "px)" });
            jQuery('.pbanner3 .himg').css({ 'transform': "translate(0px," + (sT) / 1.5 + "px)", '-webkit-transform': "translate(0px," + (sT) / 1.5 + "px)" });
            jQuery('.pbanner4 .load-img').css({ 'transform': "translate(0px," + (sT) / 1.5 + "px)", '-webkit-transform': "translate(0px," + (sT) / 1.5 + "px)" });
        }
        if (sT > scrollH) {
            jQuery(".pagenav").addClass("fixed");
        } else if (sT < scrollH) {
            jQuery(".pagenav").removeClass("fixed");
        };
    });
    jQuery(".backTop").bind("click", function () {
        jQuery('html, body').stop(false, false).animate({ scrollTop: 0 }, 800, 'easeInOutExpo');
    });
    function pbannerW() {
        if (!isMobile) {
            jQuery(".pbanner").css({ "height": win_height - pagenH });
            jQuery(".pbanner3").css({ "height": win_height - pagenH });
            pageInit.setImgMax(jQuery(".pbanner3 .himg"), 1920, 950, win_width, win_height - pagenH);
        } else {
            jQuery(".pbanner").css({ "height": win_height - atH - pagenH });
            jQuery(".pbanner3").css({ "height": "auto", "width": "100%" });
            jQuery(".pbanner3 .himg").attr("style", "").css({ "position": "relative" });
        }
    };
    pbannerW();
    jQuery(window).resize(function () {
        pbannerW();
    });
    window.onload = function () {
        if (jQuery(".pagenav").length >= 1) {
            scrollH = jQuery(".pagenav").offset().top - atH;
        };
        getHash();
    }
    var regBox2 = {
        regEmail: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        regTel: /(^0?1[3|4|5|8][0-9]\d{8}$)|(^0[\d]{2,3}-[\d]{7,8}$)/,
    };
    var iajajx2 = true;
    jQuery("#submit2").click(function () {
        if (iajajx2) {
            var namesobj2 = jQuery("#names2");
            var telsobj2 = jQuery("#tels2");
            if (namesobj2.val() == "" || namesobj2.val() == "姓名") {
                namesobj2.focus();
                return;
            }
            if (telsobj2.val() == "" || telsobj2.val() == "电话") {
                telsobj2.focus();
                return;
            }
            else {
                var mflag = regBox2.regTel.test(telsobj2.val());
                if (!mflag) {
                    alert("手机或者电话有误！"); telsobj2.focus(); return;
                }
            };
            jQuery.ajax({
                type: "POST",
                url: "Tools/publikTools.ashx?t=" + Math.random(),
                data: { action: "leavemessageforms2", Names: namesobj2.val(), TEl: telsobj2.val() },
                dataType: "html",
                cache: true,
                beforeSend: function () {
                    iajajx2 = false;
                },
                success: function (data) {
                    if (data == "y") {
                        alert("提交成功！");
                        jQuery("#submit2").attr("disabled", "disabled").css({ "cursor": "not-allowed" });
                        jQuery("#submit2").unbind("click");
                    }
                    else {
                        alert("" + data + "");
                        setTimeout(function () { iajajx2 = true; }, 1500);
                    }
                },
                error: function () {
                    alert("链接错误!");
                }
            });
        }
    });
});
jQuery(document).on(_mouseenter, '.jz-promise .sico', function () {
    if (jQuery(".jz-promise-box").length > 0) { jQuery(".jz-promise-box").remove() };
    var optL = jQuery(this).offset().left;
    var optT = jQuery(this).offset().top + jQuery(this).outerHeight();
    var dataC = jQuery(this).attr("data-con");
    var optW = jQuery(this).innerWidth();
    var optWy2=optW/2;
    var oboxW=jQuery(".jz-promise-box").innerWidth();
    jQuery("body").append('<div class="jz-promise-box"><span class="sjico"></span>'+dataC+'</div>');
    if((optL+optW+oboxW)>win_width){
        jQuery(".jz-promise-box").css({ left: optL-(oboxW/2)+optWy2, top: optT, "display": "block" }).addClass("jz-promise-boxT");
    }else{
        jQuery(".jz-promise-box").css({ left: optL+8, top: optT-25, "display": "block" });
    };
    jQuery(".jz-promise-bg").show();
    jQuery(".jz-promise-box").mouseleave(function () {
        $(this).stop(false, false)
            .animate({ "opacity": 0 }, 300, function () {
                $(this).remove();
                jQuery(".jz-promise-bg").hide();
            });
    });
});
jQuery(document).on(_mouseenter, '.jz-promise-bg', function () {
    jQuery(".jz-promise-bg").hide();
    jQuery(".jz-promise-box").remove();
});
