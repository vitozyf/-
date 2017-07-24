/**
 * Created by Administrator on 17-4-29.
 */

$(function(){
    //window.onload = function () {

    var topnav = document.getElementById("topnav");
    var box1 = $$(".box1")[0];
    var flag = true;

    window.onscroll = function(){
        leader = scroll().scrollTop;
        //console.log(leader);
        if(leader > 20){
            topnav.className = "topnav clearfix fixedTop"
        }
        else if(leader > 0){
            if(flag){
                //使用标志位，防止其反复滑动
                flag = false;
                //页面滚动后，左侧的字体滑出
                $(".banner-side .side-text").css({top:80}).animate({top:0,opacity:1},1000);
            }
        }
        else{
            topnav.className = "topnav clearfix"
        }

        //$(".banner img").css("transform","translate(0px,"+leader+"px)");
        //$(".banner img").css("top",leader);

    }


    $$(".btn-toggle")[0].onmouseover = function(){
        animate(box1,{
            left:37
        })
    }
    $$(".btn-toggle")[0].onmouseout = function(){
        animate(box1,{
            left:0
        })
    }

    //$$(".menu-handle")[0].onclick = function (e) {
    //    stopBubble(e);
    //    this.className = "menu-handle active";
    //}
    //document.onclick = function () {
    //    $$(".menu-handle")[0].className = "menu-handle";
    //    $$(".quicknav")[0].style.display = "none";
    //}

    $$(".second")[0].onmouseenter = function () {
        $$(".last")[0].style.display = "block";
        animate($$(".last")[0],{
            right:46,
            opacity:1
        })
    }
    $$(".second")[0].onmouseleave = function () {
        $$(".last")[0].style.display = "none";
        animate($$(".last")[0],{
            right:0,
            opacity:0
        })
    }

    //点击导航，弹出快速导航栏
    $(".menu-handle").on("click",function(e){
        e.stopPropagation();
        $(this).addClass("active");
        $(".quicknav").css("top",80).toggle().animate({top:0,opacity:1},500);
    })

    //点击快速预订，弹出微信二维码
    $(".quickBooking").on("click",function(e){
        e.stopPropagation();
        $(".shade-bg").show();
        $(".erweima").show();
    })

    //点击文档，关闭二维码遮罩层，二维码DIV，快速导航DIV
    $(document).on("click",function(){
        $(".shade-bg").hide();
        $(".erweima").hide();
        $(".menu-handle").removeClass("active");
        $(".quicknav").hide();
    })
    //页面加载完后，左侧的字体图片滑动
    $(".banner-side .text-img").css({top:-80}).animate({top:0,opacity:1},1000);


    //for(var i = 0;i<$(".navlist .aboutHotel").length;i++){
    //    var flag1 = true;
    //    $(".navlist .aboutHotel").eq(i).click(function (e) {
    //        e.stopPropagation();
    //        $(".navlist .subNavList").eq($(this).index()).slideToggle();
    //        if(flag1){
    //            $(".navlist .aboutHotel span").eq($(this).index()).addClass("circleIcon");
    //            flag1 = false;
    //        }else {
    //            $(".navlist .aboutHotel span").eq($(this).index()).removeClass("circleIcon");
    //            flag1 = true;
    //        }
    //    })
    //}


    var flag1 = true;
    var flag2 = true;
    //导航里面的关于酒店
    var num1=0;
    $(".navlist .aboutHotel").click(function (e) {
        num1++;
        e.stopPropagation();
        $(".navlist .subNavList").eq(0).slideToggle();
        if(flag1){
            $(".navlist .aboutHotel span").addClass("circleIcon");
            flag1 = false;
        }else {
            if(num1 == 2){
                $(".navlist a.aboutHotel").attr("href","关于酒店.html")
                num1 = 0;
            }
            $(".navlist .aboutHotel span").removeClass("circleIcon");
            flag1 = true;
        }
    })

    //导航里面的新闻咨询
    var num = 0;
    $(".navlist .news").click(function (e) {
        num++;
        e.stopPropagation();
        $(".navlist .subNavList").eq(1).slideToggle();
        if(flag2){
            $(".navlist .news span").addClass("circleIcon");
            flag2 = false;
        }else {
            if(num == 2){
                $(".navlist a.news").attr("href","新闻咨询.html")
                num = 0;
            }
            $(".navlist .news span").removeClass("circleIcon");
            flag2 = true;
        }
    })




    //客房图片滑动模块
    //for(var i = 0; i <$("#roombox .roomlist").length; i++){
    //    $("#roombox .roomlist").eq(i).mouseenter(function(){
    //        //console.log($(this).index());
    //        $(".shield").eq($(this).index()).stop().animate({opacity:1},500);
    //        $(".list-right-2").eq($(this).index()).stop().animate({
    //            right:0,
    //            opacity:1
    //        },500);
    //        $(".list-right-1").eq($(this).index()).stop().animate({
    //            top:-140,
    //            opacity:0
    //        },500);
    //    })
    //
    //    $("#roombox .roomlist").eq(i).mouseleave(function(){
    //        $(".shield").eq($(this).index()).stop().animate({opacity:0},500);
    //        $(".list-right-2").eq($(this).index()).stop().animate({
    //            right:245,
    //            opacity:0
    //        },500);
    //        $(".list-right-1").eq($(this).index()).stop().animate({
    //            top:0,
    //            opacity:1
    //        },500);
    //    })
    //}

//客房图片滑动模块
    for(var i = 0; i <$("#roombox .roomlist").length; i++){
        $("#roombox .roomlist").eq(i).on("mouseenter", function () {
            //console.log($(this).index());
            $(".shield").eq($(this).index()).stop().animate({opacity:1},500);
            $(".list-right-2").eq($(this).index()).stop().animate({
                right:0,
                opacity:1
            },500);
            $(".list-right-1").eq($(this).index()).css("background","transparent").stop().animate({
                top:-140,
                opacity:0
            },500);
        })

        $("#roombox .roomlist").eq(i).on("mouseleave", function () {
            $(".shield").eq($(this).index()).stop().animate({opacity:0},500);
            $(".list-right-2").eq($(this).index()).stop().animate({
                right:245,
                opacity:0
            },500);
            $(".list-right-1").eq($(this).index()).stop().animate({
                top:0,
                opacity:1
            },500);

        })


    }


})




