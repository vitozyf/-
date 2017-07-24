/**
 * Created by yu199 on 2017-05-05.
 */

// 页面卷曲到一定程度时，固定新闻动态的导航栏
$(function(){
    var bannerHeight = $("#pv_show").height()-60;  // 拿到banner+的高度
    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop(); //页面卷曲的高度
        if(scrollTop > bannerHeight){
           $(".news_nav").css({
               "position":"fixed",
               "top":60,
           })
            $(".news").css({
                "margin-top":$(".news_nav").height()
            })
        } else {
            $(".news_nav").css({
                "position":"static"
            });
            $(".news").css({
                "margin-top": 0
            })
        }
    });
});

// banner中inner部分文字动画效果
$(function(){
    $(".words").css({
        "-webkit-transform":"rotateY(360deg)",
        "transition": "all 4s ease-in-out"
    })
});

// 新闻tab栏切换事件
$(function(){
    $(".news_nav a").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index();
        $(".news ul").eq(index).addClass("selected").siblings().removeClass("selected");
    })
});

// 新闻主体部分 背景改变
$(function(){
    var bg = $(".he>span").addClass("bg");
    $(".news #flag1").hover(function(){

        $(bg).stop().animate({
            width:52+'%',
            height:$("p.img").height()
        });
        $(".more").css({
            "color":"#f19149"
        });
        $("p.img>img").css({
            "transform": "scale(1.1)",
            transition: "all 600ms"
        })
    },function(){
        $(bg).stop().animate({
            width:0
        });
        $(".more").css({
            "color":"#969696"
        });
        $("p.img>img").css({
            "transform": "scale(1.0)",
            transition: "all 600ms"
        })
    })
});

$(function(){
    var bg = $(".he>span").addClass("bg");
    $(".news #flag2").hover(function(){

        $(bg).stop().animate({
            width:55+'%',
            height:$("p.img1").height()
        });
        $(".he").css({
            "color":"#f19149"
        });
        $("p.img1>img").css({
            "transform": "scale(1.1)",
            transition: "all 600ms"
        })
    },function(){
        $(bg).stop().animate({
            width:0
        });
        $(".he").css({
            "color":"#969696"
        });
        $("p.img1>img").css({
            "transform": "scale(1.0)",
            transition: "all 600ms"
        })
    })
});

$(function(){
    var bg = $(".she>span").addClass("bg");
    $(".news #flag3").hover(function(){
        $(bg).stop().animate({
            width:52+'%',
            height:$("p.img2").height()
        });
        $(".she").css({
            "color":"#f19149"
        });
        $("p.img2>img").css({
            "transform": "scale(1.1)",
            transition: "all 600ms"
        })
    },function(){
        $(bg).stop().animate({
            width:0
        });
        $(".she").css({
            "color":"#969696"
        });
        $("p.img2>img").css({
            "transform": "scale(1.0)",
            transition: "all 600ms"
        })
    })
});



