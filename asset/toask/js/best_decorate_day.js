jQuery(function() {
    var gpmTmp = new GlobalProvincesModule();
    var username = getCookie('to8to_username');
    var wegitFlag = false;
    var repeatFlag = false,  //重复入库标志
        agineRuku = 0,
        bindFlag = false,
        designInfo = [],
        companyInfo = [];
        window.is_shenzhen = false;  // 默认当前城市不是深圳
        window.is_dongguan = false;  // 默认当前城市不是东莞
    if (jq('#windbox').val() == 'boxhref') {
          wegitFlag = true;
    }
        //申请超过五次
    function overFive(){
        var str = '<span style="float:left; width:100%; height:14px;line-height:14px;margin:0px 0 40px;text-align:center;*padding-bottom:20px">同一手机号最多申请5次</span>';
        jq('.window_box').remove();
        jq('.translucence_layer').remove();
        jq('.window_box').windowBox({
        width: 480,
        title: "",
        wbcStr: str
        });
    }
    function kgjrWindowBox(data,intoBaseData){
        var born =  jq('#born option:checked').text();
        var date = data[4];
        var startMonth = '';

        switch (true){
            case date == 10:
                startMonth = '抱歉！30天内暂无您装修开工的最佳吉日是，您装修开工的最佳吉日是';
                break;

            case date == 11:
                startMonth = '您好！30天内您装修开工的最佳吉日是';
                break;

            case date == 20:
                startMonth = '抱歉！90天内暂无您装修开工的最佳吉日是，您装修开工的最佳吉日是';
                break;

            case date == 21:
                startMonth = '您好！90天内您装修开工的最佳吉日是';
                break;

            case date == 31:
                startMonth = '您好！90天后您装修开工的最佳吉日是';
                break;

            default:

                break;
        }

        var TimeBetween = data[5] == 1 ? '15分钟内致电' : '24小时内致电' ;

        var str = '<div class="kgjr-winbox">\
                           <p>' + startMonth + '：</p>\
                           <p class="bold">' + data[0][0][0] + '年' + data[0][0][1] + '月' + data[0][0][2] + '日' + '  ' + data[2] + '  ' + data[0][1][1] + '  ' + data[0][1][2] + '<br><span>' + '【' + data[0][2][0] + '年 ' + data[0][2][1] + '月 ' + data[0][2][2] + '日 】</span></p>\
                           <p>若当天您无法开工，' + data[1][0][0] + '年' + data[1][0][1] + '月' + data[1][0][2] + '日' + '  ' + data[3] + '  ' + data[1][1][1] + data[1][1][2] + '【' + data[1][2][0] + '年 ' + data[1][2][1] + '月 ' + data[1][2][2] + '日】也是您装修开工的吉日。</p>\
                           <p class="p4"><i></i><span>结果已同步发送到您手机，土巴兔，互联网装修领导者，感谢您的使用。</span></p>\
                       </div>';

                    //数据是ok的，可以入库
                    var demo = startMonth+data[0][0][0] + '年' + data[0][0][1] + '月' + data[0][0][2] + '日' + '  ' + data[2] + '  ' + data[0][1][1] + '  ' + data[0][1][2] + ' ' + '【' + data[0][2][0] + '年 ' + data[0][2][1] + '月 ' + data[0][2][2] + '日 】若当天您无法开工，' + data[1][0][0] + '年' + data[1][0][1] + '月' + data[1][0][2] + '日' + '  ' + data[3] + '  ' + data[1][1][1] + data[1][1][2] + '【' + data[1][2][0] + '年 ' + data[1][2][1] + '月 ' + data[1][2][2] + '日】也是您装修开工的吉日';

                    //var intoBaseData = intoBaseData + '&demo=您的生肖是'+born+' '+demo;
                    var sendData = intoBaseData;
                        sendData.demo = '您的生肖是'+ born+' '+demo;
                    var zxjrStart = new tender();
                        zxjrStart.init(sendData);
                        //jq.ajax({
                        //   type: "POST",
                        //    url: "/zb/index.php",
                        //    data: sendData,
                        //    dataType: "json",
                        //    success: function(result) {
                        //            var res = JSON.parse(result);
                        //    }
                        //});


        jq('.window_box').windowBox({
            width: 478,
            title: '',
            wbcStr: str
        });
    }
    //Add 开工计算器 2015-8-26
    gpmTmp.def_province = ["省/市", ""];
    gpmTmp.def_city1 = ["市/地区", ""];
    gpmTmp.initProvince($('User_Shen_zxjr'));

    jq('#phone_zxjr_top, #yzm_zxjr,#quoted_area').placeholder();

    jq('.kgjr-yzm').click(function() {
        newverifypicMy(this);
    });

    //根据面积显示户型
    jq('#quoted_area').bind('keyup', function(){
        selectDoorModle(jq(this).val(), this);
    })

    jq('#zxjr-form').delegate( '.btn-cs', 'click', function() {
        //获取当前ptag
        var ptag = jq('.clickstream_tag').attr('data-ptag');
        //百度统计函数
        try{
            _hmt && _hmt.push(['_trackEvent', 'zb', 'submit', ptag]);
        }catch(e){

        }
        var chkArr = [{
                id: '#born',
                info: [{reg: [0], tip: '请选择您的生肖'}]

            },{
                id: '#phone_zxjr_top',
                info: [{reg: [0], tip: '请输入手机号'},
                    {reg: [/^1[34578][0-9]{1}[0-9]{8}$/], tip: '请输入正确手机号'}]
            }, {
                id: '#User_Shen_zxjr',
                info: [{reg: [0], tip: '请选择所在地'}]
            }, {
                id: '#User_City_zxjr',
                info: [{reg: [0], tip: '请选择所在地'}]
            }, {
                id: '#zxtime_zxjr',
                info: [{reg: [0], tip: '请选择装修时间'}]
            }, {
                id: '#yzm_zxjr',
                info: [{reg: [0], tip: '验证码'}]
            }];

        if (simplifyCheck2(chkArr)) {
            var sendData = {
                ptag: jq('#zxjr-form input[name="ptag"]').val(),
                born: jq("#born").val(),
                phone: jq("#phone_zxjr_top").val(),
                shen: jq("#User_Shen_zxjr").val(),
                city: jq("#User_City_zxjr").val(),
                zxtime_zxjr: jq("#zxtime_zxjr").val()
            };
            //var _data = jq('#zxjr-form').serialize();
            jq.ajax({
                type: 'post',
                url: '/yezhu/bestDecorateDay.php',
                data: sendData,
                dataType:'json',
                success: function(data) {
                    if (data == -1) {
                        overFive();

                    }else
                    {
                        //给用户的弹框
                        sendData.modeltype =4;
                        sendData.nowstep = 1;
                        sendData.autoPop = 2;
                        sendData.not_send_mobile = 1;
				//_data=_data+'&not_send_mobile_msg=1';
                        kgjrWindowBox(data,sendData);
                    }

                }
            });
        }
    });
        //改变下标为奇数的li的样式
    jq(document).ready(function () {
        jq('.budget-list li:odd').css('margin-left','50px');
    })
    //装修吉日改为报价
    jq('.count-btn').click(function(){
        if (validData()) {
            if (!wegitFlag) {
                getTotalDetailInfo('detail');
            }
        }
        detailedDisplay();
    })
      //数据校验
    function validData(){
        var chkArr = [{
            id: jq('.quoted-content .element select[name="shen"]')[0],
            className: 'form_error',
            labl: 'i',
            lablClass: 'ico_error',
            info: [{
                reg: [0],
                tip: '请选择所在地'
            }]
        },{
            id: jq('.quoted-content .element select[name="city"]')[0],
            parentTip: '.con_bj_cal ',
            className: 'form_error',
            labl: 'i',
            lablClass: 'ico_error',
            info: [{
                reg: [0],
                tip: '请选择所在地'
            }]
        },{
            id: jq('#quoted_area')[0],
            className: 'form_error',
            labl: 'i',
            lablClass: 'ico_error',
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
        var phoneRule = {
            id: jq('#phone_zxjr_top')[0],
            className: 'form_error',
            labl: 'i',
            lablClass: 'ico_error',
            info: [{
                reg: [0],
                tip: '请输入手机号码'
            },{
                reg: [/^1{1}[34578]{1}\d{9}$/],
                tip: '请输入正确的手机号码'
            }]
        };
        if (jq('#phone_zxjr_top').length > 0) {
            chkArr.push(phoneRule);
        };
        return simplifyCheck2(chkArr);
    }
      //获取所用数据
    function getTotalDetailInfo(type) {
        if (repeatFlag) {
            return;
        }
        if (wegitFlag)
            type = 'wegitFlag';
        repeatFlag = true;
        var mj = jq('#quoted_area').val(),
            zflag = wegitFlag ? 1 : 0;
        //var cdata = jq('#quoted-form').serialize() + '&secStepAjax=1&ajaxAgine=' + agineRuku;
        var data = formToJSON(jq('#quoted-form'));
        //var href = 'http://www.to8to.com/zb/zxbj2.php?windbox=boxhref&square='+data.square+'&User_Shen='+encodeURIComponent(data.shen)+'&User_City='+encodeURIComponent(data.city) + '&dangci='+ data.dangci+'&ptag='+data.ptag + '&zxtime=' + data.zxtime;
        data.type = type;
        data.nowstep = 1;
        data.modeltype = 9;
        data.onFirstStepEnd = function(data) {
            // 如果所选城市是深圳
            jq('.quoted-right').addClass('wechat-result');
            jq('.result-contain-ndg').hide();//初始化
            if(is_shenzhen){//选择深圳发标
                jq('#phone_zxjr_top').parent('.element').remove();
                jq('.quoted-point').remove();
                jq('.count-btn').addClass('count-btn-end');
                jq('.count-btn .text-js').html("重新计算");
                repeatFlag = false;
                jq('.kfname-new-name .kfn-city').text('深圳');
                jq('.kfname-new-name .kfn-name').text('馨馨');
                return;
            }
            if(is_dongguan){//选择东莞发标
                jq('#phone_zxjr_top').parent('.element').remove();
                jq('.quoted-point').remove();
                jq('.count-btn').addClass('count-btn-end');
                jq('.count-btn .text-js').html("重新计算");
                jq('.wechat-result .result-contain-ndg').show();
                repeatFlag = false;
                jq('.kfname-new-name .kfn-city').text('东莞');
                jq('.kfname-new-name .kfn-name').text('蓉蓉');
                return;
            }
            var yid = data.yid ? data.yid : 0;
            //var a = creatDetailBudget(data.priceInfo,data.res);

            designInfo = data.designInfo;
            companyInfo = data.companyInfo;
            //initOtherData(data.banbaoPrice, data.quanbaoPrice, mj, data.cityname, data.shi_dec);
            //priceInDOM(data.priceInfo,jq('.budget-list li b'),data.res,data.banbaoPrice,data.other);
            jq('.budget-list .classmany').css('width','45%');
            jq('.budget-list li b').css('width','51%');
            jq('.quoted-point').css('display','block');
            jq('.count-btn').addClass('count-btn-end');
            jq('.budget-price span').html('毛坯房半包装修预估价');
            jq('.count-btn .text-js').html("重新计算");

            BackDataMoney(data);
           /*bH = jq(document).height();
            outWrapDiff = bH - jq('#gloWrap').height();
            if (!bindFlag) {
                bindFlag = true;
            }*/
            repeatFlag = false;
            /*if (!data.workTime) { //是否工作时间段 true:是; false: 否
                workTime = '24小时';
                jq('.bottom_fiexd_box .sjybj_txt2').find('span').html(workTime);
            }*/
            //!wegitFlag && bjWinBoxStep1(data.banbaoPrice, data.quanbaoPrice, data.yid);
        };
        var sendMsg = new tender();
        sendMsg.init(data);

    }
    function detailedDisplay(){
        var zxType = jq('.ele_bt_on').text();//房屋类型
        if (zxType == '新房装修') {
            jq('.info_hd>h3>em').text('');
        }else{
            jq('.info_hd>h3>em').text('详细报价清单以新房为准（旧房报价=新房报价+面积*100）');
        }
    }
    function formToJSON(formEle) {
        var data = formEle.serializeArray();
        var dataObj = {};
        for (var i in data) {
            dataObj[data[i].name] = data[i].value;
        }
        return dataObj;
    }
    //得到价格
    function priceInDOM(data,ele,homeMsg,banbao_price,other){
        var shi = 0;
        var ting = 0;
        var chu = 0;
        var wei = 0;
        var yang = 0;
        for(var i = 0; i< homeMsg.length; i++) {
            if(homeMsg[i].key=='shi_arr[]')
            {
                shi += data[i].price;
            }

            if(homeMsg[i].key=='ting_arr[]')
            {
                ting += data[i].price;
            }
            if(homeMsg[i].key=='chu_arr[]')
            {
                chu += data[i].price;
            }
            if(homeMsg[i].key=='wei_arr[]')
            {
                wei += data[i].price;
            }
            if(homeMsg[i].key=='yangtai_arr[]')
            {
                yang += data[i].price;
            }

        }
        var qita = banbao_price-shi-ting-chu-wei-yang;
        jq('#quoted_bedroom').html(shi);
        jq('#quoted_saloon').html(ting);
        jq('#quoted_kitchen').html(chu);
        jq('#quoted_toilet').html(wei);
        jq('#quoted_balcony').html(yang);
        jq('.budget-price b').html(((banbao_price)/10000).toFixed(1));
        jq('#quoted_other').html(qita);



    }
    //End add

    //接收数据并展示在页面
     function BackDataMoney(data){
        var total_price = (data.to8to_totle_price/10000).toFixed(1);
        jq('#budget_prices').html(total_price); //装修预算
        jq('#phone_zxjr_top').parent('.element').remove();
        jq('#quoted_rg_prices').html(data.to8to_rg_price);  //人工费
        jq('#quoted_cl_prices').html(data.to8to_cl_price);  //材料费
        //jq('#quoted_sj_prices').html(data.normal_sj_price);  //设计费
        jq('#sj_prices').html('<span id="quoted_sj_prices">0</span><em>元</em><del class="to8to_zj">'+data.normal_sj_price+'元</del>');
        //jq('#zj_price').html(data.normal_zj_price);  //质检费
        jq('#zj_prices').html('<span id="quoted_zj_prices">0</span><em>元</em><del class="to8to_zj">'+data.normal_zj_price+'元</del>');
    }

    //根据面积显示户型
    function selectDoorModle(square, squareEle){
        var square = Number(square);
        if (square + '' == 'NaN' || jq(squareEle).val() == '') {
            return
        };
        if (square < 60) {
            jq('#shi').val(1);
            jq('#ting').val(1);
            jq('#chu').val(1);
            jq('#wei').val(1);
            jq('#yangtai').val(1);
        } else if (square >= 60 && square < 90) {
            jq('#shi').val(2);
            jq('#ting').val(1);
            jq('#chu').val(1);
            jq('#wei').val(1);
            jq('#yangtai').val(1);
        } else if ( square >= 90 && square < 150) {
            jq('#shi').val(3);
            jq('#ting').val(2);
            jq('#chu').val(1);
            jq('#wei').val(2);
            jq('#yangtai').val(1);
        }
        else if (square >= 150) {
            jq('#shi').val(4);
            jq('#ting').val(2);
            jq('#chu').val(1);
            jq('#wei').val(2);
            jq('#yangtai').val(2);
        }
    }
});
