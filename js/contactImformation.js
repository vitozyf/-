/**
 * Created by Administrator on 2017/5/6 0006.
 */
$(function(){
    //点击“到己庄去”和“从己庄出发”功能。
    $(".toJz").on('click', function () {
        $(".toJz").css({
            "backgroundColor":"#17234C",
            "color":"white",
        });
        $(".ul-box .gotoJz").css("display","block")
        $(".ul-box .gofromJz").css("display","none");
        $(".fromJz").css({
            "backgroundColor":"#E9E7DA",
            "color":"#666",
        });
    });
    $(".fromJz").on('click', function () {
        $(".fromJz").css({
            "backgroundColor":"#17234C",
            "color":"white",
        });
        $(".ul-box .gofromJz").css("display","block");
        $(".ul-box .gotoJz").css("display","none");
        $(".toJz").css({
            "backgroundColor":"#E9E7DA",
            "color":"#666",
        });
    });
    //点击“自驾”和“动车”
    $(".nav-c-car span>.span1").on('click', function () {
        $(".span1").addClass("active");
        $(".span2").removeClass("active");
    });
    $(".nav-c-car span>.span2").on('click', function () {
        $(".span2").addClass("active");
        $(".span1").removeClass("active");
    });
    //文本框输入设置
    $(".startpoint1 input").on({
        focus: function () {
            if($(this).val()=="请输入目的地"){
                $(this).val("");
            }else{
                $(this).val($(this).val());
            }
        },
        blur: function () {
            if($(this).val()==''){
                $(this).val("请输入目的地");
            }else{
                $(this).val($(this).val());
            }
        }
    });
    $(".startpoint2 input").on({
        focus: function () {
            if($(this).val()=="请输入目的地"){
                $(this).val("");
            }else{
                $(this).val($(this).val());
            }
        },
        blur: function () {
            if($(this).val()==''){
                $(this).val("请输入目的地");
            }else{
                $(this).val($(this).val());
            }
        }
    });
})