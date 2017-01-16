<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="P3P" content='CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"' />
<meta name="keywords" content="" />
<meta name="description" content="" />
<title>登录窗口</title>
<link href="http://image1.jmw.com.cn/login/css/login_win.css" type="text/css" rel="stylesheet" />
<script src="http://image1.jmw.com.cn/public/js/jquery-1.8.2.min.js" type="text/javascript"></script>
<!-- <script type="text/javascript" src="http://image1.jmw.com.cn/hangye/public/js/tongji.js"></script> -->
<script type="text/javascript" src="http://person.jmw.com.cn/js/login.js"></script>
</head>

<body>
<form method="post" action="http://person.jmw.com.cn/login_search.php" onsubmit="return refer();">
<div class="loginWin">
<input type="hidden" id="url" name="url" value="" />
<input type="hidden" id="success_key" name="success_key" value="" />
<input type="hidden" name="pid" value="" />
<input type="hidden" name="project_id" id="project_id" value="" />
<input type="hidden" name="origin" value="" />
<input type="hidden" id="success_brand_name" name="brand_name" value="" />
<input type="hidden" id="success_url" name="success_url" value="" />

	<table cellpadding="0" cellspacing="0" class="loginTable">
    	<caption><strong>欢迎您登录中国加盟网！</strong></caption>
        <tbody>
        	<tr>
            	<th width="9%">账户名</th>
                <td width="91%">
                	<span class="inpBox1">
                        <i class="userIco"></i>	
                    	<input type="text" id="person_username" 
                            name="person_username" maxlength="11" 
                            value="请输入手机号码" class="inp1" />
                    </span>
                    <!--验证提示-->
                    <span class="tips" id="person_usernameSpan">
                    	<i class="i_1"></i>
                        <i class="i_2"></i>
                    </span>
                </td>
            </tr>
        	<tr>
            	<th>密&nbsp;&nbsp;码</th>
                <td>
                	<span class="inpBox2">
                        <i class="pwIco"></i>	
                    	<input type="password" id="person_password"
                             name="person_password" value="" maxlength="12" 
                            class="inp1" />	
                    </span>
                    <!--验证提示-->
                    <span class="tips" id="person_passwordSpan">
                    	<i class="i_1"></i>
                        <i class="i_2"></i>
                    </span>
                </td>
            </tr>
        	<tr>
            	<th>验证码</th>
                <td>
                    <input type="text" name="person_checknum"
                         id="check_code" value="" class="inp2" />	
                    <img id="vailcode" width="62" height="26" alt="点击刷新验证码"
                        src="javascript:;" onclick="t1(); return false;" />
                    <font><a href="javascript:;" onclick="t1(); return false;">换一张</a></font>
                    <!--验证提示-->
                    <span class="tips" id="person_checknumSpan">
                    	<i class="i_1"></i>
                        <i class="i_2"></i>
                    </span>
                </td>
            </tr>
        	<tr>
                <td colspan="2">
                	<!-- <label for="autoLogin"><input id="autoLogin" type="checkbox" 
                        value="" name="autoLogin" />下次自动登录</label> -->
                    <a href="http://person.jmw.com.cn/findpwdbytel.php" 
                        target="_blank" onclick="refreshIframe();">忘记密码？</a>
                </td>
            </tr>
        	<tr>
                <td colspan="2" class="submitBtn">
                	<input type="submit" id="submitBtn" value="" />没有帐号？<a target="_blank" onclick="refreshIframe();"
                        href="http://person.jmw.com.cn/registered.php?reg=reg">马上注册</a>
                </td>
            </tr>
        </tbody>
    </table>
    
    <a href="http://person.jmw.com.cn/registered.php?reg=reg" class="goReg" target="_blank" 
        hideFocus="true" title="立即免费注册" 
        onclick="refreshIframe();">立即免费注册</a>
    
</div>
</form>
<script type="text/javascript">
t1();
//验证码刷新
function t1()
{
    $("#vailcode").attr("src","http://person.jmw.com.cn/code.php?"+Math.random());
    return false;
}
function refreshIframe(res)
{
	//var url = 'null';
	var url = $('*[name=url]').val();
	if(url != '')
	window.parent.location.href=url;
    else window.location.href='http://search.jmw.com.cn/refresh.php';
}
$(function(){
		//按钮hover状态
		var hoverObj=$("input[type='submit'],input[type='button']");
			hoverObj.hover(
			function(){
				$(this).stop().animate({"opacity":0.8},300);
			}, 
			function(){
				$(this).stop().animate({"opacity":1},300);
		});
	});
</script>
</body>
</html>