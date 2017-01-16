<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width" />
        <meta content="telephone=no" name="format-detection" />
        <meta name="applicable-device" content="mobile">
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="apple-touch-icon-precomposed" href="//img.to8to.com/wap/v2/iphone_to8to.png" />
        <link rel="canonical" href="http://about.to8to.com/feedback.php/" />
        <link rel="stylesheet" type="text/css" href="//static.to8to.com/css/wap/feedback.css?v=1379820733" />
        <script type="text/javascript" src="/assets/a7921300/jquery.min.js"></script>
        <title>意见反馈-土巴兔装修网</title>
        <meta name="baidu-tc-cerfication" content="9274856d02c844acb72208b513f468ff" />
        <script>var _hmt = _hmt || []; (function() {
                var hm = document.createElement("script");
                hm.src = "//hm.baidu.com/hm.js?dbdd94468cf0ef471455c47f380f58d2";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();</script>
        <script type='text/javascript'>var _vds = _vds || [];
            window._vds = _vds; (function() {
                _vds.push(['setAccountId', 'a9627bb6762b7352']);
                _vds.push(['enableHT', true]); (function() {
                    var vds = document.createElement('script');
                    vds.type = 'text/javascript';
                    vds.async = true;
                    vds.src = ('//static.to8to.com/gb_js/vds.js');
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(vds, s);
                })();
            })();</script>
    </head>
    
    <body>
        <!--body onselectstart="return false" -->
        <style type="text/css">.rslides { position: relative; list-style: none; overflow: hidden; width: 100%; padding: 0; margin: 0; } .rslides li { -webkit-backface-visibility: hidden; position: absolute; display: none; width: 100%; left: 0; top: 0; } .rslides li:first-child { position: relative; display: block; float: left; } .rslides img { display: block; height: auto; float: left; width: 100%; border: 0; }</style>
        <div class="ad-top">
            <ul class="rslides">
                <li>
                    <a href="/index/sem/from/201">
                        <img src="//img.to8to.com/wap/ad-index-sem.png?v=222" width="320px" /></a>
                </li>
                <li>
                    <a href="javascript:;" onclick="m_to8to.download('zxgj')">
                        <img src="//img.to8to.com/wap/ad-index-city-top.jpg" width="320px" /></a>
                </li>
            </ul>
        </div>
        <script>$(function() {
                $(".rslides").responsiveSlides({
                    timeout: 3000
                });
            });</script>
        <div class="header">
            <a href="/sz">
                <img src="//img.to8to.com/wap/logo.png" class="logo-img" width="56"></a>
            <span class="logo-node"></span>
            <span class="logo-name">互联网装修领导者</span>
            <a href="/city/index">
                <span class="city">深圳</span></a>
        </div>
        <div class="search">
            <input type="text" name="searchwords" value="搜索装修疑难，如：装修费用" onfocus="searchFocus()" onblur="searchBlur()" class="search-box" onkeydown="toSearch(this)">
            <div class="magnifier" onclick="search()"></div>
            <input type="hidden" id="search_url" value="/ask/search.php/keyword/keyword_val" /></div>
        <script type="text/javascript">/**
     * 搜索
     */
            function search() {
                var dom_arr = document.getElementsByName('searchwords');
                // 去空格
                var val = dom_arr[0].value.replace(/^\s+|\s+$/g, '');
                if (val == '搜索装修疑难，如：装修费用' || val == '') {
                    alert('请输入关键字');
                    //document.getElementById('search_form').submit();
                } else {
                    var url = document.getElementById('search_url').value.replace('keyword_val', val);
                    location.href = url;
                }
            }

            /**
     * 搜索获得焦点
     */
            function searchFocus() {
                var dom_arr = document.getElementsByName('searchwords');
                // 去空格
                var val = dom_arr[0].value.replace(/^\s+|\s+$/g, '');
                if (val == '搜索装修疑难，如：装修费用') {
                    dom_arr[0].value = '';
                } else {
                    dom_arr[0].value = val;
                }
            }

            /**
     * 搜索失去焦点
     */
            function searchBlur() {
                var dom_arr = document.getElementsByName('searchwords');
                // 去空格
                var val = dom_arr[0].value.replace(/^\s+|\s+$/g, '');
                if (val == '' || val == '搜索装修疑难，如：装修费用') {
                    dom_arr[0].value = '搜索装修疑难，如：装修费用';
                    dom_arr[0].style.color = '#ccc';
                } else {
                    dom_arr[0].style.color = '#333';
                }
            }

            // 初始化输入框状态
            searchBlur();
            /**
     * 回车搜索
     */
            function toSearch(obj) {
                obj.style.color = '#333';
                var evt = window.event;
                if (evt.keyCode == 13) {
                    stopDefault(evt);
                    search();
                }
            }

            /**
     * 阻止默认事件
     */
            function stopDefault(e) {
                if (e && e.preventDefault) { // 阻止默认浏览器动作(W3C)
                    e.preventDefault();
                } else { // IE中阻止函数器默认动作的方式 
                    window.event.returnValue = false;
                }
                return false;
            }</script>
        <form action="/feedback/post/city/sz" method="post">
            <h3>选择意见</h3>
            <div class="feedback_select">
                <select name="select_val">
                    <option value="">无</option>
                    <option value="页面不兼容">页面不兼容</option>
                    <option value="页面无法打开/访问过慢">页面无法打开/访问过慢</option>
                    <option value="无法申请免费设计/报价">无法申请免费设计/报价</option></select>
            </div>
            <h3>您的意见</h3>
            <div class="feedback_content">
                <textarea name="content"></textarea>
            </div>
            <h3>您的联系方式
                <span>(土巴兔将对您的联系方式严格保密)</span></h3>
            <div class="contact">
                <input type="text" name="phone" /></div>
            <div class="submit_div">
                <input type="submit" value="提交" /></div>
        </form>
        <div class="footer-company-desc">
            <div class="f-c-d-title">(土巴兔)互联网装修领导者</div>
            <div class="f-c-d-desc">
                <span class="f-green">7</span>年累计服务
                <span class="f-green">1100</span>万家庭,汇聚
                <span class="f-green">7</span>万多家装修公司,
                <span class="f-green">95</span>万设计师;我们始终坚持把业主的利益放到
                <span class="f-green">第一位</span>,不断创新,领导装修行业更阳光、更透明。</div></div>
        <div class="feedback" onclick="feedback()">意见反馈</div>
        <ul class="page_nav">
            <li>
                <a href="javascript:void(0)" class="nav_on">触屏版</a></li>
            <li>
                <a href="http://www.to8to.com/">电脑版</a></li>
            <li>
                <a href="http://m.to8to.com/news/article/106823.html">关于我们</a></li>
        </ul>
        <div class="footer">手机土巴兔：m.to8to.com 粤ICP备08125558号</div>
        <div class="footer-space"></div>
        <div class="footer-fix">
            <div class="footer-zxzx">
                <a class="click-point" data-point="2_3_1_2" href="/sz/zb/index2.html?from=203#point=2_3_1_2">申请免费服务</a></div>
            <div class="footer-nav">
                <span>导航</span>
                <a href="javascript:;" onclick="showNav()" class="footer-nav-logo">
                    <span class="nav-line"></span>
                    <span class="nav-line"></span>
                </a>
            </div>
        </div>
        <div class="nav_arrow_box">
            <div class="nav_box">
                <a class="nav_box_line" href="/sz">
                    <div class="nav_box_line_icon">
                        <img src="//img.to8to.com/wap/nav-index-small-icon.png" height="18px" /></div>
                    <div class="nav_box_line_txt">首页</div></a>
                <a class="nav_box_line" href="/xiaoguotu/">
                    <div class="nav_box_line_icon">
                        <img src="//img.to8to.com/wap/nav-xiaoguotu-small-icon.png" height="18px" /></div>
                    <div class="nav_box_line_txt">效果图</div></a>
                <a class="nav_box_line" href="/sz/company/">
                    <div class="nav_box_line_icon">
                        <img src="//img.to8to.com/wap/nav-company-small-icon.png" height="18px" /></div>
                    <div class="nav_box_line_txt">找公司</div></a>
                <a class="nav_box_line" href="/sz/zb/index2.html">
                    <div class="nav_box_line_icon">
                        <img src="//img.to8to.com/wap/nav-zb-small-icon.png" height="18px" /></div>
                    <div class="nav_box_line_txt">申请免费设计</div></a>
                <a class="nav_box_line" href="/company/zxb.php#point=2_3_1_2">
                    <div class="nav_box_line_icon">
                        <img src="//img.to8to.com/wap/nav-zxb-small-icon.png" height="18px" /></div>
                    <div class="nav_box_line_txt">装修保障</div></a>
                <a class="nav_box_line" href="/yezhu/zxlc.html">
                    <div class="nav_box_line_icon">
                        <img src="//img.to8to.com/wap/nav-zxzs-small-icon.png" height="18px" /></div>
                    <div class="nav_box_line_txt">学装修</div></a>
                <a class="nav_box_line" href="tel:4006900288">
                    <div class="nav_box_line_icon">
                        <img src="//img.to8to.com/wap/nav-sem-small-icon.png" height="18px" /></div>
                    <div class="nav_box_line_txt">400电话咨询</div></a>
            </div>
        </div>
        <div class="nav_box_cover" onclick="showNav()"></div>
        <script type="text/javascript">var page_w = 0;
            function initNav() {
                var body_w = document.body.offsetWidth;
                if (body_w != page_w) {
                    var f_n_l_dom = document.querySelector('.footer-nav-logo');
                    var _w = f_n_l_dom.offsetWidth || 25;
                    var offset_l = f_n_l_dom.offsetLeft || Math.floor(body_w * 0.97) - _w - 10;
                    var _l = body_w - (body_w - offset_l - _w / 2) - 123.5;
                    document.querySelector('.nav_arrow_box').style.cssText += 'left:' + _l + 'px';
                    page_w = body_w;
                }
            }
            initNav();
            var is_show_nav = 0,
            show_nav_timer = null;
            function showNav() {
                if (show_nav_timer) {
                    return false;
                }
                var dom = document.querySelector('.nav_arrow_box');
                var _dom = document.querySelector('.nav_box_cover');
                if (is_show_nav == 0) {
                    dom.style.cssText += 'display:block;';
                    show_nav_timer = setTimeout(function() {
                        dom.style.cssText += 'display:block;bottom:58px';
                        clearTimeout(show_nav_timer);
                        show_nav_timer = null;
                    },
                    50);
                    _dom.style.cssText = 'display:block;';
                    is_show_nav = 1;
                } else {
                    dom.style.cssText += 'display:block;bottom:-260px';
                    show_nav_timer = setTimeout(function() {
                        dom.style.cssText += 'display:none;';
                        clearTimeout(show_nav_timer);
                        show_nav_timer = null;
                    },
                    900);
                    _dom.style.cssText = 'display:block;';
                    _dom.style.cssText = 'display:none;';
                    is_show_nav = 0;
                }
            }
            // 屏幕大小改变
            window.onresize = function() {
                initNav();
            }</script>
        <script type="text/javascript">function feedback() {
                var url = '/about/feedback.php';
                window.location.href = url;
            }</script>
        <script>(function() {
                /**
                 * 输入状态下隐藏导航栏
                 */
                function initInputSelectFocus() {
                    var dom_arr = document.querySelectorAll('input[type="text"]');
                    var sel_arr = document.querySelectorAll('select');
                    var txt_arr = document.querySelectorAll('textarea');
                    var dom_len = dom_arr.length;
                    var sel_len = sel_arr.length;
                    var txt_len = txt_arr.length;
                    if (sel_len > 0) {
                        for (var i = 0; i < sel_len; i++) {
                            var _i = dom_len + i;
                            dom_arr[_i] = sel_arr[i];
                        }
                        dom_len += sel_len;
                    }
                    if (txt_len > 0) {
                        for (var i = 0; i < txt_len; i++) {
                            var _i = dom_len + i;
                            dom_arr[_i] = txt_arr[i];
                        }
                        dom_len += txt_len;
                    }
                    if (dom_len > 0) {
                        var fix_dom = document.querySelector('.footer-fix');
                        var screen_dom = document.querySelector('.screen');
                        for (var i = 0; i < dom_len; i++) {
                            if (!dom_arr[i]) {
                                continue;
                            }
                            dom_arr[i].addEventListener('focus',
                            function() {
                                fix_dom && fix_dom.style && (fix_dom.style.display = 'none');
                                if (screen_dom) {
                                    screen_dom.style.display = 'none';
                                }
                            },
                            false);
                            dom_arr[i].addEventListener('blur',
                            function() {
                                fix_dom && fix_dom.style && (fix_dom.style.display = 'block');
                            },
                            false);
                        }
                    }
                }
                initInputSelectFocus();
            })();</script>
        <script>var browser = {
                versions: function() {
                    var u = navigator.userAgent,
                    app = navigator.appVersion;
                    return { //移动终端浏览器版本信息
                        trident: u.indexOf('Trident') > -1,
                        //IE内核
                        presto: u.indexOf('Presto') > -1,
                        //opera内核
                        webKit: u.indexOf('AppleWebKit') > -1,
                        //苹果、谷歌内核
                        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
                        //火狐内核
                        mobile: !!u.match(/AppleWebKit.*Mobile.*/),
                        //是否为移动终端
                        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                        //ios终端
                        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                        //android终端或uc浏览器
                        iPhone: u.indexOf('iPhone') > -1,
                        //是否为iPhone或者QQHD浏览器
                        iPad: u.indexOf('iPad') > -1,
                        //是否iPad
                        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
                    };
                } ()
            };
            if (browser.versions.iPad) {
                $('head').find('meta[name=viewport]').attr('content', 'initial-scale=1.0,user-scalable=no,maximum-scale=1');
            }</script>
        <script type="text/javascript" src="//static.to8to.com/wap//js/responsiveslides.min.js"></script>
        <script type="text/javascript" src="//static.to8to.com/wap//js/common.min.js"></script>
        <script type="text/javascript" src="//static.to8to.com/wap//js/seoStatis.min.js"></script>
        <script type="text/javascript" src="//static.to8to.com/count/2a19dc2ac1471a7470fe7187a5537960_2.js?v=201612291631"></script>
        <script type="text/javascript" src="//static.to8to.com/wap//js/v2/h5AppDownload_sourcecharge.min.js?v=201611181238"></script>
    </body>

</html>
