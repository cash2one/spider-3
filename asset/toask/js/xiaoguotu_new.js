var com = (function (win, doc) {
    var com = {};
    //冒泡阻止
    com.prevent = function (e) {
        e && e.stopPropagation ? e.stopPropagation() : win.event.cancelBubble = true;
    };
    //阻止浏览器的默认行为 
    
    com.stopDefault = function (e) {
        e && e.preventDefault ? e.preventDefault() : win.event.returnValue = false;
        return false;
    };
    com.mouseEvent = function (obj, Fn) {//鼠标滚轮事件 
        if (obj.addEventListener) {
            obj.onmousewheel === undefined ? obj.addEventListener('DOMMouseScroll', Fn, false) : obj.addEventListener('mousewheel', Fn, false);
        }
        else {
            obj.attachEvent('onmousewheel', Fn);
        }
    };
    //cookie
    com.setCookie = function (name, value) {//设置cookie
        document.cookie = name + '=' + value;
    };
    com.getCookie = function (c_name) {//获得cookie值
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1
                c_end = document.cookie.indexOf(";", c_start)
                if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    };
    return com;
})(window, document);
// 统计浏览图片，切换汪涵样式 add by fidermo.hu 2016/10/26
var scanTimes = (function(){
    var x = 1;
    function set(c){
        x = c;
    };
    return {
        set:set,
        out:function(){
            x++;
            return x;
        }
    };
})();

var xgtstatus_num = 0;
var xgtstatus_request;
function Drag(opt) { return new Drag.prototype.init(opt); };  //拖动的函数
// 设置单位为天数的setCookie
function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + ';path=/;domain=.to8to.com';
}
Drag.prototype = {
    init: function (opt) {
        this.downEle = opt.downEle || opt.obj;
        this.moveEle = opt.moveEle || opt.downEle;
        this.type = opt.type || false;
        this.down();
    },
    down: function () {
        var _this = this;
        this.downEle.onmousedown = function (e) {
            var e = e || event;
            com.prevent(e);
            _this.x = e.clientX - _this.moveEle.offsetLeft, _this.y = e.clientY - _this.moveEle.offsetTop;
            if (this.setCapture) {
                this.onmousemove = function (e) {
                    _this.move(e);
                };
                this.setCapture();
                this.onmouseup = _this.up;
            }
            else {
                document.onmousemove = function (e) {
                    _this.move(e);
                };
                document.onmouseup = _this.up;
            }
            return false;
        };
    },
    move: function (e) {
        var e = e || event, l = e.clientX - this.x, t = e.clientY - this.y;
        if (this.type) {
            var w = document.documentElement.clientWidth, h = document.documentElement.clientHeight;
            l = l < 0 ? 0 : l > w - this.moveEle.offsetWidth ? w - this.moveEle.offsetWidth : l;
            t = t < 0 ? 0 : t > h - this.moveEle.offsetHeight ? h - this.moveEle.offsetHeight : t;
        }
        this.moveEle.style.left = l + 'px';
        this.moveEle.style.top = t + 'px';
    },
    up: function () {
        this.onmouseup = null;
        this.onmousemove = null;
        if (this.releaseCapture) {
            this.releaseCapture();
        }
    }
};
Drag.prototype.init.prototype = Drag.prototype;
function ScrollBar(opt) { return new ScrollBar.prototype.init(opt) };
ScrollBar.prototype = {
    init: function (opt) {
        this.container = opt.container;
        this.target = opt.target;
        this.gap = opt.gap || 20;
        this.ifNewScrollBar();
    },
    createScrollBar: function () {//创建滚动条
        this.scroll_outer = document.createElement('div');
        this.scroll_bar = document.createElement('div');
        this.scroll_outer.className = 'custom_scroll';
        this.scroll_bar.className = 'custom_scroll_bar';
        jq(".container")[0].appendChild(this.scroll_outer);
        this.scroll_outer.appendChild(this.scroll_bar);
        //this.container.appendChild(this.scroll_outer);
        //this.scroll_outer.appendChild(this.scroll_bar);
    },
    scrollDrag: function () {//添加滚动条拖拽
        var _this = this;
        function barDrag() { };
        barDrag.prototype = new Drag({ downEle: this.scroll_bar });
        barDrag.prototype.move = function (e) {
            var e = e || event;
            var t = e.clientY - this.y;
            _this.setTop(t);
        };
    },
    setTop: function (t) {//移动的位置
        var h = this.scroll_outer.offsetHeight - this.scroll_bar.offsetHeight;
        t = t < 0 ? 0 : t > h ? h : t;
        var scale = t / h;
        this.scroll_bar.style.top = t + 'px';
        this.scroll_bar.style.bottom = 'auto';
        this.target.style.bottom = 'auto';
        this.target.style.top = (this.scroll_outer.offsetHeight - this.target.offsetHeight) * scale + 'px';
    },
    mouseEvent: function (obj, Fn) {//鼠标滚轮事件
        if (obj.addEventListener) {
            obj.onmousewheel === undefined ? obj.addEventListener('DOMMouseScroll', Fn, false) : obj.addEventListener('mousewheel', Fn, false);
        }
        else {
            obj.attachEvent('onmousewheel', Fn);
        }
        //DOMMouseScroll 火狐
        //mousewheel     谷歌 
        //onmousewheel   IE
    },
    mouseScroll: function () {//鼠标滚轮功能
        var _this = this;
        var t = 100;
        this.mouseEvent(this.container, function (e) {
            com.stopDefault(e);
            var val = e.wheelDelta || e.detail;//e.detail只有火狐识别,  e.wheelDelta除了火狐都能识别
            if (val == 120 || val == -3) {//向上
                _this.setTop(_this.scroll_bar.offsetTop - _this.gap);
            }
            else {//向下
                _this.setTop(_this.scroll_bar.offsetTop + _this.gap);
            }
        });
    },
    clickScroll: function () {
        var _this = this;
        this.scroll_outer.onmousedown = function (e) {
            var e = e || event, gap = _this.container.offsetTop - (document.body.scrollTop || document.documentElement.scrollTop), t = e.clientY - (gap < 0 ? 0 : gap);
            _this.setTop(t);
            com.prevent(e);
        };
    },
    ifNewScrollBar: function () {//是否需要创建滚动条
        var ch = this.container.offsetHeight;
        var sh = this.target.offsetHeight;
        if (sh > ch) {
            this.createScrollBar();
            this.scrollDrag();
            this.mouseScroll();
            this.clickScroll();
            this.target.style.top = "0";
            this.scroll_bar.style.cssText = "top:0;height:" + ch / sh * 100 + "%";
        }
    }
};
ScrollBar.prototype.init.prototype = ScrollBar.prototype;
function Picture() { };
Picture.prototype = {
    setSomes: function () {
        this.box = jq(".container");
        this.imgCon = jq(".img_content");
        this.imgBox = jq(".img_box");
        this.thumbDiv = jq(".img_list");
        this.list = jq(".list");
        this.imgTag = jq(".img_div_tag");
        this.imgDiv = jq(".img_div");
        this.rightBar = jq(".right_part");
        this.marqueeCon = jq(".marquee_con");
        this.leftArrow = jq("#left_Arrow");
        this.rightArrow = jq("#right_Arrow");
        this.num = 0;
        this.albumIndex = 0;
        this.timer = null;
        this.timer2 = null;
        this.thumbCur = null; //生成例表后再指定
        this.listWidth = 100;
        this.imgDefSize = {};
        this.albumSw = false;
        this.albumScrollSw = false;
        this.crumbs = jq("#fine_n");
        this.mode = mode || "thumb";
        this.imgCon.addClass("init");
        this.collectid = 0;
        this.collectaid = 0;
        this.imgBox[0].onmousedown = function () { return false; };

        if (!window.XMLHttpRequest) {//fuck IE6
            this.imgTag.hover(function () { jq(".btn").show() ;}, function () { jq(".btn").hide();});
        };
        this.imgTag.hover(function() {
            var  cachestr = jq('#imgids').attr('aids');
            var aid = jq('#bigImg').attr('data-oid');
            var cacheaids = [cachestr];
            if((typeof(cachestr) == 'string')&&(cachestr.indexOf(',')!=-1)){
                     cacheaids = cachestr.split(',');
                }
            this.collectids = cacheaids ; 
            var iscollect = '';
            var steTmp = "<a href=\"javascript:;\" class=\"bg_filter1\" onclick=\"Pic.designCollect(this, event);\"><em class=\"icn_start\"></em>收藏</a>";
            if(jq.inArray(aid, this.collectids)!== -1){
                   steTmp = "<a href=\"javascript:;\" class=\"bg_filter2\" onclick=\"Pic.designCollect(this, event);\"><em class=\"icn_start\"></em>已收藏</a>"
            }   
            // var btnStr = "<a href=\"javascript:;\" class=\"design\" onclick=\"Pic.designCollect(this, event)\">免费户型设计</a>"
                  // + "<a href=\"javascript:;\" class=\"design tenderpop_tag\" onclick=\"Pic.designCollect(this, event)\">免费获取报价</a>";
            jq(".btn").html(steTmp);
            // jq(".btn.bj").html(btnStr);
            jq(".btn.bj").html('');
        });

        this.AdIdx = 1;
        this.adTime = 3;

        jq(document).on("mouseenter", '.itemlist_box li',function(){
            clearTimeout(this.itemlistTimer);
            jq(this).addClass('on').siblings('li').removeClass('on');
        }).on("mouseleave",'.itemlist_box li', function(){
            var self = this;
            clearTimeout(this.itemlistTimer);
            this.itemlistTimer = setTimeout(function(){
                jq(self).removeClass('on');
            },200);
        }).on("mouseenter", '.itemlist_box .shop_bot',function(){
            var parent = jq(this).parents('li').first();
            clearTimeout(parent[0].itemlistTimer);
        });

        //装修成这样需要多少钱
        var self = this;
        jq(document).on("click", '.style-budget,.style-pointer', function(){
            // 点击图片右侧入口ptag
            CommonTenderPop.init({
                exposurePtag: '1_2_10_887',
                pricePtag: jq('.itemlist').prop('data_ptag')||'1_2_4_641',
                designPtag: jq('.itemlist').find('.style-pointer').prop('data_ptag')||'1_2_10_850 ',
                companyPtag: ' 1_2_10_963',
                materialPtag: '1_2_10_964',
                priceTitle: '算算该装修风格预算',
                priceResultTit: '该装修风格预算为：',
                automatic: false,
                showXGTImg: true,
                imgSrcPage: jq('#bigImg').prop('src'),
                imgNewBJ:true,
                onceTimes: '1_2_10_1132',
                twiceTimes: '1_2_10_1133'
            });
        });
        jq(document).ready(function(){
            var tab = true;
            function smallPointer(){
                if(tab){
                    jq('.style-pointer').animate({
                        width:  '24px'
                    }, 300, null, function(){
                        tab = false;
                        smallPointer();
                    });
                }else{
                    jq('.style-pointer').animate({
                        width:  '27px'
                    }, 300, null, function(){
                        tab = true;
                        smallPointer();
                    });
                }
            }
            smallPointer();
         });

        jq(".img_div").on("click", '.itemlist_box', function(e){
            e.stopPropagation();
            e.preventDefault();
        }).on("click","a.shop_top,div.shop_bot>a", function(e){
            e.stopPropagation();
        });

        this.RecommendAdapt();
        
        return this;
    },
    //图片大小
    imgSize: function (imgW, imgH, divW, divH) {
        var scale = imgW / imgH, scale2 = divW / divH, w, h;
        scale > scale2 ? (w = divW, h = divW / scale) : (w = scale * divH, h = divH);
        return {
            w: w > imgW ? imgW : w,
            h: h > imgH ? imgH : h
        }
    },
    //自适应
    picAdapt: function (boole) {
        var _this = this, h = jq(window).height(), conH = h - 45 - 30, imgBoxH = conH - 95  + this.num;
        this.imgCon.height(conH);
        this.imgBox.height (imgBoxH );
        var imgSize = {};
        if (boole) return this;
        if(jq('#addWrap').is(':hidden')) {
            imgSize = this.imgSize(this.imgDefSize.width, this.imgDefSize.height, this.imgDiv[0].offsetWidth, imgBoxH);
        } else {
            imgSize = this.imgSize(730, 470, this.imgDiv[0].offsetWidth, imgBoxH);
        }
        this.img[0].style.cssText = "width:" + imgSize.w + "px;height:" + imgSize.h + "px;";
        this.imgTag[0].style.cssText = "width:" + imgSize.w + "px;height:" + imgSize.h + "px;top:" + (imgBoxH - imgSize.h) / 2 + "px;";

        return this;
    },
    RecommendAdapt:function(){
        if(this.imgDiv.width() > this.imgTag.width()+ jq('.itemlist').outerWidth()){
            jq('.itemlist').removeClass('itemlist_a');
        }else{
            jq('.itemlist').addClass('itemlist_a');
        }
    },
    //拖动窗口时
    windowChange: function () {
        var _this = this;
        jq(window).resize(function(){
            _this.picAdapt();

            _this.RecommendAdapt();

            clearTimeout(_this.timer);
            _this.timer = setTimeout(function () {
                if (_this.thumbCur == undefined) return;
                _this.thumbMediate(_this.thumbCur);
            },500);
        });
        // jq(window).bind("resize", function () {
            
        // });
        return this;
    },
   
    rightScroll: function () {
        ScrollBar({
            container: jq(".right_content")[0],
            target: jq(".right_part")[0],
            gap: 50
        });
        if (!window.XMLHttpRequest) jq(".custom_scroll").height(jq(".container")[0].offsetHeight);
        return this;
    },
    //申请
    apply: function () {
        var err = jq(".err_msg"), sw = true,xptag='1_2_2_4';
        if(picType==1)
        {
            xptag='1_2_2_2';
        }
        function errFn(obj) {
            err.removeClass("show");
            obj.addClass("show");
        };
        function cheakPM(str) {
            var rePhone = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?jq/;
            // var reMobile = /1[3-8]+\d{9}/;
            var reMobile = /^((\(\d{2,3}\))|(\d{3}\-))?(13|15|18|17|19)\d{9}$/
            if (!rePhone.test(str) && !reMobile.test(str)) {
                return false;
            }
            else {
                return true;
            }
        };
        var yuyue_apply_agin = 0;
        jq("#name").focus(function() {
            if(jq(this).val() =='您的称呼')
            {
                jq(this).val('');
                jq(this).css('color','#666')
            }
        });
         jq("#name").blur(function() {
            if(jq(this).val() =='')
            {
                jq(this).val('您的称呼');
                jq(this).css('color','#ccc');
            }
        });

         jq("#phone").focus(function() {
            if(jq(this).val() =='手机号码')
            {
                jq(this).val('');
                jq(this).css('color','#666')
            }
        });
          jq("#phone").blur(function() {
            if(jq(this).val() =='')
            {
                jq(this).val('手机号码');
                jq(this).css('color','#ccc')
            }
        });
      
        jq("#apply_form").bind("submit", function () {
            //获取当前ptag
            var ptag = xptag;
            //百度统计函数
            try{
                _hmt && _hmt.push(['_trackEvent', 'zb', 'submit', ptag]);
            }catch(e){

            }
            clickStream.getCvParams(xptag);
            if (jq("#name").val() == "" || jq("#name").val() == "您的称呼") {
                errFn(err.eq(0));
            }
            else if (jq("#phone").val() == "" || jq("#phone").val() == "手机号码" ||!cheakPM(jq("#phone").val())) {
                errFn(err.eq(1));
            }
            else if ( jq("#PUser_City").val()=='') {
                errFn(err.eq(2));
            }
            else {
                err.removeClass("show");
                var id = jq("#bigImg").attr('data-aid'); 

                id=id?id:(id+2000000000);
                
                //加密
    

                /**********************原来的****************************/
                /*var _data='pos=outindex&rsastr=1&phone='+RSAUtils.encryptfun(jq("#phone").val())+'&backsuccess=1&id='+id + '&User_Shen=' + jq("#PUser_Shen").val()+'&ptag=' + ptag +'&chenghu='+encodeURIComponent(jq("#name").val())+'&User_City='+encodeURIComponent(jq("#PUser_City").val())+'&sourceid=21&s_sourceid=56&s='+Math.random(5);*/
                // var _data='pos=outindex'+
                // '&backsuccess=1&id='+id +
                //  '&User_Shen=' + jq("#PUser_Shen").val()+
                //  '&ptag=' + xptag +
                //  '&User_City='+encodeURIComponent(jq("#PUser_City").val())
                //  +'&sourceid=21&s_sourceid=56&s='+Math.random(5)+encryptData;
                var sendData = {
                    shen : jq("#PUser_Shen").val(),
                    city : jq("#PUser_City").val(),
                    ptag : xptag,
                    sourceid : 21,
                    s_sourceid: 56,
                    pos: 'outindex',
                    nowstep: 1,
                    modeltype: 1,
                    id : id,
                    phone: jq("#phone").val(),
                    chenghu: jq("#name").val()
                }
                var encryptData = rsaEncryptNameAndPhone({phoneObj:jq("#phone"),chenhuObj:jq("#name")},null,null,null,true);
                for(var i in encryptData) {
                    sendData[i] = encryptData[i];
                }
                if(!window.tender) {
                    jq.getScript('http://static.to8to.com/gb_js/tender.js?v=1449147278',function(){
                        var startTender = new tender();
                        startTender.init(sendData);
                    });
                    return;
                }
                var startTender = new tender();
                startTender.init(sendData);
        //         jq.ajax({
        //             type: "POST",
        //             url: "/getuserdata.php",
        //             data: _data,
        //             success: function(result) { 
                    // yuyue_apply_agin = 0;    
                    // if (typeof(JSON) == "undefined") {
                    //  var res = eval("(" + result + ")")
                    //   } else {
                    //  var res = JSON.parse(result)
                    //   }
                      
                    //   if (res.status == 1) {
                    //    if (!res.tmpYid)
                    //    {
                    //       alert('申请次数超过五次');return false; 
                    //    }
                    //      indexSubZbStepOneXGT(res,weixin_code);
                    //      zb_getwxstatus(start_qrcode_id,res.tmpYid);
                    //  return false;
                    //   } 
                    //   else if(res.status == 5)
                    //   {
                    //   window_box_close();
                    //   indexYYFail(res.cityname);
                    //   return false;
                    //   }
                    //   else
                    //   {
                    //  var cityname = encodeURI(res.cityname);
                    //  var tyid   = encodeURI(res.tmpid);
                    //  showPopWin("http://www.to8to.com/zb/frame_global.php?msg="+cityname + "&tyid=" + tyid , 456, 254, null, true);
                    //   }
                    //   yuyue_apply_agin = 0;
        //             }
        //         });
                this.reset();
            }
            return false;
        });
        return this;
    },

    createThumbList: function (dataImg, index) {     
        var arr = [];
        for (var i = 0, tLen = dataImg.length; i < tLen; i++) {
            var albumCon = {};
            if (dataImg[i].album) {
                var albumList = [];
                for (var j = 0, aLen = dataImg[i].album.length; j < aLen; j++) {
                    var pos = imgPos(dataImg[i].album[j].l.w, dataImg[i].album[j].l.h);
                    albumList[j] = "<div class=\"" + (j ? "album_thumb" : "album_thumb select") + "\">"
                                 + "<a><img  data-src=\""+getpicDomain(dataImg[i].album[j].l.s,'s')+"\" /></a>"
                                 + "<span class=\"album_info\" >" + (j + 1 + '/' + aLen) + "</span>"
                                 + "</div>";
                };
                albumCon.html = "<div class=\"album\">"
                              + "<div class=\"album_con\" style=\"width:" + aLen * 70 + "px;\">"
                              + "<div class=\"album_list\" style=\"width:" + aLen * 70 + "px;\">"
                              + albumList.join("") 
                              + "</div>"
                              + "</div>"
                              + "</div>";
                arr[i] = "<div class=\"thumb img_set\" id=\"pn_"+dataImg[i].id+"\"><a class=\"thumb_con\"><img  src=\"" + getpicDomain(dataImg[i].album[0].l.s,'s') + "\" alt=\"" + dataImg[i].album[0].l.t + "\" /></a><span class=\"thumb_info\">" + aLen + "</span>" + albumCon.html + "</div>";
            }
            else {
                
                var pos = imgPos(dataImg[i].l.w, dataImg[i].l.h);
                arr[i] = "<div class=\"thumb\"id=\"pn_"+dataImg[i].l.id+"\"><a class=\"thumb_con\"><img  src=\"" + getpicDomain(dataImg[i].l.s,'s') + "\" alt=\"" + dataImg[i].l.t + "\" /></a></div>";
            }  

        };
            this.listWidth = 1400;
            this.list.html(arr.join("")).width(this.listWidth);
            this.thumbCur = jq(".thumb").eq(index).addClass("on_cur");
            this.thumbMediate(this.thumbCur); 
            this.albumChangeSrc(this.thumbCur);
             function imgPos(imgW, imgH) {
                var scale = imgW / imgH, w, h, l,c = (60 * scale).toFixed(2);
                scale > 0 ? (w = c, h = 60) : (w = 60, h = c);
                return {
                    w: w,
                    h: h,
                    l: -((w - 60) / 2).toFixed(2)
                };
            };  
            return this; 
        },
    createThumb:function (dataImg){
        var albumList =[],albumCon={},arrstr;
        if(this.mode =="album"){
                    for (var j = 0, aLen = dataImg.album.length; j < aLen; j++) {
                    var pos = this.imgPos(dataImg.album[j].l.w, dataImg.album[j].l.h);
                    albumList[j] = "<div class=\"" + (j ? "album_thumb" : "album_thumb select") + "\">"
                                 + "<a><img style=\"width:" + pos.w + "px;height:" + pos.h + "px;margin-left:" + pos.l + "px;\"  data-src=\""+getpicDomain(dataImg.album[j].l.s,'s')+"\" /></a>"
                                 + "<span class=\"album_info\" >" + (j + 1 + '/' + aLen) + "</span>"
                                 + "</div>";
                };
                albumCon.html = "<div class=\"album\">"
                              + "<div class=\"album_con\" style=\"width:" + aLen * 70 + "px;\">"
                              + "<div class=\"album_list\" style=\"width:" + aLen * 70 + "px;\">"
                              + albumList.join("")
                              + "</div>"
                              + "</div>"
                              + "</div>";
                arrstr = "<div class=\"thumb img_set\" id=\"pn_"+dataImg.id+"\"><a class=\"thumb_con\"><img style=\"width:" + pos.w + "px;height:" + pos.h + "px;margin-left:" + pos.l + "px;\" src=\"" + getpicDomain(dataImg.album[0].l.s,'s') + "\" alt=\"" + dataImg.album[0].l.t + "\" /></a><span class=\"thumb_info\">" + aLen + "张</span>" + albumCon.html + "</div>";
            }else if (this.mode ="thumb")
            {
                var pos = this.imgPos(dataImg.l.w, dataImg.l.h);
                arrstr  = "<div id=\"pn_"+dataImg.l.id+"\" class=\"thumb\"><a class=\"thumb_con\"><img alt=\""+dataImg.l.t+"\" src=\""+getpicDomain(dataImg.l.s,'s')+"\"  ></a></div>";
            }
                return arrstr;
            },
    imgPos:function (imgW, imgH) {
                var scale = imgW / imgH, w, h, l,c = (60 * scale).toFixed(2);
                scale > 0 ? (w = c, h = 60) : (w = 60, h = c);
                return {
                    w: w,
                    h: h,
                    l: -((w - 60) / 2).toFixed(2)
                }
            },
    //缩略图点击
    thumbClick: function () {
        var _this = this, curW = _this.list[0].offsetWidth, w,meadiu=10,i,mod;
        this.list.bind("click", function (e) {
            var that = e.target, thumb = jq(that).parents(".thumb"), name = thumb[0].className;
            if (name == "thumb" && name !== "img_set") {//单张点击
                 _this.createBigImg(dataImg[thumb.index()],1);
                if(thumb.index() !=meadiu){
                    if(thumb.index()>meadiu ){
                        mod ='next';
                        var pushlen = thumb.index()-meadiu;
                        for(i=0;i<pushlen;i++)
                        {   
                            if( nextarr.length>0){
                              _this.dataNext();
                            }else{
                                break;
                            }
                        }
                    }

                     if(thumb.index()<meadiu){
                        mod='prev';
                        var pushlen = meadiu-thumb.index();
                        for(i=0;i<pushlen;i++)
                        {
                             if( prearr.length>0){
                              _this.dataPrev();
                            }else{
                                break;
                            } 
                        }
                    }
                    var offlen = (thumb.index()>meadiu) ? thumb.index()-i : thumb.index()+i;
                    _this.createThumbList(dataImg,offlen);
               }else
               {
                _this.thumbActive(thumb, _this.thumbCur, "on_cur");
                _this.thumbMediate(thumb);
                _this.albumIndex = 0;
               }
                
            }
            if (name == "thumb img_set") {//套图展开
                //alert(thumb.index());
                _this.createBigImg(dataImg[thumb.index()].album[0],1);

                if(thumb.index() !=meadiu){
                    if(thumb.index()>meadiu ){
                        mod ='next';
                        var pushlen = thumb.index()-meadiu;
                        for(i=0;i<pushlen;i++)
                        {   
                            if( nextarr.length>0){
                              _this.dataNext();
                            }else{
                                break;
                            }
                        }
                    }

                     if(thumb.index()<meadiu){
                        mod='prev';
                        var pushlen = meadiu-thumb.index();
                        for(i=0;i<pushlen;i++)
                        {
                             if( prearr.length>0){
                              _this.dataPrev();
                            }else{
                                break;
                            } 
                        }
                    }
                    var offlen = (thumb.index()>meadiu) ? thumb.index()-i : thumb.index()+i;
                    _this.createThumbList(dataImg,offlen);
               }else{
                 _this.thumbActive(thumb, _this.thumbCur, "on_cur");
                 _this.thumbMediate(thumb);
                 thumb.find(".album_thumb").eq(0).addClass("select").siblings().removeClass("select");
                 _this.albumScrollSw = true;
                }
            }
            if (name == "thumb img_set on_cur") {//套图点击
                var album = jq(that).parents(".album_thumb"), aList = thumb.find(".album_list");
                if (jq(that).parent().hasClass("album_next")) {
                    _this.bigImgSwitch(true);
                }
                else if ( jq(that).parent().hasClass("album_prev")) {                    
                    _this.bigImgSwitch();
                }
                else {
                    _this.createBigImg(dataImg[thumb.index()].album[album.index()],1);
                    _this.albumMediate(album);
                }
                var info = _this.thumbCur.find('.album_thumb.select').index() + 1;
                jq('.img_div_tag').append('<div class="num">' + info + '/' + _this.thumbCur.find('.album_thumb').length + '</div>');
            }
            return false;
        });        
        return this;
    },
    //缩略图数据向前滚动
    dataPrev:function(){
          var header;
          if(prearr.length>0)
          {
            header = prearr.pop();
            dataImg.unshift(header);
            nextarr.unshift(dataImg.pop());
          }

          return header;
    },
    //缩略图数据向后滚动
    dataNext:function(){
        var tail;
        if(nextarr.length>0){
            tail = nextarr.shift();
            dataImg.push(tail);
            prearr.push(dataImg.shift());  
            if(nextarr.length ==0){
                flashNext();
            }
        }

        return tail;
    },
    thumbMouseScroll: function (obj) {
        var _this = this;
        this.mouseScrollTimer = null;
        com.mouseEvent(obj, function (e) {
            com.stopDefault(e);
            var curLeft = _this.list[0].offsetLeft, val = e.wheelDelta || e.detail, listW = _this.list[0].offsetWidth, left = 0;
            clearTimeout(_this.mouseScrollTimer);
            _this.mouseScrollTimer = setTimeout(function () {
                if (listW < _this.marqueeCon[0].offsetWidth) return;
                if (val == 120 || val == -3) {//向上
                    left = curLeft >= -70 ? 0 : curLeft + 70;
                    _this.thumbBtnState();
                }
                else {//向下                    
                    listW - _this.marqueeCon[0].offsetWidth <= -curLeft + 70 ? (left = _this.marqueeCon[0].offsetWidth - listW, _this.thumbBtnState(true)) : left = curLeft - 70;
                }
                _this.list[0].style.left = left + "px";
            }, 50);
        });
        return this;
    },
    //缩略图 套图 通用居中
    mediate: function (list, con, curObj, endFn) {
        var w = con[0].offsetWidth / 2, listW = list[0].offsetWidth, left = 0,
            curObjWidth = curObj.get(0).offsetWidth;
        if (listW - con[0].offsetWidth < -left) {
            left = w * 2 - listW;
            endFn ? endFn() : null;
        }
        //Fixed 移动后会部分遮挡BUG
        if(picType)
        {
            var distance = Math.ceil(left / curObjWidth) * curObjWidth;
            left = ( distance != 0 ? distance - 20: 60);
        }else{
            left = 60;
        }
        if (listW < con[0].offsetWidth) return;
        else if (curObj.get(0).offsetLeft > w - curObj.get(0).offsetWidth / 2) {
            left = -(curObj[0].offsetLeft - w + curObj[0].offsetWidth / 2);
        }
        if(list.hasClass('album_list')){
            return;
        }
        list.stop(true, true).animate({ "left": left });
    },
    //缩略图居中
    thumbMediate: function (thumb) {
        var _this = this;
        var clName = thumb.attr('class');
        this.list[0].style.width = ((  clName == "thumb img_set") || (clName == "thumb img_set on_cur") ? this.listWidth + 300 : this.listWidth) + "px";
        if(!(clName == "thumb img_set") || (clName == "thumb img_set on_cur")){
            this.list[0].style.left = '60px';
        }
        this.thumbCur = thumb;
        getbigimgcac(thumb.next().find('img').attr('src')); //缓存下一张的大图
        this.mediate(this.list, this.marqueeCon, thumb, function () {
            //_this.createThumbList(dataImg);
            _this.thumbBtnState(true);
        });
        return this;
    },
    //套图更换src
    albumChangeSrc: function (thumb) {
        if (thumb[0].state) return;
        var imgs = thumb.find("img"), imgLen = imgs.length;
        for (var i = 0; i < imgLen; i++) {
            imgs.eq(i).attr("src", imgs.eq(i).attr("data-src"));
        };
        thumb[0].state = true;
        return this;
    },
    //套图点击后居中
    albumMediate: function (album) {
        var list = album.parent(), con = list.parent(), prev = jq(".album_prev");
        this.mediate(list, con, album);
        album.addClass("select").siblings().removeClass("select");
    },
    //缩略图添加选中状态
    thumbActive: function (obj, prevObj, className) {
        prevObj.removeClass(className);
        obj.addClass(className);
        prevObj = obj;
    },
    //缩略图两侧按钮点击
    thumbBtnFn: function () {
        var _this = this;
        this.leftArrow.bind("click", function () {
             _this.bigImgSwitch();
        });
        this.rightArrow.bind("click", function () {
            _this.bigImgSwitch(true);
        });

        return this;
    },
    //缩略图两侧按钮状态
    thumbBtnState: function (boole) {
        boole ? (this.leftArrow.removeClass("not"), this.rightArrow.addClass("not")) : (this.leftArrow.addClass("not"), this.rightArrow.removeClass("not"));
    },
    //套图两侧按钮点击
    albumSwitch: function (list, boole) {
        var _this = this, len = list.find(".album_thumb").length;
        boole ? next() : prev();
        function next() {
            _this.albumIndex++;
            _this.albumIndex == len - 3 ? jq(".album_prev").addClass("not") : jq(".album_prev").removeClass("not");
        };
        function prev() {
            _this.albumIndex <= 1 ? (_this.albumIndex = 0, jq(".album_prev").addClass("not")) : _this.albumIndex--;
        };
        this.albumIndex %= len - 3;
        list.animate({ "left": -this.albumIndex * 70 }, 300);
    },    
    
    //大图生成,并调整位置
    createBigImg: function (imgObj,ski) { 
        //切换 大图停留超过5s显示弹窗
                /* var time = new Date().getTime();
                  var timeExpire = '2016-11-26';
                  var timeExpireOut = new Date(timeExpire).getTime();
                  var num = 1;
                  if (time>timeExpireOut) {
                    num = 0;
                  };
                        if (getCookie('to8to_townid')!=='1130'||getCookie('package_step')||num===0) {  */
                            CommonTenderPop.init({
                                exposurePtag: '1_2_10_939',
                                pricePtag: '1_2_10_940',
                                designPtag: '1_2_10_941',
                                companyPtag: ' 1_2_10_978',
                                materialPtag: '1_2_10_979',
                                priceTitle: '算算该装修风格预算',
                                priceResultTit: '该装修风格预算为：',
                                automatic: true,
                                indexFlag:true,
                                fromPage:'xiaoguotuDetail'
                            });
                      /*  }*/
                
        
        var  cachestr = jq('#imgids').attr('aids');
        var cacheaids = [cachestr];
        if((typeof(cachestr) == 'string')&&(cachestr.indexOf(',')!=-1)){
                 cacheaids = cachestr.split(',');
            }
        this.collectids = cacheaids ; 
        var _this = this,
            imgSrc = getpicDomain(imgObj.l.s),
            imgW = imgObj.l.w,
            imgH = imgObj.l.h,
            imgAlt = imgObj.l.t,
            imgoldaid = imgObj.l.aid,
            imgNick = imgObj.l.n,
            imgcolor_id = imgObj.l.coid,
            imgpartid = imgObj.l.pid,
            imgstyleid = imgObj.l.sid,
            imgzoneid = imgObj.l.zid,
            imga = imgObj.l.a,
            imgHid = imgObj.l.hxid,
            imgG = imgObj.l.resGoods ? (imgObj.l.resGoods.ids || []): [],
            imgoldcid = (imgObj.l.cid !=undefined) ?imgObj.l.cid:'';
            imgSize = this.imgSize(imgW, imgH, this.imgDiv[0].offsetWidth, this.imgBox[0].offsetHeight),
            html = "<a id=\"addWrap\" href=\"http://www.to8to.com/zb/gg.php\" target=\"_blank\" style=\"position:absolute; left:0; top:0; background-color: #f00;display:none; height: 100%; width:100%;z-index:101;\"><img src=\"http://img.to8to.com/to8to_img/xgt/xiaoguotu_gg.jpg?20150911\" width=\"100%\" height=\"100%\"></a><img src=\"" + getpicDomain(imgObj.l.s,'s') + "\" width=\"" + imgSize.w + "px;\" height=\"" + imgSize.h + "px;\" id=\"thumbPic\" />"
                  + "<img src=\"" + imgSrc + "\" id=\"bigImg\" alt=\"" + imgAlt + "\" width=\"" + imgSize.w + "px;\" height=\"" + imgSize.h + "px;\""+ ' data-h="'+imgH+ '" data-oid="'+imgoldaid + '" data-w="'+imgW+"\" data-sid='"+imgstyleid+"' />"
                  + "<div class=\"btn\"></div><div class=\"btn bj\">"
                  +"</div> ";
            if(imgG.length)
            {
                /*var ghtml1 = "<div class='itemlist'>"
                    +"<h3 class='itemlist_tit'>商品推荐<i class='itemlist_ico'></i></h3>"
                    +"<div class='itemlist_box'>"
                    +"<ul class='clear'>";
                var ghtml2='';
                for(var i=0;i<imgG.length;i++){
                    if(imgG[i]){
                        ghtml2 += "<li>"
                            +"<a target='_blank' href='http://mall.to8to.com/temai/"+imgG[i].id+".html' class='shop_top'><img width='44' height='44' src='http://pic.to8to.com/"+imgG[i].item_imgs+"' alt='"+imgG[i].name+"'/></a>"
                            +" <div class='shop_bot'>"
                            +"<a target='_blank' href='http://mall.to8to.com/temai/"+imgG[i].id+".html'>"
                            +"<img width='180' height='180' src='http://pic.to8to.com/"+imgG[i].item_imgs.replace("_64x64M","_188x188M")+"' alt='"+imgG[i].name+"'/>"
                            +"<h3>"+imgG[i].name+"</h3>"
                            +"</a> </div></li>";
                    }
                }

                var ghtml3 = "</ul></div></div>";
                var ghtml = ghtml1+ghtml2+ghtml3;*/
            }
            var ghtml = '<div class="itemlist">' +
                            '<img style="top: 54px;left: 4px;*top:50px" src="http://img.to8to.com/to8to_img/xgt/style_budget_head.png" class="style-budget shake-header">' +
                            '<img src="http://img.to8to.com/to8to_img/xgt/style_budget.png" class="style-budget">' +
                            '<img src="http://img.to8to.com/to8to_img/xgt/pointer.png" class="style-pointer">' +
                        '</div>';

        if(imgNick != '')
        {
            jq("#nick").html(imgNick);
        }
        else
        {
            jq("#nick").html('未知');
        }

        if(jq("#tuche a").html() == '公装效果图')
        {
            jq("#hot_search").remove();
        }
        else
        {
            var biaoqianHtml = "";
            if(imga || imgHid)
            {
                if( CFG['hxid'][imgHid] )
                {
                    var hUrl = "http://xiaoguotu.to8to.com/list-h2s"+imgHid+"i0";
                    biaoqianHtml += "<a class=\"tran\" href="+hUrl+" target=\"_blank\" title="+CFG['hxid'][imgHid]+" rel=\"nofollow\">"+CFG['hxid'][imgHid]+"</a>";

                }

                if(CFG['area'][imga])
                {
                    var aUrl = "http://xiaoguotu.to8to.com/list.php?a1=0&a2=0&a3=&a4=&a5=&a6=&a7=&a8="+imga+"&a9=0";
                    biaoqianHtml += "<a class=\"tran\" href="+aUrl+" target=\"_blank\" title="+CFG['area'][imga]+" rel=\"nofollow\">"+CFG['area'][imga]+"</a>";
                }
            }
            else
            {
                if( CFG['zonetype'][imgzoneid]  )
                {
                    var url = 'http://xiaoguotu.to8to.com/list-h1s'+imgzoneid+'i0';
                    biaoqianHtml += "<a class=\"tran\" href="+url+" target=\"_blank\" title="+CFG['zonetype'][imgzoneid]+" rel=\"nofollow\">"+CFG['zonetype'][imgzoneid]+"</a>";
                }


                if(CFG['partid'][imgpartid])
                {
                    var pUrl = "http://xiaoguotu.to8to.com/list-h3s"+imgpartid+"i0";
                    biaoqianHtml += "<a class=\"tran\" href="+pUrl+" target=\"_blank\" title="+CFG['partid'][imgpartid]+" rel=\"nofollow\">"+CFG['partid'][imgpartid]+"</a>";
                }


            }
            if(CFG['styleid'][imgstyleid])
            {
                var sUrl = "http://xiaoguotu.to8to.com/list-h3s"+imgstyleid+"i0";
                biaoqianHtml += "<a class=\"tran\" href="+sUrl+" target=\"_blank\" title="+CFG['styleid'][imgstyleid]+" rel=\"nofollow\">"+CFG['styleid'][imgstyleid]+"</a>";
            }
            if( CFG['colorid'][imgcolor_id] )
            {
                var cUrl = "http://xiaoguotu.to8to.com/list.php?a1=0&a2=1&a3=&a4=&a5=&a6=&a7="+imgcolor_id+"&a8=&a9=0";
                biaoqianHtml += "<a class=\"tran\" href="+cUrl+" target=\"_blank\" title="+CFG['colorid'][imgcolor_id]+" rel=\"nofollow\">"+CFG['colorid'][imgcolor_id]+"</a>";
            }
            jq(".xg_tag").html(biaoqianHtml);
        }

        this.imgTag.html(html+ghtml);
        this.img = jq("#bigImg");
        this.img[0].onload = function () {
            jq("#thumbPic").remove();
        };
        this.imgTag[0].style.cssText = "width:" + imgSize.w + "px;height:" + imgSize.h + "px;top:" + (this.imgBox[0].offsetHeight - imgSize.h) / 2 + "px;";
        this.imgDefSize.width = imgW;
        this.imgDefSize.height = imgH;
        this.crumbs[0].innerHTML = imgAlt;
        sharetext= imgAlt;
        sharepicurl = imgSrc;
        jq("#org_img").attr({'href':imgSrc,'alt':imgAlt});
        jq('#show_img').attr({'filename':imgSrc, 'width':imgW, 'height':imgH,'oldaid':imgoldaid,'oldcid':imgoldcid,'title':imgAlt});
        if(this.thumbCur !=null)
        {
            document.title = imgAlt+'_土巴免装修效果图';
        }
        //getCv('xgt'+imgoldaid);
        if(window._bd_share_config != undefined){
                window._bd_share_config.common.onBeforeClick();
            }
        
        //加载本图集后两张的大图。如果存在的话
        var thisurl = (picType==1)?'p'+imgoldaid+'.html':'c'+imgoldcid+'.html';
        if(ski ==1)
        {
           historyState.pushState({ pageIndex: 1 }, imgAlt,thisurl); 
        }
        if(_this.collectaid)  
        {
            jq('.wechatapp .boximg').hide();
            _this.collectaid = '';
            clearTimeout(_this.timer2);
            xgtstatus_num = 0;
        }
        return this;
    },
    listPop:function(){ 
        var push,pushhtml;  //前出后进
     
            if(nextarr.length>0){
                this.list.find('.thumb').first().stop(true, true).animate({width:0}).remove();
                push = this.dataNext();
                pushhtml = this.createThumb(push);
                this.list.append(pushhtml);
                if(nextarr.length ==0){
                    flashNext();
                }
            }
    },
    listShift:function(){
        var shift,shifthtml;  
            if(prearr.length>0){
                this.list.find('.thumb').last().stop(true, true).animate({width:0}).remove();
                shift = this.dataPrev();
                shifthtml = this.createThumb(shift);
                this.list.prepend(shifthtml);
            }
    },
    getXgtAdFlag: function() {
        var xgtAdFlag = false;
        
        if(this.mode == "album") {//图册
            xgtAdFlag = !getCookie('xiaoguotuFlagTaoTu') == 1;
        } else {
            xgtAdFlag = !getCookie('xiaoguotuFlag') == 1;
        }


        return xgtAdFlag;
    },
    adSizeControl: function() {
        var wrapHeight = jq('.img_div').height(),
            wrapWidth = jq('.img_div').width(),
            sizeObj = this.imgSize(730, 470, wrapWidth, wrapHeight),
            w = sizeObj.w > 730 ? 730 : sizeObj.w,
            h = sizeObj.h > 470 ? 470 : sizeObj.h,
            top = (wrapHeight - sizeObj.h)/2;
        jq('#addWrap').parent().css({width: w+'px', height: h+'px', top: top+'px'});
    },
    getNotShowAdPicCondition: function(_this, boole) {
        var firstFlag = jq('.thumb.on_cur').length == 0 || jq('#pn_1').hasClass('on_cur');//图册第一张
        var xgtAdFlag = this.getXgtAdFlag();
        var goNextFlag = false;

        if(this.mode == "album") {//套图
            var thumb = jq('.thumb.img_set.on_cur');
            goNextFlag = (thumb.find('.select').index() != thumb.find('.album_thumb').length - 1) || 
                            !jq('#addWrap').is(':hidden') || !boole;
        } else {//单图
            if(boole) {
                _this.AdIdx++; 
            } else if(!firstFlag){
                _this.AdIdx--;
            } else {
               _this.AdIdx = 1; 
            }
            goNextFlag = _this.AdIdx%6 != 0 || _this.AdIdx == 1 || _this.AdIdx == 0 || firstFlag;
        }

        return _this.adTime <= 0 || goNextFlag || !xgtAdFlag;
    },
    //大图切换  滚动切换的同时，也需要把元素给加进去。这时的方式是把头部元素拿掉。尾部再加进一个元素
    bigImgSwitch: function (boole) {
        var _this = this,
            thumb = this.thumbCur,
            wrapObj = jq('#addWrap'),
            recommendObj = jq('.itemlist');

        thumb = boole ? this.thumbCur.next() : this.thumbCur.prev();
        wrapObj.hide();
        recommendObj.show();
        if(this.mode == "album") {
            document.cookie = 'xiaoguotuFlagTaoTu' + '=' + 1;
        } else {
            document.cookie = 'xiaoguotuFlag' + '=' + 1;
        }


        if (this.mode == "album") {//套图
            var album = boole ? this.thumbCur.find(".select").next() : this.thumbCur.find(".select").prev();
            exitAlbum(dataImg[this.thumbCur.index()].album[album.index()],boole);
        }
        else {//单张
                alike(dataImg[thumb.index()],boole);
        }

        if(scanTimes.out()%6 === 0){
            var random_time = Math.floor(Math.random()*10)%3;
            jq('.itemlist').css('background','none');
            jq('.itemlist_a').css({'background':'none'});
            switch(true){
                case random_time === 0:
                // 第一个
                    jq('.itemlist').find('img').eq(0).prop('src','http://img.to8to.com/to8to_img/xgt/style_budget_header_try.png');
                    jq('.itemlist').find('img').eq(0).css({'top':'81px','left':'23px'});
                    jq('.itemlist').find('img').eq(1).prop('src','http://img.to8to.com/to8to_img/xgt/style_budget_try.png');
                    jq('.itemlist').find('img').eq(2).prop('src','http://img.to8to.com/to8to_img/xgt/pointer.png');
                    jq('.itemlist').find('img').eq(2).css({'top':'185px','left':'67px'});
                    jq('.itemlist').prop('data_ptag','1_2_10_1086');
                    jq('.itemlist').find('.style-pointer').prop('data_ptag','1_2_10_1085');
                    if(isIE){
                        jq('.itemlist').find('img').eq(0).css('top','77px');
                    }
                    clickStream.getCvParams('1_2_10_1092');
                break;
                case random_time === 1:
                // 第三个
                    jq('.itemlist').find('img').eq(0).prop('src','http://img.to8to.com/to8to_img/xgt/style_budget_blue_header_try.png');
                    jq('.itemlist').find('img').eq(1).prop('src','http://img.to8to.com/to8to_img/xgt/style_budget_blue_try.png');
                    jq('.itemlist').find('img').eq(2).prop('src','http://img.to8to.com/to8to_img/xgt/pointer_blue_try.png');
                    jq('.itemlist').find('img').eq(0).css({'top':'86px','left':'24px','z-index':'1'});
                    jq('.itemlist').find('img').eq(2).css({'left':'42px','top':'216px'});
                    jq('.itemlist').prop('data_ptag','1_2_10_1082');
                    jq('.itemlist').find('.style-pointer').prop('data_ptag','1_2_10_1081');
                    clickStream.getCvParams('1_2_10_1094');
                    if(isIE){
                        jq('.itemlist').find('img').eq(0).css('top','82px');
                    }
                break;
                case random_time === 2:
                // 第二个
                    jq('.itemlist').find('img').eq(0).prop('src','http://img.to8to.com/to8to_img/xgt/style_budget_orange_header_try.png');
                    jq('.itemlist').find('img').eq(1).prop('src','http://img.to8to.com/to8to_img/xgt/style_budget_orange_try.png');
                    jq('.itemlist').find('img').eq(2).prop('src','http://img.to8to.com/to8to_img/xgt/pointer_orange_try.png');
                    jq('.itemlist').find('img').eq(0).css({'left':'-15px','top':'74px'});
                    jq('.itemlist').find('img').eq(1).css('left','-132px');
                    jq('.itemlist').find('img').eq(2).css({'left':'-48px','top':'140px'});
                    jq('.itemlist').prop('data_ptag','1_2_10_1084');
                    jq('.itemlist').find('.style-pointer').prop('data_ptag','1_2_10_1083');
                    if(isIE){
                        jq('.itemlist').find('img').eq(0).css('top','70px');
                    }
                    clickStream.getCvParams('1_2_10_1093');
                break;
            }
            scanTimes.set(0);
        }else{
            // 原样式
            jq('.itemlist .style-pointer').css({'left':'19px','top':'251px'});
            jq('.itemlist').prop('data_ptag','');
            jq('.itemlist').find('.style-pointer').prop('data_ptag','');
            if(isIE){
                jq('.itemlist').find('img').eq(0).css('top','50px');
            }
            switch(true){
                case getCookie('head_portrait_img')==='0':
                    jq('.itemlist').find('img').eq(1).prop('src','http://img.to8to.com/to8to_img/xgt/style_budget.png');
                    jq('.itemlist').find('img').eq(2).prop('src','http://img.to8to.com/to8to_img/xgt/pointer.png');
                    setCookie('head_portrait_img','1',100000);
                break;
                case getCookie('head_portrait_img')==='1':
                    jq('.itemlist').find('img').eq(1).prop('src','http://img.to8to.com/to8to_img/xgt/style_budget_blue.png');
                    jq('.itemlist').find('img').eq(2).prop('src','http://img.to8to.com/to8to_img/xgt/pointer_blue.png');
                    setCookie('head_portrait_img','2',100000);
                break;
                case getCookie('head_portrait_img')==='2':
                    jq('.itemlist').find('img').eq(1).prop('src','http://img.to8to.com/to8to_img/xgt/style_budget_orange.png');
                    jq('.itemlist').find('img').eq(2).prop('src','http://img.to8to.com/to8to_img/xgt/pointer_orange.png');
                    setCookie('head_portrait_img','0',100000);
                break;
                default:
                    jq('.itemlist').find('img').eq(1).prop('src','http://img.to8to.com/to8to_img/xgt/style_budget_blue.png');
                    jq('.itemlist').find('img').eq(2).prop('src','http://img.to8to.com/to8to_img/xgt/pointer_blue.png');
                    setCookie('head_portrait_img','2',100000);
                break;
            }
        };
        function exitAlbum(data,boole) {
            if (!album.length) {
                //console.log("退出套图", album.length);   
                if(thumb.index() >=0)
                {
                     var datatag =  boole ?0: dataImg[thumb.index()].album.length -1;
                    alike(dataImg[thumb.index()].album[datatag],boole);
                    _this.albumChangeSrc(_this.thumbCur);
                    _this.albumSw = false;
                    _this.albumScrollSw = false;
                }
            }
            else {               
                _this.createBigImg(data,1);
                _this.albumMediate(album);
            }
        };
        function alike(data,flag) {   //第二个参数接收是来自于向前还是，向后滚动 true 表示向后看,
            _this.thumbActive(thumb, _this.thumbCur, "on_cur");
            if(flag &&(thumb.index() ==11) )
            {
                _this.listPop();
            }else if(thumb.index() ==9 ){
                _this.listShift();
            }
            if(data){
            _this.createBigImg(data,1);
            _this.thumbMediate(thumb);
            }
            
        };
    },
    //大图滚动切换  及增加键盘左右滚动切换
    bigImgScroll: function (obj) {
        var _this = this;
        this.bigImgScrollTimer = null;
        com.mouseEvent(obj, function (e) {
            var val = e.wheelDelta || e.detail;
            com.stopDefault(e);
            clearTimeout(_this.bigImgScrollTimer);
            _this.bigImgScrollTimer = setTimeout(function () {
                if (val == 120 || val == -3) {//向上
                    _this.bigImgSwitch(); 
                }
                else {//向下
                    _this.bigImgSwitch(true);

                }
            }, 300);
        });
        document.onkeydown=function(e)
        {
            var e=   arguments[0]|| window.event;
            var key = window.event ? e.keyCode:e.which;
            if(key ==37)
             {
                 _this.bigImgSwitch();
             }
            if(key ==39)
            {
                _this.bigImgSwitch(true);
            }
        }
        return this;
    },
    //图片左右两侧点击处理
    picClick: function () {
        var _this = this;
        this.imgDiv.bind("click", function (e) {
            if (e.target.className == "design" || e.target.className == "collect" || e.target.className == "collect yet" || e.target.className == "style-budget" || e.target.className == "style-pointer"|| e.target.className == "style-budget shake-header") return;
            var e = e || event, disX = e.clientX - 40, imgDivW = _this.imgDiv[0].offsetWidth / 2;
            disX < imgDivW ? _this.bigImgSwitch(false) : _this.bigImgSwitch(true);
            if(_this.mode == "album"){
                var info = _this.thumbCur.find('.album_thumb.select').index() + 1;
                jq('.img_div_tag').append('<div class="num">' + info + '/' + _this.thumbCur.find('.album_thumb').length + '</div>');
            }
        });
        return this;
    },
    //帮我设计 / 收藏
    designCollect: function (obj, event) {
        isXGTClick = false;
        var event = event || window.event;
        com.prevent(event);
        if (jq(obj).hasClass('design')) {
            var popObj = {}
            if (jq(obj).hasClass('tenderpop_tag')) {
                //详情页报价
                popObj = {
                    pricePtag: '1_2_10_993',
                    designPtag: '1_2_10_1007',
                    companyPtag: ' 1_2_10_1008',
                    materialPtag: '1_2_10_1009'
                }
                popObj.showIndex = 0;
            } else {
                //详情页设计
                popObj = {
                    pricePtag: '1_2_10_1006',
                    designPtag: '1_2_10_992',
                    companyPtag: ' 1_2_3_982',
                    materialPtag: '1_2_3_983'
                }
                popObj.showIndex = 1;
            };
            popObj.exposurePtag = '';
            popObj.priceTitle= '算算该装修风格预算';
            popObj.priceResultTit= '该装修风格预算为：';
            popObj.automatic= false
            CommonTenderPop.init(popObj);
            setCookie('xgtpop_flag', '1',1000000000000);

        } else if(obj.className == 'bg_filter2') {
            var str = '<p style="text-align:center;margin-top: 24px; margin-bottom: 40px; font-size: 14px;">您已收藏过该图片, 请勿重复收藏！</p>';
            jq('.window_box').windowBox({
                width:480,    //弹框宽度
                title:"收藏", //标题
                wbcStr:str,  //可编辑内容
                cancleBtn:false,    //是否显示取消按钮
                confirmBtn:false  // 是否显示确认按钮
            });
            
        } else {
            var picNum = jq('.on_cur').find('.thumb_info').html();
            collectionImageId = jq(obj).parents('.img_div_tag').find('img').attr('data-oid');
            openCollectionBox(picNum);  
        }
        
    },
    
    getnewcode:function () {
        var _this = this;
        var weixin_code = '';
        var oldaid   = 'p'+jq('#show_img').attr("oldaid");
        _this.collectaid = oldaid;
        // 表示请求二维码数据的进度动画
        // jq(".wechatapp .boximg .img").html("<img id='xgtweixin_img' src='http://img.to8to.com/to8to_img/icon/loading.gif?v=20150113'/>");
        // jq(".wechatapp .boximg .img").html("<img width='174' src='http://img.to8to.com/to8to_img/xgt/anotherWeChatCollect.png'/>");
        var str = "<img height='174' height='174' src='http://img.to8to.com/to8to_img/xgt/wexinqcode.png'/>"
        jq(".wechatapp .boximg .img").html(str);
        clickStream.getCvParams('1_2_2_17');
        /*jq.ajax({
            async:true, 
            type:"GET",      
            dataType: 'jsonp',    
            url:"http://www.to8to.com/api/weixin/run.php",  //    这个是获取二维码的接口
            //    type=3表示获取装修效果图的类型，里面的其他参数是不需要更改    
            data:{action:'createQrcode',cookie_id:'test',data:oldaid,type:3}, 
            success:function(res){
                if(res.code==0)
                {
                    //    这是拿到二维码的之后，页面做出的一个效果
                    setCookie('qrcode_id',res.qrcode_id,90);
                    //    下面去不断去刷新获取二维码状态值
                    
                    zb_getwxstatus(res.qrcode_id);
                }
                else
                {
                    alert(res.msg); 
                }        
            }               
        });*/
    }

  
};
window.Pic = new Picture();

var historyState = {
    checkCanPush: function () {
        if (window.history.pushState)
            return true;
        return false;
    },
    pushState: function (data,url,title) {
        if (historyState.checkCanPush()) {
            window.history.pushState(data, url, title);
            return true;
        }
        return false;
    }
}
var hidetag = 1;//标示弹窗是否关闭
jq('#a_more').mouseover(function(){
    jq('#xiaoguotu_more').show();
    hidetag = 0;
}).mouseout(function(){
    hidetag = 1;
    setTimeout("hideornot();",300);
});
jq('#xiaoguotu_more').mouseover(function(){
    jq(this).show(); hidetag =0;
});
jq('#xiaoguotu_more').mouseout(function(){
    jq(this).hide(); hidetag =1;
});
function hideornot(){
    if(hidetag == 1){jq('#xiaoguotu_more').hide();}
} 

//图片预加载函数

function getbigimgcac(surl){
    if((surl !=undefined) && (surl !='')){
     var burl = sc_img_load(surl) ; 
     imgReady( burl,function(){}) ;
    }
}

function sc_img_load(source_src){
    var img_url = source_src.replace(/smallcase/ig,'case');
    img_url = img_url.replace( /_s./ig ,'.');
    img_url = getbigPic(img_url);
    return img_url;
};


function getpicDomain( filename ,type){
    var num =1,fileText,filetype;
    if(filename)
    {
        if(filename&&filename.search(/c/i)!=-1)
        {
            num = 2;
        }
        var domain = "http://pic"+num+".to8to.com/case";
        if(type =='s')
        {
            if(filename.indexOf('day') ==-1)
            {
                domain = domain.replace('case','smallcase');
            }
            filename = filename.replace('.','_s.');
        }else
        {
            filename  =  getbigPic(filename);
        }
        return domain+'/'+filename;
    }

}
jq("#tuche").hover(function() {
   jq(this).find('ul').show();
}, function() {
   jq(this).find('ul').hide();
});






function getbigPic(filename)
{
    var fileText,filetype;
    if(filename)
        {
            fileText = filename.substring(filename.lastIndexOf("."),filename.length);
            filetype = fileText.toLowerCase();
            if(jq.inArray(filetype , ['.jpg','png']) !=-1)
            {
                filename =filename.substr(0,(filename.length-10))+'l1'+filename.substr(filename.length-8);
                //alert(filename)
                filename = filename.replace(/.(jpg|png)$/,"_sp\.$1");
            }
        }
     return  filename;
}
function checkBrowser(){
   var u = window.navigator.userAgent.toLocaleLowerCase(),
            msie = /(msie) ([\d.]+)/,
            chrome = /(chrome)\/([\d.]+)/,
            firefox = /(firefox)\/([\d.]+)/,
            safari = /(safari)\/([\d.]+)/,
            opera = /(opera)\/([\d.]+)/,
            ie11 = /(trident)\/([\d.]+)/,
            b = u.match(msie)||u.match(chrome)||u.match(firefox)||u.match(safari)||u.match(opera)||u.match(ie11);
    return {name: b[1], version: parseInt(b[2])};

}

function checkHover(e, target) {  
    if (getEvent(e).type == "mouseover") {  
        return !contains(target, getEvent(e).relatedTarget  
                || getEvent(e).fromElement)  
                && !((getEvent(e).relatedTarget || getEvent(e).fromElement) === target);  
    } else {  
        return !contains(target, getEvent(e).relatedTarget  
                || getEvent(e).toElement)  
                && !((getEvent(e).relatedTarget || getEvent(e).toElement) === target);  
    }  
}  
  
function contains(parentNode, childNode) {  
    if (parentNode.contains) {  
        return parentNode != childNode && parentNode.contains(childNode);  
    } else {  
        return !!(parentNode.compareDocumentPosition(childNode) & 16);  
    }  
}  
function getEvent(e) {  
    return e || window.event;  
}  


jq(".wechatapp .collect").hover(function(){
    if('p'+jq('#show_img').attr("oldaid") !== Pic.collectaid)
    {
        Pic.getnewcode();
    }
    jq('.wechatapp .boximg').show();
    if(getCookie('wechatcollect')!=='wechatcollect'){
        clickStream.getCvParams("1_2_10_1087");
        setCookie('wechatcollect','wechatcollect',90);
    }
   }
  )
jq('.wechatapp .closeimg').on('click',function(){
    jq('.wechatapp .boximg').hide();  
})
jq(".wechatapp .finework-share").hover(function(){
    if(getCookie('wechatshare')!=='wechatshare'){
        clickStream.getCvParams("1_2_10_1088");
        setCookie('wechatshare','wechatshare',90);
    }
});



//效果图详情页获取相关图片
function getRecommendPic(parseurl,pid,type)
        {
            type = (type != 1) ? 0 : 1;
          var recdata,wh =jq("#show_img").attr('data-where');
          var where = (wh==undefined) ?'':wh;
          jq.ajax({
            url:'getxgtjson.php',
            async:false,
            data:"a2="+type+"&a12="+where+"&a11="+pid+'&'+parseurl,
            dataType:'json',
            success: function(data){
                //alert(data);exit;
              recdata = data;
              jq("#show_img").attr('data-where',data.where);
          } })
          return recdata;
        }
/**************************效果图详情页发送图片到手机****************************/

function zb_getwxstatus( zb_qrcode_id)
{
    var _this = this;
    _this.timer2 = setTimeout(function ()
    {
        zb_getwxstatus(zb_qrcode_id);
    },10000);
    xgtstatus_request = jq.ajax({
        async:true,
        type:"GET",
        dataType: 'jsonp',
        url:"http://www.to8to.com/api/weixin/run.php",
        /*下面是通过qrcode_id 去查库获取二维码的状态值*/
        data:{action:'getScanState',cookie_id:'test',qrcode_id:zb_qrcode_id},
        timeout:15000,     //ajax请求超时时间15秒
        success:function(res,textStatus){

            if(res.code=="405"){
                if(xgtstatus_num<20)//没有获取到二维码允许最大次数请求20次
                {
                    xgtstatus_num++;
                }
                else
                {
                    clearTimeout(_this.timer2);
                    _this.timer2 = '';
                    xgtstatus_num = 0;
                }
            }
            if(res.code=="0"){
                /*这里是二维码被扫，扫面之后二维码失效，显示的内容*/
                jq("#code_message").hide();
                jq("#status_success").show();

                var width,height,filename,title,oldaid,cid=0;
                width    = jq('#show_img').attr("width");
                height   = jq('#show_img').attr("height");
                title    = jq('#show_img').attr("title");
                filename = jq('#show_img').attr("filename");
                oldaid   = jq('#show_img').attr("oldaid");
                clearTimeout(_this.timer2);
                _this.timer2 = '';
                jq('.wechatapp .boximg').hide();
                xgtstatus_num = 0;

                jq.ajax({
                    async:true,
                    type:"GET",
                    dataType: 'jsonp',
                    url:"http://m.to8to.com/Collect/InsertImage/",
                    data:{openid:res.user.openid,unionID:res.user.unionID,qrcode_id:zb_qrcode_id,aid:oldaid,filename:filename,title:title,width:width,height:height,cid:cid},
                    /*data:{weixin_act:'weixin_banding',yid:yid,open_id:res.user.openid,unionID:res.user.unionID,header_url:res.user.pic_header_url,user_name:res.user.nickname,qrcode_id:zb_qrcode_id}, */
                    success:function(data)
                    {
                        if(data.code=="0")
                        {
                            alert(data.msg);
                        }
                    }
                });
            }

        },
        error:function(XMLHttpRequest,textStatus,errorThrown){
            if(textStatus=="timeout"){
                if(status_num<200)//一分钟
                {
                    xgtstatus_num++;
                }
            }
        }
    });
}


jq(".wechatapp .phone").click(function(){
    var _tag = jq(this).attr('data_ptag');
    if (_tag) {
        try {
            clickStream.getCvParams(_tag);
        } catch (e) {
        }
    }
    //判断cookie是否存在
    var mg = getXgtCookie("to8to_mg");
    if(mg)
    {
        var oldaid   = 'p'+jq('#show_img').attr("oldaid");
        var html = "<span class='img' style='height:150px;display:block;background:url(http://img.to8to.com/to8to_img/icon/loading.gif?v=20150113) no-repeat center ;'><img id='xgtweixin_image' style='display: block;margin: 30px auto 0' src='' /></span>";
        jq('.window_box').windowBox({
            width:480,    //弹框宽度
            height:298,
            title:'<i class="ico_tip_warn_green_s"></i><label>微信扫一扫，美图随时看</label>',  //标题
            wbcStr:html,  //可编辑内容
            cancleBtn:false,    //是否显示取消按钮
            confirmBtn:false
        });
        jq.ajax({
            async:true,
            type:"GET",
            dataType: 'jsonp',
            url:"http://www.to8to.com/api/weixin/run.php",  /*这个是获取二维码的接口*/
            data:{action:'createQrcode',cookie_id:'test',data:oldaid,type:3},
            success:function(res){
                if(res.code==0)
                {
                    /*这是拿到二维码的之后，页面做出的一个效果*/
                    jq("#xgtweixin_image").attr("src",res.url).attr("height","174px");
                    setCookie('qrcode_id',res.qrcode_id,90);
                    clickStream.getCvParams('1_2_2_17');
                    /*下面去不断去刷新获取二维码状态值*/
                    zb_getwxstatus(res.qrcode_id);


                }
                else
                {
                    alert(res.msg);
                }
            }
        });

    }
    else
    {
        var nowImgsrc = jq('#bigImg').attr('src');
        var str = '<div class="sendimg-to-phone clear">' +
                        '<div class="sending-init">' +
                            '<div class="tophone-top">' +
                                '<em>' +
                                '</em>' +
                                '<div class="thisImg">' +
                                    '<img src='+nowImgsrc+' alt="您要发送的图片">' +
                                '</div>' +
                            '</div>' +
                            '<div class="tophone-down">' +
                                    '<label for="imgtophone" class="fbc_name">输入手机号，将效果图发送到手机</label for="">' +
                                    '<input type="text" class="fq_text" name="chkPhone" id="imgtophone">' +
                                    '<input type="submit" value="立即发送" class="fq_btn phone">' +
                                    '<p class="fq_description">*为了您的隐私和我们的口碑，您的信息会被严格保密</p>' +
                            '</div>' +
                        '</div>' +
                        '<div class="sending-result dn">' +
                            '<i></i>' +
                        '</div>' +
                    '</div>';
        jq('.window_box').windowBox({
            width:480,    //弹框宽度
            height:360,   //弹框高度
            title:'',  //标题
            wbcStr:str,  //可编辑内容
            cancleBtn:false,    //是否显示取消按钮
            confirmBtn:false
        });
        jq('.window_box').css({'border-radius':'0',
                               '-o-border-radius':'0',
                               '-webkit-border-radius':'0',
                               '-moz-border-radius':'0'});
        jq('.window_box').find('.window_box_container').css('margin-top','0');
        jq('.window_box').find('.window_box_title').find('a').css('z-index','1');
        jq('.freeOffer_box_content .passport').click(function() {
            newverifypicMy(this);
        }).trigger('click');
        jq("#imgtophone").keyup(function(){
            if(jq(this).val().length>0){
              jq(this).prev('label').addClass('dn');
            }
        });
        jq("#imgtophone").blur(function(){
            if(jq(this).val().length==0){
              jq(this).prev('label').removeClass('dn');
            }else{
              jq(this).prev('label').addClass('dn');
            }
        });
        jq('.tophone-down .phone').click(function() {
            clickStream.getCvParams("1_2_2_50");
            var ptag = "1_2_2_50";
            //百度统计函数
            try{
                _hmt && _hmt.push(['_trackEvent', 'zb', 'submit', ptag]);
            }catch(e){

            }
            var info = {modeltype:5,autoPop:2};
            info.onFirstStepEnd = function() {
                jq('.sending-init').hide();
                jq('.sending-result').show();
            }
            if(checkPhone()){
                //验证成功，获取图片路径和手机号码。
                    info.phone = jq(".tophone-down").find(':text[name="chkPhone"]').val();
                    info.oldaid = jq("#bigImg").attr("data-oid");
                    info.type = (picType==1?"p":"c");
                    info.ptag = '1_2_2_50';
                    info.nowstep = 1;
                    info.not_send_mobile_msg = 1;
                var xgtStart = new tender();
                xgtStart.init(info);

                // jq.ajax({
                //     type: "POST",
                //     url: "sendPhoneMessage.php",
                //     data: info,
                //     success: function(result) {
                //         var res = eval("(" + result + ")")
                //         if(res.status==1){
                //             window_box_close();
                //             setXgtCookie("to8to_mg",info.phone,7*24*3600*1000, 'xiaoguotu.to8to.com');
                //             var str = '<div class="div_two">\
                //                    <div class="two_div" style=" padding-left:50px;">\
                //                          <p class="p1">恭喜您发送成功 !</p>\
                //                        <p class="p2">短信已发送，土巴兔-互联网装修领导者，感谢您的使用。</p>\
                //                    </div>\
                //             </div>'
                //             jq('.window_box').windowBox({
                //                 width:480,    //弹框宽度
                //                 height:220,
                //                 title: '', //标题
                //                 wbcStr:str,  //可编辑内容
                //                 cancleBtn:false,    //是否显示取消按钮
                //                 confirmBtn:false
                //             });
                //         }else if(res.status==0){
                //             window_box_close();
                //             var str = '<div class="freeQuote_box_content freeOffer_box_content clear">\
                //                  <div class="div_one">\
                //                     <div class="one_div">\
                //                         <p class="p2">'+res.msg+'</p>\
                //                     </div>\
                //                 </div></div> '
                //             jq('.window_box').windowBox({
                //                 width:480,    //弹框宽度
                //                 height:150,
                //                 title:' <p class="p1">发送失败 !</p>',  //标题
                //                 wbcStr:str,  //可编辑内容
                //                 cancleBtn:false,    //是否显示取消按钮
                //                 confirmBtn:false
                //             });
                //         }else{
                //             alert("验证码错误!");
                //             jq(".freeOffer_box_content").find(':text[name="chkYzm"]').focus();
                //         }
                //     }
                // })
            }
        });
    }

})
/***************************************end**************************************************************/
function newverifypicMy(id) {
    var id = id || 'passport',
        str = window.location.href.toString().split('.')[0].replace('http://', "") || 'www',
        A = new Date().getTime();
    if ($(id)) {
        $(id).src = 'http://'+str+'.to8to.com/passport.php?t=' + A;
    };
};

function checkPhone() {
    var wrapStep2 = jq('.tophone-down'),
        phone = wrapStep2.find(':text[name="chkPhone"]');
    var chkArr = [{
        id: phone[0],
        parentTip: wrapStep2[0],
        info: [{
            reg: [0],
            tip: '请输入手机号码'
        },{
            reg: [/^1{1}[34578]{1}\d{9}$/],
            tip: '请输入正确的手机号码'
        }]
    }];
    return simplifyCheck2(chkArr);
}
function getpram(str, key) {
    var p1 = str.split('?')[1];
    var p2 = p1 && p1.split('&') || [];
    var hash = {};

    for(var i =0, len = p2.length; i < len; i++) {
        var tmp = p2[i].split('=');
        // console.log(tmp)
        hash[tmp[0]] = tmp[1];
    }

    return hash[key];
}
//getpram(str, 'a4')

function setXgtCookie(name, value, expire)
{
    if (!expire){
        expire = 5000;
    };
    var expiry = new Date();
    expiry.setTime(expiry.getTime() + expire);
    document.cookie = name + '=' + value + ';expires=' + expiry.toGMTString() + ';path=/;';
};
function getXgtCookie(name)
{
    var r = new RegExp("(\\b)" + name + "=([^;]*)(;|$)");
    var m = document.cookie.match(r);
    var res = !m ? "": decodeURIComponent(m[2]);
    var result = stripscript(res);
    return result;

};
var CFG = new Array();//'zonetype','styleid','colorid','partid'
CFG['zonetype'] = {'1':'客厅','2':'卧室','3':'餐厅','4':'厨房','5':'卫生间','6':'阳台','7':'书房','8':'玄关','10':'儿童房','11':'衣帽间','12':'花园'};
CFG['styleid']  = {'13':'简约','15':'现代','4':'中式','2':'欧式','9':'美式','11':'田园','6':'新古典','0':'混搭','12':'地中海','8':'东南亚','17':'日式','18':'宜家','19':'北欧','20':'简欧'};
CFG['colorid']  = {'1':'白色','2':'黑色','3':'红色','4':'黑色','5':'绿色','6':'橙色','7':'粉色','8':'蓝色','9':'灰色','10':'紫色','11':'棕色','12':'米色','13':'彩色','14':'原木色'};
CFG['partid']   = {'336':'背景墙','16':'吊顶','14':'隔断','9':'窗帘','340':'飘窗','33':'榻榻米','17':'橱柜','343':'博古架','333':'阁楼','249':'隐形门','21':'吧台','22':'酒柜','23':'鞋柜','24':'衣柜','19':'窗户','20':'相片墙','18':'楼梯','359':'其他'};
CFG['area']     = {'1':'60㎡以下','2':'60-80㎡','3':'80-100㎡','4':'100-120㎡','5':'120-150㎡','6':'150㎡以上'};
CFG['hxid']     = {'1':'小户型','7':'一居','2':'二居','3':'三居','4':'四居','5':'复式','6':'别墅','8':'公寓','9':'loft'}
/* 1=>'小户型',
 7=>'一居',
 2=>'二居',
 3=>'三居',
 4=>'四居',
 5=>'复式',
 6=>'别墅',
 8=>'公寓',
 9=>'loft',*/

 /*效果图停留提示*/

jq(function(){
    window.isXGTClick = true;
    jq(document).on('click', '.btn', function(){
        isXGTClick = false;
    })
    jq('.apply_form').on('click', function(){
        isXGTClick = false;
    })
    var xgtRemDOM = '<div class="xgt-remind-pop">'+
                        '<div class="xgt-remind-con">'+
                            '<h3>装修效果很美</h3>'+
                            '<p>别忘了算账哦 ~</p>'+
                            '<a href="javascript: void(0)"></a>'
                        '</div>'
                    '</div>';
    var isRemind = getCookie('xgt_remind', 1);
    if (!isRemind && isXGTClick) {
        setTimeout(function(){
            jq('.img_content').append(xgtRemDOM);
            setCookie('to8to_xgt_remind', '1', 31536000000);
            jq('.xgt-remind-con a').on('click', function(){
                jq('.xgt-remind-pop').remove();
            })
        }, 20000)
    };
})
jq('.crumbs').children().eq(0).on('mouseenter',function(){
    if(getCookie('breadnavigate') !== '1'){
        clickStream.getCvParams('1_2_10_1091');
        setCookie('breadnavigate','1',90);
    }
});
jq('.crumbs').children().eq(1).on('mouseenter',function(){
    if(getCookie('breadnavigate') !== '1'){
        clickStream.getCvParams('1_2_10_1091');
        setCookie('breadnavigate','1',90);
    }
});
jq('.htr_login').on('click',function(){
    clickStream.getCvParams('1_2_10_1089');
});
jq('.htr_reg').on('click',function(){
    clickStream.getCvParams('1_2_10_1090');
});