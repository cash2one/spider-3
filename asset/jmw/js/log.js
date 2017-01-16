//登录动作
var url = window.location.href;
jQuery.ajax({
	url:'http://person.jmw.com.cn/openPageLog.php',
	type:'get',
	dataType:'jsonp',
	data:'url='+url,
	success:function(jsonp)
	{ 
	
	}
})