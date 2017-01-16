$(function(){
	var show_project_id = $('[showYear="showYear"]').attr('showYearId');
	$.ajax({
		url:'http://protectedapi.jmw.com.cn/search/showAuthenticationYear.php',
		type:'get',
		data:'id='+show_project_id,
		dataType:'jsonp',
		jsonp:"jsonpcallback",
		success:function(data){
			$.each(eval(data),function(k,v){
				if(show_project_id==v.id && v.showYear != 0)
				{
					$('[showYear="showYear"]').parent().addClass('huiyuan_year');
					$('[showYear="showYear"]').html(v.showYear);
				}
			});
		}
	});
});