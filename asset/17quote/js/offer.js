$(function(){
	//图片懒加载.先检测再使用(检测lazyload是否被引入)	https://raw.github.com/tuupola/jquery_lazyload/master/jquery.lazyload.min.js
	//例:  <img data-original="1.jpg">
	//alert(window.location.host);
	//数据分析 start
	var urlreferer=document.referrer||window.location.href;
    var urlReg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
    var refurl=urlReg.exec(urlreferer);
    var urldomain=refurl[0];
    var staturl='http://stat.17house.com/stat.js?site=pc&stype=houseznbj&ltype=zhinengbaojia&urlreferer='+urlreferer+'&urldomain='+urldomain+'&t='+new Date().getTime();
    $.getScript(staturl);

    //数据分析 end
    
	var _city = '';
	$.post('detail.php',{action:'getInfoByHost',host:window.location.host},function(data){
		if ( data.status == 'ok' ) {
			_city = data.city;
			$("#areashow").val(data.sheng);
			$("#areashow2").val(_city);
			$("#User_City").val(_city);
    	} else {
    		$("#areashow").val('北京');
    		$("#areashow2").val('北京');
    	}
	},'json');
	if(typeof ($(window).lazyload)=='function'){
		$("img[data-original]").lazyload({
			//placeholder : "images/loading.gif",
			effect: "fadeIn"
		});
	}
	
	
	//存取cookie
	var CommonCookie={
		//设置cookie
		setCookie:function(NameOfCookie, value, expiredays) {
			var ExpireDate = new Date();
			ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
			document.cookie = NameOfCookie + "=" + escape(value) + ((expiredays == null) ? "": "; expires=" + ExpireDate.toGMTString());
		},
		//获取cookie值
		getCookie:function(NameOfCookie) {
			if (document.cookie.length > 0) {
				var begin = document.cookie.indexOf(NameOfCookie + "=");
				if (begin != -1) {
				begin += NameOfCookie.length + 1; 
				var end = document.cookie.indexOf(";", begin); 
				if (end == -1) end = document.cookie.length;
				return unescape(document.cookie.substring(begin, end));
			}
		}
		return null;
		},
		//删除cookie
		delCookie:function(NameOfCookie) {
			if(this.getCookie(NameOfCookie)) {
				document.cookie = NameOfCookie + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
			}
		}
	};


	var offerIndex={
		apiurl:'http://news.17house.com/znbj-index.html',
		ownerid:0,
		session_id:0,
		/* 表单输入框获取焦点、失去焦点 start */
		focusBlur: function(ele) {
					function trimCode(s) {
						s = $.trim(s);
						s = s.replace(/ /g, '');
						s = s.replace(/\t/g, '');
						s = s.replace(/\r/g, '');
						s = s.replace(/\n/g, '');
						return s;
					}
					for(var i=0;i<ele.length;i++){
						var _e = $(ele[i]);
						//取当前值，并替换掉两端空格、替换掉回车符， 检查是否和 data-value 属性的默认值 相同。
						var _val = trimCode(_e.val());
						if (_val == '') {
							_e.val(_e.attr('data-value')); //初始化
						}
						_e.focus(function() {
							var _val = $.trim($(this).val());
							if ($(this).attr('data-value') == _val) {
								$(this).val('');
							}
						}).blur(function() {
							var _val = $.trim($(this).val());
							var _attrVal = $(this).attr('data-value');
							if (_val == '') {
								$(this).val(_attrVal);
							}
						});
					}
		},
		/* 表单输入框获取焦点、失去焦点 end */

		/*省市下拉菜单初始化 start */
		//GP是省，GC1是市（GP和GC1 来源于 http://news.17house.com/source/plugin/znbj/template/znbj-static/provinces.js)
		dropArea:function(GP,GC1){
					var html='';
					var len = GP.length;
					for(var i=0;i<len;i++){
						html += '<a data-v="'+GP[i]+'">'+GP[i]+'</a>';
					}
					$('#selectProv').html(html);
					$('#selectProv').find('a').bind("click",function(){
						$(this).addClass('active').siblings().removeClass('active');
						var html='';
						var key = $(this).html();
						var len = GC1[key].length;
						$('.js-area-btn').find('input[name=area]').val(key);//仅仅是显示
						$('.js-area-btn').find('input[name=User_Shen]').val(key);//省
						$('.js-area-btn').find('input[name=User_City]').val('');//市
						for(var i=0;i<len;i++){
							html += '<a data-v="'+GC1[key][i]+'">'+GC1[key][i]+'</a>';
						}
						$('#selectCity').html($(html));
						$('#selectCity').find('a').bind("click",function(){
							$(this).addClass('active').siblings().removeClass('active');
							var User_Shen=$('#selectProv').find('a.active').html();
							var User_City=$('#selectCity').find('a.active').html();
							$('.js-area-btn').find('input[name=area]').val(User_Shen);//仅仅是显示
							$('.js-area-btn').find('input[name=area2]').val(User_City);//仅仅是显示
							$('.js-area-btn').find('input[name=User_Shen]').val(User_Shen);//省
							$('.js-area-btn').find('input[name=User_City]').val(User_City);//市
							$('.area-dropbox .absbox').slideUp(500);
							$('.core-form input[name=area]').removeClass('error-tip');//清除表单提示

						});

						//如果像北京上海重庆这类只有一个二级选项的，默认选中并关闭（模拟选中事件）
//						if(len<=1){
							$('#selectCity').find('a').eq(0).trigger('click');
//						}
					});

		},
		/*省市下拉菜单初始化 end*/

		//首页倒计时弹窗动画
		countdown1500:function(){
					var x000 = 360;//360度
					var step = 5;//每步增加5度
					var x = 0;
					var timeout = Math.ceil(  (1500 / x000) * step  );
					//alert(timeout);
					var timer = setInterval(function(){
						y=(1-Math.cos( Math.PI*(x/180) ))*80;
						//console.log(x);
						//console.log('>>>> y = '+y);
						if(x<=90){
							$('.clip-r1').css('clip',' rect(0px  160px  '+y+'px  80px)');
							$('.clip-r2').css('clip',' rect(0px  0px  0px  0px)');
							$('.clip-l').css('clip',' rect(0px  0px  0px  0px)');
						}else if(x<=180){
							y=80+Math.sin( Math.PI*(x/180) )*80;
							$('.clip-r2').css('clip',' rect(80px  160px  160px  '+(y)+'px)');
							$('.clip-l').css('clip',' rect(0px  0px  0px  0px)');
						}else{
							$('.clip-l').css('clip',' rect('+y+'px  80px  160px  0px)');
						}
						$('.txt-loading .txt').html(parseInt(x/360*100));
						x = x+step;
						if(x > x000){
							clearInterval(timer);
						}
					},timeout);//定时循环n次
		},

		/* 发送短信验证码 start */
		initGetCode: function(target) {

					//发送手机验证码
					//倒计时60秒。60秒内曾发过的不再发（全页面只允许1个 [data-getcodetimer] 存在）
					target.click(function(){

							//表单验证
							var form = $(this).parents('form');
							var phone=form.find('input[name=phone]');
							if(phone.val()=='' || phone.val()==phone.attr('data-value') ){$(this).parents('form').find('.error-tip').html('请填写手机号');phone.focus();return false;}
							var regTest = /^1[3|4|5|7|8][0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$/;
							if(!regTest.test( phone.val() )){$(this).parents('form').find('.error-tip').html('电话格式不对，请检查');phone.focus();return false;}

							if( $(this).attr('data-getcodetimer')>0 ){console.log('两条短信间需间隔60秒');return false;}
							if( $('[data-getcodetimer]').attr('data-getcodetimer')>0 ){
									$(this).parents('form').find('.error-tip').html('你近期已发过短信了');
									console.log('你近期已发过短信了');
									return false;
							}else{
									$(this).parents('form').find('.error-tip').html('');
							}

							var target = $(this);

							//ajax:短信发送手机验证码
							$.post('detail.php', {
								    action : 'sendTelCode',
									tel : phone.val()
								}, function(data) {
									if(data.error == 0){
										//alert('短信已发送，请查收');
										//假如页面有多个获取验证码按钮时，防错
										target.addClass('ipt-disabled');//
										target.attr('data-getcodetimer',60);
										target.val('60秒');

									}else{
										//401手机号错误； 402 formhash错误
										alert(data.message);
										//if(data.error == 101 || data.error == 1){alert('手机号错误');}
										//if(data.error == 100){alert('请重试');}

										/*console.log(data.msg);*/
									}
							}, 'json');



							var timer = setInterval(function(){
								var mm=target.attr('data-getcodetimer');
								//console.log( mm);
								mm--;
								if(mm==0){
									target.removeClass('ipt-disabled');
									target.val('获取验证码');
									target.removeAttr('data-getcodetimer');
									clearInterval(timer);

								}else{
									target.attr('data-getcodetimer',mm);
									target.val(mm+'秒');
								}
							},1000);//定时循环n次
					});


		/* 发送短信验证码 end */
		},
		/* 详情页 start */
		offerDetail: function() {

		}
		/* 详情页 end */
	}



    //baidu共享
    window._bd_share_config = {
        "common": {
            "bdSnsKey": {},
            "bdText": "",
            "bdMini": "2",
            "bdMiniList": false,
            "bdPic": "",
            "bdStyle": "0",
            "bdSize": "16",//16x16
           // "bdSize": "24",//24x24
            //"bdSize": "32",//32x32
        },
        "share": {}
    };
    var $head = $('head'),scriptEle = document.createElement('script');
    scriptEle.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js';
    $head.append(scriptEle);


//$(".scrollLoading").scrollLoading();




//---------------首页页头的交互
//左窗 core-more
	//左窗的开关控制
	$(".core-more .js-close").click(function(){
		$('.core-more').hide();
		$('.core-main').show();
	});
	$(".core-main .js-btn-more").click(function(){
		$('.core-main').hide();
		$('.core-more').show();
	});




	//房屋小区 文本框(keyup后，触发联想弹出层)
	$(".core-more .js-xiaoqu-btn input").keyup(function(){//根据用户输入的值，下拉框中联想小区的名字
		//<input type="hidden" name="User_Shen" value="北京">页面上这个隐藏按钮必须要有默认值。要根据此值作为参数，ajax请求后，生成联想房屋小区的下拉列表
		var _User_Shen = $('.core-form').find('input[name=User_Shen]').val();//所在省市
		var _keyword = $(this).val();
		var _region_id = $("#region_id").val();

		if (_keyword.length==0){return false;}


		new_data = new Array();
		//ajax成功后:(根据返回的信息，设置下拉框)

	    $.ajax({
        	data: "get",
        	url: "http://beijing.17house.com/baojia/"+_region_id+"/"+_keyword+"/",
        	data: "",
        	cache: false,
        	async: false,
        	success: function (data) {
				var t = eval(data);
				$.each(t, function (index, item) {
                 	var name = t[index].name;
				 	new_data.push( name );
             	});
        	}
    	})


		$('.xiaoqu-dropbox .absbox').slideDown(200);
		var _html = '';
		var len = new_data.length;

		if(len>0){

			for(var i=0;i<len;i++){
				_html += '<li>'+new_data[i]+'</li>';
			}
			$('.xiaoqu-dropbox .absbox').html($(_html));
			$(".xiaoqu-dropbox .absbox > li").bind("click",function(){
				$(this).addClass('active').siblings().removeClass('active');
				$('.js-xiaoqu-btn input').val($(this).html());
				$('.xiaoqu-dropbox .absbox').slideUp(500);
			});
		}

	});
	//房屋小区(联想弹出层的显示隐藏)
	$(".core-more .js-xiaoqu-btn").click(function(){
		var _default = $(this).find('input').attr('data-value');
		var _val = $(this).find('input').val();
		if (_val.length>0 && _val!=_default){
			$('.xiaoqu-dropbox .absbox').slideToggle(500);
		}
	});




	//装修风格
	$(".core-more .js-fengge .tbtn").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(".core-more .js-fengge").find('.ipt').val( $(this).html() );
	});

	//房屋状态
	$(".core-more .js-zhuangtai .tbtn").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(".core-more .js-zhuangtai").find('.ipt').val( $(this).html() );
	});





//首页:主窗 core-main
	offerIndex.focusBlur($('.core input[type=text]'));

	//初始化界面: 已有 xxx人定制了装修报价方案
	if(  $('.core-form .js-orange-person').length>0 ){
		$.post('http://news.17house.com/znbj-index.html?act=m&ajax=true',function(data){//报名人数接口
			if(data.code == 200){$('.core-form .js-orange-person').html(data.data);}
		},'json');
	}
	//总控 .core 里面所有弹出层（鼠标移出区域，全部关闭）
	$(".core").mouseleave(function(){
		$('.area-dropbox .absbox').slideUp();
		$('.housetype-dropbox .absbox').slideUp();
		$('.xiaoqu-dropbox .absbox').slideUp();
		$(".res-head").slideUp();/*装修模式关闭*/
	});

	
		//省市(弹出层)
	$(".core-main .js-area-btn").click(function(){
		$('.housetype-dropbox .absbox').hide();//把别的弹出层关了
		$(".res-head").slideUp();/*装修模式关闭*/
		$('.area-dropbox .absbox').slideToggle(500);
	});
	if(typeof(GP)!=="undefined"){
		offerIndex.dropArea(GP,GC1);//省市下拉菜单初始化
	}





	//装修报价首页:右上角表单提交
	//逻辑： 右上角表单>提交>出弹窗.pop-offer-making > 再提交(数据提交到后台)  > 出动画1.5秒 > 直接拉到详情页
	$(".core .core-form").submit(function(){
		event.preventDefault();//阻止表单提交事件
		$(this).find('.error-tip').html('');
		var square = $(this).find('input[name=square]');//必填
		if(!square.val().length || square.val() == square.attr('data-value') ){$(this).find('.error-tip').html('请填写房屋面积');square.focus();return false;}
		var regTest = /[0-9]$/;
		if(!regTest.test( square.val() )){$(this).find('.error-tip').html('房屋面积需为数字');square.focus();return false;}
		//console.log('表单提交');

		var _that = $('.form-offer-buliding');
		_that.find('input[name=square]').val($(this).find('input[name=square]').val());//装修面积
		_that.find('input[name=xiaoqu]').val($(this).find('input[name=xiaoqu]').val());//所在小区
		_that.find('input[name=fengge]').val($(this).find('input[name=fengge]').val());//装修风格
		_that.find('input[name=zhuangtai]').val($(this).find('input[name=zhuangtai]').val());//房屋状态
		_that.find('input[name=User_Shen]').val($(this).find('input[name=User_Shen]').val());//所在省市
		_that.find('input[name=User_City]').val($(this).find('input[name=User_City]').val());//所在省市
		_that.find('input[name=housetype]').val($(this).find('input[name=housetype]').val());//房屋类型
		_that.find('input[name=shi]').val($(this).find('input[name=shi]').val());//室
		_that.find('input[name=ting]').val($(this).find('input[name=ting]').val());//厅
		//_that.find('input[name=chu]').val($(this).find('input[name=chu]').val());//厨
		//_that.find('input[name=wei]').val($(this).find('input[name=wei]').val());//卫
		//_that.find('input[name=yangtai]').val($(this).find('input[name=yangtai]').val());//阳台
		new popLayer($('.pop-offer-buliding'));//打开弹窗：生成报价
	});



	//首页:首屏弹窗[生成报价]
	if( $(".form-offer-buliding").length>0 ){
		offerIndex.focusBlur($('.form-offer-buliding input[type=text]'));
		offerIndex.initGetCode($('.form-offer-buliding [name=getcode]'));//获取短信验证码事件
		$(".form-offer-buliding").submit(function(){
			event.preventDefault();//阻止表单提交事件
			var square = $(this).find('input[name=square]');//面积-------------------------下列参数没有和ajax接口核对[未完!!]
			var xiaoqu = $(this).find('input[name=xiaoqu]');//所在小区
			var fengge = $(this).find('input[name=fengge]');//装修风格
			var zhuangtai = $(this).find('input[name=zhuangtai]');//房屋状态
			var User_Shen = $(this).find('input[name=User_Shen]');//所在省市
			var User_City = $(this).find('input[name=User_City]');//所在省市
			var housetype = $(this).find('input[name=housetype]');//房屋类型
			//var shi = $(this).find('select[name=shi]');//室
			var shi = $("#shi");
			//var ting = $(this).find('select[name=ting]');//厅
			var ting = $("#ting");
			//var chu = $(this).find('input[name=chu]');//厨
			//var wei = $(this).find('input[name=wei]');//卫
			//var yangtai = $(this).find('input[name=yangtai]');//阳台
		//表单验证

		var phone=$(this).find('input[name=phone]');

		if(phone.val()=='' || phone.val()==phone.attr('data-value') ){$(this).find('.error-tip').html('请填写手机号');phone.focus();return false;}
		var regTest = /^1[3|4|5|7|8][0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$/;
		if(!regTest.test( phone.val() )){$(this).find('.error-tip').html('电话格式不对，请检查');phone.focus();return false;}
		var code=$(this).find('input[name=code]');
		if(code.val()==''  || code.val()==code.attr('data-value') ){$(this).find('.error-tip').html('请填写验证码');code.focus();return false;}

		$.post('detail.php', {
		    action:'checkTelCode',
			phone: phone.val(),
			code:code.val()
		}, function(data) {
			if(data.error == 0){
				$('.pop-offer-buliding').hide();//关掉旧图层
				var dangci = 1;
				//new popLayer($('.pop-countdown1500'),{timeout:1900});
				new popLayer($('.pop-countdown1500'));
				offerIndex.countdown1500();//倒计时弹窗
				$.post('detail.php',{
					action:'sendTelPrice',
					shi:shi.val(),
					area:square.val(),
					phone: phone.val()
				}, function(data) {},'json');
				setTimeout(function(){
					var jiegou = phone.val()+'/'+shi.val()+'/'+ting.val()+'/1/1/1';
					var ucity = User_City.val();
					if ( ucity == '' ) {
						ucity = _city;
					}
					location.href='/baojia/'+ucity+'/'+square.val()+'/'+dangci+'/'+jiegou;
				},2000);//延时执行1次

			}else{
			   $('.pop-offer-buliding').find('.error-tip').html(data.massage);
			}
	     }, 'json');
		});
	}




	//点击按钮，调用弹窗轮播(每个图册都对应一个弹窗)
	$(".design-plan .plan-item").click(function(){
		var _index = $(this).index();
		var  _box = $('.pop-lunbo-box').eq(_index);
		_box.show();
		$('.popmask').show();
		popLunbo.init( _box , _box.find('.lunbo-slide'));
	});




	//首页:弹窗轮播图上的，点击“让TA帮我免费设计”
	$(".js-offer-freedesign-btn").click(function(){
		//这里要传个设计师id？
		$('.pop-lunbo-box').hide();
		var a10 = new popLayer($('.pop-offer-freedesign'));
	});
	//comForm.focusBlur($('.form-offer-freedesign input[type=text]'));


	$(".form-offer-freedesign").submit(function(){
		event.preventDefault();//阻止表单提交事件
		$(this).find('.error-tip').html('');

		var rname = $(this).find('input[name=rname]');//必填
		if(!rname.val().length || rname.val() == rname.attr('data-value') ){$(this).find('.error-tip').html('请填写您的姓名');rname.focus();return false;}
		var mobile=$(this).find('input[name=mobile]');//必填
		if(mobile.val()=='' || mobile.val()==mobile.attr('data-value') ){$(this).find('.error-tip').html('请填写手机号');mobile.focus();return false;}
		var regTest = /^1[3|4|5|7|8][0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$/;
		if(!regTest.test( mobile.val() )){$(this).find('.error-tip').html('电话格式不对，请检查');mobile.focus();return false;}
		var source = $(this).find('input[name=source]');//隐藏按钮

		//ajax成功后:
		$('.pop-offer-freedesign').hide();
		$('.popmask').hide();
		//alert('表单提交');

		//提交信息
		$.post('http://www.17house.com/xiaoguotu/gallery/signupjsonp', {
			source: source.val(),//隐藏按钮传进来
			realname: rname.val(),//姓名
			mobile: mobile.val(),//手机
			village: ''//所在小区
		}, function(data) {
			var status=parseInt(data.status);
			if (status==1){
				new popLayer($('.pop-baoming-error'));//弹窗:报名失败
				//new popLayer($('.pop-msg'),{msg:'报名失败 '+data.msg});//弹窗:报名失败
			}else{
				new popLayer($('.pop-baoming-ok'));//弹窗:报名成功
				//new popLayer($('.pop-msg'),{msg:'恭喜您预约成功'});//弹窗
			}
		}, 'jsonp');


	});


    //滚屏
	/*
    $(window).scroll(function() {
			var top=$(".offer-plist").offset().top;
			var scrollTop = $(document.body).scrollTop();
			//console.log("--------------------------"+top+"----------------"+scrollTop);
			if(scrollTop>top){
				$(".offersao").show();
			}else{
				$(".offersao").hide();
			}
    });
    */





	//页面:首页、列表页、详情页。（公用）扫一扫+分享(右侧浮层)
	$('.offersao .sao1-btn').click(function(){
		$(".offersao").addClass('active');
		$('.bgthree').slideDown();
		setTimeout(function(){
			$('.sao2 .sao-mobile').addClass('animated fadeInDown');
		}, 1000);
		setTimeout(function(){//播完动画后，复原
			$('.sao2 .sao-mobile').removeClass('animated fadeInDown');
			$('.sao2 .sao-code2').removeClass('animated rotateIn');
		}, 3000);
	});
	$('.offersao .js-close').click(function(){
		$('.offersao').removeClass('active');
		$('.bgthree').slideUp();
	});
	$('.offersao .sao-code2').click(function(){
		$('.offersao').removeClass('active');
		$('.bgthree').slideUp();
	});


	//右侧浮层:分享按钮
	$(".offersao .sao-share").mouseenter(function(){
		$(this).find('.wrap').addClass('active');
	});
	$(".offersao .sao-share").mouseleave(function(){
		$(this).find('.wrap').removeClass('active');
	});
	//详情页:顶部分享
	$(".top-share").mouseenter(function(){
		$(this).find('.wrap').addClass('active');
	});
	$(".top-share").mouseleave(function(){
		$(this).find('.wrap').removeClass('active');
	});

//详情页：精装、简装(切换表格)
	$(".aa-area-head .jz-btn").click(function(){
		var _index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.aa-area-con').eq(_index).addClass('active').siblings().removeClass('active');
	});

//详情页：下部 seo按钮（点击后展开seo文字链区域）
	$(".seo-switch-btn").click(function(){
		var _box =  $('.detail-houses-seo');
		if( _box.css("display") == "block" ){
			_box.hide();
		}else{
			_box.show();
		}
	});


//列表页：左侧拼串（住宅类型、房屋平米、装修风格）
	$('.offer-alist .a1btn').click(function(){
		$(this).parent('li').find('.active').removeClass('active');
		$(this).addClass('active');
		var _url='';
		var _nm =  $(this).attr('data-nm');
		var _val =  $(this).attr('data-val');
		if(_nm=='all'){
			$('.offer-alist .a1btn').removeClass('active');
			$(this).addClass('active');
			_url = 'b0a0o0';
		}else{
			$('.offer-alist .a1btn').eq(0).removeClass('active');
			var b=$('.offer-alist .a1btn[data-nm=b].active').attr('data-val');
			var a=$('.offer-alist .a1btn[data-nm=a].active').attr('data-val');
			var o=$('.offer-alist .a1btn[data-nm=o].active').attr('data-val');
			if(b==undefined){b='0';}
			if(a==undefined){a='0';}
			if(o==undefined){o='0';}
			_url = 'b'+b+'a'+a+'o'+o;
		}
		location.href = '/baojia/' + _url + '/';
	});



	//详情页。“重新生成报价清单”按钮  [生成报价] start
	//注：将 .form-offer-detail 的值，赋值给 弹窗中的 .form-offer-buliding-detail
	if( $(".form-offer-detail").length>0 ){

			//主卧 次卧 客卧 客厅 厨房 卫生间 阳台(文本框:限制只允许输入数字)
			$(".form-offer-detail .input").keyup(function(){
				var _val = $(this).val();
				var _val = _val.replace(/\D/g,'')
				$(this).val(_val);
				if(_val=='0' || _val==''){$(this).addClass('zero');}else{$(this).removeClass('zero');}
				//计算总面积
				var _that = $('.form-offer-detail');
				var sum=0;
				function getVal(nm){
					var v=$('.form-offer-detail').find('input[name='+nm+']').val();
					if(v==''){
						return 0;
					}else{
						return parseFloat(v);
					}
				}
				sum += getVal('zhuwo');
				sum += getVal('ciwo');
				sum += getVal('kewo');
				sum += getVal('ting');
				sum += getVal('chu');
				sum += getVal('wei');
				sum += getVal('yangtai');
				$("#all").val(sum);
				$('#houseArea').html(sum+'㎡');
			});

			offerIndex.focusBlur($('.form-offer-buliding-detail input[type=text]'));
			offerIndex.initGetCode($('.form-offer-buliding-detail [name=getcode]'));//获取短信验证码事件
			//往弹窗的表单注入数据
			$("#btn_detail").click(function(){
				event.preventDefault();//阻止表单提交事件
				if ( $("#type").val() == 1 ) {
					new popLayer($('.pop-offer-buliding'));//打开弹窗：生成报价
				}
				if ( $("#type").val() == 2 || $("#type").val() == '2') {
					$.post('detail.php',{
						action:'dynamicBb',
						type:$("#type").val(),
						all:$("#all").val(),
						zhuwo:$("#zhuwo").val(),
						ciwo:$("#ciwo").val(),
						kewo:$("#kewo").val(),
						keting:$("#keting").val(),
						chufang:$("#chufang").val(),
						weishengjian:$("#weishengjian").val(),
						yangtai:$("#yangtai").val()
					},
					function(data){
						$('.pop-offer-buliding').hide();//关掉旧图层
						//new popLayer($('.pop-countdown1500'),{timeout:1900});
						new popLayer($('.pop-countdown1500'));
						offerIndex.countdown1500();//倒计时弹窗
						setTimeout(function(){
							//location.href='detail';
							$('.pop-countdown1500').hide();//关掉手机号码验证图层
							$('.poplayer').hide();
							$('.popmask').hide();
						},2000);//延时执行1次
						if ( data.error == 0 ) {
							$("#type").val('2');
							$("#show_jing").html(data.jingzhuang);
							$("#show_jian").html(data.jianzhuang);
						} else {
							alert(data.msg);
						}
					},'json');
				}


			});
			//弹窗的表单提交
			if ( $("#type").val() == 1 ) {
			$(".form-offer-buliding-detail").submit(function(){
				event.preventDefault();//阻止表单提交事件
				//表单验证]
				var phone=$(this).find('input[name=phone]');
				var code=$(this).find('input[name=code]');
				if ( $("#type").val() == 1 ) {

					if(phone.val()=='' || phone.val()==phone.attr('data-value') ){$(this).find('.error-tip').html('请填写手机号');phone.focus();return false;}
					var regTest = /^1[3|4|5|7|8][0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$/;
					if(!regTest.test( phone.val() )){$(this).find('.error-tip').html('电话格式不对，请检查');phone.focus();return false;}

					if(code.val()==''  || code.val()==code.attr('data-value') ){$(this).find('.error-tip').html('请填写验证码');code.focus();return false;}
				}
				//ajax成功后:
				$.post('detail.php',{
					action:'dynamicBb',
					type:$("#type").val(),
					all:$("#all").val(),
					zhuwo:$("#zhuwo").val(),
					ciwo:$("#ciwo").val(),
					kewo:$("#kewo").val(),
					keting:$("#keting").val(),
					chufang:$("#chufang").val(),
					weishengjian:$("#weishengjian").val(),
					yangtai:$("#yangtai").val(),
					phone:phone.val(),
					code:code.val()
				},
				function(data){
					if (data.error == 500) {
						alert('验证码错误');
						return;
					}
					$('.pop-offer-buliding').hide();//关掉旧图层
					//new popLayer($('.pop-countdown1500'),{timeout:1900});
					new popLayer($('.pop-countdown1500'));
					offerIndex.countdown1500();//倒计时弹窗
					setTimeout(function(){
						//location.href='detail';
						$('.pop-countdown1500').hide();//关掉手机号码验证图层
						$('.poplayer').hide();
						$('.popmask').hide();
					},2000);//延时执行1次
					if ( data.error == 0 ) {
						$("#type").val('2');
						$("#show_jing").html(data.jingzhuang);
						$("#show_jian").html(data.jianzhuang);
					} else {
						alert(data.msg);
					}
				},'json');
				//ajax.....
			});
			}
	}
	//不验证手机号码
	$("#btn_detail_user").click(function() {
		$.post('detail.php',{
			action:'dynamicBb',
			type:2,
			all:$("#all").val(),
			zhuwo:$("#zhuwo").val(),
			ciwo:$("#ciwo").val(),
			kewo:$("#kewo").val(),
			keting:$("#keting").val(),
			chufang:$("#chufang").val(),
			weishengjian:$("#weishengjian").val(),
			yangtai:$("#yangtai").val(),
			city:$("#city").val()
		},
		function(data){
			$('.pop-offer-buliding').hide();//关掉旧图层
			new popLayer($('.pop-countdown1500'));
			offerIndex.countdown1500();//倒计时弹窗
			setTimeout(function(){
				$('.pop-countdown1500').hide();//关掉手机号码验证图层
				$('.poplayer').hide();
				$('.popmask').hide();
			},2000);//延时执行1次
			if ( data.error == 0 ) {
				$("#show_jing").html(data.jingzhuang);
				$("#show_jian").html(data.jianzhuang);
			} else {
				alert(data.msg);
			}
		},'json');
	})
	//详情页。“重新生成报价清单”按钮  [生成报价] end
	//下载功能




	/* page:首页首屏2016-6-2 start */
	offerIndex.focusBlur($('.calc-box input[type=text]'));

	//省市(弹出层)
	/*$(".calc-box .js-area-btn").click(function(e){
		var evt = e ? e:window.event;
            evt.stopPropagation();
		$('.area-dropbox .absbox').slideToggle(500);
	});*/
	
	
	/*获取焦点 失去焦点*/
	$(".calc-form").on("focus",".ipt_c",function(){
		$(this).css("color","#666");
	}).on("blur",".ipt_c",function(){
		if($(this).val()==$(this).attr("data-value")||$(this).val()==""){
			$(this).css("color","#dcdcdc");
		}
		
	})
	//省市(弹出层)
	$("#areashow").click(function(e){
		var evt = e ? e:window.event;
            evt.stopPropagation();
		$('.housetype-dropbox .absbox').hide();//把别的弹出层关了
		$(".res-head").slideUp();/*装修模式关闭*/
		$('.area-dropbox .absbox').slideToggle(500).removeClass("absbox2").addClass("absbox1");
		$(".area-1").css("display","block");
		$(".area-r").css("display","none");
		
	});
	$("#areashow2").click(function(e){
		var evt = e ? e:window.event;
            evt.stopPropagation();
		$('.housetype-dropbox .absbox').hide();//把别的弹出层关了
		$(".res-head").slideUp();/*装修模式关闭*/
		$('.area-dropbox .absbox').slideToggle(500).removeClass("absbox1").addClass("absbox2");
		$(".area-r").css("display","block");
		$(".area-1").css("display","none");
	});
	/*新加  点击空白 下拉框消失*/
	$(document).bind("click",function(e){
		var evt = e ? e:window.event;
            evt.stopPropagation();
		$('.area-dropbox .absbox').slideUp(500);	
		$(".res-head").slideUp(500);
	});
	function Resh(){
		var reshead2_v=true;
		
			$(".res-head2").on("click",function(e){
			var evt = e ? e:window.event;
	            evt.stopPropagation();
	            
	            if(reshead2_v){
	            	$(".res-head").slideDown(500);
	            	$('.area-dropbox .absbox').slideUp();/*城市下拉关闭*/
	            	reshead2_v=false;
	            }else{
	            	reshead2_v=true;
	            	$(".res-head").slideUp(500);
	            }
			
		});
		
	}
	Resh();
	
	if(typeof(GP)!=="undefined"){
		offerIndex.dropArea(GP,GC1);//省市下拉菜单初始化
	}


	$('.calc-box .res-head .res-t').click(function(e){
		var evt = e ? e:window.event;
            evt.stopPropagation();
		$(".res-head2 p").html($(this).html());
		$(this).siblings().removeClass('active');
		var idx = $(this).index();
		$('.calc-box .res-body .res-con').eq(idx).addClass('active').siblings().removeClass('active');
		$(".res-head").slideUp(500);
	});
	//表单提交:
	$('.calc-box .btnbox').click(function(){
		
		$(this).addClass('active');

		var _form = $('.calc-form');
		$('.calc-form').find('.error-tip').html('');//复原
		$('.calc-form').find('.ipt').removeClass('active');//复原

		//根据手机文本框是否显示，判断是第1次，还是已填写过手机在进行重复查询
		var flag=0;
		if($('#mobileInputBox').css('display')=='block'){
			flag=0;
		}else{
			flag=1;
		}
		//表单检测：
		var area = _form.find('input[name=area]');//必填
		if(!area.val().length || area.val() == area.attr('data-value') ){$('.area-dropbox .absbox').slideDown(500).removeClass("absbox2").addClass("absbox1");$(".area-r").css("display","none");
		$(".area-1").css("display","block");return false;}
        
		var square = _form.find('input[name=square]');//必填
		var User_City = _form.find('input[name=User_City]');
		if(!square.val().length || square.val() == square.attr('data-value') ){_form.find('.error-tip').html('请填写房屋面积');square.focus();return false;}
		var regTest = /^(?:[0-9]{1,3}|1000)$/;
		if(!regTest.test( square.val() )){_form.find('.error-tip').html('房屋面积需为小于1000的数字');square.focus();return false;}
		if (flag==0){
			var phone=_form.find('input[name=phone]');
			if(phone.val()=='' || phone.val()==phone.attr('data-value') ){_form.find('.error-tip').html('请填写手机号');phone.focus();return false;}
			var regTest = /^1[3-9][0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$/;
			if(!regTest.test( phone.val() )){_form.find('.error-tip').html('电话格式不对，请检查');phone.focus();return false;}
		}
 
		setTimeout(function(){
			$('.calc-box .btnbox').removeClass('active');
		},1000);
		
		var ucity = User_City.val();
		if ( ucity == '' ) {
			ucity = _city;
		}
		
		
		if (flag==0){
			var phone1 = phone.val();
		} else if (flag == 1) {
			phone1 = $("#User_Phone").val();
		}
		//cookie拿落地页
		var $firsturl=CommonCookie.getCookie("userMail");
		var $secondurl=window.location.href;
		var Fsurl = /semzengbin\=/;
		//三个channel的赋值
		var cF="站内";
		var cS="PC-Landing";
		var cK="智能报价器";
        var Name="匿名";
        var Type="3";
		//判断sem或者新媒体
        var XmtUrl=/xmt\=/;
        if(Fsurl.test($secondurl)){
        	cF="SEM";
        }else if(XmtUrl.test($secondurl)){
			cF="新媒体";
			var ArrXmt=$secondurl.split("xmt=");
			var ArrFirst=[["weixin","微信公众号"],["weixin-caidan","公众号菜单"],["weixin-guanggao","公众号广告"],["weixin-guanzhu","公众号关注"],["weixin-fuwu","公众号服务"],["weixin-wangye","公众号网页"],["weibo","微博"],["weibo-caidan","微博菜单"],["weibo-huodong","微博活动"],["weibo-zixun","微博咨询"],["zimeit","自媒体"],["zimeit-lianjie","自媒体链接"],["BD","渠道合作"],["qq","QQ群"],["gerenweixin","个人微信"],["huodong","活动"],["qita","其他"]];
			for(var i=0;i<ArrFirst.length;i++){
		    	if(ArrXmt[1]==ArrFirst[i][0]){
		    		cS=ArrFirst[i][1]+'-PC';
		    	}
		    }
		}
		//下面这些放在ajax请求成功后：
		$.post('http://appapi.17house.com/ZnbjApi.php?action=znbjCalculatorNew&callback=?',{
			name:Name,
        	mobile:phone1,
        	channelFirst:cF,
        	channelSecond:cS,
        	channelKey:cK,
        	cityName:ucity,
        	zxdate:"",
        	square:square.val(), 
        	community:"",
        	smsType:Type,
        	referrerFirst:$firsturl,
        	referrerSecond:$secondurl
		},function(data){
			$('.calc-box .btnbox .btntxt').html('重新计算');
			$('.btnbox .btnbg').addClass("active");
			//简单装修
			$('#base_shigong').html((data.data.jianzhuang.total_price/10000).toFixed(2));
			$('#base_all').html((data.data.jianzhuang.total_price/10000).toFixed(2));//装修预算
			$('#base_shi').html(data.data.jianzhuang.zhuwo.price+data.data.jianzhuang.ciwo.price);//卧室
			$('#base_ting').html(data.data.jianzhuang.keting.price);//餐厅
			$('#base_chu').html(data.data.jianzhuang.chufang.price);//厨房
			$('#base_wei').html(data.data.jianzhuang.weishengjian.price);//卫生间
			$('#base_yangtai').html(data.data.jianzhuang.yangtai.price);//阳台
			$('#base_other').html(data.data.jianzhuang.qita.price);//其他预算
			//高级装修
			$('#fine_shigong').html((data.data.jingzhuang.total_price/10000).toFixed(2));
			$('#fine_all').html((data.data.jingzhuang.total_price/10000).toFixed(2));//装修预算
			$('#fine_shi').html(data.data.jingzhuang.zhuwo.price+data.data.jingzhuang.ciwo.price);//卧室
			$('#fine_ting').html(data.data.jingzhuang.keting.price);//餐厅
			$('#fine_chu').html(data.data.jingzhuang.chufang.price);//厨房
			$('#fine_wei').html(data.data.jingzhuang.weishengjian.price);//卫生间
			$('#fine_yangtai').html(data.data.jingzhuang.yangtai.price);//阳台
			$('#fine_other').html(data.data.jingzhuang.qita.price);//其他预算
			if (flag==0){
				var jiegou = phone.val()+'/2/1/1/1/1';
				$("#User_Phone").val(phone.val());
			} else if (flag == 1) {
				var jiegou = $("#User_Phone").val()+'/2/1/1/1/1';
			}
			
			var dangci = 5;

			var detailurl='/baojia/'+ucity+'/'+square.val()+'/'+dangci+'/'+jiegou;
			$('.big-more-btn').addClass('active').attr('href',detailurl).html("查看详细报价清单 >");//改url，指向详情页
			$('#mobileInputBox').hide();//首次提交后，把手机文本框关掉
			$('.res-memo').show();
			$("#show2weima").attr("src",data.weixing);
			$("#Roll_txt").hide();
			$("#Reminder_text").show();

		},'json');

		/*数据监控    start */
		var urlreferer=document.referrer || window.location.href;
		var urlReg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
		var refurl=urlReg.exec(urlreferer);
		var urldomain=refurl[0];//
		var userinfo='智能报价器----一级渠道：----'+cF+'----二级渠道：----'+cS+'-----城市：'+User_City.val()+'---手机号码：'+phone1+'---面积：'+square.val();
		userinfo = encodeURIComponent(userinfo);
		var staturl='http://stat.17house.com/stat.js?site=17houseadvert&brower_type=pc&ltype=baoming&stype=zhineng_baojia&tag_index=0&tag_name='+encodeURIComponent('智能报价器')+'&phone='+phone1+'&urlreferer='+urlreferer+'&userinfo='+userinfo+'&urldomain='+urldomain+'&t='+new Date().getTime();
		if($firsturl || Fsurl.test($secondurl)){
			staturl='http://stat.17house.com/stat.js?site=pc&housetype=jzsem&houseyewu=baoming&urlreferer='+$firsturl+'&userinfo='+userinfo+'&urldomain='+urldomain+'&t='+new Date().getTime();
		}
		$.getScript(staturl);
		/*数据监控  end*/


	});

	/* page:首页首屏end */
 /*文字滚动start*/
var Roll_txt=function(Scroll_txt){
		
		var bobao=Scroll_txt;
		
		function animator(currentItem) {

			//work out new anim duration
		var distance = currentItem.height();
		duration = (distance + parseInt(currentItem.css("marginTop"))) / 0.025;

		//animate the first child of the bobao
		currentItem.animate({ marginTop: -distance }, duration, "linear", function() {

			//move current item to the bottom
			currentItem.appendTo(currentItem.parent()).css("marginTop", 0);

			//recurse
			animator(currentItem.parent().children(":first"));
		});
    };
    //start the bobao
	animator(bobao.children(":first"));

	//set mouseenter
	bobao.mouseenter(function() {

		//stop current animation
		bobao.children().stop();

	});

	//set mouseleave
	bobao.mouseleave(function() {

		//resume animation
		animator(bobao.children(":first"));

	});
};
	/*文字滚动end*/
	Roll_txt($(".scoll-y"));
	/*mac兼容start*/
	var isMac = function() {
		return /macintosh|mac os x/i.test(navigator.userAgent);
	}();
	if(isMac){
		$(".sc-ul li").css("font-size","12px");
		$(".sc-ul").css("padding","0 0 0 28px");
		$(".cDGray_spa").css("padding-left","35px");
	}
	/*mac兼容end*/
	/*报名数量++ start*/
	var _syNum=78;
    function setT(){  
    	// 凌晨0点--23点  每个小时随机增加0-150名报名数
    	var _hour = new Date().getHours();
    	if(_hour == 0){
                _syNum = 78;
           }else if(_hour > 0 && _hour < 24){
                _syNum =(_hour*100 + (new Date().getMinutes())*3 );
            }
    		$(".calc-box .man_num").find("span").html(_syNum);
    		$(".wbox-l").find(".t1").find("i").html(_syNum);
    	setTimeout(function(){ 
    		setT();
    	},3600000);  	
    	
    };
    setT();
	/*报名数量++ end*/
});
