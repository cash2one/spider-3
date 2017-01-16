//图库
$(function(){
	$(".big_white").hide();
	$(".pic_detail a.sideL").mouseover(function(){
		$(".big_white").show();
	})
	$(".pic_detail a.sideL").mouseout(function(){
		$(".big_white").hide();
	})
});

$(function(){
	$(".small_white").hide();
	$(".pic_detail .sideR a").mouseover(function(){
		$(this).children(".small_white").show();
		$(this).siblings().children(".small_white").hide();
	})
	$(".pic_detail .sideR a").mouseout(function(){
		$(".small_white").hide();
	})
});


//加盟视频
$(function(){
	$(".vadio ul li").mouseover(function(){
		$(this).children(".black_bj").show();
		$(this).siblings().children(".black_bj").hide();
	})
	$(".vadio ul li").mouseout(function(){
		$(".black_bj").hide();
	})
});

//成功案例
$(function(){
	$(".seccess").mouseover(function(){
		$(this).find(".qjd").show();
		$(this).siblings().find(".qjd").hide();
	})
	$(".seccess").mouseout(function(){
		$(this).find(".qjd").hide();
	})
});

//可能感兴趣的项目
$(function(){
	$(".it_img").mouseover(function(){
		$(this).children(".hover_bj,.it_img dl").show();
		$(this).siblings().children(".black_bj,.it_img dl").hide();
	})
	$(".it_img").mouseout(function(){
		$(this).children(".hover_bj,.it_img dl").hide();
	})
});

//投资额近似的项目、行业热度榜
$(function(){
	$(".heat_cont ul li a u").mouseover(function(){
		$(this).css("color","#e43c01");
	})
	$(".heat_cont ul li a u").mouseout(function(){
		$(this).css("color","#999");
	})
});

//店面图片和产品图片切换

//项目图库图片切换
$(function(){
	$("#gallery ul li").mouseover(function(){
		$(this).children(".black_bd").show();
		$(this).siblings().children(".black_bd").hide();
	})
	$("#gallery ul li").mouseout(function(){
		$(".black_bd").hide();
	})
});

/*表情*/
$(function(){
	$(".expression").mouseover(function(){
		$(".expression_list").show();
	})
	$(".expression").mouseout(function(){
		$(".expression_list").hide();
	})
});

/*项目图库tab切换*/
$(function () {
    $('.tab_ul li a').click(function () {
        $(this).parent().addClass('a_red').siblings('li').removeClass('a_red');
        $(".vadio .tab_ul_imgs").eq($(this).parent().index()).show().siblings('.vadio .tab_ul_imgs').hide();
    })

})

/*加盟资讯tab切换*/
/*$(function () {
	$(".all_tab li").click(function(){
		$(this).addClass("a_red").siblings("li").removeClass("a_red");	
		var index=$(this).index();
		$(".news").eq(index).show().siblings(".news").hide();
	});
})
*/



/*举报*/
$(function(){
	
	$(".people_t dl dd.dd2 a").click(function(){
		$(".reportZ_Z").show();			
	});
	
	$(".reportZ_Z_title a").click(function(){
		$(".reportZ_Z").hide();	
	});	
});

/*背景弹出层*/
$(function(){
	$("#box,.bgDiv").css( 'width',$(window).width()+'px').css('height',$(window).height()+'px');
	window.onresize=function(){$("#box").css( 'width',$(window).width()+'px').css('height',$(window).height()+'px');}
	
	$(".second .second_r ul li:last").css("border-bottom","none");	
});

//2015.3.30-首页悬浮变背景色
$(function(){
	$(".third .first_title ul li").mouseover(function(){
		$(this).css("background","#e43c01");	
	}).mouseout(function(){
		$(this).css("background","#d5d5d5");	
	});	
});


$("#black_ceng").css({'width':$(window).width()+'px','height':$(window).height()+'px'});
	window.onresize=function(){$("#black_ceng").css({'width':$(window).width()+'px','height':$(window).height()+'px'});}


















