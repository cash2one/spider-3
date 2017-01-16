if(typeof(rcatid)=="undefined")
{
	var rcatid = '';
}
if(typeof(st)!="undefined" && st=='ydy')
{
	var type = st;
}
else
{
	var type = '';
}
jQuery(function(){
	var timestamp =Date.parse(new Date());
	//导航状态条 
	var success_key = '',success_brand_name = '',success_project_id='',success_vid='',regcookie='',success_origin='';
	var arrStr = document.cookie.split("; ");
	for(var i = 0;i < arrStr.length;i ++){
		var temp = arrStr[i].split("=");
		if(temp[0] == 'success_key') {success_key = decodeURIComponent(temp[1]);}
		if(temp[0] == 'success_project_id') {success_project_id = decodeURIComponent(temp[1]);}
		if(temp[0] == 'success_vid') {success_vid = decodeURIComponent(temp[1]);}
		if(temp[0] == 'success_brand_name') {success_brand_name = decodeURIComponent(temp[1]);}
		if(temp[0] == 'success_origin') {success_origin = decodeURIComponent(temp[1]);}
		if(temp[0] == 'regcookie') {regcookie = decodeURIComponent(temp[1]);}
	}
	jQuery.ajax({
		cache:false,
		type:'get',
		url:'http://protectedapi.jmw.com.cn/person/StatusBarAPI.php?timestamp='+timestamp+'&catid='+rcatid+'&type='+type,
		dataType:'jsonp',
		jsonp:"loginjsonpcallback",
	    success:function(html){
	    	if(type=='ydy')
	    	{
	    		// alert("在引导页加载登陆状态区块！状态为:"+html);
	    		jQuery("#YDYloginDiv").html(html);
	    	}
	    	else
	    	{
		    	jQuery("#testDiv").html(html);
		    	jQuery('#testDiv').wrap("<div class='topToolbar_box'></div>");
		    	if(success_key == 'attentionProject')
		    	{
		    		attention(success_project_id,success_brand_name,success_origin);
		    	}
		    }
	    }
	});
});
			