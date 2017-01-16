maxcoumt = 3;
defaultClassName = "offer";
checkedClassName = "offer_select";
function clickcompareBox(id,box){
	if(box.checked){
		var count = 0;
		var obj=document.getElementsByName('onid');
		var s='';
		 for(var i=0; i<obj.length; i++){
			if(obj[i].checked){ 
				count++;
			}
		 }
		if(count>maxcoumt){
			alert("您已经选择了"+count+"个项目，候选项目不能超过3个");
			box.checked=false;
			//return false;
		}
	}
}	
		 
function cleanCookie(){
	//if(confirm("您确认执行清空操作吗？")){
	for(var i=1;i<=maxcoumt;i++){
		var elem = $("compareBox"+i);
		if(elem != null && elem.checked){
			elem.checked = false;
		}
	}
	//}
}
	
function actCheckbox(){
	var count = 0;
	var ids = "";
	var obj=document.getElementsByName('onid');  //选择所有name="aihao"的对象，返回数组 取到对象数组后，我们来循环检测它是不是被选中
	var s='';
	 for(var i=0; i<obj.length; i++){
		if(obj[i].checked){ 
			s+=obj[i].value+',';  //如果选中，将value添加到变量s中
			count++;
		}
	 }

	if(count < 1){
		alert("请至少选择1个项目进行操作!");
		return false;
	}else if(count > maxcoumt){
		alert("您已经选择了"+count+"个项目,候选项目不能超过"+maxcoumt+"个");
		return false;
	}else{
		var s=''?'你还没有选择任何内容！':s;
		var msg = s.substring(0, s.lastIndexOf(','));
		ch=msg.split(",");
		var urls ='';
		for(var i=0; i<ch.length; i++){
			if(i==0) urls += ch[i];
            else urls += "," + ch[i];
		} 
		url = "http://searchadm.jmw.com.cn/index.php?m=content&c=compare&a=load&id="+urls;
        document.location.href = url;
	}	
}

function actCheckboxsec(){
	var count = 0;
	var ids = "";
	var obj=document.getElementsByName('onid');  //选择所有name="aihao"的对象，返回数组 取到对象数组后，我们来循环检测它是不是被选中
	var s='';
	 for(var i=0; i<obj.length; i++){
		if(obj[i].checked){ 
			s+=obj[i].value+',';  //如果选中，将value添加到变量s中
			count++;
		}
	 }
	
		var u = window.location.href;
	    var arr= u.split("id=");
		var sec = arr[1].split(",");
		var us = '';
		for(var j=0; j<sec.length; j++){
			if(document.getElementById(sec[j]).style.display != "none")  us += "," + sec[j];
		}

	if(count < 1){
		alert("请选择至少1个项目进行操作！");
		return false;
		
	}else if(count > maxcoumt){
		alert("您已经选择了"+count+"个项目,候选项目不能超过"+maxcoumt+"个");
		return false;
	}else{
		
		var s=''?'你还没有选择任何内容！':s;
		var msg = s.substring(0, s.lastIndexOf(','));
		ch=msg.split(",");
		var urls ='';
		for(var i=0; i<ch.length; i++){
			if(i==0) urls += ch[i];
            else us += "," + ch[i];
		} 
		ll = (us.substr(1)).split(",");
		if(ll.length>2){
			alert("超过最大对比项目数，请移除部分项目或减少复选框勾选项目！");return false;
		}else if(ll=='' && urls!=''){
			alert("请选择至少2个项目进行对比！");return false;
		}else{
			urls +=us;
			url = "http://searchadm.jmw.com.cn/index.php?m=content&c=compare&a=load&id="+urls;
			document.location.href = url;
		}	
	}	
}