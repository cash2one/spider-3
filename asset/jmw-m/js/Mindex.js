
	  
//文字滚动

			$(document).ready(function() {
				$("#scrollDiv").textSlider({
					line: 1, //滚动几行
					speed: 700, //滚动速度
					timer: 3000 //自动滚动的时间
				});
			});

	//倒计时
//倒计时的代码块
var demo = document.getElementById("dao");
var demo = document.getElementById("newP");
var span1 = document.getElementById("span1")
var span2 = document.getElementById("span2")
var span3 = document.getElementById("span3")
var span4 = document.getElementById("span4")
// var span5 = document.getElementById("p1-span")
// var span6 = document.getElementById("p2-span")
	//截止时间
var endTime = new Date("2017/12/31 0:0:00");
//定时器
setInterval(timer, 1000);
/*var date=new Date;
var month=date.getMonth()+1
var date1=date.getDate()
 month< 10 ? month = "0" + month : month;
 date1< 10 ? date1 = "0" + date1 : date1;
 span5.innerHTML=month+'.'
 span6.innerHTML=date1
console.log(month)
console.log(date1)*/

function timer() {
	var nowTime = new Date();
	var endTimeS = endTime.getTime();
	var nowTimeS = nowTime.getTime();
	var leftSec = parseInt((endTimeS - nowTimeS) / 1000);

//	var d = parseInt(leftSec / 3600 / 24);
	//        console.log(d);
	var h = parseInt(leftSec/3600%24);
	//        console.log(h);
	var m = parseInt(leftSec / 60 % 60);
	//        console.log(m);
	var s = leftSec % 60;
	//        console.log(s);
//	d < 10 ? d = "0" + d : d;
	h < 10 ? h = "0" + h : h;
	m < 10 ? m = "0" + m : m;
	s < 10 ? s = "0" + s : s;
//	span1.innerHTML = d;
	span2.innerHTML = h;
	span3.innerHTML = m;
	span4.innerHTML = s;
	
	
	
	
}






