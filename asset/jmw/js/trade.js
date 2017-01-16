$(function(){
	$('#nav_select .zong_nav .li1').mouseover(function(){
		$(this).addClass('sj_selected').siblings('.sj_selected').removeClass('sj_selected');
		
	}).mouseout(function(){
		$('#nav_select .zong_nav .li1').removeClass('sj_selected');
		
	})
	
	// 网站导航
	$('.ttbar_navs').hover(function(){
		$(this).css('background','#fff');
		$(this).css('border','1px solid #eeeeee');
		$('.i6_2').show();
		$('.i6').hide();
		$('.dorpdown_layer').show();
	},function(){
		$(this).css('background','#fafafa');
		$(this).css({'border':'1px solid #fafafa','border-top':'none','border-bottom':'none'});
		$('.i6_2').hide();
		$('.i6').show();
		$('.dorpdown_layer').hide();
	})
	/*加盟聚焦*/
	$('.juJiao ul li:nth-child(10n)').css('margin-right','0');
	

// 图片放大

$('.joinItemImg li a img').hover(function(){
	$(this).stop().animate({"width":'307.8px',"height":'205.2px','marginTop':'-11.4px','marginLeft':'-7.6px'},'500')
},function(){
	$(this).stop().animate({"width":'285px',"height":'190px','marginTop':'0px','marginLeft':'0px'},'500')
})
	// //导航显示
	// 	$('.banWrap_left .item').hover(function(){
	// 		var eq = $('.banWrap_left .item').index(this),				//获取当前滑过是第几个元素
	// 			h = $('.banWrap_left').offset().top,						//获取当前下拉菜单距离窗口多少像素
	// 			s = $(window).scrollTop(),									//获取游览器滚动了多少高度
	// 			i = $(this).offset().top,									//当前元素滑过距离窗口多少像素
	// 			item = $(this).children('.item_list').height(),				//下拉菜单子类内容容器的高度
	// 			sort = $('.banWrap_left').height();						//父类分类列表容器的高度
			
	// 		if ( item < sort ){												//如果子类的高度小于父类的高度
	// 			if ( eq == 0 ){
	// 				$(this).children('.item_list').css('top', (i-h));
	// 			} else {
	// 				$(this).children('.item_list').css('top', (i-h)+1);
	// 			}
	// 		} else {
	// 			if ( s > h ) {												//判断子类的显示位置，如果滚动的高度大于所有分类列表容器的高度
	// 				if ( i-s > 0 ){											//则 继续判断当前滑过容器的位置 是否有一半超出窗口一半在窗口内显示的Bug,
	// 					$(this).children('.item_list').css('top', (s-h)+2 );
	// 				} else {
	// 					$(this).children('.item_list').css('top', (s-h)-(-(i-s))+2 );
	// 				}
	// 			} else {
	// 				$(this).children('.item_list').css('top', 0 );
	// 			}
	// 		}	

	// 		$(this).addClass('item_select');
	// 		$(this).children('.item_list').css('display','block');
	// 	},function(){
	// 		$(this).removeClass('item_select');
	// 		$(this).children('.item_list').css('display','none');
	// 	});

	//免费直播
	$('.li_phone').hover(function(){
		$('.pic_phone').show();
	},function(){
		$('.pic_phone').hide();
	});
	$('.topbar_right li').eq(1).hover(function(){
		$('.pic_mobile').show();
		$('.topbar_right li a').eq(1).css('color','#df0303')
	},function(){
		$('.pic_mobile').hide();
		$('.topbar_right li a').eq(1).css('color','#999')

	})
	$('.topbar_right li').eq(2).hover(function(){
		$('.pic_two_wei1').show();
		$('.topbar_right li a').eq(2).css('color','#df0303')
		$('.topbar_right li a i').eq(2).css('backgroundPosition','-340px -204px ')

	},function(){
		$('.pic_two_wei1').hide();
		$('.topbar_right li a').eq(2).css('color','#999')
		$('.topbar_right li a i').eq(2).css('backgroundPosition','-50px 0px ')

	})
	$('.topbar_right li').eq(3).hover(function(){
		$('.pic_two_wei2').show();
		$('.topbar_right li a').eq(3).css('color','#df0303')
		$('.topbar_right li a i').eq(3).css('backgroundPosition','-290px -204px ')

	},function(){
		$('.pic_two_wei2').hide();
		$('.topbar_right li a').eq(3).css('color','#999')
		$('.topbar_right li a i').eq(3).css('backgroundPosition','-101px 0px ')

	})
	
	// 行业下拉
	 $(".logo_select").click(function (e) {
       $(".xiala_box").toggle();
       e = window.event || e;
       if (e.stopPropagation) {
         e.stopPropagation();
       } else {
         e.cancelBubble = true;
       }

     });
     $(".xiala_box").click(function (e) {
       e = window.event || e;
       if (e.stopPropagation) {
         e.stopPropagation();
       } else {
         e.cancelBubble = true;
       }
     });
     $(document).click(function () {
       $(".xiala_box").hide();
     });
	//更多
	$('#nav_select .li_more').hover(function(){
			$('.moreUl').show();
		},function(){
			$('.moreUl').hide();
	})
	
	
	//品牌包装 认证留言
	$('.ul_six a').hover(function(){
		$(this).toggleClass('doing').siblings().removeClass();
	})
	
	
	
	
	

	//优惠
	var $ySwap = $('.ymarqueeUP');
	var movetotop;
	$ySwap.hover(function() {
	clearInterval(movetotop);
	},function() {
	movetotop=setInterval(function() {
	var li_height = $ySwap.find('p').height();
	$ySwap.find('p:first').animate({marginTop:-li_height + 'px'},600,function() {
	$ySwap.find('p:first').css('marginTop',0).appendTo($ySwap);
	});
	},3000);
	}).trigger('mouseleave');
	//播报
	var bOdemo = document.getElementById("bOdemo");
	var bOdemo1 = document.getElementById("bOdemo1");
	var bOdemo2 = document.getElementById("bOdemo2");
	bOdemo2.innerHTML=document.getElementById("bOdemo1").innerHTML;
	function Marquee(){
	if(bOdemo.scrollLeft-bOdemo2.offsetWidth>=0){
	 bOdemo.scrollLeft-=bOdemo1.offsetWidth;
	}
	else{
	 bOdemo.scrollLeft++;
	}
	}
	var myvar=setInterval(Marquee,50);
	bOdemo.onmouseout=function (){myvar=setInterval(Marquee,50);}
	bOdemo.onmouseover=function(){clearInterval(myvar);}
	// 找美食滚动1111	
var zspeed1=50
	meishi1();
	function meishi1(){
	var seekzdemo=document.getElementById("seekContentZhaoBox"); 
	
	var seekzdemo2=document.getElementById("seekContentZhaoBoxzdemo2"); 
	var seekzdemo1=document.getElementById("seekContentZhaoBoxzdemo1"); 
	seekzdemo2.innerHTML=seekzdemo1.innerHTML 
	function zMarquee1(){ 
	if(seekzdemo.scrollTop>=seekzdemo1.offsetHeight){
	seekzdemo.scrollTop=0; 
	}
	else{ 
	seekzdemo.scrollTop=seekzdemo.scrollTop+1;
	} 
	} 
	var zMyMar1=setInterval(zMarquee1,zspeed1) 
	seekzdemo.onmouseover=function(){clearInterval(zMyMar1)} 
	seekzdemo.onmouseout=function(){zMyMar1=setInterval(zMarquee1,zspeed1)} 
	}
	// 找美食滚动2222	
var zspeed2=50
	meishi2();
	function meishi2(){
	var seekzdemoOneOne=document.getElementById("seekContentZhaoBoxOne"); 
	
	var seekzdemoTwo=document.getElementById("seekContentZhaoBoxzdemoTwo"); 
	var seekzdemoOne=document.getElementById("seekContentZhaoBoxzdemoOne"); 
	seekzdemoTwo.innerHTML=seekzdemoOne.innerHTML 
	function zMarquee2(){ 
	if(seekzdemoOneOne.scrollTop>=seekzdemoOne.offsetHeight){
	seekzdemoOneOne.scrollTop=0; 
	}
	else{ 
	seekzdemoOneOne.scrollTop=seekzdemoOneOne.scrollTop+1;
	} 
	} 
	var zMyMar2=setInterval(zMarquee2,zspeed2) 
	seekzdemoOneOne.onmouseover=function(){clearInterval(zMyMar2)} 
	seekzdemoOneOne.onmouseout=function(){zMyMar2=setInterval(zMarquee2,zspeed2)} 
	}

	//友情链接
	var $swap = $('.friendLianBottom');
	var movetotop;
	$swap.hover(function() {
	clearInterval(movetotop);
	},function() {
	movetotop=setInterval(function() {
	var li_height = $swap.find('ul').height();
	$swap.find('ul:first').animate({marginTop:-li_height+ 'px'},600,function() {
	$swap.find('ul:first').css('marginTop',0).appendTo($swap);
	});
	},5000)
	}).trigger('mouseleave')
	
//餐饮 酒水 滑过出现	
	$('.hover_crad > .canY_ul > li').mouseover(function(){	
		$(this).addClass('a_select').siblings('.a_select').removeClass('a_select');
		$('.hover_crad .canY_con .canY_con1').eq($(this).index()).show().siblings().hide();		
	})
	
	//移到图片出现说明
	$('.jiuLinH').hover(function(){
		 $('.show_black').slideToggle();
	  },function(){
		 $('.show_black').slideToggle();
	  })
	//资讯 选项卡
	$('.ziXun_first .tit li').mouseover(function(){
		$(this).addClass('xian_select').siblings('.xian_select').removeClass('xian_select');
		$('.ziXun_first .tit_con ul').eq($(this).index()).show().siblings().hide();
	})
	
	//品牌大全
	$('.many_jiaMLbtCon .jiaM_navs .ul_jsNav li').mouseover(function(){
		$(this).addClass('navs_select').siblings('.navs_select').removeClass('navs_select');
		$('.many_jiaMLbtCon .jsNav_bottomBoss .jsNav_bottom').eq($(this).index()).show().siblings().hide();
	})
	$('.many_jiaMLbtCon22 .jiaM_navs .ul_jsNav li').mouseover(function(){
		$(this).addClass('navs_select').siblings('.navs_select').removeClass('navs_select');
		$('.many_jiaMLbtCon22 .jsNav_bottomBoss .jsNav_bottom').eq($(this).index()).show().siblings().hide();
	})
	$('.many_jiaMLbtCon33 .jiaM_navs .ul_jsNav li').mouseover(function(){
		$(this).addClass('navs_select').siblings('.navs_select').removeClass('navs_select');
		$('.many_jiaMLbtCon33 .jsNav_bottomBoss .jsNav_bottom').eq($(this).index()).show().siblings().hide();
	})
	$('.daQuan_JM .hot_JM .hotHover_li').mouseover(function(){
		$(this).addClass('active').siblings('.active').removeClass('active');
		$($('.daQuan_JM .Manycon_JM .many_jiaM')[$(this).index('.daQuan_JM .hot_JM .hotHover_li')]).css('display','block').siblings().hide();
	})
	$('.daQuan_JM .hot_JM .hotHover_li:first').mouseover(function(){
		$(this).removeClass('active');
	})
	
	$('.daQuan_JM .hot_JM .hotHover_li').mouseover(function(){
		$(this).addClass('active').siblings('.active').removeClass('active');
		$($('.daQuan_JM .Manycon_JM .many_jiaM')[$(this).index('.daQuan_JM .hot_JM .hotHover_li')]).css('display','block').siblings().hide();
	})
	$('.daQuan_JM .hot_JM .hotHover_li:first').mouseover(function(){
		$(this).removeClass('active');
	})
	
	
	// 最新加盟项目
	
	$('.ItemAndList .joinItem .tableHead li').mouseover(function(){
		$(this).addClass('liBorder').siblings('.tableHead li').removeClass('liBorder');
		$('.ItemAndList .joinItem .joinItemImg:eq(0)').find('.joinItemImgUl').eq($(this).index()).show().siblings().hide();
		$('.ItemAndList .joinItem .joinItemImg:eq(1)').find('.joinItemImgUl').eq($(this).index()).show().siblings().hide();
	})
	// 加盟咨询推荐
	$('.allSeek .seekContent .seekContentTop div').mouseover(function(){
		$(this).addClass('seekContentTopRed').siblings('.allSeek .seekContent .seekContentTop div').removeClass('seekContentTopRed');
		$(this).find('a').addClass('seekContentTopBl');
		$(this).siblings('.allSeek .seekContent .seekContentTop div').find('a').removeClass('seekContentTopBl');
		
		$('.seekContentZhaoBox').eq($(this).index()).show().siblings().hide();
		$(this).parent().siblings('.seekMiAndBo').eq($(this).index()).show().siblings('.seekMiAndBo').hide();
		
	})
	
		
			 
        
       // 品牌大全左右
            $('.many_jiaM .many_jiaMLbtCon33').css({'left':'-1200px'})
		$('.many_jiaM .jiaM_navs .next').eq(0).on('click',function(){
			
			$('.many_jiaM .many_jiaMLbtCon').animate({'left':'-1200px'},'slow',function(){
				$('.many_jiaM .many_jiaMLbtCon').css({'position':'absolute'})
			});
			$('.many_jiaM .many_jiaMLbtCon22').animate({'left':'0px'},'slow',function(){
				$('.many_jiaM .many_jiaMLbtCon22').css({'position':'relative'})
                     $('.many_jiaMLbtCon22 li:eq(0)').addClass('navs_select').siblings('.navs_select').removeClass('navs_select');
				
                 $('.many_jiaM .many_jiaMLbtCon22 .jsNav_bottom').eq(0).show().siblings().hide();
                	


			});
			$('.many_jiaM .many_jiaMLbtCon33').css({'left':'1200px'})
		})
		$('.many_jiaM .jiaM_navs .next').eq(1).on('click',function(){
			
			 $('.many_jiaMLbtCon22 li:eq(0)').addClass('navs_select').siblings('.navs_select').removeClass('navs_select');
			
				$('.many_jiaM .many_jiaMLbtCon').css({'left':'1200px'})
			
			$('.many_jiaM .many_jiaMLbtCon22').animate({'left':'-1200px'},'slow',function(){
				$('.many_jiaM .many_jiaMLbtCon22').css({'position':'absolute'})});
			$('.many_jiaM .many_jiaMLbtCon33').animate({'left':'0px'},'slow',function(){
				$('.many_jiaM .many_jiaMLbtCon33').css({'position':'relative'})
                 $('.many_jiaMLbtCon33 li:eq(0)').addClass('navs_select').siblings('.navs_select').removeClass('navs_select');
				
                 $('.many_jiaM .many_jiaMLbtCon33 .jsNav_bottom').eq(0).show().siblings().hide();

			});
		})	
		$('.many_jiaM .jiaM_navs .next').eq(2).on('click',function(){
			 $('.many_jiaMLbtCon33 li:eq(0)').addClass('navs_select').siblings('.navs_select').removeClass('navs_select');
				$('.many_jiaM .many_jiaMLbtCon').animate({'left':'0px'},'slow',function(){
				$('.many_jiaM .many_jiaMLbtCon').css({'position':'relative'})
                 $('.many_jiaMLbtCon li:eq(0)').addClass('navs_select').siblings('.navs_select').removeClass('navs_select');
				
                 $('.many_jiaM .many_jiaMLbtCon .jsNav_bottom').eq(0).show().siblings().hide();

			});
			
			
				$('.many_jiaM .many_jiaMLbtCon22').css({'left':'1200px'})
			
				$('.many_jiaM .many_jiaMLbtCon33').animate({'left':'-1200px'},'slow',function(){
				$('.many_jiaM .many_jiaMLbtCon33').css({'position':'absolute'})});
		})
		    
		$('.many_jiaM .jiaM_navs .prev').eq(0).on('click',function(){
			
			$('.many_jiaMLbtCon li:eq(0)').addClass('navs_select').siblings('.navs_select').removeClass('navs_select');
			
			$('.many_jiaM .many_jiaMLbtCon').animate({'left':'1200px'},'slow',function(){
				$('.many_jiaM .many_jiaMLbtCon').css({'position':'absolute'})
			});
			$('.many_jiaM .many_jiaMLbtCon33').animate({'left':'0px'},'slow',function(){
				$('.many_jiaM .many_jiaMLbtCon33').css({'position':'relative'})

                $('.many_jiaMLbtCon33 li:eq(0)').addClass('navs_select').siblings('.navs_select').removeClass('navs_select');
				
                 $('.many_jiaM .many_jiaMLbtCon33 .jsNav_bottom').eq(0).show().siblings().hide();

			});
			$('.many_jiaM .many_jiaMLbtCon22').css({'left':'-1200px'})
		})
		$('.many_jiaM .jiaM_navs .prev').eq(2).on('click',function(){
			$('.many_jiaMLbtCon33 li:eq(0)').addClass('navs_select').siblings('.navs_select').removeClass('navs_select');
			$('.many_jiaM .many_jiaMLbtCon').css({'left':'-1200px'});
			$('.many_jiaM .many_jiaMLbtCon33').animate({'left':'1200px'},'slow',function(){
				$('.many_jiaM .many_jiaMLbtCon33').css({'position':'absolute'})});
			$('.many_jiaM .many_jiaMLbtCon22').animate({'left':'0px'},'slow',function(){
				$('.many_jiaM .many_jiaMLbtCon22').css({'position':'relative'})
                $('.many_jiaMLbtCon22 li:eq(0)').addClass('navs_select').siblings('.navs_select').removeClass('navs_select');
				
                 $('.many_jiaM .many_jiaMLbtCon22 .jsNav_bottom').eq(0).show().siblings().hide();
         
			});
		})	
		$('.many_jiaM .jiaM_navs .prev').eq(1).on('click',function(){
			$('.many_jiaMLbtCon22 li:eq(0)').addClass('navs_select').siblings('.navs_select').removeClass('navs_select');
			    $('.many_jiaM .many_jiaMLbtCon33').css({'left':'-1200px'});
			    $('.many_jiaM .many_jiaMLbtCon').animate({'left':'0px'},'slow',function(){
				$('.many_jiaM .many_jiaMLbtCon').css({'position':'relative'})

                 $('.many_jiaMLbtCon li:eq(0)').addClass('navs_select').siblings('.navs_select').removeClass('navs_select');
				
                 $('.many_jiaM .many_jiaMLbtCon .jsNav_bottom').eq(0).show().siblings().hide();

			});
				$('.many_jiaM .many_jiaMLbtCon22').animate({'left':'1200px'},'slow',function(){
				$('.many_jiaM .many_jiaMLbtCon22').css({'position':'absolute'})});
		})
		

		// banner
	var  len = $('#banner .tp li').length;
		var  width = $('#banner .tp li').innerWidth();
		$('#banner .tp').width(width*len)
		var  index = 0;
		var  timer = null;
		var  str = '';
		for(var i=0;i<len;i++){
		if(i==0){
		  str += '<li class="hover"></li>'
		}else{
		  str += '<li></li>'
			}
		}
		$('#banner .btn ul').append(str);
		$('#banner').hover(function(){
		 clearInterval(timer) 
		},function(){
		timer = setInterval(function(){
			   index++;
			   var n = index 
			   if(n == len){
					n = 0;   
			   }
			   $('#banner .btn ul li').eq(n).addClass('hover').siblings('.hover').removeClass('hover');
				  
			   if(index ==(len-1)){
				   var t = $('#banner .tp li:eq(0)').clone();
				   $('#banner .tp').append(t);
				   $('#banner .tp').width((len+1)*width)
			   }
			   var l = - index * width + 'px';
			   $('#banner .tp').animate({left:l},600,function(){
				   if(index == len){
					  $('#banner .tp li:last').remove();
					  $('#banner .tp').width(len*width);
					  $('#banner .tp').css('left',0);
					  index = 0;  
				   }
			   })	   
		 },3000)		 
		}).trigger('mouseleave')

		$('#banner .btn ul li').click(function(){
				var nn=$(this).index();
		   $('#banner .tp').animate({'left':-width*nn+'px'},600,function(){
				index=nn;
		   })
			$('#banner .btn ul li').eq($(this).index()).addClass('hover').siblings('.hover').removeClass('hover');
		})
//查看跟多
$('.banner_bottom a').hover(function(){
		$(this).children('dl').children('dd').children('.p_look').css('background','#e53535');
	},function(){
		$(this).children('dl').children('dd').children('.p_look').css('background','#ffb1a1');
	});
	
   
  // 弹层


  //        $('button').click(function(){
		// $('#click_Pfind4').show();
		// $('.gray_mask').show();}) 



});




//banner
 // window.onload = function(){
	// 		 function  getStyle(obj,attr){
	// 	           /* if(obj.currentStyle){
	// 				   return   obj.currentStyle[attr];
	// 				}else{			
	// 				   return  getComputedStyle(d1)[attr];  
	// 				}*/
	// 			return 	obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
           
	// 	     }
	// 	  function  move(obj,attr,zd,fn){
	// 	          var k = parseInt(getStyle(obj,attr));
	// 			  var speed  = 20;
	// 			  if(k>zd){
	// 			     speed = -20
	// 			  }
	// 			  clearInterval(obj.timer)
	// 			 obj.timer =setInterval(function(){
	// 			      var  tmp = parseInt(getStyle(obj,attr));
	// 				  var t2 = tmp + speed;
	// 				  if(t2 >=zd && speed > 0 || t2 <=zd && speed < 0){
	// 				      t2 = zd; 
	// 					   clearInterval(obj.timer);
	// 				  }
	// 				  obj.style[attr] = t2 + 'px';
	// 				  if(parseInt(getStyle(obj,attr)) == zd){
	// 				      if(fn){
	// 					       fn();
	// 						 }
	// 				  }
				 
	// 			 },30)	 	  
	// 	  }
	// 	  var banner = document.getElementById('banner');
	// 	  var btn = document.getElementById('btn');
	// 	  var pic = document.getElementById('pic');
	// 	  var li = pic.getElementsByTagName('li');
	// 	  var index = 0;
	// 	  var num = li.length ;
	// 	  //btn.innerHTML = '<li></li><li></li>';
	// 	  var  str = '';
	// 	  for(var i=0;i<num;i++){
	// 	      if(i==0){
	// 		     str += '<li class="active"></li>';
	// 		  }else{
	// 		     str += '<li></li>';
	// 		  } 
		    
	// 	  }
	// 	  //alert(str)
	// 	  btn.innerHTML = str;
	// 	  var bt = btn.getElementsByTagName('li');
	// 	  //var pre_bt = bt[0]
	// 	  for(var i=0;i<num;i++){
	// 	      bt[i].index = i;
	// 		  bt[i].onclick = function(){
			  
	// 		       //alert(this.index);
	// 			  //- this.index * 738;
	// 			  var n = this.index;
	// 			  move(pic,'left',- this.index * 738,function(){
				     
	// 				     //alert(n)
	// 					 index = n;
	// 			  })
	// 			  for(var j=0;j<num;j++){
	// 			       bt[j].className = '';
	// 			}
	// 			  this.className = 'active';
	// 		  }
	// 	  } 
	// 	  setInterval(function(){
	// 			index++
	// 			var l = -index *738;
	// 			if(index == num){
	// 			    var l2 = li[0].cloneNode(true);
	// 				pic.appendChild(l2);
	// 			}
				
	// 			for(var j=0;j<num;j++){
	// 			       bt[j].className = '';
	// 			}
	// 			 if(index >=num){
	// 			      bt[0].className = 'active';
	// 			 }else{
	// 			     bt[index].className = 'active';
	// 			 }
				
	// 			move(pic,'left',l,function(){
	// 				if(index == num){
	// 				    index = 0;
	// 				    pic.style.left = 0;
	// 					var t = pic.getElementsByTagName('li')[num];
	// 					pic.removeChild(t);
	// 				}
	// 			})
	// 	  },5000)
		  
		  
	// 	 // var d2 = document.getElementById('div2');


		

		  
	// }