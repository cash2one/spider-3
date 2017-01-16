function onchangeSid()
{
   var sid = jQuery("#sid1s").val();
   sid = sid ? sid : 0;
   if( sid ) {
     jQuery("#flag").val(sid);
   }
   var subid = jQuery("#ppsubid").val();
   publicChange(sid,subid);
}
function publicChange(sid,subid)
{
	  jQuery.getScript("http://image1.jmw.com.cn/search/js/twoCategory.js",function(){
	  		var html ='<option value="0">---行业子分类---</option>';
	    	for( var i in comp ) {
				  if(comp[i]['sid'] == sid) {
            var selected = (comp[i]['id'] == subid) ? 'selected' : '';
  	        html += '<option value='+comp[i]['id']+'  '+selected+' >'+comp[i]['sname']+'</option>';
	    	  }
	    	}
	    	jQuery("#subid1s").html(html);
	  });
}
function newClickList() {
	onClickSubmitNum();
}

//广告添加点击量
// function addHits(advertise_id)
// {
// 	var timestamp =Date.parse(new Date());
// 	$.ajax({
// 		url:host+'addHits.php?advertise_id='+advertise_id+'&timestamp='+timestamp,
// 		success:function(html)
// 		{}
// 	});
// }

function onClickSubmitNum()
{
	var sid1s = jQuery("#sid1s").val();//行业大类
	if (sid1s == '') sid1s = 0;
	var subid1s = jQuery("#subid1s").val();//行业小类
	var money = jQuery("#mid").val(); //投资能力
	var keyword = jQuery("#keyword").val();//关键字
    
	if( keyword == '请输入查询关键字' || keyword=='请输入文本' || keyword == '请添加关键字') keyword = '';
	var ppmc = jQuery("#ppmc").val();
	var url=host+"i="+sid1s+"&m="+money+"&key="+keyword+"/";
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
	var ppmc = jQuery("#ppmc").val();
	var sid1s = jQuery("#sid1s").val();
 	var subid1s = jQuery("#subid1s").val();
 	var money = jQuery("#mid").val(); //投资能力
 	var keyword = jQuery("#keyword").val();//关键字
	if( keyword == '请输入查询关键字' || keyword=='请输入文本' || keyword == '请添加关键字') keyword = '';

 	if(sid1s){
 	  	if( subid1s > 0 ){
 	    	if( money != '' || keyword !=''){
 	    		var url = host+"searchlist.html?industryId="+sid1s+
							"&money="+money+'&industrySubclassId='+subid1s+"&ppmc="+ppmc+
							"&keyword="+encodeURIComponent(keyword)+"&page=1"+"&brand=1";
				window.open(url,target="_blank");
 	     	}else {
 	       		var url = host+"compjp/"+sid1s+"/"+sid1s+"_"+subid1s+"_1.shtml";
 	       		window.open(url,target="_blank");
 	     	}
 	  	}else {
 	  		if( money != '' || keyword !=''){
 	    		var url = host+"searchlist.html?industryId="+sid1s+
							"&money="+money+'&industrySubclassId='+subid1s+"&ppmc="+ppmc+
							"&keyword="+encodeURIComponent(keyword)+"&page=1"+"&brand=1";
				window.open(url,target="_blank");
 	     	}else{
 	     		var url = host+"compjp/"+sid1s+"/";
 	  			window.open(url,target="_blank");
 	     	} 	  		
 	  	}
 	}else {
 		if( money != '' || keyword !=''){
 	    	var url = host+"searchlist.html?industryId=0&money="+money+"&industrySubclassId=0&ppmc="+ppmc+
			"&keyword="+encodeURIComponent(keyword)+"&page=1"+"&brand=1";
			window.open(url,target="_blank");
 	    }else{
 	    	var url = host+"compjp/";
 	   		window.open(url,target="_blank");
 	    } 	   
 	}
}
function onClickMessInfoNew(){
    var Usid = jQuery("#Usid").val();
    var brand_name = jQuery("#brandname").val();
    var Uname = jQuery("#Uname").val();
    var Utext = jQuery("#js_textarea").val();
    var Utel = jQuery("#Utel").val();
    var sex;
    if(document.getElementById('sexm').checked) sex = 0;
    else if(document.getElementById('sexfm').checked) sex = 1;
    //var ispay = jQuery("#ispay").val();
    //判断字符串是否有','分隔
    var x = Usid.indexOf (",");
    if( !Usid ){
       jQuery("#secly_1").hide();
       return  false;
    }else if(Utext==''){
    	alert('留言内容不能为空！');
    	jQuery("#js_textarea").focus();
    	return false;
    }else if(!Utils.isContent(Utext)){
       alert('留言内容填写格式错误！');
       jQuery("#js_textarea").focus();
       return false ;
    // }else if(Uname=='') {
    //    alert('姓名不能为空！');
    //    jQuery("#Uname").focus();
    //    return false ;
    }else if( !Utils.isName(Uname)){
       alert('姓名填写格式错误！');
       jQuery("#Uname").focus();
       return false ;
    }else if(Utel == '') {
       alert('联系方式不能为空！');
       jQuery("#Utel").focus();
       return false ;
    }else if(!Utils.isMobile(Utel)){
 
       alert('请输入正确的联系方式！');
       jQuery("#Utel").focus();
       return false ;
    }
    $('#firstQuick').hide();
     
}
function onClickMess(obj){
	if(obj.attr('onClickMess') ==1)
	{
		alert('正在提交中。。请稍后');
		return false;
	}
    var Usid = jQuery("#Usid").val();
    //var brand_name = jQuery("#brandname").val();
    var Uname = jQuery("#Uname").val();
    var Utext = jQuery("#js_textarea").val();
    var Utel = jQuery("#Utel").val();
	var origin = jQuery(".origin_quick_check").val();
	var lasturl = jQuery("#lasturl_quick").val();
	var fromurl = jQuery("#fromurl_quick").val();
    var sex;
    if(document.getElementById('sexm').checked) sex = 0;
    else if(document.getElementById('sexfm').checked) sex = 1;
    //var ispay = jQuery("#ispay").val();
    //判断字符串是否有','分隔
    var x = Usid.indexOf (",");
    if( !Usid ){
       jQuery("#form_secMsg").hide();
       return  false;
    }else if(Utext==''){
    	alert('留言内容不能为空！');
    	return false;
    }else if(!Utils.isContent(Utext)){
       alert('留言内容填写格式错误！');
       return false ;
    }else if(Uname=='' || Uname == '您的姓名'){
    	alert('姓名不能为空！');
    	return false;
    }else if( !Utils.isName(Uname)){
       alert('姓名填写格式错误！');
       return false ;
    }else if(Utel == '') {
       alert('联系方式不能为空！');
       return false ;
    }else if(!Utils.isMobile(Utel)){
       alert('请输入正确的联系方式！');
       return false ;
    }
    //$('#firstQuick').hide();
    //$('#postFrom').submit();
	obj.attr('onClickMess',1);
	jQuery.ajax({
		type:'get',
		url:'http://liuyan.jmw.com.cn/message/messageProjectQuick_temporary.php',
		dataType:'jsonp',
		jsonp:'callback',
		data:{is_login:is_login,sname:Uname,mobile:Utel,message:Utext,sex:sex,target_id:Usid,project_message_origin:origin,lasturl:lasturl,fromurl:fromurl},
		success:function(html){
			obj.attr('onClickMess',0);
			if(html.status == 'login'){
				jQuery('#pFind12').hide();
				jQuery('.gray_mask').hide();
				alert('留言成功！');
				window.location.reload();
			}else if(html.status == 'unlogin'){
				$('#two_message_id').val(html.id);
			}
		}
	});
	if(is_login == 'unlogin'){
		jQuery('#pFind12').hide();
		jQuery('#click_YZ').show();
		$('#two_telephone').val(Utel);
		Auto_trigger();
	}
}
//提交留言
function onClickMessInfo(obj)
{
	if(obj.attr('doing') ==1)
	{
		alert('正在提交中。。请稍后');
		return false;
	}
    var Usid = jQuery("#Usid").val();
    var brand_name = jQuery("#brandname").val();
    var Uname = jQuery("#Uname").val();
    var Utext = jQuery("#js_textarea").val();
    var Utel = jQuery("#Utel").val();
	var origin = jQuery("#origin").val();
	var searchQuick_lasturl = jQuery("#searchQuick_lasturl").val();
	var searchQuick_fromurl = jQuery("#searchQuick_fromurl").val();
    var sex;
    if(document.getElementById('sexm').checked) sex = 0;
    else if(document.getElementById('sexfm').checked) sex = 1;
    //var ispay = jQuery("#ispay").val();
    //判断字符串是否有','分隔
    var x = Usid.indexOf (",");
    if( !Usid ){
       jQuery("#secly_1").hide();
       return  false;
    }else if(Utext==''){
    	alert('留言内容不能为空！');
    	jQuery("#js_textarea").focus();
    	return false;
    }else if(!Utils.isContent(Utext)){
       alert('留言内容填写格式错误！');
       jQuery("#js_textarea").focus();
       return false ;
    // }else if(Uname=='') {
    //    alert('姓名不能为空！');
    //    jQuery("#Uname").focus();
    //    return false ;
    }else if( !Utils.isName(Uname)){
       alert('姓名填写格式错误！');
       jQuery("#Uname").focus();
       return false ;
    }else if(Utel == '') {
       alert('联系方式不能为空！');
       jQuery("#Utel").focus();
       return false ;
    }else if(!Utils.isMobile(Utel)){
 
       alert('请输入正确的联系方式！');
       jQuery("#Utel").focus();
       return false ;
    }
	
	
    //$('#searchQuick').hide(); 
    if((x==-1)&&(brand_name!=0)) 
    {
//    	alert("一个");
//    	alert('projectId='+Usid+'&timestamp='+timestamp+'&niming=niming'+
//        		'&user_realname='+encodeURIComponent(Uname)+
//        		'&gender='+sex+
//        		'&telphone='+Utel);
    	//获取另外三个项目信息
        var timestamp = Math.random(); 
    	jQuery.ajax({
    		cache:false,
    		async:false,
    		type:'get',
    		url:'http://protectedapi.jmw.com.cn/person/AttentionAPI.php',
    		data:'projectId='+Usid+'&timestamp='+timestamp+'&niming=niming'+
    		'&user_realname='+encodeURIComponent(Uname)+
    		'&gender='+sex+
    		'&telphone='+Utel,
    		dataType:'jsonp',
    		jsonp:"jsonpcallback",
    		success:function(data){
    		    jQuery.ajax({
    				cache:false,
    		    	async:false,
    				type:'get',
    				url:'http://liuyan.jmw.com.cn/message/searchLeaveMessageAjax.php',
    				data:'sid='+Usid+
    				'&sname='+encodeURIComponent(Uname)+
    				'&content='+encodeURIComponent(Utext)+
    				'&mobile='+Utel+
    				'&sex='+sex,
    				dataType:'jsonp',
    				jsonp:"callBack",
    				success:function(html){ 
    					if(jQuery("#preson").val()=='preson')
    					{
    						jQuery("#onlineMsg").hide(); //closeMsg();//个人站
    						jQuery("#onlineMessage").hide();
    						jQuery("#headMessage").hide();
    						jQuery("#secy_"+Usid).hide();
    						jQuery("#popWrap_sub").hide();
        					if(html == 1 )//&& (ispay == 0 || ispay==2 || ispay == 5 || ispay == 6)
        					{
        						closeMsg();
        						jQuery("#itemAtt").attr('class','popWrap');
        						jQuery("#hidSidVal").val(Usid);
        						jQuery("#brandNameOne").attr('href','http://search.jmw.com.cn/comp/'+Usid+'.shtml');
        						jQuery("#brandNameTwo").attr('href','http://search.jmw.com.cn/comp/'+Usid+'.shtml');
        						jQuery("#brandNameOne").html(brand_name);
        						jQuery("#brandNameTwo").html(brand_name);				
        						jQuery("#attTips").attr('class','attTips ok');
        						jQuery("#tipsOne").html('<strong>恭喜您！</strong>');
        						jQuery("#tipsTwo").html('成功给<span>[<a name="brandName" '+
        							'href="http://search.jmw.com.cn/comp/'+Usid+
        							'.shtml" target="_blank">'+brand_name+'</a>]</span>发送了意向');
        						//height = showCommonDiv(ispay,data);
//        						showPop_message("#popWrap_sub",height);
        						//showPop("#itemAtt",'itemAtt');
                    showPop("#itemAtt",468);
                    jQuery("#quickBox").show();
        						jQuery("#hidLoginDiv").hide();
        						jQuery("#hidAttentionDiv").show();
        						jQuery("#itemAtt").show();
        						jQuery("#onlineMsg").show();
        						jQuery("#c_infoBox1").hide();
        						jQuery("#c_infoBox2").hide();
        						jQuery("#interested_item").show();
        						jQuery("#submitBtn_box").show();
        						
        						
        					}
        					else if(html == 1 )//&& (ispay == 1 || ispay==3 || ispay==4 || ispay == 7 || ispay == 8 || ispay == 9)
        					{
        						jQuery("#bgDiv").hide();
        						jQuery("#bgIframe").hide();
        					}
    					}
    					else if(jQuery("#contrast").val()=='contrast')
    					{
    						scloseBg();//search站
    						if(html == 1 )//&& (ispay == 0 || ispay==2 || ispay == 5 || ispay == 6)
        					{
        						//调用成功层
        						jQuery("#itemAtt").attr('class','popWrap');
        						jQuery("#hidSidVal").val(Usid);
        						jQuery("#brandNameOne").attr('href','http://search.jmw.com.cn/comp/'+Usid+'.shtml');
        						jQuery("#brandNameTwo").attr('href','http://search.jmw.com.cn/comp/'+Usid+'.shtml');
        						jQuery("#brandNameOne").html(brand_name);
        						jQuery("#brandNameTwo").html(brand_name);				
        						jQuery("#attTips").attr('class','attTips ok');
        						jQuery("#tipsOne").html('<strong>恭喜您！</strong>');
        						jQuery("#tipsTwo").html('成功给<span>[<a name="brandName" '+
        							'href="http://search.jmw.com.cn/comp/'+Usid+
        							'.shtml" target="_blank">'+brand_name+'</a>]</span>发送了意向');	
        						//height = showCommonDiv(ispay,data);
        						//showPop("#itemAtt",height);
                    showPop("#itemAtt",468);
                    jQuery("#quickBox").show();
        						jQuery("#hidLoginDiv").hide();
        						jQuery("#hidAttentionDiv").show();
        						jQuery("#c_infoBox1").hide();
        						jQuery("#c_infoBox2").hide();
        					}
    					}
    					else
    					{
    						closeBg();//search站
        					if(html == 1 )//&& (ispay == 0 || ispay==2 || ispay == 5 || ispay == 6)
        					{
//        						alert("ok");
        						//调用成功层
        						// jQuery("#itemAtt").attr('class','popWrap');
        						// jQuery("#hidSidVal").val(Usid);
        						// jQuery("#brandNameOne").attr('href','http://search.jmw.com.cn/comp/'+Usid+'.shtml');
        						// jQuery("#brandNameTwo").attr('href','http://search.jmw.com.cn/comp/'+Usid+'.shtml');
        						// jQuery("#brandNameOne").html(brand_name);
        						// jQuery("#brandNameTwo").html(brand_name);				
        						// jQuery("#attTips").attr('class','attTips ok');
        						// jQuery("#tipsOne").html('<strong>恭喜您！</strong>');
        						// jQuery("#tipsTwo").html('成功给<span>[<a name="brandName" '+
        						// 	'href="http://search.jmw.com.cn/comp/'+Usid+
        						// 	'.shtml" target="_blank">'+brand_name+'</a>]</span>发送了意向');	
        						// // height = showCommonDiv(ispay,data);
        						// // // showPop("#itemAtt",height);
              //       showPop("#itemAtt",468);
              //       jQuery("#quickBox").show();
        						// jQuery("#hidLoginDiv").hide();
        						// jQuery("#hidAttentionDiv").show();
        						// jQuery("#c_infoBox1").hide();
        						// jQuery("#c_infoBox2").hide();
              //       jQuery("#postFrom").submit();
        					}
    					}
    				}
    			});
    		}
    	});
//    	alert(json_html);
    }
    else 
    {
    	//jQuery("#postFrom").submit();
		obj.attr('doing',1);
		jQuery.ajax({
			async:false,
			type:'get',
			url:'http://liuyan.jmw.com.cn/message/messageSearchQuick_temporary.php',
			dataType:'jsonp',
			jsonp:'callback',
			data:{is_login:is_login,sname:Uname,mobile:Utel,content:Utext,sex:sex,sid:Usid,origin:origin,searchQuick_lasturl:searchQuick_lasturl,searchQuick_fromurl:searchQuick_fromurl},
			success:function(html){
				obj.attr('doing',0);
				if(html.status == 'login'){
					jQuery('#show_hide').hide();
					jQuery('.gray_mask').hide();
					
					alert('留言成功！');
					window.location.reload();
				}else if(html.status == 'unlogin'){
					jQuery('#two_message_id').val(html.id);
				}
			}
		});
		
		if(is_login == 'unlogin'){
			jQuery('#two_telephone').val(Utel);
			jQuery('#show_hide').hide();
			jQuery('.gray_mask').show();
			jQuery('#click_YZ').show();
			Auto_trigger();
		}
		return false;
    }
}
function hasidfunction(id)
{
	var Usid = jQuery("#Usid_"+id).val();
    var Uname = jQuery("#Uname_"+id).val();
    var Utext = jQuery("#js_textarea_"+id).val();
    var Utel = jQuery("#Utel_"+id).val();
    if( !Usid ){
       jQuery("#secly_"+id).hide();
       closeBg();
       return false;
    }else if(Utext==''){
    	alert('留言内容不能为空！');
    	jQuery("#js_textarea").focus();
    	return false;
    }else if(!Utils.isContent(Utext)) {
       alert('留言内容填写格式错误！');
       jQuery("#js_textarea_"+id).focus();
       return false ;
    // }else if(Uname=='') {
    //    alert('姓名不能为空！');
    //    jQuery("#Uname_"+id).focus();
    //    return false ;
    }else if( !Utils.isName(Uname)){
       alert('姓名填写格式错误！');
       jQuery("#Uname_"+id).focus();
       return false ;
    }else if(Utel == '') {
       alert('联系方式不能为空！');
       jQuery("#Utel_"+id).focus();
       return false ;
    }else if(!Utils.isMobile(Utel)) {
       alert('请输入正确的联系方式！');
       jQuery("#Utel_"+id).focus();
       return false ;
    }
    jQuery("#postFrom_"+id).submit();
}
function onClickBBSInfo(id,brandname,bbsinfo,seat)//,ispay
{
  	jQuery("#sec_from").show();
  	jQuery('#show_hide').show();
    jQuery("#js_textarea").val(bbsinfo);
    //jQuery("#brandname").val(brandname);
	jQuery("#js_textarea").html(bbsinfo);
  	jQuery("#secly").hide();
    jQuery("#Usid").val(id);
	jQuery(".chooseSpan").html(brandname);
    //jQuery("#ispay").val(ispay);
  var domain_seat = '';
  if(typeof(jQuery("#domain_seat").val()) == 'undefined')
  {
    domain_seat = seat;
  }
  else
  {
    if(typeof(seat) != 'undefined')
    {
      domain_seat = jQuery("#domain_seat").val()+''+seat;
    }
    else
    {
      domain_seat = '';
    }
  }
  jQuery("#8_search_message").val(domain_seat);
    
}

function onClickBBSInfoNew(id,brandname,bbsinfo,seat,origin)//,ispay
{
    
    var lasturl = window.location.href;
    var fromurl = document.referrer;
    $('#lasturl_quick').val(lasturl);
    $('#fromurl_quick').val(fromurl);
    $('#origin_quick').val(origin);
  	jQuery("#sec_from").show();
  	jQuery('#show_hide').show();
    jQuery("#js_textarea").val(bbsinfo);
    //jQuery("#brandname_quick").html(brandname);
	jQuery("#js_textarea").html(bbsinfo);
  	jQuery("#secly").hide();
    jQuery("#Usid").val(id);
    //jQuery("#project_message_origin").val(origin);
	jQuery(".chooseSpan").html(brandname);
    //jQuery("#ispay").val(ispay);
  var domain_seat = '';
  if(typeof(jQuery("#domain_seat").val()) == 'undefined')
  {
    domain_seat = seat;
  }
  else
  {
    if(typeof(seat) != 'undefined')
    {
      domain_seat = jQuery("#domain_seat").val()+''+seat;
    }
    else
    {
      domain_seat = '';
    }
  }
  jQuery("#8_search_message").val(domain_seat);
    
}

function onClickBBSInfoNew_pc(id,brandname,bbsinfo,seat,origin)//,ispay
{
    
    var lasturl = window.location.href;
    var fromurl = document.referrer;
    $('#lasturl_quick').val(lasturl);
    $('#fromurl_quick').val(fromurl);
    $('#origin_quick').val(origin);
  	jQuery("#pFind12").show();
  	jQuery('.gray_mask').show();
    jQuery("#js_textarea").val(bbsinfo);
    //jQuery("#brandname_quick").html(brandname);
	jQuery("#js_textarea").html(bbsinfo);
  	jQuery("#secly").hide();
    jQuery("#Usid").val(id);
    //jQuery("#project_message_origin").val(origin);
	jQuery(".chooseSpan").html(brandname);
    //jQuery("#ispay").val(ispay);
  var domain_seat = '';
  if(typeof(jQuery("#domain_seat").val()) == 'undefined')
  {
    domain_seat = seat;
  }
  else
  {
    if(typeof(seat) != 'undefined')
    {
      domain_seat = jQuery("#domain_seat").val()+''+seat;
    }
    else
    {
      domain_seat = '';
    }
  }
  jQuery("#8_search_message").val(domain_seat);
    
}

function onClickBBSFrom(bbsinfo)
{
    var info = jQuery("#js_textarea").val();
	info = info+',';
	info += bbsinfo+',';
	var strArray = info.split(",");
	var arr = unique(strArray);
	var html = '';
	for(var i =0 ; i<arr.length ; i++) {
	   var s =  arr[i].replace(/(^,)|(,$)/g,'');//去除字符串俩边的逗号
	   html += s+'\n';
	}
	html = html.replace(/(^\n)|(\n$)/g,'');
	jQuery("#js_textarea").append(html);
	jQuery("#js_textarea").val(html);
	jQuery("#secly_1").hide();
}
function onClickBBSFrom_pc(obj)
{
   /* var info = jQuery("#js_textarea").val();
	info = info+',';
	info += bbsinfo+',';
	var strArray = info.split(",");
	var arr = unique(strArray);
	var html = '';
	for(var i =0 ; i<arr.length ; i++) {
	   var s =  arr[i].replace(/(^,)|(,$)/g,'');//去除字符串俩边的逗号
	   html += s+'\n';
	}
	html = html.replace(/(^\n)|(\n$)/g,'');
	jQuery("#js_textarea").append(html);
	jQuery("#js_textarea").val(html);
	jQuery("#tj_secMsg").hide();*/
	
	html = obj.html();
	$("#js_textarea").append(html);
	$("#js_textarea").css("color","#666");
	$("#js_textarea").val(html);
	$('#tj_secMsg').hide();
}

function onClickPCFrom(obj)
{
    /*var info = jQuery("#js_textarea").val();
	info = info+',';
	info += bbsinfo+',';
	var strArray = info.split(",");
	var arr = unique(strArray);
	var html = '';
	for(var i =0 ; i<arr.length ; i++) {
	   var s =  arr[i].replace(/(^,)|(,$)/g,'');//去除字符串俩边的逗号
	   html += s+'\n';
	}
	html = html.replace(/(^\n)|(\n$)/g,'');
	jQuery("#js_textarea").append(html);
	jQuery("#js_textarea").val(html);
	jQuery("#form_secMsg").hide();*/
	
	
	html = obj.html();
	$("#textarea").append(html);
	$("#textarea").css("color","#666");
	$("#textarea").val(html);
	$('#form_zx_secMsg').hide();
}

function hasidBBSFrom(id,bbsinfo)
{
	var info = jQuery("#js_textarea_"+id).val();
	info = info+',';
	info += bbsinfo+',';
	var strArray = info.split(",");
	var arr = unique(strArray);
	var html = '';
	for(var i =0 ; i<arr.length ; i++) {
	   var s =  arr[i].replace(/(^,)|(,$)/g,'');//去除字符串俩边的逗号
	   html += s+'\n';
	}
	html = html.replace(/(^\n)|(\n$)/g,'');
	jQuery("#js_textarea_"+id).append(html);
	jQuery("#js_textarea_"+id).val(html);
	jQuery("#secly_"+id).hide();
}
function unique(arr){
	arr.sort();
	var myArr = [];
	for(var i=0,j=arr.length,k=0;i<j;i++){
		if(myArr[k-1] != arr[i]){
			myArr[k++] = arr[i];
		}
	}
	return myArr;
}
function keyUp(){
   // jQuery("#js_textarea").html('');
   var info = jQuery("#js_textarea").val();
   // jQuery("#js_textarea").append(info);
}
//快捷留言
function onClickBBS(bbsinfo,seat)
{
    var s = '';
    var obj=document.getElementsByName('onid'); //选择所有name="aihao"的对象，返回数组
	//取到对象数组后，我们来循环检测它是不是被选中
	var s='';
	for(var i=0; i<obj.length; i++){
		if(obj[i].checked) s+=obj[i].value+','; //如果选中，将value添加到变量s中
	}
  	if( s == '' ) {
     	jQuery("#secly").hide();
      	alert('请选择您所想要留言的项目！');return false;
    }
	s = s.replace(/(^,)|(,$)/g,'');//去除字符串俩边的逗号
	jQuery("#show_hide").show()
  	jQuery("#sec_from").show();
  	jQuery("#js_textarea").val(bbsinfo);
	jQuery("#js_textarea").html(bbsinfo);
  	jQuery("#secly_1").hide();
    jQuery("#Usid").val(s);
  var domain_seat = '';
  if(typeof(jQuery("#domain_seat").val()) == 'undefined')
  {
    domain_seat = seat;
  }
  else
  {
    if(typeof(seat) != 'undefined')
    {
      domain_seat = jQuery("#domain_seat").val()+''+seat;
    }
    else
    {
      domain_seat = '';
    }
  }
  jQuery("#8_search_message").val(domain_seat);
    
}
function closeBg() 
{
	jQuery("#sec_from").hide();
	jQuery("#show_hide").hide();
	jQuery("#js_textarea").val('');
	jQuery("#Uname").val('');
	jQuery("#Utel").val('');
	jQuery("#js_textarea").html('');
}
//加入收藏夹，兼容多种浏览器
function bookmark(title,url){
//	var title=document.title;
//	var url=document.location.href;
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