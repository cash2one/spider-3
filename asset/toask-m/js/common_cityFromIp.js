(function() {
    function setCookie(name, value, expire, pre){
        if (!expire){
            expire = 5000;
        };

        if (pre){
            name = 'to8to_' + name;
        };

        var expiry = new Date();
        expiry.setTime(expiry.getTime() + expire);
        document.cookie = name + '=' + value + ';expires=' + expiry.toGMTString() + ';path=/;domain=.to8to.com';
    };
    function getCookie(name, pre) {
        if (pre) {
            name = 'to8to_' + name
        };
        var r = new RegExp("(\\b)" + name + "=([^;]*)(;|$)");
        var m = document.cookie.match(r);
        return (!m ? "" : decodeURIComponent(m[2]))
    }
    window.getCityFromIp=function(callBack){
        var cityFromIp='北京';
        if(getCookie('cityFromIp') !=''){
            callBack(getCookie('cityFromIp'));
            // return(cityFromIp=); 
        }else{
            $.ajax({
                type: "GET",
                url: '//www.to8to.com/api/getAreaInfo.php',
                // async:false, //同步调用
                dataType : "jsonp",//数据类型为jsonp
                jsonpCallback: "jsonpCallback",//服务端用于接收callback调用的function名的参数
                success: function (ret) {
                    var to8to_tname = encodeURIComponent(ret.data.to8to_tname);
                    setCookie('cityFromIp',to8to_tname,9999999999999);
                    callBack(ret.data.to8to_tname);             
                },
                error: function(){
                    callBack('北京');
                }
            });
        }           
    }
})();
