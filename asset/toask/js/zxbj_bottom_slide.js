var _scriptMd5 = document.createElement('script');
_scriptMd5.type = 'text/javascript';
_scriptMd5.src = "http://static.to8to.com/gb_js/jQuery.md5.js";
document.getElementsByTagName('head')[0].appendChild(_scriptMd5);
window.phone_History_Arr_=[];
//是否能自动上滑
var voluntarily_slide = voluntarily_slide || false;

var slide_height = slide_height ||　jq('body').height();

var slide_show_ptag = slide_show_ptag || '';//不同页面会传不同的ptag
// 深圳市的联动事件
window.bot_is_shenzhen = false;
window.bot_is_dongguan = false;
(function(){
    var jq = jQuery.noConflict();
    var str =
        '<div class="bottom_slide_click"></div>'+    
        '<div class="slide_box_shade"></div>'+ 
        '<div class="zxbj_details">'+    
            '<div class="all_Calc_Container Calc_Container_zxys">' +
                '<div class="bottom_slide_img"></div>' +
                '<div class="bottom_slide_down bottom_slide_up"></div>' +
                '<div class="zxbj_zxys">' +
                       '<div class="con_bj clear">' +
                            '<!-- calculate -->' +
                            '<div class="con_bj_cal col_l">' +
                                '<h3 class="calputer_tit">装修计算器<span>今天已有 <em class="zxys_num_man"></em> 位业主获取了装修预算</span></h3>' +
                                '<form id="new_zxys_info">' +
                                    '<div class="mod_form bj_form">' +
                                        '<div class="form_line">' +
                                            '<label for="" class="label"><em class="label_start">*</em>所在城市：</label>' +
                                            '<div class="element">' +
                                                '<div class="province-town clear">' +
                                                    '<input type="hidden" name="dangci" value="jianzhuang">' +
                                                    '<select id="zxys_Shen" name="shen" class="select_Shen" onchange="changeProvince(\'zxys_Shen\',\'zxys_City\',\'zxys_Town\');">' +
                                                        '<option value="">省/市</option>' +
                                                    '</select>' +
                                                    '<select id="zxys_City" name="city" class="select_City">' +
                                                        '<option value="">市/地区</option>' +
                                                    '</select>' +
                                                    '<div style="display:none">' +
                                                        '<select class="langSelect" id="zxys_Town" name="town">' +
                                                            '<option value="">县/市</option>' +
                                                        '</select>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="form_line">' +
                                            '<label for="" class="label" ><em class="label_start">*</em>房屋面积：</label>' +
                                            '<div class="element">' +
                                                '<div class="text_wrap">' +
                                                    '<input type="text" class="text area_text" name="square" id="zxys_square">' +
                                                    '<em class="text_lbl">输入您的房屋面积</em>' +
                                                    '<em class="unit" style="color: black;">m&sup2;</em>' +
                                                '</div>' +
                                                '<p class="text_area">* 输入面积小于30㎡时，报价结果按30㎡计算</p>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="form_line">' +
                                            '<label for="" class="label"><em class="label_start">*</em>房屋户型：</label>' +
                                            '<div class="element">' +
                                                '<div class="zxgs-hx clear">' +
                                                    '<select name="shi" id="zxys_shi" class="first_line">' +
                                                        '<option value="1">1室</option>' +
                                                        '<option value="2">2室</option>' +
                                                        '<option value="3">3室</option>' +
                                                        '<option value="4">4室</option>' +
                                                        '<option value="5">5室</option>' +
                                                        '<option value="6">6室</option>' +
                                                    '</select>' +
                                                    '<select name="ting" id="zxys_ting" class="first_line">' +
                                                        '<option value="1">1厅</option>' +
                                                        '<option value="2">2厅</option>' +
                                                        '<option value="3">3厅</option>' +
                                                        '<option value="4">4厅</option>' +
                                                        '<option value="5">5厅</option>' +
                                                        '<option value="6">6厅</option>' +
                                                    '</select>' +
                                                    '<select name="chu" id="zxys_chu" class="first_line">' +
                                                        '<option value="1">1厨</option>' +
                                                        '<option value="2">2厨</option>' +
                                                        '<option value="3">3厨</option>' +
                                                    '</select>' +
                                                    '<select name="wei" id="zxys_wei" class="second_line">' +
                                                        '<option value="1">1卫生间</option>' +
                                                        '<option value="2">2卫生间</option>' +
                                                        '<option value="3">3卫生间</option>' +
                                                        '<option value="4">4卫生间</option>' +
                                                        '<option value="5">5卫生间</option>' +
                                                        '<option value="6">6卫生间</option>' +
                                                    '</select>' +
                                                    '<select name="yangtai" id="zxys_yangtai" class="second_line">' +
                                                        '<option value="1">1阳台</option>' +
                                                        '<option value="2">2阳台</option>' +
                                                        '<option value="3">3阳台</option>' +
                                                        '<option value="4">4阳台</option>' +
                                                        '<option value="5">5阳台</option>' +
                                                        '<option value="6">6阳台</option>' +
                                                    '</select>' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="form_line" id="zxys_phoneInput">' +
                                            '<label for="" class="label" ><em class="label_start">*</em>手机号码：</label>' +
                                            '<div class="element">' +
                                                '<div class="text_wrap">' +
                                                    '<input id="zxys_phonenumber" type="text" class="text phonetext" name="phone">' +
                                                    '<em class="text_lbl">报价结果将发送到您的手机</em>' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="form_line">' +
                                            '<a href="javascript:void(0);" class="calc-btn-start" id="zxys_calc_btn">' +
                                                '<label for="zxys_calc_btn" id="zxys_btn_calc" class="calcstart">开始计算</label>' +
                                                '<!-- 开始计算 -->' +
                                                '<input type="hidden" id="zxys_myptag" name="ptag" value="1_4_2_3">' +
                                            '</a>' +
                                        '</div>' +
                                    '</div>' +
                                '</form>' +
                            '</div>' +
                            '<!-- results -->' +
                            '<div class="con_bj_res col_l">' +
                                '<!--<h3>计算结果</h3>-->' +
                                '<div class="zxys_result"><span class="zxys-result-span">您的装修预算</span><b id="bprice">？</b><span>元</span></div>' +
                                '<div class="zxgs-list">' +
                                    '<ul class="zxgs-list-before">' +
                                        '<li class=""><span>材料费：</span><strong id="materialPay"><em>？</em>元</strong></li>' +
                                        '<li class=""><span>人工费：</span><strong id="artificialPay"><em>？</em>元</strong></li>' +
                                        '<li class=""><span>设计费：</span><strong id="designPay"><em>？</em>元</strong></li>' +
                                        '<li class=""><span>质检费：</span><strong id="qualityPay"><em>？</em>元</strong></li>' +
                                    '</ul>' +
                                '</div>' +
                                '<div class="bj_explain zxys_explain" style="display:none">' +
                                    '<p class="attention holiday-text"><b>*</b>稍候装修管家将回电您，免费提供装修咨询服务</p>' +
                                    '<p class="text-none"><b>*</b>因材料品牌及工程量不同，具体报价以量房实测为准</p>' +
                                '</div>' +
                                '<div class="result-head">' +
                                     '<p>报价短信已发送到您的手机，请注意查收！</p>' +
                                     '<p class="recall holiday-text">稍后装修管家将回电您，免费提供装修咨询服务</p>' +
                                '</div>' +
                                '<div class="result-contain-bt">' +
                                   '<p class="result-con-head">装修怕上当？问问靠谱的人' +
                                   '<div class="weixin-portrait-gif"></div>'+
                                   '<div class="weixin-arrow-animated"></div>'+
                                    '<div class="left">' +
                                        '<p><span class="bottom-zxgw-city">深圳装修顾问  </span><span class="kfname bottom-kfname">土巴兔-馨馨</span></p>' +
                                        '<p class="wechat-slogan">（四年装修行业经验）</p>' +
                                    '</div>' +
                                    '<div class="right">' +
                                        '<p class="clear"><em></em>微信扫一扫 加好友</p>' +
                                    '</div>' +
                                    '<p class="result-bottom"><span>24小时咨询</span>咨询装修报价、户型设计等装修疑问</p>' +
                                '</div>' +
                                '<div class="result-contain-dg"></div>'+
                            '</div>' +
                            '<div class="tdc-box"><div class="tdc-box-img"></div></div>'+
                    '</div>' +
                '</div>' +

            '</div>'+
        '</div>';
    jq('.bottom_slide_content').append(str); 
    an_arrow_bot();//箭头左右动画
    //初始化页面根据ip接口得到的城市 展示对应微信小号
    jq(document).ready(function(){
        var city = city_from_ip();//获得微信小号
        city_operate(city);//初始化对应操作
    });
    //切换城市方法   
    jq('.bottom_slide_content').on('change','#zxys_City',function(){
        var city = jq('#zxys_City').val();
        city_operate(city);//切换城市方法
        changeTown('zxys_Shen','zxys_City','zxys_Town');
    });
    window.zxys_gpm = new GlobalProvincesModule;            //城市类
    zxys_gpm.def_province = ["省/市", ""];
    zxys_gpm.def_city1 = ["市/地区", ""];
    zxys_gpm.initProvince($('zxys_Shen'));
    zxys_gpm.initCity1($('zxys_City'), zxys_gpm.getSelValue($('zxys_Shen')));
    //浮框外部基本功能 
    var jq = jQuery.noConflict();       
    var slide_flag = false;//表示用户是否进行了操作
    var front_scr = 0;//前一个滚动条距离
    var now_scr = 0;//现在的滚动条距离
    var slide_height_current = 2500;
    var bg_flag = false;//曝光统计
    var new_slideFlag = false;//底部浮框是否已经完整展现过 
    var num_flag = false;//是否已经调用参数接口
    validate_shc(slide_height);//验证是否存在这个限制参数
    function validate_shc(slide_height){        
        if (slide_height) {
            slide_height_current = slide_height;
            return;
        };        
    }    
    jq('#zxys_myptag').val(slide_show_ptag);    
    var bg_ptag = jq('#zxys_myptag').val() || '1_3_7_874';//当前展示页面的ptag
    jq(window).scroll(function(){        
        if (slide_flag) {//用户进行了操作
            return;
        }
        //根据页面标识限制是否能自动上滑
        if (voluntarily_slide) {
            return;
        };
        //完整展示过浮框  并点击关闭  因为数据问题暂时不限制
        // if (getCookie('new_slideFlag') == 'true') {
        //     return;
        // };
        //已经成功发标 就不自动展示
        if (getCookie('fabiao_flag') == 'true') {
            return;
        };
        //出现了弹框就不自动上滑
        if (typeof(CommonTenderPop) == "object") {
            if (CommonTenderPop.showFlag) {
                return;
            };  
        };        
        now_scr =jq(window).scrollTop();
        if ((now_scr+jq(window).height()-slide_height_current) > 0) {
            //浮框定位bottom < -320
            if ((parseInt(jq('.bottom_slide_box').css('bottom'))+(now_scr - front_scr)) <-320) {
                front_scr = jq(window).scrollTop();
                jq('.bottom_slide_box').css('bottom','-320px');
                jq('.bottom_slide_down').addClass('bottom_slide_up');
                shake();
                return;  
            }
            //浮框定位bottom > 0
            if ((parseInt(jq('.bottom_slide_box').css('bottom'))+(now_scr - front_scr)) > 0) {
                front_scr = jq(window).scrollTop();
                jq('.bottom_slide_box').css('bottom','0');
                jq('.bottom_slide_up').stop().removeAttr('style'); 
                jq('.bottom_slide_down').removeClass('bottom_slide_up');
                if (!bg_flag) {
                    (typeof clickStream !== 'undefined') && clickStream.getCvParams(bg_ptag); 
                    bg_flag = true;
                };
                //标识为完整展示过
                new_slideFlag = true;
                //触发上下滑就不触发弹窗--
                interflowPop();
                return;
            };
            //触发上下滑就不触发弹窗--
            interflowPop();
            if (now_scr - front_scr > 0) {
                jq('.bottom_slide_box').css('bottom',(parseInt(jq('.bottom_slide_box').css('bottom'))+(now_scr - front_scr))+'px');
                front_scr = jq(window).scrollTop();                    
            }else{
                jq('.bottom_slide_box').css('bottom',(parseInt(jq('.bottom_slide_box').css('bottom'))+(now_scr - front_scr))+'px');
                front_scr = jq(window).scrollTop();
            }
        }else{            
            front_scr = jq(window).scrollTop();
            jq('.bottom_slide_box').css('bottom','-320px');
            jq('.bottom_slide_down').addClass('bottom_slide_up');
            shake();
            return; 
        }
    });        
    //关闭浮框按钮
    jq('.bottom_slide_close').click(function(){
        jq('.bottom_slide_box').remove();
    });
    //箭头动画
    function an_arrow_bot(){        
        jq('.weixin-arrow-animated').animate({
            'left' : '173px'
        },500,function(){
            jq('.weixin-arrow-animated').animate({
                'left' : '153px'
            },500,function(){
                    an_arrow_bot();//递归
            });
         });
        
    }
    //触发上下滑就不触发弹窗--
    function interflowPop(){
        if (typeof(CommonTenderPop) == "object") {
            jq(document).ready(function(){
               CommonTenderPop.destory(); 
           });                
        };        
        //触发上滑调用  数据接口        
        if (!num_flag || jq('.bottom_slide_box .zxys_num_man').text() == '') {
            setTimeout(function(){
                getApplySum();
                num_flag = true;
            },1000);   
        };        
    }
    function getApplySum(){
        jq.ajax({
            type:'get',
            dataType:'jsonp',
            url:'http://www.to8to.com/zb/sumTender.php',
            data:'act=xiaoguotu',
            cache:true,
            jsonpCallback: "jsonpCallback",//服务端用于接收callback调用的function名的参数
            success:function(msg){
                jq('.zxys_num_man').html(msg.num);
            }
        })
    }
    //初始化上下滑方法
    shake();
    //不断上下滑动        
    function shake(){
        if (jq('.bottom_slide_up').css('top') == '-60px' || jq('.bottom_slide_down').css('top') == '-50px') {
            jq('.bottom_slide_up').stop().animate({top:'-42px'},500,function(){
                shake();    
            });
        }
        if (jq('.bottom_slide_up').css('top') == '-42px') {
            jq('.bottom_slide_up').stop().animate({top:'-60px'},500,function(){
                shake();    
            });
        }    
    }                
    jq('.bottom_slide_click').click(function(){
        slide_flag = true;
        if (jq('.bottom_slide_down').hasClass('bottom_slide_up')) {
            jq('.bottom_slide_box').stop().animate({bottom:'0'},500,function(){
                jq('.bottom_slide_up').stop().removeAttr('style'); 
                jq('.bottom_slide_down').removeClass('bottom_slide_up');
                jq('.bottom_slide_down').css('top','-50px');
                //标识为完整展示过
                new_slideFlag = true; 
                //触发上下滑就不触发弹窗--
                interflowPop();                   
            });
            if (!bg_flag) {
                (typeof clickStream !== 'undefined') && clickStream.getCvParams(bg_ptag); 
                bg_flag = true;
            };                  
        }else{
            jq('.bottom_slide_box').stop().animate({bottom:'-320px'},500,function(){
                jq('.bottom_slide_down').addClass('bottom_slide_up');
                shake();
            });
            if (new_slideFlag) {
                setCookie('new_slideFlag','true',1*60*1000);
            };   
        }


        var date1 = new Date('2017/1/7 18:30:00');
            date1_unix = date1.getTime();
        var date2 = new Date('2017/1/9 23:59:59');
            date2_unix = date2.getTime();
        var date = new Date();
            date_unix = date.getTime();
        if(date1_unix<=date_unix && date_unix<=date2_unix){
            jq('.holiday-text').html('亲爱的业主，因公司年会放假(1月8日-1月9日)，很抱歉未能及时与您联系。我们将于1月10日立即给您回电，免费提供装修咨询服务。');
            jq('.con_bj_res .result-head').css({'width':'380px','margin':'0 auto'});  
            jq('.con_bj_res .zxgs-list').css({'margin-top':'2px'});
            jq('.text-none').remove();    
        }

        var year1 = new Date('2017/1/22 18:30:00');
            year1_unix = year1.getTime();
        var year2 = new Date('2017/2/2 23:59:59');
            year2_unix = year2.getTime();
        var year = new Date();
            year_unix =  year.getTime();
        if(year1_unix<=year_unix && year_unix<=year2_unix){
            jq('.holiday-text').html('亲爱的业主，因春节期间放假(1月23日-2月2日)，很抱歉未能及时与您联系。年后我们将第一时间给您回电，免费提供装修咨询服务！'); 
            jq('.con_bj_res .result-head').css({'width':'380px','margin':'0 auto'});  
            jq('.con_bj_res .zxgs-list').css({'margin-top':'2px'});
            jq('.text-none').remove();    
        }
        
    });
    //浮框内部功能
    jq('.Calc_Header').find('ul li').on('click',function(e){
        var headArr = ['Calc_Container_zxys','Calc_Container_zxcl','Calc_Container_zxgs','Calc_Container_zxdk','Calc_Container_jiri'],
            cssArr  = ['firston','secondon','thirdon','fourthon','fifthon'];
        jq(this).parent().removeClass().addClass(cssArr[jq(this).index()]);
        jq('.all_Calc_Container').removeClass().addClass('all_Calc_Container').addClass(headArr[jq(this).index()]);
        var ptag = jq(this).attr('dataptag');
        (typeof clickStream !== 'undefined') && clickStream.getCvParams(ptag);
    }); 
    bottom_fb();
    function bottom_fb(){
        var bH = jq(document).height(),
            outWrapDiff = bH - jq('#gloWrap').height(),
            browerObj = checkBrowser(),
            ie6 = false,
            bindFlag = false,
            wechatError = false,
            qrcodeData = {},
            qrcodeTimer = 0;

        var zxbj_index = {
            init: function() {

                //初始化客服弹窗
                popCustSrvWin && popCustSrvWin.init();

                initEvent();
            }
        };

        var golbalYYID,
            countDesign = 0,
            countCompany = 0,
            designInfo = [],
            companyInfo = [],        
            repeatFlag = false,  //重复入库标志
            repeatGetMobileYz = true;
        agineRuku = 0;
        workTime = '15分钟';

        var wegitFlag = false;
        if (jq('#windbox').val() == 'boxhref') {
            wegitFlag = true;
        }
        var username = getCookie('to8to_username');
        if (username) {
            jq('.zxbj_read_box').hide();
        }
        jq('.blo_bd').css('display','none');
        //查看报价明细按钮
        jq('.res_btn_box').on('click','a.res_btn',function(){ 
            if (jq('.res_btn').hasClass('active')) {
                jq('.blo_bd').css('display','block');
                jq(document).scrollTop(1050);
                (typeof clickStream !== 'undefined') && clickStream.getCvParams('1_4_19_424');
            };
        })
        jq('.ele_b').on('click','i',function(){
            jq(this).parent().find('i').removeClass('ele_bt_on');
            jq(this).parent().find('input').attr('value','');
            jq(this).addClass('ele_bt_on');
            jq('#zxtype').attr('value',jq(this).text());
        })
        var squareRemind = null;
        //根据面积显示户型 
        jq('#zxys_square').on('keyup', function(){
           
            selectDoorModle(jq(this).val(), this);
        })
        jq('#zxys_square').on('keyup', function(){
            if (squareRemind) {
                clearTimeout(squareRemind);
            };
            var square = Number(jq(this).val());
          
            if (square + '' == 'NaN' || jq(this).val() == '' || square >= 30) {
                jq('.zxbj_zxys .text_area').hide().siblings('.text_wrap').css('paddingBottom','10px');
                return
            };
            squareRemind = setTimeout(function(){
                if (square >= 5 && square< 30) {
                   jq('.zxbj_zxys .text_area').show().siblings('.text_wrap').css('paddingBottom','18px');
                };
            },300)
        })
        //表单效果
        jq('.bottom_slide_box .text_wrap > input').val("");
        jq('.bottom_slide_box .text_wrap > .text_lbl').click(function () {
            jq(this).parent().find('input').focus().trigger('click');
        });
        jq('.bottom_slide_box .text_wrap > input').on('keydown', function () {
            jq(this).parent().find('.text_lbl').hide();
        });
        jq('.text_wrap > input').blur(function () {
            if (jq(this).val() == '') jq(this).parent().find('.text_lbl').show();
        });
        jq('div.con_bj_cal').on('click', '#zxys_calc_btn', function(){

            //获取当前ptag
            var ptag = jq('#zxys_myptag').val();
            //百度统计函数
            try {
                _hmt && _hmt.push(['_trackEvent', 'zb', 'submit', ptag]);
            } catch (e) {

            }
            if (validData()) {                                
                if (!username && !wegitFlag) {
                    if (jq('#zxys_myPtag').val() == "1_4_7_1") {
                        jq('#zxys_myPtag').val('1_4_2_3');
                        clickStream.getCvParams('1_4_2_3');
                    } else {
                    };                    
                    getTotalDetailInfo('detail');
                } else {
                    jq('#zxys_myPtag').val('1_4_7_1');
                    getTotalDetailInfo('detail');
                }
                jq('#endprice').css('display','block');
                detailedDisplay();           
            }
        })

        //数据校验
        function validData(){
            var chkArr = [{
                id: '#zxys_Shen',
                className: 'form_error',
                labl: 'em',
                lablClass: 'ico_error',
                info: [{
                    reg: [0],
                    tip: '请选择所在地'
                }]
            },{
                id: '#zxys_City',
                parentTip: '.con_bj_cal ',
                className: 'form_error',
                labl: 'em',
                lablClass: 'ico_error',
                info: [{
                    reg: [0],
                    tip: '请选择所在地'
                }]
            },{
                id: '#zxys_square',
                className: 'form_error',
                labl: 'em',
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
                id: '#zxys_phonenumber',
                className: 'form_error',
                labl: 'em',
                lablClass: 'ico_error',
                info: [{
                    reg: [0],
                    tip: '请输入手机号码'
                },{
                    reg: [/^1{1}[34578]{1}\d{9}$/],
                    tip: '请输入正确的手机号码'
                }]
            };

            if (jq('#zxys_phoneInput').length > 0) {
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
            var mj = jq('.area_text').val(),
                zflag = wegitFlag ? 1 : 0;

            var data = formToJSON(jq('#new_zxys_info'));
            data.type = type;
            data.nowstep = 1;
            if(phone_History_Arr_.join(':').indexOf(data.phone)!= -1){
                data.phone = '';
            }

            //需要重新定义一个modeltype
            data.modeltype = 9;
            data.method = 'baojiaTb';
            data.onFirstStepEnd = function(resdata) {
                jq('.con_bj_res').addClass('bot-wechat-result');
                // 深圳城市结果态
                if(bot_is_shenzhen){
                    jq('#zxys_phoneInput').remove();
                    jq('#zxys_calc_btn').addClass('calc-btn-end');
                    jq('#zxys_btn_calc').html('重新计算');
                    repeatFlag = false;
                    return;
                }
                if(bot_is_dongguan){
                    jq('#zxys_phoneInput').remove();
                    jq('#zxys_calc_btn').addClass('calc-btn-end');
                    jq('#zxys_btn_calc').html('重新计算');
                    repeatFlag = false;
                    jq('.bot-wechat-result .result-contain-dg').show();
                    return;                    
                }
                //返回数据
                jq('#zxys_calc_btn').addClass('calc-btn-end');
                jq('#zxys_btn_calc').html('重新计算');
                setCookie('fabiao_flag','true',1*24*60*60*1000);
                creatDetailBudget(resdata);
                if(phone_History_Arr_.join(':').indexOf(data.phone) == -1){
                    phone_History_Arr_.push(data.phone);
                }
                repeatFlag = false;
            };
            var sendMsg = new tender();
            sendMsg.requestURL = 'http://to8tozb.to8to.com/zb/zb.php';
            sendMsg.init(data);

        }
        function formToJSON(formEle) {
            var data = formEle.serializeArray();
            var dataObj = {};
            for (var i in data) {
                dataObj[data[i].name] = data[i].value;
            }
            return dataObj;
        }
        function detailedDisplay(){
            var zxType = jq('.ele_bt_on').text();//房屋类型
            if (zxType == '新房装修') {
                jq('.info_hd>h3>em').text('');
            }else{
                jq('.info_hd>h3>em').text('详细报价清单以新房为准（旧房报价=新房报价+面积*100）');
            }
        }
        //底部二维码
        function createQrcode(data) {
            jq.ajax({
                url: 'http://www.to8to.com/api/weixin/run.php',
                data: {action: 'createQrcode',cookie_id: 'zxbj_qrcode',data: data,type: 7},
                type: "GET",
                dataType: 'jsonp',
                success: function(data) {
                    if (data.code == '0') {
                        jq('#zxbj_qrcode_wrap').attr('src', data.url);
                        jq('.bottom_fiexd_box').show();
                        qrcodeData = data;
                        //loopQrcode();
                    } else {
                        jq('.bottom_fiexd_box').hide();
                        wechatError = true;
                    }
                },
                error: function() {
                    wechatError = true;
                    jq('.bottom_fiexd_box').hide();
                }
            });
        }

        function createFreeServiceId() {
            var obj = jq('#zxbj_zxbx').parents('.price_item').find('.item_hd');

            obj.attr('id', 'freeService');
        }

        //生成一个房间的数据
        function creatOneProject(obj, i) {
            var len = obj.detail.length,
                str = '<div class="price_item" onclick="clickStream.getCvParams(\'1_4_7_14\');">';

            if(i == 0) {
                str = '<div class="price_item price_item_unfold" onclick="clickStream.getCvParams(\'1_4_7_14\');">';
            }

            str += '<div class="item_hd"><h3><i class="zxbj_ico_arrow"></i>'+obj.name+'</h3><span class="item_price"><em>'+obj.price+'</em>元</span><em class="item_price_tips">提示：该价格仅为估算价格，精准价格以量房为准</em></div><div class="item_bd"><table><tbody><tr class="price_t"><td class="col_1">空间工程</td><td class="col_2">工程项目</td><td class="col_3">工程量</td><td class="col_4">单价</td><td class="col_5">总价</td><td class="col_6">工艺标准</td></tr>';
            for(var key in obj.detail){
                str += creatOneItem(obj.detail[key]);
            }
            if(obj.tipSrc)
            {
                str += '<tr class="item_price_tip"><td colspan="8">土巴兔质检提醒您：<a href="'+obj.tipSrc+'" target="_blank"><em>'+obj.tip+'</em>[更多]</a></td></tr>';
            }
            str += '</table></tbody></div></div>';

            return str;
        }
        //生成列表的一行
        function creatOneItem(obj) {
            var list = obj.list,
                len = list.length,
                str = '';

            str += '<tr><td class="col_1" rowspan="'+len+'">'+obj.name+'</td><td class="col_2">'+list[0].des+'</td><td class="col_3"><span>'+list[0].num+'</span></td><td class="col_4"><span>'+Math.floor(list[0].unitprice)+'</span></td><td class="col_5"><span>'+list[0].total+'</span></td><td class="col_6">'+list[0].note+'</td></tr>';

            for(var i = 1; i < len; i++) {
                str += '<tr><td class="col_2">'+list[i].des+'</td><td class="col_3"><span>'+list[i].num+'</span></td><td class="col_4"><span>'+Math.floor(list[i].unitprice)+'</span></td><td class="col_5"><span>'+list[i].total+'</span></td><td class="col_6">'+list[i].note+'</td></tr>';
            }

            return str;
        }
        //生成详细装修预算表
        //var priceInfo = [{name: '客厅工程1', price: 1111, tipSrc:'http://www.taobao.com', tip:'1整体橱柜装修看好这六点可远离陷阱...', detail: [{name: '墙面1', list: [{des: '铲除墙面腻子层', num: 100, unitprice: 1, total: 3, note: '铲除墙面腻子层（铲到红砖另计）'}, {des: '墙面手刷乳胶漆（多乐士金装五合一，一底两面）', num: 200, unitprice: 2, total: 4, note: '多乐士金装五合一（一底两面）,滚筒,砂皮,刷把等'}]}, {name: '墙面2', list: [{des: '铲除墙面腻子层2', num: 100, unitprice: 1, total: 3, note: '铲除墙面腻子层（铲到红砖另计）2'}]}]}, {name: '客厅工程2', price: 1111, tipSrc:'http://www.taobao.com', tip:'2整体橱柜装修看好这六点可远离陷阱...', detail: [{name: '墙面1', list: [{des: '铲除墙面腻子层', num: 100, unitprice: 1, total: 3, note: '铲除墙面腻子层（铲到红砖另计）'}, {des: '墙面手刷乳胶漆（多乐士金装五合一，一底两面）', num: 200, unitprice: 2, total: 4, note: '多乐士金装五合一（一底两面）,滚筒,砂皮,刷把等'}]}, {name: '墙面2', list: [{des: '铲除墙面腻子层2', num: 100, unitprice: 1, total: 3, note: '铲除墙面腻子层（铲到红砖另计）2'}]}]}, {name: '客厅工程3', price: 1111, tipSrc:'http://www.taobao.com', tip:'3整体橱柜装修看好这六点可远离陷阱...', detail: [{name: '墙面1', list: [{des: '铲除墙面腻子层', num: 100, unitprice: 1, total: 3, note: '铲除墙面腻子层（铲到红砖另计）'}, {des: '墙面手刷乳胶漆（多乐士金装五合一，一底两面）', num: 200, unitprice: 2, total: 4, note: '多乐士金装五合一（一底两面）,滚筒,砂皮,刷把等'}]}, {name: '墙面2', list: [{des: '铲除墙面腻子层2', num: 100, unitprice: 1, total: 3, note: '铲除墙面腻子层（铲到红砖另计）2'}]}]}];
        function creatDetailBudget(data) {
            var total_price = (data.to8to_totle_price/10000).toFixed(1); 
            jq('#zxys_phoneInput').remove();
            jq('.zxbj_zxys .zxgs-list .zxgs-list-before li').css({'text-align':'inherit','width':'188px'});
            jq('.zxbj_zxys .zxys_result b').css({"width":"auto","margin":"0px 18px"});
            jq('#bprice').html(total_price);
            jq('.zxys_result span').html('万元');        
            jq('.zxys-result-span').text('毛坯房半包装修预估价');
            jq('#materialPay em').html(data.to8to_cl_price);
            jq('#artificialPay em').html(data.to8to_rg_price);
            jq('#designPay').html('<em>0</em>元<del class="to8to_zj">'+ data.normal_sj_price +'元</del>');
            jq('#qualityPay').html('<em>0</em>元<del class="to8to_zj">'+ data.normal_zj_price +'元</del>');
            jq('.zxys_worn').hide();
            jq('.zxys_explain').show();
            jq('.zxgs-list').find('.zxgs-list-before').css('margin-left','82px');
        }

        function priceInDOM(data,ele,homeMsg){
            var shi = 0;
            var ting = 0;
            var chu = 0;
            var wei = 0;
            var yang = 0;
            var qita = 0;
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
            jq('#bedroomPay').html(shi + '<em>元</em>');
            jq('#liveroomPay').html(ting+ '<em>元</em>');
            jq('#kitchenPay').html(chu+ '<em>元</em>');
            jq('#washroomPay').html(wei+ '<em>元</em>');
            jq('#balconyPay').html(yang+ '<em>元</em>');
            ele.eq(5).find('strong').html(data[homeMsg.length].price + '<em>元</em>');
        }

        //js解析域名赋值给Ptag
        jq(function(){
           var urlObj =  parseQuery();
           if(typeof urlObj == 'object' && urlObj.ptag && urlObj.ptag != '') {
              jq("#myPtag").val(urlObj.ptag);
           }
        })
        //解析域名
        function parseQuery(url) {
            var url = url || location.href;
            var query = url ? (url.split('?')[1] || '') : location.search;
            var queryList = query.substr(0).split('&');
            var parseRes = {};
            var flag = '#';

            if (queryList.length > 0) {
                for (var i = 0; i < queryList.length; i++) {
                    var kv = queryList[i].split('=');
                    parseRes[kv[0]] = decodeURIComponent(kv[1]).split('#')[0];
                }
            }
            return parseRes;
        }

        //根据面积显示户型 
        function selectDoorModle(square, squareEle){
            var square = Number(square);
            if (square + '' == 'NaN' || jq(squareEle).val() == '') {
                return
            };
            if (square < 60) {
                jq('#zxys_shi').val(1);
                jq('#zxys_ting').val(1);
                jq('#zxys_chu').val(1);
                jq('#zxys_wei').val(1);
                jq('#zxys_yangtai').val(1);
            } else if (square >= 60 && square < 90) {
                jq('#zxys_shi').val(2);
                jq('#zxys_ting').val(1);
                jq('#zxys_chu').val(1);
                jq('#zxys_wei').val(1);
                jq('#zxys_yangtai').val(1);
            } else if ( square >= 90 && square < 150) {
                jq('#zxys_shi').val(3);
                jq('#zxys_ting').val(2);
                jq('#zxys_chu').val(1);
                jq('#zxys_wei').val(2);
                jq('#zxys_yangtai').val(1);
            }
            else if (square >= 150) {
                jq('#zxys_shi').val(4);
                jq('#zxys_ting').val(2);
                jq('#zxys_chu').val(1);
                jq('#zxys_wei').val(2);
                jq('#zxys_yangtai').val(2);
            }
        }
    }
    //深圳东莞城市展示微信小号
    function city_operate(city){
        jq('.tdc-box').removeClass('wechat-img-dg wechat-img');//初始化二维码
        jq('.result-contain-dg').hide();//初始化二维码
        //判断城市是否是深圳或者东莞
        if(city === '深圳'){
            bot_is_shenzhen = true;
            bot_is_dongguan = false;
            jq('.con_bj_res').addClass('bot-showwechat');
            jq('.tdc-box').addClass('wechat-img');
            jq('.bot-showwechat .bottom-kfname').text('土巴兔-馨馨');//发标 结果态赋值  
            jq('.bot-showwechat .bottom-zxgw-city').text('深圳装修顾问  ');//发标 结果态赋值              
        }else if(city === '东莞'){
            bot_is_dongguan = true;
            bot_is_shenzhen = false;
            jq('.con_bj_res').addClass('bot-showwechat');
            jq('.tdc-box').addClass('wechat-img-dg');            
            jq('.bot-showwechat .bottom-kfname').text('土巴兔-蓉蓉');//发标 结果态赋值   
            jq('.bot-showwechat .bottom-zxgw-city').text('东莞装修顾问  ');//发标 结果态赋值          
            jq('.bot-wechat-result .result-contain-dg').show();
        }else{
            bot_is_shenzhen = false;
            bot_is_dongguan = false;            
            jq('.con_bj_res').removeClass('bot-showwechat');
            jq('.tdc-box').removeClass('wechat-img');
        }
    }   
})(jQuery)
