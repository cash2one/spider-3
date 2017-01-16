//修改资料
function subEditUserInfo2(project_id,type,seat,ispay,paystate){
	/*var domain_seat = '';
	if(typeof(jQuery("#domain_seat").val()) != 'undefined')
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
	jQuery("#8_5_origin").val(domain_seat);
	jQuery("#8_5_origin_edit").val(domain_seat);
    */
    jQuery("#add_blag_origin").val('2');
	var timestamp =Date.parse(new Date()); 
	jQuery.ajax({
		type:'get',
		url:'http://protectedapi.jmw.com.cn/message/getMessageData.php',
		data:'projectId='+project_id+'&type='+type+'&timestamp='+timestamp,
		dataType:'jsonp',
		jsonp:'get_message',
		async:false,
		cache:false,
		success:function(html){
		  if(ispay==1 && paystate ==2){
		      var user_name   = html.username;
					var user_mobile = html.telephone;
					var user_gender = html.gender;
					var user_email  = html.email;
					if(user_email == null) user_email = '';
                    if(user_name){
                        //调用确认层
						jQuery("#itemAtt").attr('class','popWrap changeInfo');
						jQuery("#hidAttentionDiv").hide();
						
						jQuery("#user_name").html(user_name);
						jQuery("#user_mobile").html(user_mobile);
						if(user_email != ''){
							jQuery("#user_email").html(user_email.substr(0,34));
							jQuery("#user_email").attr('title',user_email);
						}else{
							jQuery("#user_email").html(user_email);
						}
						
						jQuery("#basicid").val(project_id);
						jQuery("#basicname").val(user_name);
						jQuery("#basicmobile").val(user_mobile);
						jQuery("#basicemail").val(user_email);
						jQuery("#messagetype").val(type);
						
						if(user_gender == '1'){
							jQuery("#user_sex").html('女');
							jQuery("#basicsex").val('1');
						}else if(user_gender == '0'){
							jQuery("#user_sex").html('男');
							jQuery("#basicsex").val('0');
						}else{
							jQuery("#user_sex").html('男');
							jQuery("#basicsex").val('0');
						}
						
						//修改层赋值
						setValue(user_name,user_mobile,user_email,user_gender,project_id,type);
						jQuery("#hidLoginDiv").hide();
						jQuery("#c_infoBox1").show();
						showPop("#itemAtt",278);
                    }else{
                        //调用修改层
						jQuery("#itemAtt").attr('class','popWrap changeInfo');
						jQuery("#hidAttentionDiv").hide();
						setValue(user_name,user_mobile,user_email,user_gender,project_id,type);
						jQuery("#hidLoginDiv").hide();
						jQuery("#c_infoBox2").show();
						showPop("#itemAtt",278);
                    }/*
					if( user_name !='' && user_mobile !='' ){
						//调用确认层
						jQuery("#itemAtt").attr('class','popWrap changeInfo');
						jQuery("#hidAttentionDiv").hide();
						
						jQuery("#user_name").html(user_name);
						jQuery("#user_mobile").html(user_mobile);
						if(user_email != ''){
							jQuery("#user_email").html(user_email.substr(0,34));
							jQuery("#user_email").attr('title',user_email);
						}else{
							jQuery("#user_email").html(user_email);
						}
						
						jQuery("#basicid").val(project_id);
						jQuery("#basicname").val(user_name);
						jQuery("#basicmobile").val(user_mobile);
						jQuery("#basicemail").val(user_email);
						jQuery("#messagetype").val(type);
						
						if(user_gender == '1'){
							jQuery("#user_sex").html('女');
							jQuery("#basicsex").val('1');
						}else if(user_gender == '0'){
							jQuery("#user_sex").html('男');
							jQuery("#basicsex").val('0');
						}else{
							jQuery("#user_sex").html('男');
							jQuery("#basicsex").val('0');
						}
						
						//修改层赋值
						setValue(user_name,user_mobile,user_email,user_gender,project_id,type);
						jQuery("#hidLoginDiv").hide();
						jQuery("#c_infoBox1").show();
						showPop("#itemAtt",278);
						
					}else if(user_name =='' || user_mobile ==''){
						//调用修改层
						jQuery("#itemAtt").attr('class','popWrap changeInfo');
						jQuery("#hidAttentionDiv").hide();
						setValue(user_name,user_mobile,user_email,user_gender,project_id,type);
						jQuery("#hidLoginDiv").hide();
						jQuery("#c_infoBox2").show();
						showPop("#itemAtt",278);
					}*/
		  }else{
		      if(html.error_code < 0){
				//调用未登录
				var src = jQuery("#hidLoginDiv").attr('src');
				jQuery("#hidLoginDiv").attr('src',src+'&project_id_cat='+project_id);
				jQuery("#itemAtt").attr('class','popWrap loginWin');
				jQuery("#hidSidVal").val(project_id);
				jQuery("#brandNameOne").attr('href','');
				jQuery("#brandNameOne").html('');
				jQuery("#brandNameTwo").attr('href','');
				jQuery("#brandNameTwo").html('');
				jQuery("#tipsOne").html('');
				jQuery("#tipsTwo").html('');
				jQuery("#attTips").attr('class','attTips');
				showPop("#itemAtt",405);
				// jQuery("#quickBox").hide();
				
				jQuery("#c_infoBox2").hide();
				jQuery("#c_infoBox1").hide();
				
				jQuery("#hidLoginDiv").show();
				jQuery("#hidAttentionDiv").hide();
			}else{
					var user_name   = html.username;
					var user_mobile = html.telephone;
					var user_gender = html.gender;
					var user_email  = html.email;
					if(user_email == null) user_email = '';
					if( user_name !='' && user_mobile !='' ){
						//调用确认层
						jQuery("#itemAtt").attr('class','popWrap changeInfo');
						jQuery("#hidAttentionDiv").hide();
						
						jQuery("#user_name").html(user_name);
						jQuery("#user_mobile").html(user_mobile);
						if(user_email != ''){
							jQuery("#user_email").html(user_email.substr(0,34));
							jQuery("#user_email").attr('title',user_email);
						}else{
							jQuery("#user_email").html(user_email);
						}
						
						jQuery("#basicid").val(project_id);
						jQuery("#basicname").val(user_name);
						jQuery("#basicmobile").val(user_mobile);
						jQuery("#basicemail").val(user_email);
						jQuery("#messagetype").val(type);
						
						if(user_gender == '1'){
							jQuery("#user_sex").html('女');
							jQuery("#basicsex").val('1');
						}else if(user_gender == '0'){
							jQuery("#user_sex").html('男');
							jQuery("#basicsex").val('0');
						}else{
							jQuery("#user_sex").html('男');
							jQuery("#basicsex").val('0');
						}
						
						//修改层赋值
						setValue(user_name,user_mobile,user_email,user_gender,project_id,type);
						jQuery("#hidLoginDiv").hide();
						jQuery("#c_infoBox1").show();
						showPop("#itemAtt",278);
						
					}else if(user_name =='' || user_mobile ==''){
						//调用修改层
						jQuery("#itemAtt").attr('class','popWrap changeInfo');
						jQuery("#hidAttentionDiv").hide();
						setValue(user_name,user_mobile,user_email,user_gender,project_id,type);
						jQuery("#hidLoginDiv").hide();
						jQuery("#c_infoBox2").show();
						showPop("#itemAtt",278);
					}
			}
		  }
			
		}
	});
}



//修改资料
function subEditUserInfo(project_id,type,seat){
	/*var domain_seat = '';
	if(typeof(jQuery("#domain_seat").val()) != 'undefined')
	{
		if(typeof(seat) != 'undefined')
		{
			domain_seat = jQuery("#domain_seat").val()+''+seat;
		}
		else
		{
			domain_seat = '';
		}
	}*/
	//jQuery("#8_5_origin").val(domain_seat);
	//jQuery("#8_5_origin_edit").val(domain_seat);
    jQuery("#add_blag_origin").val('1');
    
	var timestamp =Date.parse(new Date()); 
	jQuery.ajax({
		type:'get',
		url:'http://protectedapi.jmw.com.cn/message/getMessageData.php',
		data:'projectId='+project_id+'&type='+type+'&timestamp='+timestamp,
		dataType:'jsonp',
		jsonp:'get_message',
		async:false,
		cache:false,
		success:function(html){ 
			if(html.error_code < 0){
				//调用未登录
				var src = jQuery("#hidLoginDiv").attr('src');
				jQuery("#hidLoginDiv").attr('src',src+'&project_id_cat='+project_id);
				jQuery("#itemAtt").attr('class','popWrap loginWin');
				jQuery("#hidSidVal").val(project_id);
				jQuery("#brandNameOne").attr('href','');
				jQuery("#brandNameOne").html('');
				jQuery("#brandNameTwo").attr('href','');
				jQuery("#brandNameTwo").html('');
				jQuery("#tipsOne").html('');
				jQuery("#tipsTwo").html('');
				jQuery("#attTips").attr('class','attTips');
				showPop("#itemAtt",405);
				// jQuery("#quickBox").hide();
				
				jQuery("#c_infoBox2").hide();
				jQuery("#c_infoBox1").hide();
				
				jQuery("#hidLoginDiv").show();
				jQuery("#hidAttentionDiv").hide();
			}else{
					var user_name   = html.username;
					var user_mobile = html.telephone;
					var user_gender = html.gender;
					var user_email  = html.email;
					if(user_email == null) user_email = '';
					if( user_name !='' && user_mobile !='' ){
						//调用确认层
						jQuery("#itemAtt").attr('class','popWrap changeInfo');
						jQuery("#hidAttentionDiv").hide();
						
						jQuery("#user_name").html(user_name);
						jQuery("#user_mobile").html(user_mobile);
						if(user_email != ''){
							jQuery("#user_email").html(user_email.substr(0,34));
							jQuery("#user_email").attr('title',user_email);
						}else{
							jQuery("#user_email").html(user_email);
						}
						
						jQuery("#basicid").val(project_id);
						jQuery("#basicname").val(user_name);
						jQuery("#basicmobile").val(user_mobile);
						jQuery("#basicemail").val(user_email);
						jQuery("#messagetype").val(type);
						
						if(user_gender == '1'){
							jQuery("#user_sex").html('女');
							jQuery("#basicsex").val('1');
						}else if(user_gender == '0'){
							jQuery("#user_sex").html('男');
							jQuery("#basicsex").val('0');
						}else{
							jQuery("#user_sex").html('男');
							jQuery("#basicsex").val('0');
						}
						
						//修改层赋值
						setValue(user_name,user_mobile,user_email,user_gender,project_id,type);
						jQuery("#hidLoginDiv").hide();
						jQuery("#c_infoBox1").show();
						showPop("#itemAtt",278);
						
					}else if(user_name =='' || user_mobile ==''){
						//调用修改层
						jQuery("#itemAtt").attr('class','popWrap changeInfo');
						jQuery("#hidAttentionDiv").hide();
						setValue(user_name,user_mobile,user_email,user_gender,project_id,type);
						jQuery("#hidLoginDiv").hide();
						jQuery("#c_infoBox2").show();
						showPop("#itemAtt",278);
					}
			}
		}
	});
}

//给修改层赋值
function setValue(user_name,user_mobile,user_email,user_gender,project_id,type){
	jQuery("#UserName").val(user_name);
	jQuery("#UserMobile").val(user_mobile);
	jQuery("#UserEmail").val(user_email);
	jQuery("#sid").val(project_id);
	jQuery("#UserType").val(type);
	
	if(user_gender == '1'){
		jQuery("#UserNv").attr('checked','checked');
	}else if(user_gender == '0'){
		jQuery("#UserNan").attr('checked','checked');
	}else{
		jQuery("#UserNan").attr('checked','checked');
	}
	jQuery("#nameError").attr('class','tipsIcon');	
	jQuery("#mobileError").attr('class','tipsIcon');
	jQuery("#emailError").attr('class','tipsIcon');
}


function quickButtonMessageNew(){
	var user_name   = jQuery("#UserName").val();
	var user_mobile = jQuery("#UserMobile").val();
	var user_email  = jQuery("#UserEmail").val();
	var user_sex    = jQuery("input[name='basicsex']:checked").val();
	var sid         = jQuery("#sid").val();
    var basicbrand_name = jQuery("#basicbrand_name").val();
	var UserType    = jQuery("#UserType").val();
    var editlasturl = jQuery("#editlasturl").val();
    var editfromurl = jQuery("#editfromurl").val();
    var seat = $("#edit_blag_origin").val();
	if(!user_name.match(/^[0-9a-zA-Z\u4e00-\u9fa5]{0,6}$/))
	{
		jQuery("#UserName").focus();
		return false;
	}
	if(!user_mobile.match(/^(13[0-9]|14[0-9]|15([0-9])|18([0-9]))[0-9]{8}$/))
	{
		jQuery("#UserMobile").focus();
		return false;
	}
	if(user_email == ''){
		jQuery("#emailError").attr('class','tipsIcon');
		//return false;
	}else{
		if(!jQuery("#UserEmail").val().length >50 ||!jQuery("#UserEmail").val().match(/^\w(\w|_|-|\.)*@\w(\w|_|-|\.)*\.(com|edu|gov|int|mil|net|org|biz|info|pro|name|museum|coop|aero|xxx|idv|cn|hk|tw)$/))
		{
			jQuery("#UserEmail").focus();
			return false;
		}
	}
    jQuery('.c_submitBtn input').hide();
	jQuery.ajax({
		type:'get',
		url:'http://liuyan.jmw.com.cn/message/messageProjectBlag.php',
		data:'basicid='+sid+'&basicname='+encodeURIComponent(user_name)+'&basicsex='+user_sex+'&basicmobile='+user_mobile+'&basicemail='+user_email+'&messagetype='+UserType+'&origin='+seat+'&basicbrand_name='+basicbrand_name+'&basiclasturl='+editlasturl+'&basicfromurl='+editfromurl,
		dataType:'jsonp',
		jsonp:'send_message',
		success:function(html){
			if(html==1){
				if(UserType == 1){
				    jQuery('.c_submitBtn input').show();
					jQuery("#c_infoBox1").hide();
					jQuery("#c_infoBox2").hide();
					jQuery("#sendClass").attr('class','success_alert syzl');
					jQuery("#c_infoBox3").show();
					jQuery("#sendType").html('索要资料');
					jQuery("#sendStatus").html('您已向企业索要加盟资料');
					jQuery("#sendContent").html('企业会将更多详细资料发送至您的电子邮箱中，请注意查收！');
				}else if(UserType == 2){
				    jQuery('.c_submitBtn input').show();
					jQuery("#c_infoBox1").hide();
					jQuery("#c_infoBox2").hide();
					jQuery("#sendClass").attr('class','success_alert fsyx');
					jQuery("#c_infoBox3").show();
					jQuery("#sendType").html('发送意向');
					jQuery("#sendStatus").html('您的加盟意向已发送至企业');
					jQuery("#sendContent").html('企业收到您的意向后，将第一时间与您联系！');
				}else{
				    jQuery('.c_submitBtn input').show();
					jQuery("#c_infoBox1").hide();
					jQuery("#c_infoBox2").hide();
					jQuery("#sendClass").attr('class','success_alert hdh');
					jQuery("#c_infoBox3").show();
					jQuery("#sendType").html('回电话');
					jQuery("#sendStatus").html('您已向企业发送通知');
					jQuery("#sendContent").html('企业的相关人员会第一时间与您进行电话联系！');
				}
			}else{
			 alert('你点击过快，请稍候！');
             jQuery('.c_submitBtn input').show();
			}
		}
	});
	
}


//快捷按钮提交留言
function quickButtonMessage(){
	var user_name   = jQuery("#UserName").val();
	var user_mobile = jQuery("#UserMobile").val();
	var user_email  = jQuery("#UserEmail").val();
	var user_sex    = jQuery("input[name='basicsex']:checked").val();
	var sid         = jQuery("#sid").val();
	var UserType    = jQuery("#UserType").val();
	var seat = $("#8_5_origin").val();
	if(!user_name.match(/^[0-9a-zA-Z\u4e00-\u9fa5]{0,6}$/))
	{
		jQuery("#UserName").focus();
		return false;
	}
	if(!user_mobile.match(/^(13[0-9]|14[0-9]|15([0-9])|18([0-9]))[0-9]{8}$/))
	{
		jQuery("#UserMobile").focus();
		return false;
	}
	if(user_email == ''){
		jQuery("#emailError").attr('class','tipsIcon');
		//return false;
	}else{
		if(!jQuery("#UserEmail").val().length >50 ||!jQuery("#UserEmail").val().match(/^\w(\w|_|-|\.)*@\w(\w|_|-|\.)*\.(com|edu|gov|int|mil|net|org|biz|info|pro|name|museum|coop|aero|xxx|idv|cn|hk|tw)$/))
		{
			jQuery("#UserEmail").focus();
			return false;
		}
	}
	jQuery.ajax({
		type:'get',
		url:'http://liuyan.jmw.com.cn/message/searchBasicFastLeaveMessage.php',
		data:'basicid='+sid+'&basicname='+encodeURIComponent(user_name)+'&basicsex='+user_sex+'&basicmobile='+user_mobile+'&basicemail='+user_email+'&messagetype='+UserType+'&origin='+seat,
		dataType:'jsonp',
		jsonp:'send_message',
		success:function(html){
			if(html==1){
				if(UserType == 1){
					jQuery("#c_infoBox1").hide();
					jQuery("#c_infoBox2").hide();
					jQuery("#sendClass").attr('class','success_alert syzl');
					jQuery("#c_infoBox3").show();
					jQuery("#sendType").html('索要资料');
					jQuery("#sendStatus").html('您已向企业索要加盟资料');
					jQuery("#sendContent").html('企业会将更多详细资料发送至您的电子邮箱中，请注意查收！');
				}else if(UserType == 2){
					jQuery("#c_infoBox1").hide();
					jQuery("#c_infoBox2").hide();
					jQuery("#sendClass").attr('class','success_alert fsyx');
					jQuery("#c_infoBox3").show();
					jQuery("#sendType").html('发送意向');
					jQuery("#sendStatus").html('您的加盟意向已发送至企业');
					jQuery("#sendContent").html('企业收到您的意向后，将第一时间与您联系！');
				}else{
					jQuery("#c_infoBox1").hide();
					jQuery("#c_infoBox2").hide();
					jQuery("#sendClass").attr('class','success_alert hdh');
					jQuery("#c_infoBox3").show();
					jQuery("#sendType").html('回电话');
					jQuery("#sendStatus").html('您已向企业发送通知');
					jQuery("#sendContent").html('企业的相关人员会第一时间与您进行电话联系！');
				}
			}
		}
	});
	
}


function addMessagesToLiuyanNew(){
	var basicid   = $("#basicid").val();
	var basicname = $("#basicname").val();
	var basicsex  = $("#basicsex").val();
	var basicmobile = $("#basicmobile").val();
	var basicemail  = $("#basicemail").val();
	var messagetype = $("#messagetype").val();
	var seat = $("#add_blag_origin").val();
    var basicbrand_name = $("#basicbrand_name").val();
    var basicfromurl = $("#basicfromurl").val();
    var basiclasturl = $("#basiclasturl").val();
    jQuery('#submitEdit').hide();
	jQuery.ajax({
		type:'get',
		url:'http://liuyan.jmw.com.cn/message/messageProjectBlag.php',
		data:'basicid='+basicid+'&basicname='+encodeURIComponent(basicname)+'&basicsex='+basicsex+'&basicmobile='+basicmobile+'&basicemail='+basicemail+'&messagetype='+messagetype+'&origin='+seat+'&basicbrand_name='+basicbrand_name+'&basiclasturl='+basiclasturl+'&basicfromurl='+basicfromurl,
		dataType:'jsonp',
		jsonp:'send_message',
		success:function(html){
			if(html==1){
				if(messagetype == 1){
				    jQuery('#submitEdit').show();
					jQuery("#c_infoBox1").hide();
					jQuery("#sendClass").attr('class','success_alert syzl');
					jQuery("#c_infoBox3").show();
					jQuery("#sendType").html('索要资料');
					jQuery("#sendStatus").html('您已向企业索要加盟资料');
					jQuery("#sendContent").html('企业会将更多详细资料发送至您的电子邮箱中，请注意查收！');
				}else if(messagetype == 2){
				    jQuery('#submitEdit').show();
					jQuery("#c_infoBox1").hide();
					jQuery("#sendClass").attr('class','success_alert fsyx');
					jQuery("#c_infoBox3").show();
					jQuery("#sendType").html('发送意向');
					jQuery("#sendStatus").html('您的加盟意向已发送至企业');
					jQuery("#sendContent").html('企业收到您的意向后，将第一时间与您联系！');
				}else{
				    jQuery('#submitEdit').show();
					jQuery("#c_infoBox1").hide();
					jQuery("#sendClass").attr('class','success_alert hdh');
					jQuery("#c_infoBox3").show();
					jQuery("#sendType").html('回电话');
					jQuery("#sendStatus").html('您已向企业发送通知');
					jQuery("#sendContent").html('企业的相关人员会第一时间与您进行电话联系！');
				}
			}else{
			     alert('你点击过快，请稍候！');
                 jQuery('#submitEdit').show();
			}
		}
	});
}

function addMessagesToLiuyan(){
	var basicid   = $("#basicid").val();
	var basicname = $("#basicname").val();
	var basicsex  = $("#basicsex").val();
	var basicmobile = $("#basicmobile").val();
	var basicemail  = $("#basicemail").val();
	var messagetype = $("#messagetype").val();
	var seat = $("#8_5_origin").val();
	jQuery.ajax({
		type:'get',
		url:'http://liuyan.jmw.com.cn/message/searchBasicFastLeaveMessage.php',
		data:'basicid='+basicid+'&basicname='+encodeURIComponent(basicname)+'&basicsex='+basicsex+'&basicmobile='+basicmobile+'&basicemail='+basicemail+'&messagetype='+messagetype+'&origin='+seat,
		dataType:'jsonp',
		jsonp:'send_message',
		success:function(html){
			if(html==1){
				if(messagetype == 1){
					jQuery("#c_infoBox1").hide();
					jQuery("#sendClass").attr('class','success_alert syzl');
					jQuery("#c_infoBox3").show();
					jQuery("#sendType").html('索要资料');
					jQuery("#sendStatus").html('您已向企业索要加盟资料');
					jQuery("#sendContent").html('企业会将更多详细资料发送至您的电子邮箱中，请注意查收！');
				}else if(messagetype == 2){
					jQuery("#c_infoBox1").hide();
					jQuery("#sendClass").attr('class','success_alert fsyx');
					jQuery("#c_infoBox3").show();
					jQuery("#sendType").html('发送意向');
					jQuery("#sendStatus").html('您的加盟意向已发送至企业');
					jQuery("#sendContent").html('企业收到您的意向后，将第一时间与您联系！');
				}else{
					jQuery("#c_infoBox1").hide();
					jQuery("#sendClass").attr('class','success_alert hdh');
					jQuery("#c_infoBox3").show();
					jQuery("#sendType").html('回电话');
					jQuery("#sendStatus").html('您已向企业发送通知');
					jQuery("#sendContent").html('企业的相关人员会第一时间与您进行电话联系！');
				}
			}
		}
	});
}
jQuery(function(){
	jQuery("#UserName").blur(function(){
		if(!jQuery("#UserName").val().match(/^[0-9A-Za-z\u4e00-\u9fa5]{0,6}$/))
		{
			jQuery("#nameError").attr('class','tipsIcon c_error');
		}else{
			jQuery("#nameError").attr('class','tipsIcon c_ok');
		}
	});
	jQuery("#UserMobile").blur(function(){
		if(!jQuery("#UserMobile").val().match(/^(13[0-9]|14[0-9]|15([0-9])|18([0-9]))[0-9]{8}$/))
		{
			jQuery("#mobileError").attr('class','tipsIcon c_error');
		}else{
			jQuery("#mobileError").attr('class','tipsIcon c_ok');
		}
	});
	jQuery("#UserEmail").blur(function(){
		if(jQuery(this).val()==''){
			jQuery("#emailError").attr('class','tipsIcon');
		}else{
			if(!jQuery("#UserEmail").val().length >50 ||!jQuery("#UserEmail").val().match(/^\w(\w|_|-|\.)*@\w(\w|_|-|\.)*\.(com|edu|gov|int|mil|net|org|biz|info|pro|name|museum|coop|aero|xxx|idv|cn|hk|tw)$/))
			{
				jQuery("#emailError").attr('class','tipsIcon c_error');
			}else{
				jQuery("#emailError").attr('class','tipsIcon c_ok');
			}
		}
		
	});
});
jQuery(function(){
	// var success_key = '',success_brand_name = '',success_project_id='',success_vid='',regcookie='';
	// var arrStr = document.cookie.split("; ");
	// for(var i = 0;i < arrStr.length;i ++){
	// 	var temp = arrStr[i].split("=");
	// 	if(temp[0] == 'success_key') {success_key = decodeURIComponent(temp[1]);}
	// 	if(temp[0] == 'success_project_id') {success_project_id = decodeURIComponent(temp[1]);}
	// 	if(temp[0] == 'success_vid') {success_vid = decodeURIComponent(temp[1]);}
	// 	if(temp[0] == 'success_brand_name') {success_brand_name = decodeURIComponent(temp[1]);}
	// 	if(temp[0] == 'regcookie') {regcookie = decodeURIComponent(temp[1]);}
	// }
	// if(success_key == 'attentionProject')
	// {
	// 	attention(success_project_id,success_brand_name,success_vid);
	// }
});
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
			jQuery("#attentionCountNum").html('('+html+')');
		}
	});
}
//添加关注
function attention(project_id,brand_name,seat){
	var timestamp =Date.parse(new Date());
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
			seat = '';
			domain_seat = '';
		}
	}
	jQuery("#8_list_attention").val(domain_seat);
	//jQuery("#ispay").val(ispay);
	jQuery("#attentionbrandname").val(brand_name);
	jQuery.ajax({
		async:false,
		cache:false,
		type:'get',
		url:'http://protectedapi.jmw.com.cn/person/AttentionAPI.php',
		data:'projectId='+project_id+'&timestamp='+timestamp,
		dataType:'jsonp',
		jsonp:"jsonpcallback",
		success:function(html){
			if(html.rs == 1)
			{ 
				//调用成功层
				jQuery("#itemAtt").attr('class','popWrap');
				jQuery("#hidSidVal").val(project_id);
                jQuery("#guanzhupid").val(project_id);
				jQuery("#brandNameOne").attr('href',html.projecturl);
				jQuery("#brandNameTwo").attr('href',html.projecturl);
				jQuery("#brandNameOne").html(brand_name);
				jQuery("#brandNameTwo").html(brand_name);
				jQuery("#attTips").attr('class','attTips ok');
				jQuery("#tipsOne").html('<strong>恭喜您！</strong>');
				jQuery("#tipsTwo").html('成功关注了<span>[<a name="brandName" href="'+
					html.projecturl+'" target="_blank">'+brand_name+'</a>]</span>');	
				//var height = showCommonDiv(html); //ispay,
				//showPop("#itemAtt",height);
				showPop("#itemAtt",468);
                jQuery("#quickBox").show();
				jQuery("#hidLoginDiv").hide();
				jQuery("#hidAttentionDiv").show();
				jQuery("#c_infoBox1").hide();
				jQuery("#c_infoBox2").hide();
			}else if(html.rs == -10){
				//调用不能重复添加该项目及已关注该项目
				jQuery("#itemAtt").attr('class','popWrap');
				jQuery("#hidSidVal").val(project_id);
                jQuery("#guanzhupid").val(project_id);
				jQuery("#brandNameOne").attr('href',html.projecturl);
				jQuery("#brandNameTwo").attr('href',html.projecturl);
				jQuery("#brandNameOne").html(brand_name);
				jQuery("#brandNameTwo").html(brand_name);
				jQuery("#attTips").attr('class','attTips error');
				jQuery("#tipsOne").html('已关注了<span>[<a name="brandName" href="'+
					html.projecturl+'" target="_blank">'+brand_name+'</a>]</span>');
				jQuery("#tipsTwo").html('<strong>无需再次关注</strong>');
				//var height = showCommonDiv(html);//ispay,
				//showPop("#itemAtt",height);
				showPop("#itemAtt",468);
                jQuery("#quickBox").show();
				jQuery("#hidLoginDiv").hide();
				jQuery("#hidAttentionDiv").show();
				jQuery("#c_infoBox1").hide();
				jQuery("#c_infoBox2").hide();
			}
			else if(html.rs == -20)
			{
				// 已超过最大关注数量
				jQuery("#itemAtt").attr('class','popWrap');
				jQuery("#hidSidVal").val(project_id);
				jQuery("#brandNameOne").attr('href',html.projecturl);
				jQuery("#brandNameTwo").attr('href',html.projecturl);
				jQuery("#brandNameOne").html(brand_name);
				jQuery("#brandNameTwo").html(brand_name);
				jQuery("#attTips").attr('class','attTips error');
				jQuery("#tipsOne").html('<strong>您的关注数量已达到上限</strong>');
				jQuery("#tipsTwo").html('建议您整理已关注过的项目,<span><a target="_blank" onclick="hidDiv();" href="http://person.jmw.com.cn/attentionlist.php">立即整理</a></span>');
				//showPop("#itemAtt",163);
				showPop("#itemAtt",468);
                jQuery("#quickBox").show();
				//showCommonDiv(2,html);
				jQuery("#hidLoginDiv").hide();
				jQuery("#hidAttentionDiv").show();
				jQuery("#c_infoBox1").hide();
				jQuery("#c_infoBox2").hide();
			}
			else
			{
				//调用未登录
				var src = jQuery("#hidLoginDiv").attr('src');
				// alert(src);
				var url = window.location.href;
				jQuery("#hidLoginDiv").attr('src',src+'&success_url='+encodeURIComponent(url)+'&success_key=attentionProject&project_id='+project_id+'&brand_name='+encodeURIComponent(brand_name)+'&origin='+seat);//
				jQuery("#itemAtt").attr('class','popWrap loginWin');
				jQuery("#hidSidVal").val(project_id);
				jQuery("#brandNameOne").attr('href','');
				jQuery("#brandNameOne").html('');
				jQuery("#brandNameTwo").attr('href','');
				jQuery("#brandNameTwo").html('');
				jQuery("#tipsOne").html('');
				jQuery("#tipsTwo").html('');
				jQuery("#attTips").attr('class','attTips');
				//showPop("#itemAtt",405);
				showPop("#itemAtt",405);
                jQuery("#quickBox").show();
				//showCommonDiv(html);
				jQuery("#hidLoginDiv").show();
				jQuery("#hidAttentionDiv").hide();
				jQuery("#c_infoBox1").hide();
				jQuery("#c_infoBox2").hide();
			}
			getUserInfos();
		}
	});
	getAttentionCountByAjax(project_id);
}

function getUserInfos()
{
	jQuery.ajax({
		async:false,
		cache:false,
    	type:'get',
		dataType:'jsonp',
		jsonp:"jsonpcallback",
		url:'http://protectedapi.jmw.com.cn/person/getUserInfos.php',
    	success:function(data)
    	{
    		if(data == 'unlogin')
    		{
    			return false;
    		}
    		else
    		{
    			var msname="",mssex="",msmobile="";
    			var arrStr = document.cookie.split("; ");
    	        for(var i = 0;i < arrStr.length;i ++){
    	            var temp = arrStr[i].split("=");
    	            if(temp[0] == 'mssname') {msname = decodeURIComponent(temp[1]);}
    	            else if(temp[0] == 'mssex'){mssex = decodeURIComponent(temp[1]);}
    	            else if(temp[0] == 'msmobile'){msmobile = decodeURIComponent(temp[1]);}
    	        }
    			if(msname != "" && msmobile != "")
    	        {
    				jQuery("#realname").val(msname);
	    	        jQuery("#messMobile").val(msmobile);
	    			if(mssex == 1)jQuery("#messsexfm").attr("checked",true);
	    			else jQuery("#messsexm").attr("checked",true);
    	        }
    			else
    			{
	    	        jQuery("#realname").val(data[0].realname);
	    	        jQuery("#messMobile").val(data[0].telphone);
	    			if(data[0].gender == 2)jQuery("#messsexfm").attr("checked",true);
	    			else jQuery("#messsexm").attr("checked",true);
    			}
    		}
    	}
    });
}
function showCommonDiv(html)
{
	if(ispay == 1 || ispay==3 || ispay==4 || ispay == 7 || ispay == 8 || ispay == 9)
	{
		var height = 468;
		jQuery("#interested_item").hide();
		jQuery("#submitBtn_box").hide();
		jQuery("#quickBox").show();
		//jQuery("#ispay").val(ispay);
		jQuery("#attentionFrom").attr('action','http://liuyan.jmw.com.cn/message/messagecurd.php');
	// }
	// else if(ispay == 0 || ispay==2 || ispay == 5 || ispay == 6){
	// 	jQuery("#attentionFrom").attr('action','http://liuyan.jmw.com.cn/message/addMessageByRoundProject.php');
	// 	var li = ''; var className='';	var money = '';
	// 	jQuery("#interested_item > ul > li").remove();
	// 	jQuery.each(html,function(k,v){
	// 		if(k != 'rs' && k != 'extend' && k != 'toJSONString' && k != 'user_realname' && k != 'gender' && k != 'telphone')
	// 		{
	// 			if(v.min_money == 100) money = '<span id="brandmoney_'+k+'">100万元以上</span>';
	// 			else if(v.min_money == 0) money = '<span id="brandmoney_'+k+'">1万元以下</span>';
	// 			else money = '<span id="brandmoney_'+k+'">'+v.min_money+'-'+v.max_money+'</span>万';
	// 			if(k == 2) className='last_li';
	// 			li = '<li name="'+v.id+'" class="'+className+'">'+
	// 					'<div class="pop_ppLogo">'+
	// 						'<a id="brandurl_'+k+'" target="_blank" href="http://'+
	// 								v.subdomain_prefix+'.jmw.com.cn/">'+
	// 							'<img id="brandimg_1" width="113" height="87" alt="" src="'+v.logo+'"></a>'+
	// 						'<em><a id="brandname_'+k+'" target="_blank" href="http://'+
	// 							v.subdomain_prefix+'.jmw.com.cn/">'+v.brand_name+'</a></em>'+
	// 					'</div>'+
	// 					'<p>投资额：'+money+'</p>'+
	// 					'<input type=\'hidden\' id=\'projectid_'+k+'\' name=\'project['+k+'][id]\' value='+v.id+' />'+
	// 					'<input type=\'hidden\' id=\'projectname_'+k+'\' name=\'project['+k+'][name]\' value='+v.brand_name+' />'+
	// 				'</li>';
	// 		}else{
	// 			li = '';
	// 		}
			
	// 		jQuery(li).appendTo(jQuery("#interested_item > ul"));
	// 	});
	// 	jQuery("#projectId").val(jQuery("li").attr('name'));
	// 	jQuery("#user_realname").val(html.user_realname);
	// 	jQuery("#gender").val(html.gender);
	// 	jQuery("#telphone").val(html.telphone);
	// 	var height = 476;
	// 	jQuery("#quickBox").hide();
	// 	jQuery("#interested_item").show();
	// 	jQuery("#submitBtn_box").show();
	}else{
		jQuery("#attentionFrom").attr('action','http://liuyan.jmw.com.cn/message/messagecurd.php');
		height = 0;
		jQuery("#quickBox").hide();
		jQuery("#interested_item").hide();
		jQuery("#submitBtn_box").hide();
	}
	return height;
}
//通用弹出层触发动作 begin
function showPop(id,h){
	jQuery(id).show().height(h);
	jQuery("#popWrap_sub").height(h);
	jQuery("#popIframe").height(h);
	jQuery("#bgDiv").show();
	jQuery("#bgIframe").show();
}
function closeMessage()
{
	jQuery("#messContent").val("");
	jQuery("#realname").val("");
	jQuery("#messMobile").val("");
}

function hidDiv()
{
	var MessHeight = jQuery("#itemAtt").height();
	MessHeight = parseInt(MessHeight);

	if(MessHeight != 163)
	{
		if(MessHeight > 405 )
		{
			closeMessage();		
		}else{
			//iframeinit();
		}
	}		
	jQuery("#interested_item > ul > li").remove();
	jQuery("#c_infoBox1").hide();
	jQuery("#c_infoBox2").hide();
	var url = jQuery("#url").val();
	var src = "http://person.jmw.com.cn/iframeLogin.php?url="+url;
	jQuery("#hidLoginDiv").attr('src',src); 
	jQuery("#itemAtt").hide();
	jQuery("#bgDiv").hide();
	jQuery("#bgIframe").hide();
	jQuery("#c_infoBox3").hide();
	jQuery("#voto_grayBox").hide();
	jQuery("#nologin_voto").hide();
	return false;
}
	  
jQuery(function(){
	var textareaVal = '';
	jQuery("#messageUl > li > a").each(function(){
		jQuery(this).click(function(){
			textareaVal = jQuery(this).html();
			quickMessage(textareaVal);
			jQuery("#secly_0000").hide();
		});
	});
});

function quickMessage(bbsinfo)
{
	var info = jQuery("#messContent").val();
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
	jQuery("#messContent").append(html);
	jQuery("#messContent").val(html);
}

//提交多个留言
function sendMessage()
{
	if(document.getElementById("projectid_0")){var project_id_0 = jQuery("#projectid_0").val();} else {var project_id_0 = 0;}
	if(document.getElementById("projectid_1")){var project_id_1 = jQuery("#projectid_1").val();} else {var project_id_1 = 0;}
	if(document.getElementById("projectid_2")){var project_id_2 = jQuery("#projectid_2").val();} else {var project_id_2 = 0;}
	if(document.getElementById("projectname_0")){var project_name_0 = jQuery("#projectname_0").val();} else {var project_name_0 = 0;}
	if(document.getElementById("projectname_1")){var project_name_1 = jQuery("#projectname_1").val();} else {var project_name_1 = 0;}
	if(document.getElementById("projectname_2")){var project_name_2 = jQuery("#projectname_2").val();} else {var project_name_2 = 0;}
	var user_realname = 0;
	var gender = 0;
	var telphone = 0;
	if(document.getElementById("user_realname")){user_realname = jQuery("#user_realname").val();}
	if(document.getElementById("gender")){gender = jQuery("#gender").val();}
	if(document.getElementById("telphone")){telphone = jQuery("#telphone").val();}
	jQuery.ajax({
		cache:false,
		type:'get',
		url:'http://liuyan.jmw.com.cn/message/addMessageByRoundProject.php',
		data:'project_id_0='+project_id_0+'&project_id_1='+project_id_1+'&project_id_2='+project_id_2+
		'&project_name_0='+encodeURIComponent(project_name_0)+
		'&project_name_1='+encodeURIComponent(project_name_1)+
		'&project_name_2='+encodeURIComponent(project_name_2)+
		'&user_realname='+encodeURIComponent(user_realname)+
		'&gender='+gender+
		'&telphone='+telphone,
		dataType:'jsonp',
		jsonp:'callBack',
		success:function(html){
			hidDiv();
		}
	});
}

//提交留言
function AttentionMessage()
{
    var Usid = jQuery("#hidSidVal").val();
    var brand_name = jQuery("#attentionbrandname").val();
    var Uname = jQuery("#realname").val();
    var Utext = jQuery("#messContent").val();
    var Utel = jQuery("#messMobile").val();
    var att_seat = jQuery("#8_list_attention").val();
    var sex;
    if(document.getElementById('messsexm').checked) sex = 0;
    else if(document.getElementById('messsexfm').checked) sex = 1;
    //var ispay = jQuery("#ispay").val();
    if( !Usid ){
       jQuery("#secly_0000").hide();
       return  false;
    }else if(Utext==''){
    	alert('留言内容不能为空！');
    	jQuery("#messContent").focus();
    	return false;
    }else if(!Utils.isContent(Utext)){
       alert('留言内容填写格式错误！');
       jQuery("#messContent").focus();
       return false ;
    // }else if(Uname=='') {
    //    alert('姓名不能为空！');
    //    jQuery("#realname").focus();
    //    return false ;
    }else if( !Utils.isName(Uname)){
       alert('姓名填写格式错误！');
       jQuery("#realname").focus();
       return false ;
    }else if(Utel == '') {
       alert('联系方式不能为空！');
       jQuery("#messMobile").focus();
       return false ;
    }else if(!Utils.isMobile(Utel)){
       alert('请输入正确的联系方式！');
       jQuery("#messMobile").focus();
       return false ;
    }
    var timestamp = Math.random(); 
	jQuery.ajax({
		cache:false,
		type:'get',
		url:'http://protectedapi.jmw.com.cn/person/AttentionAPI.php',
		data:'projectId='+Usid+'&timestamp='+timestamp+'&niming=niming'+
		'&user_realname='+encodeURIComponent(Uname)+
		'&content='+encodeURIComponent(Utext)+
		'&gender='+sex+
		'&telphone='+Utel,
		dataType:'jsonp',
		jsonp:"jsonpcallback",
		success:function(data){
			//添加留言
		    jQuery.ajax({
				cache:false,
				type:'get',
				url:'http://liuyan.jmw.com.cn/message/searchLeaveMessageAjax.php',
				data:'sid='+Usid+
				'&content='+encodeURIComponent(Utext)+
				'&sname='+encodeURIComponent(Uname)+
				'&mobile='+Utel+
				'&sex='+sex+
				'&origin='+att_seat,
				dataType:'jsonp',
				jsonp:"callBack",
				success:function(html){ 
					closeBg();
					hidDiv();
					if(html == 1 ) //(&& ispay == 0 || ispay==2 || ispay == 5 || ispay == 6)
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
						height = showCommonDiv(0,data);
						//showPop("#itemAtt",height);
						jQuery("#hidLoginDiv").hide();
						jQuery("#hidAttentionDiv").show();
						jQuery("#c_infoBox1").hide();
						jQuery("#c_infoBox2").hide();
					}
				}
			});
		}
	});
}

function check_is_login1(pid){
	var timestamp =Date.parse(new Date());
	jQuery.ajax({
		type:'get',
		cache:false,
		url:'http://protectedapi.jmw.com.cn/person/CheckLogin.php?timestamp='+timestamp,
		dataType:'jsonp',
		jsonp:'checklogin',
		success:function(html)
		{
			if(html == 'islogin')
			{
				document.getElementById("zongbudianhua").style.display="block";
				document.getElementById("shoowtel").style.display="none";
				pid = parseInt(pid);
				teldynamic(pid);
			}else if(html == 'unlogin'){
			  	jQuery("#itemAtt").attr('class','popWrap loginWin');
				showPop("#itemAtt",405);
				jQuery("#hidLoginDiv").show();
				jQuery("#hidAttentionDiv").hide();
			  }
		  }
	});
}
function check_is_login2(pid,ispay,paystate,origin,brand_name){
    if(ispay==1 && paystate==2){
        //document.getElementById("zongbudianhua").style.display="block";
				document.getElementById("shoowtel").style.display="none";
				document.getElementById("chakan").style.display="none";
                document.getElementById("my_telephone").style.display="block";
                
				pid = parseInt(pid);
				teldynamic(pid);
    }else{
		var timestamp =Date.parse(new Date());
    	jQuery.ajax({
    		type:'get',
    		cache:false,
    		url:'http://protectedapi.jmw.com.cn/person/CheckLogin.php?timestamp='+timestamp,
    		dataType:'jsonp',
    		jsonp:'checklogin',
    		success:function(html)
    		{
    			if(html == 'islogin')
    			{
    				//document.getElementById("zongbudianhua").style.display="block";
    				document.getElementById("shoowtel").style.display="none";
    				document.getElementById("chakan").style.display="none";
                    document.getElementById("my_telephone").style.display="block";
                    
    				pid = parseInt(pid);
    				teldynamic(pid);
    			}else if(html == 'unlogin'){
					$('#click_Pfind1').show();
					$('.gray_mask').show();
					if(origin == 33){
						$('#utitle').html('询加盟热线');
						//$('#description').html('该项目最新加盟底价第一时间通知您！');
						$('#Prompt').html('请您输入手机号码,查看企业加盟热线');
						$('#ucontent').val('我想查看'+brand_name+'项目的加盟电话，了解项目情况，请尽快联系我！');
						$('#uorigin').val(origin);
					}
					$('#button_click').attr("onclick","return checkForm($(this),'tel')");
					$('#utarget_id').val(pid);
    			}
    		}
    	}); 
    }
    
    
    	
}
function teldynamic(pid)
{
	var timestamp =Date.parse(new Date());
	jQuery.ajax({
		cache:false,
		url:'http://search.jmw.com.cn/ajax.php',
		dataType:'jsonp',
	    jsonp:"jsonpcallback",
		type:'get',
		data:'type=phone&projectId='+pid+'&timestamp='+timestamp,
		success:function(html)
		{}
	});
	jQuery.ajax({
		  cache:false,
		  type:'get',
 		  dataType:'jsonp',
 		  jsonp:'tel_dy',
		  url:'http://protectedapi.jmw.com.cn/person/teldy.php?type=teldynamic&projectId='+pid+'&timestamp='+timestamp,
		  success:function(html)
		  {}
	});
}
function qqdynamic(pid,url)
{ 
   var timestamp =Date.parse(new Date());
	jQuery.ajax({
		cache:false,
		url:'http://search.jmw.com.cn/ajax.php',
		dataType:'jsonp',
	    jsonp:"jsonpcallback",
		type:'get',
		data:'type=qq&projectId='+pid+'&timestamp='+timestamp,
		success:function(html)
		{
		  
		}
	});
   	jQuery.ajax({
   		cache:false,
   		type:'get',
   		dataType:'jsonp',
   		jsonp:'qq_dy',
   		url:'http://protectedapi.jmw.com.cn/person/qqdy.php?type=qqdynamic&projectId='+pid+'&timestamp='+timestamp,
		success:function(html)
		{
		
		}
	});
	if(url == '4000500555'){
		      window.open('http://crm2.qq.com/page/portalpage/wpa.php?uin=4000500555&aty=0&a=0&curl=&ty=1&aty=1&a=0&curl=&ty=1');
		  }else{
		      window.open('tencent://message/?uin='+url+'&Menu=yes');
	}
}
function check_qq_show1(qq,pid){
	var timestamp =Date.parse(new Date());
	jQuery.ajax({
		  type:'get',
		  cache:false,
		  url:'http://protectedapi.jmw.com.cn/person/CheckLogin.php?timestamp='+timestamp,
		  dataType:'jsonp',
		  jsonp:'checklogin',
		  success:function(html)
		  {
			  if(html == 'islogin')
			  {
				  document.getElementById("qqshow").style.display = 'none';
				  document.getElementById("qqhidden").style.display = 'block';
				  pid = parseInt(pid);
				  window.location.href = "tencent://message/?uin="+qq+"&amp;Menu=yes";
				  qqdynamic(pid);
			  }
			  else if(html == 'unlogin')
			  {
				jQuery("#itemAtt").attr('class','popWrap loginWin');
				showPop("#itemAtt",405);
				jQuery("#hidLoginDiv").show(); 
				jQuery("#hidAttentionDiv").hide();
			  }
		  }
	});
}

function sendPhone(pid){
	var timestamp = Date.parse(new Date());
	jQuery.ajax({
		type:'get',
		cache:false,
		url:'http://protectedapi.jmw.com.cn/search/getProjectInfo.php?pid='+pid+'&timestamp='+timestamp,
		dataType:'jsonp',
		jsonp:'projectInfo',
		success:function(html)
		{
		  	if(html == 'unlogin')
			{
				jQuery("#itemAtt").attr('class','popWrap loginWin');
				showPop("#itemAtt",405);
				var src = jQuery("#hidLoginDiv").attr('src'); 
				jQuery("#hidLoginDiv").attr('src',src+'&success_key=sendMessage&pid='+pid); 
				jQuery("#hidLoginDiv").show(); 
				jQuery("#hidAttentionDiv").hide();
			}
			else
		  	{
		  		var strs= new Array(); 
				strs=html.split(",");  
				jQuery("#infos").html(strs[0]);
				str = strs[0].replace(/<[^>].*?>/g,""); 
				jQuery("#contents").val(str);
				jQuery("#tel").val(strs[1]);
				showPop("#onlineMsg2",405);
		  	} 
		}
	})
}

function sendform()
{
	var timestamp = Date.parse(new Date());
	var checkcode = jQuery("#checkcode").val();
	var content = jQuery("#contents").val();
	var pid = jQuery("#projectId").val();
	var brand_name = jQuery("#brand_name").val();
	content = encodeURIComponent(content);
	jQuery.ajax({
		cache: false,
		type:'get',
		data:'checkcode='+checkcode,
		url:'http://person.jmw.com.cn/searchCheckCode.php?timestamp='+timestamp,
		dataType:'jsonp',
		jsonp:'check',
		success:function(html)
		{
			if (html == 0) { 
				jQuery("#checkcode").attr('style','border:2px solid #FF9A9A');return false;
			}
			else
			{
				//window.location.href="http://person.jmw.com.cn/sendMessage.php?content="+content+"&telcode="+checkcode;
				jQuery.ajax({
					cache: false,
					type:'get',
					data:'content='+content+'&telcode='+checkcode+'&pid='+pid,
					url:'http://person.jmw.com.cn/sendMessage.php?timestamp='+timestamp,
					dataType:'jsonp',
					jsonp:'sendInfo',
					success:function(html)
					{
						if(html == 1){
							jQuery("#itemAtt").attr('class','popWrap send_success');
							jQuery("#onlineMsg2").hide();
							jQuery("#send_success").show();
						}else if(html == 2){
							alert('验证码输入有误！');
						}else if(html == 3){
					  		jQuery("#itemAtt").attr('class','popWrap send_success');
							var brand_name = jQuery("#brand_name").val();
							jQuery("#onlineMsg2").hide();
							jQuery("#send_failed").show();
						}
					}
				});
			}
		}
	});
	return false;
}

function changeStyle(){
	jQuery("#checkcode").attr('style','');
}
function sendSuccess(){
	jQuery('#send_success,#send_failed,#bgIframe,#bgDiv').hide();
	window.location.reload();
}
function showMoreImg()
{
	var timestamp = Date.parse(new Date());
	var pid = jQuery('#imgProjectId').val();
	var page = jQuery('#imgPage').val();
	jQuery.ajax({
			type:'get',
			data:'pid='+pid+'&page='+page,
			url:'http://protectedapi.jmw.com.cn/project/getMoreImgByPid.php?timestamp='+timestamp,
			dataType:'jsonp',
	        cache:false,
	        jsonp:"jsonpcallback",
			success:function(html)
			{
				if(html=='')
				{
					jQuery("#showMoreImgBtn").hide();
				}
				else
				{
					jQuery('#appendUl li:last').after(html);
					if(jQuery('#appendUl li').length==jQuery('#imgCount').val())
					{
						jQuery("#showMoreImgBtn").hide();
					}
					jQuery('#imgPage').val(parseInt(jQuery('#imgPage').val())+parseInt(1));
				}
			}
	});
}
// function checkcodes(){
// 	var timestamp = Date.parse(new Date());
// 	var checkcode = jQuery("#checkcode").val();
// 	jQuery.ajax({
// 		async: false,
// 		type:'get',
// 		data:'checkcode='+checkcode,
// 		url:'http://person.jmw.com.cn/searchCheckCode.php?timestamp='+timestamp,
// 		dataType:'jsonp',
// 		jsonp:'check',
// 		success:function(html)
// 		{
// 			if (html == 0) {
// 				alert("验证码输入有误！");return false;
// 			}
// 		}
// 	});
// }
function getAttentionCountByAjax2(project_id)
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
			jQuery("#attentionCountNum"+project_id).html('('+html+')');
		}
	});
}
//添加关注
function attention2(project_id,brand_name,seat){
	var timestamp =Date.parse(new Date());
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
			seat = '';
			domain_seat = '';
		}
	}
	jQuery("#8_list_attention").val(domain_seat);
	//jQuery("#ispay").val(ispay);
	jQuery("#attentionbrandname").val(brand_name);
	jQuery.ajax({
		async:false,
		cache:false,
		type:'get',
		url:'http://protectedapi.jmw.com.cn/person/AttentionAPI.php',
		data:'projectId='+project_id+'&timestamp='+timestamp,
		dataType:'jsonp',
		jsonp:"jsonpcallback",
		success:function(html){
			if(html.rs == 1)
			{
				//调用成功层
				jQuery("#itemAtt").attr('class','popWrap');
				jQuery("#hidSidVal").val(project_id);
				jQuery("#brandNameOne").attr('href',html.projecturl);
				jQuery("#brandNameTwo").attr('href',html.projecturl);
				jQuery("#brandNameOne").html(brand_name);
				jQuery("#brandNameTwo").html(brand_name);
				jQuery("#attTips").attr('class','attTips ok');
				jQuery("#tipsOne").html('<strong>恭喜您！</strong>');
				jQuery("#tipsTwo").html('成功关注了<span>[<a name="brandName" href="'+
					html.projecturl+'" target="_blank">'+brand_name+'</a>]</span>');	
				//var height = showCommonDiv(html); //ispay,
				//showPop("#itemAtt",height);
				showPop("#itemAtt",468);
                jQuery("#quickBox").show();
				jQuery("#hidLoginDiv").hide();
				jQuery("#hidAttentionDiv").show();
				jQuery("#c_infoBox1").hide();
				jQuery("#c_infoBox2").hide();
				getAttentionCountByAjax2(project_id);
				//jQuery("#attentionCountNum"+project_id).html(jQuery("#attentionCountNum"+project_id).val()+1);
			}else if(html.rs == -10){
				//调用不能重复添加该项目及已关注该项目
				jQuery("#itemAtt").attr('class','popWrap');
				jQuery("#hidSidVal").val(project_id);
				jQuery("#brandNameOne").attr('href',html.projecturl);
				jQuery("#brandNameTwo").attr('href',html.projecturl);
				jQuery("#brandNameOne").html(brand_name);
				jQuery("#brandNameTwo").html(brand_name);
				jQuery("#attTips").attr('class','attTips error');
				jQuery("#tipsOne").html('已关注了<span>[<a name="brandName" href="'+
					html.projecturl+'" target="_blank">'+brand_name+'</a>]</span>');
				jQuery("#tipsTwo").html('<strong>无需再次关注</strong>');
				//var height = showCommonDiv(html);//ispay,
				//showPop("#itemAtt",height);
				showPop("#itemAtt",468);
                jQuery("#quickBox").show();
				jQuery("#hidLoginDiv").hide();
				jQuery("#hidAttentionDiv").show();
				jQuery("#c_infoBox1").hide();
				jQuery("#c_infoBox2").hide();
			}
			else if(html.rs == -20)
			{
				// 已超过最大关注数量
				jQuery("#itemAtt").attr('class','popWrap');
				jQuery("#hidSidVal").val(project_id);
				jQuery("#brandNameOne").attr('href',html.projecturl);
				jQuery("#brandNameTwo").attr('href',html.projecturl);
				jQuery("#brandNameOne").html(brand_name);
				jQuery("#brandNameTwo").html(brand_name);
				jQuery("#attTips").attr('class','attTips error');
				jQuery("#tipsOne").html('<strong>您的关注数量已达到上限</strong>');
				jQuery("#tipsTwo").html('建议您整理已关注过的项目,<span><a target="_blank" onclick="hidDiv();" href="http://person.jmw.com.cn/attentionlist.php">立即整理</a></span>');
				//showPop("#itemAtt",163);
				showPop("#itemAtt",468);
                jQuery("#quickBox").show();
				//showCommonDiv(2,html);
				jQuery("#hidLoginDiv").hide();
				jQuery("#hidAttentionDiv").show();
				jQuery("#c_infoBox1").hide();
				jQuery("#c_infoBox2").hide();
			}
			else
			{
				//调用未登录
				var src = jQuery("#hidLoginDiv").attr('src');
				// alert(src);
				var url = window.location.href;
				jQuery("#hidLoginDiv").attr('src',src+'&success_url='+encodeURIComponent(url)+'&success_key=attentionProject&project_id='+project_id+'&brand_name='+encodeURIComponent(brand_name)+'&origin='+seat);//
				jQuery("#itemAtt").attr('class','popWrap loginWin');
				jQuery("#hidSidVal").val(project_id);
				jQuery("#brandNameOne").attr('href','');
				jQuery("#brandNameOne").html('');
				jQuery("#brandNameTwo").attr('href','');
				jQuery("#brandNameTwo").html('');
				jQuery("#tipsOne").html('');
				jQuery("#tipsTwo").html('');
				jQuery("#attTips").attr('class','attTips');
				//showPop("#itemAtt",405);
				showPop("#itemAtt",405);
                jQuery("#quickBox").show();
				//showCommonDiv(html);
				jQuery("#hidLoginDiv").show();
				jQuery("#hidAttentionDiv").hide();
				jQuery("#c_infoBox1").hide();
				jQuery("#c_infoBox2").hide();
			}
			getUserInfos();
		}
	});
	getAttentionCountByAjax2(project_id);
}



//推广页添加关注
function attention3(project_id,brand_name,seat){
	var timestamp =Date.parse(new Date());
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
			seat = '';
			domain_seat = '';
		}
	}
	jQuery("#8_list_attention").val(domain_seat);
	//jQuery("#ispay").val(ispay);
	jQuery("#attentionbrandname").val(brand_name);
	jQuery.ajax({
		async:false,
		cache:false,
		type:'get',
		url:'http://protectedapi.jmw.com.cn/person/AttentionAPI.php',
		data:'projectId='+project_id+'&timestamp='+timestamp,
		dataType:'jsonp',
		jsonp:"jsonpcallback",
		success:function(html){
			if(html.rs == 1)
			{
				//调用成功层
				jQuery("#itemAtt").attr('class','popWrap');
				jQuery("#hidSidVal").val(project_id);
				jQuery("#brandNameOne").attr('href',html.projecturl);
				jQuery("#brandNameTwo").attr('href',html.projecturl);
				jQuery("#brandNameOne").html(brand_name);
				jQuery("#brandNameTwo").html(brand_name);
				jQuery("#attTips").attr('class','attTips ok');
				jQuery("#tipsOne").html('<strong>恭喜您！</strong>');
				jQuery("#tipsTwo").html('成功关注了<span>[<a name="brandName" href="'+
					html.projecturl+'" target="_blank">'+brand_name+'</a>]</span>');	
				//var height = showCommonDiv(html); //ispay,
				//showPop("#itemAtt",height);
				showPop("#itemAtt",468);
                jQuery("#quickBox").show();
				jQuery("#hidLoginDiv").hide();
				jQuery("#hidAttentionDiv").show();
				jQuery("#c_infoBox1").hide();
				jQuery("#c_infoBox2").hide();
				getAttentionCountByAjax3(project_id);
				//jQuery("#attentionCountNum"+project_id).html(jQuery("#attentionCountNum"+project_id).val()+1);
			}else if(html.rs == -10){
				//调用不能重复添加该项目及已关注该项目
				jQuery("#itemAtt").attr('class','popWrap');
				jQuery("#hidSidVal").val(project_id);
				jQuery("#brandNameOne").attr('href',html.projecturl);
				jQuery("#brandNameTwo").attr('href',html.projecturl);
				jQuery("#brandNameOne").html(brand_name);
				jQuery("#brandNameTwo").html(brand_name);
				jQuery("#attTips").attr('class','attTips error');
				jQuery("#tipsOne").html('已关注了<span>[<a name="brandName" href="'+
					html.projecturl+'" target="_blank">'+brand_name+'</a>]</span>');
				jQuery("#tipsTwo").html('<strong>无需再次关注</strong>');
				//var height = showCommonDiv(html);//ispay,
				//showPop("#itemAtt",height);
				showPop("#itemAtt",468);
                jQuery("#quickBox").show();
				jQuery("#hidLoginDiv").hide();
				jQuery("#hidAttentionDiv").show();
				jQuery("#c_infoBox1").hide();
				jQuery("#c_infoBox2").hide();
			}
			else if(html.rs == -20)
			{
				// 已超过最大关注数量
				jQuery("#itemAtt").attr('class','popWrap');
				jQuery("#hidSidVal").val(project_id);
				jQuery("#brandNameOne").attr('href',html.projecturl);
				jQuery("#brandNameTwo").attr('href',html.projecturl);
				jQuery("#brandNameOne").html(brand_name);
				jQuery("#brandNameTwo").html(brand_name);
				jQuery("#attTips").attr('class','attTips error');
				jQuery("#tipsOne").html('<strong>您的关注数量已达到上限</strong>');
				jQuery("#tipsTwo").html('建议您整理已关注过的项目,<span><a target="_blank" onclick="hidDiv();" href="http://person.jmw.com.cn/attentionlist.php">立即整理</a></span>');
				//showPop("#itemAtt",163);
				showPop("#itemAtt",468);
                jQuery("#quickBox").show();
				//showCommonDiv(2,html);
				jQuery("#hidLoginDiv").hide();
				jQuery("#hidAttentionDiv").show();
				jQuery("#c_infoBox1").hide();
				jQuery("#c_infoBox2").hide();
			}
			else
			{
				//调用未登录
				var src = jQuery("#hidLoginDiv").attr('src');
				// alert(src);
				var url = window.location.href;
				jQuery("#hidLoginDiv").attr('src',src+'&success_url='+encodeURIComponent(url)+'&success_key=attentionProject&project_id='+project_id+'&brand_name='+encodeURIComponent(brand_name)+'&origin='+seat);//
				jQuery("#itemAtt").attr('class','popWrap loginWin');
				jQuery("#hidSidVal").val(project_id);
				jQuery("#brandNameOne").attr('href','');
				jQuery("#brandNameOne").html('');
				jQuery("#brandNameTwo").attr('href','');
				jQuery("#brandNameTwo").html('');
				jQuery("#tipsOne").html('');
				jQuery("#tipsTwo").html('');
				jQuery("#attTips").attr('class','attTips');
				//showPop("#itemAtt",405);
				showPop("#itemAtt",405);
                jQuery("#quickBox").show();
				//showCommonDiv(html);
				jQuery("#hidLoginDiv").show();
				jQuery("#bgDiv").show();
				jQuery("#hidAttentionDiv").hide();
				jQuery("#c_infoBox1").hide();
				jQuery("#c_infoBox2").hide();
			}
			getUserInfos();
		}
	});
	getAttentionCountByAjax3(project_id);
}

function getAttentionCountByAjax3(project_id)
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
			jQuery("#attentionCountNum"+project_id).html(html);
		}
	});
}