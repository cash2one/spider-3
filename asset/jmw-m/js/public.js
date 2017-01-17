if(typeof(messageDefault)=='undefined') var messageDefault = '请问投资该项目所需要的费用有哪些？';
function touch_more(obj){
	var catid = obj.attr('cid');
	var page = obj.attr('page');
	page = Number(page);
	var count = obj.attr('count');
	var total_page = Math.ceil(count/3);
	var setting = {
		url:'http://m.jmw.com.cn/touch_more.php',
		cache:false,
		type:'get',
		dataType:'html',
		data:'catid='+catid+'&page='+page,
		success:function(data){
			//alert(data);
			var jsonobj = eval('('+data+')');
			//alert(total_page);
			//alert(jsonobj.num);
			if(total_page < page ){
				obj.hide();
			}else{
				//alert(jsonobj.num);
				if(jsonobj.num < 3){
					obj.hide();
				}
				$("#list_"+catid).append(jsonobj.html);
				page = page + 1;
				obj.attr('page',page);
			}
			
		}
	};
	$.ajax(setting);
}
		function checkMessageInfo_Safety(){
			var name = $("#namedbly").val();
			var content = $("#contentdbly").val();
			var phone = $("#phonedbly").val();
			
			if(name == '' || name =='如 万先生'){
				alert('姓名不能为空！');
				return false;
			}else if(content == '' ){
				alert('留言内容不能为空！');
				return false ;
			}else if(phone == '' || phone == '如 13111111111'){
				alert('联系方式不能为空！');  
				return false ; 
			}else if(!Utils.isMobile(phone)) {
				alert('请输入正确的手机号码！');
				return false ;
			}else{
				var message_num = $("#message_num_m").val();
				if(message_num == -1){
					$('.safeCheckW').show();
					$('#loading-mask').show();
					return false;
				}
				if(message_num == -2){
					$('.safeTishiW').show();
					$('#loading-mask').show();
					return false;
				}
				return true;
			}
			
		}
function checkMessageInfo()
{
    var name = $("#namedbly").val();
    var content = $("#contentdbly").val();
    var phone = $("#phonedbly").val();
    
    if(name == '' || name =='如 万先生'){
        alert('姓名不能为空！');
        return false;
    }else if(content == '' ){
        alert('留言内容不能为空！');
        return false ;
    }else if(phone == '' || phone == '如 13111111111'){
        alert('联系方式不能为空！');  
        return false ; 
    }else if(!Utils.isMobile(phone)) {
    	alert('请输入正确的手机号码！');
    	return false ;
    }else{
        return true;
    }     
    /* 
    
    var Uname = $("#name").val();
    var Utext = $("#content").val();
    if (Uname == '如 万先生') {$("#name").val('');};
    var Utel = $("#phone").val();
    if(Utext==''){
    	alert('留言内容不能为空！');
    	return false;
    }else if(!Utils.isContent(Utext)) {
       alert('留言内容填写格式错误！');
       return false ;
    }else if(Uname!='如 万先生' && !Utils.isName(Uname)){
   		alert('姓名填写格式错误！');
      	return false ;
    }else if(Utel == ''||Utel=='如 13111111111') {
       	alert('联系方式不能为空！');
      	return false ;
    }else if(!Utils.isMobile(Utel)) {
    	alert('请输入正确的联系方式！');
    	return false ;  
   };
    
    return true;
    */
}
$(function(){
    
    var namedbly = $("#namedbly").val();
    var phonedbly =$("#phonedbly").val();
    if(namedbly=='' || namedbly =='如 万先生'){
        $("#namedbly").val('如 万先生');
        $("#namedbly").focus(function(){
        	if($("#namedbly").val()=='如 万先生'){
        		$("#namedbly").val('');
        	}
       	});
        $("#namedbly").blur(function(){
      		if($("#namedbly").val()==''){
        		$("#namedbly").val('如 万先生');
        	}
       	});
    }
    
    if(phonedbly=='' || phonedbly=='如 13111111111'){
        $("#phonedbly").val('如 13111111111');
       	$("#phonedbly").focus(function(){
	   if($("#phonedbly").val()=='如 13111111111'){
	       $("#phonedbly").val('');
	   }
	   });
        $("#phonedbly").blur(function(){
		if($("#phonedbly").val()==''){
		  $("#phonedbly").val('如 13111111111');
	   }
	   });
    }
	/*$("#contentdbly").focus(function(){
	if($("#contentdbly").val()==messageDefault){
		$("#contentdbly").val('');
	}
	});*/
$("#contentdbly").blur(function(){
		if($("#contentdbly").val()==''){
		$("#contentdbly").val(messageDefault);
	}
	});
});

function checkMessage()
{
    var name = $("#name").val();
    var content = $("#contents").val();
    var phone = $("#phone").val();
    
    if(name == '' || name =='如 万先生'){
        alert('姓名不能为空！');
        return false;
    }else if(content == '' ){
        alert('留言内容不能为空！');
        return false ;
    }else if(phone == '' || phone == '如 13111111111'){
        alert('联系方式不能为空！');  
        return false ; 
    }else if(!Utils.isMobile(phone)) {
    	alert('请输入正确的手机号码！');
    	return false ;
    }else{
		var message_num = $("#message_num").val();
		if(message_num == -1){
			$('.safeCheckW').show();
			$('#loading-mask').show();
			return false;
		}
		if(message_num == -2){
			$('.safeTishiW').show();
			$('#loading-mask').show();
			return false;
		}
		return true;
    }   
    /*
    var Uname = $("#name").val();
    var Utext = $("#contents").val();
    if (Uname == '如 万先生') {$("#name").val('');};
    var Utel = $("#phone").val();
    if(Utext==''){
    	alert('留言内容不能为空！');
    	return false;
    }else if(!Utils.isContent(Utext)) {
       alert('留言内容填写格式错误！');
       return false ;
    }else if(Uname!='如 万先生' && !Utils.isName(Uname)){
   		alert('姓名填写格式错误！');
      	return false ;
    }else if(Utel == ''||Utel=='如 13111111111') {
       	alert('联系方式不能为空！');
       	
      	return false ;
    }else if(!Utils.isMobile(Utel)) {
    	alert('请输入正确的联系方式！');
    	return false ;  
   };
    
    return true;
    */
}
$(function(){
    
    var name = $("#name").val();
    var phone= $("#phone").val();
    
    if(name == '' || name == '如 万先生'){
        $("#name").val('如 万先生');
	$("#name").focus(function(){
	if($("#name").val()=='如 万先生'){
		$("#name").val('');
	}
	});
$("#name").blur(function(){
		if($("#name").val()==''){
		$("#name").val('如 万先生');
	}
	});
    }
    
    if(phone == '' || phone == '如 13111111111'){
        	$("#phone").val('如 13111111111');
	$("#phone").focus(function(){
	if($("#phone").val()=='如 13111111111'){
		$("#phone").val('');
	}
	});
$("#phone").blur(function(){
		if($("#phone").val()==''){
		$("#phone").val('如 13111111111');
	}
	});
    }
    
	



	/*$("#contents").focus(function(){
	if($("#contents").val()==messageDefault){
		$("#contents").val('');
	}
	});
$("#contents").blur(function(){
		if($("#contents").val()==''){
		$("#contents").val(messageDefault);
	}
	});*/
});