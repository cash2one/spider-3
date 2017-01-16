 $.fn.extend({tab:function(){
		this.each(function(){
		$(this).children('.tit').children('li').on('mouseover',function(){
			$(this).addClass('xian_select').siblings('.xian_select').removeClass('xian_select');
			$(this).parent().siblings('.tit_con').children('ul').eq($(this).index()).show().siblings().hide();		 
		 })   
	 })
}});




