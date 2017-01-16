var Browser=new Object();Browser.isMozilla=(typeof document.implementation!='undefined')&&(typeof document.implementation.createDocument!='undefined')&&(typeof HTMLDocument!='undefined');Browser.isIE=window.ActiveXObject?true:false;Browser.isFirefox=(navigator.userAgent.toLowerCase().indexOf("firefox")!=- 1);Browser.isSafari=(navigator.userAgent.toLowerCase().indexOf("safari")!=- 1);Browser.isOpera=(navigator.userAgent.toLowerCase().indexOf("opera")!=- 1);var Utils=new Object();Utils.htmlEncode=function(text)
{return text.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
Utils.isEmpty=function(val)
{switch(typeof(val))
{case'string':return Utils.trim(val).length==0?true:false;break;case'number':return val==0;break;case'object':return val==null;break;case'array':return val.length==0;break;default:return true;}}
Utils.isNumber=function(val)
{var reg=/^[\d|\.|,]+$/;return reg.test(val);}
Utils.isInt=function(val)
{if(val=="")
{return false;}
var reg=/\D+/;return!reg.test(val);}
Utils.x=function(e)
{return Browser.isIE?event.x+ document.documentElement.scrollLeft- 2:e.pageX;}
Utils.y=function(e)
{return Browser.isIE?event.y+ document.documentElement.scrollTop- 2:e.pageY;}
Utils.request=function(url,item)
{var sValue=url.match(new RegExp("[\?\&]"+item+"=([^\&]*)(\&?)","i"));return sValue?sValue[1]:sValue;}
Utils.$=function(name)
{return document.getElementById(name);}
function rowindex(tr)
{if(Browser.isIE)
{return tr.rowIndex;}
else
{table=tr.parentNode.parentNode;for(i=0;i<table.rows.length;i++)
{if(table.rows[i]==tr)
{return i;}}}}
function getPosition(o)
{var t=o.offsetTop;var l=o.offsetLeft;while(o=o.offsetParent)
{t+=o.offsetTop;l+=o.offsetLeft;}
var pos={top:t,left:l};return pos;}
function cleanWhitespace(element)
{var element=element;for(var i=0;i<element.childNodes.length;i++){var node=element.childNodes[i];if(node.nodeType==3&&!/\S/.test(node.nodeValue))
element.removeChild(node);}}
Utils.trim=function(text){return text.replace(/(^\s*)|(\s*$)/g,"");}
Utils.ltrim=function(text){return text.replace(/(^\s*)/g,"");}
Utils.rtrim=function(text){return text.replace(/(\s*$)/g,"");}
Utils.len=function(text){return text.replace(/[^\x00-\xff]/g,"**").length;}
Utils.isUsername=function(str){var reg=/^[\w\.\-\u4e00-\u9fa5]{2,16}$/;return reg.test(str);}
Utils.isPassword=function(str){var pattern=/^[\w!@#$%^&*().]{6,16}$/;return pattern.test(str);}
Utils.isCheckcode=function(str){var reg=/^[a-zA-Z0-9]{4}$/;return reg.test(str);}
Utils.isEmail=function(email){var email_format=/^\w(\w|_|-|\.)*@\w(\w|_|-|\.)*\.(com|edu|gov|int|mil|net|org|biz|info|pro|name|museum|coop|aero|xxx|idv|cn|hk|tw)$/
return email_format.test(email);}
Utils.isChinese=function(str){var regexp=/^[\u4e00-\u9fa5]*$/g;return regexp.test(str);}
Utils.isDigit=function(str){var regexp=/^[0-9]+$/;return regexp.test(str);}
Utils.isInteger=function(str){var regexp=/^(-|\+)?\d+$/;return regexp.test(str);}
Utils.isFloat=function(str){var regexp=/^(-|\+)?\d+\.{0,1}\d+$/;return regexp.test(str);}
Utils.isPostalCode=function(str){var regexp=/(^[0-9]{6}$)/;return regexp.test(str);}
Utils.isQqMsn=function(str){var regexp=/^\d{4,14}$/;return regexp.test(str);}
Utils.isPhone=function(str){var regexp=/^(\d{3,4}-{0,1}){0,1}\d{7,8}$/;return regexp.test(str);}
Utils.isMobile=function(str){var regexp=/^(1)[0-9]{10}$/;return regexp.test(str);}
Utils.isContent=function(str){var regexp=/^([a-zA-Z0-9]|[\u4e00-\u9fa5]|【|\-){1}([a-zA-Z0-9]|、|\+|\s|\n|\-|,|\.|。|\！|!|，|\?|？|【|】|—|[\u4e00-\u9fa5]){2,199}$/;return regexp.test(str);}
Utils.isQuestion=function(str){if(str==""){return false;}else{var regexp=/^[0-9a-zA-Z\n\u4e00-\u9fa5]{2,10}$/;return regexp.test(str);}}
Utils.isCity=function(str){var regexp=/^[\u4e00-\u9fa5]{1,15}$/;return regexp.test(str);}
Utils.isAdds=function(str){var regexp=/^([a-zA-z0-9]|[\u4e00-\u9fa5]|-){1,30}$/;return regexp.test(str);}
Utils.isName=function(str){var regexp=/^[0-9a-zA-Z\u4e00-\u9fa5]{0,19}$/;return regexp.test(str);}
Utils.cookie=new Object();Utils.cookie.domain='jmw.com.cn';Utils.cookie.path='/';Utils.cookie.hours=24;Utils.cookie.setCookie=function(name,value,hours,domain,path){hours=hours?hours:Utils.cookie.hours;domain=domain?domain:Utils.cookie.domain;path=path?path:Utils.cookie.path;var exp=new Date();exp.setTime(exp.getTime()+ hours*3600000);document.cookie=name+"="+ escape(value)+";expires="+ exp.toGMTString()+";domain="+ domain+";path="+ path;}
Utils.cookie.getCookie=function(name){var arr=document.cookie.match(new RegExp("(^| )"+ name+"=([^;]*)(;|$)"));if(arr!=null)return unescape(arr[2]);return null;}
Utils.cookie.delCookie=function(name,domain,path){domain=domain?domain:Utils.cookie.domain;path=path?path:Utils.cookie.path;var exp=new Date();exp.setTime(exp.getTime()- 3600000);document.cookie=name+"=0"+";expires="+ exp.toGMTString()+";domain="+ domain+";path="+ path;}
document.getCookie=function(sName)
{var aCookie=document.cookie.split("; ");for(var i=0;i<aCookie.length;i++)
{var aCrumb=aCookie[i].split("=");if(sName==aCrumb[0])
return decodeURIComponent(aCrumb[1]);}
return null;}
document.setCookie=function(sName,sValue,sExpires)
{var sCookie=sName+"="+ encodeURIComponent(sValue);if(sExpires!=null)
{sCookie+="; expires="+ sExpires;}
document.cookie=sCookie;}
document.removeCookie=function(sName,sValue)
{document.cookie=sName+"=; expires=Fri, 31 Dec 1999 23:59:59 GMT;";}