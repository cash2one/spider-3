// JScript 文件
function addCookie(objName,objValue,objHours){//添加cookie
var str = objName + "=" + escape(objValue);
if(objHours > 0){//为0时不设定过期时间，浏览器关闭时cookie自动消失
var date = new Date();
var ms = objHours*3600*1000;
date.setTime(date.getTime() + ms);
str += "; expires=" + date.toGMTString();
}
document.cookie = str;
}

function getCookie(objName){//获取指定名称的cookie的值
var str="";
var str1="";
var arrStr = document.cookie.split("; ");
    for(var i = 0;i < arrStr.length;i ++)
    {
        var temp = arrStr[i].split("=");
        if(temp[0] == objName){
            if(temp[1]=="Mes")
            {
                str=unescape(temp[2].replace("&Ip",""))
            }
        };
    }
    return str;
}

function delCookie(name){//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
var date = new Date();
date.setTime(date.getTime() - 10000);
document.cookie = name + "=a; expires=" + date.toGMTString();
}

function allCookie(){//读取所有保存的cookie字符串
var str = document.cookie;
if(str == ""){
str = "没有保存任何cookie";
}
alert(str);
}

function comtime(sdate, edate) { 
var NowDate=Date();
var myEdate=Date(edate);

alert(myEdate);

}


//比较时间 格式 yyyy-mm-dd hh:mi:ss
function comptime(beginTime,endTime){

var beginTimes=beginTime.substring(0,10).split('-');
var endTimes=endTime.substring(0,10).split('-');
beginTime=beginTimes[1]+'-'+beginTimes[2]+'-'+beginTimes[0]+' '+beginTime.substring(10,19);
endTime=endTimes[1]+'-'+endTimes[2]+'-'+endTimes[0]+' '+endTime.substring(10,19);
//alert(Date.parse(endTime));alert(Date.parse(beginTime));
var a =(Date.parse(endTime)-Date.parse(beginTime))/3600/1000;
if(a<0){
return -1;
}else if (a>0){
return 1;
}else if (a==0){
return 0;
}else{
return 'exception';
}
}
 
//+--------------------------------------------------- 
function GetNowDate()
{
   var today =new Date();
   today.setMonth(today.getMonth()+1);
   var month=today.getMonth()+"";
   if(month.length==1)
   {
       month=0+month;
   }
   var edate=today.getYear()+"-"+month+"-"+today.getDate()+" "+today.getHours()+":"+today.getMinutes() +":"+today.getSeconds();
   return edate
}
function privGetNowDate()
{
   var today =new Date();
   today.setDate(today.getDate()-1);
   today.setMonth(today.getMonth()+1);
   var month=today.getMonth()+"";
   if(month.length==1)
   {
       month=0+month;
   }
   var edate=today.getYear()+"-"+month+"-"+today.getDate()+" "+today.getHours()+":"+today.getMinutes() +":"+today.getSeconds();
   return edate
}
function IsReAdd(ComID)
{
   var sdate=getCookie("Vote_1_"+ComID);

   edate=privGetNowDate();
   if(comptime(sdate,edate)==-1)
   {
        alert("很抱歉，投票失败！您每天只能给一家企业投一次票哦！");
        return false;
   }else
   {
        return true;
   }
}
function AddVote(cmid,tid)
{
    if(IsReAdd(cmid))
    {
        if(cmid=="")
        {
            alert('企业参数获取错误!');
            return false;
        }
		//url: "http://search1.jmw.com.cn/index.php/ajaxs/index?&ComID="+cmid+"&type=1",
		// url: "http://search1.jmw.com.cn/index.php/ajaxs/index?&ComID="+cmid+"",
        jQuery.ajax({type: "get", 
   				url: "http://search1.jmw.com.cn/index.php/ajaxs/index?&ComID="+cmid+"&type=1",
                dataType: "text",
                success: function(result){
                        alert(result);
                    }
               });
       
    }
    
    return false;
}
function Get(cmid,hy)
{
    var elem=document.mainForm.elements;
    var ids="";
    for(i=0;i<elem.length;i++)
    if(elem[i].type=="hidden" && elem[i].id.indexOf("hid_"+hy+"_")!=-1) 
    {
        ids+=elem[i].value+",";
    }
    ids = ids.substring(0,ids.length-1);
    
    if(ids.indexOf(cmid)!=-1)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}