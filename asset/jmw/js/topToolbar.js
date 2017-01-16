//二级菜单
 jQuery(function(){
		jQuery("#subLink1 a:not('.no_record a')").each(function(){
			$(this).wrap("<p></p>")
		});
		jQuery('#shade_bg').after("<div id='close_fixed' title='取消顶部固定'></div>")
		jQuery('#close_fixed').click(function(){
			jQuery('#testDiv').hide();	
		});
	 	//var widthVal=jQuery('#subLink1').width();
		//jQuery('#subLink1').width(widthVal);
		
	//for(var i=1;i<100;i++){	
		jQuery('#ShowMore1').hover(
			function(){
				jQuery(this).addClass("Over");		
			},
			function(){
				jQuery(this).removeClass("Over");
		});
		jQuery('#ShowMore3').hover(
				function(){
					jQuery(this).addClass("Over");		
				},
				function(){
					jQuery(this).removeClass("Over");
			});
		jQuery('#ShowMore4').hover(
				function(){
					jQuery(this).addClass("Over");		
				},
				function(){
					jQuery(this).removeClass("Over");
			});
	//}
	
	jQuery(window).scroll(function(){
		sTop=jQuery(window).scrollTop();
		if(sTop>25){
			jQuery('#close_fixed').show();
			jQuery('#shade_bg').show().parent('div').addClass('t_br');	
		}
		else
		{
			jQuery('#testDiv').show();
			jQuery('#close_fixed').hide();
			jQuery('#shade_bg').hide().parent('div').removeClass('t_br');
		}	
	});
	
	//优惠公告
	var rollTxt = jQuery('#top_notice');
	var movetotop;
	rollTxt.wrap("<div class='top_notice_box'></div>");
	rollTxt.show();
	rollTxt.find('a').attr('target','_blank');
	rollTxt.hover(function() {
			clearInterval(movetotop);
		},function() {
			movetotop=setInterval(function() {
			var li_height = rollTxt.find('li').height();
			rollTxt.animate({marginTop:-li_height + 'px'},500,function() {
			rollTxt.css('margin-top',0).find('li:first').appendTo(rollTxt);
		});
	},2500);
	}).trigger('mouseleave');	
	
}); 
