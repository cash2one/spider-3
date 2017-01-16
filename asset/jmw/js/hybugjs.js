function addBookMark()
{
	var title=document.title;
	var url=document.location.href;
	if (window.sidebar)
	{
		window.sidebar.addPanel(title, url,"");
	}else if( window.opera && window.print ){
		var mbm = document.createElement('a');
		mbm.setAttribute('rel','sidebar');
		mbm.setAttribute('href',url);
		mbm.setAttribute('title',title);
		mbm.click();
	}else if( document.all ) {
		window.external.AddFavorite( url, title);
	}
	//Chrome浏览器下
	else{
         alert('对不起，您的浏览器不支持此操作，请按Ctrl+D添加至收藏夹!');
    }
}
function onChange()
{
	 obj=document.getElementById("key1");
       if(obj.value=="请输入文本"){obj.value="";}
}
function onTBlur()
{
	obj=document.getElementById("key1");
       if(''==obj.value){obj.value="请输入文本";}
}