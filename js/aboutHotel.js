/**
 * Created by Ally on 2017/5/7.
 */


setTimeout(function () {
    //$("#pv_show").css("display","none");
    $("#pv_show img").css({"display":"none"});
},2000);

setTimeout(function () {
    //$("#pv_show").css("display","none");
    $("#pv_show img").css({"zIndex":1,"display":"block"});
},44000);



setInterval(function () {
    $(".about-y .bg").animate({left:"32px"},1400,"swing");
    $(".about-y .bg").animate({left:"-10px"},1400,"swing");
},3500);