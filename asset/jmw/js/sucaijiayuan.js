$(function(){
	  //banner滚动
	  var bannerLength = $('.showList li').length;
	  for(i=0; i<bannerLength; i++){
		  $('.showList li').eq(i).text(i+1)
	  }
	   $('.showList li').mousemove(function(){
			 window.clearTimeout(timer)
			 $('.showList li').removeClass('special')
			 $(this).toggleClass('special')
			 thisImg = $(this).attr('img')
			 $('.banner2').css('background','url("'+ thisImg +' ")  no-repeat center 0')
			 $('.banner').animate({opacity:0},1000,function(){   $('.banner').css('background-image','url("'+ thisImg +'")').fadeTo("slow", 1000)    })
			 thisIndex = $(this).index()+1>=bannerLength ? 0 :  $(this).index()+1
			 timer = window.setTimeout( "$('.showList li').eq(thisIndex).trigger('mousemove') ", 3000  )
	})
	//自动调用banner，case滚动

	timer = window.setTimeout( "$('.showList li').eq(1).trigger('mousemove')"  , 3000  )
	window.setInterval( "$('.case-left-arrow').trigger('mousemove')"  , 2000  )

});
/*
本代码由【素材家园】收集并编辑整理;
尊重他人劳动成果;
转载请保留【素材家园】链接 - 【www.sucaijiayuan.com】
*/