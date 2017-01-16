function DecodeCookie(str){if(str==null){return null;}
var strArr;var strRtn="";strArr=str.split("a");try
{for(var i=strArr.length-1;i>=0;i--)
strRtn+=String.fromCharCode(eval(strArr[i]));}
catch(err)
{return null;}
return strRtn;}
function GetCookie(sMainName,sSubName){var sCookieName=sMainName+"=";var sSubCookieName=(sSubName)?sSubName+"=":null;var sCookie;var sWholeCookie=document.cookie;var nValueBegin=sWholeCookie.indexOf(sCookieName);if(nValueBegin!=-1){var nValueEnd=sWholeCookie.indexOf(";",nValueBegin);if(nValueEnd==-1)nValueEnd=sWholeCookie.length;var sValue=sWholeCookie.substring(nValueBegin+ sCookieName.length,nValueEnd);if(sSubCookieName){var nSubValueBegin=sValue.indexOf(sSubCookieName);if(nSubValueBegin!=-1){var nSubValueEnd=sValue.indexOf("&",nSubValueBegin);if(nSubValueEnd==-1)nSubValueEnd=sValue.length;var sSubValue=sValue.substring(nSubValueBegin+ sSubCookieName.length,nSubValueEnd);return unescape(sSubValue);}}
if(!sSubCookieName)return unescape(sValue);}
return null;}
function jQuery(v){return(document.getElementById(v));}
function agent(v){return(Math.max(navigator.userAgent.toLowerCase().indexOf(v),0));}
function isset(v){return((typeof(v)=='undefined'||v.length==0)?false:true);}
function winxy(v){var z=agent('msie')?Array(document.body.scrollHeight,document.body.scrollWidth):Array(window.innerHeight,window.innerWidth);return(isset(v)?z[v]:z);}
function logend(){jQuery('logbg').attr('display','none');jQuery('logdiv').attr('display','none');}
function logdiv(t,v,b){jQuery('logbg').attr('width',winxy(1)+'px');jQuery('logbg').attr('height',winxy(0)+'px');jQuery('logbg').attr('display','block');jQuery('logdiv').innerHTML=v;jQuery('logdiv').attr('left',Math.round((winxy(1)-b)/2)+'px'); jQuery('logdiv').attr('width',b+'px');jQuery('logdiv').attr('top',(document.body.scrollTop+document.documentElement.scrollTop)+(window.screen.availHeight/2-240)+'px');jQuery('logdiv').attr('display','block');}
function getCookie(objName)
{var arrStr=document.cookie.split("; ");for(var i=0;i<arrStr.length;i++){var temp=arrStr[i].split("=");if(temp[0]==objName)
{if(temp[1]!=''&&temp[1]!=null&&typeof(temp[1])!=undefined)
{var temps=decodeURIComponent(temp[1]);return temps;}}}
return null;}
function avals(obj){var __c=document.cookie;var __b=false;var __s=__c.indexOf('INDI');if(__s>-1){var __a=__c.match(/USERNAME=.[^&]+/);if(__a!=null){__b=true;}}
var d_id=obj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("id")
if(jQuery('#content').val()=='点击快速留言')
{jQuery('#content').css('color','#333');jQuery('#content').val(obj.innerHTML.replace("·",""));}
else
{jQuery('#content').val(jQuery('#content').val()+obj.innerHTML.replace("·",""));}
hide_menu1("msgList");jQuery('#content').blur();}
function show_menu(obj){jQuery("#"+obj).css('display','block');}
function hide_menu(obj){jQuery("#"+obj).css('display','none');}
function CheckAll(){var length=document.form1.elements.length;var tocheck=document.form1.allbox.checked;for(var i=0;i<length;i++){if(document.form1.elements[i].name.indexOf("onid")!=-1){document.form1.elements[i].checked=tocheck;}}}
function show_menus(obj,pp){var show=sendstr;var restr="“"+ pp+"”";if(pp==""){restr="此项目"}
var patn=/^[A-Za-z]+$/;if(!patn.test(pp))
{restr="此项目";}
show=show.replace(/\*/g,restr);if(coknum>0){show=show.replace(/\@/g,cokaaa.substring(0,coknum));}else{show=show.replace(/\@/g,"我所在的地区");}
jQuery("#"+obj).innerHTML=show;jQuery("#"+obj).attr('height',jQuery('listtable').attr('height'));jQuery("#"+obj).css('display','');}
function hide_menu1(obj){jQuery("#"+obj).css('display','none');}
var sendstr='<iframe style="position:absolute;z-index:-1;width:e-xpression(this.nextSibling.offsetWidth);height:e-xpression(this.nextSibling.offsetHeight);top:e-xpression(this.nextSibling.offsetTop);left:e-xpression(this.nextSibling.offsetLeft);"  frameborder=0></iframe><table width="100%" id="listtable" border=0 cellspacing=0 cellpadding=0><tr><td><ul class="vsv"><li class="tle">您可以根据意向选择下列[快捷留言]↓</li><li style="FONT-WEIGHT: normal;" onMouseOut="this.className=\'mout\'" onMouseOver="this.className=\'mover\'" onclick="avals(this);">·*很好，请尽快联系我详谈。</li><li style="FONT-WEIGHT: normal;" onMouseOut="this.className=\'mout\'" onMouseOver="this.className=\'mover\'" onclick="avals(this);">·请问@有加盟商了吗？</li><li style="FONT-WEIGHT: normal;" onMouseOut="this.className=\'mout\'" onMouseOver="this.className=\'mover\'" onclick="avals(this);">·我已留下了邮箱，请将详细资料发邮件给我。</li><li style="FONT-WEIGHT: normal;" onMouseOut="this.className=\'mout\'" onMouseOver="this.className=\'mover\'" onclick="avals(this);">·我想详细了解*的加盟流程，请与我联系！</li><li style="FONT-WEIGHT: normal;" onMouseOut="this.className=\'mout\'" onMouseOver="this.className=\'mover\'" onclick="avals(this);">·做为*的代理加盟商能得到哪些支持？</li><li style="FONT-WEIGHT: normal;" onMouseOut="this.className=\'mout\'" onMouseOver="this.className=\'mover\'" onclick="avals(this);">·请问投资*所需要的费用有哪些？</li><li style="FONT-WEIGHT: normal;" onMouseOut="this.className=\'mout\'" onMouseOver="this.className=\'mover\'" onclick="avals(this);">·我想加盟*，请电话联系我。</li></ul></td></tr></table>';var cokaaa=DecodeCookie(GetCookie("INDI","ADDRES"));var coknum=-1;if(cokaaa!=null){coknum=cokaaa.indexOf("县")+1;if(coknum<=0){coknum=cokaaa.indexOf("区")+1;}
if(coknum<=0){coknum=cokaaa.indexOf("市")+1;}
if(coknum<=0){coknum=cokaaa.indexOf("省")+1;}}