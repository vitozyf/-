/**
 * Created by Administrator on 17-4-29.
 */

//window.onload = function () {
$(function () {

    var icon1=document.getElementById("iconplay")
    var icontimer=null;
    icontimer=setInterval(iconplay,1000)
    //设置小白块的定时
    // function iconplay(){
    //     if(icon1.offsetTop==890){
    //         animate(icon1,{
    //             "top":910,
    //             "opacity":0
    //         })
    //     }else{
    //         icon1.style.top="890px";
    //         icon1.style.opacity=1;
    //     }
    // }

    function iconplay(){
        if(icon1.offsetTop==890){
            animate(icon1,{
                "top":910,
                "opacity":1
            },300)
        }else{
            icon1.style.top="890px";
            icon1.style.opacity=0;
        }
    }


    //设置ul的li标签盒子的上浮
    //实现
    var ul=document.getElementById("cont_ul");
    var ul_lis=ul.children;
    for(var i=0;i<ul_lis.length;i++) {
         ul_lis[i].setAttribute("index",i)
        ul_lis[i].onmouseover=function(){
            var index=this.getAttribute("index");
            animate(ul_lis[index].children[0],{
                "top":-10
            })
        }
         ul_lis[i].onmouseout=function(){
             var index=this.getAttribute("index");
             animate(ul_lis[index].children[0],{
                 "top":0
             })
         }
    }
    //获取小动点覆盖全部页面
    //var coverall=document.getElementById("coverall");
    //var btn_toggle=document.getElementById("btn_toggle");
    //btn_toggle.onclick=function(e){
    //    e=e||window.event;
    //    coverall.style.display="block"
    //    e.stopPropagation();
    //}
    //document.onclick=function(){
    //    coverall.style.display="none"
    //}

})
