var str = document.referrer;
if(str.indexOf('jmw.com.cn') == -1)
document.cookie="g_from="+escape(document.referrer)+";path=/;domain=jmw.com.cn";