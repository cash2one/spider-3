/**
* checkBox按钮组对象
*/
function CheckBox(divHeight){
	this.divHeight = divHeight;
	this.clickCount = 0;
	this.checkCount = 0;//当前选中的CHECK
	this.checkBoxChilds = new Array();
}
CheckBox.prototype = {
	init:function(checkEl){
		for(var i=0;i<this.checkBoxChilds.length;i++){
			if(this.checkBoxChilds[i].checked==true){
			this.checkCount++;
			}
		}
		if(checkEl.checked==true){
			this.checkCount = this.checkCount-1;
		}
		if(checkEl.checked==false){
			this.checkCount = this.checkCount+1;
		}
	},
	/**
	* 获取当前check在checkBox中的序列
	*/
	getNum:function(checkEl){
		for(var i=0;i<this.checkBoxChilds.length;i++){
			if(this.checkBoxChilds[i].id==checkEl.id){
				return i;
			}
		}
	},
	/**
	* 根据在checkBox中的序列返回相应的check对象
	*/
	getCheck:function(num){
		return this.checkBoxChilds[num];
	},
	/**
	* 加载checkbox对象到checkbox组中
	*/
	add:function(checkEl){
		this.checkBoxChilds[this.checkBoxChilds.length] = document.getElementById(checkEl);
	},
	/**
	* 获取离当前checkbox最近的选中的checkbox的序列
	*/
	getNearCheckedNum:function(checkEl){
		var checkElNum = this.getNum(checkEl);
		var upCheckedNum = this.getUpCheckedNum(checkElNum);
		var downCheckedNum = this.getDownCheckedNum(checkElNum);
		if(upCheckedNum!=null&&downCheckedNum!=null){
			if((checkElNum-upCheckedNum)<=(downCheckedNum-checkElNum)){
			return upCheckedNum;
			}else{
			return downCheckedNum;
			}
		}else if(upCheckedNum==null&&downCheckedNum!=null){
			return downCheckedNum;
		}else if(upCheckedNum!=null&&downCheckedNum==null){
			return upCheckedNum;
		}else{
			return checkElNum;
		}
	},
	/**
	* 向上获取最近的选中的checkbox的序列
	*/
	getUpCheckedNum:function(num){
		for(var i = num-1;i>=0;i--){
			if(this.checkBoxChilds[i].checked){
				return i;
			}
		}
	return null;
	},
	/**
	* 向下获取最近的选中的checkbox的序列
	*/
	getDownCheckedNum:function(num){
		for(var i = num+1;i<this.checkBoxChilds.length;i++){
			if(this.checkBoxChilds[i].checked){
				return i;
			}
		}
		return null;
	},
	changecheckStat:function(checkEl){
		if(this.clickCount==0){
			this.init(checkEl);
		}
		this.clickCount++;
		if(checkEl.checked){
			this.checkCount++;
			if(this.checkCount>=2){
				this.showFloatDiv(checkEl);
			}else{
				this.hiddenFlaotDiv();
			}
		}else{
			this.checkCount--;
			if(this.checkCount>=2){
				this.showFloatDiv(this.getCheck(this.getNearCheckedNum(checkEl)));
			}else{
				this.hiddenFlaotDiv();
			}
		}
	},
	clearCount:function(){
		this.clickCount = 0;
		this.checkCount = 0;
		this.hiddenFlaotDiv();
	},
	/**
	* 显示并定位提示浮动层
	*/
	showFloatDiv:function(checkEl){
	//try {
		document.getElementById("tishiDiv").style.display = "block";
		//document.getElementById("tishiDiv").style.position = "absolute";
		document.getElementById("tishiDiv").style.top = getXY(checkEl)[1]-this.divHeight+"px";
		document.getElementById("tishiDiv").style.left = getXY(checkEl)[0]-10+"px";
	//}catch(e){}
	},
	/**
	* 隐藏提示浮动层
	*/
	hiddenFlaotDiv:function(){
		document.getElementById("tishiDiv").style.display = "none";
	}
};
/**
* 获取对象el的X,Y坐标
* @param {Object} el
*/
function getXY(el){
//try {
	var pos;
	if(this.getExplorerType()==1){
	var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
	var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
	pos = [el.getBoundingClientRect().left+scrollLeft, el.getBoundingClientRect().top+scrollTop];
	}else{
		pos = [el.offsetLeft, el.offsetTop];
		var parentNode = el.offsetParent;
		if (parentNode != el) {
			while (parentNode) {
				pos[0] += parentNode.offsetLeft;
				pos[1] += parentNode.offsetTop;
				parentNode = parentNode.offsetParent;
			}
		}
		if (el.parentNode) { parentNode = el.parentNode; }
		else { parentNode = null; }
		while (parentNode && parentNode.tagName.toUpperCase() != 'BODY' && parentNode.tagName.toUpperCase() != 'HTML')
		{
			if (parentNode.style.display != 'inline') {
				pos[0] -= parentNode.scrollLeft;
				pos[1] -= parentNode.scrollTop;
			}
			if (parentNode.parentNode) {
				parentNode = parentNode.parentNode;
			} else { parentNode = null; }
		}
	}
	return pos;
//}catch(e){alert(e+','+el);}
}
function getExplorerType(){
	var ua = navigator.userAgent.toLowerCase();
	if(window.ActiveXObject){
		return 1;
	}else if((ua.indexOf('firefox')>-1)){
		return 2;
	}else if((ua.indexOf('opera')>-1)){
		return 3;
	}
}