//��Դhttp://search.jmw.com.cn/js/bookmark.js
//��ȡ��ע����
function getAttentionCountByAjax(project_id)
{
	var timestamp =Date.parse(new Date());
	jQuery.ajax({
		async:false,
		cache:false,
		type:'get',
		url:'http://protectedapi.jmw.com.cn/newSearch/newSearchAttentionCount.php',
		data:'pid='+project_id+'&timestamp='+timestamp,
		dataType:'jsonp',
		jsonp:"jsonpcallback",
		success:function(html){
			jQuery("#attentionCountNum").html(html);
		}
	});
}
