<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<style>

/*焦点图*/
/*.mod18{width:400px;height:374px;margin:8px auto;position:relative;z-index:9999; }*/
body{background:url("http://image1.jmw.com.cn/newSearchPage/images/major_bj.png") no-repeat; width:417px; height:388px;margin:0;}
.mod18{width:400px;height:374px;position:relative; z-index:9999; margin:8px auto;}
.mod18 .btn{position:absolute;width:15px;height:70px;top:304px;cursor:pointer;z-index:99;font-size:50px;font-weight:bold;}
.mod18 .prev{left:0;background:url(http://image1.jmw.com.cn/newSearchPage/images/prevBtn.png) no-repeat;}
.mod18 #prevTop,.mod18 #nextTop{top:120px;width:46px;height:48px;}
.mod18 #prevTop{background:url(http://image1.jmw.com.cn/newSearchPage/images/prevBtnTop.png) 0 0 no-repeat;}
.mod18 #nextTop{background:url(http://image1.jmw.com.cn/newSearchPage/images/nextBtnTop.png) 0 0 no-repeat;}
.mod18 .next{right:0;background:url(http://image1.jmw.com.cn/newSearchPage/images/nextBtn.png) no-repeat;}
.mod18 .close-hb{ background:url(http://image1.jmw.com.cn/newSearchPage/images/guanbiceng.png) no-repeat; width:20px; height:20px; position:absolute; top:-7px; right:-7px; z-index:99; cursor:pointer;}
.mod18 li{float:left;}
.mod18 .cf li{position:relative;color:#fff;}
.mod18 .cf a{display:block;width:400px;height:300px;position:absolute;color:#fff;}
.mod18 .cf li span{display:block;width:640px;position:absolute;left:0;bottom:0;padding:10px 20px;line-height:22px;text-align:left;background:rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient( GradientType = 0,startColorstr = "#60000000",endColorstr = "#60000000");}
.mod18 .picBox{height:300px;position:relative;overflow:hidden;}
.mod18 .picBox ul{height:300px;position:absolute;margin:0;padding:0;}
.mod18 .picBox li{width:400px;height:300px;list-style:none;}
.mod18 .listBox{width:400px;height:70px;margin:0 auto;position:relative;padding:4px 0 6px;overflow:hidden;}
.mod18 .listBox ul{height:70px;position:absolute;}
.mod18 .listBox li{width:91px;height:70px;cursor:pointer;position:relative;list-style:none;}
.mod18 .listBox li i{display:none;}
.mod18 .listBox li a{display:block;width:124px;height:70px;}
.mod18 .listBox li img{width:84px;height:70px;}
.mod18 .listBox .on img{width:78px;height:64px;border:3px solid #ff6600;}
.mod18 .listBox .on i{display:block;}
#listBox ul.cf{margin:0;padding:0}
#box{ position:fixed; z-index:7000; top:0px; left:0px; background:#000; filter:alpha(opacity=67); opacity:0.67;}
</style>
<script src="http://image1.jmw.com.cn/public/js/jquery-1.8.2.min.js" type="text/javascript"></script>
<body>
	<div class="mod18">
	<span id="prev" class="btn prev"></span>
	<span id="next" class="btn next"></span>
	<span id="prevTop" class="btn prev"></span>
	<span id="nextTop" class="btn next"></span>
    <span class="close-hb" onclick="close_ceng()"></span>
        <div id="picBox" class="picBox">
		<ul class="cf">
            			<li>
				<a ><img width="400" height="300" src="http://photo.jmw.com.cn/pic/2010/5/29/95032321409tCgxTezjU.jpg" alt="" /></a>
				<span> </span>
			</li>
						<li>
				<a ><img width="400" height="300" src="http://photo.jmw.com.cn/pic/2010/5/29/9502424875hwkCmPXbys.jpg" alt="" /></a>
				<span> </span>
			</li>
						<li>
				<a ><img width="400" height="300" src="http://photo.jmw.com.cn/pic/2010/5/29/9501717890jQay6u9s6g.jpg" alt="" /></a>
				<span> </span>
			</li>
						<li>
				<a ><img width="400" height="300" src="http://photo.jmw.com.cn/pic/2010/5/29/950099765f5hBsSEcWx.jpg" alt="" /></a>
				<span> </span>
			</li>
						<li>
				<a ><img width="400" height="300" src="http://photo.jmw.com.cn/pic/2010/5/29/9500222657yahUqQCy1.jpg" alt="" /></a>
				<span> </span>
			</li>
						<li>
				<a ><img width="400" height="300" src="http://photo.jmw.com.cn/pic/2010/5/29/9495151906WBPdjcy8ud.jpg" alt="" /></a>
				<span> </span>
			</li>
						<li>
				<a ><img width="400" height="300" src="http://photo.jmw.com.cn/pic/2010/5/29/9494444406vEKVgcWY6f.jpg" alt="" /></a>
				<span> </span>
			</li>
						<li>
				<a ><img width="400" height="300" src="http://photo.jmw.com.cn/pic/2010/5/29/9493535437pRiHCZFCZu.jpg" alt="" /></a>
				<span> </span>
			</li>
					</ul>
	</div>
	
	<div id="listBox" class="listBox">
    
		<ul class="cf">
            			<li class=""><i class="arr2"></i><img width="118" height="64" src="http://photo.jmw.com.cn/slt/2010/5/29/s1_95032321409tCgxTezjU.jpg" alt=" " /></li>
						<li class=""><i class="arr2"></i><img width="118" height="64" src="http://photo.jmw.com.cn/slt/2010/5/29/s1_9502424875hwkCmPXbys.jpg" alt=" " /></li>
						<li class=""><i class="arr2"></i><img width="118" height="64" src="http://photo.jmw.com.cn/slt/2010/5/29/s1_9501717890jQay6u9s6g.jpg" alt=" " /></li>
						<li class=""><i class="arr2"></i><img width="118" height="64" src="http://photo.jmw.com.cn/slt/2010/5/29/s1_950099765f5hBsSEcWx.jpg" alt=" " /></li>
						<li class=""><i class="arr2"></i><img width="118" height="64" src="http://photo.jmw.com.cn/slt/2010/5/29/s1_9500222657yahUqQCy1.jpg" alt=" " /></li>
						<li class=""><i class="arr2"></i><img width="118" height="64" src="http://photo.jmw.com.cn/slt/2010/5/29/s1_9495151906WBPdjcy8ud.jpg" alt=" " /></li>
						<li class=""><i class="arr2"></i><img width="118" height="64" src="http://photo.jmw.com.cn/slt/2010/5/29/s1_9494444406vEKVgcWY6f.jpg" alt=" " /></li>
						<li class=""><i class="arr2"></i><img width="118" height="64" src="http://photo.jmw.com.cn/slt/2010/5/29/s1_9493535437pRiHCZFCZu.jpg" alt=" " /></li>
					</ul>
	</div>
    	
	
</div>
	<script type="text/javascript">
    function close_ceng(){
        $("#box",parent.document).hide();
        $(".mod18").hide();
        $(".iframShow",parent.document).hide();
        
    }
    
(function(){
	
	function G(s){
		return document.getElementById(s);
	}
	
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
	}
	
	function Animate(obj, json){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function(){
			for(var attr in json){
				var iCur = parseInt(getStyle(obj, attr));
				iCur = iCur ? iCur : 0;
				var iSpeed = (json[attr] - iCur) / 5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				obj.style[attr] = iCur + iSpeed + 'px';
				if(iCur == json[attr]){
					clearInterval(obj.timer);
				}
			}
		}, 30);
	}

	var oPic = G("picBox");
	var oList = G("listBox");
	
	var oPrev = G("prev");
	var oNext = G("next");
	var oPrevTop = G("prevTop");
	var oNextTop = G("nextTop");

	var oPicLi = oPic.getElementsByTagName("li");
	var oListLi = oList.getElementsByTagName("li");
	var len1 = oPicLi.length;
	var len2 = oListLi.length;
	
	var oPicUl = oPic.getElementsByTagName("ul")[0];
	var oListUl = oList.getElementsByTagName("ul")[0];
	var w1 = oPicLi[0].offsetWidth;
	var w2 = oListLi[0].offsetWidth;

	oPicUl.style.width = w1 * len1 + "px";
	oListUl.style.width = w2 * len2 + "px";

	var index = 0;
	
	var num = 5;
	var num2 = Math.ceil(num / 2);

	function Change(){

		Animate(oPicUl, {left: - index * w1});
		
		if(index < num2){
			Animate(oListUl, {left: 0});
		}else if(index + num2 <= len2){
			Animate(oListUl, {left: - (index - num2 + 1) * w2});
		}else{
			Animate(oListUl, {left: - (len2 - num) * w2});
		}

		for (var i = 0; i < len2; i++) {
			oListLi[i].className = "";
			if(i == index){
				oListLi[i].className = "on";
			}
		}
	}
	
	oNextTop.onclick = oNext.onclick = function(){
		index ++;
		index = index == len2 ? 0 : index;
		Change();
	}

	oPrevTop.onclick = oPrev.onclick = function(){
		index --;
		index = index == -1 ? len2 -1 : index;
		Change();
	}

	for (var i = 0; i < len2; i++) {
		oListLi[i].index = i;
		oListLi[i].onclick = function(){
			index = this.index;
			Change();
		}
	}
	})()
</script>
</body>