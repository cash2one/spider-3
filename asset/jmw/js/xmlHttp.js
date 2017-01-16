

function getXmlHttpRequest()
{    //判断浏览器函数
    var xmlHttpObj = null;
    if (window.ActiveXObject)
    {
     // IE
     xmlHttpObj = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest)
    {
         // Mozilla, Safari, ...
         xmlHttpObj = new XMLHttpRequest();
         xmlHttpObj.overrideMimeType('text/xml');
    }           
    return xmlHttpObj;           	
}
  
function getXmlHttpRequest2()
{
   if(window.ActiveXObject){
        var xmlhttp=null;
        var ieArr=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP","Microsoft.XMLHTTP"];                
        for(var i=0;i<ieArr.length;i++)
        {
            var xmlhttp= new ActiveXObject(ieArr[i]);
        }
        return xmlhttp;
   } else if(window.XMLHttpRequest){
           return new XMLHttpRequest();
   }            
}

//发送xmlHttpRequest
function  xmlSend(strURL,strXml,xmlHttp)
{
    xmlHttp.open("POST", strURL, true);//如果为true，表示异步加载数据
    xmlHttp.send(strXml);  
}

function  xmlGet(strURL,xmlHttp)
{
    xmlHttp.open("GET", strURL, true);//如果为true，表示异步加载数据
    xmlHttp.send();  
}