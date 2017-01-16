(function(){
    var gpmXGT = new GlobalProvincesModule(),
        gpmMFSJ = new GlobalProvincesModule(),
        gpmMat = new GlobalProvincesModule(),
        gpmCom = new GlobalProvincesModule();
    //设置计时器
    var timer = null;
    //统计点击ptag数组
    var clickPtagArr = [];
    
    window.CommonTenderPop = {
        options: {
            exposurePtag: '', //曝光Ptag
            pricePtag: '', //报价Ptag
            designPtag: '', //设计ptag
            companyPtag: '', //装修公司ptag
            materialPtag: '', //材料ptag
            priceTitle: '免费获取装修报价', //报价标题
            designTitle: '免费户型设计',//设计标题
            companyTitle: '附近热门装修公司查询',//公司标题
            materialTitle: '装修材料计算器', //材料标题
            priceResultTit: '您家的装修预算为：',//报价结果标题
            designResultTit: '申请成功！',//设计结果标题
            companyResultTit: '我家附近的热门装修公司',//公司标题
            materialResultTit: '装修材料清单明细', //材料标题
            automatic: true, //是否自动弹窗
            autoTime: 5000, // 默认5s调用弹窗
            showIndex: 0, //默认显示tab选项
            cookieName: 'tender_pop_flag', //默认cookie名称
	        showXGTImg:false,//默认不显示效果图详情页的样式
            imgSrcPage:'',//效果图当前页的src
	        indexFlag: false,
	        fromPage:'',
            imgNewBJ: false, // 是否是效果图新版报价
            showResult: false,// 效果图首页列表页只进入报价结果态
            onceTimes: '', // 效果图品宣点击一次的ptag
            twiceTimes: '', // 效果图品宣点击三次的ptag
			index_pop:false, //首页弹框标识
            companyIndex: false,//是否是装修公司首页弹框
            fabiao_falg: false//发标成功标识
        },
        phoneFlag: '', //四个模块号码重复不入库标识
        popFlag: false, //点击到表单元素时不弹窗
        showFlag: false, //自动弹窗是否出现过
        init: function(option) {
            var self =  this;
            self.options = jq.extend(self.options,option);
            var tender_pop_flag = self.getCookie(self.options.cookieName);
            jq(document).on('click blur focus keyup keydown', 'input,select,button', function(){
                self.popFlag = true;
            })
            if (self.options.automatic) {
                //未点击时自动弹窗
                if (!tender_pop_flag) {
                    if (!self.popFlag) {
                        if (timer) {
                            //兼容条件重置时间归零自动弹窗
                            clearTimeout(timer);
                            timer = setTimeout(function(){
            			    	if(self.options.indexFlag){
            					   self.indexstyleBudGet(option);
                				}
                				else {
                					self.styleBudGet(option);
                				}
                                
                                self.setCookie(self.options.cookieName, 'true', 7);
                                self.showFlag = true;
                            },self.options.autoTime)    
                        } else {
                            timer = setTimeout(function(){
                                if(self.options.indexFlag){
                                   self.indexstyleBudGet(option);
                                }
                                else {
                                    self.styleBudGet(option);
                                }
                                self.setCookie(self.options.cookieName, 'true', 7);
                                self.showFlag = true;
                            },self.options.autoTime)   
                        };                        
                    };
                };            
            } else {
                //通过事件触发弹窗
                // 在此处控制走效果图新版报价。
                if(self.options.imgNewBJ && self.options.showXGTImg){
                    // 效果图新版报价入口
                    self.styleNewBJBudGet(option);
                }else{
                    self.styleBudGet(option);
                }
            };
        },
        //弹窗重置
        destory: function() {
            clearTimeout(timer);
            // timer = null;
            if (jq('window_box').length >= 1) {
                window_box_close();
            };
        },
        //首页弹窗调用入口
    	indexstyleBudGet: function(option){

            var self = this;
            //当前弹窗调用，阻止自动弹窗
            self.popFlag = true;
            var str =  '<div class="clear tender-pop">' +
                            '<ul class="tender-pop-tabs">' +
                                '<li class="active"><span>免费报价</span></li>' +
                                '<li><span>免费设计</span></li>' +
                                // '<li class="tabs-company">找装修公司</li>' +
                                // '<li class="tabs-material">装修材料计算器</li>' +
                            '</ul>' +
                            '<div class="tender-pop-main">'+
                                '<div class="tender-pop-con clear add-weixin-html">'+
                                    '<div class="tender-pop-mfbj tender-pop-left" id="tender-video-form">'+
                                        '<h6 class="tender-pop-title">' + self.options.priceTitle + '</h6>' +
                                        '<p class="tender-pop-applypeople">' +
                                            '今天已有' +
                                            '<span class="num-man">' +
                                            '</span>' +
                                            '位业主获取了装修预算' +
                                        '</p>' +
                                        '<form id="tenderPrice">' +
                                            '<ul class="tender-form-list">' +
                                                '<li class="tender-form-item">' +
                                                    '所在城市：' +
                                                    '<span class="worn-font">*</span>' +
                                                    '<select class="tender-form-select province" id="priceShen" name="shen"><option value="省/市">省/市</option></select>' +
                                                    '<select class="tender-form-select province city" id="priceCity" name="city"><option value="市/地区">市/地区</option></select>'+
                                                    '<div style="display:none"><select class="tender-form-select" id="priceTown" name="town"><option value="县/小区">县/小区</option></select></div>'+
                                                '</li>' +
                                                '<li class="tender-form-item">' +
                                                    '房屋面积：' +
                                                    '<span class="worn-font">*</span>' +
                                                    '<input type="text" class="tender-form-input" id="priceSquare" name="square"/>' +
                                                    '<span class="tender-form-font">输入您的房屋面积</span>' +
                                                    '<em class="tender-form-sup">m²</em>' +
                                                '</li>' +
                                                '<li class="tender-form-item tender-huxing">' +
                                                    '房屋户型：' +
                                                '<span class="worn-font">*</span>' +
                                                    '<div class="clear">' +
                                                        '<select name="shi" id="shi" class="select select_s select_s_s col_l">' +
                                                            '<option value="1">1室</option>' +
                                                            '<option value="2">2室</option>' +
                                                            '<option value="3">3室</option>' +
                                                            '<option value="4">4室</option>' +
                                                            '<option value="5">5室</option>' +
                                                            '<option value="6">6室</option>' +
                                                        '</select>' +
                                                        '<select name="ting" id="ting" class="select select_s select_s_s col_l select-margin">' +
                                                            '<option value="1">1厅</option>' +
                                                            '<option value="2">2厅</option>' +
                                                            '<option value="3">3厅</option>' +
                                                            '<option value="4">4厅</option>' +
                                                            '<option value="5">5厅</option>' +
                                                            '<option value="6">6厅</option>' +
                                                        '</select>' +
                                                        '<select name="chu" id="chu" class="select select_s select_s_s col_l select-margin">' +
                                                            '<option value="1">1厨</option>' +
                                                            '<option value="2">2厨</option>' +
                                                            '<option value="3">3厨</option>' +
                                                        '</select>' +
                                                        '<select name="wei" id="wei" class="select select_s col_l">' +
                                                            '<option value="1">1卫</option>' +
                                                            '<option value="2">2卫</option>' +
                                                            '<option value="3">3卫</option>' +
                                                            '<option value="4">4卫</option>' +
                                                            '<option value="5">5卫</option>' +
                                                            '<option value="6">6卫</option>' +
                                                        '</select>' +
                                                        '<select name="yangtai" id="yangtai" class="select select_s col_l select-long-margin">' +
                                                            '<option value="1">1阳台</option>' +
                                                            '<option value="2">2阳台</option>' +
                                                            '<option value="3">3阳台</option>' +
                                                            '<option value="4">4阳台</option>' +
                                                            '<option value="5">5阳台</option>' +
                                                            '<option value="6">6阳台</option>' +
                                                        '</select>' +
                                                    '</div>' +
                                                '</li>' +
                                                '<li class="tender-form-item">' +
                                                    '手机号码：' +
                                                    '<span class="worn-font">*</span>' +
                                                        '<input type="text" class="tender-form-input" id="pricePhone" name="phone"/>' +
                                                    '<span class="tender-form-font price-font">我们将发送预算明细到您的手机</span>' +
                                                '</li>' +
                                                '<li class="tender-form-item tender-form-footer">' +
                                                    // '<div class="tender-form-check">' +
                                                    //     '<input type="checkbox" class="tender-input-check price-check" checked="checked">' +
                                                    //     '<span>我已阅读并接受<a href="http://www.to8to.com/help/index.php?id=76" target="_blank">《装修常见问题条款》</a></span>' +
                                                    // '</div>'  +
                                                    '<p class="tender-form-explain">*为了您的权益，您的隐私将被严格保密</p>' +
                                                '</li>' +
                                            '</ul>' +
                                        '</form>' +
                                        '<a href="javascript:void(0);" id="priceBtn" class="tender-pop-buttom tender-calc-btn" data-ptag="'+ self.options.pricePtag +'">' +
                                            '<span class="tender-recalc">' +
                                                '开始计算' +
                                            '</span>' +
                                        '</a>' +
                                    '</div>' +
                                    '<div class="tender-pop-mfbj tender-pop-left tender-video" id="tender-video-view">'+
                                        '<h6 class="tender-video-title">暖暖的家，土巴兔如何帮你实现？</h6>'+
                                        '<div class="tender-video-wrapper">'+
                                        '<div id="container"></div>'+
                                        '<p class="note"></p>'+
                                        '<img class="tender-video-wrapper-hand" id="tender-video-wrapper-hand" src="http://img.to8to.com/to8to_img/zxbj/mousehand.png"/>'+
                                        /*'<span class="tender-video-wrapper-btn" id="tender-video-wrapper-btn"></span>'+*/
                                       '<script type="text/javascript" src="http://static.to8to.com/gb_js/jwplayer.js"></script>'+
                                        '</div>'+
                                        '<div class="tender-video-tip">'+
                                            '<p>已累计服务<span class="tender-video-num">1400万</span>业主</p>'+
                                            '<p>服务已覆盖<span class="tender-video-num">250个</span>城市</p>'+
                                            '<p><span class="tender-video-num">95万</span>入驻设计师、<span class="tender-video-num">7万</span>入驻装修公司</p>'+
                                        '</div>'+
                                        '<a href="javascript:void(0);" id="priceBtnVideo" class="tender-pop-buttom tender-calc-btn tender-video-view again" data-ptag="'+ self.options.pricePtag +'">' +
                                                '<span class="tender-recalc">' +
                                                    '重新计算' +
                                                '</span>' +
                                        '</a>' +
                                    '</div>' +
                                '</div>'+
                                '<div class="tender-pop-con clear">'+
                                    '<div class="tender-pop-mfsj tender-pop-left">'+
                                        '<div class="tender-init-mfsj">' +
                                            '<h6 class="tender-pop-title">'+ self.options.designTitle + '</h6>' +
                                            '<form id="tenderDesign">'+
                                                '<ul class="tender-form-list">' +
                                                    '<li class="tender-form-item">' +
                                                        '所在城市：' +
                                                        '<span class="worn-font">*</span>' +
                                                        '<select class="tender-form-select province" id="designShen" name="shen"><option value="省/市">省/市</option></select>' +
                                                        '<select class="tender-form-select province city" id="designCity" name="city"><option value="市/地区">市/地区</option></select>'+
                                                        '<div style="display:none"><select class="tender-form-select" id="designTown" name="town"><option value="县/小区">县/小区</option></select></div>'+
                                                    '</li>' +
                                                    '<li class="tender-form-item">' +
                                                        '您的称呼：' +
                                                        '<span class="worn-font">*</span>' +
                                                        '<input type="text" class="tender-form-input" id="designName" name="chenghu"/>' +
                                                        '<span class="tender-form-font">请输入您的称呼</span>' +
                                                    '</li>' +
                                                    '<li class="tender-form-item">' +
                                                        '手机号码：' +
                                                        '<span class="worn-font">*</span>' +
                                                            '<input type="text" class="tender-form-input" id="designPhone" name="phone"/>' +
                                                        '<span class="tender-form-font">填写手机号，抢免费设计名额</span>' +
                                                    '</li>' +
                                                    '<li class="tender-form-item tender-form-footer">' +
                                                        '<div class="tender-form-check">' +
                                                            '<input type="checkbox" class="tender-input-check design-check" checked="checked">' +
                                                            '<span>我已阅读并接受<a href="http://www.to8to.com/help/index.php?id=76" target="_blank">《装修常见问题条款》</a></span>' +
                                                        '</div>'  +
                                                        '<a href="javascript:void(0);" data-ptag="'+ self.options.designPtag +'" id="designBtn" class="tender-mfsj-btn">' +
                                                            '<em>立即申请</em>' +
                                                        '</a>' +
                                                        '<p class="tender-form-explain">*为了您的权益，您的隐私将被严格保密</p>' +
                                                    '</li>' +
                                                '</ul>' +
                                            '</form>'+
                                        '</div>' +
                                        '<div class="tender-result-mfsj dn">' +
                                            '<h6 class="tender-pop-title">'+ self.options.designResultTit+'</h6>' +
                                            '<ul class="tender-form-list">' +
                                                '<li class="tender-form-item">' +
                                                    '<p class="tender-result-text">您同时还获得<span>1项增值服务</span></p>' +
                                                '</li>' +
                                                '<li class="tender-form-item">' +
                                                    '<em class="mflf"></em>' +
                                                '</li>' +
                                                '<li class="tender-form-item">' +
                                                    '<p class="tender-result-explain holiday-text">*稍后装修管家将致电您，为您提供免费装修咨询服务。</p>' +
                                                '</li>' +
                                            '</ul>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="tender-pop-mfsj tender-pop-right">' +
                                        '<div class="tender-mfsjinit-img">' +
                                            '<em></em>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>'+
                            '</div>'+
                        '</div>';
            var mfbjStr = '<div class="tender-pop-mfbj tender-pop-right">' +
                              '<h6 class="tender-pop-title littlefont"><em class="price-result-title">'+ self.options.priceResultTit +'</em><span class="tender-title-count"  id="priceTotal">?</span><em class="tender-title-text">万元</em></h6>' +
                              '<div class="tender-price-result-box" style="padding: 15px 40px 0">' +
                                  '<ul class="tender-price-result">' +
                                      '<li>'+
                                          '<span>材料费：</span><strong id="priceMterials"><em>？</em>元</strong>' +
                                      '</li>'+
                                      '<li>'+
                                          '<span>人工费：</span><strong id="priceArtificial"><em>？</em>元</strong>' +
                                      '</li>'+
                                      '<li>'+
                                          '<span>设计费：</span><strong id="priceDesign"><em>？</em>元</strong>' +
                                      '</li>'+
                                      '<li>'+
                                          '<span>质检费：</span><strong id="priceQuality"><em>？</em>元</strong>' +
                                      '</li>'+
                                  '</ul>' +
                              '</div>' +
                              '<div class="tender-price-ad">' +
                                  '<p></p>' +
                              '</div>' +
                          '</div>';
            var showImgStr = '<div class="tender-pop-mfbj tender-pop-right">' +
                                 '<h6 class="tender-pop-title littlefont"><em class="price-result-title">'+ self.options.priceResultTit +'</em><span class="tender-title-count"  id="priceTotal">?</span><em class="tender-title-text">万元</em></h6>' +
                                 '<div class="tender-pop-showImg">' +
                                     '<img alt="" src="'+self.options.imgSrcPage+'">' +
                                 '</div>' +
                                 '<div style="margin-top:17px">' +
                                     '<ul class="tender-price-newResult">' +
                                         '<li>'+
                                             '<span>材料费：</span><strong id="priceMterials"><em>？</em>元</strong>' +
                                         '</li>'+
                                         '<li>'+
                                             '<span>人工费：</span><strong id="priceArtificial"><em>？</em>元</strong>' +
                                         '</li>'+
                                         '<li>'+
                                             '<span>设计费：</span><strong id="priceDesign"><em>？</em>元</strong>' +
                                         '</li>'+
                                         '<li>'+
                                             '<span>质检费：</span><strong id="priceQuality"><em>？</em>元</strong>' +
                                         '</li>'+
                                     '</ul>' +
                                 '</div>' +
                                 '<div class="tender-price-ad tender-price-imgad">' +
                                     '<p></p>' +
                                 '</div>' +
                             '</div>';
             

            //弹窗初始化           
            jq('.window_box').windowBox({
                width:980,    //弹框宽度
                title:"", //标题
                wbcStr:str,  //可编辑内容
                cancleBtn:false,    //是否显示取消按钮
                confirmBtn:false, // 是否显示确认按钮
                closeFn: 'CommonTenderPop.window_box_close'
            });
            self.options.fabiao_falg = false;//初始化标识            
            //调用结果态方法
            jq('#priceCity,#priceShen').on('change',function(){
                self.fruit_dispose('');
            });
			self.options.index_pop = true;//标识为普通的首页5秒弹框 发标成功
            // 判断原页面或者效果图页面
            if(self.options.showXGTImg){
                // 插入效果图的节点
                jq('.tender-pop-mfbj').parent().append(showImgStr);
                jq('#priceMterials').parent().css('margin-left','58px');
                jq('#priceDesign').parent().css('margin-left','58px');
            }else{
                // 插入原报价节点
                jq('.tender-pop-mfbj').parent().append(mfbjStr);
            }
            //初始化页面根据ip接口得到的城市 展示对应微信小号
            city_from_ip(function(cityFromIp){
                var city = cityFromIp;//获得微信小号
                self.fruit_dispose(city);//初始化对应操作
            }
            );
            //样式调整
            jq('.window_box .window_box_title').css('position','absolute');
            jq('.window_box').css('overflow','visible');
            jq('.window_box').css({
                'border-radius':'0',
                '-o-border-radius':'0',
                '-webkit-border-radius':'0',
                '-moz-border-radius':'0'
            });

            //曝光 ptag
            if (self.options.exposurePtag) {
                (typeof clickStream !== 'undefined') && clickStream.getCvParams(self.options.exposurePtag);
            };
            //弹窗tab选项初始化
            jq('.tender-pop-con').eq(self.options.showIndex).show();
            showTabIndex(self.options.showIndex);
            // 使图片上下居中
            if(self.options.showXGTImg){
                jq('.tender-pop-showImg').find('img').css('margin-top',(jq('.tender-pop-showImg').height()-jq('.tender-pop-showImg').find('img').height())/2+'px');
            }
            //4个模块切换
            jq('.tender-pop-tabs').on('click', 'li', function(event){
                var e = window.event || event,
                    index = jq(this).index();
                    showTabIndex(index);
            });
            function inArray(arr,find){
                var arrLen = arr.length || 0;
                var _flag = false;
                if (arrLen <= 0) { return false};

                for (var i = 0; i < arrLen; i++) {
                    if (find == arr[i]) {
                        _flag = true;
                        break;
                    };
                }

                return _flag;
            }
            function showTabIndex(index){
                var ptag;
                jq('.tender-pop-tabs li').eq(index).addClass('active').siblings().removeClass('active');
                if(index == 1) {
                    // jq('.tender-pop-tabs').css({'background-position': '-53px 0'});
                    ptag = jq('#designBtn').attr('data-ptag');
                } else if(index == 2) {
                    // jq('.tender-pop-tabs').css({'background-position': '-105px 0'});
                    // ptag = jq('#companyBtn').attr('data-ptag');
                } else if (index == 3) {
                    // jq('.tender-pop-tabs').css({'background-position': 'right 0'});
                    // ptag = jq('#materialBtn').attr('data-ptag');
                } else {
                   // jq('.tender-pop-tabs').css({'background-position': '0 0'}); 
                   ptag = jq('#priceBtn').attr('data-ptag');
                }

                //点击ptag去重
                if(!inArray(clickPtagArr, ptag)){
                    (typeof clickStream !== 'undefined') && clickStream.getCvParams(ptag);
                    try {_hmt && _hmt.push(['_trackEvent', 'zb', 'submit', buttom.attr('data-ptag')]);} catch (e) {}
                    clickPtagArr.push(ptag);
                };
                jq('.tender-pop-con').eq(index).show().siblings().hide();
            }

            //表单占位符初始化
            var inputArr = jq('.tender-form-input');
            for (var i = inputArr.length - 1; i >= 0; i--) {
                var inputDom = jq(inputArr[i]);
                self.showPlaceholder(jq(inputArr[i]));
            };
            //四个模块初始化
            self.indexdetailPrice();
            self.detailDesign();
            // self.detailCompany();
            // self.detailMaterial();

            self.date_unix_day();//年会和春节
        },
         //弹窗调用入口
        styleBudGet: function(option){

            var self = this;

            //当前弹窗调用，阻止自动弹窗
            self.popFlag = true;
            var str =  '<div class="clear tender-pop">' +
                            '<ul class="tender-pop-tabs">' +
                                '<li class="active"><span>免费报价</span></li>' +
                                '<li><span>免费设计</span></li>' +
                                // '<li class="tabs-company">找装修公司</li>' +
                                // '<li class="tabs-material">装修材料计算器</li>' +
                            '</ul>' +
                            '<div class="tender-pop-main">'+
                                '<div class="tender-pop-con clear add-weixin-html">'+
                                    '<div class="tender-pop-mfbj tender-pop-left">'+
                                        '<h6 class="tender-pop-title">' + self.options.priceTitle + '</h6>' +
                                        '<p class="tender-pop-applypeople">' +
                                            '今天已有' +
                                            '<span class="num-man">' +
                                            '</span>' +
                                            '位业主获取了装修预算' +
                                        '</p>' +
                                        '<form id="tenderPrice">' +
                                            '<ul class="tender-form-list">' +
                                                '<li class="tender-form-item">' +
                                                    '所在城市：' +
                                                    '<span class="worn-font">*</span>' +
                                                    '<select class="tender-form-select province" id="priceShen" name="shen"><option value="省/市">省/市</option></select>' +
                                                    '<select class="tender-form-select province city" id="priceCity" name="city"><option value="市/地区">市/地区</option></select>'+
                                                    '<div style="display:none"><select class="tender-form-select" id="priceTown" name="town"><option value="县/小区">县/小区</option></select></div>'+
                                                '</li>' +
                                                '<li class="tender-form-item">' +
                                                    '房屋面积：' +
                                                    '<span class="worn-font">*</span>' +
                                                    '<input type="text" class="tender-form-input" id="priceSquare" name="square"/>' +
                                                    '<span class="tender-form-font">输入您的房屋面积</span>' +
                                                    '<em class="tender-form-sup">m²</em>' +
                                                '</li>' +
                                                '<li class="tender-form-item tender-huxing">' +
                                                    '房屋户型：' +
                                                '<span class="worn-font">*</span>' +
                                                    '<div class="clear">' +
                                                        '<select name="shi" id="shi" class="select select_s select_s_s col_l">' +
                                                            '<option value="1">1室</option>' +
                                                            '<option value="2">2室</option>' +
                                                            '<option value="3">3室</option>' +
                                                            '<option value="4">4室</option>' +
                                                            '<option value="5">5室</option>' +
                                                            '<option value="6">6室</option>' +
                                                        '</select>' +
                                                        '<select name="ting" id="ting" class="select select_s select_s_s col_l select-margin">' +
                                                            '<option value="1">1厅</option>' +
                                                            '<option value="2">2厅</option>' +
                                                            '<option value="3">3厅</option>' +
                                                            '<option value="4">4厅</option>' +
                                                            '<option value="5">5厅</option>' +
                                                            '<option value="6">6厅</option>' +
                                                        '</select>' +
                                                        '<select name="chu" id="chu" class="select select_s select_s_s col_l select-margin">' +
                                                            '<option value="1">1厨</option>' +
                                                            '<option value="2">2厨</option>' +
                                                            '<option value="3">3厨</option>' +
                                                        '</select>' +
                                                        '<select name="wei" id="wei" class="select select_s col_l">' +
                                                            '<option value="1">1卫</option>' +
                                                            '<option value="2">2卫</option>' +
                                                            '<option value="3">3卫</option>' +
                                                            '<option value="4">4卫</option>' +
                                                            '<option value="5">5卫</option>' +
                                                            '<option value="6">6卫</option>' +
                                                        '</select>' +
                                                        '<select name="yangtai" id="yangtai" class="select select_s col_l select-long-margin">' +
                                                            '<option value="1">1阳台</option>' +
                                                            '<option value="2">2阳台</option>' +
                                                            '<option value="3">3阳台</option>' +
                                                            '<option value="4">4阳台</option>' +
                                                            '<option value="5">5阳台</option>' +
                                                            '<option value="6">6阳台</option>' +
                                                        '</select>' +
                                                    '</div>' +
                                                '</li>' +
                                                '<li class="tender-form-item">' +
                                                    '手机号码：' +
                                                    '<span class="worn-font">*</span>' +
                                                        '<input type="text" class="tender-form-input" id="pricePhone" name="phone"/>' +
                                                    '<span class="tender-form-font price-font">我们将发送预算明细到您的手机</span>' +
                                                '</li>' +
                                                '<li class="tender-form-item tender-form-footer">' +
                                                    // '<div class="tender-form-check">' +
                                                    //     '<input type="checkbox" class="tender-input-check price-check" checked="checked">' +
                                                    //     '<span>我已阅读并接受<a href="http://www.to8to.com/help/index.php?id=76" target="_blank">《装修常见问题条款》</a></span>' +
                                                    // '</div>'  +
                                                    '<p class="tender-form-explain">*为了您的权益，您的隐私将被严格保密</p>' +
                                                '</li>' +
                                            '</ul>' +
                                        '</form>' +
                                        '<a href="javascript:void(0);" id="priceBtn" class="tender-pop-buttom tender-calc-btn" data-ptag="'+ self.options.pricePtag +'">' +
                                            '<span class="tender-recalc">' +
                                                '开始计算' +
                                            '</span>' +
                                        '</a>' +
                                    '</div>' +
                                '</div>'+
                                '<div class="tender-pop-con clear">'+
                                    '<div class="tender-pop-mfsj tender-pop-left">'+
                                        '<div class="tender-init-mfsj">' +
                                            '<h6 class="tender-pop-title">'+ self.options.designTitle + '</h6>' +
                                            '<form id="tenderDesign">'+
                                                '<ul class="tender-form-list">' +
                                                    '<li class="tender-form-item">' +
                                                        '所在城市：' +
                                                        '<span class="worn-font">*</span>' +
                                                        '<select class="tender-form-select province" id="designShen" name="shen"><option value="省/市">省/市</option></select>' +
                                                        '<select class="tender-form-select province city" id="designCity" name="city"><option value="市/地区">市/地区</option></select>'+
                                                        '<div style="display:none"><select class="tender-form-select" id="designTown" name="town"><option value="县/小区">县/小区</option></select></div>'+
                                                    '</li>' +
                                                    '<li class="tender-form-item">' +
                                                        '您的称呼：' +
                                                        '<span class="worn-font">*</span>' +
                                                        '<input type="text" class="tender-form-input" id="designName" name="chenghu"/>' +
                                                        '<span class="tender-form-font">请输入您的称呼</span>' +
                                                    '</li>' +
                                                    '<li class="tender-form-item">' +
                                                        '手机号码：' +
                                                        '<span class="worn-font">*</span>' +
                                                            '<input type="text" class="tender-form-input" id="designPhone" name="phone"/>' +
                                                        '<span class="tender-form-font">填写手机号，抢免费设计名额</span>' +
                                                    '</li>' +
                                                    '<li class="tender-form-item tender-form-footer">' +
                                                        '<div class="tender-form-check">' +
                                                            '<input type="checkbox" class="tender-input-check design-check" checked="checked">' +
                                                            '<span>我已阅读并接受<a href="http://www.to8to.com/help/index.php?id=76" target="_blank">《装修常见问题条款》</a></span>' +
                                                        '</div>'  +
                                                        '<a href="javascript:void(0);" data-ptag="'+ self.options.designPtag +'" id="designBtn" class="tender-mfsj-btn">' +
                                                            '<em>立即申请</em>' +
                                                        '</a>' +
                                                        '<p class="tender-form-explain">*为了您的权益，您的隐私将被严格保密</p>' +
                                                    '</li>' +
                                                '</ul>' +
                                            '</form>'+
                                        '</div>' +
                                        '<div class="tender-result-mfsj dn">' +
                                            '<h6 class="tender-pop-title">'+ self.options.designResultTit+'</h6>' +
                                            '<ul class="tender-form-list">' +
                                                '<li class="tender-form-item">' +
                                                    '<p class="tender-result-text">您同时还获得<span>1项增值服务</span></p>' +
                                                '</li>' +
                                                '<li class="tender-form-item">' +
                                                    '<em class="mflf"></em>' +
                                                '</li>' +
                                                '<li class="tender-form-item">' +
                                                    '<p class="tender-result-explain holiday-text">*稍后装修管家将致电您，为您提供免费装修咨询服务。</p>' +
                                                '</li>' +
                                            '</ul>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="tender-pop-mfsj tender-pop-right">' +
                                        '<div class="tender-mfsjinit-img">' +
                                            '<em></em>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>'+
                            '</div>'+
                        '</div>';
            var mfbjStr = '<div class="tender-pop-mfbj tender-pop-right">' +
                              '<h6 class="tender-pop-title littlefont"><em class="price-result-title">'+ self.options.priceResultTit +'</em><span class="tender-title-count"  id="priceTotal">?</span><em class="tender-title-text">万元</em></h6>' +
                              '<div class="tender-price-result-box" style="padding: 15px 40px 0">' +
                                  '<ul class="tender-price-result">' +
                                      '<li>'+
                                          '<span>材料费：</span><strong id="priceMterials"><em>？</em>元</strong>' +
                                      '</li>'+
                                      '<li>'+
                                          '<span>人工费：</span><strong id="priceArtificial"><em>？</em>元</strong>' +
                                      '</li>'+
                                      '<li>'+
                                          '<span>设计费：</span><strong id="priceDesign"><em>？</em>元</strong>' +
                                      '</li>'+
                                      '<li>'+
                                          '<span>质检费：</span><strong id="priceQuality"><em>？</em>元</strong>' +
                                      '</li>'+
                                  '</ul>' +
                              '</div>' +
                              '<div class="tender-price-ad">' +
                                  '<p></p>' +
                              '</div>' +
                          '</div>';
            var showImgStr = '<div class="tender-pop-mfbj tender-pop-right">' +
                                 '<h6 class="tender-pop-title littlefont"><em class="price-result-title">'+ self.options.priceResultTit +'</em><span class="tender-title-count"  id="priceTotal">?</span><em class="tender-title-text">万元</em></h6>' +
                                 '<div class="tender-pop-showImg">' +
                                     '<img alt="" src="'+self.options.imgSrcPage+'">' +
                                 '</div>' +
                                 '<div style="margin-top:17px">' +
                                     '<ul class="tender-price-newResult">' +
                                         '<li>'+
                                             '<span>材料费：</span><strong id="priceMterials"><em>？</em>元</strong>' +
                                         '</li>'+
                                         '<li>'+
                                             '<span>人工费：</span><strong id="priceArtificial"><em>？</em>元</strong>' +
                                         '</li>'+
                                         '<li>'+
                                             '<span>设计费：</span><strong id="priceDesign"><em>？</em>元</strong>' +
                                         '</li>'+
                                         '<li>'+
                                             '<span>质检费：</span><strong id="priceQuality"><em>？</em>元</strong>' +
                                         '</li>'+
                                     '</ul>' +
                                 '</div>' +
                                 '<div class="tender-price-ad tender-price-imgad">' +
                                     '<p></p>' +
                                 '</div>' +
                             '</div>';
            //弹窗初始化           
            jq('.window_box').windowBox({
                width:980,    //弹框宽度
                title:"", //标题
                wbcStr:str,  //可编辑内容
                cancleBtn:false,    //是否显示取消按钮
                confirmBtn:false, // 是否显示确认按钮
                closeFn: 'CommonTenderPop.window_box_close'
            });
            self.options.fabiao_falg = false;//初始化标识            
            //调用结果态方法
            jq('#priceCity,#priceShen').on('change',function(){
                self.fruit_dispose('');
            });            
            // 判断原页面或者效果图页面
            if(self.options.showXGTImg){
                // 插入效果图的节点
                jq('.tender-pop-mfbj').parent().append(showImgStr);
                jq('#priceMterials').parent().css('margin-left','58px');
                jq('#priceDesign').parent().css('margin-left','58px');
            }else{
                // 插入原报价节点
                jq('.tender-pop-mfbj').parent().append(mfbjStr);
            }
            //初始化页面根据ip接口得到的城市 展示对应微信小号
            city_from_ip(function(cityFromIp){
                var city = cityFromIp;//获得微信小号
                self.fruit_dispose(city);//初始化对应操作
            }
            );
            //样式调整
            jq('.window_box .window_box_title').css('position','absolute');
            jq('.window_box').css('overflow','visible');
            jq('.window_box').css({
                'border-radius':'0',
                '-o-border-radius':'0',
                '-webkit-border-radius':'0',
                '-moz-border-radius':'0'
            });

            //曝光 ptag
            if (self.options.exposurePtag) {
                (typeof clickStream !== 'undefined') && clickStream.getCvParams(self.options.exposurePtag);
            };
            //弹窗tab选项初始化
            jq('.tender-pop-con').eq(self.options.showIndex).show();
            showTabIndex(self.options.showIndex);
            // 使图片上下居中
            if(self.options.showXGTImg){
                jq('.tender-pop-showImg').find('img').css('margin-top',(jq('.tender-pop-showImg').height()-jq('.tender-pop-showImg').find('img').height())/2+'px');
            }
            //4个模块切换
            jq('.tender-pop-tabs').on('click', 'li', function(event){
                var e = window.event || event,
                    index = jq(this).index();
                    showTabIndex(index);
            });
            function inArray(arr,find){
                var arrLen = arr.length || 0;
                var _flag = false;
                if (arrLen <= 0) { return false};

                for (var i = 0; i < arrLen; i++) {
                    if (find == arr[i]) {
                        _flag = true;
                        break;
                    };
                }

                return _flag;
            }
            function showTabIndex(index){
                var ptag;
                jq('.tender-pop-tabs li').eq(index).addClass('active').siblings().removeClass('active');
                if(index == 1) {
                    // jq('.tender-pop-tabs').css({'background-position': '-53px 0'});
                    ptag = jq('#designBtn').attr('data-ptag');
                } else if(index == 2) {
                    // jq('.tender-pop-tabs').css({'background-position': '-105px 0'});
                    // ptag = jq('#companyBtn').attr('data-ptag');
                } else if (index == 3) {
                    // jq('.tender-pop-tabs').css({'background-position': 'right 0'});
                    // ptag = jq('#materialBtn').attr('data-ptag');
                } else {
                   // jq('.tender-pop-tabs').css({'background-position': '0 0'}); 
                   ptag = jq('#priceBtn').attr('data-ptag');
                }

                //点击ptag去重
                if(!inArray(clickPtagArr, ptag)){
                    (typeof clickStream !== 'undefined') && clickStream.getCvParams(ptag);
                    try {_hmt && _hmt.push(['_trackEvent', 'zb', 'submit', buttom.attr('data-ptag')]);} catch (e) {}
                    clickPtagArr.push(ptag);
                };
                jq('.tender-pop-con').eq(index).show().siblings().hide();
            }

            //表单占位符初始化
            var inputArr = jq('.tender-form-input');
            for (var i = inputArr.length - 1; i >= 0; i--) {
                var inputDom = jq(inputArr[i]);
                self.showPlaceholder(jq(inputArr[i]));
            };
            //四个模块初始化
            self.detailPrice();
            self.detailDesign();
            // self.detailCompany();
            // self.detailMaterial();

            self.date_unix_day();//年会和春节

        },
        // 新版效果图报价弹窗初始化 by fidermo.hu 2016/11/5
        styleNewBJBudGet: function(){
            var self = this;
            //当前弹窗调用，阻止自动弹窗
            self.popFlag = true;
            var str =  '<div class="clear tender-pop">' +
                            '<div class="tender-pop-main">'+
                                '<div class="tender-pop-con clear add-weixin-html">'+
                                    '<div class="tender-pop-mfbj tender-pop-left">'+
                                        '<img alt="" src="'+self.options.imgSrcPage+'">'+
                                    '</div>' +
                                    '<div class="tender-pop-mfbj tender-pop-right">' +
                                        '<h6 class="tender-pop-title littlefont">'+
                                            '<em class="price-result-title">装修成这样要花多少钱?</em>'+
                                            '<span class="tender-title-count" id="priceTotal"></span>'+
                                            '<em class="tender-title-text"></em>'+
                                        '</h6>'+
                                        '<div style="margin-top:18px">' +
                                            '<ul class="tender-price-newResult">' +
                                                '<li>'+
                                                    '<span>材料费：</span><strong id="priceMterials"><em>？</em>元</strong>' +
                                                '</li>'+
                                                '<li>'+
                                                    '<span>人工费：</span><strong id="priceArtificial"><em>？</em>元</strong>' +
                                                '</li>'+
                                                '<li>'+
                                                    '<span>设计费：</span><strong id="priceDesign"><em>？</em>元</strong>' +
                                                '</li>'+
                                                '<li>'+
                                                    '<span>质检费：</span><strong id="priceQuality"><em>？</em>元</strong>' +
                                                '</li>'+
                                            '</ul>' +
                                        '</div>' +
                                        '<form id="tenderPrice">' +
                                            '<ul class="tender-form-list">' +
                                                '<li class="tender-form-item newbj-form-item">' +
                                                    '<select class="newbj-select-province newbj-province-margin" id="priceShen" name="shen"><option value="省/市">省/市</option></select>' +
                                                    '<select class="newbj-select-province" id="priceCity" name="city"><option value="市/地区">市/地区</option></select>'+
                                                    '<div style="display:none"><select class="tender-form-select" id="priceTown" name="town"><option value="县/小区">县/小区</option></select></div>'+
                                                '</li>' +
                                                '<li class="tender-form-item newbj-form-item">' +
                                                    '<input type="text" class="tender-form-input newbj-square" id="priceSquare" name="square"/>' +
                                                    '<span class="tender-form-font newbj-tips-font">输入您的房屋面积</span>' +
                                                    '<em class="tender-form-sup newbj-form-sup">m²</em>' +
                                                '</li>' +
                                                '<li class="tender-form-item newbj-tender-huxing newbj-form-item">' +
                                                    '<select name="shi" id="shi" class="newbj-right-margin">' +
                                                        '<option value="1">1室</option>' +
                                                        '<option value="2">2室</option>' +
                                                        '<option value="3">3室</option>' +
                                                        '<option value="4">4室</option>' +
                                                        '<option value="5">5室</option>' +
                                                        '<option value="6">6室</option>' +
                                                    '</select>' +
                                                    '<select name="ting" id="ting" class="newbj-right-margin">' +
                                                        '<option value="1">1厅</option>' +
                                                        '<option value="2">2厅</option>' +
                                                        '<option value="3">3厅</option>' +
                                                        '<option value="4">4厅</option>' +
                                                        '<option value="5">5厅</option>' +
                                                        '<option value="6">6厅</option>' +
                                                    '</select>' +
                                                    '<select name="chu" id="chu" class="newbj-right-margin">' +
                                                        '<option value="1">1厨</option>' +
                                                        '<option value="2">2厨</option>' +
                                                        '<option value="3">3厨</option>' +
                                                    '</select>' +
                                                    '<select name="wei" id="wei" class="newbj-right-margin">' +
                                                        '<option value="1">1卫</option>' +
                                                        '<option value="2">2卫</option>' +
                                                        '<option value="3">3卫</option>' +
                                                        '<option value="4">4卫</option>' +
                                                        '<option value="5">5卫</option>' +
                                                        '<option value="6">6卫</option>' +
                                                    '</select>' +
                                                    '<select name="yangtai" id="yangtai">' +
                                                        '<option value="1">1阳台</option>' +
                                                        '<option value="2">2阳台</option>' +
                                                        '<option value="3">3阳台</option>' +
                                                        '<option value="4">4阳台</option>' +
                                                        '<option value="5">5阳台</option>' +
                                                        '<option value="6">6阳台</option>' +
                                                    '</select>' +
                                                '</li>' +
                                                '<li class="tender-form-item newbj-form-item">' +
                                                    '<input type="text" class="tender-form-input newbj-phone" id="pricePhone" name="phone"/>' +
                                                    '<span class="tender-form-font newbj-tips-font price-font">我们将发送预算明细到您的手机</span>' +
                                                '</li>' +
                                            '</ul>' +
                                        '</form>' +
                                        '<p id="priceBtn" class="newbj-calcBn" data-ptag="'+ self.options.pricePtag +'">' +
                                                '马上计算'+
                                        '</p>'+
                                        '<div class="tender-price-ad tender-price-imgad">' +
                                            '<p></p>' +
                                        '</div>' +
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
            //弹窗初始化           
            jq('.window_box').windowBox({
                width:880,    //弹框宽度
                height:460,
                title:"", //标题
                wbcStr:str,  //可编辑内容
                cancleBtn:false,    //是否显示取消按钮
                confirmBtn:false, // 是否显示确认按钮
                closeFn: 'CommonTenderPop.window_box_close'
            });
            self.options.fabiao_falg = false;//初始化标识
            //调用结果态方法
            jq('#priceCity,#priceShen').on('change',function(){
                self.fruit_dispose('');
            });
            jq('.tender-pop-con').show();
            jq('.window_box .window_box_title').css('position','absolute');
            jq('.window_box').css('overflow','visible');
            jq('.window_box').css({
                'border-radius':'0',
                '-o-border-radius':'0',
                '-webkit-border-radius':'0',
                '-moz-border-radius':'0'
            });
            // 新版效果图的报价样式。
            jq('#priceMterials').parent().css('margin-left','58px');
            jq('#priceDesign').parent().css('margin-left','58px');
            jq('.tender-pop-mfbj.tender-pop-left').css('overflow','hidden');
            // 根据图片的宽高自动延伸屏幕
            var imgSrcWidthHeight = new Image();
            imgSrcWidthHeight.src = self.options.imgSrcPage;
            if(imgSrcWidthHeight.height>=imgSrcWidthHeight.width){
                jq('.tender-pop-mfbj.tender-pop-left').find('img').width(440);
            }else{
                jq('.tender-pop-mfbj.tender-pop-left').find('img').height(460);
            }
            imgSrcWidthHeight = null;
            // 去掉图片底部的白条
            jq('.tender-pop-main').height(460);
            jq('.tender-pop-left').width(440).height(460);
            jq('.tender-pop-right').width(439);
            // jq('.window_box .window_box_container').css('display','block');
            jq('.tender-pop-title.littlefont').css({'padding-top':'33px','font-size':'28px;'});
            jq('.tender-price-newResult').css({'width':'312px','height':'54px'});
            jq('.tender-price-newResult').find('li').css('margin-bottom','-6px');
            jq('.tender-form-list').css('padding','10px 59px');

            //曝光 ptag
            if (self.options.exposurePtag) {
                (typeof clickStream !== 'undefined') && clickStream.getCvParams(self.options.exposurePtag);
            };
            //表单占位符初始化
            var inputArr = jq('.tender-form-input');
            for (var i = inputArr.length - 1; i >= 0; i--) {
                var inputDom = jq(inputArr[i]);
                self.showPlaceholder(jq(inputArr[i]));
            };
            // 该模块的报价初始化
            self.detailPrice();
        },
        //首页报价处理
        indexdetailPrice: function(){
            var self = this;
            
            //报价人数初始化
            self.getApplySum('.tender-pop-mfbj .num-man','xiaoguotu');
            //省市联动初始化
                gpmXGT.def_province = ["省/市", ""];
                gpmXGT.def_city1    = ["市/地区", ""]; 
                gpmXGT.initProvince($("priceShen"));

            jq('#priceShen').on('change', function(){
                changeProvince( "priceShen", "priceCity", "priceTown");
                jq('#priceCity').find('option').eq(1).attr('selected','selected');
            })
            jq('#priceCity').on('change', function(){
                changeTown( "priceShen", "priceCity", "priceTown");
            })
            // 输入后自动获取
            var autohuxing = jq('#priceSquare');
            autohuxing.on('keyup change', function(){
                var square = Number(jq(this).val());
                if(/^[1-9]{1}[0-9]{0,}$/.test(square)){
                    self.selectDoorModle(square, this, '#tenderPrice');
                }
            });
            self.allowClick('.price-check', '#priceBtn', 'no-allow')
            var doubleClick = false;
            var buttom = jq('#priceBtn');
            var buttomVideo = jq('#priceBtnVideo');
            buttomVideo.on('click',function(){
                jq('#tender-video-view').hide();
                jq('#tender-video-form').show();
            });
           /* var videoBigScreen = jq('#tender-video-wrapper-btn');
            videoBigScreen.on('click',function(){
                if (!jq(this).hasClass('open')) {
                    jq(this).addClass('open');
                    clickStream.getCvParams("1_1_1_1103");
                };
            });*/
            var first = false;
            buttom.on('click', function(){
                if(doubleClick || jq(this).hasClass('no-allow')){
                    return;
                }
                doubleClick = true;
                
                var data = {dangci: "jianzhuang",modeltype: 9,nowstep: 1,town: "",type: "detail",xgtqbj:"1"};

                data.onFirstStepEnd = function(resultData) {
                    doubleClick = false;

                    creatDetailBudget(resultData);
                    jq('#priceBtn').addClass('again');
                    jq('#priceBtn .tender-recalc').html('重新计算'); 
                    jq('.price-result-title').html('毛坯房半包装修预估价');

                    if (jq('.price-check').length > 0) {
                        jq('.price-check').parent().html('');    
                    };
					
                    self.options.index_pop = true;//标识为成功发标不能弹出在线咨询弹框 
                    self.options.fabiao_falg = true;//标识为成功
                    self.fruit_dispose('');
                    if(jq('#pricePhone').length > 0 && !(jq('#pricePhone').val() == self.phoneFlag)) {
                        first = true;
                        //入库成功后号码暂存
                        self.phoneFlag = jq('#pricePhone').val();            
                        jq('#pricePhone').parent().remove();
                        jq('.tender-pop-mfbj .tender-price-ad').css({'margin-top': '15px'}).html('<p class="tender-price-ad-video"><span id="video-first-text" class="holiday-text">* 稍后装修管家将致电您，为您提供免费装修咨询服务</span></p><p>* 因材料品牌及工程量不同，具体报价以量房实测为准。</p>');
                        setTimeout(function(){
                            jq('#video-first-text').css({
                                'color':"#E53333"
                            });
                        },0);
                        setTimeout(function(){
                            jq('#video-first-text').css({
                                'color':"#fe5f00"
                            });
                        },300);
                        setTimeout(function(){
                            jq('#video-first-text').css({
                                'color':"#E53333"
                            });
                        },600);
                        setTimeout(function(){
                            jq('#video-first-text').css({
                                'color':"#fe5f00"
                            });
                        },900);
                         setTimeout(function(){
                            jq('#video-first-text').css({
                                'color':"#E53333"
                            });
                        },1200);
                
                        setTimeout(function(){
                            jq('#video-first-text').css({
                                'color':"#fe5f00"
                            });
                         /*   var yuan = true;
                            var countMouse = 1;
                            setTimeout(function(){
                                jq('#tender-video-wrapper-hand').show();
                                
                  ,              handdleMouse();
                            },4000);*/
                            /*var handdleMouse = function(){
                                if (countMouse>2) {
                                    jq('#tender-video-wrapper-hand').animate({
                                        'width':'0',
                                        'height': '0'
                                    },50);
                                    return;
                                };
                                if (yuan) {
                                    jq('#tender-video-wrapper-hand').animate({
                                        'width':'30',
                                        'height': '25'
                                    },400);
                                    yuan = false;
                                    handdleMouse();
                                }
                                else {
                                     jq('#tender-video-wrapper-hand').animate({
                                        'width':'37',
                                        'height': '32'
                                    },400);
                                     yuan = true;
                                     countMouse++;
                                     handdleMouse();
                                }
                            };*/
                                
                        },1500);
                        
                    } else {
                        first = false;
                        jq('.tender-pop-mfbj .tender-price-ad').css({'margin-top': '15px'}).html('<p>* 因材料品牌及工程量不同，具体报价以量房实测为准。</p>');
                    }

                    //成功后四个tab数据同步
                    self.copyFormData(self.phoneFlag, data.square, data.shen, data.city);

                    self.date_unix_day();//年会和春节

                }
                if(self.checkForm('#tenderPrice')){
                    
                    if (jq('#pricePhone').length > 0) {
                        //判断入库号码是否与之前发标的号码一致
                        if (!(jq('#pricePhone').val() == self.phoneFlag)) {
                            data.phone = jq('#pricePhone').val();
                        };
                    };
                    data.ptag = buttom.attr('data-ptag');
                    data.shen = jq('#priceShen').val();
                    data.city = jq('#priceCity').val();
                    data.square = jq('#priceSquare').val();
                    data.shi = jq('#shi').val();
                    data.ting = jq('#ting').val();
                    data.wei = jq('#wei').val();
                    data.chu = jq('#chu').val();
                    data.yangtai = jq('#yangtai').val();
                    data.method = 'baojiaTb';

                    var sendMsg = new tender();
                    sendMsg.requestURL = 'http://to8tozb.to8to.com/zb/zb.php';
                    sendMsg.init(data);

                    jq('#tender-video-form').hide();
                    jq('#tender-video-view').show();
                   
                       var player = jwplayer("container").setup({
                                flashplayer: "http://img.to8to.com/swf/jwplayer.flash.swf",
                                file: "http://video.to8to.com/flv/to8tonew.flv",
                                height:200,
                                width:360,
                                stretching : 'fill',
                                streamer:"start",
                                provider:"http",
                                startparam: "start",
                                autostart: true
                        });
                                var ptagFirst = 1;
                                jwplayer().onTime(function(){
                                    var time = jwplayer("container").getPosition();
                                    if (first) { 
                                        if (0<time && time <= 30 && ptagFirst === 1) {
                                            if (self.options.fromPage === 'index') {
                                                clickStream.getCvParams('1_1_1_1103');
                                            }
                                            else if (self.options.fromPage === 'xiaoguotuIndex') {
                                                clickStream.getCvParams('1_2_1_1139');
                                            }
                                            else if(self.options.fromPage === 'xiaoguotuDetail'){
                                                clickStream.getCvParams('1_2_10_1142');
                                            }
                                            else{

                                            }
                                            ptagFirst = 2;
                                        }
                                        else if(time>30 && time<=120 && ptagFirst === 2){
                                            if (self.options.fromPage === 'index'){
                                                clickStream.getCvParams('1_1_1_1134');
                                            }
                                            else if (self.options.fromPage === 'xiaoguotuIndex') {
                                                clickStream.getCvParams('1_2_1_1140');
                                            }
                                            else if(self.options.fromPage === 'xiaoguotuDetail'){
                                                clickStream.getCvParams('1_2_10_1143');
                                            }
                                            else{

                                            }
                                            ptagFirst = 3;
                                        }
                                        else if(time>120 && ptagFirst  === 3){
                                             if (self.options.fromPage === 'index'){
                                                clickStream.getCvParams('1_1_1_1135');
                                             }
                                             else if (self.options.fromPage === 'xiaoguotuIndex') {
                                                clickStream.getCvParams('1_2_1_1141');
                                            }
                                            else if(self.options.fromPage === 'xiaoguotuDetail'){
                                                clickStream.getCvParams('1_2_10_1144');
                                            }
                                            else{

                                            }
                                            ptagFirst = 0;
                                        }
                                        else {
                                            return;
                                        }
                                    }
                                });
                }else{
                    doubleClick = false;
                }

                function creatDetailBudget(data) {
                    // 效果图等页面
                    if(self.options.showXGTImg){
                        jq('.tender-price-newResult').find('li').width('132px');
                        jq('.tender-price-newResult').find('li').css('margin-left','15px');
                    }
                    var total_price = (data.to8to_totle_price/10000).toFixed(1);
    
                    jq('#priceTotal').html(total_price);
                    jq('#priceMterials em').html(data.to8to_cl_price);
                    jq('#priceArtificial em').html(data.to8to_rg_price);
                    jq('#priceDesign').html('<em>0</em>元<del class="to8to_zj">'+ data.normal_sj_price +'元</del>');
                    jq('#priceQuality').html('<em>0</em>元<del class="to8to_zj">'+ data.normal_zj_price +'元</del>');
                        
                }
            });
        },
        //报价处理
        detailPrice: function(){
            var self = this;
            //报价人数初始化
            self.getApplySum('.tender-pop-mfbj .num-man','xiaoguotu');
            //省市联动初始化
                gpmXGT.def_province = ["省/市", ""];
                gpmXGT.def_city1    = ["市/地区", ""]; 
                gpmXGT.initProvince($("priceShen"));

            jq('#priceShen').on('change', function(){
                changeProvince( "priceShen", "priceCity", "priceTown");
                jq('#priceCity').find('option').eq(1).attr('selected','selected');
            })
            jq('#priceCity').on('change', function(){
                changeTown( "priceShen", "priceCity", "priceTown");
            })
            // 输入后自动获取
            var autohuxing = jq('#priceSquare');
            autohuxing.on('keyup change', function(){
                var square = Number(jq(this).val());
                if(/^[1-9]{1}[0-9]{0,}$/.test(square)){
                    self.selectDoorModle(square, this, '#tenderPrice');
                }
            });
            self.allowClick('.price-check', '#priceBtn', 'no-allow')
            var doubleClick = false;
            var buttom = jq('#priceBtn');
            buttom.on('click', function(){
                if(doubleClick || jq(this).hasClass('no-allow')){
                    return;
                }
                doubleClick = true;
                
                var data = {dangci: "jianzhuang",modeltype: 9,nowstep: 1,town: "",type: "detail",xgtqbj:"1"};

                data.onFirstStepEnd = function(resultData) {
                    doubleClick = false;

                    creatDetailBudget(resultData);
					//发标完成-记录 公共报价弹框报价发标成功
                    setCookie('zxzx_correlation_Flag','true',365*24*60*60*1000);//在线咨询相关cookie
                    //end 发标完成-记录 公共报价弹框报价发标成功
                    jq('#priceBtn').addClass('again');
                    jq('#priceBtn .tender-recalc').html('重新计算'); 
                    jq('.price-result-title').html('毛坯房半包装修预估价');

                    if (jq('.price-check').length > 0) {
                        jq('.price-check').parent().html('');
                    }
                    self.options.fabiao_falg = true;//标识为成功
                    self.fruit_dispose('');
                    if(jq('#pricePhone').length > 0 && !(jq('#pricePhone').val() == self.phoneFlag)) {
                        //入库成功后号码暂存
                        self.phoneFlag = jq('#pricePhone').val();            
                        jq('#pricePhone').parent().remove();
                        jq('.tender-pop-mfbj .tender-price-ad').css({'margin-top': '15px'}).html('<p><span class="holiday-text">* 稍后装修管家将致电您，为您提供免费装修咨询服务</span></p><p>* 因材料品牌及工程量不同，具体报价以量房实测为准。</p>');
                    } else {
                        jq('.tender-pop-mfbj .tender-price-ad').css({'margin-top': '15px'}).html('<p>* 因材料品牌及工程量不同，具体报价以量房实测为准。</p>');
                    }

                    //成功后四个tab数据同步
                    self.copyFormData(self.phoneFlag, data.square, data.shen, data.city);

                    self.date_unix_day();//年会和春节

                    // 新版效果图报价成功后右侧清空。左侧换图片。
                    if((self.options.imgNewBJ && self.options.showXGTImg) || self.options.showResult){
                        var luodiye = false, // 是否是落地页
                            luodiye_xuan = false, // 是否展示整装包
                            user_city = jq('#priceCity').val(); // 用户报价城市。
                        jq('.tender-pop-right .littlefont').css('padding-top','33px');
                        // 清除报价前的样式。
                        jq('#tenderPrice').remove();
                        jq('.newbj-calcBn').remove();
                        jq('.tender-pop-mfbj.tender-pop-left').html('');
                        if(user_city === '北京'|| user_city === '上海'|| user_city === '深圳'|| user_city === '广州'|| user_city === '南京'|| user_city === '苏州'|| user_city === '长沙'|| user_city === '东莞'|| user_city === '武汉'|| user_city === '杭州'|| user_city === '厦门'|| user_city === '福州'|| user_city === '无锡'|| user_city === '合肥'|| user_city === '成都'|| user_city === '昆明'|| user_city === '天津'|| user_city === '郑州'|| user_city === '西安'|| user_city === '南宁'|| user_city === '贵阳'|| user_city === '沈阳'|| user_city === '大连'|| user_city === '昆山'|| user_city === '常州'|| user_city === '佛山'|| user_city === '重庆'){
                            luodiye = true;
                            if(user_city === '深圳' || user_city === '广州' || user_city === '南京' || user_city === '苏州' || user_city === '长沙' || user_city === '东莞' || user_city === '北京' || user_city === '上海'){
                                luodiye_xuan = true;
                            }
                        }
                        // 填充右侧内容
                        fillRight(luodiye,user_city);
                        // 填充左侧内容。
                        fillLeft(luodiye,luodiye_xuan);
                    }
                }
                if(self.checkForm('#tenderPrice')){
                    
                    if (jq('#pricePhone').length > 0) {
                        //判断入库号码是否与之前发标的号码一致
                        if (!(jq('#pricePhone').val() == self.phoneFlag)) {
                            data.phone = jq('#pricePhone').val();
                        };
                    };
                    data.ptag = buttom.attr('data-ptag');
                    data.shen = jq('#priceShen').val();
                    data.city = jq('#priceCity').val();
                    data.square = jq('#priceSquare').val();
                    data.shi = jq('#shi').val();
                    data.ting = jq('#ting').val();
                    data.wei = jq('#wei').val();
                    data.chu = jq('#chu').val();
                    data.yangtai = jq('#yangtai').val();
                    data.method = 'baojiaTb';

                    var sendMsg = new tender();
                    sendMsg.requestURL = 'http://to8tozb.to8to.com/zb/zb.php';
                    sendMsg.init(data);
                }else{
                    doubleClick = false;
                }

                function creatDetailBudget(data) {
                    // 效果图等页面
                    if(self.options.showXGTImg){
                        jq('.tender-price-newResult').find('li').width('132px');
                        jq('.tender-price-newResult').find('li').css('margin-left','15px');
                        jq('.tender-title-text').html('万元');
                    }
                    var total_price = (data.to8to_totle_price/10000).toFixed(1);
    
                    jq('#priceTotal').html(total_price);
                    jq('#priceMterials em').html(data.to8to_cl_price);
                    jq('#priceArtificial em').html(data.to8to_rg_price);
                    jq('#priceDesign').html('<em>0</em>元<del class="to8to_zj">'+ data.normal_sj_price +'元</del>');
                    jq('#priceQuality').html('<em>0</em>元<del class="to8to_zj">'+ data.normal_zj_price +'元</del>');
                        
                }
                // 填充右侧结果态
                function fillRight(is_ldy,city){
                    //为深圳展示这个
                    if (city == '深圳') {
                        jq('#tenderPrice').remove();
                        return false;
                    }
                    if(jq('.tender-pop-showImg').length>0){
                        jq('.tender-pop-showImg').remove();
                    }
                    // 右侧添加节点
                    var newbjResult = '<p class="newbj-result-server">您还获得一项增值服务</p>'+
                                      '<p class="newbj-result-design">免费上门量房出设计方案</p>'+
                                      '<em class="newbj-result-jpg"></em>';
                    jq('.tender-pop-mfbj .tender-price-ad').html('');
                    jq('.tender-price-ad.tender-price-imgad').before(newbjResult);

                    // 落地态与非落地态的图片不一致。
                    if(is_ldy){
                        // 落地页
                        jq('.newbj-result-jpg').css('background','url(http://img.to8to.com/to8to_img/zxbj/newbj_result_jpg.jpg) no-repeat -18px 0px');
                    }else{
                        // 非落地页背景图片
                        jq('.newbj-result-jpg').css('background','url(http://img.to8to.com/to8to_img/zxbj/fldy_newbj_result_jpg.jpg) no-repeat -14px -2px');
                    }
                    jq('.tender-price-ad').append('<p class="newBJ-result-text holiday-text">* 稍候装修管家将回电您，免费提供装修咨询服务</p><p class="newBJ-result-warn">* 因材料品牌及工程量不同，具体报价以量房实测为准<p>');

                    // self.date_unix_day();//年会和春节

                    var date1 = new Date('2017/1/7 18:30:00');
                        date1_unix = date1.getTime();
                    var date2 = new Date('2017/1/9 23:59:59');
                        date2_unix = date2.getTime();
                    var date = new Date();
                        date_unix = date.getTime();
                    if(date1_unix<=date_unix && date_unix<=date2_unix){
                        jq('.holiday-text').html('亲爱的业主，因公司年会放假(1月8日-1月9日)，很抱歉未能及时与您联系。我们将于1月10日立即给您回电，免费提供装修咨询服务。');
                        jq('.tender-pop-main').css({'height':'482px'});
                        jq('.tender-pop-tabs li span').css({'height':' 91px'});
                        jq('.tender-price-ad').css({'margin':'20px 35px 0'});
                        jq('.newBJ-result-warn').remove();
                    }

                    var year1 = new Date('2017/1/22 18:30:00');
                        year1_unix = year1.getTime();
                    var year2 = new Date('2017/2/2 23:59:59');
                        year2_unix = year2.getTime();
                    var year = new Date();
                        year_unix =  year.getTime();
                    if(year1_unix<=year_unix && year_unix<=year2_unix){
                        jq('.holiday-text').html('亲爱的业主，因春节期间放假(1月23日-2月2日)，很抱歉未能及时与您联系。年后我们将第一时间给您回电，免费提供装修咨询服务！');
                        jq('.tender-pop-main').css({'height':'482px'});
                        jq('.tender-pop-tabs li span').css({'height':' 91px'});
                        jq('.tender-price-ad').css({'margin':'20px 35px 0'});
                        jq('.newBJ-result-warn').remove();
                    }
                            
                    /******************************************************************************************************************
                     * 2016/11/14 by fidermo.hu 以下switch因目前报价电话不确定，故注释<span class="region-phone"></span>。改为固定0755
                     ******************************************************************************************************************/

                    /*switch(Boolean(Boolean(city))){
                        case city === '上海':
                            jq('.region-phone').html('021');
                        break;
                        case city === '广州':
                            jq('.region-phone').html('020');
                        break;
                        case city === '西安':
                            jq('.region-phone').html('029');
                        break;
                        case city === '苏州':
                            jq('.region-phone').html('0512');
                        break;
                        case city === '南京':
                            jq('.region-phone').html('025');
                        break;
                        case city === '成都':
                            jq('.region-phone').html('028');
                        break;
                        case city === '北京':
                            jq('.region-phone').html('010');
                        break;
                        case city === '杭州':
                            jq('.region-phone').html('0571');
                        break;
                        case city === '沈阳':
                            jq('.region-phone').html('024');
                        break;
                        default:
                            jq('.region-phone').html('0755');
                        break;
                    jq('.tender-price-ad').css('margin-left','30px');
                    }*/
                }
                // 填充左侧结果态
                function fillLeft(is_ldy,is_xuan){
                    self.options.ptagTimes = 0; // 品宣图点击次数
                    // 区分落地页与非落地页 图片文案都有变化
                    if(is_ldy){
                        // 落地页
                        var luodiye_Result = '<p class="result-title">选土巴兔，享多重专属定制服务'+
                                             '<div class="slide-container">'+
                                                '<ul class="Result-newBJ-right">'+
                                                   '<li>'+
                                                        '<img alt="" src="http://img.to8to.com/to8to_img/zxbj/luodiye_zxgj.jpg">'+
                                                   '</li>'+
                                                   '<li class="dn">'+
                                                        '<img alt="" src="http://img.to8to.com/to8to_img/zxbj/luodiye_zysj.jpg">'+
                                                   '</li>'+
                                                   '<li class="dn">'+
                                                        '<img alt="" src="http://img.to8to.com/to8to_img/zxbj/luodiye_gzys.jpg">'+
                                                   '</li>'+
                                                   '<li class="dn">'+
                                                        '<img alt="" src="http://img.to8to.com/to8to_img/zxbj/luodiye_sjzzb.jpg">'+
                                                   '</li>'+
                                                '</ul>'+
                                                '<div>'+
                                                    '<a href="javascript:void(0);" class="lastPic">'+
                                                        '<span></span>'+
                                                    '</a>'+
                                                    '<a href="javascript:void(0);" class="nextPic">'+
                                                        '<span></span>'+
                                                    '</a>'+
                                                    '<ul class="slider-newBJ">'+
                                                        '<li>'+
                                                            '<a href="javascript:void(0);" class="slider-On"></a>'+
                                                        '</li>'+
                                                        '<li>'+
                                                            '<a href="javascript:void(0);"></a>'+
                                                        '</li>'+
                                                        '<li>'+
                                                            '<a href="javascript:void(0);"></a>'+
                                                        '</li>'+
                                                        '<li>'+
                                                            '<a href="javascript:void(0);"></a>'+
                                                        '</li>'+
                                                    '</ul>'+
                                                '</div>'+
                                             '</div>' +
                                             '<div>'+
                                                '<p class="result-bottom">装修管家全程陪伴，省心更放心</p>'+
                                                '<p class="result-bottom">时刻跟进协调您的工地情况</p>'+
                                                '<p class="result-bottom dn">专业设计师1对1服务</p>'+
                                                '<p class="result-bottom dn">免费体验3D效果图工具，美家触手可及</p>'+
                                                '<p class="result-bottom dn">专业工长死磕装修5大节点验收</p>'+
                                                '<p class="result-bottom dn">保证施工质量固若金汤</p>'+
                                                '<p class="result-bottom dn">推出升级整装包，高颜值、高配置、大品牌</p>'+
                                                '<p class="result-bottom dn">施工+主材+辅材+风格定制+售后一条龙服务</p>'+
                                             '</div>';
                        jq('.tender-pop-mfbj.tender-pop-left').append(luodiye_Result);
                        if(!is_xuan){
                            jq('.Result-newBJ-right').find('li').eq(3).remove();
                            jq('.slider-newBJ').find('li').eq(3).remove();
                            jq('.slider-newBJ').width(42);
                        }
                    }else{
                        // 非落地页
                        var feiLuodiye_Result = '<p class="result-title">选土巴兔，享3重专属定制服务'+
                                             '<div class="slide-container">'+
                                                '<ul class="Result-newBJ-right">'+
                                                   '<li>'+
                                                        '<img alt="" src="http://img.to8to.com/to8to_img/zxbj/fldy_zxgj.jpg">'+
                                                   '</li>'+
                                                   '<li class="dn">'+
                                                        '<img alt="" src="http://img.to8to.com/to8to_img/zxbj/fldy_smlf.jpg">'+
                                                   '</li>'+
                                                   '<li class="dn">'+
                                                        '<img alt="" src="http://img.to8to.com/to8to_img/zxbj/fldy_sjg.jpg">'+
                                                   '</li>'+
                                                '</ul>'+
                                                '<div>'+
                                                    '<a href="javascript:void(0);" class="lastPic">'+
                                                        '<span></span>'+
                                                    '</a>'+
                                                    '<a href="javascript:void(0);" class="nextPic">'+
                                                        '<span></span>'+
                                                    '</a>'+
                                                    '<ul class="slider-newBJ">'+
                                                        '<li>'+
                                                            '<a href="javascript:void(0);" class="slider-On"></a>'+
                                                        '</li>'+
                                                        '<li>'+
                                                            '<a href="javascript:void(0);"></a>'+
                                                        '</li>'+
                                                        '<li>'+
                                                            '<a href="javascript:void(0);"></a>'+
                                                        '</li>'+
                                                    '</ul>'+
                                                '</div>'+
                                             '</div>'+
                                             '<p class="result-bottom">装修管家全面了解您的装修需求</p>'+
                                             '<p class="result-bottom">推荐1-3家优质装修公司上门量房</p>'+
                                             '<p class="result-bottom dn">电话灵活安排量房时间</p>'+
                                             '<p class="result-bottom dn">专业设计免费上门量房</p>'+
                                             '<p class="result-bottom dn">3个工作日内出设计稿</p>'+
                                             '<p class="result-bottom dn">多家公司方案供您选择，签约最适合公司</p>';
                        jq('.tender-pop-mfbj.tender-pop-left').append(feiLuodiye_Result);
                        jq('.slider-newBJ').width(42);
                    }
                    // 滑动图片与显示上一张，下一张。
                    jq('.lastPic').on('click',function(){
                        sliderImg('prev',0);
                    });
                    jq('.nextPic').on('click',function(){
                        sliderImg('next',0);
                    });
                    jq('.slider-newBJ').on('mouseenter','li',function(){
                        if(jq(this).find('a').hasClass('slider-On')){
                            return;
                        }
                        jq('.Result-newBJ-right').children('li').stop(true,true);
                        var serial = jq(this).index();
                        jq(this).children('a').addClass('slider-On').end().siblings().find('a').removeClass('slider-On');
                        sliderImg('slider',serial);
                    });
                    // jq('.slide-container').on('mouseenter',function(){
                    //     jq('.lastPic').removeClass('dn');
                    //     jq('.nextPic').removeClass('dn');
                    // }).on('mouseleave',function(){
                    //     jq('.lastPic').addClass('dn');
                    //     jq('.nextPic').addClass('dn');
                    // });
                }
                // 切换图片
                function sliderImg(actionClass,serial){
                    switch(Boolean(actionClass)){
                        case actionClass === 'prev':
                            if(jq('.Result-newBJ-right').find('li:visible').prev().length>0){
                                jq('.Result-newBJ-right').find('li:visible').fadeOut(100,function(){
                                    jq(this).prev().fadeIn(100,showRicyle);
                                });
                            }else{
                                jq('.Result-newBJ-right').find('li:visible').fadeOut(100,function(){
                                    jq('.Result-newBJ-right').children(':last').fadeIn(100,showRicyle);
                                });
                            }
                        break;
                        case actionClass === 'next':
                            if(jq('.Result-newBJ-right').find('li:visible').next().length>0){
                                jq('.Result-newBJ-right').find('li:visible').fadeOut(100,function(){
                                    jq(this).next().fadeIn(100,showRicyle);
                                });
                            }else{
                                jq('.Result-newBJ-right').find('li:visible').fadeOut(100,function(){
                                    jq('.Result-newBJ-right').children('li').eq(0).fadeIn(100,showRicyle);
                                });
                            }
                        break;
                        case actionClass === 'slider':
                            setTimeout(function(){jq('.Result-newBJ-right').find('li:visible').fadeOut(100,function(){
                                jq('.Result-newBJ-right').children('li').eq(serial).fadeIn(100,function(){
                                    var servalal = jq('.Result-newBJ-right').find('li:visible').index();
                                    jq('.result-bottom').addClass('dn').eq(servalal*2).removeClass('dn').next().removeClass('dn');
                                })});
                            },0);
                        break;
                    }
                    // 一次和三次点击浏览品宣图各记一次点击流。
                    self.options.ptagTimes++;
                    if(self.options.ptagTimes === 1){
                        if(clickPtagArr.join().indexOf(self.options.onceTimes) === -1){
                            (typeof clickStream !== 'undefined') && clickStream.getCvParams(self.options.onceTimes);
                            clickPtagArr.push(self.options.onceTimes);
                        }
                    }
                    if(self.options.ptagTimes === 3){
                        if(clickPtagArr.join().indexOf(self.options.twiceTimes) === -1){
                            (typeof clickStream !== 'undefined') && clickStream.getCvParams(self.options.twiceTimes);
                            clickPtagArr.push(self.options.twiceTimes);
                        }
                    }
                };
                // 实时显示圆点
                function showRicyle(){
                    var servalal = jq('.Result-newBJ-right').find('li:visible').index();
                    jq('.slider-newBJ').find('a').eq(servalal).addClass('slider-On').parent().siblings().find('a').removeClass('slider-On');
                    jq('.result-bottom').addClass('dn').eq(servalal*2).removeClass('dn').next().removeClass('dn');
                };
            });
        },
        //设计处理
        detailDesign: function(){
            var self = this;
            
                gpmMFSJ.def_province = ["省/市", ""];
                gpmMFSJ.def_city1    = ["市/地区", ""]; 
                gpmMFSJ.initProvince($("designShen"));

            jq('#designShen').on('change', function(){
                changeProvince( "designShen", "designCity", "designTown");
                jq('#designCity').find('option').eq(1).attr('selected','selected');
            })
            jq('#designCity').on('change', function(){
                changeTown( "designShen", "designCity", "designTown");
            })

            var mfsjbtn = jq('#designBtn');
            var mfsjdoubleClick = false;
            
            self.allowClick('.design-check', '#designBtn', 'no-allow');

            mfsjbtn.on('click',function(){
                if(mfsjdoubleClick || jq(this).hasClass('no-allow')){
                    return;
                }
                mfsjdoubleClick = true;
                var data = {
                    dangci: "jianzhuang",
                    modeltype: 1,
                    nowstep: 1,
                    type: "detail",
                    autoPop:2,
                    "module_source": "ordinary"
                };
                data.onFirstStepEnd = function(resultData) {
                    mfsjdoubleClick = false;
                    jq('.tender-init-mfsj').hide().siblings('.tender-result-mfsj').show();
                    jq('.tender-mfsjinit-img').find('em').css({
                        'background-position':'-359px -1px',
                        'width':'303px',
                        'height':'322px'
                    });
					self.options.index_pop = true;//标识为普通的首页5秒弹框 发标成功
                    if(jq('#designPhone').length > 0 && !(self.phoneFlag == jq('#designPhone').val())) {
                        //入库成功后号码暂存
                        self.phoneFlag = jq('#designPhone').val();             
                    } else {
                        jq('.tender-result-mfsj .tender-result-explain').hide();
                    }

                    //成功后四个tab数据同步
                    self.copyFormData(self.phoneFlag, data.square, data.shen, data.city);
                }
                // 发标数据
                if(self.checkFormmfsj()){
                    //判断入库号码是否与之前发标的号码一致
                    if (!(jq('#designPhone').val() == self.phoneFlag)) {
                         data.phone = jq('#designPhone').val();
                    };
                    data.ptag = mfsjbtn.attr('data-ptag');
                    data.shen = jq('#designShen').val();
                    data.city = jq('#designCity').val();
                    data.chenghu = jq('#designName').val();
                    data.method = 'baojiaTb';

                    var sendMsg = new tender();
                    sendMsg.requestURL = 'http://to8tozb.to8to.com/zb/zb.php';
                    sendMsg.init(data);
                }else{
                    mfsjdoubleClick = false;
                }
            });
        },
        //装修公司处理
        detailCompany: function(){
            var self = this;
            setTimeout(function(){
                self.getApplySum('.tender-pop-company .num-man','to8to');
            }, 1000)
            
                gpmCom.def_province = ["省/市", ""];
                gpmCom.def_city1    = ["市/地区", ""]; 
                gpmCom.initProvince($("companyShen"));

            jq('#companyShen').on('change', function(){
                changeProvince( "companyShen", "companyCity", "companyTown");
                jq('#companyCity').find('option').eq(1).attr('selected','selected');
            })
            jq('#companyCity').on('change', function(){
                changeTown( "companyShen", "companyCity", "companyTown");
            })

            //获取楼盘初始化
            jq("#companyHouses").on('keyup keydown',function(){
                var loupan = jq(this).val();
                if(loupan != 'undefined' && loupan != ''){
                    self.getHouses({'shen':jq('#companyShen').val(), 'city': jq('#companyCity').val(), 'loupan_key': loupan} );
                }    
            });
            var companybtn = jq('#companyBtn');
            var mfsjdoubleClick = false;
            
            self.allowClick('.company-check', '#companyBtn', 'no-allow');

            companybtn.on('click',function(){

                if(mfsjdoubleClick || jq(this).hasClass('no-allow')){
                    return;
                }
                mfsjdoubleClick = true;
                var data = {
                    dangci: 'jianzhuang',
                    modeltype: 1,
                    nowstep: 1,
                    type: "detail",
                    autoPop:2,
                    module_source: "company",
                    not_send_mobile_msg: '1'
                };
                data.onFirstStepEnd = function(res) {
                    mfsjdoubleClick = false;
                    jq('#companyBtn').addClass('again');
                    jq('#companyBtn .tender-recalc').html('重新查询');
                    jq('.tender-pop-company .tender-price-result').hide();
                    companyResultList(res.companyData, '.tender-company-result');
                    jq('.tender-form-explain').show();
                    if (jq('.company-check').length > 0) {
                        jq('.company-check').parent().html('');    
                    };
                    if(jq('#companyPhone').length > 0 && !(self.phoneFlag == jq('#companyPhone').val())) {
                        //入库成功后号码暂存
                        self.phoneFlag = jq('#companyPhone').val();             
                        jq('#companyPhone').parent().remove();  
                    } else {
                        jq('.tender-pop-company.tender-pop-right .tender-form-explain').hide();
                    }

                    //成功后四个tab数据同步
                    self.copyFormData(self.phoneFlag, data.square, data.shen, data.city);

                    self.date_unix_day();//年会和春节

                }
                // 发标数据
                if(self.checkFormCompany()){
                    if(jq('#companyPhone').length > 0) {          
                        //判断入库号码是否与之前发标的号码一致
                        if (!(jq('#companyPhone').val() == self.phoneFlag)) {
                            data.phone = jq('#companyPhone').val();
                        };
                    }
                    data.ptag = companybtn.attr('data-ptag');
                    data.shen = jq('#companyShen').val();
                    data.city = jq('#companyCity').val();
                    data.a_price = jq('#acceptPrice').val();
                    data.houses = jq('#companyHouses').val();

                    var sendMsg = new tender();
                    sendMsg.init(data);
                }else{
                    mfsjdoubleClick = false;
                }
            });

            function companyResultList(companyData, parentDOM) {
                var companyLen = companyData.length;
                if (!companyData || companyLen == 0) {
                    return;
                };
                var companyDom ='';
                for(var i = 0; i < companyLen; i++) {
                    companyDom +='<dl class="tender-company-result-list clear">'+
                        '<dt><a href="'+ companyData[i].homepage +'" target="_blank" rel="nofollow">'+
                            '<img src="'+ companyData[i].headphoto+'"></a></dt>'+
                        '<dd>'+
                            '<div class="tender-company-name">'+
                                '<h4><a href="'+ companyData[i].homepage +'" target="_blank" rel="nofollow">'+ companyData[i].shortname +'</a></h4>'+
                                '<p>已有<span>&nbsp;'+ companyData[i].nums +'&nbsp;</span>人咨询<p>'+
                            '</div>'+
                            '<div class="tender-company-detail">'+
                                '<p>认证级别：<span>'+ companyData[i].credit_level +'</span></p>'+
                                '<p>口碑值：<span>'+ companyData[i].xinyon +'</span></p>'+
                                '<p>好评率：<span>'+ companyData[i].comment_good_rate +'%</span></p>'+
                            '</div>'+
                        '</dd>'+
                    '</dl>';
                }
                jq(parentDOM).html(companyDom).show();
            }
        },
        detailMaterial: function(){
            var self = this;
            //省市联动初始化
           
                gpmMat.def_province = ["省/市", ""];
                gpmMat.def_city1    = ["市/地区", ""]; 
                gpmMat.initProvince($("materialShen"));

            jq('#materialShen').on('change', function(){
                changeProvince( "materialShen", "materialCity", "materialTown");
                jq('#materialCity').find('option').eq(1).attr('selected','selected');
            })
            jq('#materialCity').on('change', function(){
                changeTown( "materialShen", "materialCity", "materialTown");
            })

            // 输入后自动获取
            var autohuxing = jq('#materialSquare');
            autohuxing.on('keyup change', function(){
                var square = Number(jq(this).val());
                if(/^[1-9]{1}[0-9]{0,}$/.test(square)){
                    self.selectDoorModle(square, this, '#tenderMaterial');
                }
            });
            self.allowClick('.material-check', '#materialBtn', 'no-allow')
            var doubleClick = false;
            var buttom = jq('#materialBtn');
            buttom.on('click', function(){
                if(doubleClick || jq(this).hasClass('no-allow')){return;}
                doubleClick = true;
                
                if(self.checkForm('#tenderMaterial')){
                    var data = {
                        modeltype: 1,
                        nowstep: 1,
                        module_source:"zxcl",
                        autoPop: 2
                    };
                    var materialData = {
                        home_square: jq('#materialSquare').val(),
                        home_shi: jq('#materialShi').val(),
                        home_ting: jq('#materialTing').val(),
                        home_chu: jq('#materialChu').val(),
                        home_wei: jq('#materialWei').val(),
                        home_yangtai: jq('#materialYangtai').val(),
                        home_html5: 1
                    }

                    jq.ajax({
                        type: 'get',
                        url: 'http://www.to8to.com/yezhu/materialList.php',
                        dataType: 'jsonp',
                        data: materialData,
                        jsonpCallback: 'jsonpCallback',
                        success: function(res) {
                            
                            var resData = {};
                            for(var i in res) {
                                resData[i] = Math.ceil(res[i]);
                            }
                            jq('#dzDawing').html(resData.ting_dizhuan);
                            jq('#ddKitchen').html(resData.chu_diaoding);
                            jq('#dbBedroom').html(resData.shi_diban);
                            jq('#ddWash').html(resData.wei_diaoding);
                            jq('#dzKitchen').html(resData.chu_dizhuan);
                            jq('#jjWash').html(resData.wei_jieju);
                            jq('#qzKitchen').html(resData.chu_qiangzhuan);
                            jq('#timber').html(resData.mumen);
                            jq('#dzWash').html(resData.wei_dizhuan);
                            jq('#aluminiumDoor').html(resData.lvmen);
                            jq('#qzWash').html(resData.wei_qiangzhuan);

                            
                            data.ptag = buttom.attr('data-ptag');
                            data.shen = jq('#materialShen').val();
                            data.city = jq('#materialCity').val();
                            data.square = jq('#materialSquare').val();
                            data.shi = jq('#materialShi').val();
                            data.ting = jq('#materialTing').val();
                            data.wei = jq('#materialWei').val();
                            data.chu = jq('#materialChu').val();
                            data.yangtai = jq('#materialYangtai').val();
                            data.zzcost = (resData.zccost/10000).toFixed(2);
                           
                            data.onFirstStepEnd = function(resultData) {
                                materialResult();
                            }

                            //判断入库号码是否与之前发标的号码一致
                            if ( (jq('#materialPhone').length > 0)  && !(jq('#materialPhone').val() == self.phoneFlag)) {
                                data.phone = jq('#materialPhone').val();
                                var sendMsg = new tender();
                                sendMsg.init(data);
                            } else {
                                materialResult();
                            };

                            function materialResult() {
                                doubleClick = false;
                                jq('.tender-pop-material .tender-price-ad p').css('width', '300px');
                                jq('#materialBtn').addClass('again');
                                jq('#materialBtn .tender-recalc').html('重新计算');
                                if (jq('.material-check').length > 0) {
                                    jq('.material-check').parent().html('');    
                                };
                                if(jq('#materialPhone').length > 0) {
                                    //入库成功后号码暂存
                                    self.phoneFlag = jq('#materialPhone').val();               
                                    if (!(jq('#materialPhone').val() == self.phoneFlag)) {
                                        jq('.tender-pop-material .tender-price-ad').html('<p><span class="holiday-text">* 稍后装修管家将回电您，免费提供装修咨询服务。</span></p><p>*  因材料品牌及工程量不同，具体用量以实际施工为准。</p>');    
                                    } else {
                                        jq('.tender-pop-material .tender-price-ad').html('<p>*  因材料品牌及工程量不同，具体用量以实际施工为准。</p>');
                                    };
                                    jq('#materialPhone').parent().remove(); 
                                } else {
                                    jq('.tender-pop-material .tender-price-ad').html('<p>*  因材料品牌及工程量不同，具体用量以实际施工为准。</p>');
                                }
                               
                                //成功后四个tab数据同步
                                self.copyFormData(self.phoneFlag, data.square, data.shen, data.city);

                                slef.date_unix_day();//年会和春节
                            }
                        }
                    })
                    
                }else{
                    doubleClick = false;
                }
            })
        },
        //表单校验
        checkForm: function(formName){
            var chkArr = [
                {
                    id: jq(formName +' select[name="shen"]')[0],
                    className: 'form_error',
                    labl: 'em',
                    lablClass: 'ico_error',
                    info: [{
                        reg: [0],
                        tip: '请输入选择您的所在地'
                    }],
                    parentTip: formName
                },
                {
                    id: jq(formName +' select[name="city"]')[0],
                    className: 'form_error',
                    labl: 'em',
                    lablClass: 'ico_error',
                    info: [{
                        reg: [0],
                        tip: '请输入选择您的所在地'
                    }],
                    parentTip: formName
                },
                {
                    id: jq(formName +' input[name="square"]')[0],
                    className: 'form_error',
                    labl: 'em',
                    lablClass: 'ico_error',
                    info: [{
                        reg:[0],
                        tip:'请输入房屋面积'
                    },{
                        reg:[/^\d+(\.[0-9]?[1-9]{1})?$/],
                        tip:'房屋面积不能超过两位小数'
                    },{
                        reg:[/^[0-4]{1}(\.[0-9]?[1-9]{1})?$/],
                        tip:'房屋面积必须大于5', negate:true
                    },{
                        reg:[/^[1-9]{1}[0-9]{0,2}(\.[0-9]?[1-9]{1})?$|^1000$/],
                        tip: '房屋面积必须是1000以内'
                    }],
                    parentTip: formName
                    }];
                var phoneArr = {
    	                id: jq(formName +' input[name="phone"]')[0],
    	                className: 'form_error',
    	                labl: 'em',
    	                lablClass: 'ico_error',
    	                info: [{
    	                    reg: [0],
    	                    tip: '请输入手机号码'
    	                },{
    	                    reg: [/^1{1}[34578]{1}\d{9}$/],
    	                    tip: '请输入正确的手机号码'
    	                }],
                        parentTip: formName
    	            };
    	        if (jq(formName +' input[name="phone"]').length > 0) {
                	chkArr = chkArr.concat(phoneArr);
                };
            return simplifyCheck2(chkArr);
        },
        // 免费设计表单校验
        checkFormmfsj: function(){
            var chkArr = [
                {
                    id: jq('#designShen'),
                    className: 'form_error',
                    labl: 'em',
                    lablClass: 'ico_error',
                    info: [{
                        reg: [0],
                        tip: '请输入选择您的所在地'
                    }],
                    parentTip: '.tender-pop-mfsj'
                },
                {
                    id: jq('#designCity'),
                    className: 'form_error',
                    labl: 'em',
                    lablClass: 'ico_error',
                    info: [{
                        reg: [0],
                        tip: '请输入选择您的所在地'
                    }],
                    parentTip: '.tender-pop-mfsj'
                },
                {
                    id: jq('#designName'),
                    className: 'form_error',
                    labl: 'em',
                    lablClass: 'ico_error',
                    info: [{
                        reg: [0],
                        tip: '请输入您的称呼'
                    }],
                    parentTip: '.tender-pop-mfsj'
                },
                {
                    id: jq('#designPhone'),
                    className: 'form_error',
                    labl: 'em',
                    lablClass: 'ico_error',
                    info: [{
                        reg: [0],
                        tip: '请输入手机号码'
                    },{
                        reg: [/^1{1}[34578]{1}\d{9}$/],
                        tip: '请输入正确的手机号码'
                    }],
                    parentTip: '.tender-pop-mfsj'
                }
            ];
            return simplifyCheck2(chkArr);
        },
        //装修公司数据校验
        checkFormCompany: function(){
            var chkArr = [{
                id: '#companyShen',
                parentTip: '#tenderCompany',
                className: 'form_error',
                labl: 'em',
                lablClass: 'ico_error',
                info: [{
                    reg: [0],
                    tip: '请选择所在地'
                }]
            },{
                id: '#companyCity',
                parentTip: '#tenderCompany ',
                className: 'form_error',
                labl: 'em',
                lablClass: 'ico_error',
                info: [{
                    reg: [0],
                    tip: '请选择所在地'
                }]
            },{
                id: '#companyHouses',
                parentTip: '#tenderCompany ',
                className: 'form_error',
                labl: 'em',
                lablClass: 'ico_error',
                info: [{
                    reg: [0],
                    tip: '请输入楼盘名称'
                }]
            },{
                id: '#acceptPrice',
                parentTip: '#tenderCompany',
                className: 'form_error',
                labl: 'em',
                lablClass: 'ico_error',
                info: [{
                    reg: [0],
                    tip: '请输入承接价格'
                }]
            }];
            var phoneRule = {
                id: '#companyPhone',
                parentTip: '#tenderCompany',
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

            if (jq('#companyPhone').length > 0) {
                chkArr.push(phoneRule);
            };
            return simplifyCheck2(chkArr);
        },
        //占位符
        showPlaceholder: function(inputDom){
            var placeholder = inputDom.parent().find('.tender-form-font');
            inputDom.parent().bind('click', function(e){
                var target = jq(e.target);
                if(!target.hasClass('tender-form-font') && !target.hasClass('tender-form-input') && !target.hasClass('tender-form-sup')){
                    return;
                }
                inputDom.focus();
            });
            inputDom.bind('focus', function(){
                inputDom.bind('keydown',function() {
                    if (inputDom.val() === '') {
                        placeholder.hide();
                    }
                });
                inputDom.bind('keyup', function() {
                    if (inputDom.val() === '') {
                        placeholder.show();
                    }
                });
                inputDom.bind('blur', function() {
                    if (inputDom.val() === '') {
                        placeholder.show();
                    }
                    inputDom.unbind('keydown');
                    // inputDom.unbind('keyup');
                    inputDom.unbind('blur');
                });
            });
        },
        //提交按钮可否点击
        allowClick: function(checkBox, clickBtn, allowClass){

            jq(checkBox).on('click',function(){
                if(jq(checkBox).is(':checked')){
                    // find('em').css('background-position-y','-347px');
                    jq(clickBtn).removeClass(allowClass);
                }else{
                    jq(clickBtn).addClass(allowClass);
                    // find('em').css('background-position-y','-407px');
                }
            });
        },
        //获取报价人数
        getApplySum: function (ele,data){
            jq.ajax({
                type:'get',
                dataType:'jsonp',
                cache:true,
                url:'http://www.to8to.com/zb/sumTender.php',
                data:'act='+ data,
                jsonpCallback: "jsonpCallback",//服务端用于接收callback调用的function名的参数
                success:function(msg){
                    jq(ele).html(msg.num);
                }
            })
        },
        //根据面积显示户型
        selectDoorModle: function(square, squareEle, form){
            if (square + '' == 'NaN' || jq(squareEle).val() == '') {
                return;
            };        
            if (square < 60) {
                jq(form + ' select[name="shi"]').val(1);
                jq(form + ' select[name="ting"]').val(1);
                jq(form + ' select[name="chu"]').val(1);
                jq(form + ' select[name="wei"]').val(1);
                jq(form + ' select[name="yangtai"]').val(1);
            } else if (square >= 60 && square < 90) {
                jq(form + ' select[name="shi"]').val(2);
                jq(form + ' select[name="ting"]').val(1)
                jq(form + ' select[name="chu"]').val(1);
                jq(form + ' select[name="wei"]').val(1);
                jq(form + ' select[name="yangtai"]').val(1);
            } else if ( square >= 90 && square < 150) {
                jq(form + ' select[name="shi"]').val(3);
                jq(form + ' select[name="ting"]').val(2);
                jq(form + ' select[name="chu"]').val(1);
                jq(form + ' select[name="wei"]').val(2);
                jq(form + ' select[name="yangtai"]').val(1);
            }
            else if (square >= 150) {
                jq(form + ' select[name="shi"]').val(4);
                jq(form + ' select[name="ting"]').val(2);
                jq(form + ' select[name="chu"]').val(1);
                jq(form + ' select[name="wei"]').val(2);
                jq(form + ' select[name="yangtai"]').val(2);
            }
        },
        //获取楼盘
        getHouses: function(option) {
            if(option.loupan_key == '请输入项目小区名称') option.loupan_key = '';
            jq.get('/api/loupan_search.php?rand='+~(-new Date()/36e5), option, function(data){
                if(data == '0'){
                    jq(".tender-loupan-box").hide();
                } else {
                    data += '<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;filter:alpha(opacity=0);opacity:0;z-index:-1;"></iframe>';
                    jq(".tender-loupan-box").html( data ).slideDown();
                    jq(".lbl_in").text('');
                    jq(".tender-loupan-box").find("ul li").click(function(){
                        jq("#companyHouses").val( jq(this).text());
                        jq(".tender-loupan-box").hide();
                    });
                }
            });
        },
        setCookie: function (c_name, value, exdays) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + exdays);
            var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
            document.cookie = c_name + "=" + c_value + ';path=/;domain=.to8to.com';
        },
        getCookie: function (c_name) {
            var c_value = document.cookie;
            var c_start = c_value.indexOf(" " + c_name + "=");
            if (c_start == -1) {
                c_start = c_value.indexOf(c_name + "=");
            }
            if (c_start == -1) {
                c_value = null;
            } else {
                c_start = c_value.indexOf("=", c_start) + 1;
                var c_end = c_value.indexOf(";", c_start);
                if (c_end == -1) {
                    c_end = c_value.length;
                }
                c_value = unescape(c_value.substring(c_start, c_end));
            }
            return c_value;
        },
        //关闭弹窗
        window_box_close:function (obj) {
            var self = this;

            jq('.window_box').remove();
            jq('.translucence_layer').remove();
            var cb = self.checkBrowser();
            if (cb.version == "6") {
                jq("html").css("overflow-y", "scroll");
                jq("body").css("overflow-y", "visible");
            } else if (cb.version == "7" && jq('#st_pid').length != 1) {
                jq("html").css("overflow-y", "scroll");
                jq("body").css("overflow-y", "visible");
            } else if (cb.version == "8" && jq('#st_pid').length != 1) {
                jq("html").css("overflow-y", "scroll");
                jq('body').css('overflow-y', 'visible');
            } else {
                jq("body").css("overflow-y", "inherit");
            }
            jq('body').css('margin-right', '0');
            windowBoxOriginHight = 0;
            //暂时屏蔽这个功能 20161205
			//首页 效果图首页 装修攻略首页 报价弹框没成功发标，并且之前没弹过 且是装修公司首页，且自身弹框没发标成功 并且是深圳 弹框关闭时才可触发
            // if (getCookie('zxzx_correlation_Flag') != 'true' && getCookie('company_index_pop') != 'true' &&  !self.options.index_pop && getCookie('to8to_tcode') == 'sz') {
            //     setTimeout(function(){
            //         document.getElementById('ico-consult1').click();
            //         setCookie('company_index_pop','true',365*24*60*60*1000);//设置限制cookie
            //         if (jq('.ico-consult').length >=2) {
            //             jq('.ico-consult').eq(1).addClass('ico-consult-saffron');//增加class 替换在线咨询图片   
            //         };
            //         (typeof clickStream !== 'undefined') && clickStream.getCvParams('1_5_1_1246');                      
            //     },3000)
            // };
        },
        // 判断浏览器
        checkBrowser: function() {
            var u = window.navigator.userAgent.toLocaleLowerCase(),
                msie = /(msie) ([\d.]+)/,
                chrome = /(chrome)\/([\d.]+)/,
                firefox = /(firefox)\/([\d.]+)/,
                safari = /(safari)\/([\d.]+)/,
                opera = /(opera)\/([\d.]+)/,
                ie11 = /(trident)\/([\d.]+)/,
                b = u.match(msie) || u.match(chrome) || u.match(firefox) || u.match(safari) || u.match(opera) || u.match(ie11);
            return {name: b[1], version: parseInt(b[2])};
        },
        //提交成功后数据初始化
        copyFormData: function(phone, square, shen, city){
            //发标信息默认填入tab项
            jq('.tender-pop-main').find('input[name="phone"]').val(phone).siblings('.tender-form-font').hide();
            if (square) {
                jq('.tender-pop-main').find('input[name="square"]').val(square).siblings('.tender-form-font').hide();
                jq('.tender-pop-main').find('input[name="square"]').trigger('keyup');
            };

            jq('.price-font').html('输入手机号，获取预算明细');
            jq('.company-font').html('输入手机号，找附近热门装修公司');
            jq('.material-font').html('输入手机号，获取材料清单明细');

            var gpm0 = new GlobalProvincesModule;               //城市类
            gpm0.def_province = ["省/市", ""];
            gpm0.def_city1 = ["市/地区", ""];
            gpm0.def_city2 = ["县/市", ""];
            gpm0.initProvince($('priceShen'));
            $('priceShen').value= shen;            
            gpm0.initCity1($('priceCity'), gpm0.getSelValue($('priceShen')));
            $('priceCity').value= city;            
            gpm0.initCity2($('priceTown'), gpm0.getSelValue($('priceShen')), gpm0.getSelValue($('priceCity')));

            var gpm1 = new GlobalProvincesModule;               //城市类
            gpm1.def_province = ["省/市", ""];
            gpm1.def_city1 = ["市/地区", ""];
            gpm1.def_city2 = ["县/市", ""];
            gpm1.initProvince($('designShen'));
            $('designShen').value= shen;            
            gpm1.initCity1($('designCity'), gpm1.getSelValue($('designShen')));
            $('designCity').value= city;            
            gpm1.initCity2($('designTown'), gpm1.getSelValue($('designShen')), gpm1.getSelValue($('designCity')));

            var gpm2 = new GlobalProvincesModule;               //城市类
            gpm2.def_province = ["省/市", ""];
            gpm2.def_city1 = ["市/地区", ""];
            gpm2.def_city2 = ["县/市", ""];
            gpm2.initProvince($('companyShen'));
            $('companyShen').value= shen;            
            gpm2.initCity1($('companyCity'), gpm2.getSelValue($('companyShen')));
            $('companyCity').value= city;            
            gpm2.initCity2($('companyTown'), gpm2.getSelValue($('companyShen')), gpm2.getSelValue($('companyCity')));

            var gpm3 = new GlobalProvincesModule;               //城市类
            gpm3.def_province = ["省/市", ""];
            gpm3.def_city1 = ["市/地区", ""];
            gpm3.def_city2 = ["县/市", ""];
            gpm3.initProvince($('materialShen'));
            $('materialShen').value= shen;            
            gpm3.initCity1($('materialCity'), gpm3.getSelValue($('materialShen')));
            $('materialCity').value= city;            
            gpm3.initCity2($('materialTown'), gpm3.getSelValue($('materialShen')), gpm3.getSelValue($('materialCity')));
        },
        //结果态 跟进对应的城市处理
        fruit_dispose:function(city){
            var city_name = '';
            var sheng_name = '';
            if (city.length > 0) {//传入了城市则用传入的城市信息
                var city_name = city;
                if (city == '深圳') {
                    sheng_name = '广东';
                }
                if (city == '东莞') {
                    sheng_name = '广东';
                }
            }else{
                city_name = jq('#priceCity').val();
                sheng_name = jq('#priceShen').val();
            }
            
            if ((city_name == '深圳' && sheng_name == '广东') || (city_name == '东莞' && sheng_name == '广东')) {               
                jq('.tender-price-ad').hide();
                var self = this;            
                var str1 = '<div class="pop-weixin-consult">'+
                                '<div class="zxbj-weixin-portrait-left">'+
                                    '<img src="http://static.to8to.com/img/to8to_img/wx_xh/wxxh_xh.gif?v=201612281452">'+
                                '</div>'+
                                '<div class="zxbj-weixin-portrait-text">'+
                                    '<p class="zxbj-weixin-zxgw">深圳装修顾问-馨馨</p>'+
                                    '<p class="zxbj-weixin-point">（四年装修行业经验）</p>'+
                                '</div>'+
                                '<div class="zxbj-weixin-portrait-title">'+
                                    '<p class="portrait-title1">装修怕上当？</p>'+
                                    '<p class="portrait-title2">问问靠谱的人</p>'+
                                '</div>'+
                                '<div class="zxbj-weixin-portrait-right">'+
                                    '<div class="zxbj-weixin-code"></div>'+
                                    '<p class="zxbj-wx-guide"><em class="zxbj-wx-icon"></em>微信扫一扫</p>'+
                                    '<div class="portrait-right-bg"></div>'+
                                '</div>'+
                                '<div class="zxbj-weixin-portrait-btn">'+
                                    '<img src="http://static.to8to.com/img/to8to_img/wx_xh/wxxh_btn.gif?v=201612281452">'+
                                '</div>'+
                          '</div>';
                var str2 =  '<div class="pop-weixin2-consult">'+
                                '<p class="zxbj-weixin2-point">报价短信已发送到您的手机，请注意查收！</p>'+
                                '<p class="attention2 holiday-text"><b>*</b>稍候装修管家将回电您，免费提供装修咨询服务</p>'+
                                '<div class="zxbj-weixin2-fruit-box">'+
                                    '<div class="weixin2-fruit-bg"></div>'+
                                    '<p class="weixin2-fruit-title1">装修怕上当？问问靠谱的人</p>'+
                                    '<div class="weixin2-fruit-show">'+
                                        '<div class="fruit-show-left">'+
                                            '<div class="fruit-show-portrait"></div>'+
                                            '<p class="fruit-show-p1"><span class="fruit-show-p1-city">深圳装修顾问 </span><span class="fruit-show-p1-name">土巴兔-馨馨</span></p>'+
                                            '<p class="fruit-show-p2">（四年装修行业经验）</p>'+
                                            '<em class="fruit-show-arrow"></em>'+
                                        '</div>'+
                                        '<div class="fruit-show-right">'+
                                            '<div class="fruit-show-code"></div>'+
                                            '<p class="fruit-show-p3">微信扫一扫 加好友<em class="zxbj-wx-icon"></em></p>'+
                                        '</div>'+
                                    '</div>'+
                                    '<p class="weixin2-fruit-title2"><span class="fruit-title2-fff000">24小时咨询</span>任何装修疑问，更有<span class="fruit-title2-b">10000套</span>精品装修案例</p>'+
                                '</div>'+
                            '</div>';
                var str3 = '<div class="pop-weixin-consult pop-weixin-consult-xgt">'+
                                '<div class="zxbj-weixin-portrait-left">'+
                                    '<img src="http://static.to8to.com/img/to8to_img/wx_xh/wxxh_xh.gif?v=201612281452">'+
                                '</div>'+
                                '<div class="zxbj-weixin-portrait-text">'+
                                    '<p class="zxbj-weixin-zxgw">深圳装修顾问-馨馨</p>'+
                                    '<p class="zxbj-weixin-point">（四年装修行业经验）</p>'+
                                '</div>'+
                                '<div class="zxbj-weixin-portrait-title">'+
                                    '<p class="portrait-title1">装修怕上当？</p>'+
                                    '<p class="portrait-title2">问问靠谱的人</p>'+
                                '</div>'+
                                '<div class="zxbj-weixin-portrait-right">'+
                                    '<div class="zxbj-weixin-code"></div>'+
                                    '<p class="zxbj-wx-guide"><em class="zxbj-wx-icon"></em>微信扫一扫</p>'+
                                    '<div class="portrait-right-bg"></div>'+
                                '</div>'+
                                '<div class="zxbj-weixin-portrait-btn">'+
                                    '<img src="http://static.to8to.com/img/to8to_img/wx_xh/wxxh_btn.gif?v=201612281452">'+
                                '</div>'+
                          '</div>';
                if (self.options.fabiao_falg) {
                    jq('.pop-weixin2-consult').removeClass('pop-weixin2-consult-dg');//初始化深圳东莞二维码
                    jq('.pop-weixin2-consult').remove();
                    jq('.add-weixin-html .tender-pop-right').find('div,h6').show();
                    jq('.add-weixin-html .tender-pop-right').css('width','470px');

                    jq('.tender-price-result').css('padding','40px 0');
                    jq('.add-weixin-html .tender-pop-right').find('div,h6').hide();
                    //效果图
                    if (jq('.tender-pop-showImg').length >=1 || jq('.newbj-calcBn').length >=1) {
                        jq('.add-weixin-html .tender-pop-right').find('div,h6,p,.newbj-result-jpg').remove();
                    };
                    jq('.add-weixin-html .tender-pop-right').css('width','430px').append(str2);//深圳 东莞发标结构态插入
                    if (city_name == '深圳') {//发标后东莞深圳不同的展示
                        jq('.pop-weixin2-consult .fruit-show-p1-name').text('土巴兔-馨馨');
                        jq('.pop-weixin2-consult .fruit-show-p1-city').text('深圳装修顾问 ');
                        jq('.pop-weixin2-consult').show();
                    }else{
                        jq('.pop-weixin2-consult').addClass('pop-weixin2-consult-dg');//东莞二维码
                        jq('.pop-weixin2-consult .fruit-show-p1-name').text('土巴兔-蓉蓉');                        
                        jq('.pop-weixin2-consult .fruit-show-p1-city').text('东莞装修顾问 ');
                        jq('.pop-weixin2-consult').show();
                    }
                    self.pop_an_arrow();//左右箭头动画 

                    self.date_unix_day();//年会和春节
                }else{
                    jq('.pop-weixin-consult').removeClass('pop-weixin-consult-dg');//初始化深圳东莞二维码
                    //效果图详情页
                    if (jq('.newbj-calcBn').length >=1 ) {
                        return false;
                    };                    
                    jq('.tender-price-result').css('padding','40px 0');//初始化要改变的结果态
                    jq('.pop-weixin-consult').remove();//初始化要改变的结果态

                    jq('.tender-price-result').css({
                        'padding':'15px 0',
                        'width': '339px'
                    });
                    jq('.tender-price-result-box').css('padding','15px 25px 0 55px')
                    jq('.tender-price-result').parent('div').append(str1);//没发标之前插入结构
                    //效果图
                    if (jq('.tender-pop-showImg').length >=1 ) {
                        jq('.add-weixin-html .tender-pop-right').append(str3);
                    };
                    if (city_name == '深圳') {//没发标之前东莞深圳不同的展示                        
                        jq('.pop-weixin-consult .zxbj-weixin-zxgw').text('深圳装修顾问-馨馨');
                    }else{
                        jq('.pop-weixin-consult').addClass('pop-weixin-consult-dg');
                        jq('.pop-weixin-consult .zxbj-weixin-zxgw').text('东莞装修顾问-蓉蓉');
                    }
                    //微信按钮经过时
                    jq('.pop-weixin-consult').on('mouseover',function(){
                        jq('.zxbj-weixin-portrait-right').show();
                    })
                    jq('body').click(function(){
                        jq('.zxbj-weixin-portrait-right').hide();
                    });                 
                    jq('.pop-weixin-consult').show();//操作完再展示                   
                }                
            }else{
                jq('.tender-price-ad').show();
                //效果图详情页
                if (jq('.newbj-calcBn').length >=1 ) {
                    return false;
                };
                jq('.tender-price-result-box').css('padding','15px 40px 0 40px');//不是深圳或者东莞把样式变回来               
                jq('.tender-price-result').css({//不是深圳或者东莞把样式变回来   
                        'padding':'40px 0',
                        'width': '300px'
                });
                jq('.pop-weixin-consult').remove();//初始化要改变的结果态
                jq('.pop-weixin2-consult').remove();
                jq('.add-weixin-html .tender-pop-right').find('div,h6').show();
                jq('.add-weixin-html .tender-pop-right').css('width','470px');
            }
        },
        //箭头动画
        pop_an_arrow: function(){
            var self = this;        
            jq('.pop-weixin2-consult .fruit-show-arrow').stop().animate({
                'left' : '113px'
            },500,function(){
                jq('.pop-weixin2-consult .fruit-show-arrow').stop().animate({
                    'left' : '93px'
                },500,function(){
                   self.pop_an_arrow();
                });
             });
            
        },
        date_unix_day:function(){
            var date1 = new Date('2017/1/7 18:30:00');
                date1_unix = date1.getTime();
            var date2 = new Date('2017/1/9 23:59:59');
                date2_unix = date2.getTime();
            var date = new Date();
                date_unix = date.getTime();
            if(date1_unix<=date_unix && date_unix<=date2_unix){
                jq('.holiday-text').html('亲爱的业主，因公司年会放假(1月8日-1月9日)，很抱歉未能及时与您联系。我们将于1月10日立即给您回电，免费提供装修咨询服务。');
                jq('.tender-pop-main').css({'height':'482px'});
                jq('.tender-pop-tabs li span').css({'height':' 91px'});
            }

            var year1 = new Date('2017/1/22 18:30:00');
                year1_unix = year1.getTime();
            var year2 = new Date('2017/2/2 23:59:59');
                year2_unix = year2.getTime();
            var year = new Date();
                year_unix =  year.getTime();
            if(year1_unix<=year_unix && year_unix<=year2_unix){
                jq('.holiday-text').html('亲爱的业主，因春节期间放假(1月23日-2月2日)，很抱歉未能及时与您联系。年后我们将第一时间给您回电，免费提供装修咨询服务！祝您新春愉快，阖家幸福！');
                jq('.tender-pop-main').css({'height':'482px'});
                jq('.tender-pop-tabs li span').css({'height':' 91px'});
            }
        }
        
    }  
})()