/**
 * 广告点击量
 */
jQuery(function(){
	jQuery('*[ad_id][ad_need_click]').bind("click",function(){
		var ad_id = jQuery(this).attr('ad_id');
		var timestamp =Date.parse(new Date());
		jQuery.ajax({
			type:'get',
			dataType:'jsonp',
			jsonp:"jsonpcallback",
			url:'http://search.jmw.com.cn/addHits.php?advertise_id='+ad_id+'&timestamp='+timestamp,
			success:function(html)
			{
			}
	 	});
	});
});