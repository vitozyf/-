/**
 * Created by Administrator on 17-5-5.
 */

$(function () {
    lineplay(0);
    function lineplay(a){
        //运动前先将数据清空
        $(".boxt-s1").css({height:0})
        $(".boxt-s2").css({width:0})
        $(".boxt-s3").css({height:0})
        $(".boxt-s4").css({width:0})

        //让图片右侧的li标签和正在展示的DIV对应起来
        $(".slick-dots li").eq(a).addClass("changePic").siblings().removeClass("changePic");
        //打开当前DIv，关闭其他的DIV
        $(".middle-banner-pic").eq(a).show().siblings().hide();
        //中间字体运动
        $(".by1").eq(a).css("top",50).animate({top:8,opacity:1},800);
        $(".by2").eq(a).css("top",100).animate({top:38,opacity:1},800);
        //图片缩放
        $(".middle-banner-pic").eq(a).addClass("huandong").siblings().removeClass("huandong");
        //运动轨迹
        $(".boxt .boxt-s1").eq(a).animate({height:220},1000,function () {
            $(".boxt .boxt-s2").eq(a).animate({width:220},1000, function () {
                $(".boxt .boxt-s3").eq(a).animate({height:220}, 1000,function () {
                    $(".boxt .boxt-s4").eq(a).animate({width:220},1000);
                })
            })
        })
    }


    //图片下面小箭头，循环运动
    var timer = null;
    timer = setInterval(function () {
        $(".mouseIco").animate({opacity:1,bottom:15},500, function () {
            $(".mouseIco").animate({opacity:0},300, function () {
                $(".mouseIco").css("bottom","8%");
            });
        })
    },1000);


    //点击li标签，添加样式，改变背景图片
    $(".slick-dots li").on("click", function () {
        //添加类，其他兄弟节点删除类
        $(this).addClass("changePic").siblings().removeClass("changePic");
        //$(".middle-banner-pic").eq($(this).index()).show().siblings().hide();

        //让li的索引和对应DIV的索引相等
        num = $(this).index();
        //点击后，先清空定时器，再调用函数
        clearInterval(timer);
        lineplay($(this).index());
    })

    //鼠标移开中间图片区后，重新开始启动定时器，实现自动轮播
    $(".slick-dots").on("mouseleave",function(){
        clearInterval(timer);
        timer = setInterval(function () {
            num++;
            if(num > 2){
                num = 0;
            }
            lineplay(num);
        },4000)
    })

    //设置图片的自动轮播
    var num = 0
    var timer = null;
    timer = setInterval(function () {
        num++;
        if(num > 2){
            num = 0;
        }
        lineplay(num);
    },4000)


    //客房图片滑动模块
    for(var i = 0; i <$("#roombox .roomlist").length; i++){
        $("#roombox .roomlist").eq(i).on("mouseenter", function () {
            $(".list-left img").eq($(this).index()).stop().animate({top:-65},500);
        })

        $("#roombox .roomlist").eq(i).on("mouseleave", function () {
            $(".list-left img").eq($(this).index()).stop().animate({top:-50},500);
        })
    }
})