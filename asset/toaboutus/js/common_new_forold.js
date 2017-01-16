// JavaScript Document 2015-07-20 02:46:38
if (typeof console == "undefined") {
    this.console = { log: function (msg) { alert(msg); } };
}
//头部底部初始化
!(function(){
    var a  = {
		init:function(){
			hfDocReady();//header and footer docReadyFunction
		}
	};
    window.onceptag = {
        ptagArr:[]
    }
	window.searchtage = '';
	window.searchclicktage = '';
		var tcode = getCookie("tcode",true);
			tcode = tcode?tcode:'sz',
             searchput='keyword', sHref='',sText=''
			tRight = 0;
	function initsearch(sName)
		{
		   sName = jq.trim(sName);
		   switch(sName)
		   {
				case '效果图': 

				   searchclicktage='1_8_2_1'; 
                   sHref= 'http://xiaoguotu.to8to.com/search.php';
                   sText ='海量精美效果图任你选'; 
                   tRight = 70;
                break;   
				case '装修公司':
	
				   searchclicktage='1_8_2_2';
				   sHref= "http://"+tcode+".to8to.com/company/";
				   sText ='挑选您心仪的装修公司';
				   tRight = 58;
				break;   
				case '小区':
	
				    searchclicktage='1_8_2_3';
				    sHref=  "http://"+tcode+".to8to.com/zwj/";
				    sText ='找找您家小区的装修案例';
				    tRight = 82;
				    break;   
				case '文章': 
				    searchclicktage='1_8_2_4';
				    sHref= 'http://www.to8to.com/yezhu/xzx_search.php';
					sText ='了解装修相关的资讯知识';
					tRight = 82;
					break;   
				case '问答': 
		
					searchclicktage='1_8_2_5';    
					sHref= 'http://www.to8to.com/ask/search.php';
					sText ='解决您的装修疑问';
					tRight = 82;
					break;   
				case '家居建材': 
			
					searchclicktage='1_8_2_6';
					sHref= 'http://mall.to8to.com/search';
					sText ='挑选优质家居建材'; 
					tRight = 58;
					break;    
		   }
		
        
		   jq('.header_search_input_text').attr('v',tRight).css("right",''+tRight+'px');
		   if(sName=='全站'||sName=='文章' || sName=='小区')
		   {
		   		searchput ='keyword_zh';
		   }
		   else
		   {
		   	  searchput='keyword';
		   }
		    jq('.header_search_input').attr('name',searchput);
		    jq('#searchform').attr('action',sHref);
		    jq('.header_search_input_text').html(sText);
		}
	
	function hfDocReady(){
		
		var doc = {};
		doc.hs = jq('.header_select');
		doc.si =  jq('.header_search_input');
		doc.si.val("");
		doc.hs.bind('mouseenter', function(){
		  jq(this).addClass('on');
		  jq(this).find('ul').show();
		});
		doc.hs.bind('mouseleave', function(){
		  jq(this).removeClass('on');
		  jq(this).find('ul').hide();
		});
		var currentTxt = doc.hs .find('a >span>em').text();
		initsearch(currentTxt);
		doc.hs.find('ul > li').bind("click", function(){
		  var sName = jq(this).find('a').text(),
				  siWidth = doc.si.width();
				  hsWidth = jq('.header_select').width();
		   jq('.header_select_sort').find('span > em').text(sName);
		   initsearch(sName);
		   try{clickStream.getCvParams(searchclicktage);}catch(e){}
		   newHsWidth = jq('.header_select').width();
		   doc.si.width(siWidth - (newHsWidth-hsWidth));
		   var rm = jq('.header_search_input_text').attr('v');
		   if(rm == undefined) rm = tRight;
		   var rightMargin = rm-(newHsWidth-hsWidth);
		   jq('.header_search_input_text').css('right', ''+rightMargin+'px').attr('v',''+rightMargin+'');
		   jq(this).parent().hide();
		   doc.si.focus();
		});
		jq('.header_search_input_text').bind("click", function(){
		  doc.si.focus();
		});
		doc.si.bind("keydown", function(){
		  jq('.header_search_input_text').hide();
		});
		doc.si.blur(function(){
		  if(jq(this).val() =="" )  jq('.header_search_input_text').show();
		});
		jq('.header_menu >ul > li').bind("mouseenter", function(){
		  jq(this).addClass('menu_hover');
		});
		jq('.header_menu >ul > li').bind("mouseleave", function(){
		  jq(this).removeClass('menu_hover');
		});
		jq('#searchform').bind('submit',function(){
            var searchtage=jq('.header_search_submit').attr('searchtage');
            if(searchtage)
            {
                try{clickStream.getCvParams(searchtage);clickStream.sendPv();}catch(e){} 
            }
            if(jq('.header_search_input').val()==""){
               jq('.header_search_input').focus();
               return false;
             }else{
               return true;
             }
        });
		doc.ftc = jq('.footer_top_container');
		doc.ftc.li =  doc.ftc.find('div.ftc_left > ul > li');
		doc.ftc.li.bind("click", function(){
		  doc.ftc.li.removeClass('on');
		  jq(this).addClass('on');
		  var n = doc.ftc.li.index(jq(this));
		  jq('.ftclt_content').removeClass('on');
		  jq('.ftclt_content').eq(n).addClass('on');
		});
		jq('.pop_wechat').bind("mouseenter", function(){
		  jq(this).find('div.wechat_bg').show();
		});
		jq('.pop_wechat').bind("mouseleave", function(){
		  jq(this).find('div.wechat_bg').hide();
		});
		jq('.q_code').bind("mouseenter",function(){
		  jq(this).find('div.q_code_layer').show();
		  clickStream.getCvParams('1_7_1_1');
          if(onceptag.ptagArr.join().indexOf('1_1_1_1238') === -1){
            clickStream.getCvParams('1_1_1_1238');
            onceptag.ptagArr.push('1_1_1_1238');
          }
		});
		jq('.q_code').bind("mouseleave",function(){
		  jq(this).find('div.q_code_layer').hide();
		});
		jq('.header_bottom > .header_menu > ul > li.has_homeIcon').mouseenter(function(){
		  jq(this).find('em').show();
		});
		jq('.header_bottom > .header_menu > ul > li.has_homeIcon').mouseleave(function(){
		  jq(this).find('em').hide();
		});
		jq('.header_bottom').on('click', 'a', function(){
            var ptag = jq(this).attr('searchtage');
            try{ptag && clickStream.getCvParams(ptag);}catch(e){}
        });
        jq('.gpm_name').mouseenter(function(){
          jq('.gpm_content').show();
        });
        jq('.gpm_content').mouseleave(function(){
          jq(this).hide();
        });
        // 二维码点击流
        // 顶部
        jq('.q_code_applnk').one('click',function(){
            if(location.href.indexOf('xiaoguotu')>-1){
                clickStream.getCvParams('1_7_17_1244');
            }else{
                clickStream.getCvParams('1_7_17_1243');
            }
        });
        jq('.qcode_lnk').eq(0).one('click',function(){
            if(location.href.indexOf('xiaoguotu')>-1){
                clickStream.getCvParams('1_2_5_1237');
            }else{
                clickStream.getCvParams('1_1_1_1236');
            }
        });
	};
	window.headerFooter = a;
	
})(jQuery);
//占位符处理
(function(jq) {
    jq.fn.placeholder = function(settings) {
        var defaults = {
            oLabel: 'em',
            derc: 'next',
            eType: 'keydown'
        };

        var settings = jq.fn.extend({}, defaults, settings);
        if(!(settings.derc == 'next'&&jq(this).next(settings.oLabel).is(':hidden') || settings.derc != 'next'&&jq(this).prev(settings.oLabel).is(':hidden'))) {//占位符隐藏时不清空
            jq(this).val('');
        } 
        
        jq(this).bind(settings.eType + ' input', function() {
            var derc = settings.derc,
                labl = settings.oLabel;
            if(derc == 'next') {
                jq(this).next(labl).hide();
            } else {
                jq(this).prev(labl).hide();
            }
        });

        jq(this).bind('blur', function() {
            var val = jq(this).val(),
                derc = settings.derc,
                labl = settings.oLabel;
            if(val == '') {
                if(derc == 'next') {
                    jq(this).next(labl).show();
                } else {
                    jq(this).prev(labl).show();
                }
            }
        });

        if(settings.derc == 'next') {
            jq(this).next(settings.oLabel).bind('click', function() {
                jq(this).prev().focus();
            });
        } else {
            jq(this).prev(settings.oLabel).bind('click', function() {
                jq(this).next().focus();
            });
        }
    };
})(jQuery);
//window_box  弹窗
!function(){
    jq.fn.windowBox = function(settings){
        settings=jq.extend({},jq.windowBox.defaults,settings);

        var box = {};
        box.fn = {};
        box.fn.con =  jq('.window_box');
        box.fn.con.length = box.fn.con.length;
        if(box.fn.con.length == 1)
            return false;
        box.fn.windowType = checkBrowser();
        box.fn.wHeight = document.documentElement.clientHeight;

        box.fn.wWidth = document.documentElement.clientWidth;
        box.fn.wScrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
        box.fn.wbcStr =  settings.wbcStr;
        box.fn.title = settings.title;
        box.fn.littleTitle = settings.littleTitle;
        if(settings.width!="auto"){
            box.fn.left = (box.fn.wWidth - settings.width)/2;
            box.fn.width = settings.width;
        }else{
            box.fn.width = box.fn.con .width();
            box.fn.left = (box.fn.wWidth -  box.fn.width)/2;
        };
        if(settings.height!="auto"){
            box.fn.top = box.fn.wScrollHeight+((box.fn.wHeight-settings.height)/2);
            box.fn.height = settings.height;
        }else{
            box.fn.height = null;
            box.fn.top = box.fn.wScrollHeight+((box.fn.wHeight-box.fn.height)/2);
        };
        box.fn.style = {
            l:box.fn.left,
            t:box.fn.top,
            w:box.fn.width,
            h:box.fn.height
        };

        if(settings.cancleBtn && settings.confirmBtn){
            box.fn.btn = '<div class="window_box_btn"><input onclick=saveCollection() type="button" value="保存" class="window_box_btn_save"><input onclick=window_box_close(this) type="button" value="取消"   class="window_box_btn_cancle"></div>';
        }else if(settings.cancleBtn && !settings.confirmBtn){
            box.fn.btn = '<div class="window_box_btn"><input onclick=window_box_close(this) type="button" value="取消"  class="window_box_btn_cancle"></div>';
        }else if(!settings.cancleBtn && settings.confirmBtn){
            box.fn.btn = '<div class="window_box_btn"><input onclick=saveCollection() type="button" value="保存" class="window_box_btn_save"></div>';
        }else{
            box.fn.btn = '';
        };

        box.fn.confirmStr = '<div class="window_box " style="left:'+box.fn.style.l+'px; top:'+box.fn.style.t+'px;position:absolute; z-index:9999; height:'+box.fn.style.h+'px; width:'+box.fn.style.w+'px;overflow:hidden"><div class="window_box_title" style="display:'+settings.showTitle+'"><span>'+box.fn.title+'</span><em>'+box.fn.littleTitle+'</em><a href="javascript:void(0)" class="window_box_close" onClick="javascript:'+settings.closeFn+'(this)"></a></div><div class="window_box_container '+settings.moreClass+'">'+box.fn.wbcStr+''+box.fn.btn+'</div></div><div class="translucence_layer" style="_height:'+box.fn.wHeight+'px; "><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;filter:alpha(opacity=0);"></iframe></div>';
        var bType = checkBrowser();
        jq('body').append(box.fn.confirmStr);
        if(box.fn.height == null){
            box.fn.height = jq('.window_box').height();
            box.fn.top = box.fn.wScrollHeight+((box.fn.wHeight-box.fn.height)/2);
            jq('.window_box').css({
                "height": "auto",
                "top":box.fn.top
            });

        };
        if(jq('.window_box').height()  > box.fn.wHeight) {
            box.fn.top = box.fn.wScrollHeight;
            var wbcHeight = box.fn.wHeight -jq('.window_box_title').height(),
                wbcStyle = 'overflow-y:scroll; height:'+wbcHeight+'px';
            jq('.window_box_container').attr('style', wbcStyle);
            jq('.window_box').css('top',''+box.fn.top+'px');

        };
        box.fn.pos = [];
        var oldDocWidth = document.documentElement.clientWidth;
        box.fn.pos.push(oldDocWidth);


        if(bType.version == "6"  ){

            jq("html").css("overflow-y","visible");
            jq("body").css("overflow-y","hidden");
        }else if(bType.version == "7" || bType.version == "8"){
            jq("html").css("overflow-y","hidden");
            jq("body").css("overflow-y","hidden");
        }else{
            jq("html").css("overflow-y","initial");
            jq("body").css("overflow-y","hidden");
        };

        jq("body").css({"height":"100%"});
        var newDocWidth = document.documentElement.clientWidth;
        box.fn.pos.push(newDocWidth);
        var box_left = box.fn.pos[1] - box.fn.pos[0];

        jq('body').css('margin-right',''+box_left+'px');
        if(bType.name == "msie" && bType.version == "6"){
            var h = jq(window).scrollTop();
            jq('.translucence_layer').attr('style','top:'+h+'px');
        };
        jq('.window_box_btn_cancle').click(function(){
            jq('.window_box').remove();
            jq('.translucence_layer').remove();
            var cb =  checkBrowser();
            if(cb.version == "6"){
                jq("html").css("overflow-y","scroll");
                jq("body").css("overflow-y","visible");
            }else if(cb.version == "7" && jq('#st_pid').length != 1){
                jq("html").css("overflow-y","scroll");
                jq("body").css("overflow-y","visible");
            }else if(cb.version == "8" && jq('#st_pid').length != 1){
                jq("html").css("overflow-y","scroll");
                jq('body').css('overflow-y','visible');
            }else{
                jq("body").css("overflow-y","inherit");
            };

            jq('body').css('margin-right','0');

        });
        if(typeof(settings.callback) == "function")
            settings.callback();
        if(settings.closeTime != "") {
            setTimeout('window_box_close()',settings.closeTime);
        }
    };

    // 默认值
    jq.windowBox={defaults:{
        width:'auto',
        height:'auto',
        transLayer:true,//是否出现透明背景层
        type:"window_box",//弹框类型
        wbcStr:"",//字符串
        title:"弹窗",//大标题
        littleTitle:"",//小标题
        closeTime:"",//自动关闭时间
        callback:"",
        closeFn:"window_box_close",//点击关闭执行的函数
        showTitle:"block",//显示title
        moreClass:""//container上另加的class
    }};
}(jQuery);
function window_box_close(obj){
    jq('.window_box').remove();
    jq('.translucence_layer').remove();
    var cb =  checkBrowser();
    if(cb.version == "6"){
        jq("html").css("overflow-y","scroll");
        jq("body").css("overflow-y","visible");
    }else if(cb.version == "7" && jq('#st_pid').length != 1){
        jq("html").css("overflow-y","scroll");
        jq("body").css("overflow-y","visible");
    }else if(cb.version == "8" && jq('#st_pid').length != 1){
        jq("html").css("overflow-y","scroll");
        jq('body').css('overflow-y','visible');
    }else{
        jq("body").css("overflow-y","inherit");
    };
    jq('body').css('margin-right','0');

};

//验证组件
!function(){
	jq.fn.checkForm = function(settings){
		settings=jq.extend({},jq.checkForm.defaults,settings);
		if( settings.type.length == 0 )
            return false;
		var cf = {};
		cf.fn = {};
		cf.fn.regType = [/^13[0-9]{1}[0-9]{8}$|14[0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$|17[0-9]{1}[0-9]{8}$/, /^([0-9]+)$/, /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,/^([0-9.]+)$/];//0:手机。1：纯数字。2：EMAIL。3：数字加.
		cf.fn.obj = this;
		cf.fn.str = '';
		cf.fn.count = 0;
	    cf.fn.obj.focus(function(){
			cf.fn.str = '';
			//jq(this).css('border-color','#ccc');
			//jq(this).css('border-color','#96d5b9');
			jq(this).parent().removeClass('height_auto');
		    jq(this).parent().find('div.'+settings.className+'').remove();
		});
		if(!settings.checkFormType){
			cf.fn.obj.blur(function() {
				jq.fn.prototype._check(cf,settings,jq(this));
			});
		}else if(settings.checkFormType && settings.checkType == "text"){
			var g = jq.fn.prototype._check(cf,settings,jq(this));
			return g;
		}else if(settings.checkFormType && settings.checkType == "select"){
            var g = jq.fn.prototype._check(cf,settings,jq(this));
            return g;
		}
	};
	jq.fn.prototype = {
		_check:function(cf,settings,blurObj){
			cf.fn.str = '';
			if(settings.displayNum  && jq(settings.checkFormType).parents('div').find('div.'+settings.className+'').length == 1) {
               return false;
			}
			if(settings.checkType == "text"){
				blurObj.css('border-color','#ccc');
			};
			blurObj.parent().removeClass('height_auto');
		    blurObj.parent().find('div.'+settings.className+'').remove();
			cf.fn.str += '<div class="'+settings.className+'"><em></em>';
			blurObj.find('div.'+settings.className+'').remove();
			var cfPos = [];
			/*if(settings.displayNum  && jq(settings.checkFormType).parent().find('div.'+settings.className+'').length == 1) {
               return false;
			}*/
			for(var i = 0; i < settings.type.length ; i++){
				if(settings.type[i] == 1 && settings.checkType =="text" && settings.content[0] != "" && (blurObj.val() == "" || (blurObj[0].type == "select-one" && blurObj.val() == "0"))){
					cf.fn.str += ''+settings.content[0]+'</div>';
					blurObj.parent().addClass('height_auto');
                    blurObj.parent().append(cf.fn.str);
					blurObj.css('border-color','#ff6767');
					cf.fn.count = 1;

				} else if(settings.type[i] == 2 && settings.checkType =="text" && blurObj.val() !=""){
					var result = false;
					if(typeof settings.reg == "object" && !settings.moreReg) {
						result = jq.fn.prototype.checkWordLen(settings.reg.len, settings.reg.range, blurObj.val());	
					}else if(typeof settings.reg == "number" && !(blurObj.val().match(cf.fn.regType[settings.reg]) == null)){
                        result = true;  
                    }else if(typeof settings.reg == "object" && settings.moreReg ){
                        var moreRegResult = false;
                        for(var i =0; i< settings.reg.length; i++){
                            
                            if(blurObj.val().match(cf.fn.regType[settings.reg[''+i+'']]) != null){
                                moreRegResult = true;
                            }
                        }
                        if(moreRegResult == true){
                            result = true;
                        }

                    } 
                    /*else if(!(blurObj.val().match(cf.fn.regType[settings.reg]) == null)){
						result = true;	
					}*/

					if(!result) {
						cf.fn.str += ""+settings.content[1]+'</div>';
						blurObj.parent().addClass('height_auto');
						blurObj.parent().append(cf.fn.str);
						blurObj.css('border-color','#ff6767');	
						cf.fn.count = 1;	
					}
				}else if(settings.type[i] == 1 && settings.checkType == "select" && blurObj.find('option:selected').attr('value') == ""){
                    cf.fn.str += ""+settings.content[0]+'</div>';
					blurObj.parent().addClass('height_auto');
					blurObj.parent().append(cf.fn.str);
					cf.fn.count = 1;
				};
			};
			if(cf.fn.count != 1)
                return 0;
		},
		checkWordLen:function(maxLen, range, val) {
        	var len;
        	if(null == val.match(/[\u4e00-\u9fa5]/g)) {
        		len = val.length;	
        	} else if(null == val.match(/[^\u4e00-\u9fa5]/g)) {
        		len = val.length * 2;	
        	} else {
        		len = val.match(/[^\u4e00-\u9fa5]/g).length + val.match(/[\u4e00-\u9fa5]/g).length * 2;		
        	}	
        	if(!range) {
				if(maxLen < len) {
					return false;	
				}	
			} else {
				if(len > range.dmax || len < range.dmin) {
					return false;	
				}	
			}
				
        	return true;
        }
	};
	// 默认值
	jq.checkForm={defaults:{
		calssName:"checkFormDefault", //报错字符串的class
        content:[], //报错内容数组
		type:[], //报错类型，1为空，2其他错
		reg:"", //报错类型2时候的正则表达式
        moreReg:false,
		checkType:"text"//检测类型
    }}; 
}(jQuery);

(function() {
	jq.fn.scrollList = function(settings) {
		var defaults = {
			child:"li",//要滚动的元素
			num:3,//小于这个数不滚动
			time:1000,//滚动一行的时间
			interval:3000,//滚动间隔
			direct:"down"	//滚动方向
		},
		settings = jq.extend(defaults,settings),
		obj = jq(this),myScroll;
		
		if(obj.find(settings.child).length > settings.num) {
			obj.hover(function() {
				clearInterval(myScroll);	
			}, function() {
				if(settings.direct == "up") {
					myScroll = setInterval(function() {
						var h1 = obj.find(settings.child+":first").height();
						obj.animate({"margin-top":-h1+"px"},settings.time,function() {
							jq(this).css("margin-top",0).find(settings.child+":first").appendTo(this);
						});  
					},settings.interval);	
				} else {
					myScroll = setInterval(function() {
						var h1 = obj.find(settings.child+":last").height();
						obj.animate({"margin-bottom":-h1+"px"},settings.time,function() {
							jq(this).css("margin-bottom",0).find(settings.child+":last").insertBefore(jq(this).find(settings.child+":first"));
						});	
					},settings.interval);
				}
			}).trigger("mouseleave");	
		}
	};
		
})(jQuery);
// 轮换图组件
!function(jq){
    jq.fn.slider=function(settings,t){
        if(!this.length){return false};
        settings=jq.extend({},jq.slider.defaults,settings);
        var obj=this;
        var scroller={};
        scroller.fn={};
        scroller.li = obj.find('li');
        scroller.sliderName = jq('.'+settings.sliderName+'');
        scroller.onNum = 0;
        scroller.auto = settings.auto;
        scroller.itemSum = scroller.li.length;
        scroller.bLeftBtn= obj.parent('div').find('a.bLeft');
        scroller.bRightBtn=obj.parent('div').find('a.bRight');
        scroller.bLeftBtnPer = settings.bLeft;
        scroller.bRightBtnPer = settings.bRight;
        scroller.moveSlider = settings.moveSlider;
        scroller.times = settings.time;
        scroller.opacity = settings.opacity;
        scroller.colorCout = 0;
        
        if(settings.fontLi) {
          scroller.font = jq('.slider_font');
          scroller.fontLi  =jq('.slider_font').find('li');
          scroller.font.find('li[class="'+settings.play+'"]').css("opacity","1");
        };
        /*if(!scroller.opacity && scroller.moveSlider){
            obj.css('left','-'+scroller.li.width()+'px')
          }*/
          if(settings.bgColor != "" && settings.bgLayer !="" && settings.bgColor.length == scroller.itemSum ){
                jq('.'+settings.bgLayer+'').css('background',''+settings.bgColor[0]+'');
              
          };
         // 方法：开始
        scroller.fn.on=function(){

          //alert("342")
          scroller.fn.off();
          scroller.fn.removeControl();
          scroller.fn.addControl();

          
          if(!scroller.auto){return;};
          scroller.run=setTimeout(function(){
            scroller.fn.goto(settings.direction);
          },scroller.times);
        };
        // 方法：停止
        scroller.fn.off=function(){
          if(typeof(scroller.run)!=="undefined"){clearTimeout(scroller.run);};
        };
        // 方法：增加控制
        scroller.fn.addControl=function(){
          if(scroller.bLeftBtnPer&&scroller.bLeftBtn.length){
            scroller.bLeftBtn.bind("click",function(){
              scroller.fn.goto("bLeft");
            });
          };
          if(scroller.bRightBtnPer&&scroller.bRightBtn.length){
            scroller.bRightBtn.bind("click",function(){
              scroller.fn.goto("bRight");
            });
          };
        };
        // 方法：解除控制
        scroller.fn.removeControl=function(){
          if(scroller.bLeftBtn.length){scroller.bLeftBtn.unbind("click");};
          if(scroller.bRightBtn.length){scroller.bRightBtn.unbind("click");};
        };

        //有轮播标记
        if(settings.markSlider && !scroller.moveSlider) {
          scroller.markLi  =obj.siblings('.'+settings.markClass+'').find('li');
          // 方法：点击轮播标记切换
          scroller.markLi.mouseenter(function(){
              scroller.fn.off();
              scroller.markNum = scroller.markLi.index(jq(this));
              scroller.li.addClass(''+settings.play+'').stop(1,1).css({
                opacity:"1",
                filter:"alpha(opacity=100)",
                display:"none"
              },settings.speed);
              scroller.li.eq(scroller.markNum-1).stop(1,1).css("opacity",'0.5').addClass(''+settings.play+'').css("display",'block').animate({opacity:"0"},settings.speed,function(){
              	jq(this).css('display','none');
              }); 
              scroller.li.eq(scroller.markNum).stop(1,1).css('opacity','0.5').removeClass(''+settings.play+'').css("display",'block').animate({opacity:"1"},settings.speed); 
              scroller.markLi.removeClass(''+settings.markLiClass+'');
              jq(this).addClass(''+settings.markLiClass+'');
              scroller.fn.on();
          });    
        }else if(settings.markSlider && scroller.moveSlider){
          scroller.markLi  =obj.siblings('.'+settings.markClass+'').find('li');
          scroller.markLi.click(function(){
            scroller.markNum = scroller.markLi.index(jq(this));
            scroller.li.removeClass(''+settings.play+'');
            scroller.li.eq(scroller.markNum+1).addClass(''+settings.play+'');
            scroller.markLi.removeClass(''+settings.markLiClass+'');
            obj.animate({
            	left:'-'+(scroller.markNum+1)*scroller.li.width()+'px'
            });
            jq(this).addClass(''+settings.markLiClass+'');

          });
        };
        scroller.li.hover(function(){
    			scroller.fn.off();
    	},function(){
    		scroller.fn.on();
            scroller.colorCout == 1
    	});
        // 方法：滚动
        scroller.fn.goto=function(d){
          scroller.fn.off();
          if(settings.bLeft && settings.bRight){
            scroller.fn.removeControl();
          };
          
          obj.stop(true);
          if(!scroller.moveSlider){
          	 scroller.onCurNum = scroller.li.index(obj.find('li[class=""]'))  ;//play 位置
          }else{
          	 scroller.onCurNum = scroller.li.index(obj.find('li[class="'+settings.play+'"]'))  ;//play 位置	
          };
         
          if(scroller.opacity && !scroller.moveSlider){
          	scroller.li.eq(scroller.onCurNum).addClass(''+settings.play+'').stop(1, 1).animate({
    	      opacity:"0",
    	      filter:"alpha(opacity=0)"
    	    },settings.speed,function(){
              	jq(this).css({display:"none",opacity:"1"});
            });
          	//console.log(scroller.onCurNum)
          
           /*scroller.li.eq(scroller.onCurNum).css("opacity",'0.5').removeClass(''+settings.play+'').animate({
    	      opacity:"0",
    	      filter:"alpha(opacity=0)"
    	    },settings.speed,function(){
              	jq(this).css("display","none");
            });*/
          };
          
          if(settings.fontLi){
            scroller.fontLi.addClass(''+settings.play+'').stop(1, 1).animate({
              opacity:"0",
              filter:"alpha(opacity=0)"
            },0,function(){
                jq(this).css({display:"none",opacity:"1"});
            });;
          };
          switch(d){

            case "bRight":
    		//滑动
    		if(scroller.moveSlider && (scroller.onCurNum+1) == scroller.itemSum){//5
    			scroller.totalWidth = scroller.itemSum * scroller.li.width();
    			obj.css('left','-'+scroller.li.width()+'px');
    			obj.animate({left:'-'+2*scroller.li.width()+'px'});
    			scroller.li.removeClass(''+settings.play+'');
    			scroller.li.eq(2).addClass(''+settings.play+'');
    			if(settings.markSlider){scroller.markLi.removeClass(''+settings.markLiClass+'').eq(1).addClass(''+settings.markLiClass+'');}
                

    		}else if(scroller.moveSlider && scroller.onCurNum == 1){
    			obj.animate({left:'-'+2*scroller.li.width()+'px'});
    			scroller.li.removeClass(''+settings.play+'');
    			scroller.li.eq(2).addClass(''+settings.play+'');
    			if(settings.markSlider){scroller.markLi.removeClass(''+settings.markLiClass+'').eq(1).addClass(''+settings.markLiClass+'');}
                 
    		}else if(scroller.moveSlider && scroller.onCurNum != scroller.itemSum){//1-4
    			obj.animate({
    			 left:'-'+(scroller.onCurNum+1)*scroller.li.width()+'px'
    			});
    			scroller.li.removeClass(''+settings.play+'');
    			scroller.li.eq(scroller.onCurNum+1).addClass(''+settings.play+'');
                
				/*if(settings.markSlider && (scroller.onCurNum+2) == scroller.itemSum){
                	scroller.markLi.removeClass(''+settings.markLiClass+'').eq(0).addClass(''+settings.markLiClass+'');
                }else{
                	scroller.markLi.removeClass(''+settings.markLiClass+'').eq(scroller.onCurNum).addClass(''+settings.markLiClass+'');
                }*/
				if(settings.markSlider) {
					if((scroller.onCurNum+2) == scroller.itemSum){
						scroller.markLi.removeClass(''+settings.markLiClass+'').eq(0).addClass(''+settings.markLiClass+'');
					}else{
						scroller.markLi.removeClass(''+settings.markLiClass+'').eq(scroller.onCurNum).addClass(''+settings.markLiClass+'');
					}	
				}
    		}
    		//渐隐
    		if(((scroller.onCurNum+1) == scroller.itemSum) && !scroller.moveSlider ){
                if(settings.bgColor != "" && settings.bgLayer !="" && settings.bgColor.length == scroller.itemSum && settings.bgColor != false){
                    jq('.'+settings.bgLayer+'').css('background',''+settings.bgColor[0]+'');
                };
    			jq('.'+settings.numClass+'').html("<em>1</em> / "  + scroller.itemSum);
                scroller.li.eq(0).stop(1, 1).css('opacity','0.5').removeClass(''+settings.play+'').css("display",'block').animate({opacity:"1"},settings.speed); 
                if(settings.fontLi) scroller.fontLi.eq(0).removeClass(''+settings.play+'').css("display",'block').animate({opacity:"1"},settings.speed); 

    			//sisi
    			if(settings.markSlider){scroller.markLi.removeClass(''+settings.markLiClass+'').eq(0).addClass(''+settings.markLiClass+'');}
    			//sisi
                

    		}else if(((scroller.onCurNum+1) != scroller.itemSum) && !scroller.moveSlider ){
                if(settings.bgColor != "" && settings.bgLayer !="" && settings.bgColor.length == scroller.itemSum && settings.bgColor != false){
                    jq('.'+settings.bgLayer+'').css('background',''+settings.bgColor[scroller.onCurNum+1]+'');
                }; 
    			jq('.'+settings.numClass+'').html("<em>"+( scroller.onCurNum + 2)+"</em> / "  + scroller.itemSum);

    			scroller.li.eq(scroller.onCurNum+1).stop(1, 1).css('opacity','0.5').removeClass(''+settings.play+'').css("display",'block').animate({opacity:"1"},settings.speed);


    			if(settings.fontLi) scroller.fontLi.eq(scroller.onCurNum+1).removeClass(''+settings.play+'').css("opacity",'1').animate({opacity:"1"},settings.speed,function(){
    				jq(this).css('display','block');
                
    		});

    		//sisi
    		if(settings.markSlider){scroller.markLi.removeClass(''+settings.markLiClass+'').eq(scroller.onCurNum+1).addClass(''+settings.markLiClass+'');}  
    		//sisi
    		};
            break;
            case "bLeft":
            //滑动
    		if(scroller.moveSlider && scroller.onCurNum == 0){//0
    			scroller.totalWidth = scroller.itemSum * scroller.li.width();
    			obj.css('left','-'+(scroller.itemSum-2)*scroller.li.width()+'px');
    			obj.animate({left:'-'+(scroller.itemSum-3)*scroller.li.width()+'px'});
    			scroller.li.removeClass(''+settings.play+'');
    			scroller.li.eq(scroller.onCurNum-3).addClass(''+settings.play+'');
                if(settings.markSlider){scroller.markLi.removeClass(''+settings.markLiClass+'').eq(scroller.onCurNum-2).addClass(''+settings.markLiClass+'');};
                
    		}else if(scroller.moveSlider && scroller.onCurNum == 1){
    			obj.animate({left:'0px'});
    			scroller.li.removeClass(''+settings.play+'');
    			scroller.li.eq(0).addClass(''+settings.play+'');
                if(settings.markSlider){scroller.markLi.removeClass(''+settings.markLiClass+'').eq(scroller.onCurNum+2).addClass(''+settings.markLiClass+'');};
                
    		}else if(scroller.moveSlider && scroller.onCurNum != scroller.itemSum){//1-4
    			obj.animate({
    			 left:'-'+(scroller.onCurNum-1)*scroller.li.width()+'px'
    			});
    			scroller.li.removeClass(''+settings.play+'');
    			scroller.li.eq(scroller.onCurNum-1).addClass(''+settings.play+'');
                if(settings.markSlider){scroller.markLi.removeClass(''+settings.markLiClass+'').eq(scroller.onCurNum-2).addClass(''+settings.markLiClass+'');}
                
    		};
    		//渐隐
    		if(scroller.onCurNum == 0  && !scroller.moveSlider ){
                if(settings.bgColor != "" && settings.bgLayer !="" && settings.bgColor.length == scroller.itemSum && settings.bgColor != false){
                      jq('.'+settings.bgLayer+'').css('background',''+settings.bgColor[scroller.itemSum-1]+'');
                  };
    			scroller.li.eq(scroller.itemSum-1).stop(1, 1).css('opacity','0.5').removeClass(''+settings.play+'').css("display",'block').animate({opacity:"1"},settings.speed,function(){
    				jq(this).css('display','block');
    			});

    			if(settings.fontLi) scroller.li.eq(scroller.itemSum-1).removeClass(''+settings.play+'').css("display",'block').animate({opacity:"1"},settings.speed); 
    			jq('.'+settings.numClass+'').html("<em>"+scroller.itemSum+"</em> / "  + scroller.itemSum);

    			//sisi
    			if(settings.markSlider){scroller.markLi.removeClass(''+settings.markLiClass+'').eq(scroller.itemSum-1).addClass(''+settings.markLiClass+'');};
    			//sisi
                

    		}else if(scroller.onCurNum != 0  && !scroller.moveSlider ){
                if(settings.bgColor != "" && settings.bgLayer !="" && settings.bgColor.length == scroller.itemSum && settings.bgColor != false){
                    jq('.'+settings.bgLayer+'').css('background',''+settings.bgColor[scroller.onCurNum-1]+'');
                };
           		scroller.li.eq(scroller.onCurNum-1).stop(1, 1).css('opacity','0.5').removeClass(''+settings.play+'').css("display",'block').animate({opacity:"1"},settings.speed);

    			if(settings.fontLi) scroller.fontLi.eq(scroller.onCurNum-1).removeClass(''+settings.play+'').css("display",'block').animate({opacity:"1"},settings.speed);  
    			jq('.'+settings.numClass+'').html("<em>"+( scroller.onCurNum )+"</em> / "  + scroller.itemSum);

    			//sisi
    			if(settings.markSlider){scroller.markLi.removeClass(''+settings.markLiClass+'').eq(scroller.onCurNum-1).addClass(''+settings.markLiClass+'');};
    			//sisi
                
    		}
    		break;

          }
          obj.queue(function(){
            if(settings.bLeft && settings.bRight ){
            	 scroller.fn.removeControl();
                 scroller.fn.addControl();
            };
            if(scroller.auto){
				scroller.run=setTimeout(function(){
    	             scroller.fn.goto(settings.direction);
    	       },scroller.times);
            };
           
            
            jq(this).dequeue();
          });
        };
            
        scroller.fn.on();
  };

  // 默认值
  jq.slider={defaults:{
      speed:800,      // 滚动速度
      time:4000,      // 自动滚动间隔时间
      play:"on",         //选中样式
      num:true,        //是否出现总数
      numClass:"slider_num" ,    // 总数显示区域
      auto:true,
      bLeft:true,                 //左控
      bRight:true ,            //右控
      direction:"bRight",  // 顺序
      fontLi:true,             //是否开启描述
      addControl:false,
      moveSlider:false,
      opacity:true,
      bgColor:false,
      //sisi
      markSlider:true,           //是否有轮播标记
      markClass:"slider_mark",       //轮播结构
      markLiClass:"mark_dot_on"         //轮播当前态class
      //sisi
  }};
}(jQuery);

// 浏览器判断
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

(function(jq) {
	/*jq.fn.fixBottom = function() {
		var that,bH,cH,diff,obj,ie6 = false; 
		function ctrlBttmBar() {
			var sH = document.documentElement.scrollTop || document.body.scrollTop,
				ieDiff = sH + cH - that.height();
			
			that.css("top",(ieDiff)+"px");
			if(diff <= sH) {
				if(!ie6) {
					that.css("top",(ieDiff - 153)+"px");	
				} else {
					that.css("top",(ieDiff - 150)+"px");	
				}	
			}		
		}
		
		if(jq(this).is(":visible")) {
			that = jq(this),
			bH = document.documentElement.scrollHeight;
			cH = document.documentElement.clientHeight;
			diff = bH - cH;
			obj = checkBrowser();
			ie6 = false; 
			if(obj.name == "msie" && obj.version == 6) {
				ie6 = true;	
			}
			ctrlBttmBar();
			
			jq(window).bind("scroll resize",function() {
				ctrlBttmBar();
			});		
		}
	};*/
	
	jq.fn.fixBottom = function() {
		if(jq(this).is(":visible")) {
			var that = jq(this),
				bH = document.documentElement.scrollHeight,
				cH = document.documentElement.clientHeight,
				diff = bH - cH,
				obj = checkBrowser(),
				ie6 = false; 
			if(obj.name == "msie" && obj.version == 6) {
				ie6 = true;	
			};
			jq(window).bind("scroll resize",function() {
				var sH = document.documentElement.scrollTop || document.body.scrollTop,
					ie6Diff = sH + cH - that.height();
			
				if(ie6) {
					that.css("top",(ie6Diff)+"px");	
				}
				if(diff <= sH) {
					that.addClass("bottom_nav_act");
					if(ie6) {
						that.css("top",(ie6Diff - 204)+"px");	
					}	
				} else {
					that.removeClass("bottom_nav_act");		
				}	
			});		
		}
	};
	
	var docInit = {
		init:function() {
			docInit.ctrlBarWidth();
			jq(window).bind("scroll resize", function() {
			  if (jq(window).scrollTop() > 550) {
				  jq('.bottom_nav').css('visibility', 'visible');
			  } else {
				  jq('.bottom_nav').css('visibility', 'hidden');
			  }
			 docInit.ctrlBarWidth();
			});	
		},
		ctrlBarWidth:function() {
			var winWidth = jq(window).width();
			if(winWidth <= 1220) {
				jq(".top_bar").width('1220px');
				jq(".top_bar > a").width('407px');	
				jq(".top_bar > a:first").width('406px');
				jq(".bottom_nav > .container").addClass("m_l");
			} else {
				jq(".top_bar").width('100%');
				jq(".top_bar > a").width(winWidth/3);	
				jq(".bottom_nav > .container").removeClass("m_l");
			}	
		}
	};
	docInit.init();
	setTimeout(function() {
		jq(".bottom_nav").fixBottom();		
	},500);
})(jQuery);
//验证组件2
(function(){
    jq.fn.checkForm2 = function(settings){
        var defaults = {
            calssName:"add_wrong", //报错字符串的class
            content:[], //报错内容数组
            checkType:"text",//检测类型
            labl:'i',//错误提示的标签
            lablClass:'ico_error',//错误提示的标签的类名
            parCls: '',//错误提示所加父元素的标示
            callback: '',//检测成功后执行的函数
            info: [],
            displayNum: true,//单个提示
            parentTip: 'div',//单个提示范围
            blurChk: false,//blur时检测提示错误
            chkType: '',//检测类型，radio单独处理
            callback: false//验证成功后执行的函数，必须是全局变量
        };


        var settings = jq.extend({}, defaults, settings),
            cf = {};
        cf.fn = {};
        if(settings.info.length == 0 ) {
            return false;
        }  
        cf.fn.regType = [/\S/];//0:非空字符串

        jq(this).focus(function() {//获取焦点是移除错误
            removeWrongText2(jq(this), settings.parCls, settings);
        });
        if(settings.blurChk){//blur时检测提示错误
            jq(this).blur(function() {
                _check2(cf, settings, jq(this));
            });
        }else if(!settings.blurChk) {//提交时检测提示错误
            var g = _check2(cf, settings, jq(this));
            return g;
        }


        function _check2(cf, settings, blurObj) {
            var strTip = '<div class="'+settings.className+'"><'+settings.labl+' class="'+settings.lablClass+'"></'+settings.labl+'>',//错误提示字符串
                myVal = '',//待验证的value值
                info = '',//验证规则及提示对象
                chkFlag = true,//验证的状态
                reg = [];//验证规则数组
            if(settings.displayNum  && blurObj.parents(settings.parentTip).find('div.'+settings.className+'').length >= 1) {
               return;
            }
            //获取value
            if(settings.checkType =="text") {//text,textarea...
                myVal = blurObj.val();
            } else {//select
                myVal = blurObj.find('option:selected').attr('value');
            }
            //处理radio
            if(settings.chkType == 'radio' && blurObj.filter(':checked').length == 0) {
                strTip += ""+settings.info[0]['tip']+'</div>';
                addWrongText2(blurObj, settings.parCls, strTip, settings.checkType);  
                chkFlag = false;
            }

            for(var i = 0; i < settings.info.length; i++){
                info = jq.extend({}, {negate: false}, settings.info[i]);
                reg = [];
                if(!chkFlag) {//验证失败不做以后的验证
                    break;
                }
                if(info.reg && info.tip) {
                    //获取reg
                    for(var j = 0, len = info.reg.length;j < len;j++) {
                        if(typeof info.reg[j] == 'number') {
                            reg.push(cf.fn.regType[info.reg[j]]);
                        } else {
                            reg.push(info.reg[j]);
                        }
                    }

                    //验证
                    for(var k = 0;k < reg.length;k++) {
                        var regRslt = reg[k].test(myVal);
                        if(!regRslt && !info.negate) {//匹配不成功，添加错误提示
                            strTip += ""+info.tip+'</div>';
                            addWrongText2(blurObj, settings.parCls, strTip, settings.checkType);  
                            chkFlag = false;
                            break;  
                        } else if(regRslt && info.negate) {
                            strTip += ""+info.tip+'</div>';
                            addWrongText2(blurObj, settings.parCls, strTip, settings.checkType);  
                            chkFlag = false;
                            break;
                        }
                    }
                }

            }
            if(chkFlag) {
                if(settings.callback) {
                   chkFlag = settings.callback(); 
                }
                return chkFlag;//成功
            }
        }

        function checkWordLen2(maxLen, range, val) {
            var len = val.length;
            if(!range) {
                if(maxLen < len) {
                    return false;   
                }   
            } else {
                if(len > range.dmax || len < range.dmin) {
                    return false;   
                }   
            }
                
            return true;
        }


        function addWrongText2(obj, cls, str, chkType) {
            if(!cls) { //未传class
                obj.parent().addClass('height_auto');
                obj.parent().append(str);
            } else {
                obj.parents(cls).addClass('height_auto');
                obj.parents(cls).append(str);
            }

            if(chkType != 'select') {
                obj.css('border-color','#ff6767');
            }
        }


        function removeWrongText2(obj, cls, settings) {
            if(!cls) { //未传class
                obj.parent().removeClass('height_auto');
                obj.parent().find('div.'+settings.className+'').remove();
            } else {
                obj.parents(cls).removeClass('height_auto');
                obj.parents(cls).find('div.'+settings.className+'').remove();
            }
            obj.css('border-color','#ccc');
        }

    };
})(jQuery);

function simplifyCheck2(chkArr) {
        var defaults = {
            info: [],
            parCls: '',//错误加的地方,默认表单元素的父元素
            require: true,//必填,若是需要满足一定条件检测的需传入condition（true:执行检测，false:不执行检测）
            className: 'form_error',//错误提示类名
            labl: 'i',//X的html的标签
            lablClass: 'ico_error',//X的html的标签的类名
            callback: '',
            parentTip: 'form',
            chkType:''
        },
        settings = {},
        a = 0;

    for(var i = 0, len = chkArr.length;i < len;i++) {
        settings = {};

        settings = jq.extend({},defaults,chkArr[i]);
        if(settings.hasOwnProperty('condition')) {
            settings.require = false;
        }

        if(settings.require || (!settings.require && settings.condition)) {//必须，条件成立
            a = jq(settings.id).checkForm2({className:settings.className, info:settings.info, labl:settings.labl, lablClass: settings.lablClass, parCls: settings.parCls, callback: settings.callback, parentTip: settings.parentTip, chkType: settings.chkType});
        }
        // if(!a && settings.condition) {
        //     break;
        // }
        if(!a) {
            break;
        }
    }

    if(a) {
        return true;
    } else {
        return false;
    }       

}


/*
 *	type: 返回值是否加&（true: 不加&，反之加[默认]）
 *	unReEmpty：清空标志（true:不清空，反之清空[默认]）
 *	reblur：是否触发blur（true:不触发，反之触发[默认]）	
*/
//RSA加密处理
function rsaEncryptNameAndPhone(dataObj, type, unReEmpty, reblur,returnObj) {
    var type = type || false,
        date = new Date(),
        chenghu = '',
        phoneObj = dataObj.phoneObj,
        chenhuObj = dataObj.chenhuObj,
        phoneTmp = phoneObj.val(),
        rsadata, data;
    if(chenhuObj) {//有称呼
        chenghu = chenhuObj.val();
    }
    if(!returnObj) {
        var str = 'chenghu='+chenghu+'&phone='+phoneTmp;
        if(typeof RSAUtils !== 'undefined') {
            rsadata = RSAUtils.encryptfun(phoneObj.val()+','+chenghu+','+date.getTime()+','+Math.random());
            str = str+'&rsadata='+rsadata+'&rsastatus=1';
        }

        if(!unReEmpty) {//清空
            phoneObj.val('');
            chenhuObj && chenhuObj.val('');
        }
        if(!reblur) {//触发blur
            phoneObj.trigger('blur');
            chenhuObj && chenhuObj.trigger('blur');
        }

        if(type) {
            return str;
        } else {
            return '&'+str;
        }
    } else {
        if(typeof RSAUtils !== 'undefined') {
            var obj = {};
			obj.rsadata = RSAUtils.encryptfun(phoneObj.val()+','+chenghu+ ','+date.getTime()+','+Math.random());
			obj.rsastatus = 1;
        }

        if(!unReEmpty) {//清空
            phoneObj.val('');
            chenhuObj && chenhuObj.val('');
        }
        if(!reblur) {//触发blur
            phoneObj.trigger('blur');
            chenhuObj && chenhuObj.trigger('blur');
        }
        return obj;
    }

}


//新的招标页面
//完善招标资料
function indexSubZbStepOneNew(res, weixin_code, type, data) {//type: 1 设计与报价，2 装修公司，3 效果图
    var weixin_code = 'http://img.to8to.com/to8to_img/to8to_wx_bj.png';
    var str = '<form id="subZbForm">\
                <input type="hidden" id="User_City_1" value="'+res.city+'" name="User_City">\
                <input type="hidden" value="'+res.tmpYid+'" name="tyid" id="tyid">\
                <div class="mod_fbbox mod_fbbox_wxserviceV2" style="width:308px;">\
                    <a href="http://www.to8to.com/help/?id=68" target="_blank" class="help-link">申请服务常见问题&gt;</a>\
					<div class="fbbox_s1">\
					<div class="s1_hd">感谢您的申请!</div>\
                        <div style="text-align: left; color: #f36f20;">'+res.callTime+'有家装顾问与您联系，确认您的具体需求。</div>\
                        <div class="s1_hd_sub" style="width:100%;text-align: left;font-size: 12px;">由于近期申请火爆，一个月内整屋装修开工的业主，我们将优先服务。完善资料，获取更快的审核服务。</div>\
                    </div>\
                    <div class="mod_form">';
                    if(res.hometype==''||res.hometype==0||typeof(res.hometype)=='undefined'||res.hometype==null) {
                        str += '<div class="form_line">\
                            <label class="label" for="">房屋类型</label>\
                            <div class="element">\
                                <select id="zb_zxType" class="select" name="">\
                                    <option value="">请选择您要装修房屋的类型</option>\
                                    <option value="新房装修">新房装修</option>\
                                    <option value="旧房翻新">旧房翻新</option>\
                                    <option value="办公室装修">办公室装修</option>\
                                    <option value="店铺装修">店铺装修</option>\
                                    <option value="餐厅装修">餐厅装修</option>\
                                    <option value="酒店装修">酒店装修</option>\
                                    <option value="其他类型">其他类型</option>\
                                </select>\
                            </div>\
                        </div>';
                    }
                    if(res.oarea==''||res.oarea==0||typeof(res.oarea)=='undefined'||res.oarea==null){
                        str += '<div class="form_line">\
                                    <label class="label" for="">装修面积</label>\
                                    <div class="element">\
                                        <div class="text_wrap">\
                                            <input class="text" type="text" id="zb_homeArea" >\
                                            <em class="text_lbl">请输入您要装修房屋的建筑面积</em>\
                                            <em class="unit">㎡</em>\
                                        </div>\
                                    </div>\
                                </div>';
                    }

                    if(res.zxys==''||res.zxys==0||typeof(res.zxys)=='undefined'||res.zxys==null){
                         str += '<div class="form_line">\
                                    <label class="label" for="">装修预算</label>\
                                    <div class="element">\
                                        <select id="zb_zxBurget" class="select">\
                                            <option value="">请选择不包括家具、电器的预算</option>\
                                            <option value="3万以下">3万以下</option>\
                                            <option value="3-5万">3-5万</option>\
                                            <option value="5-8万">5-8万</option>\
                                            <option value="8-12万">8-12万</option>\
                                            <option value="12-18万">12-18万</option>\
                                            <option value="18-25万">18-25万</option>\
                                            <option value="25-30万">25-30万</option>\
                                            <option value="30万以上">30万以上</option>\
                                        </select>\
                                    </div>\
                                </div>';
                    }
                    if(res.zxtime==''||res.zxtime==0||typeof(res.zxtime)=='undefined'||res.zxtime==null){
                        str += '<div class="form_line">\
                                    <label class="label" for="">装修时间</label>\
                                    <div class="element">\
                                        <select id="zb_zxTime" class="select">\
                                            <option value="">请选择您要装修房屋的时间</option>\
                                            <option value="半个月内">半个月内</option>\
                                            <option value="1个月">1个月</option>\
                                            <option value="2个月">2个月</option>\
                                            <option value="2个月以上">2个月以上</option>\
                                        </select>\
                                    </div>\
                                </div>';
                    }    
                    if(res.address==''||res.address==0||typeof(res.address)=='undefined'||res.address==null) {
                        str += '<div class="form_line">\
                                    <label class="label" for="">楼盘名称</label>\
                                    <div class="element">\
                                        <div class="text_wrap">\
                                            <input class="text" type="text" id="zb_areaName">\
                                            <em class="text_lbl">请输入您要装修房屋的楼盘名称</em>\
                                        </div>\
                                    </div>\
                                </div>';
                    }
                    str += '<div class="form_line">\
                                    <div class="element">\
                                        <input class="btn_org" type="submit" value="立即提交">\
                                    </div>\
                                </div>\
                            </div>\
                        </div></form>';   

    jq('.window_box').windowBox({
        width: 530,
        title: "",
        wbcStr: str
    });
    jq('#zb_homeArea, #zb_areaName').placeholder();
    jq('#subZbForm').bind('submit', function() {
        var chkArr = [{
            id: '#zb_zxType',
            info: [{reg: [0], tip: '请选择房屋类型'}]
        }, {
            id: '#zb_homeArea',
            info: [{reg: [0], tip: '请填写装修面积'}, {reg: [/^[\d\.]+$/], tip: '请填写正确的装修面积'}, {reg: [/^[1-9]{1}\d{0,3}(\.\d{1,2})?$/], tip: '面积不能超过10000，支持两位小数'}]
        }, {
            id: '#zb_zxBurget',
            info: [{reg: [0], tip: '请选择装修预算'}]
        }, {
            id: '#zb_zxTime',
            info: [{reg: [0], tip: '请选择装修时间'}]
        }, {
            id: '#zb_areaName',
            info: [{reg: [0], tip: '请填写楼盘名称'}]
        }];

        if(simplifyCheck2(chkArr)) {
            selectConfirmZbOverNew(weixin_code, res, type, data);
        }

        return false;
    });
}

function selectConfirmZbOverNew(weixin_code, res, type, data) {
    var User_City   = jq("#User_City_1").val(),
        oarea  = jq("#zb_homeArea").val(),
        zxys   = jq("#zb_zxBurget").val(),
        address = jq("#zb_areaName").val(),
        zxtime = jq("#zb_zxTime").val(),
        // hometype = jq("#zb_homeType").val(),
        zxtype = jq("#zb_zxType").val(),
        tyid   = jq("#tyid").val();

    jq.ajax({
        type: "POST",
        url: "/zb/index.php",
        data: { invite:2,
                User_City:User_City,
                tyid:tyid,
                oarea:oarea,
                zxys:zxys,
                zxtime:zxtime,
                zxtype:zxtype,
                address:address},
        success:function(result){
            window_box_close();
            var res = JSON.parse(result);
            if(res.status == 4) {
                indexYYFail(res.cityname);
                return false;
            } else {
                weixinCodeTipBox(weixin_code, type, tyid, data);
            }
        }
    });
}

function weixinCodeTipBox(weixin_code, type, yid, data) {
    var tip = '扫一扫关注土巴兔微信服务号<br>查看更多<span>预算报价</span>知识';//量房设计报价

    /*if(type == 2) {//装修公司
       tip = '扫一扫关注土巴兔微信服务号<br>额外为您推荐<span>2家排名前10</span>的装修公司';
    } else if(type == 3){//效果图
        tip = '扫一扫关注土巴兔微信服务号<br>立即获取<span>100套相同风格</span>精选套图';
    }*/
    var str = '<div class="mod_fbbox mod_fbbox_wxserviceV2">\
                    <div class="fbbox_s1">\
                        <div class="s1_hd">恭喜您完善资料成功！!</div>\
                        <div class="s1_hd_sub">'+tip+'</div>\
                    </div>\
                    <div class="mod_fbbox_code">\
                        <div class="mod_fbbox_code_img">\
                            <img src="'+weixin_code+'" id="weixin_img" width="222" height="222">\
                        </div>\
                        <a href="javascript:;" class="mod_fbbox_code_refresh" id="freshBtn" onclick="getnewcode('+yid+', 5, \''+data+'\')" style="display:none">刷新二维码</a>\
                        <div class="mod_pagetip mod_pagetip_s mod_pagetips_noinfo" id="status_success" style="display:none">\
                            <span class="mod_pagetip_ico"><em class="ico_tip_ok_s"></em></span>\
                            <div class="mod_pagetip_bd">\
                                <div class="mod_pagetip_title">扫描成功</div>\
                            </div>\
                        </div>\
                        <div class="mod_pagetip mod_pagetip_s mod_pagetips_noinfo" id="status_fail" style="display:none">\
                            <span class="mod_pagetip_ico" style="padding-left: 50px;"><em class="ico_tip_warn_s"></em></span>\
                            <div class="mod_pagetip_bd">\
                                <div class="mod_pagetip_title">二维码失效</div>\
                            </div>\
                        </div>\
                        <p>您还可以查看更多<a href="http://xiaoguotu.to8to.com/" target="_blank">精品效果图</a><br>或者去<a href="http://mall.to8to.com/" target="_blank">家居商城</a>选购优质建材</p>\
                    </div>\
                </div>';
    jq('.window_box').windowBox({
        width: 530,
        title: "",
        wbcStr: str
    });
}

//老页面招标
function askUpLoadData(ptag,chenghu,phone,shen,city){
    var str='';
    if(shen)
        str+="&shen="+shen;
    if(city)
        str+="&city="+city;
    var yuyue_apply_agin;
    clickStream.getCvParams(ptag);
    var url = "/zb/index.php";
    //修改
   var encryptData = rsaEncryptNameAndPhone({phoneObj:jq("input[name='phone1']"),chenhuObj:jq("input[name='chenghu1']")});
   // alert(encryptData);
      var _data = "ptag="+ ptag + str+encryptData;
	/*******************************微信招标************************************/  
			  var weixin_code = ''; 
			  var start_qrcode_id = '';
			  jq.ajax({  
						async:true, 
						type:"GET",      
						dataType: 'jsonp',    
						url:"http://www.to8to.com/api/weixin/run.php",      
						data:{action:'createQrcode',cookie_id:'test',data:'createWxCode',type:1}, 
						success:function(res){ 
								if(res.code==0)
								{
									weixin_code = res.url;
									start_qrcode_id = res.qrcode_id;
	/*******************************微信招标************************************/ 
    jq.ajax({
        type: "POST",
        url: url,
        data: _data,
        beforeSend: function() {
            var reg1 = /^((\(\d{2,3}\))|(\d{3}\-))?(13|15|17|18)\d{9}$/;
            if (!reg1.test(phone)) {
                return false;
            }
            if (!chenghu || chenghu == "请填写您的姓名") {
                return false;
            }
            if (yuyue_apply_agin > 0) {
                return false;
            } else {
                yuyue_apply_agin++;
            }
        },
        success: function(result) {
            if (typeof(JSON) == "undefined") {
                var res = eval("(" + result + ")")
            } else {
                var res = JSON.parse(result)
            }
            if (res.status == 1) {
                if (!res.tmpYid)
                {
                    overFive();
                }
                var successStr = zb_first_pop(weixin_code,res.tmpYid);
									jq('.window_box').windowBox({
									  width:560,
									  title:"提示",
									  wbcStr:successStr,
								  		closeFn:'stop_code_status'
									});
				zb_getwxstatus(start_qrcode_id,res.tmpYid);
                return false;
            }
            else if(res.status == 5)
            {
                window_box_close();
                indexYYFail(res.cityname);
                return false;
            }
            else
            {
                var cityname = encodeURI(res.cityname);
                var tyid   = encodeURI(res.tmpid);
                showPopWin("http://www.to8to.com/zb/frame_global.php?msg="+cityname + "&tyid=" + tyid , 456, 254, null, true);
            }
            yuyue_apply_agin = 0
        }
    })
/*******************************微信招标************************************/  						  
									}
						else
						{
							alert(res.msg); 
						} 
							 
					}              
			  });
/*******************************微信招标************************************/ }
//完善招标资料
function indexSubZbStepOne(){
    var phone = jq("#stepOnePhone").val();
    var tmpYid = jq("#stepOneTmpYid").val();
    jq.ajax({
        type: "POST",
        url: "/zb/index.php",
        data: "step=1&phone="+phone+"&tmpYid="+tmpYid,
        success: function(result) {
            var res = JSON.parse(result);

            jq ('.window_box').remove();
            jq ('.translucence_layer').remove();
            var successStr ='<div class="mod_fbbox">'+
				'<a href="http://www.to8to.com/help/?id=68" target="_blank" class="help-link">申请服务常见问题&gt;</a>'+
                '<div class="fbbox_s2">'+
                '<div class="s2_line">'+
                '<label for="" class="label">建筑面积</label>'+
                '<div class="s2_element">'+
                '<div><input type="text" class="text" name="oarea" id="oarea"><em class="text_uni">㎡</em></div>'+
                '<div class="err_tip"  style="display:none"><span class="ico_error"></span>请填写合理的建筑面积</div>'+
                '</div>'+
                '</div>';
            if(res.zxys==''||res.zxys==0)
            {
                successStr+='<div class="s2_line">'+
                '<label for="" class="label">装修预算</label>'+
                '<div class="s2_element">'+
                '<div>'+
                '<select class="select" name="zxys" id="zxys">'+
                '<option value="3万以下">3万以下</option>'+
                '<option value="3-5万">3-5万</option>'+
                '<option value="5-8万">5-8万</option>'+
                '<option value="8-12万">8-12万</option>'+
                '<option value="12-18万">12-18万</option>'+
                '<option value="18-30万">18-30万</option>'+
                '<option value="30万以上">30万以上</option>'+
                '</select>'+
                '</div>'+
                '</div>'+
                '</div>';
            };
            if(res.demo_zxtype==''||res.demo_zxtype==0)
            {
                successStr+='<div class="s2_line">'+
                '<label for="" class="label">装修类型</label>'+
                '<div class="s2_element">'+
                '<div>'+
                '<select class="select" name="zxtype" id="txttype">'+
                '<option value="新房装修" selected="">新房装修</option>'+
                '<option value="旧房翻新">旧房翻新</option>'+
                '<option value="办公室装修">办公室装修</option>'+
                '<option value="店铺装修">店铺装修</option>'+
                '<option value="餐厅装修">餐厅装修</option>'+
                '<option value="酒店装修">酒店装修</option>'+
                '<option value="其他类型">其他类型</option>'+
                '</select>'+
                '</div>'+
                '</div>'+
                '</div>';
            }
            else
            {
                successStr+='<input type="hidden" id="txttype_1" value="'+res.demo+'" name="zxtype">';
            };
            successStr+='<div class="s2_line">'+
            '<label for="" class="label">装修时间</label>'+
            '<div class="s2_element">'+
            '<div>'+
            '<select class="select" name="zxtime" id="zxtime">'+
            '<option value="准备一个月内装修">准备一个月内装修</option>'+
            '<option value="准备一至三个月内装修">准备一至三个月内装修</option>'+
            '<option value="准备三至六个月内装修">准备三至六个月内装修</option>'+
            '<option value="暂时没有装修计划">暂时没有装修计划</option>'+
            '</select>'+
            '</div>'+
            '</div>'+
            '</div>';

            if(res.shen==''||res.shen==0)
            {
                successStr+='<div class="s2_line">'+
                '<label for="" class="label">所在城市</label>'+
                '<div class="s2_element">'+
                '<div class="clear">'+
                '<select  class="select select_s" id="User_Shen"  name="User_Shen" onChange="changeProvince('+"User_Shen"+','+"User_City"+','+"User_Town"+');"></select>'+
                '<select  class="select select_s" id="User_City" name="User_City" ></select><div style="display:none"><select name="User_Town" id="User_Town" style="display:none"><option value="">'+'--</option></select></div>'+
                '</div>'+
                '<div class="err_tip"  style="display:none"><span class="ico_error"></span>请选择城市名称</div>'+
                '</div>'+
                '</div>';
            }
            else
            {
                successStr+='<input type="hidden" id="User_Shen_1" value="'+res.shen+'" name="User_Shen"><input type="hidden" id="User_City_1" value="'+res.city+'" name="User_City">';
            };
            successStr+='<div class="s2_line s2_line_btn">'+
            '<div class="s2_element">'+
            '<input type="hidden" value="'+res.yid+'" name="tyid" id="tyid">'+
            '<input type="hidden" value="'+res.shen+'" name="shen_zb" id="shen_zb">'+
            '<input type="button" value="确定" class="mod_fbbox_btn" onclick="selectConfirmZbOver();">'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>';
            jq('.window_box').windowBox({
                width:480,
                title:"请完善您的资料",
                wbcStr:successStr
            });
            if(res.shen==''||res.shen==0){
                var gpm = new GlobalProvincesModule;               //城市类
                gpm.def_province = ["省/市", ""];
                gpm.def_city1 = ["市/地区", ""];
                gpm.initProvince($('User_Shen'));
                gpm.initCity1($('User_City'), gpm.getSelValue($('User_Shen')));
            }
            //showPopWin("http://www.to8to.com/zb/frame_global_step_one.php?phone=" + res.phone + "&yid=" + res.yid, 480, 428, null, true);
        }
    });
};

//招标完善资料最后一步
function selectConfirmZbOver(){
	
    if(isNaN(jq("#oarea").val())||jq("#oarea").val()==''||jq("#oarea").val()=='0'){
	   jq("#oarea").parent().parent().find(".err_tip").css('display',"block");
   	   jq("#oarea").focus();
	   setTimeout(function(){ jq("#oarea").parent().parent().find(".err_tip").css("display","none");},2500);
   	   return ;
    };
	
    if (!jq("#shen_zb").val() && (!jq("#User_Shen").val() || !jq("#User_City").val()))
    {
      jq("#User_Shen").parent().parent().find(".err_tip").css('display',"block");
	  setTimeout(function(){ jq("#User_Shen").parent().parent().find(".err_tip").css("display","none");},2500);
      jq("#User_Shen").focus();
      return ;
    };
    var User_Shen   = jq("#User_Shen").val();
    var User_City   = jq("#User_City").val();
	if(jq("#User_Shen_1").val())
	{
		User_Shen = jq("#User_Shen_1").val();
	};
	if(jq("#User_City_1").val())
	{
		User_City = jq("#User_City_1").val();
	};
    var oarea  = jq("#oarea").val();
    var zxys   = jq("#zxys").val();
    var zxtype = jq("#txttype").val();
	if(jq("#txttype_1").val())
	{
		zxtype = jq("#txttype_1").val();
	};
    var zxtime = jq("#zxtime").val();
	var tyid   = jq("#tyid").val();
	/*******************************微信招标************************************/  
			status_request.abort();
			  var weixin_code = ''; 
			  var over_qrcode_id = '';
			  jq.ajax({  
						async:true, 
						type:"GET",      
						dataType: 'jsonp',    
						url:"http://www.to8to.com/api/weixin/run.php",      
						data:{action:'createQrcode',cookie_id:'test',data:'createWxCode',type:1}, 
						success:function(res){ 
								if(res.code==0)
								{
									weixin_code = res.url;
									over_qrcode_id = res.qrcode_id;
	/*******************************微信招标************************************/ 
    
    jq.ajax({
          type: "POST",
          url: "/zb/index.php",
          data: {invite:2,User_City:User_City,tyid:tyid,User_Shen:User_Shen,oarea:oarea,zxys:zxys,zxtype:zxtype,zxtime:zxtime},
          success:function(result){
			  jq ('.window_box').remove();
			  jq ('.translucence_layer').remove();
              if (typeof(JSON) == "undefined") {
                var res = eval("(" + result + ")")
              } else {
                var res = JSON.parse(result)
              };
              if (res.status == 4)
              {
				  
					 window_box_close();
					 indexYYFail(res.cityname);
					 return false;
		
				  
                  //backFirstFrame();
                  //jq("#tmpCity").html(res.cityname);
              }
              else
              {
                  jq ('.window_box').remove();
                  var successStr = zb_first_pop(weixin_code,res.tmpYid);
					jq('.window_box').windowBox({
					  width:560,
					  title:"提示",
					  wbcStr:successStr,
				  		closeFn:'stop_code_status'
					});
				zb_getwxstatus(over_qrcode_id,tyid);
              };
          }
    });
	
/*******************************微信招标************************************/  						  
									}
						else
						{
							alert(res.msg); 
						} 
							 
					}              
			  });
/*******************************微信招标************************************/ };
//未开通城市是失败

function indexYYFail(cityname, sem) {
  var failStr = '<div class="apply_fail"><span class="as_fail"></span><strong>非常抱歉,您当前的城市'+cityname+'尚未开通<br />装修服务，敬请期待！</strong></div>';
  if(!sem) {
	  jq('.window_box').windowBox({
		width:480,
		height:200,
		title:"提示",
		wbcStr:failStr,
		closeTime:6000
	  }); 
  } else {
		jq('.window_box').windowBox({
		width:480,
		height:200,
		title:"提示",
		wbcStr:failStr,
		closeFn: 'semYYFailCloseFn'
	  });   
  }
};

function semYYFailCloseFn() {
	window.location.href = 'http://www.tubatu.com';	
}
//lazyload frame
(function($,window){var $window=$(window);$.fn.lazyload=function(options){var elements=this;var $container;var settings={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:window,data_attribute:"original",skip_invisible:true,appear:null,load:null};function update(){var counter=0;elements.each(function(){var $this=$(this);if(settings.skip_invisible&&!$this.is(":visible")){return};if($.abovethetop(this,settings)||$.leftofbegin(this,settings)){}else if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$this.trigger("appear")}else{if(++counter>settings.failure_limit){return false}}})};if(options){if(undefined!==options.failurelimit){options.failure_limit=options.failurelimit;delete options.failurelimit};if(undefined!==options.effectspeed){options.effect_speed=options.effectspeed;delete options.effectspeed};$.extend(settings,options)};$container=(settings.container===undefined||settings.container===window)?$window:$(settings.container);if(0===settings.event.indexOf("scroll")){$container.bind(settings.event,function(event){return update()})};this.each(function(){var self=this;var $self=$(self);self.loaded=false;$self.one("appear",function(){if(!this.loaded){if(settings.appear){var elements_left=elements.length;settings.appear.call(self,elements_left,settings)};$("<img />").bind("load",function(){$self.hide().attr("src",$self.data(settings.data_attribute))[settings.effect](settings.effect_speed);self.loaded=true;var temp=$.grep(elements,function(element){return!element.loaded});elements=$(temp);if(settings.load){var elements_left=elements.length;settings.load.call(self,elements_left,settings)}}).attr("src",$self.data(settings.data_attribute))}});if(0!==settings.event.indexOf("scroll")){$self.bind(settings.event,function(event){if(!self.loaded){$self.trigger("appear")}})}});$window.bind("resize",function(event){update()});update();return this};$.belowthefold=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.height()+$window.scrollTop()}else{fold=$(settings.container).offset().top+$(settings.container).height()};return fold<=$(element).offset().top-settings.threshold};$.rightoffold=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.width()+$window.scrollLeft()}else{fold=$(settings.container).offset().left+$(settings.container).width()};return fold<=$(element).offset().left-settings.threshold};$.abovethetop=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.scrollTop()}else{fold=$(settings.container).offset().top};return fold>=$(element).offset().top+settings.threshold+$(element).height()};$.leftofbegin=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.scrollLeft()}else{fold=$(settings.container).offset().left};return fold>=$(element).offset().left+settings.threshold+$(element).width()};$.inviewport=function(element,settings){return!$.rightofscreen(element,settings)&&!$.leftofscreen(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings)};$.extend($.expr[':'],{"below-the-fold":function(a){return $.belowthefold(a,{threshold:0})},"above-the-top":function(a){return!$.belowthefold(a,{threshold:0})},"right-of-screen":function(a){return $.rightoffold(a,{threshold:0})},"left-of-screen":function(a){return!$.rightoffold(a,{threshold:0})},"in-viewport":function(a){return!$.inviewport(a,{threshold:0})},"above-the-fold":function(a){return!$.belowthefold(a,{threshold:0})},"right-of-fold":function(a){return $.rightoffold(a,{threshold:0})},"left-of-fold":function(a){return!$.rightoffold(a,{threshold:0})}})})(jQuery,window);
//申请次数超过五次
function overFive(){
    var str = '<span style="float:left; width:100%; height:14px;line-height:14px;margin:20px 0;text-align:center;*padding-bottom:20px">申请次数超过五次</span>';
    jq('.window_box').remove();
    jq('.translucence_layer').remove();
    jq('.window_box').windowBox({
        width:480,
        title:"提示",
        wbcStr:str
    });
}
//获取微信扫码状态
var status_num=0;
var status_request;
	function zb_getwxstatus(zb_qrcode_id,yid)
	{
		
		status_request = jq.ajax({ 
			async:true, 
            type:"GET",      
            dataType: 'jsonp',      
            url:"http://www.to8to.com/api/weixin/run.php", 
            data:{action:'getScanState',cookie_id:'test',qrcode_id:zb_qrcode_id}, 
            timeout:15000,     //ajax请求超时时间30秒      
            success:function(res,textStatus){  
            	
            	if(res.code=="405"){ 
					if(status_num<19)//一分钟
					{
						status_num++;
						zb_getwxstatus(zb_qrcode_id,yid);  	
					}else
					{
						jq("#code_message").hide();
						jq("#status_fail").show();
					}
                } 
            	if(res.code=="0"){ 
					jq("#code_message").hide();
					jq("#status_success").show();
					//zb_getwxuser(zb_qrcode_id,yid);  
					jq.ajax({ 
						async:true, 
						type:"GET",      
						dataType: 'jsonp',      
						url:"http://www.to8to.com/zb/index.php", 
						data:{weixin_act:'weixin_banding',yid:yid,open_id:res.user.openid,unionID:res.user.unionID,header_url:res.user.pic_header_url,user_name:res.user.nickname,qrcode_id:zb_qrcode_id}, 
						success:function(data){  

							if(data.code=="0"){ 
								alert(data.msg);	
							} 
								
						}
						
					});  
                } 
                    
            },      
            error:function(XMLHttpRequest,textStatus,errorThrown){      
                if(textStatus=="timeout"){ 
                	if(status_num<19)//一分钟
					{
						status_num++;
						zb_getwxstatus(zb_qrcode_id,yid);  	
					}else
					{
						jq("#code_message").hide();
						jq("#status_fail").show();
					} 
                }      
        	} 
        });      
		
	}
	
	
function getnewcode(tmpYid){
		  status_num = 0;
		  var weixin_code = ''; 
		  jq.ajax({  
					async:true, 
					type:"GET",      
					dataType: 'jsonp',    
					url:"http://www.to8to.com/api/weixin/run.php",      
					data:{action:'createQrcode',cookie_id:'test',data:'createWxCode',type:1}, 
					success:function(res){ 
							if(res.code==0)
							{
								jq("#status_fail").hide();
								jq("#code_message").show();
								jq("#weixin_img").attr('src',res.url);
								zb_getwxstatus(res.qrcode_id,tmpYid);
							}
					else
					{
						alert(res.msg); 
					} 
						 
				}              
		  });
			  
}

var weChatQrcode = {
    init: function() {

        var _this = this;
        _this.destroy();
        if ( isIE6 ) {
            return false;
        }

        //需要剔除的页面
        if(!_this.validPage()){
            return;
        }
        jq(function() {
            var wechat_barcode = jq('#wechat_barcode'),
                wechat_broadside = jq('#wechat_broadside');
            if ( !wechat_barcode.length || !wechat_broadside.length ) {
                try {
                    _this.createQrcodeTmp();
                } catch (e) {
                    return;
                }
            }

            _this.initPosition();
            _this.bindQrcodeEvents();
        })
    },
    validPage: function(){
        var removeReg = /^http:\/\/xiaoguotu.to8to.com\/[A-Za-z0-9]+.html$/;
        var url = window.location.href;
        if(removeReg.test(url)){
            return false;
        }else{
            return true;
        }
    },
    destroy: function() {
        try {
            var wechat_barcode = jq('#wechat_barcode'),
                wechat_broadside = jq('#wechat_broadside');
            wechat_barcode.remove();
            wechat_broadside.remove();
        } catch (e) {
            return;
        }
    },
    checkScreen: function() {
        var midCW = jq('.narrow_980').length ? 980 : 1220;

        return (jq('body').width() - midCW) / 2 > 120;
    },
    createQrcodeTmp: function() {
        this.destroy();
        var qrcodeTmp = '<div class="wechat_barcode" id="wechat_barcode">\
                            <div class="we_inwrap">\
                            <a href="http://www.to8to.com/apps/index.php?act=apps_wechat" rel="nofollow">\
                            <i class="my_wechat_bar"></i></a>\
                            <i class="my_wechat_cancel" id="cancel_wechat_qrcode"></i>\
                        </div>\
                            </div>\
                        <div class="wechat_broadside" id="wechat_broadside">\
                            <i class="my_wechat_broadside"></i>\
                        </div>';
        jq('body').append(qrcodeTmp);
    },
    showQrcode: function () {
        if(!this.checkScreen()) {
            jq(".wechat_barcode").css({"left":"auto","right":"0"}).show();
        }else{
            jq(".wechat_barcode").show();
        }
    },
    bindQrcodeEvents: function() {
        var wechat_barcode = jq('#wechat_barcode'),
            wechat_broadside = jq('#wechat_broadside'),
            closeBtn = jq('#cancel_wechat_qrcode'),
            _this = this,
            _offsetTop_bar = wechat_barcode.offset().top,
            _offsetTop_bro = wechat_broadside.offset().top;

        // IE6 下fix 问题
        if ( isIE6 ) {
            jq(window).bind('scroll', function() {
                var _topWin = jq(window).scrollTop();
                wechat_barcode.css({ top: (_topWin + _offsetTop_bar) + 'px'  });
                wechat_broadside.css({ top: (_topWin + _offsetTop_bro) + 'px'  } );
            })
        }

        closeBtn.bind('click', function () {
            wechat_barcode.hide();
            wechat_broadside.show().stop().animate({
                width: '41px'
            }, 500)
        });
        /*jq("body").on('click','#cancel_wechat_qrcode',function () {
         wechat_barcode.hide();
         wechat_broadside.show().animate({
         width: '41px'
         }, 500)
         });*/
        wechat_broadside.bind('click', function () {
            wechat_broadside.stop().animate({
                width: '0px'
            }, 500, function() {
                wechat_broadside.hide();
            })
            _this.showQrcode();
        });
        /*jq("body").on('click', "#wechat_broadside",function () {
         wechat_broadside.animate({
         width: '0px'
         }, 500, function() {
         wechat_broadside.hide();
         })
         _this.showQrcode();
         });*/
    },
    initPosition: function() {
        var wechat_barcode = jq('#wechat_barcode'),
            wechat_broadside = jq('#wechat_broadside'),
            _this = this;
        if(!this.checkScreen()){
            wechat_barcode.hide();
            wechat_broadside.show().css({'width':'41px'});
        }else{
            _this.showQrcode();
            wechat_broadside.hide().css({'width': '0px'});
        }
    }
}

 
//头部品宣位埋点js
jq(function(){
    jq("#side_slider li").click(function(){
        try{clickStream.getCvParams(jq(this).attr("j_data"));}catch(e){}
    });
});


//着陆页客服弹窗
;(function($, window){
    var popCustSrvWin = {
        popWinTimer : null,
        init: function(){
            var self = this,
                count = 70,
                source = decodeURI(document.referrer),
                winStr;
            if(source.indexOf('baidu.com')<0){return;}
            winStr = '<div id="custSrvWin" class="sem_tip_box clear">\
                    <div class="bg_303030">\
                        <p>很高兴成为您的家装顾问！<br/>\
                    想了解装修省钱秘笈？想避免装修猫腻？ <br/>\
                    想专业监理免费上门验收？ 想装修满意再付款吗？<br/>\
                      </p>\
                      <a href="javascript:;" class="btn_ec6d20 contact"> <em class="ico_sercive_free"></em>免费咨询  </a>\
                      <a href="javascript:;" class="ico_sem_close close"></a>\
                      <em class="sem_tip_ico"></em>\
                    </div>\
                    </div>';
            this.popWinTimer = setInterval(function(){
                while(!count--){
                    $(document.body).append(winStr);
                    clearInterval(self.popWinTimer);
                    $('#custSrvWin').delegate('.contact', 'click',  function(){
                        $('#custSrvWin').remove();
                        window.open('http://dft.zoosnet.net/LR/Chatpre.aspx?id=DFT16498553&lng=cn', '_blank', "height=500,width=750");
                    }).delegate('.close', 'click', function(){
                        $('#custSrvWin').remove();
                    });
                }
            }, 1000);
        },
        clear: function(){
            clearInterval(this.popWinTimer);
        }
    }
    //去掉着陆页客服弹窗
    //window.popCustSrvWin = popCustSrvWin;
    window.popCustSrvWin = null;
  })(jQuery, this);
//判断是否是落地城市
function isGroundCity(id) {
    var GroundCityArr = [1130,1121,1672,1181,2827,1103,591,2920,1695,2929,1547,1196,1681,762,118,1,2298,317,2013,612,1891,2912,2933,2951,2962,2619,974];
    var cityLen = GroundCityArr.length;
    for (var i = 0; i < cityLen; i++) {
        if (id == GroundCityArr[i]) {
            return true;
        };
    };
    return false;
}
// 首页右侧导航图片轮播 fidermo.hu 2017/1/04
(function(jq){
    jq(document).ready(function(){
        var codeheight = jq('.to8to_headgif').height(),  // 节点高度，每次滚动距离
            newcode = jq(".slider_container").find('.to8to_headgif').eq(0).clone(true),    // 复制第一个子节点
            numbers = jq(".slider_container").find('.to8to_headgif').length + 1,   // 还没有添加子节点，所以需要+1
            ricylepic = 0,    // 间歇调用ID
            firstslider = 0,  // 超时调用ID
            distance = 0,     // 每次滚动距离
            nowIndex = 0;     // 当前节点index
        newcode.appendTo(jq('.slider_container').children());    // 添加子节点
        sliderway();
        // 鼠标悬停停止轮播
        jq('.slider_container').on('mouseenter',function(){
            clearInterval(ricylepic);
            clearTimeout(firstslider);
        });
        // 鼠标移除开始轮播
        jq('.slider_container').on('mouseleave',function(){
            sliderway();
        });
        // 获取当前节点index
        function getIndex(){
            var nowTop = jq(".slider_container").scrollTop();
            for(var i = numbers;i >= 0;i--){
                if(codeheight*(i-1)<= nowTop && nowTop <= codeheight*i){
                    return i-1;
                }
            }
        }
        // 轮播图片方法
        function sliderway(){
            clearTimeout(firstslider);
            clearInterval(ricylepic);
            // 轮播图片,每过一秒轮播一张,轮播间隔为总间隔减去轮播图片过程所需时间即1530-530
            ricylepic = setInterval(function(){
                nowIndex = getIndex();
                distance = (nowIndex+1)*codeheight;
                if(jq('.to8to_headgif').eq(nowIndex).next().length > 0){
                    jq('.slider_container').animate({scrollTop:distance},530);
                }else{
                    // 置scrollTop为0，且过1.5秒开始轮播
                    clearInterval(ricylepic);
                    // 初始化
                    jq('.slider_container').scrollTop(0);
                    firstslider = setTimeout(function(){
                        sliderway();
                    },500);    // 最后一张图片多停留500ms
                }
            },1530);
        }
    });
})(jQuery);
//pc根据ip定位城市 hank.lan 2017/1/04
(function(jq){
    window.city_from_ip=function(callBackIp){
        var sCity = '';
        if (getCookie('city_from_ip').length > 0) {//cookie存在值就先读取cookie
            callBackIp(getCookie('city_from_ip'));
        }else{
            var ipCity = '';            
            var num = Math.floor((Math.random()*10000000000+1)).toString();
            //根据ip获取城市接口
            jq.ajax({
                url: 'http://www.to8to.com/api/getAreaInfo.php',
                data: 'act=getIp&_='+num,
                type: "GET",
                dataType: 'jsonp',
                success: function(data) {
                    setCookie('city_from_ip',data.data.to8to_tname,365*24*60*60*1000);
                    callBackIp(data.data.to8to_tname);
                },
                error: function(){
                        callBackIp('北京');
                    }
            });
        }   
    }
})(window.jQuery);
