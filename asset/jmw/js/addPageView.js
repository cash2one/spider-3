//for navigator bar
function addPageView(type,project_id){
	jQuery.ajax({
		cache:false,
		url:'http://search.jmw.com.cn/ajax.php',
		dataType:'jsonp',
	    jsonp:"jsonpcallback",
		type:'get',
		data:'projectId=' + project_id+'&type='+type,
		success:function()
		{
		}
	});
}
function getData(type,project_id){
	jQuery.ajax({
		cache:false,
		url:'http://search.jmw.com.cn/ajax.php',
		dataType:'jsonp',
	    jsonp:"jsonpcallback",
		type:'get',
		data:'projectId=' + project_id+'&type='+ type + '&time='+new Date(),
		success:function(html)
		{
		//alert(html);
		jQuery('#totalBrand').html(html);
		},
		error: function(html) {
             // alert('Get data requête n\'a pas abouti'); 
			   
       }
	});
}

//for analytics page
function getTongji(project_id){
	jQuery.ajax({
		cache:false,
		url:'http://search.jmw.com.cn/tongji.php?',
		dataType:'jsonp',
	    jsonp:"jsonpcallback",
		type:'get',
		data:'id=' + project_id,
		success:function(html)
		{
		  //alert(html);
		 jQuery('#allPage').html(html);
		},
		error: function(html) {
             // alert('Tongji requête n\'a pas abouti');
               		  
       }
		
	});
}

function getZhishu(project_id){
	jQuery.ajax({
		cache:false,
		url:'http://search.jmw.com.cn/zhishu.php?',
		dataType:'jsonp',
	    jsonp:"jsonpcallback",
		type:'get',
		data:'id=' + project_id,
		success:function(html)
		{
		  //alert(html);
		 jQuery('#allPage2').html(html);
		},
		error: function() {
             //alert('Zhishu requête n\'a pas abouti');
          			 
       }
		
	});
}
  /*
	$.ajax({
			  async:false,
		 url:host+'ajax.php?type=qq&projectId='+$('#projectId').val()+'&timestamp='+timestamp,
			   		success:function(html)
			   		{
			   window.open("tencent://message/?uin=<?php echo $create_html_data['projectInfo'][0]['qq'];?>&amp;Menu=yes",'_self');
			   							//window.open('aa.html');
			   							  }
			   						});
									
	*/

//
function addQQ(type,project_id,qq){

     var timestamp =Date.parse(new Date());
	 
	jQuery.ajax({
		cache:false,
		async:false,
		url:'http://search.jmw.com.cn/ajax.php',
		dataType:'jsonp',
	    jsonp:"jsonpcallback",
		type:'get',
		data:'projectId=' + project_id+'&type='+ type + '&timestamp='+timestamp,
		success:function(html)
		{
		//alert(html);
		 window.open("tencent://message/?uin=" + qq + "&amp;Menu=yes",'_self');
		},
		error: function(html) {
             // alert('Get data requête n\'a pas abouti'); 
			   
       }
	});
}

/*$.ajax({
		url:host+'ajax.php?type=phone&projectId='+$('#projectId').val()+'&timestamp='+timestamp,
	success:function(html)
{}
}); */

function addPhone(project_id){

     var timestamp =Date.parse(new Date());
	 
	jQuery.ajax({
		cache:false,
		async:false,
		url:'http://search.jmw.com.cn/ajax.php',
		dataType:'jsonp',
	    jsonp:"jsonpcallback",
		type:'get',
		data:'type=phone&projectId='+project_id+'&timestamp='+timestamp,
		success:function(html)
		{
		//alert(html);
		},
		error: function(html) {
             // alert('Get data requête n\'a pas abouti'); 
			   
       }
	});
}
//wap站电话点击用
function addTelForWap(project_id,type,tel)
{
	if(typeof(tel) == 'undefined')
		tel = 0;
	var timestamp =Date.parse(new Date());
	addPhone(project_id);
	// 单独记录每个电话的点击
	$.ajax({
		cache:false,
		async:false,
		url:'http://protectedapi.jmw.com.cn/wap/addTelForWap.php',
		dataType:'jsonp',
	    jsonp:"jsonpcallback",
		type:'get',
		data:'type='+type+'&projectId='+project_id+'&timestamp='+timestamp,
		success:function(html)
		{
			if(typeof($('#tel_'+type).html()) != 'undefined')
			{
				$('#tel_'+type).html(html);
			}
			window.location.href="tel:"+tel;
			window.open("tel:"+tel);
		},
		error: function(html) 
		{			   
        }
	});

}
function showTelHitsForWap(project_id,type)
{
	var timestamp =Date.parse(new Date());
	$.ajax({
		cache:false,
		async:false,
		url:'http://protectedapi.jmw.com.cn/wap/getTelForWap.php',
		dataType:'jsonp',
	    jsonp:"jsonpcallback",
		type:'get',
		data:'type='+type+'&projectId='+project_id+'&timestamp='+timestamp,
		success:function(html)
		{
			if(typeof($('#tel_'+type).html()) != 'undefined')
			{
				$('#tel_'+type).html(html);
			}
		},
		error: function(html) 
		{			   
        }
	});
}
	/*
       $.ajax({
		url:host+'ajax.php?type=qqdynamic&projectId='+$('#projectId').val()+'&timestamp='+timestamp,
			success:function(html)
		{}
	});
	*/

function addQQDynamic(type,project_id){

     var timestamp =Date.parse(new Date());
	 
	jQuery.ajax({
		cache:false,
		async:false,
		url:'http://search.jmw.com.cn/ajax.php',
		dataType:'jsonp',
	    jsonp:"jsonpcallback",
		type:'get',
		data:'projectId=' + project_id+'&type='+ type + '&timestamp='+timestamp,
		success:function(html)
		{
		//alert(html);
		},
		error: function(html) {
             // alert('Get data requête n\'a pas abouti'); 
			   
       }
	});
}



//addPageViewForWap("pv",project_id);
$(function(){
	$('.itemNav h1').before(" <iframe class='itemNav_iframe' scrolling='0' frameborder='0'></iframe>")	
	
	//有奖留言广告
//	var html="<div class='yj_msg_bar'>"+
//		"<iframe scrolling='no' frameborder='0' class='yj_msg_iframe'></iframe>"+
//		"<div class='yj_msg'>"+
//			"<a href='http://zhuanti.jmw.com.cn/yjly/' target='_blank' class='yj_msg_link' hideFocus='true'></a>"+
//			"<a href='#liuyan' class='yj_msg_btn' hideFocus='true'></a>"+
//			"<a href='javascript:;' class='yj_msg_close' hideFocus='true' onclick=\"$('.yj_msg_bar').slideUp(100)\"></a>"+
//		"</div>"+
//	"</div >"
//	
//	$('.bzWrap').after(html);
	
});

