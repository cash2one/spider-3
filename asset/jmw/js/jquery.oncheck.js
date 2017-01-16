// $(function() {
//     $("#slides dl").mouseover(function(){
//         $("#slides dl").removeClass('diff');
//         $(this).addClass('diff');
//     });
//     $("#slides dl").mouseout(function(){
//         $(this).removeClass('diff');
//     });
//     //diff
// })

function aonfo(){
    val= $('#keyword').val();
    if(val=='请输入您想找的品牌名称') {
         $('#keyword').val('');
    }
}

function bonblu(){
   val= $('#keyword').val();
   if(val==''){
     $('#keyword').val('请输入您想找的品牌名称');   
   }
}

function onClickSubmitNum (){
    var host="http://search.jmw.com.cn/";
    var sid1s = jQuery("#sid1s").val();//行业大类
    if (sid1s == '') sid1s = 0;
    var subid1s = jQuery("#subid1s").val();//行业小类
    var money = jQuery("#mid").val(); //投资能力
    var keyword = jQuery("#keyword").val();//关键字
    if( keyword == '请输入您想找的品牌名称' || keyword == '请输入查询关键字' || keyword=='请输入文本' || keyword=='请添加关键字') keyword = '';
    var ppmc = jQuery("#ppmc").val();
    var url = host;
	money = money.replace(',','~');
	if(keyword=='')
	{
		if(sid1s == 0 && money == '')
		url = host;
		else if(sid1s == 0 && money != '')
		{
			url = host+'m'+money+'/';
		}
		else if(sid1s != 0 && money=='')
		{
			url = host+'i'+sid1s+'/';
		}
		else if(sid1s !=0 && money != '')
		{
			url = host+'i'+sid1s+'-m'+money+'/';
		}
	}
	else
	{
		url = host+'newSearch/newList.php?keyword='+encodeURIComponent(keyword);
	}
	window.open(url,target="_blank");
	return false;
    if( ppmc == 'ppmc' ) {
        if(sid1s >0 || sid1s !='' ) {
            if(subid1s >0 ) {
                if(money != '' || keyword != '')
                {
                    return true;
                }else{
                    if(subid1s == 165)
                    {                       
                        return true;
                    }else{
                        var url=host+sid1s+"/"+sid1s+"_"+subid1s+"_1.shtml";
                        window.open(url,target="_blank");
                        return false;
                    }                   
                }
            }else{
                if( money != '' || keyword != ''){
                    return true;
                }else{
                    var url=host+sid1s+'/';
                    window.open(url,target="_blank");
                    return false;
                }               
            }
        }else {
           if( money != '' || keyword !='') {
                return true;
           }else {                 
               var url=host;
               window.open(url,target="_blank");
               return false;
           }
        }
    }
}

function onClickSubmitBrand()
{
    var host="http://search.jmw.com.cn/";
    var ppmc = jQuery("#ppmc").val();
    var sid1s = jQuery("#sid1s").val();
    var subid1s = jQuery("#subid1s").val();
    var money = jQuery("#mid").val(); //投资能力
    var keyword = jQuery("#keyword").val();//关键字
    if( keyword == '请输入您想找的品牌名称' || keyword == '请输入查询关键字' || keyword=='请输入文本') keyword = '';

    if(sid1s){
        if( subid1s > 0 ){
            if( money != '' || keyword !=''){
                var url = host+"searchlist.html?industryId="+sid1s+
                            "&money="+money+'&industrySubclassId='+subid1s+"&ppmc="+ppmc+
                            "&keyword="+encodeURIComponent(keyword)+"&page=1"+"&brand=1";
                window.open(url,target="_blank");
                return false;
            }else {
                var url = host+"compjp/"+sid1s+"/"+sid1s+"_"+subid1s+"_1.shtml";
                window.open(url,target="_blank");
                return false;
            }
        }else {
            if( money != '' || keyword !=''){
                var url = host+"searchlist.html?industryId="+sid1s+
                            "&money="+money+'&industrySubclassId='+subid1s+"&ppmc="+ppmc+
                            "&keyword="+encodeURIComponent(keyword)+"&page=1"+"&brand=1";
                window.open(url,target="_blank");
                return false;
            }else{
                var url = host+"compjp/"+sid1s+"/";
                window.open(url,target="_blank");
                return false;
            }           
        }
    }else {
        if( money != '' || keyword !=''){
            var url = host+"searchlist.html?industryId=0&money="+money+"&industrySubclassId=0&ppmc="+ppmc+
            "&keyword="+encodeURIComponent(keyword)+"&page=1"+"&brand=1";
            window.open(url,target="_blank");
            return false;
        }else{
            var url = host+"compjp/";
            window.open(url,target="_blank");
            return false;
        }      
    }
}


    // $(function(){
    // var y = $('div[type=slides]').length+1;
    // var start =  parseInt(Math.random() * (1 - y) + y);
    //   $("#slides").slidesjs({
    // pagination: {
    //       active: false
    // },
    // navigation: {
    //         active: false,
    //         effect: "slide"
    //     },
    // start:start,
    //     width: 512,
    //     height: 134
    
    //   });
    // });
    
    
 //    $(function () {
	// 	$('.list dl dt a').hover(function () {
	// 		$(this).addClass('hover').children('img').hide();
	// 		$(".list dl dt a img").eq($(this).index());
	// 	},function(){
	// 		$(this).removeClass('hover').children('img').show();
	// 		$(".list dl dt a img").eq($(this).index());	
	// 	})
	
	// })
//分词 标项页(搜索规则与search列表页匹配)
function onClickSubmitNum_fenci (){
    var host="http://search.jmw.com.cn/";
    var sid1s = jQuery("#sid1s").val();//行业大类
    var subid1s = jQuery("#subid1s").val();//行业小类
    var money = jQuery("#mid").val(); //投资能力
		money = money.replace(',','~');
    var keyword = jQuery("#keyword_fenci").val();//关键字
    if( keyword == '请输入您想找的品牌名称' || keyword == '请输入查询关键字' || keyword=='请输入文本' || keyword=='请添加关键字') keyword = '';
    var ppmc = jQuery("#ppmc").val();

	if(keyword=='')
	{
		if(sid1s != ''){
				linkurl=host+"i"+sid1s+"/";
				if(subid1s != ""){
					linkurl=host+"i"+subid1s+"/";
					if(money != ""){
						linkurl=host+"i"+subid1s+"-m"+money+"/";
					}else{
						linkurl=host+"i"+subid1s+"/";
					}
				}else{
					if(money != ""){
						linkurl=host+"i"+sid1s+"-m"+money+"/";
					}else{
						linkurl=host+"i"+sid1s+"/";
					}
				}
			}else{
				if(money != ""){
					linkurl=host+"m"+money+"/";
				}else{
					linkurl=host;
				}
			}
	}
	else
	{
		linkurl=host+"newSearch/newList.php?keyword="+encodeURIComponent(keyword);
	}
	window.open(linkurl,target="_blank");
	return false;
}
/*function onClickSubmitNum_fenci (){
    var host="http://search.jmw.com.cn/";
    var sid1s = jQuery("#sid1s").val();//行业大类
    if (sid1s == '') sid1s = 0;
    var subid1s = jQuery("#subid1s").val();//行业小类
    var money = jQuery("#mid").val(); //投资能力
    var keyword = jQuery("#keyword_fenci").val();//关键字
    if( keyword == '请输入您想找的品牌名称' || keyword == '请输入查询关键字' || keyword=='请输入文本' || keyword=='请添加关键字') keyword = '';
    var ppmc = jQuery("#ppmc").val();
    var url = host;
	money = money.replace(',','~');
	if(keyword=='')
	{
		if(sid1s == 0 && money == '')
		url = host;
		else if(sid1s == 0 && money != '')
		{
			url = host+'m'+money+'/';
		}
		else if(sid1s != 0 && money=='')
		{
			url = host+'i'+sid1s+'/';
		}
		else if(sid1s !=0 && money != '')
		{
			url = host+'i'+sid1s+'-m'+money+'/';
		}
	}
	else
	{
		url = host+'newSearch/newList.php?keyword='+encodeURIComponent(keyword);
	}
	window.open(url,target="_blank");
	return false;
    if( ppmc == 'ppmc' ) {
        if(sid1s >0 || sid1s !='' ) {
            if(subid1s >0 ) {
                if(money != '' || keyword != '')
                {
                    return true;
                }else{
                    if(subid1s == 165)
                    {                       
                        return true;
                    }else{
                        var url=host+sid1s+"/"+sid1s+"_"+subid1s+"_1.shtml";
                        window.open(url,target="_blank");
                        return false;
                    }                   
                }
            }else{
                if( money != '' || keyword != ''){
                    return true;
                }else{
                    var url=host+sid1s+'/';
                    window.open(url,target="_blank");
                    return false;
                }               
            }
        }else {
           if( money != '' || keyword !='') {
                return true;
           }else {                 
               var url=host;
               window.open(url,target="_blank");
               return false;
           }
        }
    }
}*/