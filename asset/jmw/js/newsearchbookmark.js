function addMessages(project_id,type,seat){
	var cookies={
		read : function(n){//名字  读cookies
			var dc = "; "+document.cookie+"; ";
			var coo = dc.indexOf("; "+n+"=");
			if (coo!=-1){
				var s = dc.substring(coo+n.length+3,dc.length);
				return unescape(s.substring(0, s.indexOf("; ")));
			}else{
				return "";
			}
		},
		set : function(name,value,expires){//名字 值 过期时间  写cookies
			//var expDays = expires*24*60*60*1000;
			var expDays = expires*5*60*1000;
			var expDate = new Date();
			expDate.setTime(expDate.getTime()+expDays);
			var expString = expires ? "; expires="+expDate.toGMTString() : "";
			var pathString = ";path=/";
			document.cookie = name + "=" + escape(value) + expString + pathString;
		},
		del : function(name){//名字 删除cookies
		value=""
		expires="0"
			//var expDays = expires*24*60*60*1000;
			var expDays = expires*5*60*1000;
			var expDate = new Date();
			expDate.setTime(expDate.getTime()+expDays);
			var expString = expires ? "; expires="+expDate.toGMTString() : "";
			var pathString = ";path=/";
			document.cookie = name + "=" + escape(value) + expString + pathString;
		}
	};
	var domain_seat = '';
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
			var user_mobile = jQuery(".tst").val();
			if(html.error_code < 0){
					if(user_mobile=='输入手机号'|user_mobile==''){
						alert('请填写正确手机号码');
						return false;
					}
					var basicname   = '创业者';
					var basicmobile = '';
			}else{
					var basicname   = html.username;
					var basicmobile = html.telephone;
			}		
					
					if(user_mobile!='输入手机号')
					{	
						if(user_mobile.match(/^(13[0-9]|14[0-9]|15([0-9])|18([0-9]))[0-9]{8}$/))
						{
							basicmobile = user_mobile;
						}
						else
						{	
							alert('请填写正确手机号码');
							return false;
						}
					}
					var name = "secert-words";
					if(cookies.read(name))
					{
						alert("操作过于频繁，请5分钟之后再试.");
					}
					else
					{	
						var basicemail  = '';
						var basicsex  = 0;
						var basicid   = '151082';
						var messagetype = 3;
						var seat = $("#8_5_origin").val();
						jQuery.ajax({
							type:'get',
							url:'http://liuyan.jmw.com.cn/message/newsearchLeaveMessage.php',
							data:'basicid='+basicid+'&basicname='+encodeURIComponent(basicname)+'&basicsex='+basicsex+'&basicmobile='+basicmobile+'&basicemail='+basicemail+'&messagetype='+messagetype+'&origin='+seat,
							dataType:'jsonp',
							jsonp:'send_message',
							success:function(html){
								if(html==1){
									if(messagetype == 3){
										$(".submit").show();
										$("#black_ceng").show();
										$(".tst").val("输入手机号");
									}else{
											
									}
								}
							}
						});
						cookies.set(name,"voted",1);
					}
		}
	});
}

/*	if(!user_mobile.match(/^(13[0-9]|14[0-9]|15([0-9])|18([0-9]))[0-9]{8}$/))
	{
		jQuery("#UserMobile").focus();
		return false;
	}
	*/
function addMessagesNew(project_id,type,seat){
	var cookies={
		read : function(n){//名字  读cookies
			var dc = "; "+document.cookie+"; ";
			var coo = dc.indexOf("; "+n+"=");
			if (coo!=-1){
				var s = dc.substring(coo+n.length+3,dc.length);
				return unescape(s.substring(0, s.indexOf("; ")));
			}else{
				return "";
			}
		},
		set : function(name,value,expires){//名字 值 过期时间  写cookies
			//var expDays = expires*24*60*60*1000;
			var expDays = expires*5*60*1000;
			var expDate = new Date();
			expDate.setTime(expDate.getTime()+expDays);
			var expString = expires ? "; expires="+expDate.toGMTString() : "";
			var pathString = ";path=/";
			document.cookie = name + "=" + escape(value) + expString + pathString;
		},
		del : function(name){//名字 删除cookies
		value=""
		expires="0"
			//var expDays = expires*24*60*60*1000;
			var expDays = expires*5*60*1000;
			var expDate = new Date();
			expDate.setTime(expDate.getTime()+expDays);
			var expString = expires ? "; expires="+expDate.toGMTString() : "";
			var pathString = ";path=/";
			document.cookie = name + "=" + escape(value) + expString + pathString;
		}
	};
	var domain_seat = '';
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
			var user_mobile = jQuery(".tst").val();
			if(html.error_code < 0){
					if(user_mobile=='输入手机号'|user_mobile==''){
						alert('请填写正确手机号码');
						return false;
					}
					var basicname   = '创业者';
					var basicmobile = '';
			}else{
					var basicname   = html.username;
					var basicmobile = html.telephone;
			}		
					
					if(user_mobile!='输入手机号')
					{	
						if(user_mobile.match(/^(13[0-9]|14[0-9]|15([0-9])|18([0-9]))[0-9]{8}$/))
						{
							basicmobile = user_mobile;
						}
						else
						{	
							alert('请填写正确手机号码');
							return false;
						}
					}
					var name = "secert-words";
					if(cookies.read(name))
					{
						alert("操作过于频繁，请5分钟之后再试.");
					}
					else
					{	
						var basicemail  = '';
						var basicsex  = 0;
						var basicid   = '151082';
						var messagetype = 3;
						var seat = '16-9-2';//$("#8_5_origin").val();
                        var lasturl = window.location.href;
                        var fromurl = document.referrer;
						jQuery.ajax({
							type:'get',
							url:'http://liuyan.jmw.com.cn/message/messageSearchClerk.php',
							data:'sid='+basicid+'&sname='+encodeURIComponent(basicname)+'&sex='+basicsex+'&mobile='+basicmobile+'&origin='+seat+'&searchClerk_lasturl='+lasturl+'&searchClerk_fromurl='+fromurl,
							dataType:'jsonp',
							jsonp:'send_message',
							success:function(html){
								if(html==1){
									if(messagetype == 3){
										$(".submit").show();
										$("#black_ceng").show();
										$(".tst").val("输入手机号");
									}else{
											
									}
								}
							}
						});
						cookies.set(name,"voted",1);
					}
		}
	});
}

/*	if(!user_mobile.match(/^(13[0-9]|14[0-9]|15([0-9])|18([0-9]))[0-9]{8}$/))
	{
		jQuery("#UserMobile").focus();
		return false;
	}
	*/
