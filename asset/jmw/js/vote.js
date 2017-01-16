function showEvote(project_id,prefix)
{
	$.ajax({
		type:'get',
		url:'http://protectedapi.jmw.com.cn/evote/showEvote.php',
		data:'project_id='+project_id+'&prefix='+prefix,
		dataType:'jsonp',
		jsonp:'showVote',
		success:function(html){
			if(html != ''){
				$("#voteBox").html(html);
				$("#voteBox").show();
			}
		}
	});
}

function showEvoteNew(project_id,prefix)
{
	$.ajax({
		type:'get',
		url:'http://protectedapi.jmw.com.cn/evote/showEvoteNew.php',
		data:'project_id='+project_id+'&prefix='+prefix,
		dataType:'jsonp',
		jsonp:'showVote',
		success:function(html){
			if(html != ''){
				$("#voteBox").html(html);
				$("#voteBox").show();
			}
		}
	});
}

function addVoteToProject(id,project_id,evote_id,prefix){
	var timestamp =Date.parse(new Date());
	var brand_name = $("#brand_name").val();
	$.ajax({
		type:'get',
		url:'http://protectedapi.jmw.com.cn/evote/evoteHits.php',
		data:'target_id='+id+'&evote_id='+evote_id,
		dataType:'jsonp',
		jsonp:'addVote',
		success:function(html){
			html = parseInt(html);
			$.ajax({
				  type:'get',
				  cache:false,
				  async:false,
				  url:'http://protectedapi.jmw.com.cn/person/CheckLogin.php?timestamp='+timestamp,
				  dataType:'jsonp',
				  jsonp:'checklogin',
				  success:function(login)
				  {
					  	if (html == 2 && login == 'islogin') {
						  	//登录尚未开始
							$("#itemAtt").attr('class','popWrap');
							$("#attTips").attr('class','attTips error');
							$("#tipsOne").html('<strong>投票尚未开始！</strong>');
							$("#tipsTwo").html('感谢您的参与，敬请关注评选的后续活动！');	
							messageInfor(brand_name,prefix);
							showPop("#itemAtt",446);
							$(".attTips").show();		
							$("#voto_grayBox").show();
					  	}else if(html == 2 && login == 'unlogin'){
					  		$("#itemAtt").attr('class','popWrap');
							$("#attTips").attr('class','attTips error');
							$("#tipsOne").html('<strong>投票尚未开始！</strong>');
							$("#tipsTwo").html('感谢您的参与，敬请关注评选的后续活动！');	
					  		showPop("#itemAtt",421);
							$(".attTips").show();		
							$("#nologin_voto").show();
					  	}else if(html == 3){
							alert("投票已结束！");
						}else if(html == 1 && login == 'islogin'){
							//登录投票成功
							$("#itemAtt").attr('class','popWrap');
							$("#attTips").attr('class','attTips ok');
							$("#tipsOne").html('<strong>投票成功！</strong>');
							$("#tipsTwo").html('感谢您的支持，您已成功给<span>[<a href="http://'+prefix+'.jmw.com.cn" target="_blank">'+brand_name+'</a>]</span>投票');	
							messageInfor(brand_name,prefix);
							showPop("#itemAtt",446);
							$(".attTips").show();		
							$("#voto_grayBox").show();
						}else if(html == 1 && login == 'unlogin'){
							//未登录投票成功
							$("#itemAtt").attr('class','popWrap');
							$("#attTips").attr('class','attTips ok');
							$("#tipsOne").html('<strong>投票成功！</strong>');
							$("#tipsTwo").html('感谢您的支持，您已成功给<span>[<a href="http://'+prefix+'.jmw.com.cn" target="_blank">'+brand_name+'</a>]</span>投票');	
							showPop("#itemAtt",446);
							$(".attTips").show();		
							$("#nologin_voto").show();
						}else if(html == 0 && login == 'islogin'){
							//登录投票失败
							$("#itemAtt").attr('class','popWrap');
							$("#attTips").attr('class','attTips error');
							$("#tipsOne").html('<strong>投票失败！</strong>');
							$("#tipsTwo").html('您已经给<span>[<a href="http://'+prefix+'.jmw.com.cn" target="_blank">'+brand_name+'</a>]</span>投过票了！');	
							messageInfor(brand_name,prefix);
							showPop("#itemAtt",446);
							$(".attTips").show();		
							$("#voto_grayBox").show();
						}else if(html == 0 && login == 'unlogin'){
							//未登录投票失败
							$("#itemAtt").attr('class','popWrap');
							$("#attTips").attr('class','attTips error');
							$("#tipsOne").html('<strong>投票失败！</strong>');
							$("#tipsTwo").html('您已经给<span>[<a href="http://'+prefix+'.jmw.com.cn" target="_blank">'+brand_name+'</a>]</span>投过票了！');	
							showPop("#itemAtt",421);
							$(".attTips").show();		
							$("#nologin_voto").show();
						}
					}
			});
		}
	});
}

function showNoStart(project_id,prefix){
	var timestamp =Date.parse(new Date());
	var brand_name = $("#brand_name").val();	
	$.ajax({
	  type:'get',
	  cache:false,
	  async:false,
	  url:'http://protectedapi.jmw.com.cn/person/CheckLogin.php?timestamp='+timestamp,
	  dataType:'jsonp',
	  jsonp:'checklogin',
	  success:function(login)
	  {
		  	if (login == 'islogin') {
			  	//登录尚未开始
				$("#itemAtt").attr('class','popWrap');
				$("#attTips").attr('class','attTips error');
				$("#tipsOne").html('<strong>投票尚未开始！</strong>');
				$("#tipsTwo").html('感谢您的参与，敬请关注评选的后续活动！');	
				messageInfor(brand_name,prefix);			
				showPop("#itemAtt",446);
				$(".attTips").show();		
				$("#voto_grayBox").show();
		  	}else if(login == 'unlogin'){
		  		$("#itemAtt").attr('class','popWrap');
				$("#attTips").attr('class','attTips error');
				$("#tipsOne").html('<strong>投票尚未开始！</strong>');
				$("#tipsTwo").html('感谢您的参与，敬请关注评选的后续活动！');	
		  		showPop("#itemAtt",421);
				$(".attTips").show();		
				$("#nologin_voto").show();
		  	}
		}
	});
}


function addVoteMessage(project_id){
	pid = parseInt(project_id);
	type = $("input[name='msg_type']:checked").val();
	$.ajax({
		type:'get',
		url:'http://liuyan.jmw.com.cn/message/voteAddMessageToProject.php',
		data:'basicid='+pid+'&type='+type,
		dataType:'jsonp',
		jsonp:'vote_message',
		success:function(html){
			html = parseInt(html);
			if(html == 1){
				//留言成功
				hidDiv();
			}else if(html == -1){
				//留言失败
				hidDiv();
			}else if(html == -2){
				//缺少留言参数
				hidDiv();
			}
		}
	});
	
}

function messageInfor(brand_name,prefix)
{
	$("#send").html('您还可以立即给<span>[<a href="http://'+prefix+'.jmw.com.cn" target="_blank">'+brand_name+'</a>]</span>发送相关意向：');
	$("#first").html('<label for="m1"><input type="radio" name="msg_type" id="m1" value="1" checked="checked"/>做为'+brand_name+'的代理加盟商能得到哪些支持？</label>');
	$("#second").html('<label for="m2"><input type="radio" name="msg_type" id="m2" value="2" />我想详细了解'+brand_name+'的加盟流程，请与我联系！</label>');
	$("#third").html('<label for="m3"><input type="radio" name="msg_type" id="m3" value="3" />请问我所在的地区有'+brand_name+'加盟商了吗？</label>');
	$("#four").html('<label for="m4"><input type="radio" name="msg_type" id="m4" value="4" />请问投资'+brand_name+'所需要的费用有哪些？</label>');
}
