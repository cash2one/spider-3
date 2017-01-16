var pcwindowlocationhref = "http://search.jmw.com.cn/";var mwindowlocationhref = "http://m.jmw.com.cn/so/";function geturl(url)
	{
		var d =getP("getlocationjs.php");
		var checkurl = UrlIsPC();
		if(checkurl==false){
			if(d[0]['money']!='' || d[0]['keyword']!='')
			{
				url = url+'searchlist.html?';
				if(d[0]['industry']!=0){url = url+'industryId='+d[0]['industry']+'&';}
				else{url = url+'industryId=&industrySubclassId=0&';}
				if(d[0]['keyword']!='' ){url = url+'keyword='+d[0]['keyword']+'&';}
				else{url = url+'keyword=&';}
				if(d[0]['money']!=''){url = url+'money='+d[0]['money'];}
				else{url = url+'money=';}
			}
			else
			{
				if(d[0]['industry']!=0){url = url+d[0]['industry']+'/';}
				else{url = url;}
			}
		}else{
			if(d[0]['keyword']!='')
			{
				if(d[0]['money']!='' && d[0]['industry']!='')
				{
					if(d[0]['industrychild']!='')
						url = url+d[0]['industry']+'/'+d[0]['industrychild']+'_'+d[0]['money']+'_'+d[0]['keyword'];
					else
						url = url+d[0]['industry']+'_'+d[0]['money']+'_'+d[0]['keyword'];
				}
				else if(d[0]['money']!=''){url = url+'0_'+d[0]['money']+'_'+d[0]['keyword'];}
				else if(d[0]['industry']!='')
				{
					if(d[0]['industrychild']!='')
						url = url+d[0]['industry']+'/'+d[0]['industrychild']+'_'+'0-0w_'+d[0]['keyword'];
					else
						url = url+d[0]['industry']+'_'+'0-0w_'+d[0]['keyword'];
				}
				else{url = url+'0_0-0w_'+d[0]['keyword'];}
			}
			else
			{
				if(d[0]['money']!='' && d[0]['industry']!='')
				{
					if(d[0]['industrychild']!='')
						url = url+'i'+d[0]['industrychild']+'-m'+d[0]['money']+'/';
					else
						url = url+'i'+d[0]['industry']+'-m'+d[0]['money']+'/';
				}
				else if(d[0]['money']!=''){url = url+d[0]['money'];}
				else if(d[0]['industry']!=0)
				{
					if(d[0]['industrychild']!='')
						url = url+'i'+d[0]['industrychild']+'/';
					else
						url = url+'i'+d[0]['industry']+'/';
				}
			}
		} 
		return url;
	}
function getP(script_name)
{
    var js = document.getElementsByTagName("script");
    var d = '[{';
    for(var i=0;i < js.length;i++){
        if(js[i].src.indexOf(script_name)>=0){
            var arraytemp = new Array();
            arraytemp = js[i].src.split('?');
            arraytemp = arraytemp[1].split('&');
            for(var x=0;x < arraytemp.length;x++)
            {
                var arrayval = arraytemp[x].split('=');
                d = d+arrayval[0]+':"'+arrayval[1]+'",';
            }
            //d[arraytemp[0]]=arraytemp[1];
        
        }
    }
    d = d+'}]';
    d=eval(d); 
    return d;
}
function IsPC(){
    var userAgentInfo = navigator.userAgent;  
    var phone = new Array("iPhone","iPad","Android","SymbianOS","Windows Phone","iPod");
    var flag = true;  
    for (var v = 0; v < phone.length; v++) {  
        if (userAgentInfo.indexOf(phone[v]) > 0) 
        { 
            flag = false; 
            return flag;  
            break; 
        }  
    }
    return flag;
}
function UrlIsPC()
{
    var url = document.URL;
    if(url.match(/^http:\/\/m\.jmw\.com\.cn\/.*/))
    {
        return false;
    }
    else
    {
        return true;
    }
}
function checkClieck()
{
    var sysispc = IsPC();
    var urlispc = UrlIsPC();
    if(sysispc != urlispc)
    {
        if(sysispc==true && pcwindowlocationhref!='')
        {
            var url = geturl(pcwindowlocationhref);
            window.location.href = url;
        }
        else if(sysispc==false && mwindowlocationhref!='')
        {
            var url = geturl(mwindowlocationhref);
            window.location.href = url;
        }
    }
}
checkClieck();