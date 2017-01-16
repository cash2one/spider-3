document.domain = 'to8to.com';
var gpm_zxbj = {};
if(!window.GlobalProvincesModule) {
    jq.getScript('http://static.to8to.com/gb_js/GlobalProvinces.js?v=1436800658',function(){
        //表单省市组件初始化
        gpm_zxbj = new GlobalProvincesModule();
        gpm_zxbj.def_province = ["省/市", ""];
        gpm_zxbj.def_city1    = ["市/地区", ""];  
        gpm_zxbj.initProvince($('zxbjcalcUser_Shen'));
    });
}else{
        //表单省市组件初始化
        gpm_zxbj = new GlobalProvincesModule();
        gpm_zxbj.def_province = ["省/市", ""];
        gpm_zxbj.def_city1    = ["市/地区", ""];  
        gpm_zxbj.initProvince($('zxbjcalcUser_Shen'));
}
var _scriptMd5 = document.createElement('script');
_scriptMd5.type = 'text/javascript';
_scriptMd5.src = "http://static.to8to.com/gb_js/jQuery.md5.js";
document.getElementsByTagName('head')[0].appendChild(_scriptMd5);

(function(jq){
    var QrcodeData = {},
        qrcodeData = {},
        loopInt = 0,
        scrollMark = false,
        runEnd = 0;
    var bindFlag = false,
        phonehistory=[],
        ptagArr = [];
    jq(function(){
        initEvent();
    })
    
    function initEvent() {
        //placeholder兼容
        jq('[name="square"], [name="chkPhone"]').placeholder({oLabel: 'b'});            
        jq('.zxbj-yqbj').find('.submit-btn').on('click', function() {
            if(bindFlag){
                return false;
            }
            //获取当前ptagkkk
            var ptag = jq('.zxbj-yqbj').find('input[name="ptag"]').val();
            //百度统计函数
            try{
                _hmt && _hmt.push(['_trackEvent', 'zb', 'submit', ptag]);
            }catch(e){

            }
            getQuote();
        });
        jq('[searchtage]').bind('click', function() {
            var tag = jq(this).attr('searchtage');

            clickStream.getCvParams(tag);
        });
        //停留标识，用于是否显示弹框报价提示
        jq('.zxbj-calc-wrap').on('click', function(){
            window.parent.isXGTClick = false;
        });

        runEnd = setTimeout(function(){
            tabNum(jq('.stochastic-price-p1'));
        }, 1500);
        // 改变省时自动选择市 改变市时同步
        jq('.new-container .zxbj-calc-con').find('[name="User_Shen"]').on('change',function(){
            changeProvince('zxbjcalcUser_Shen','zxbjcalcUser_City','zxbjcalcUser_Town');
            jq('.new-container .zxbj-calc-con').find('[name="User_City"]').find('option').eq(1).attr('selected','selected');
        });
        // 判断装修日记页面及装修论坛页面
        if(location.href.indexOf('riji/')>-1||location.href.indexOf('/forum')>-1){
            jq('.glideimg').show();
            jq('.zxbj-clac-yqbj').css({'margin':'0','margin-bottom':'24px'});
            jq('.new-container').on("mouseenter",function(){
                jq('.glideimg').hide();
                jq('.zxbj-clac-yqbj').show();
                // 仅首次移入时记录点击流
                if(location.href.indexOf('riji/')>-1){
                    jq('.submit-btn').attr('searchtage','1_3_8_10');
                    jq('input[name="ptag"]').val('1_3_8_10');
                    // 装修日记页面
                    var hrefPattern = new RegExp('http://www.to8to.com/riji/[0-9]{0,7}/');
                    if(hrefPattern.test(location.href)){
                        if(ptagArr.join(';').indexOf('1_3_8_10') == -1){
                            ptagArr.push('1_3_8_10');
                            (typeof clickStream !== 'undefined') && clickStream.getCvParams('1_3_8_10');
                        }
                    }else{
                        if(ptagArr.join(';').indexOf('1_3_8_727') == -1){
                            ptagArr.push('1_3_8_727');
                            (typeof clickStream !== 'undefined') && clickStream.getCvParams('1_3_8_727');
                        }                        
                    }
                }else if(location.href.indexOf('/forum')>-1){
                    // 论坛页面
                    if(ptagArr.join(';').indexOf('1_3_8_1058') == -1){
                        ptagArr.push('1_3_8_1058');
                        (typeof clickStream !== 'undefined') && clickStream.getCvParams('1_3_8_1058');
                    }
                }
                // setParentIframeHeight();
            });
            // mouseleave收回预期
            jq('.new-container').on("mouseleave",function(){
                jq('.zxbj-clac-yqbj').hide();
                jq('.glideimg').show();
            });
        }
        // 使用ptag
        if(location.href.indexOf('/zs/')>-1){
            jq('.submit-btn').attr('searchtage','1_5_2_10');
            jq('input[name="ptag"]').val('1_5_2_10');
        }
        if(location.href.indexOf('/company/')>-1){
            jq('.submit-btn').attr('searchtage','1_5_1_4');
            jq('input[name="ptag"]').val('1_5_1_4');
        }
        if(location.href.indexOf('xiaoguotu.to8to')>-1){
            jq('.submit-btn').attr('searchtage','1_2_2_21');
            jq('input[name="ptag"]').val('1_2_2_21');
        }
        if(location.href.indexOf('/zwj/')>-1){
            // 找我家暂无埋点
            jq('.submit-btn').attr('');
            jq('input[name="ptag"]').val('');
        }
        // 根据面积显示户型
        jq('#bj_square').on('keyup',function(){
            if(jq('#bj_square').val()){
                jq('#bj_square').next('b').hide();
            }else{
                jq('#bj_square').next('b').show();
            }
            selectDoorModle(jq(this).val(),this,szxbj_shi,szxbj_ting,szxbj_chu,szxbj_wei,szxbj_yangtai);
        });
        jq('.new-container .zxbj-calc-con').find('[name="chkPhone"]').on('keyup keydown',function(){
            if(jq('.zxbj-calc-wrap').find('[name="chkPhone"]').val()){
                jq('.zxbj-calc-wrap').find('[name="chkPhone"]').next('b').hide();
            }else{
                jq('.zxbj-calc-wrap').find('[name="chkPhone"]').next('b').show();
            }
        });
    }
    //根据面积显示户型 将五个户型id传进以便复用
    function selectDoorModle(square,squareEle,shi,ting,chu,wei,yangtai){
        var square = Number(square);
        if (square + '' == 'NaN' || jq(squareEle).val() == '') {
            return
        };
        if (square < 60) {
            jq('#'+shi.id).val(1);
            jq('#'+ting.id).val(1);
            jq('#'+chu.id).val(1);
            jq('#'+wei.id).val(1);
            jq('#'+yangtai.id).val(1);
        } else if (square >= 60 && square < 90) {
            jq('#'+shi.id).val(2);
            jq('#'+ting.id).val(1);
            jq('#'+chu.id).val(1);
            jq('#'+wei.id).val(1);
            jq('#'+yangtai.id).val(1);
        } else if ( square >= 90 && square < 150) {
            jq('#'+shi.id).val(3);
            jq('#'+ting.id).val(2);
            jq('#'+chu.id).val(1);
            jq('#'+wei.id).val(2);
            jq('#'+yangtai.id).val(1);
        }
        else if (square >= 150) {
            jq('#'+shi.id).val(4);
            jq('#'+ting.id).val(2);
            jq('#'+chu.id).val(1);
            jq('#'+wei.id).val(2);
            jq('#'+yangtai.id).val(2);
        }
    }
    //滚动价格1
    function tabNum(num1){
        if(typeof runEnd !== "undefined"){
            clearTimeout(runEnd);
        }
        if(scrollMark){
            return;
        }
        var num2 = jq('.stochastic-price-p2');
        var randomNum = Math.round(Math.random() * 234 + 25) / 10;
        //判断随机数的大小  为满足00.0格式   加入‘0’
        var reg = new RegExp(/^(\+|-)?\d+$/);//如果为整数
        if (reg.test(randomNum)){
            randomNum = randomNum + '.0';
        }
        if(randomNum<10){
            randomNum = '0' + randomNum;
        }
        //把价格三个数字分出来
        var  stochastic_arr = new Array;
        stochastic_arr[0] = randomNum.toString().substr(0,1);
        stochastic_arr[1] = randomNum.toString().substr(1,1);
        stochastic_arr[2] = randomNum.toString().substr(3,1);
        if (stochastic_arr[0] == 0){
            stochastic_arr[0] = '';
        }
        single_tabNum(num1,num2,stochastic_arr);
    }
    //滚动价格2
    function single_tabNum(num1,num2,stochastic_arr){
        //第一个p下的  三个数字不同速度滚动
        num1.find('.new-tab-num11').animate({
            top: '-50px'
        }, 800, null, function(){
            num1.find('.new-tab-num11').text(stochastic_arr[0]).css({'top': '0px'});
        });
        num1.find('.new-tab-num12').animate({
            top: '-50px'
        }, 600, null, function(){
            num1.find('.new-tab-num12').text(stochastic_arr[1]).css({'top': '0px'});
        });
        num1.find('.new-tab-num14').animate({
            top: '-50px'
        }, 1000, null, function(){
            num1.find('.new-tab-num14').text(stochastic_arr[2]).css({'top': '0px'});
        });
        //第二个p下的  三个数字不同速度滚动
        num2.find('.new-tab-num21').text(stochastic_arr[0]).animate({
            top: '0px'
        }, 800, null, function(){
            num2.find('.new-tab-num21').text('').css({'top':'50px'});
            if(typeof runEnd !== "undefined"){
                clearTimeout(runEnd);
            }
            runEnd = setTimeout(function(){
                tabNum(num1, runEnd);
            }, 500);
        });
        num2.find('.new-tab-num22').text(stochastic_arr[1]).animate({
            top: '0px'
        }, 600, null, function(){
            if(typeof runEnd !== "undefined"){
                clearTimeout(runEnd);
            }
            num2.find('.new-tab-num22').text('').css({'top':'50px'});
            runEnd = setTimeout(function(){
                tabNum(num1, runEnd);
            }, 500);
        });
        num2.find('.new-tab-num24').text(stochastic_arr[2]).animate({
            top: '0px'
        }, 1000, null, function(){
            if(typeof runEnd !== "undefined"){
                clearTimeout(runEnd);
            }
            num2.find('.new-tab-num24').text('').css({'top':'50px'});
            runEnd = setTimeout(function(){
                tabNum(num1, runEnd);
            }, 500);
        });
    }
    //装修报价数据验证
    function validataCalc() {
        var chkArr = [{
            id: jq('.zxbj-calc-wrap  select[name="User_Shen"]')[0],
            parentTip: '.zxbj-yqbj',
            className: 'erro',
            labl: 'em',
            lablClass: '',
            info: [{
                reg: [0],
                tip: '请选择所在城市'
            }]
        },{
            id: jq('.zxbj-calc-wrap select[name="User_City"]')[0],
            parentTip: '.zxbj-yqbj',
            className: 'erro',
            labl: 'em',
            lablClass: '',
            info: [{
                reg: [0],
                tip: '请选择所在城市'
            }]
        },{
            id: jq('.zxbj-calc-wrap :text[name="square"]')[0],
            parentTip: '.zxbj-yqbj',
            className: 'erro',
            labl: 'em',
            lablClass: '',
            info: [{
                reg:[0],
                tip:'请输入建筑面积'
            },{
                reg:[/^\d+(\.[0-9]?[1-9]{1})?$/], 
                tip:'建筑面积不能超过两位小数'
            },{
                reg:[/^[0-4]{1}(\.[0-9]?[1-9]{1})?$/], 
                tip:'建筑面积必须大于5', negate:true
            },{
                reg:[/^[1-9]{1}[0-9]{0,2}(\.[0-9]?[1-9]{1})?$|^1000$/], 
                tip: '建筑面积必须是1000以内'
            }]
        }];
        var phoneArr = {
            id: jq('.zxbj-calc-wrap :text[name="chkPhone"]')[0], 
            parentTip: '.zxbj-yqbj',
            className: 'erro',
            labl: 'em',
            lablClass: '',
            info: [{
                reg: [0],
                tip: '请输入手机号码'
            },{
                reg: [/^1{1}[34578]{1}\d{9}$/],
                tip: '请输入正确的手机号码'
            }]
        };
        if(jq('.zxbj-yqbj :text[name="chkPhone"]').length>0){
            chkArr.push(phoneArr);
        }

        return simplifyCheck2(chkArr);
    }
    // 获取报价数据
    function getZXBJdata() {
        var wrap = jq('.zxbj-yqbj .zxbj-calc-con'),
            sendData = {};

            sendData.square = wrap.find(':text[name="square"]').val();
            sendData.shen = wrap.find('select[name="User_Shen"]').val();
            sendData.city = wrap.find('select[name="User_City"]').val();
            sendData.dangci = wrap.find(':hidden[name="dangci"]').val();
            sendData.ptag = jq('.zxbj-calc-wrap:visible').find(':hidden[name="ptag"]').val();
            sendData.phone = wrap.find(':text[name="chkPhone"]').val();
            sendData.shi = jq('#szxbj_shi').val();
            sendData.ting = jq('#szxbj_ting').val();
            sendData.chu = jq('#szxbj_chu').val();
            sendData.wei = jq('#szxbj_wei').val();
            sendData.yangtai = jq('#szxbj_yangtai').val();
            if(phonehistory.join(';').indexOf(jq('.zxbj-yqbj').find(':text[name="chkPhone"]').val()) != -1){
                sendData.phone = '';
            }
            if(location.href.indexOf('riji/')>-1){
                // 装修日记页面
                sendData.ptag = '1_3_8_727';
                var hrefPattern = new RegExp('http://www.to8to.com/riji/[0-9]{0,7}/');
                if(hrefPattern.test(location.href)){
                    sendData.ptag = '1_3_8_10';
                }
            }
            if(location.href.indexOf('/forum')>-1){
                // 论坛页面
                sendData.ptag = '1_3_8_1058';
            }

        return sendData;
    }
    //装修报价 数据提交
    function getQuote() {
        if (validataCalc()) {
            bindFlag = true;
            var zbData = getZXBJdata();
            zbData.modeltype = 9;
            zbData.nowstep = 1;
            //回调函数，返回值自定义处理。
            zbData.onFirstStepEnd = function(res){
                bindFlag = false;
                // 判断手机号是否存在
                jq('.zxbj-calc-result').show();
                if(phonehistory.join(';').indexOf(zbData.phone) == -1){
                    phonehistory.push(zbData.phone);
                }
                jq('.zxbj-yqbj').find(':text[name="chkPhone"]').val('');
                jq('.zxbj-yqbj').find(':text[name="chkPhone"]').parent().remove();
                    //停止定时器   防止出现用户报价后 价格又发生改变
                    if(typeof runEnd !== "undefined"){
                        clearTimeout(runEnd);
                    }
                    jq('#yqbj_total').html((res.to8to_totle_price/10000).toFixed(1));
                    jq('#materials_cost').html(res.to8to_cl_price);
                    jq('#labor_cost').html(res.to8to_rg_price);
                    jq('#design_fees').html(0);
                    jq('#quality_fees').html(0);
                    jq('#old_design_fees').find('span').html(res.normal_sj_price).end().show();
                    jq('#old_quality_fees').find('span').html(res.normal_zj_price).end().show();
                    jq('.new-container').off('mouseenter mouseleave');
                    jq('.zxbj-clac-yqbj').find('.glide-text').html('<span class="glide-text-left">—/</span><span class="glide-text-right">/—</span>毛坯房半包装修预估价');

                    // 显示隐藏为其他页面的用法  论坛及日记不一样
                    if(location.href.indexOf('riji/')>-1||location.href.indexOf('/forum')>-1){
                        jq('.zxbj-calc-result').show();
                        jq('.glideimg').hide();
                        jq('.stochastic-price-p1').css('display','none');
                        jq('.calc-header-total .new-tab-num25').css({'top': '0px','display':'block'}).text((res.to8to_totle_price/10000).toFixed(1));
                        jq('.calc-header-total .new-tab-num25').siblings().hide();
                        jq('.zxbj-clac-yqbj').show();
                        jq('.zxbj-calc-wrap:visible').find('.submit-btn').html("重新报价");
                    }else{
                        jq('.zxbj-calc-header').hide();
                        jq('.zxbj-calc-con').hide();
                        jq('.zxbj-clac-yqbj').show();                        
                    }
            };
            if(!window.tender) {
                jq.getScript('http://static.to8to.com/gb_js/tender.js?v=1449147278',function(){
                    var zbStart = new tender();
                    zbStart.init(zbData);
                });
                return;
            }
            var zbStart = new tender();
            zbStart.init(zbData);
        };
    }
    //电话号码加密
    function encryptPhone(sendData){
        var reg = /^1{1}[34578]{1}\d{9}$/,
            isPhone = sendData.phone ? reg.test(sendData.phone) : false;

        //旧版加密 rsastr=1存在
        if(sendData.rsastr==1){
            sendData.phone = encodeURIComponent(sendData.phone);
            sendData.phoneurlencode = 1;
        } else if (isPhone) {
            //新版加密添加当前标识
            sendData.rsadata = RSAUtilszb.encryptfun(sendData.phone+','+(Math.ceil(Math.random()*10))+','+Math.random())
            sendData.rsadata = encodeURIComponent(sendData.rsadata);
            sendData.rsastatus = 1;
            sendData.phoneurlencode = 1;
            sendData.phone = '';
        }
        return sendData;
    }
    function createGuid () {
        for (var a = "", c = 1; 32 >= c; c++) {
            var b = Math.floor(16 * Math.random()).toString(16),
                a = a + b;
            if (8 == c || 12 == c || 16 == c || 20 == c) a += ""
        }
        return this.guid = a += Math.ceil(1E6 * Math.random())
    }
})(jQuery)