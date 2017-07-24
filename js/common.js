/**
 * Created by Administrator on 17-4-14.
 */


//function $$(id){
//    return document.getElementById(id);
//}

/**
 * 封装获取ID,Class,标签
 * @param ele
 * @returns {*}
 */
function $$(ele) {
    if(ele.charAt(0) === "#"){
        return document.getElementById(ele.slice(1));
    }else if (ele.charAt(0) === "."){
        return document.getElementsByClassName(ele.slice(1));
    }else {
        return document.getElementsByTagName(ele);
    }
}




// 获取或设置标签内容
var Txt = {
    /**
     * 获取标签元素内容
     * @param ele
     * @returns {*}
     */
    gettext:function (ele) {
        if (ele.innerText) {
            return ele.innerText;
        } else {
            return ele.textContent;
        }
    },
    /**
     * 设置变更标签元素内容
     * @param ele
     * @param content
     */
    setText: function (ele,content) {
        if (typeof ele.innerText == "string") {
            ele.innerText = content;
        } else {
            ele.textContent = content;
        }
    }
}



//获取标签节点对象
var Tag = {
    /**
     * 封装一个兼容各个浏览器的向下获取兄弟节点的函数
     * @param ele
     * @returns {*}
     */
    getnextSibling:function (ele) {
        //判断传入的参数是否有效，且是否兼容高级浏览器，如果不兼容则使用nextsibing属性；
        if (ele && ele.nextElementSibling) {
            return ele.nextElementSibling;
        } else {
            //判断传入的参数是否是有效值；
            if (ele) {
                //将获取到的下一节点赋给变量一个新的变量，再进行判断
                var ele = ele.nextSibling;
                //循环判断获取到的节点类型是否为标签节点，如果不是继续向下寻找，直到找到为止
                while (ele.nodeType != 1) {
                    ele = ele.nextSibling;
                }
                //返回找到的标签节点
                return ele;
            }
        }
    },
    /**
     * 封装一个兼容各个浏览器的向上查找兄弟节点的函数
     * @param ele
     * @returns {*}
     */
    getpreviousSibing:function (ele) {
        //判断传入的参数是否是有效值，且是否满足高级浏览器
        if (ele && ele.previousElementSibling) {
            return ele.previousElementSibling;
        } else {
            if (ele) {
                //将找到的下一兄弟节点传给一个新变量
                var ele = ele.previousSibling;
                //判断该节点类型是否为标签节点
                while (ele.nodeType != 1) {
                    ele = ele.previousSibling;
                }
                return ele;
            }
        }
    },

    /**
     * 封装兼容浏览器版本的获取第一个子节点的函数
     * @param ele
     * @returns {Element}
     */
    getfirstElement:function (ele){
        if (ele) {
            if (ele.firstElementChild) {
                return ele.firstElementChild;
            } else {
                var ele = ele.firstElementChild;
                while (ele.nodeType != 1) {
                    ele = ele.nextSibling;
                }
                return ele;
            }
        }
    },

    /**
     * 封装兼容浏览器版本的获取最后一个子节点的函数
     * @param ele
     * @returns {Element}
     */
    getlastElement:function (ele){
        if (ele) {
            if (ele.lastElementChild) {
                return ele.lastElementChild;
            } else {
                var ele = ele.lastElementChild;
                while (ele.nodeType != 1) {
                    ele = ele.previousSibling;
                }
                return ele;
            }
        }
    }
}




/**
 * 封装一个动画函数方法 obj,作用的对象；json，传入一个含有属性的对象；fn，传入一个函数
 * @param obj
 * @param json
 * @param fn
 */
function animate(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for(var key in json){
            //如果属性是opacity，则需要
            if(key == "opacity"){
                var leader = parseInt(getStyle(obj,key)*100) || 0;;
                var target = json[key]*100;
                var speed = (target - leader)/10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                leader = leader + speed;
                obj.style[key] = leader/100;
            }
            else if(key == "zIndex"){
                var leader = parseInt(getStyle(obj,key)) || 0;;
                var target = json[key];
                var speed = (target - leader)/10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                leader = leader + speed;
                obj.style[key] = leader;
            }else{
                var leader = parseInt(getStyle(obj,key)) || 0;;
                var target = json[key];
                var speed = (target - leader)/10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                leader = leader + speed;
                obj.style[key] = leader + "px";
            }
            if(leader != target){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(typeof fn == "function"){
                fn();
            }
        }
    },15);
}


/**
 * 匀速运动封装
 * @param obj
 * @param target
 */
function animateYunshu(obj,target) {
    clearInterval(obj.timer);
    var speed = obj.offsetLeft < target ? 10 : -10;
    obj.timer = setInterval(function () {
       var cha = target - obj.offsetLeft;
        obj.style.left = obj.offsetLeft + speed + "px";
        if(Math.abs(cha) < Math.abs(speed)){
            clearInterval(obj.timer);
            obj.style.left = target + "px";
        }
    }, 50);

}

/**
 * 获取标签的内部或行内样式设置的属性（width,height,top,left,opacity,zIndex）,兼容版本
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj,null)[attr];
    }
}




/**
 * 页面可视区兼容版本封装（client）
 * @returns {{clientWidth: (Number|number), clientHeight: (Number|number)}}
 */
function client(){
    return {
        clientWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        clientHeight : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    }
}

/**
 * 封装兼容版本的scroll属性
 * @returns {{scrollTop: (Number|number), scrollLeft: (Number|number)}}
 */
function scroll(){
    return {
        scrollTop:window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
        scrollLeft: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0
    }
}

/**
 * 获取页面上鼠标的位置，兼容封装
 * @param e
 * @returns {{pageX: (*|boolean|Number|number), pageY: (*|boolean|Number|number)}}
 */
function page(e){
    return {
        pageX: e.pageX || e.clientLeft + document.documentElement.scrollLeft,
        pageY: e.pageY || e.clientTop + document.documentElement.scrollTop
    }
}

/**
 * 事件添加函数封装
 * @param obj
 * @param type
 * @param fn
 */
function addEvent(obj,type,fn){
    if(obj.addEventListener){
        obj.addEventListener(type,fn,false);
    }else if(obj.attachEvent){
        obj.attachEvent("on"+type,fn);
    }else {
        obj["on"+type] = fn;
    }
}

/**
 * 事件移除兼容封装函数
 * @param obj
 * @param type
 * @param fn
 */
function removeEvent(obj,type,fn){
    if(obj.removeEventListener){
        obj.removeEventListener(type,fn,false);
    }else if(obj.detachEvent){
        obj.detachEvent("on"+type,fn);
    }else {
        obj["on"+type] = null;
    }
}

/**
 * 阻止事件冒泡函数封装
 * @param e
 */
function stopBubble(e){
    e = e || window.event;
    if(e.stopPropagation){
        e.stopPropagation();
    }else {
        e.cancelBubble = true;
    }
}

eventTools = {
    addEvent: function(obj,type,fn){
        if(obj.addEventListener){
            obj.addEventListener(type,fn,false);
        }else if(obj.attachEvent){
            obj.attachEvent("on"+type,fn);
        }else {
            obj["on"+type] = fn;
        }
    },
    removeEvent: function (obj,type,fn) {
        if(obj.removeEventListener){
            obj.removeEventListener(type,fn,false);
        }else if(obj.detachEvent){
            obj.detachEvent("on"+type,fn);
        }else {
            obj["on"+type] = null;
        }
    },
    stopBubble: function (e) {
        e = e || window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else {
            e.cancelBubble = true;
        }
    }
}