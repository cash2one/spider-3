//来源于	http://s1.17house.com/xiaoguotu/js/gallery_pop.js
// 2016-2-29 18:29

/*sem参数统计*/
jQuery(function($){
	var Site = document.location.toString();　
	var arrUrl = Site.split("?");
	var Start = arrUrl[1];
	var cc='';
	
	var Sirl = /semzengbin\=/;
	if(Start&&Sirl.test(Start)){
        document.cookie = 'userMail=' + encodeURIComponent(Site) + ';expires=' + 0 + ';domain=' + '17house.com'+ ';path=' + '/';
        $.getScript( "http://www.17zhuangxiu.com/signups/Ajaxcom.php?action=geturlbycookie&url="+encodeURIComponent(Site));
        $.getScript( "http://appapi.17house.com/ZnbjApi.php?action=geturlbycookie&url="+encodeURIComponent(Site));
	}
});
var popLayer;
jQuery(function($){

	/*
	 插件:弹窗
	 调用方式（以下弹窗名是固有自带的。如果页面要调弹窗，可以用随意新名称）：
	 var a1 = new popLayer($('.pop-design-free3'),{timeout:223});//(延时关闭)
	 var a1 = new popLayer($('.pop-design-free3'));
	 var a2 = new popLayer($('.pop-fav'));
	 var a3 = new popLayer($('.pop-fav2'));
	 var a4 = new popLayer($('.pop-fav-ok'));
	 var a5 = new popLayer($('.pop-fav-error'));
	 var a6 = new popLayer($('.pop-baoming-ok'));
	 var a7 = new popLayer($('.pop-baoming-error'));
	 var a8 = new popLayer($('.pop-ziliao-ok'));
	 var a9 = new popLayer($('.pop-designer'));
	 var a10 = new popLayer($('.pop-login'));

	 var a0 = new popLayer($('.pop-msg'));	$('.pop-msg').find('.msg').html('信息提示',{timeout:3000});	//信息提示(延时关闭)
	 var a0 = new popLayer($('.pop-msg'));	$('.pop-msg').find('.msg').html('信息提示');	//信息提示
	 */
	popLayer = function (target, options) {
		this.options = null;
		this.target = null;
		this.timeout = null;
		this.init(target, options);
	}
	popLayer.prototype.init = function (target, options) {
		this.options = options;
		this.target = target;
		this.timeout = null;

		target.fadeIn();
		if(options) {

			//延时
			if (options.timeout !== undefined ) {
				if(options.timeout > 0){
					console.log(options.timeout);

					target.timer = setTimeout(function(){
						target.hide();
						$('.popmask').hide();
					},options.timeout);
				}
			}
			//消息提示(任意 .poplayer 中只要有 .msg的 元素，就可以接受msg参数，并显示提示信息)
			if (options.msg !== undefined ) {console.log(options.msg);
				if(options.msg.length > 0){
					console.log(options.msg);
					target.find('.msg').html(options.msg);
				}
			}
		}
		//创建遮罩层
		var $mask = $('<div class="popmask"></div>');
		if($('.popmask').length === 0){
			$('body').append($mask);
		}
		$('.popmask').show();

		//弹出层居中
		var target = this.target;
		target.css({
			marginTop : -1 * (target.height() / 2),
			marginLeft : -1 * (target.width() / 2)
		});

		//右上角关闭按钮
		this.target.find('.js-close').click(function(){
			$('.poplayer').hide();
			$('.popmask').hide();
		});

		//按ESC关闭所有弹层
		$(document).keydown(function(ev){
			if(ev.keyCode==27){
				$('.poplayer').hide();
				$('.popmask').hide();
			}
		});
		/*
		 //弹出层拖拽
		 var target=this.target;
		 var canMove = false,Rx, Ry;
		 target.mousedown(function (event) {
		 Rx = event.pageX - (parseInt(target.css("left")) || 0);
		 Ry = event.pageY - (parseInt(target.css("top")) || 0);
		 target.css("position", "fixed").css('cursor', 'move');
		 canMove = true;
		 }).mouseup(function () {
		 canMove = false;
		 target.css('cursor', 'auto');
		 });
		 $(document).mousemove(function (event) {
		 if (canMove) {	target.css({ top: event.pageY - Ry, left: event.pageX - Rx });	}
		 });*/


	}
//关闭弹出层
	popLayer.prototype.close = function () {
		$('.poplayer').hide();
		$('.popmask').hide();
	}

	/*
	 //示例
	 //var a = new popLayer($('.js_collect_pop'),{timeout:2000});//延时关闭
	 //var a = new popLayer($('.js_collect_pop'));
	 //var b = new popLayer($('.js_design_pop'));
	 */

//var a = new popLayer($('.js_collect_pop'),{timeout:2000});//延时关闭
//var a = new popLayer($('.js_collect_pop'));
//var b = new popLayer($('.js_design_pop'));


	/*
	 $("#button1").click(function(){
	 var a1 = new popLayer($('.pop-design-free3'));
	 });
	 */


	/*$("#button0").click(function(){
	 var a0 = new popLayer($('.pop-msg'));
	 $('.pop-msg').find('.msg').html('HELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLO',{timeout:3000});	//信息提示(延时关闭)

	 });*/


});
