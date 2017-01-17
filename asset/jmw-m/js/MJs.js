$(function(){
	//公告底部查看更多
	$("li.base-5 a").toggle(
		function(){
			$(".check_more").show();
		},
		function(){
			$(".check_more").hide();
		}
	);

	//上传头像-下拉列表
	$(".upSelect span").toggle(
		function(){
			$(this).siblings("ul").show();
		},
		function(){
			$(this).siblings("ul").hide();
		}
	);

	//登录-密码输入框
	$("#uPwdshow").focus(function () {
        $(this).hide();
        $("#uPwd").show().focus();
    });
    $("#uPwd").blur(function () {
        if ($(this).val() == '') {
            $(this).hide();
            $("#uPwdshow").show();
        }
    });

    $("#rePwdshow").focus(function () {
        $(this).hide();
        $("#rePwd").show().focus();
    });
    $("#rePwd").blur(function () {
        if ($(this).val() == '') {
            $(this).hide();
            $("#rePwdshow").show();
        }
    });

    //项目页性别切换
    $(".you_a span").click(function(){
    	$(this).addClass("checked ");
    	$(this).siblings("span").removeClass("checked");
    });

    //弹出层透明背景
    $(".tm_bg").css( 'width',$(window).width()+'px').css('height',$(window).height()+'px');
	window.onresize=function(){$(".tm_bg").css( 'width',$(window).width()+'px').css('height',$(window).height()+'px');}

	//关闭留言咨询弹出层
	$(".clothe-4").click(function(){
		$(".tm_bg").hide();
		$(".J-clothe").hide();
	});

	//隐藏留言咨询弹出层，显示专家咨询弹出层
	// $(".clothe-3 a").click(function(){
	// 	$(".J-clothe").hide();
	// 	$(".J-extent").show();
	// });

	//显示专家咨询弹出层 
	$(".xm_ico3,.content_phone ul li.icons4 a").click(function(){
		$(".J-extent").show();
		$(".tm_bg").show();
	});

	//关闭专家咨询弹出层
	$(".extentTop a").click(function(){
		$(".tm_bg").hide();
		$(".J-extent").hide();
	});

	//选择行业下拉列表
	$(".tend_li1 a").toggle(
		function(){
			$("#J-captain-1").show();
			$("#J-captain-2").hide();
			$("#J-captain-3").hide();
			$("#J-captain-4").hide();
			$('#tend_li1 .sanJiao').css('transform','rotate(180deg)');
		},
		function(){
			$("#J-captain-1").hide();
			$('#tend_li1 .sanJiao').css('transform','rotate(0deg)');
		}
	);
	
	$("#captain-1 li:eq(0)").addClass("li_gray");
	$(".stick-1:eq(0)").show();
	$("#captain-1 li").click(function(){
		$(".stick-1").eq($(this).index()).show().siblings().hide();
		$(this).addClass("li_gray").siblings().removeClass("li_gray");
	});

	//选择投资金额
	$(".tend_li2 a").toggle(
		function(){
			$("#J-captain-2").show();
			$("#J-captain-1").hide();
			$("#J-captain-3").hide();
			$("#J-captain-4").hide();
			$('#tend_li2 .sanJiao').css('transform','rotate(180deg)');
		},
		function(){
			$("#J-captain-2").hide();
			$('#tend_li2 .sanJiao').css('transform','rotate(0deg)');
		}
	);
	//适合人群
	$(".tend_li4 a").toggle(
		function(){
			$("#J-captain-3").show();
			$("#J-captain-1").hide();
			$("#J-captain-2").hide();
			$("#J-captain-4").hide();
			$('#tend_li4 .sanJiao').css('transform','rotate(180deg)');
		},
		function(){
			$("#J-captain-3").hide();
			$('#tend_li4 .sanJiao').css('transform','rotate(0deg)');
		}
	);
	//加盟区域
	$(".tend_li6 a").toggle(
		function(){
			$("#J-captain-4").show();
			$("#J-captain-3").hide();
			$("#J-captain-1").hide();
			$("#J-captain-2").hide();
			$('#tend_li6 .sanJiao').css('transform','rotate(180deg)');
			
		},
		function(){
			$("#J-captain-4").hide();
			$('#tend_li6 .sanJiao').css('transform','rotate(0deg)');
		}
	);
	//显示中国加盟网专家在线
	$(".about_us li.about_4").click(function(){
		$(".tm_bg").show();
		$(".J-pure").show();
	});
	//关闭中国加盟网专家在线
	$(".pureTop a").click(function(){
		$(".tm_bg").hide();
		$(".J-pure").hide();
	});

	//行业排行标题切换
	$(".myexcite li").click(function(){
		$(this).addClass("red_se").siblings().removeClass("red_se");
	});

	//全部行业排行显示隐藏切换
	$(".J-sight span").toggle(
		function(){
			$(".J-excite").hide();
		},
		function(){
			$(".J-excite").show();
		}
	);

	//我要点评li选中状态
	$(".comment_box li").click(function(){
		$(this).addClass("choose").siblings().removeClass("choose");
	});

	//项目内页快捷留言
	var messageTag = 1;
	$(".village-1 span").click(function(){
		if(messageTag==1){
			$(this).siblings(".village-1-ul").show();
		}
		else
		{
			$(this).siblings(".village-1-ul").hide();
		}
		messageTag *=-1;
	}
		
	);
	$(".village-1-ul li").click(function(){
		$(this).addClass("whitSe").siblings().removeClass("whitSe");
		$(".village-2 textarea").val($(this).html());
		$(this).parent().hide();
		messageTag = 1;
	});
	
});