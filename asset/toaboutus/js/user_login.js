/****************XSS过滤********************/
function stripscript(s)
 {   
    var pattern = new RegExp("[%--`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
    //格式 RegExp("[在中间定义特殊过滤字符]")
    var rs = "";
    for (var i = 0; i < s.length; i++) {
        rs = rs + s.substr(i, 1).replace(pattern, '');

    }
    return rs;

};

function getCookie(name, pre)
 {
    if (pre) {
    	name = 'to8to_' + name;
	}
    var r = new RegExp("(\\b)" + name + "=([^;]*)(;|$)");
    var m = document.cookie.match(r);
    var res = !m ? "": decodeURIComponent(m[2]);
    var result = stripscript(res);
    return result;

};


jq(function() {
    //设置uid 身份
    var username    = getCookie('to8to_username');

    if(typeof(username)!='undefined'&&username!=""&&username!="deleted"){
        username = decodeURIComponent(username);
		createUserNav();
    };

    function createUserNav() {
        var str_havel='';
        //用户身份
        var ind = getCookie('to8to_ind');
        var uid = getCookie('to8to_uid');
		

        str_havel='<div rel="nofollow" class="col_l htr_username_box"><a href="javascript:;" class="htr_username"><p class="ect">'+username+'</p><i class="triangle_down"></i></a><ul class="user_memu" style="display:none"><li><a href="http://www.to8to.com/my/">个人中心</a></li>';

        if(ind=='yz'){
            str_havel += '<li><a href="http://www.to8to.com/my/yz_administration_self.php?act=1" id="userbar-myinfo" class="">帐号设置</a></li>'; 
        }else if(ind=='zs'){ 
            str_havel += '<li><a href="http://www.to8to.com/zs/'+uid+'">公司主页</a></li>';  
            str_havel += '<li><a href="http://www.to8to.com/my/gs_data.php" >帐号设置</a></li>'; 
        };
        str_havel += '<li><a href="http://www.to8to.com/logout.php?uid='+uid+'">退出</a></li></ul></div>';

        jq.ajax({ 
            async:true, 
            type:"GET",      
            dataType: 'jsonp',      
            url:"http://www.to8to.com/api/get_message_count.php", 
            data:{ind:ind,uid:uid}, 
            async: false, 
            success:function(data) {  
                if(data.status=="1") { 
                    str_havel += data.message;
                } 
                var labelObj = jq('#nav_user_data');
                labelObj.html(str_havel);

                labelObj.children('div').hover(function() {
                    jq(this).toggleClass('on');
                    jq(this).children('ul').toggle();
                    jq(this).children('a').find('i.triangle_down').toggleClass('triangle_up');
                });    
            }    
        });        
    };
});
