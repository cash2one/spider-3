jQuery(function(){
	var timestamp =Date.parse(new Date());
	//记录访问页面
	if(typeof(browseRecord) != 'undefined' || typeof(article_id) != 'undefined' 
		|| typeof(video_id) != 'undefined' || typeof(shangpu_id) != 'undefined'
		|| typeof(business_id) != 'undefined'|| typeof(information_id) != 'undefined')
	{
		var browseUrl = window.location.href;
		var articleType = '';//商铺类型
		if(typeof(browseRecord) != 'undefined')
		{
			var targetId = jQuery("#projectId").val();
			if(typeof(targetId) == 'undefined')targetId = project_id;
			var browseType = 'search_basic';
		}
		else if(typeof(article_id) != 'undefined')
		{
			var targetId = article_id;
			var browseType = 'hy_article';
		}
		else if(typeof(video_id) != 'undefined')
		{
			var targetId = video_id;
			var browseType = 'video_article';
		}
		else if(typeof(shangpu_id) != 'undefined')
		{
			var targetId = shangpu_id;
			var browseType = 'shangpu_article';
			articleType = cid;
		}
		else if(typeof(business_id) != 'undefined')
		{
			var targetId = business_id;
			var browseType = 'business_article';
		}
		else if(typeof(information_id) != 'undefined')
		{
			var targetId = information_id;
			var browseType = 'information_article';
		}
		jQuery.ajax({
			cache:false,
			type:'get',
			data:'targetId='+targetId+'&articleType='+articleType+'&browseType='+browseType+'&browseUrl='+encodeURIComponent(browseUrl),
			url:'http://protectedapi.jmw.com.cn/search/addBrowseRecord.php?timestamp='+timestamp,
			dataType:'jsonp',
			jsonp:"browserecord",
			success:function(html){}
		});
	}

});