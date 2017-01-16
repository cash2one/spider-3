function tg(elm,num,total) {
	tgab1(elm,num,total) ;
	abSub1(elm,num,total) ;
	//showImage(num) ;
	document.body.focus();
}
function tgab1(elm,num,total) {
	for(i=1;i<=total;i++) {
		if(i==num)
		{
		  if(document.getElementById(elm+"_"+i).className == "fz1")
		 {
			document.getElementById(elm+"_"+i).className = "fz2";
			}
		  else{
			  document.getElementById(elm+"_"+i).className = "fz1"
			  }
	      }
        else{
			document.getElementById(elm+"_"+i).className = "fz2"
			}
      }
   }

function abSub1(elm,num,total) {
	for(i=1;i<=total;i++) {
			if(i==num)
			{
				if(document.getElementById(elm+"_sub"+i).style.display=="none")
			{
				document.getElementById(elm+"_sub"+i).style.display = "block" ;
			}
			else
			{
				document.getElementById(elm+"_sub"+i).style.display="none"
				}
			}
			else
			{
				document.getElementById(elm+"_sub"+i).style.display = "none" ;
			}
				}
		}
		
		
//显示与隐藏列表
function showList(id,num){
	if(num == 1){
		document.getElementById(id).style.display = "block";
	}
	else{
		document.getElementById(id).style.display = "none";
	}  
}

 function copyToClipboard(txt) {
     if(window.clipboardData) {
       window.clipboardData.clearData();
       window.clipboardData.setData("Text", txt);
       alert("复制成功！");
     } else if(navigator.userAgent.indexOf("Opera") != -1) {
      window.location = txt;
     } else if (window.netscape) {
      try {
       netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
      } catch (e) {
       alert("被浏览器拒绝！\n请在浏览器地址栏输入'about:config'并回车\n然后将'signed.applets.codebase_principal_support'设置为'true'");
      }
      var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
      if (!clip)
       return;
      var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
      if (!trans)
       return;
      trans.addDataFlavor('text/unicode');
      var str = new Object();
      var len = new Object();
      var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
      var copytext = txt;
      str.data = copytext;
      trans.setTransferData("text/unicode",str,copytext.length*2);
      var clipid = Components.interfaces.nsIClipboard;
      if (!clip)
       return false;
      clip.setData(trans,null,clipid.kGlobalClipboard);
      alert("复制成功！");
     }
}

