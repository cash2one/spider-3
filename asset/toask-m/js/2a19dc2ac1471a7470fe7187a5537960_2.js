"object"!=typeof JSON&&(JSON={},function(){function a(t){return 10>t?"0"+t:t}function c(t){return d.lastIndex=0,d.test(t)?'"'+t.replace(d,function(t){var e=r[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function b(t,e){var i,o,r,a,u,d=f,s=e[t];switch(s&&"object"==typeof s&&"function"==typeof s.toJSON&&(s=s.toJSON(t)),"function"==typeof n&&(s=n.call(e,t,s)),typeof s){case"string":return c(s);case"number":return isFinite(s)?String(s):"null";case"boolean":case"null":return String(s);case"object":if(!s)return"null";if(f+=k,u=[],"[object Array]"===Object.prototype.toString.apply(s)){for(a=s.length,i=0;a>i;i+=1)u[i]=b(i,s)||"null";return r=0===u.length?"[]":f?"[\n"+f+u.join(",\n"+f)+"\n"+d+"]":"["+u.join(",")+"]",f=d,r}if(n&&"object"==typeof n)for(a=n.length,i=0;a>i;i+=1)"string"==typeof n[i]&&(o=n[i],r=b(o,s),r&&u.push(c(o)+(f?": ":":")+r));else for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(r=b(o,s),r&&u.push(c(o)+(f?": ":":")+r));return r=0===u.length?"{}":f?"{\n"+f+u.join(",\n"+f)+"\n"+d+"}":"{"+u.join(",")+"}",f=d,r}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var g,d,f,k,r,n;"function"!=typeof JSON.stringify&&(d=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,r={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,i){var o;if(f="",k="","number"==typeof i)for(o=0;i>o;o+=1)k+=" ";else"string"==typeof i&&(k=i);if(n=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw Error("JSON.stringify");return b("",{"":t})}),"function"!=typeof JSON.parse&&(g=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(a,b){function c(t,e){var i,n,o=t[e];if(o&&"object"==typeof o)for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n=c(o,i),void 0!==n?o[i]=n:delete o[i]);return b.call(t,e,o)}var d;if(a=String(a),g.lastIndex=0,g.test(a)&&(a=a.replace(g,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),"function"==typeof b?c({"":d},""):d;throw new SyntaxError("JSON.parse")})}()),function(t,e){"object"==typeof exports?module.exports=e():"function"==typeof define?define(e):t.clickStream=e()}(window,function(t,e,i){function n(){return"undefined"!=typeof navigator.cookieEnabled&&navigator.cookieEnabled}function o(t){var e,i=0;for(e in t)t.hasOwnProperty(e)&&i++;return i}function r(t,e,i,n){i=new Date,i.setTime(i.getTime()+2592e6);var o="";n&&(o="domain="+n+";"),document.cookie=t+"="+e+";expires="+i.toGMTString()+";path=/;"+o}function a(t,e){e&&(t="to8to_"+t);var i=document.cookie.match(new RegExp("(\\b)"+t+"=([^;]*)(;|$)"));return i?decodeURIComponent(i[2]):""}var c=window.jQuery||t("jquery");return window.clickStream={timeout_id:"clickStreamTimeout",vt:"",cd:"",gu:"",lastUrl:"",tag_id:"",item:0,sendSpeed:4e3,firefoxEnable:!0,sendCvTime:4e3,cvTimtOut:0,allowSend:!0,data:{pv:{},cv:{}},clearTimeOut:function(){clearTimeout(this.timeout_id)},createGuid:function(){for(var t="",e=1;32>=e;e++){var i=Math.floor(16*Math.random()).toString(16),t=t+i;8!=e&&12!=e&&16!=e&&20!=e||(t+="")}return this.guid=t+=Math.ceil(1e6*Math.random())},sendPvTimeout:function(){if(!0!==this.allowSend)return!1;var t=this;clearTimeout(t.timeout_id),this.timeout_id=setTimeout(function(){t.sendPv("refreshSpeed"),t.data.pv.vt=t.getDate()},t.sendSpeed),this.allowSend=!1},refreshSpeed:function(){32e3>this.sendSpeed&&(this.sendSpeed*=2)},newPv:function(){var t=Math.floor(1e5*Math.random());this.cd=(new Date).getTime().toString()+t.toString(),this.vt=this.getDate(),this.gu=window.location.href,this.lastUrl=document.referrer,r("to8to_cook","OkOcClPzRWV8ZFJlCIF4Ag==",7776e3,".to8to.com")},getPvParams:function(){this.data.pv={},this.data.pv.lu=this.lastUrl,this.data.pv.ly=1,this.data.pv.vt=this.vt,this.data.pv.cd=this.cd,this.data.pv.gu=this.gu,this.data.pv.ov=this.detectOS(),this.data.pv.ds=screen.width+"*"+screen.height},getCvParams:function(t){window.location.href.indexOf("---ptag_test---")!=-1&&alert(t),this.data.cv[this.item]={};var e=(new Date).getTime(),i=Math.floor(1e5*Math.random());this.data.cv[this.item].lu=document.referrer,this.data.cv[this.item].ly=2,this.data.cv[this.item].cg=t,this.data.cv[this.item].cd=e.toString()+i.toString(),this.data.cv[this.item].vt=this.getDate(),this.data.cv[this.item].gu=window.location.href,this.data.cv[this.item].ov=this.detectOS(),this.data.cv[this.item].ds=screen.width+"*"+screen.height,this.item++,this.sendCv()},getTo8toCid:function(){return a("to8tocookieid")},sendPv:function(t){this.data.cid=this.getTo8toCid(),this.data.pv.lt=this.getDate();var e=JSON.stringify(this.data);c.ajax({url:"//m.to8to.com/index/count",type:"POST",data:{key:e},dataType:"json",encode:"UTF-8",cache:!1,async:!0}),this.data.cv={},this.item=0,this.data.pv.vt=this.getDate(),this.allowSend=!0,"function"==typeof clickStream[t]&&clickStream[t]()},sendCv:function(){var t=this;return!!o(this.data.cv)&&(clearTimeout(this.cvTimtOut),clearTimeout(this.timeout_id),void(this.cvTimtOut=setTimeout(function(){t.sendPv("flushTimeout")},t.sendCvTime)))},flushTimeout:function(){32e3>this.sendCvTime&&(this.sendCvTime*=2)},createIframe:function(){var t;t="<iframe frameborder='0' height='0' name='frm_dealer' id='clsIframe'></iframe><form action='//www.to8to.com/count/a682ab23d4b4c95f84c744b2826419cd.php' method='POST' id = 'frm_dealer' target='frm_dealer'>",t+="<input type='hidden' id='clickValId' name='key' value=''>",t+="</form>",c("body").append(t)},getDate:function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,i=10>i?"0"+i:i,n=t.getDate(),n=10>n?"0"+n:n,o=t.getHours(),o=10>o?"0"+o:o,r=t.getMinutes(),r=10>r?"0"+r:r,a=t.getSeconds(),a=10>a?"0"+a:a,t=t.getMilliseconds();return e.toString()+i.toString()+n.toString()+o.toString()+r.toString()+a.toString()+"."+t},initCookie:function(){if(!a("to8tocookieid")){var t=clickStream.createGuid();r("to8tocookieid",t,7776e3,"to8to.com")}},detectOS:function(){var t=navigator.userAgent,e="Win32"==navigator.platform||"Windows"==navigator.platform,i="Mac68K"==navigator.platform||"MacPPC"==navigator.platform||"Macintosh"==navigator.platform||"MacIntel"==navigator.platform;if(i)return"09";if("X11"==navigator.platform&&!e&&!i)return"08";var i=-1<String(navigator.platform).indexOf("Linux"),n="android"==t.toLowerCase().match(/android/i);if(i)return n?"07":"06";if(e){if(-1<t.indexOf("Windows NT 5.0")||-1<t.indexOf("Windows 2000"))return"05";if(-1<t.indexOf("Windows NT 5.1")||-1<t.indexOf("Windows XP"))return"04";if(-1<t.indexOf("Windows NT 5.2")||-1<t.indexOf("Windows 2003"))return"03";if(-1<t.indexOf("Windows NT 6.0")||-1<t.indexOf("Windows Vista"))return"02";if(-1<t.indexOf("Windows NT 6.1")||-1<t.indexOf("Windows 7"))return"01"}return"404"},init:function(){return!!n()&&(clickStream.initCookie(),clickStream.newPv(),clickStream.getPvParams(),clickStream.sendPv(),void clickStream.bindEvents())},bindEvents:function(){c(document).bind("click",function(){clickStream.sendPvTimeout()}),c(window).bind("scroll",function(){clickStream.sendPvTimeout()})}},c(document).ready(function(){clickStream.init()}),window.onbeforeunload=function(){clickStream.sendPv()},clickStream});