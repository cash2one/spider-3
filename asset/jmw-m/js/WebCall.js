/*jQuery(function(){
	var ifmmessage = jQuery("#ifmmessage").attr('src');
	if(typeof(ifmmessage) != 'undefined')
	{
		jQuery('.callBtn a').click(function(){
			var cn_num  = 0;var tel_sex = 0;
			var tel_name = jQuery("#name").val();
			if(jQuery('input[name=tel_type]:checked').val() == '0') cn_num = jQuery('#mobil').val();
			else cn_num = jQuery('#qh').val()+jQuery('#phone').val();
			if(cn_num == '区号固定电话') {
				alert('请填写固定电话！');return false;
			}
			if(cn_num == '请填写手机号码！')
			{
				alert('请填写手机号码！');return false;
			}
			if(jQuery('#sex:checked').val() == '0')tel_sex = 0;
			else tel_sex = 1;
			var com_id = '';
			var url = jQuery("#ifmmessage").attr('src');
            var origin = jQuery("#origin").val();
            var cname = jQuery("#cname").val();
			if(url != '')
			{
				var strs = new Array();
				strs = url.split('-');
				if(strs.length > 0)
				{
					com_id = strs[1];
				}else{
					com_id = 0;
				}
			}else{
				com_id = 0;
			}	

			if(com_id != '' && cn_num != 0)
			{
				var timestamp =Date.parse(new Date());
				jQuery.ajax({
					type:'get',
					url:'http://protectedapi.jmw.com.cn/search/fouroorecord.php',
					dataType:'jsonp',
					jsonp:'fouroorecord',
					data:'cn_num='+cn_num+'&com_id='+com_id+'&sex='+tel_sex+'&name='+tel_name+'&timestamp='+timestamp+'&origin='+origin+'&cname='+cname,
					success:function(html){}
				});
				return false;
			}
		});
	}
});
*/
function getGender()
{
	var sex = document.getElementsByName('tel_sex');
	var tel_sex;
	for(i=0;i<sex.length;i++)
	{
	    if(sex[i].checked)
	    {
	    	if(sex[i].value == 0)
	    		tel_sex = 0;
	    	else
	    		tel_sex = 1;
	    }
	}
	return tel_sex;
}
function WebCall400(com_id)
{
	this.com_id= com_id;
}
WebCall400.prototype.host = 'http://search1.jmw.com.cn/';
WebCall400.prototype.webcallurl = 'index.php/Term/Webcall';
WebCall400.prototype.webcallmessagedomid = '';
WebCall400.prototype.fourTelUserName='';
WebCall400.prototype.fourTelUserGender='';
WebCall400.prototype.webcall = function(cb_num)
{
	this.errormessage();
	var callhost = this.host+this.webcallurl;
	var com_id= this.com_id;
	var timestamp =Date.parse(new Date());
	jQuery.ajax({
		type:'get',
		dataType:'jsonp',
		jsonp:'jsonpcallback',
		data:'type=phone&projectId='+com_id+'&time='+timestamp,
	    url:'http://search.jmw.com.cn/ajax.php',
	    success:function(html)
	    {}
	});
	jQuery.ajax({
   		type:'get',
   		dataType:'jsonp',
   		jsonp:'tel_dy',
   		data:'type=fourteldynamic&projectId='+
   			this.com_id+'&fourTelUserName='+this.fourTelUserName+'&fourTelUserGender='+
   			this.fourTelUserGender+'&timestamp='+timestamp,
		url:'http://protectedapi.jmw.com.cn/person/fourteldy.php',
		success:function(html)
		{}
	});
	//var webcallmessagedomid = this.webcallmessagedomid;
	/*jQuery.ajax({
		url:callhost,
		type:'get',
		data:'com_id='+com_id+'&cb_num='+cb_num,
		cache:false,
		dataType:'jsonp',
        async:false,
		jsonp: "call_status",//服务端用于接收callback调用的function名的参数
		success:function(data,text)
		{
		  if(data.msg == '号码发送成功！系统正在拨打您的电话，请按提示音接通电话'){
		      window.document.getElementById('advice_hotline').style.display = 'none';
              window.document.getElementById('itemAtt').style.display = 'block';
              window.document.getElementById('popIframe').style.display = 'block';
              window.document.getElementById('popBox').style.display = 'block';
              window.document.getElementById('hidAttentionDiv').style.display = 'none';
		      window.document.getElementById('c_infoBox4').style.display = 'block';
              window.document.getElementById('black_ceng').style.display = 'none';
              window.document.getElementById('bgDiv').style.display = 'block';
              
              
		  }else{
		      alert(data.msg);
		  //}
			//alert(data.msg+'1111111111111');
			//jQuery('#'+webcallmessagedomid).html(json.html);
		}
	});
    */
}
WebCall400.prototype.errormessage=function()
{
	if(this.com_id == '' || typeof(this.com_id) == 'undefined')
	{
		alert('没有com_id');
	}
}