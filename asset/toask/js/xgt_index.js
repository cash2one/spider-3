// JavaScript Document
//xiaoguotu_common
var server_host = '/';
var rankhelp_doc = '/help/rankhelp.html';
var isIE = navigator.userAgent.indexOf("compatible") > -1 && navigator.userAgent.indexOf("MSIE") > -1 && (navigator.appName !== "Oprea");
var isIE7 = (isIE && window.XMLHttpRequest) ? true : false;
var isIE6 = (isIE && !window.XMLHttpRequest && window.ActiveXObject) ? true : false;
var isFirefox = navigator.userAgent.indexOf('Firefox') == -1 ? false : true;
var userAgent = navigator.userAgent.toLowerCase();
var is_opera = userAgent.indexOf('opera') != -1 && opera.version();
var is_moz = (navigator.product == 'Gecko') && userAgent.substr(userAgent.indexOf('firefox') + 8, 3);
var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera) && userAgent.substr(userAgent.indexOf('msie') + 5, 3);
var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
var to8to_uid = getCookie('uid', 1);
var to8to_ind = getCookie('ind', 1);
var divTop, divLeft, divWidth, divHeight, docHeight, docWidth, objTimer, secI;


if ((window.location.href.indexOf(".to8to.com") != -1)) {
    server_host = "http://www.to8to.com/";
}
document.domain = "to8to.com";



function slideLine(ul, delay, speed, lh, stepvalue) {
    var slideBox = (typeof ul == 'string') ? document.getElementById(ul) : ul;
    var slideBox2 = (typeof ul == 'string') ? document.getElementById(ul) : ul;
    for (var i = 0; i < slideBox2.childNodes.length; i++) {
        if (slideBox2.childNodes[i].nodeType == 1) {
            if (slideBox2.childNodes[i].tagName == "UL")
                slideBox2 = slideBox2.childNodes[i];
            break;
        }
    }
    ;
    var delay = delay || 1000, speed = speed || 0, lh = lh || 1, stepvalue = stepvalue || 2;
    var tid = null, pause = false;
    var start = function () {
        tid = setInterval(slide, speed);
    }

    function slide() {
        if (pause)
            return;
        slideBox.scrollTop += stepvalue;
        if (slideBox.scrollTop % lh == 0) {
            clearInterval(tid);
            slideBox2.appendChild(slideBox2.getElementsByTagName('li')[0]);
            slideBox.scrollTop = 0;
            setTimeout(start, delay);
        }
        ;
    };
    slideBox.onmouseover = function () {
        pause = true;
    }
    slideBox.onmouseout = function () {
        pause = false;
    }
    setTimeout(start, delay);
}

function getCookie(name, pre) {
    if (pre)
        name = 'to8to_' + name;
    var r = new RegExp("(\\b)" + name + "=([^;]*)(;|$)");
    var m = document.cookie.match(r);
    return (!m ? "" : decodeURIComponent(m[2]));
}

function uicheck() {
    var fullpath = "";
    username = getCookie('username', 1);
    if ((window.location.href.indexOf(".to8to.com") != -1)) {
        fullpath = "http://www.to8to.com";
    }
    ;
    if (typeof(username) != 'undefined' && username != "" && username != "deleted") {
        ind = getCookie('ind', 1);
        uid = getCookie('uid', 1);
        mysite = fullpath + '/my/';
        if ($('loginchg'))
            $('loginchg').innerHTML = '您好，<a href="' + mysite + '" target="_blank">' + username + '</a>　[<a href="' + mysite + '" target="_blank" class="f60">我的管理中心</a>] [<a href="' + fullpath + '/logout.php?uid=' + uid + '" target="_self">安全退出</a>]';
    }
    ;
    if (document.referrer != "" && document.referrer.indexOf("to8to.com") == -1) {
        if (window.location.href.indexOf("to8to.com") != -1) {
            smallwindow();
            getMsg();
        }
        ;
    }
    ;
    to8toyx();
}
function smallwindow() {
};

function getMsg() {
    try {
        secI = 0;
        divTop = parseInt(document.getElementById("eMeng").style.top, 10)
        divLeft = parseInt(document.getElementById("eMeng").style.left, 10)
        divHeight = parseInt(document.getElementById("eMeng").offsetHeight, 10)
        divWidth = parseInt(document.getElementById("eMeng").offsetWidth, 10)
        docWidth = document.documentElement.clientWidth;
        docHeight = document.documentElement.clientHeight;
        document.getElementById("eMeng").style.display = "block";
        document.getElementById("eMeng").style.top = parseInt(document.documentElement.scrollTop, 10) + docHeight + 10;
        document.getElementById("eMeng").style.left = parseInt(document.documentElement.scrollLeft, 10) + docWidth - divWidth;
        document.getElementById("eMeng").style.visibility = "visible";
        objTimer = window.setInterval("moveDiv()", 10)
    } catch (e) {
    }
    ;
}
function to8toyx() {
    url = window.location.href;
    if (null == url || url.indexOf("?") == -1) {
        return null;
    }
    var argsUrl = url.split("?")[1];
    if (argsUrl.indexOf("=") == -1) {
        return null;
    }
    if (argsUrl.indexOf("welcome=") != -1) {
        href = "http://www.to8to.com/getuserdata.php?pos=to8toyx&" + argsUrl;
        href += '&s=' + Math.random(5);
        insertScript('sInsertScript', href);
    } else {
        return null;
    }
}


function autoSize(obj, w, h) {
    var oIMG = new Image()
    oIMG.onload = function () {
        var oW = this.width;
        var oH = this.height;
        var tax = 1;
        if (oW > w || oH > h)
            tax = (oW / oH) > (w / h) ? (w / oW) : (h / oH);
        obj.style.marginLeft = (w - Math.floor(oW * tax)) / 2 + "px";
        obj.style.marginTop = (h - Math.floor(oH * tax)) / 2 + "px";
        obj.width = oW * tax;
        obj.height = oH * tax;
    };
    oIMG.src = obj.src;
}

function setCookie(name, value, expire, pre) {
    if (!expire)
        expire = 5000;
    if (pre)
        name = 'to8to_' + name;
    var expiry = new Date();
    expiry.setTime(expiry.getTime() + expire);
    document.cookie = name + '=' + value + ';expires=' + expiry.toGMTString() + ';path=/;domain=.to8to.com';
};
function insertScript(id, url) {
    var oScript = $(id);
    if (oScript)
        oScript.parentNode.removeChild(oScript);
    oScript = document.createElement('script');
    oScript.setAttribute('id', id);
    oScript.setAttribute('src', url);
    oScript.setAttribute('type', 'text/javascript');
    oScript.setAttribute('language', 'javascript');
    var header = $('head').item(0);
    header.appendChild(oScript);
}
function xiaoguotu_upl() {
    if (to8to_ind && to8to_uid) {
        user_upload();
    } else {
        noLogin_button();
    }
    ;
}
function user_upload() {
    switch (to8to_ind) {
        case 'yz':
            window.open('http://www.to8to.com/yz/photo.php?act=upload&uid=' + to8to_uid);
            break;
        case 'sjs':
            window.open('http://www.shejiben.com/my/case_upload.php');
            break;
        case 'zs':
            window.open('http://www.to8to.com/zs/case.php?act=upload&uid=' + to8to_uid + '&gate=0');
            break;
        default :
            alert("无法上传");
    }
}
function noLogin_button() {
    var uid = getCookie('uid', true);
    if (!uid)
        return showSingleLogin(2);
    return true;
}
function showSingleLogin(n) {
    var goUrl = 'http://www.to8to.com/pop_login.php';
    if (n && parseInt(n))
        goUrl = 'http://www.to8to.com/pop_login.php?id=' + parseInt(n);
    var oJsLoader = new jsLoader();
    oJsLoader.onsuccess = function () {
        editPhotoCat(goUrl, '登陆', 360, 250);
    }
    oJsLoader.load('http://www.to8to.com/gb_js/popup.js');
    return false;
}
function jsLoader() {
    this.load = function (f) {
        var oTags = document.getElementsByTagName('script');
        for (i = oTags.length - 1; i >= 0; i--) {
            var src = oTags[i].src;
            if (src && src.indexOf(f) > -1) {
                this.onsuccess();
                return;
            }
            ;
        }
        ;
        var s = document.createElement('script');
        var header = document.getElementsByTagName('head').item(0);
        s.setAttribute('src', f);
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('language', 'javascript');
        header.appendChild(s);
        var _self = this;
        s.onload = s.onreadystatechange = function () {
            if (this.readyState && this.readyState == "loading")
                return;
            _self.onsuccess();
        };
        s.onerror = function () {
            header.removeChild(s);
            _self.onfailure();
        };
    };
    this.onfailure = function () {
    };
    this.onsuccess = function () {
    };
}
//添加收藏夹
function addfav(url, title) {
    if (document.all) {
        window.external.addFavorite(url, title);
    } else if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    } else {
        alert("请按Ctrl+D收藏!");
    }
    ;
    return false;
}


// 效果图banner slider
!function (jq) {
    jq.fn.xgtSlider = function (settings) {
        if (!this.length) {
            returnFalse();
        }
        ;
        settings = jq.extend({}, jq.xgtSlider.defaults, settings);
        var obj = this,
            scroller = {};
        scroller.fn = {};
        scroller.itemWrap = obj.find('div.new_xgt_slider');
        scroller.item = scroller.itemWrap.find('div.nx_layer');
        scroller.itemSum = scroller.item.length;
        scroller.bLeftBtn = jq(".bLeft");
        scroller.bRightBtn = jq(".bRight");
        scroller.isNow = 0;
        if (settings.fontLi) {
            scroller.font = jq('.slider_font');
            scroller.fontLi = jq('.slider_font').find('li');
            scroller.font.find('li[class="' + settings.play + '"]').css("opacity", "1");
        }
        scroller.fn.on = function () {
            if (!settings.auto) {
                return;
            }
            ;
            scroller.fn.off();
            scroller.fn.removeControl();
            scroller.fn.addControl();
            jq('.' + settings.numClass + '').html('<em>1</em>/' + scroller.itemSum + '');
            scroller.run = setTimeout(function () {
                scroller.fn.goto(settings.direction);
            }, 6000);
        };
        // 方法：停止
        scroller.fn.off = function () {
            if (typeof(scroller.run) !== "undefined") {
                clearTimeout(scroller.run);
            }
            ;
        };
        // 方法：增加控制
        scroller.fn.addControl = function () {
            if (settings.bLeft && scroller.bLeftBtn.length) {
                scroller.bLeftBtn.bind("click", function () {
                    scroller.fn.goto("bLeft");
                });
            }
            ;
            if (settings.bRight && scroller.bRightBtn.length) {
                scroller.bRightBtn.bind("click", function () {
                    scroller.fn.goto("bRight");
                });
            }
            ;
        };
        // 方法：解除控制
        scroller.fn.removeControl = function () {
            if (scroller.bLeftBtn.length) {
                scroller.bLeftBtn.unbind("click");
            }
            ;
            if (scroller.bRightBtn.length) {
                scroller.bRightBtn.unbind("click");
            }
            ;
        };
        // 方法：滚动
        scroller.fn.goto = function (d) {
            scroller.fn.off();
            scroller.fn.removeControl();
            obj.stop(true);

            scroller.fontLi.removeClass('' + settings.play + '');
            switch (d) {
                case "bRight":
                    scroller.isNow++;
                    if (scroller.isNow == scroller.itemSum) {
                        scroller.isNow = 0;
                    }
                    scroller.item.eq(scroller.isNow).addClass('' + settings.play + '').siblings().removeClass('' + settings.play + '');
                    scroller.item.eq(scroller.isNow).siblings().stop().animate({
                        opacity: 0,
                        filter: "alpha(opacity=0)",
                        'z-index': 1

                    }, settings.speed);
                    scroller.item.eq(scroller.isNow).animate({
                        opacity: 1,
                        filter: "alpha(opacity=100)",
                        'z-index': 2

                    }, settings.speed)
                    if (settings.fontLi) {
                        var fontNum = scroller.isNow + 1;
                        jq('.' + settings.numClass + '').html("<em>" + fontNum + "</em> / " + scroller.itemSum);
                        scroller.fontLi.eq(scroller.isNow).siblings().removeClass('' + settings.play + '').animate({opacity: "0"}, settings.speed);
                        scroller.fontLi.eq(scroller.isNow).addClass('' + settings.play + '').animate({opacity: "1"}, settings.speed);

                    }

                    break;
                case "bLeft":
                    if (scroller.isNow == 0) {
                        scroller.isNow = scroller.itemSum;
                    }
                    scroller.isNow--;


                    scroller.item.eq(scroller.isNow).addClass('' + settings.play + '').siblings().removeClass('' + settings.play + '');
                    scroller.item.eq(scroller.isNow).siblings().stop().animate({
                        opacity: 0,
                        filter: "alpha(opacity=0)",
                        'z-index': 1

                    }, settings.speed);
                    scroller.item.eq(scroller.isNow).animate({
                        opacity: 1,
                        filter: "alpha(opacity=100)",
                        'z-index': 2

                    }, settings.speed)
                    if (settings.fontLi) {
                        var fontNum;
                        if (scroller.isNow == 0) {
                            fontNum = 1;
                        } else {
                            fontNum = scroller.isNow + 1;
                        }

                        jq('.' + settings.numClass + '').html("<em>" + fontNum + "</em> / " + scroller.itemSum);
                        scroller.fontLi.eq(scroller.isNow).siblings().removeClass('' + settings.play + '').animate({opacity: "0"}, settings.speed);
                        scroller.fontLi.eq(scroller.isNow).addClass('' + settings.play + '').animate({opacity: "1"}, settings.speed);

                    }

                    break;
            }
            obj.queue(function () {
                scroller.fn.addControl();
                scroller.run = setTimeout(function () {
                    scroller.fn.goto(settings.direction);
                }, settings.time);
                jq(this).dequeue();
            });
        }

        scroller.fn.on();

    }

    // 默认值
    jq.xgtSlider = {
        defaults: {
            speed: 800,			// 滚动速度
            time: 4000,			// 自动滚动间隔时间
            play: "on",         //选中样式
            num: true,        //是否出现总数
            numClass: "slider_num",    // 总数显示区域
            auto: true,
            bLeft: true,                 //左控
            bRight: true,            //右控
            direction: "bRight",  // 顺序
            fontLi: true,             //是否开启描述
            bgColor: "",             //背景色值
            bgLayer: ""              //背景色层
        }
    };
}(jQuery);
//瀑布流
;
(function (jq, window, document, undefined) {
    'use strict';
    var $window = jq(window), pluginName = 'waterfall', defaults = {
        itemCls: 'waterfall-item',
        prefix: 'waterfall',
        fitWidth: true,
        colWidth: 240,
        gutterWidth: 10,
        gutterHeight: 10,
        align: 'center',
        minCol: 1,
        maxCol: undefined,
        maxPage: undefined,
        bufferPixel: -50,
        containerStyle: {position: 'relative'},
        resizable: true,
        isFadeIn: false,
        isAnimated: true,
        animationOptions: {},
        isAutoPrefill: false,
        checkImagesLoaded: true,
        params: {},
        headers: {},
        state: {isDuringAjax: false, isProcessingData: false, isResizing: false, isPause: false, curPage: 1},
        debug: false
    };

    function Waterfall(element, options) {
        this.$element = jq(element);
        this.options = jq.extend(true, {}, defaults, options);
        this.colHeightArray = [];
        this.styleQueue = [];
        this._init()
    }

    Waterfall.prototype = {
        constructor: Waterfall, _debug: function () {
            if (true !== this.options.debug) {
                return
            }
            ;
            if (typeof console !== 'undefined' && typeof console.log === 'function') {
                if ((Array.prototype.slice.call(arguments)).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === 'string') {
                    console.log((Array.prototype.slice.call(arguments)).toString())
                } else {
                    console.log(Array.prototype.slice.call(arguments))
                }
            } else if (!Function.prototype.bind && typeof console !== 'undefined' && typeof console.log === 'object') {
                Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments))
            }
        }, _init: function (callback) {
            var options = this.options;
            this._setColumns();
            this._resetColumnsHeightArray();
            this.reLayout(callback);
            if (options.isAutoPrefill) {
            }
            ;
            if (options.resizable) {
                this._doResize()
            }
        }, _getColumns: function () {
            var options = this.options, $container = options.fitWidth ? this.$element.parent() : this.$element, containerWidth = $container[0].tagName === 'BODY' ? $container.width() - 20 : $container.width(), colWidth = options.colWidth, gutterWidth = options.gutterWidth, minCol = options.minCol, maxCol = options.maxCol, cols = Math.floor((containerWidth + gutterWidth) / (colWidth + gutterWidth)), col = Math.max(cols, minCol);
            return !maxCol ? col : (col > maxCol ? maxCol : col)
        }, _setColumns: function () {
            this.cols = this._getColumns()
        }, _getItems: function ($content) {
            var $items = $content.filter('.' + this.options.itemCls).css({'position': 'absolute'});
            return $items
        }, _resetColumnsHeightArray: function () {
            var cols = this.cols, i;
            this.colHeightArray.length = cols;
            for (i = 0; i < cols; i++) {
                this.colHeightArray[i] = 0
            }
        }, layout: function ($content, callback) {
            var options = this.options, $items = this.options.isFadeIn ? this._getItems($content).css({opacity: 0}).animate({opacity: 1}) : this._getItems($content), styleFn = (this.options.isAnimated && this.options.state.isResizing) ? 'animate' : 'css', animationOptions = options.animationOptions, colWidth = options.colWidth, gutterWidth = options.gutterWidth, len = this.colHeightArray.length, align = options.align, fixMarginLeft, obj, i, j, itemsLen, styleLen;
            this.$element.append($items);
            if (align === 'center') {
                fixMarginLeft = (this.$element.width() - colWidth * len - gutterWidth * (len - 1)) / 2;
                fixMarginLeft = fixMarginLeft > 0 ? fixMarginLeft : 0
            } else if (align === 'left') {
                fixMarginLeft = 0
            } else if (align === 'right') {
                fixMarginLeft = this.$element.width() - colWidth * len - gutterWidth * (len - 1)
            }
            ;
            for (i = 0, itemsLen = $items.length; i < itemsLen; i++) {
                this._placeItems($items[i], fixMarginLeft)
            }
            ;
            for (j = 0, styleLen = this.styleQueue.length; j < styleLen; j++) {
                obj = this.styleQueue[j];
                obj.$el[styleFn](obj.style, animationOptions)
            }
            ;
            this.$element.height(Math.max.apply({}, this.colHeightArray));
            this.styleQueue = [];
            this.options.state.isResizing = false;
            this.options.state.isProcessingData = false
        }, reLayout: function (callback) {
            var $content = this.$element.find('.' + this.options.itemCls);
            this._resetColumnsHeightArray();
            this.layout($content, callback);
            this.$element.parent().attr('style', '');
            this.$element.parent().find('div.new_loading').hide()
        }, _placeItems: function (item, fixMarginLeft) {
            var $item = jq(item), options = this.options, colWidth = options.colWidth, gutterWidth = options.gutterWidth, gutterHeight = options.gutterHeight, colHeightArray = this.colHeightArray, len = colHeightArray.length, minColHeight = Math.min.apply({}, colHeightArray), minColIndex = jq.inArray(minColHeight, colHeightArray), colIndex, position;
            colIndex = minColIndex;
            position = {left: (colWidth + gutterWidth) * colIndex + fixMarginLeft, top: colHeightArray[colIndex]};
            this.styleQueue.push({$el: $item, style: position});
            colHeightArray[colIndex] += $item.outerHeight() + gutterHeight
        }, removeItems: function ($items, callback) {
            this.$element.find($items).remove();
            this.reLayout(callback)
        }, pause: function (callback) {
            this.options.state.isPause = true;
            if (typeof callback === 'function') {
                callback()
            }
        }, resume: function (callback) {
            this.options.state.isPause = false;
            if (typeof callback === 'function') {
                callback()
            }
        }, _resize: function () {
            var cols = this.cols, newCols = this._getColumns();
            if (newCols !== cols || this.options.align !== 'left') {
                this.options.state.isResizing = true;
                this.cols = newCols;
                this.reLayout()
            }
        }, _doResize: function () {
            var self = this, resizeTimer;
            $window.bind('resize', function () {
                if (resizeTimer) {
                    clearTimeout(resizeTimer)
                }
                ;
                resizeTimer = setTimeout(function () {
                    self._resize()
                }, 1000)
            })
        }
    };
    jq.fn[pluginName] = function (options) {
        if (typeof options === 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var instance = jq.data(this, 'plugin_' + pluginName);
                if (!instance) {
                    instance._debug('instance is not initialization');
                    return
                }
                if (!jq.isFunction(instance[options]) || options.charAt(0) === '_') {
                    instance._debug('no such method "' + options + '"');
                    return
                }
                instance[options].apply(instance, args)
            })
        } else {
            this.each(function () {
                if (!jq.data(this, 'plugin_' + pluginName)) {
                    jq.data(this, 'plugin_' + pluginName, new Waterfall(this, options))
                }
            })
        }
        ;
        return this
    }
}(jQuery, window, document));

//End
!function () {
    var a = {
        init: function (b) {
            xgt_layer(b);
        }
    };
    var rank = {
        init: function (b) {
            xgt_rank(b)
        }
    };

    function xgt_layer(b) {
        var obj = {};
        obj.fn = {};
        obj.fn.li = jq('.' + b + '').find('li');
        obj.fn.li.mouseenter(function () {
            if (jq(this).hasClass('xgt_photos_name')) return false;
            //	if(jq(this).find('a > div.xpn_layer_content').length > 0) return false;
            var objHeight = jq(this).height();
            jq(this).find('a > div.xpn_layer').animate({
                bottom: "0",
                width: "100%",
                height: objHeight
            }, 0);
            obj.fn.content = jq(this).find('a > span').html();
            jq(this).find('a > span').hide();
            jq(this).find('div.xpn_layer_content').show()
            /*obj.fn.str = "<div class=\"xpn_layer_content\"><p></p><em>100</em><h6>"+obj.fn.content+"</h6><b></b></div>";//字符串如果同步读取，就把这句复制
             jq(this).find('a').append(obj.fn.str);*/
        });
        obj.fn.li.mouseleave(function () {
            var m = 195;
            if (jq(this).hasClass('xgt_photos_name')) return false;
            if (jq(this).hasClass('xgt_photos_big')) m = 215;
            if (jq(this).find('a > div.xpn_layer_content').length < 1) return false;
            jq(this).find('a > div.xpn_layer_content').hide();
            jq(this).find('a > div.xpn_layer').animate({
                bottom: "19",
                width: m,
                height: "36"
            }, 0);
            jq(this).find('a > span').show();
        });
    };
    function xgt_rank(b) {
        var obj = {};
        obj.fn = {};
        obj.fn.li = jq('.' + b + '').find('li');
        obj.fn.li.mouseenter(function () {
            obj.fn.li.removeClass('on');
            jq(this).addClass('on');
        });

    }

    window.xgtLayer = a;
    window.xgtRank = rank;
}(jQuery)

!(function () {
    var a = {
        init: function () {
            meitu_doc_ready();
        }
    }

    function meitu_doc_ready() {
        var str = '<a href="javascript:void(0)" class="xgt_nav_showMore" onClick="javascript:showMore(this)" title="点击展开"></a>'
        jq('.xgt_st_dl >dd').each(function (index, element) {
            if (jq(this).height() > 40) {
                jq(this).parent().addClass('height_40');
                jq(this).parent().append(str);
            }
        });
        jq('.xgt_select_type > dl > dd > a').on("click", function () {
            jq(this).parent().find('a').removeClass('on');
            jq(this).addClass('on');

        });

        //推荐商品
        jq('.xmp_container').on("mouseenter", '.itemlist_box li', function () {
            var bigImg = jq(this).find('div.shop_bot'),
                orgSrc = bigImg.find("img").attr("src") || "",
                overWidth = 0;
            if (orgSrc.indexOf("_64x64M") >= 0) {
                bigImg.find("img").attr("src", orgSrc.replace("_64x64M", "_188x188M"));
            }
            clearTimeout(this.itemlistTimer);
            bigImg.css({'left': '0px'});
            jq(this).addClass('on').siblings('li').removeClass('on');
            overWidth = bigImg[0].getBoundingClientRect().right - jq(window).width();
            if (overWidth > 0) {
                bigImg.css({
                    'left': bigImg.position().left - overWidth + 'px'
                });
            } else {
                bigImg.css({
                    'left': '0px'
                });
            }
        }).on("mouseleave", '.itemlist_box li', function () {
            var self = this,
                bigImg = jq(this).find('div.shop_bot');
            clearTimeout(this.itemlistTimer);
            this.itemlistTimer = setTimeout(function () {
                jq(self).removeClass('on');
            }, 200);
        }).on("mouseenter", '.itemlist_box div.shop_bot', function () {
            var parent = jq(this).parents('li').first();
            clearTimeout(parent[0].itemlistTimer);
        });

        jq('.xgt_st_sorts > a').on("click", function () {
            jq('.xgt_st_sorts > a').removeClass('on');
            jq(this).addClass('on');
        });

        jq('.xmp_container > .item > span').mouseenter(function () {
            if (jq(this).find('a.free_design').length > 0) return false;
            var curaid = jq(this).parents("div.item").attr('oldaid');
            var aids = jq('#imgids').attr('aids');
            var cacheaids = [aids];
            if ((typeof(aids) == 'string') && (aids.indexOf(',') != -1)) {
                cacheaids = aids.split(',');
            }
            var str;
            if (jq.inArray(curaid, cacheaids) !== -1) { //存在
						// <a href="javascript:void(0)" class="free_design tenderpop-tag">免费户型设计</a>\
                str = '<a  href="javascript:void(0)" class="bg_filter2" onClick="collectionBox(this)"><em class="icn_start"></em>已收藏</a>\
						   <a href="javascript:void(0)" class="meitu_collection tenderpop-tag"><b>装修成这样要花多少钱？</b></a>';
            } else { //不存在
						// <a href="javascript:void(0)" class="free_design tenderpop-tag">免费户型设计</a>\
                str = '<a class="bg_filter1" href="javascript:void(0)" onClick="collectionBox(this,event)"><em class="icn_start"></em>收藏</a>\
						<a href="javascript:void(0)" class="meitu_collection tenderpop-tag"><b>装修成这样要花多少钱？</b></a>';
            }
            var xisHeight = jq(this).height(),
                strTwo = '<em class="tranLayer" style="height:' + xisHeight + 'px"></em>';
            jq(this).append(str);
            // 去掉变亮效果
            // jq(this).find('a.item_img').append(strTwo);
            // 利用cookie实现运行一次换个颜色
            if(getCookie('imgColor')==='1'){
                jq('.meitu_collection.tenderpop-tag').css('background-color','#e26b24');
                setCookie('imgColor','0',100000);
            }else{
                jq('.meitu_collection.tenderpop-tag').css('background-color','#14b06a');
                setCookie('imgColor','1',100000);
            }
        });
        jq('.xmp_container > .item > span').mouseleave(function () {
            jq(this).find("a.bg_filter1").remove();
            jq(this).find("a.bg_filter2").remove();
            jq(this).find('a.free_design').remove();
            jq(this).find('a.meitu_collection').remove();
            jq(this).find('a.item_img > em.tranLayer').remove();
            jq(this).find("a.bg_filter1").remove();
            jq(this).find("a.bg_filter2, a.bg_filter3").remove();
        });
        jq('.xgt_search_select > ul > li').on("click", function () {
            jq('.xgt_search_select > ul > li').removeClass('on');
            jq(this).addClass('on');
        });
    }
    window.meituDocReady = a;
})(jQuery)
//新版报价弹窗
jq(document).on('click', '.tenderpop-tag', function() {
    setCookie('xgtpop_flag', '1',1000000000000);
    var imgSrc = jq(this).parent().find('img').prop('src');
    var popObj = {};
    if (jq(this).hasClass('free_design')) {
        if (picType == 1) {
            //列表页 免费设计
            popObj = {
                pricePtag: '2_2_3_1002',
                designPtag: '1_2_2_990',
                companyPtag: ' 1_2_3_980',
                materialPtag: '1_2_3_981'
            }
        } else {
            //首页免费设计
            popObj = {
                pricePtag: '1_2_1_996',
                designPtag: '1_2_1_988',
                companyPtag: ' 1_2_1_997',
                materialPtag: '1_2_1_998'
            }
        };
        popObj.showIndex = 1;
    } else {
        if (location.href.indexOf('tuce')>-1 || location.href.indexOf('meitu')>-1) {
            //列表页 报价
            popObj = {
                pricePtag: '1_2_2_991',
                designPtag: '2_2_3_1003',
                companyPtag: ' 2_2_3_1004',
                materialPtag: '2_2_3_1005',
                onceTimes: '1_2_3_1130',
                twiceTimes: '1_2_3_1131'
            }
        } else {
            //首页 报价
            popObj = {
                pricePtag: '1_2_1_989',
                designPtag: '1_2_1_999',
                companyPtag: ' 1_2_1_1000',
                materialPtag: '1_2_1_1001',
                onceTimes: '1_2_1_1128',
                twiceTimes: '1_2_1_1129'
            }
        };
        popObj.showIndex = 0;
    };
    popObj.automatic = false;
    popObj.exposurePtag = '';
    popObj.priceTitle='算算该装修风格预算';
    popObj.priceResultTit='该装修风格预算为：';
    popObj.showXGTImg = true;
    popObj.showResult = true;
    popObj.imgSrcPage = imgSrc;
    CommonTenderPop.init(popObj);
})

function collectionBox(thisObj, e) {
    if (thisObj.className == 'bg_filter2') {//已收藏
        var str = '<p style="text-align:center;margin-top: 24px; margin-bottom: 40px; font-size: 14px;">您已收藏过该图片, 请勿重复收藏！</p>';
        jq('.window_box').windowBox({
            width: 480,    //弹框宽度
            title: "收藏", //标题
            wbcStr: str,  //可编辑内容
            cancleBtn: false,    //是否显示取消按钮
            confirmBtn: false  // 是否显示确认按钮
        });
    }

    var oldaid = jq(thisObj).parents(".item").attr("oldaid");
    collectionImageId = oldaid;
    var oldcid = jq(thisObj).parents(".item").attr("oldcid");
    var width = jq(thisObj).parents(".item").attr("original_width");
    var height = jq(thisObj).parents(".item").attr("original_height");
    var title = jq(thisObj).parent().next().children("a").text();
    var filename = jq(thisObj).parents(".item").find("a.item_img img").attr("src");
    var picNum = jq(thisObj).parent().next().children("em").text();


    jq('#show_img').attr("oldaid", oldaid);
    jq('#show_img').attr("oldcid", oldcid);
    jq('#show_img').attr("width", width);
    jq('#show_img').attr("height", height);
    jq('#show_img').attr("title", title);
    jq('#show_img').attr("filename", filename.replace("_284", '').replace('smallcase', 'case'));

    openCollectionBox(picNum);
}


function openCollectionBox(picNum) {
    var display = '',
        wb_height = 321;
    switch (picType) {
        case 0:
            try {
                clickStream.getCvParams('1_2_2_10');
            } catch (e) {
            }
            ;
            break;
        case 1:
            try {
                clickStream.getCvParams('1_2_2_9');
            } catch (e) {
            }
            ;
            break;
        default:
            try {
                clickStream.getCvParams('1_2_1_3');
            } catch (e) {
            }
            ;
            break;
    }

    if (picType != "0") {
        display = 'style="display:none;"';
        wb_height = 300;
    }
    if (checkLogin('yz, sjs, zs_sjs')) {
        var uid = getCookie('to8to_uid');
        var tid = getCookie('to8to_fcm_tid');
        tid = tid > 0 ? tid : 0;
        var url = '/collection.php?type=1';
        var data = {uid: uid, tid: tid};
        var albumList = '';
        var new_album_name = '';
        jq.post(url, data, function (message) {
            if (message) {
                jq.each(message, function (i, data) {
                    albumList += '<option value="' + data.xfid + '">' + data.name + '</option>';
                });


                jq('.window_box').windowBox({
                    width: 480,    //弹框宽度
                    height: wb_height,   //弹框高度
                    title: "收藏", //标题
                    wbcStr: '<div class="collection_box_content clear"><dl ' + display + ' class="cbc_dl_one"><dt>收藏内容</dt><dd><div class="cb_item"><input name="collect_type" class="cbc_radio" type="radio" checked="checked" value="1"><span  class="collect_span">收藏单张图片</span></div><div class="cb_item"><input name="collect_type" class="cbc_radio" value="2" type="radio"><span  class="collect_span">收藏整套图片（共' + parseInt(picNum) + '张）</span></div></dd></dl><dl class="cbc_dl_two"><dt>选择专辑</dt><dd><div class="cb_item"><input name="album_type" checked="checked" value=1 type="radio" class="cbc_radio" ><span  class="collect_span">现有专辑</span><select name="album_select">' + albumList + '</select></div><div class="cb_item"><input name="album_type" class="cbc_radio"  value=2 type="radio" ><span  class="collect_span">新建专辑</span><input name="new_album_input" class="cbc_text" type="text"/></div></dd></dl></div>',  //可编辑内容
                    cancleBtn: true,    //是否显示取消按钮
                    confirmBtn: true  // 是否显示确认按钮
                });
                jq('.cbc_text[name="new_album_input"]').blur(function () {
                    var cbcStr = '<span class="window_box_collectError window_box_error"><em></em>专辑名不能为空</span>';
                    if (jq(this).val() == "") {
                        jq('.cbc_text[name="new_album_input"]').css('border-color', "#ff6767");
                        jq('.cbc_text[name="new_album_input"]').parent().css("height", "auto");
                        if (jq('.cbc_text[name="new_album_input"]').next().length == 0) {
                            jq('.cbc_text[name="new_album_input"]').after(cbcStr);
                        }

                    } else {
                        jq(this).parent().find('span.window_box_error').remove();
                        jq('.cbc_text[name="new_album_input"]').css('border-color', "#ccc");
                    }


                });
                jq('.cbc_text[name="new_album_input"]').focus(function () {
                    jq(this).parent().find('span.window_box_error').remove();
                    jq('.cbc_text[name="new_album_input"]').css('border-color', "#ccc");
                });
            }
        }, 'json');

    }


}


function showMore(a) {
    var obj = jq(a);
    if (!obj.hasClass('showMore_down')) {
        obj.attr('title', '点击收缩').addClass('showMore_down');
        obj.parent().addClass('height_auto');
    } else {
        obj.attr('title', '点击展开').removeClass('showMore_down');
        obj.parent().removeClass('height_auto');
    }
}

!(function () {
    var a = {
        init: function () {
            xgtTopicDocReady();
        }
    };

    function xgtTopicDocReady() {
        var $xta = jq('.xgt_topic > .topic_item > a')
        $xta.on('mouseenter', function () {
            if (jq(this).find('div.tranLayer').length > 0) return false;
            var str = '<div class="tranLayer"></div>';
            jq(this).append(str);
        });
        $xta.on('mouseleave', function () {
            jq(this).find('div.tranLayer').remove();
        });
    }

    window.xgtTopic = a;
})(jQuery)

!(function () {
    var a = {
        init: function () {
            xgtDetails();
        }
    }

    function xgtDetails() {
        var browserType = checkBrowser();
        /*if((browserType.name == "msie" && browserType.version =="6") || browserType.name =="trident"){
         jq('.xgt_details_img').remove();
         jq('body').css('background-color','#f8f8f8');

         }else{
         jq('.xgt_details_transLayer').show();
         jq('.xgt_details_img').show();

         }*/
    };
    window.topicDetails = a;
})(jQuery)


//完善招标资料
function indexSubZbStepOneXGT(res, weixin_code) {
    if (res.status == 1) {
        window_box_close();

        var str = '<div class="mod_fbbox">' +
            '<a href="http://www.to8to.com/help/?id=68" target="_blank" class="help-link">申请服务常见问题&gt;</a>' +
            '<div class="fbbox_s2">' +
            '<h3 class="fbbox_s2_t">恭喜您申请成功！</h3>' +
            '<p class="fbbox_s2_text">' + res.callTime + '内将有装修管家与您电话联系，确认您的具体需求。由于近期申请火爆，一个月内整屋装修开工的业主，我们将优先服务。完善资料，获取更快的审核服务。</p>' +
            '<div class="clear">';
        if (res.sendmobiletime == '' || res.sendmobiletime == 0 || typeof(res.sendmobiletime) == 'undefined' || res.sendmobiletime == null) {
            str += '<div class="s2_line">' +
                '<label for="" class="label"><span>*</span>&nbsp;量房时间</label>' +
                '<div class="s2_element">' +
                '<div>' +
                '<select class="select" name="sendmobiletime" id="sendmobiletime" style="border-color: rgb(221, 221, 221);">' +
                '<option value="今天内">今天内</option>' +
                '<option value="明天">明天</option>' +
                '<option value="三天内">三天内</option>' +
                '<option value="近一周内">近一周内</option>' +
                '<option value="一周以上">一周以上</option>' +
                '</select>' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        if (res.oarea == '' || res.oarea == 0 || typeof(res.oarea) == 'undefined' || res.oarea == null) {
            str += '<div class="s2_line">' +
                '<label for="" class="label"><span>*</span>&nbsp;装修面积</label>' +
                '<div class="s2_element">' +
                '<div>' +
                '<input type="text" class="text" name="oarea" id="oarea" maxlength="4" style="border-color: rgb(221, 221, 221);"><em class="text_uni">㎡</em>' +
                '</div>' +
                '<div class="err_tip" style="display: none;">' +
                '<span class="ico_error"></span>请填写合理的面积' +
                '</div>' +
                '<div class="err_tip" style="display: none;">' +
                '<span class="ico_error"></span>面积必须小于9999' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        if (res.zxtime == '' || res.zxtime == 0 || typeof(res.zxtime) == 'undefined' || res.zxtime == null) {
            str += '<div class="s2_line">' +
                '<label for="" class="label"><span>*</span>&nbsp;装修时间</label>' +
                '<div class="s2_element">' +
                '<div>' +
                '<select class="select" name="zxtime" id="zxtime" style="border-color: rgb(221, 221, 221);">' +
                '<option value="半个月内">半个月内</option>' +
                '<option value="1个月">1个月</option>' +
                '<option value="2个月">2个月</option>' +
                '<option value="2个月以上">2个月以上</option>' +
                '</select>' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        if (res.hometype == '' || res.hometype == 0 || typeof(res.hometype) == 'undefined' || res.hometype == null) {
            str += '<div class="s2_line">' +
                '<label for="" class="label"><span>*</span>&nbsp;房屋类型</label>' +
                '<div class="s2_element">' +
                '<div>' +
                '<select class="select" name="hometype" id="hometype" style="border-color: rgb(221, 221, 221);">' +
                '<option value="1">住宅公寓</option>' +
                '<option value="2">别墅</option>' +
                '<option value="4">商场</option>' +
                '<option value="21">其他</option>' +

                '</select>' +
                '</div>' +
                '</div>' +
                '</div>';
        }

        if (res.zxys == '' || res.zxys == 0 || typeof(res.zxys) == 'undefined' || res.zxys == null) {
            str += '<div class="s2_line">' +
                '<label for="" class="label"><span>*</span>&nbsp;装修预算</label>' +
                '<div class="s2_element">' +
                '<div>' +
                '<select class="select" name="zxys" id="zxys" style="border-color: rgb(221, 221, 221);">' +
                '<option value="3万以下">3万以下</option>' +
                '<option value="3-5万">3-5万</option>' +
                '<option value="5-8万">5-8万</option>' +
                '<option value="8-12万">8-12万</option>' +
                '<option value="12-18万">12-18万</option>' +
                '<option value="18-25万">18-25万</option>' +
                '<option value="25-30万">25-30万</option>' +
                '<option value="30万以上">30万以上</option>' +
                '</select>' +
                '</div>' +
                '</div>' +
                '</div>';
        }


        if (res.zxtype == '' || res.zxtype == 0 || typeof(res.zxtype) == 'undefined' || res.zxtype == null) {
            str += '<div class="s2_line">' +
                '<label for="" class="label"><span>*</span>&nbsp;装修类型</label>' +
                '<div class="s2_element">' +
                '<div>' +
                '<select class="select" name="zxtype" id="zxtype" style="border-color: rgb(221, 221, 221);">' +
                '<option value="1" selected="">半包</option>' +
                '<option value="2">全包</option>' +
                '</select>' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        str += '</div>';
        if (res.address == '' || res.address == 0 || typeof(res.address) == 'undefined' || res.address == null) {
            str += '<div class="s2_line_b">' +
                '<label for="" class="label">楼盘名称</label>' +
                '<div class="s2_element">' +
                '<div>' +
                '<input class="text" type="text" style="border-color: rgb(221, 221, 221);" name="address" id="address">' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        var data_ptag;
        if (piccType == 3) {

            data_ptag = '1_2_2_38';
        } else if (piccType == 2) {
            data_ptag = '1_2_2_41';
        } else {
            data_ptag = '1_2_1_89';
        }
        str += '<input type="hidden" id="User_City_1" value="' + res.city + '" name="User_City"><input type="hidden" value="' + res.tmpYid + '" name="tyid" id="tyid"><input type="button" value="提交" class="mod_fbbox_btn clickstream_tag" data-ptag="' + data_ptag + '" onclick="selectConfirmZbOverXGT();">' +
            '<div class="service_img_box clear" style="display:none">' +
            '<div class="service_img">' +
            '<p class="service_img_text"><i class="ico_code_s"></i>如需关注项目进展，请扫二维码</p>' +
            '<img src="' + weixin_code + '" alt="" id="weixin_img" style="width:100px;height:100px">' +
            '<div class="mod_pagetip mod_pagetip_s mod_pagetips_noinfo" id="status_success" style="display:none">' +
            '<span class="mod_pagetip_ico"><em class="ico_tip_ok_s"></em></span>' +
            '<div class="mod_pagetip_bd">' +
            '<div class="mod_pagetip_title">扫描成功</div>' +
            '</div>' +
            '</div>' +
            '<div class="mod_pagetip mod_pagetip_s" style="display:none" id="status_fail">' +
            '<!-- 二维码失效 --><span class="mod_pagetip_ico"><em class="ico_tip_warn_s"></em></span>' +
            '<div class="mod_pagetip_bd">' +
            '<div class="mod_pagetip_title">二维码失效</div>' +
            '<div class="mod_pagetip_info">' +
            '请点击<a href="javascript:;" onclick="getnewcode(' + res.tmpYid + ')">刷新二维码</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        jq('.window_box').windowBox({
            width: 520,
            title: "",
            wbcStr: str,
            closeFn: 'stop_code_status'
        });
    }
};

//招标完善资料最后一步
function selectConfirmZbOverXGT() {
    var zb_wxover_msg = '<p class="pb">想省心省钱不被坑来装修学堂就够了。</p><a target="_blank" class="mod_fbbox_btn btn_01af63" href="http://www.to8to.com/huodong/tuangou.php?id=126&ptag=5_6_1">免费学装修</a>';
    //验证面积
    var mjObj = jq("#oarea"),
        errTip = mjObj.parent().parent().find(".err_tip");
    if (isNaN(mjObj.val()) || mjObj.val() == '' || mjObj.val() == '0') {
        errTip.eq(0).css('display', "block");
        mjObj.focus();
        setTimeout(function () {
            errTip.eq(0).css("display", "none");
        }, 2500);
        return;
    } else if (mjObj.val() > 9999) {
        errTip.eq(1).css('display', "block");
        mjObj.focus();
        setTimeout(function () {
            errTip.eq(1).css("display", "none");
        }, 2500);
        return;
    }
    //END 验证面积
    var User_City = jq("#User_City_1").val();
    var oarea = jq("#oarea").val();
    var zxys = jq("#zxys").val();
    var zxtype = jq("#zxtype").val();
    var address = jq("#address").val();
    if (jq("#txttype_1").val()) {
        zxtype = jq("#txttype_1").val();
    }
    ;
    var zxtime = jq("#zxtime").val();
    var hometype = jq("#hometype").val();
    var sendmobiletime = jq("#sendmobiletime").val();
    var tyid = jq("#tyid").val();
    /*******************************微信招标************************************/
    /*		status_request.abort();
     var weixin_code = '';
     var over_qrcode_id = '';
     jq.ajax({
     async:true,
     type:"GET",
     dataType: 'jsonp',
     url:"http://www.to8to.com/api/weixin/run.php",
     data:{action:'createQrcode',cookie_id:'test',data:'createWxCode',type:1},
     success:function(res){
     if(res.code==0)
     {
     weixin_code = res.url;
     over_qrcode_id = res.qrcode_id;
     /*******************************微信招标************************************/

    jq.ajax({
        type: "POST",
        url: "http://xiaoguotu.to8to.com/getuserdata.php",
        data: {
            invite: 2,
            User_City: User_City,
            tyid: tyid,
            oarea: oarea,
            zxys: zxys,
            zxtype_two: zxtype,
            zxtime: zxtime,
            sendmobiletime: sendmobiletime,
            hometype: hometype,
            address: address,
            pos: 'outindex',
            s: Math.random(5)
        },
        success: function (result) {
            if (typeof(JSON) == "undefined") {
                var res = eval("(" + result + ")")
            } else {
                var res = JSON.parse(result)
            }
            if (res.status == 4) {
                window_box_close();
                indexYYFail(res.cityname);
                return false;

                //backFirstFrame();
                //jq("#tmpCity").html(res.cityname);
            }
            else {
                jq('.window_box').remove();
                jq('.translucence_layer').remove();
                if (res.cityname != "深圳" && res.cityname != "南京" && res.cityname != "广州") {
                    zb_wxover_msg = "您的申请正在加速处理中...";
                }
                var successStr = '<div class="mod_fbbox">' +
                    '<div class="fbbox_s3">' +
                    '<div class="mod_pagetip">' +
                    '<span class="mod_pagetip_ico"><em class="ico_tip_ok"></em></span>' +
                    '<div class="mod_pagetip_bd compatibility">' +
                    '<div class="mod_pagetip_title">恭喜您成功完善资料！</div>' +
                    '<div class="mod_pagetip_info">' + zb_wxover_msg + '</div>' +
                    '</div>' +
                    '</div>' +
                        /*
                         '<div class="mod_fbbox_code">'+//扫码状态
                         '<span class="logo"></span>'+
                         '<img src="'+weixin_code+'" id="weixin_img">'+
                         '<p id="code_message">扫描二维码，实时获取装修进度</p>'+
                         '</div>'+
                         '<div class="mod_pagetip mod_pagetip_s mod_pagetips_noinfo" style="display:none" id="status_success">'+
                         '<span class="mod_pagetip_ico"><em class="ico_tip_ok_s"></em></span>'+
                         '<div class="mod_pagetip_bd">'+
                         '<div class="mod_pagetip_title">扫描成功</div>'+
                         '</div>'+
                         '</div>'+
                         '<div class="mod_pagetip mod_pagetip_s" id="status_fail" style="display:none">'+
                         '<span class="mod_pagetip_ico"><em class="ico_tip_warn_s"></em></span>'+
                         '<div class="mod_pagetip_bd">'+
                         '<div class="mod_pagetip_title">二维码失效</div>'+
                         '<div class="mod_pagetip_info">请点击<a href="javascript:;" onclick="getnewcode('+res.tmpYid+')">刷新二维码</a></div>'+
                         '</div>'+
                         '</div>'+//扫码状态
                         */
                    '</div>' +
                    '</div>';
                stop_code_status();//关闭微信扫码状态请求
                jq('.window_box').windowBox({
                    width: 480,
                    title: "提示",
                    wbcStr: successStr
                });
                //zb_getwxstatus(over_qrcode_id,tyid);
            }
        }
    });

    /*******************************微信招标************************************/
    /*									}
     else
     {
     alert(res.msg);
     }

     }
     });
     /*******************************微信招标************************************/
}


//获取微信扫码状态
var status_num = 0;
var status_request;
function zb_getwxstatus(zb_qrcode_id, yid) {

    status_request = jq.ajax({
        async: true,
        type: "GET",
        dataType: 'jsonp',
        url: "http://www.to8to.com/api/weixin/run.php",
        data: {action: 'getScanState', cookie_id: 'test', qrcode_id: zb_qrcode_id},
        timeout: 15000,     //ajax请求超时时间30秒
        success: function (res, textStatus) {

            if (res.code == "405") {
                if (status_num < 19)//一分钟
                {
                    status_num++;
                    zb_getwxstatus(zb_qrcode_id, yid);
                } else {
                    jq("#code_message").hide();
                    jq("#status_fail").show();
                }
            }
            if (res.code == "0") {
                jq("#code_message").hide();
                jq("#status_success").show();
                //zb_getwxuser(zb_qrcode_id,yid);
                jq.ajax({
                    async: true,
                    type: "GET",
                    dataType: 'jsonp',
                    url: "http://www.to8to.com/zb/index.php",
                    data: {
                        weixin_act: 'weixin_banding',
                        yid: yid,
                        open_id: res.user.openid,
                        unionID: res.user.unionID,
                        header_url: res.user.pic_header_url,
                        user_name: res.user.nickname,
                        qrcode_id: zb_qrcode_id
                    },
                    success: function (data) {

                        if (data.code == "0") {
                            alert(data.msg);
                        }

                    }
                });
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            if (textStatus == "timeout") {
                if (status_num < 19)//一分钟
                {
                    status_num++;
                    zb_getwxstatus(zb_qrcode_id, yid);
                } else {
                    jq("#code_message").hide();
                    jq("#status_fail").show();
                }
            }
        }
    });

}


function getnewcode(tmpYid) {
    status_num = 0;
    var weixin_code = '';
    jq.ajax({
        async: true,
        type: "GET",
        dataType: 'jsonp',
        url: "http://www.to8to.com/api/weixin/run.php",
        data: {action: 'createQrcode', cookie_id: 'test', data: 'createWxCode', type: 1},
        success: function (res) {
            if (res.code == 0) {
                jq("#status_fail").hide();
                jq("#code_message").show();
                jq("#weixin_img").attr('src', res.url);
                zb_getwxstatus(res.qrcode_id, tmpYid);
            }
            else {
                alert(res.msg);
            }

        }
    });

}

var yuyue_apply_agin = 0;
var showData = {};
function freeDesign(thisObj, ctype) {
    setCookie('xgtpop_flag', '1',1000000000000);
    var oldaid = jq(thisObj).parents(".item").attr("oldaid"), dptag;
    var data_ptag;
    jq('#show_img').attr("oldaid", oldaid);
    if (ctype == 0) {
        data_ptag = '1_2_2_3';
        dptag = '1_2_2_39';
    }
    else if (ctype == 1) {
        dptag = '1_2_2_36';
        data_ptag = '1_2_2_1';
    }
    else {
        dptag = '1_2_1_91';
        data_ptag = '1_2_1_1';
    }
    clickStream.getCvParams(dptag);
    var str = '<div class="freeQuote_box_content clear new-order"><ul><li><span class="fbc_name">您的称呼</span><input type="text"class="fq_text" name="yourname" maxlength="12"></li><li><span class="fbc_name">手机号码</span><input type="text"class="fq_text" name="youriphone"></li><li><span class="fbc_name">申请城市</span>' +
        "<select class=\"fq_province\" id=\"User_Shen1\"  name=\"User_Shen1\" onChange=\"changeProvince('User_Shen1','User_City1','User_Town1')\"></select><select class=\"fq_area\" id=\"User_City1\" name=\"User_City1\"></select><select  class=\"dn\" id=\"User_Town1\" name=\"User_Town1\"></select>" +
        "<input name='ptag' type='hidden' id='dptag' value='" + dptag + "'/>" +
        '</li></ul><div class="safe accept_service cl design-order"><span class="safe_login"><input type="checkbox" id="as_service" checked="checked"><label>我已阅读并接受<a href="http://www.to8to.com/help/index.php?id=76" target="_blank">《装修常见问题条款》</a></label></span>'+
        '</div><input type="submit"value="免费申请"class="fq_btn clickstream_tag neworder-submit" data-ptag="' + data_ptag + '"><div class="fq_description"><em></em>为了你的利益及我们的口碑，你的隐私将被严格保密。</div></div>';
    jq('.window_box').windowBox({
        width: 480,    //弹框宽度
        title: "免费户型设计", //标题
        // littleTitle: "1-3份方案对比，挑选最满意设计",
        wbcStr: str,  //可编辑内容
        cancleBtn: false,    //是否显示取消按钮
        confirmBtn: false,  // 是否显示确认按钮
        callback: checkInput
    });

    var gpm = new GlobalProvincesModule;               //城市类
    gpm.def_province = ["省/市", ""];
    gpm.def_city1 = ["市/地区", ""];
    gpm.initProvince($('User_Shen1'));
    gpm.initCity1($('User_City1'), gpm.getSelValue($('User_Shen')));
    //发标加入  点击ckeckbox事件
    jq("input#as_service").on('click',function (){
        if (jq(".neworder-submit").hasClass('btn_login_no')) {
            jq('.neworder-submit').removeClass('btn_login_no');
        } else {
            jq('.neworder-submit').addClass('btn_login_no');
        };
    });

};

//效果图添加在线报价弹窗 2015-8-12
jQuery(function () {
    initEvent();
    var resultHref = '',
        mitZXBJFlag = true,
        step1Data = [],
        step1DataTmp = '';

    function initEvent() {
        jq('body').on('click', '[data-tag="freeOffer"]', function () {
            setCookie('xgtpop_flag', '1',1000000000000);
            clickStream.getCvParams('1_2_2_31');
            freeOfferStep1();
        });
        jq(':radio[name="dangci"]').click(function () {//兼容safari
            jq(this).parents('li').removeClass('height_auto').find('.form_error').remove();
        });
        jq(':radio[name="status"]').click(function () {//兼容safari
            jq(this).parents('p').removeClass('height_auto').find('.form_error').remove();
        });
    }

    //装修报价第1步检测
    function checkZXBJFirst() {
        var chkArr = [{
            id: jq('.freeOffer_box_content :text[name="square"]')[0],
            parentTip: '.freeOffer_box_content',
            info: [{
                reg: [0],
                tip: '请输入建筑面积'
            }, {
                reg: [/^[0-9\.]+$/],
                tip: '请输入正确的建筑面积'
            }, {
                reg: [/^\d+(\.[0-9]?[1-9]{1})?$/],
                tip: '建筑面积不能超过两位小数'
            }, {
                reg: [/^[0-4]{1}(\.[0-9]?[1-9]{1})?$/],
                tip: '建筑面积必须大于5', negate: true
            }, {
                reg: [/^[1-9]{1}[0-9]{0,2}(\.[0-9]?[1-9]{1})?$|^1000$/],
                tip: '建筑面积必须是1000以内'
            }]
        }, {
            id: jq('.freeOffer_box_content select[name="User_Shen1"]')[0],
            parentTip: '.freeOffer_box_content',
            info: [{
                reg: [0],
                tip: '请选择所在地'
            }]
        }, {
            id: jq('.freeOffer_box_content select[name="User_City1"]')[0],
            parentTip: '.freeOffer_box_content',
            info: [{
                reg: [0],
                tip: '请选择所在地'
            }]
        }, {
            id: jq('.freeOffer_box_content select[name="zxtime"]')[0],
            parentTip: '.freeOffer_box_content',
            info: [{
                reg: [0],
                tip: '请选择装修时间'
            }]
        }];

        return simplifyCheck2(chkArr);
    }

    function getZXBJdata(flag) {
        var wrap = jq('.freeOffer_box_content');
        var data = {};
        data.square = wrap.find(':text[name="square"]').val();
        data.shen = wrap.find('select[name="User_Shen1"]').val();
        data.city = wrap.find('select[name="User_City1"]').val();
        data.zxtime = wrap.find('select[name="zxtime"]').val();
        data.dangci = wrap.find(':hidden[name="dangci"]').val();
        data.ptag = wrap.find('input[class="fq_btn clickstream_tag"]').attr('data-ptag');

        if (flag) {
            return [data.oarea, data.shen, data.city, data.dangci, data.ptag,data.zxtime];
        }
        return data;
    }

    function freeOfferStep1() {
        var data_ptag;
        data_ptag = picList ? '1_2_1_95' : '1_2_2_32';

        var str = '<div class="freeQuote_box_content freeOffer_box_content clear">\
						<ul>\
							<li>\
								<span class="fbc_name">建筑面积</span>\
								<input type="text"class="fq_text" name="square">\
							</li>\
							<li>\
								<span class="fbc_name">所在城市</span>\
								<select class="fq_province" id="User_Shen1"  name="User_Shen1" onChange="changeProvince(\'User_Shen1\',\'User_City1\',\'User_Town1\')"></select>\
								<select class="fq_area" id="User_City1" name="User_City1"></select>\
								<select  class="dn" id="User_Town1" name="User_Town1"></select>\
								<input name="ptag" type="hidden" value="' + data_ptag + '"/>\
							</li>\
							<li>\
                                <input type="hidden" value="jianzhuang" name= "dangci">\
								<span class="fbc_name">装修时间</span>\
								<select class="fq_area" id="zxtimes" name="zxtime" style="width:297px;">\
                                    <option value="">请选择装修时间</option>\
                                    <option value="半个月内">半个月内</option>\
                                    <option value="1个月">1个月</option>\
                                    <option value="2个月">2个月</option>\
                                    <option value="2个月以上">2个月以上</option>\
                                </select>\
							</li>\
						</ul>\
						<input type="submit" value="获取报价" class="fq_btn clickstream_tag"  data-ptag="' + data_ptag + '">\
						<div class="fq_description"><em></em>为了你的利益及我们的口碑，你的隐私将被严格保密。</div>\
					</div>';
        jq('.window_box').windowBox({
            width: 480,    //弹框宽度
            title: "免费获取报价", //标题
            littleTitle: "10秒极速获取您的装修预算",
            wbcStr: str,  //可编辑内容
            cancleBtn: false,    //是否显示取消按钮
            confirmBtn: false
        });

        var gpm = new GlobalProvincesModule;               //城市类
        gpm.def_province = ["省/市", ""];
        gpm.def_city1 = ["市/地区", ""];
        gpm.initProvince($('User_Shen1'));
        gpm.initCity1($('User_City1'), gpm.getSelValue($('User_Shen1')));

        jq('.freeQuote_box_content .fq_btn').click(function () {
            if (checkZXBJFirst()) {
                step1Data = getZXBJdata();
                step1DataTmp = getZXBJdata(true);
                window_box_close();
                //判断链接是否为新的效果图链接   10秒自动弹窗
                var new_href_present = -1;
                var new_href_present1 = -1;
                if (location.href.split('?')[1] && location.href.split('/')[3]){//如果存在这个参数
                    new_href_present = location.href.split('?')[1].indexOf('tg_meitu=sem');
                    new_href_present1 = location.href.split('/')[3].indexOf('meitu');
                }
                if (new_href_present >= 0 && new_href_present1 >= 0 && new_dialog_ptag == 1){
                    var ptag = '1_2_19_597';
                    if (ptag) {
                        try {
                            clickStream.getCvParams(ptag);
                        } catch (e) {
                        }
                    }
                }
                freeOfferStep2();
            }

        });
    }

    function newverifypicMy(id) {
        var id = id || 'passport',
            str = window.location.href.toString().split('.')[0].replace('http://', "") || 'www',
            A = new Date().getTime();

        jq(id).attr('src', 'http://' + str + '.to8to.com/passport.php?t=' + A);
    };

    function freeOfferStep2() {
        var data_ptag;
        data_ptag = picList ? '1_2_1_96' : '1_2_2_33';

        var str = '<div class="freeQuote_box_content freeOffer_box_content clear">\
						<ul>\
							<li>\
								<span class="fbc_name">手机号码</span>\
								<input type="text" class="fq_text" name="chkPhone">\
							</li>\
							<li>\
								<span class="fbc_name">验证码</span>\
								<input type="text" class="fq_text2" name="chkYzm">\
	                        	<img class="passport img_yzm">\
	            			</li>\
						</ul>\
						<input type="submit" value="获取报价" class="fq_btn clickstream_tag"  data-ptag="' + data_ptag + '">\
						<div class="fq_description"><em></em>为了你的利益及我们的口碑，你的隐私将被严格保密。</div>\
					</div>';
        jq('.window_box').windowBox({
            width: 480,    //弹框宽度
            title: '<i class="ico_tip_warn_green_s"></i><label>为了方便随时查看，报价结果会短信发送</label>',  //标题
            wbcStr: str,  //可编辑内容
            cancleBtn: false,    //是否显示取消按钮
            confirmBtn: false
        });
        jq('.freeOffer_box_content .passport').click(function () {
            newverifypicMy(this);
        }).trigger('click');
        jq('.freeQuote_box_content .fq_btn').click(function () {
            //获取当前ptag
            var ptag = jq(this).attr('data-ptag');
            //百度统计函数
            try{
                _hmt && _hmt.push(['_trackEvent', 'zb', 'submit', ptag]);
            }catch(e){

            }
            checkPhoneStep2();
        });
        //判断链接是否为新的效果图链接   10秒自动弹窗
        var new_href_present = -1;
        var new_href_present1 = -1;
        if (location.href.split('?')[1] && location.href.split('/')[3]){//如果存在这个参数
            new_href_present = location.href.split('?')[1].indexOf('tg_meitu=sem');
            new_href_present1 = location.href.split('/')[3].indexOf('meitu');
        }
        if (new_href_present >= 0 && new_href_present1 >= 0 && new_dialog_ptag == 1){
            jq('.freeOffer_box_content .fq_btn').attr('data-ptag','1_2_19_562');
            jq('.window_box_close').addClass('new-zxbj-close2');
            jq('.window_box_close').removeAttr('onClick');
        }
    }

    function freeOfferStep3(prc1, prc2, tip) {
        var data_ptag;
        data_ptag = picList ? '1_2_1_93' : '1_2_2_34';
        var str = '<div class="freeQuote_box_content freeOffer_box_content clear">\
						<div class="freeOffer_price mt58">\
						    <p class="title_p2 ">估算价格：<span class="f_c_f36f20">' + prc1 + '元</span></p>\
						    <p class="title_p3">\
						    	<span class="fbc_name">您觉得以上报价：</span>\
						    	<label><input type="radio" name="status" value="0">合理</label>\
						    	<label><input type="radio" name="status" value="1">偏低</label>\
						    	<label class="last"><input type="radio" name="status" value="2">偏高</label>\
						    </p>\
						</div>\
						<a  class="fq_btn clickstream_tag fq_btn_no_marging"  data-ptag="' + data_ptag + '">获取报价明细</a>\
						<div class="fq_description"><em></em>为了你的利益及我们的口碑，你的隐私将被严格保密。</div>\
						</div>';
        jq('.window_box').windowBox({
            width: 480,    //弹框宽度
            title: '<i class="ico_tip_warn_green_s"></i><label>' + tip + '</label>', //标题
            wbcStr: str,  //可编辑内容
            cancleBtn: false,    //是否显示取消按钮
            confirmBtn: false
        });

        jq('.freeQuote_box_content .fq_btn').click(function () {
            getResultStatus(this);
        });
    }

    // function freeOfferStep4(text1) {
    //     var data_ptag;
    //     data_ptag = picList ? '1_2_1_92' : '1_2_2_35';
    //     var str = '<div class="freeQuote_box_content freeOffer_box_content clear">\
				// 		<div class="freeOffer_price">\
				// 			<p class="title_p1">' + text1 + '</p>\
				// 		</div>\
				// 		<a href="javascript:;" target="_blank" class="fq_btn clickstream_tag"  data-ptag="' + data_ptag + '">获取报价明细</a>\
				// 		</div>';
    //     jq('.window_box').windowBox({
    //         width: 480,    //弹框宽度
    //         title: '', //标题
    //         wbcStr: str,  //可编辑内容
    //         cancleBtn: false,    //是否显示取消按钮
    //         confirmBtn: false
    //     });
    //     console.log(resultHref);
    //     jq('.freeQuote_box_content .fq_btn').attr('href', resultHref);
    // }

    function getResultStatus(_this) {
        var ptag = picList ? '1_2_1_96' : '1_2_2_33';
        var chkArr = [{
            id: '.freeOffer_box_content :radio[name="status"]',
            parentTip: '.freeOffer_box_content',
            chkType: 'radio',
            parCls: 'p',
            info: [{
                reg: [0],
                tip: '请选择 合理 或 偏低 或 偏高'
            }]
        }];

        if (simplifyCheck2(chkArr)) {
            showData.backState = jq('.freeOffer_box_content').find(':radio:checked').val() || 0;
            showData.ptag = ptag;
            jq.ajax({
                type: "get",
                url: 'http://to8tozb.to8to.com/zb/zb-index-get.php',
                dataType: 'jsonp',
                jsonpCallback: 'jsonpCallback',
                data: showData,
                success: function (data) {
                    window_box_close();
                    // freeOfferStep4(data.desc3);
                }
            });
            jq(_this).attr({
                'href':resultHref,
                'target': '_blank'
            })
        }
    }

    function checkPhone() {
        var wrapStep2 = jq('.freeOffer_box_content'),
            phone = wrapStep2.find(':text[name="chkPhone"]'),
            yzm = wrapStep2.find(':text[name="chkYzm"]');

        var chkArr = [{
            id: phone[0],
            parentTip: wrapStep2[0],
            info: [{
                reg: [0],
                tip: '请输入手机号码'
            }, {
                reg: [/^1{1}[34578]{1}\d{9}$/],
                tip: '请输入正确的手机号码'
            }]
        }, {
            id: yzm[0],
            parentTip: wrapStep2[0],
            info: [{
                reg: [0],
                tip: '请输入验证码'
            }]
        }];

        return simplifyCheck2(chkArr);
    }

    function submitZXBJData(da, phone) {
        var reg = new RegExp('ptag=[^&]*');
        var ptag = jq('.freeOffer_box_content').find('input[class="fq_btn clickstream_tag"]').attr('data-ptag');
        var tempData = step1Data.replace(reg, 'ptag=' + ptag);
        da += '&secStepWidgetAjax=1&type=side&' + tempData + '&mobile=' + phone.val();
        jq.ajax({
            type: "post",
            url: '/yezhu/zxbjnew.php',
            dataType: 'text',
            data: da,
            success: function (res) {
                var res = JSON.parse(res);
                if (res.status == 1) {//发送成功
                    mitZXBJFlag = true;
                    var href = 'http://www.to8to.com/zb/zxbj2.php?windbox=boxhref&square=' + step1DataTmp[0] + '&User_Shen=' + encodeURIComponent(step1DataTmp[1]) + '&User_City=' + encodeURIComponent(step1DataTmp[2]) + '&dangci=' + step1DataTmp[3] + '&ptag=' + step1DataTmp[4];
                    resultHref = href;
                    window_box_close();
                    freeOfferStep3(res.banbaoPrice, res.quanbaoPrice, res.desc1);
                }
            }
        });
    }

    //第2步
    function checkPhoneStep2() {
        var wrapStep2 = jq('.freeOffer_box_content'),
            phone = wrapStep2.find(':text[name="chkPhone"]').val(),
            yzm = wrapStep2.find(':text[name="chkYzm"]'),
            rand_num = yzm.val();

        if (!mitZXBJFlag) {
            return false;
        }

        if (checkPhone()) {
            mitZXBJFlag = false;
            if (rand_num == '') {
                yzm.focus();
            } else {
                //var  da = wrapStep2.find('form[name="xgt_zxbj_area_form"]').serialize();
                //da += '&refurl='+refurl;
                jq.ajax({
                    type: "GET",
                    url: "/my/get_moblie_yz.php",
                    dataType: 'json',
                    data: {ajax: 1, rand_num: rand_num},
                    success: function (data) {
                        if (data == 1) {//验证码正确
                            //submitZXBJData(da, phone);
                            step1Data.phone = phone;
                            step1Data.nowstep = 1;
                            step1Data.modeltype = 2;
                            step1Data.type = 'bottom';
                            step1Data.refurl = window.parent.location.href;
                            step1Data.ptag = jq('.freeOffer_box_content').find('input[class="fq_btn clickstream_tag"]').attr('data-ptag');
                            step1Data.onFirstStepEnd = function (res) {
                                //报价结果展示
                                if (res.status == 1) {//发送成功
                                    mitZXBJFlag = true;
                                    var href = 'http://www.to8to.com/zb/zxbj2.php?windbox=boxhref&square=' + step1Data.square + '&User_Shen=' + encodeURIComponent(step1Data.shen) + '&User_City=' + encodeURIComponent(step1Data.city) + '&dangci=' + step1Data.dangci + '&ptag=' + step1Data.ptag + '&zxtime=' + step1Data.zxtime;
                                    resultHref = href;
                                    window_box_close();
                                    showData.nowstep = res.nextstep;
                                    showData.modeltype = res.modeltype;
                                    showData.yid = res.yid;
                                    freeOfferStep3(res.banbaoPrice, res.quanbaoPrice, res.desc1);
                                }

                                //submitZXBJData(da, phone);
                            }
                            var xgtBJ = new tender();
                            xgtBJ.init(step1Data);
                        } else {
                            mitZXBJFlag = true;
                            alert('验证码错误');
                            yzm.focus();
                        }
                    }
                });
            }
        }
    }
    //判断链接是否为新的效果图链接
    var new_dialog_ptag = 0;//普通弹框发标
    window.onload = function(){
        setTimeout(function(){
            //判断链接是否为新的效果图链接   10秒自动弹窗
            var new_href_present = -1;
            var new_href_present1 = -1;
            if (location.href.split('?')[1] && location.href.split('/')[3]){//如果存在这个参数
                new_href_present = location.href.split('?')[1].indexOf('tg_meitu=sem');
                new_href_present1 = location.href.split('/')[3].indexOf('meitu');
            }
            if (new_href_present >= 0 && new_href_present1>=0){
                new_dialog_ptag = 1;//标识为弹框
                freeOfferStep1();
                jq('.window_box_close').removeAttr('onClick');
                jq('.window_box_close').addClass('new-zxbj-close');
                //第一步关闭按钮  点击流
                jq('body').on('click','.new-zxbj-close',function(){
                    window_box_close(this);
                    new_dialog_ptag = 0;//标记为不是弹框
                    var ptag = '1_2_19_563';
                    if (ptag) {
                        try {
                            clickStream.getCvParams(ptag);
                        } catch (e) {
                        }
                    }
                })
                //第二步关闭按钮  点击流
                jq('body').on('click','.new-zxbj-close2',function(){
                    window_box_close(this);
                    new_dialog_ptag = 0;//标记为不是弹框
                    var ptag = '1_2_19_596';
                    if (ptag) {
                        try {
                            clickStream.getCvParams(ptag);
                        } catch (e) {
                        }
                    }
                })

            }
        },10000);
    };
    //点击装修报价
    jq('.four-quote-count').click(function(){
        var ptag = jq(this).find('img').attr('data-ptag');
        if (ptag) {
            try {
                clickStream.getCvParams(ptag);
            } catch (e) {
            }
        };
        listImg4BombBox(ptag);
    });
    //点击装修设计
    jq('.twelve-design-bespeak').click(function(){
        var ptag = jq(this).find('img').attr('data-ptag');
        if (ptag) {
            try {
                clickStream.getCvParams(ptag);
            } catch (e) {
            }
        };
        Img12Appoint(ptag);
    });

    //列表页4图片弹框
    function listImg4BombBox(ptag){
        var close_ptag = '',
            count_ptag = '';
        if (ptag == '1_2_3_606'){
            close_ptag = '1_2_3_608';
            count_ptag = '1_2_3_614';
        }
        if(ptag == '1_2_3_610'){
            close_ptag = '1_2_3_612';
            count_ptag = '1_2_3_616';
        }

        var flag = true;
        var str = '<div class="list-img-bombbox">\
                    <div class="xgt-pop-header"></div>\
                    <form id="xgt_img4_form" class="xgt_img4_form">\
                    <div class="img4-box">\
                        <div class="form_line">\
                            <label class="label">所在城市：</label>\
                            <div class="element">\
                                <div class="clear">\
                                    <input type="hidden" name="dangci" value="jianzhuang">\
                                    <select id="User_Shen1" name="shen" class="select select-shen" onchange="changeProvince(\'User_Shen1\',\'User_City1\',\'User_Town1\');">\
                                    </select>\
                                    <select id="User_City1" name="city" class="select select-city"></select>\
                                    <select class="dn" id="User_Town1" name="User_Town1"></select>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="form_line">\
                        <label  class="label" >房屋面积：</label>\
                    <div class="element">\
                        <div class="text_wrap">\
                        <input type="text" class="text area_text" name="square" id="square">\
                        <em class="text_lbl">输入您的房屋面积</em>\
                        <em class="unit" style="color: black;">m&sup2;</em>\
                    </div>\
                    </div>\
                    </div>\
                    <div class="form_line">\
                        <label  class="label">房屋户型：</label>\
                    <div class="element">\
                        <div class="clear">\
                        <select name="shi" id="shi" class="select select_s select-margin0">\
                        <option value="1">1室</option>\
                    <option value="2">2室</option>\
                    <option value="3">3室</option>\
                    <option value="4">4室</option>\
                    <option value="5">5室</option>\
                    <option value="6">6室</option>\
                    </select>\
                    <select name="ting" id="ting" class="select select_s select_t">\
                        <option value="1">1厅</option>\
                        <option value="2">2厅</option>\
                        <option value="3">3厅</option>\
                        <option value="4">4厅</option>\
                        <option value="5">5厅</option>\
                        <option value="6">6厅</option>\
                    </select>\
                    <select name="chu" id="chu" class="select select_s select-width88 select-margin0">\
                        <option value="1">1厨</option>\
                        <option value="2">2厨</option>\
                        <option value="3">3厨</option>\
                        <option value="4">4厨</option>\
                    </select>\
                    <select name="wei" id="wei" class="select select_s select-width88">\
                        <option value="1">1卫</option>\
                        <option value="2">2卫</option>\
                        <option value="3">3卫</option>\
                        <option value="4">4卫</option>\
                        <option value="5">5卫</option>\
                        <option value="6">6卫</option>\
                    </select>\
                    <select name="yangtai" id="yangtai" class="select select_s select-width88 select_yt">\
                        <option value="1">1阳台</option>\
                        <option value="2">2阳台</option>\
                        <option value="3">3阳台</option>\
                        <option value="4">4阳台</option>\
                        <option value="5">5阳台</option>\
                        <option value="6">6阳台</option>\
                    </select>\
                    </div>\
                    </div>\
                    </div>\
                    <div class="form_line phone-validate" id="img4phone">\
                        <label class="label" >手机号码：</label>\
                    <div class="element">\
                        <div class="text_wrap"><input type="text" class="text phone-text" name="phone"><em class="text_lbl">输入手机号码获取预算明细</em></div>\
                        </div>\
                        </div>\
                        <div class="form_line">\
                        <input type="hidden" name="ptag" id="myPtag" value="1_1_1"/>\
                        </div>\
                        <div class="img4-bottom-ps"><p><b>*</b>为了您的权益，您的隐私将被严格保密</p></div>\
                        <div class="img4-bottom-btn"><a href="javascript:void(0)" class="offer-btn" ptag =' +count_ptag+'>开始计算</a></div>\
                        </div>\
                        </form>\
                  </div>';
        jq('.window_box').windowBox({
            width: 480,    //弹框宽度
            wbcStr: str,  //可编辑内容
            title:'',
            cancleBtn: false,    //是否显示取消按钮
            confirmBtn: false
        });
        //给关闭按钮添加class
        jq('.window_box_close').addClass('xgt-img4-close').attr('ptag',close_ptag);
        jq('.window_box_close').removeAttr('onClick');
        //点击弹框关闭按钮  并统计
        jq('.xgt-img4-close').click(function(){
            window_box_close(this);
            var ptag = jq(this).attr('ptag');
            if (ptag) {
                try {
                    clickStream.getCvParams(ptag);
                } catch (e) {
                }
            }
        });
        //省市
        var gpm = new GlobalProvincesModule;               //城市类
        gpm.def_province = ["省/市", ""];
        gpm.def_city1 = ["市/地区", ""];
        gpm.initProvince($('User_Shen1'));
        gpm.initCity1($('User_City1'), gpm.getSelValue($('User_Shen1')));
        //表单效果
        jq('.text_wrap > input').val("");
        jq('.text_wrap > .text_lbl').click(function () {
            jq(this).parent().find('input').focus().trigger('click');
        });
        jq('.text_wrap > input').on('keydown', function () {
            jq(this).parent().find('.text_lbl').hide();
        });
        jq('.text_wrap > input').blur(function () {
            if (jq(this).val() == '') jq(this).parent().find('.text_lbl').show();
        });
        //改变弹框样式
        jq('.window_box_close').addClass('img4-close');
        jq('.window_box_title').css('height','0px').children('span,em').hide();

        //根据面积显示户型
        jq('.img4-box #square').on('keyup', function(){
            corresponding_square(jq(this).val(), this);
        })
        jq('.img4-bottom-btn .offer-btn').click(function(){
            if (img4validData() && flag){
                var ptag = jq('.img4-bottom-btn .offer-btn').attr('ptag');
                var data = formToJSON(jq('#xgt_img4_form'));
                data.type = 'detail';
                data.nowstep = 1;
                data.modeltype = 9;
                data.demoType = 1;
                data.ptag = ptag;
                data.onFirstStepEnd = function(data) {
                    flag = true;
                    Img4OfferDetail(data);
                }
                var sendMsg = new tender();
                sendMsg.init(data);
                window_box_close();
                //发标统计
                var ptag = jq(this).attr('ptag');
                if (ptag) {
                    try {
                        clickStream.getCvParams(ptag);
                    } catch (e) {
                    }
                }
                flag = false;
            }
        });

    }
    //效果图列表广告位发标第二步
    function Img4OfferDetail(price_text){
        var str = '<div class="list-img-bombbox">\
                    <div class="xgt-pop-header"></div>\
                    <div class="img4-detail-price img4-box">\
                    <h2>毛坏房半包装修预估价</h2>\
                    <p class="overall-price"><span>￥</span>'+price_text.to8to_totle_price+'</p>\
                    <ul>\
                    <li class="clear">\
                    <span class="price-classification">人工费:</span>\
                    <span class="price-detailed">￥<strong>'+price_text.to8to_rg_price+'</strong></span>\
                    </li>\
                    <li class="clear">\
                    <span class="price-classification">材料费:</span>\
                    <span class="price-detailed">￥<strong>'+price_text.to8to_cl_price+'</strong></span>\
                    </li>\
                    <li class="clear">\
                    <span class="price-classification">设计费:</span>\
                    <span class="price-detailed">￥<strong>0</strong><strong class="reality-price">￥<em>'+price_text.normal_sj_price+'</em></strong>\
                    </li>\
                    <li class="clear">\
                    <span class="price-classification">质检费:</span>\
                    <span class="price-detailed">￥<strong>0</strong><strong class="reality-price">￥<em>'+price_text.normal_zj_price+'</em></strong>\
                    </li>\
                    </ul>\
                    <div class="detail-price-ps">\
                    <p class="ps-orange">稍后装修管家将回电您，免费提供装修咨询服务</p>\
                    <p class="ps-gray">因材料品牌及工程量不同，具体报价以量房实测为准</p>\
                    </div>\
                    </div>\
                    </div>';
        jq('.window_box').windowBox({
            width: 480,    //弹框宽度
            wbcStr: str,  //可编辑内容
            title:'',
            cancleBtn: false,    //是否显示取消按钮
            confirmBtn: false
        });
        //改变弹框样式
        jq('.window_box_close').addClass('img4-close');
        jq('.window_box_title').css('height','0px').children('span,em').hide();

    }
    //效果图列表页新的预约弹窗
    function Img12Appoint(ptag){
        var close_ptag = '',
            yuyue_ptag = '';
        if (ptag == '1_2_3_607'){
            close_ptag = '1_2_3_609';
            yuyue_ptag = '1_2_3_615';
        }
        if(ptag == '1_2_3_611'){
            close_ptag = '1_2_3_613';
            yuyue_ptag = '1_2_3_617';
        }
        var flag = true;
        var str = '<div class="list-img-bombbox">\
                    <div class="design-plan-box img4-box img12-box">\
                    <h2>免费领取户型设计方案</h2>\
                    <p>定制设计  小户型变大空间</p>\
                    <div class="procedure-img"></div>\
                    <div class="remain-people"><span>每日限&nbsp&nbsp;<em class="filled">1000</em>&nbsp&nbsp;个名额</span></div>\
                    <form id="xgt_img12_form">\
                        <div class="form_line">\
                            <label class="label">申请城市：</label>\
                            <div class="element">\
                                <div class="clear">\
                                    <input type="hidden" name="dangci" value="jianzhuang">\
                                    <select id="User_Shen1" name="shen" class="select select-shen" onchange="changeProvince(\'User_Shen1\',\'User_City1\',\'User_Town1\');">\
                                    </select>\
                                    <select id="User_City1" name="city" class="select select-city"></select>\
                                    <select class="dn" id="User_Town1" name="User_Town1"></select>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="form_line" id="nameInput">\
                            <label class="label" >您的姓名：</label>\
                            <div class="element">\
                                <div class="text_wrap"><input type="text" class="text fq_text" name="chenghu" maxlength="12"><em class="text_lbl">请输入您的姓名</em></div>\
                            </div>\
                        </div>\
                        <div class="form_line phone-validate" id="img12phone">\
                            <label class="label" >您的号码：</label>\
                            <div class="element element-phone">\
                                <div class="text_wrap"><input type="text" class="text phone-text" name="phone"><em class="text_lbl">请输入手机号码</em></div>\
                            </div>\
                        </div>\
                        <div class="login-point">\
                            <span class="safe_login">\
                            <input type="checkbox" id="as_service" checked="checked">\
                            <strong>我已阅读并接受<a href="http://www.to8to.com/help/index.php?id=76" target="_blank">《装修常见问题条款》</a></strong>\
                            </span>\
                        </div>\
                        <div class="design-btn"><input type="button" value="立即预约" class="appoint-btn neworder-submit" data-ptag="" ptag ='+yuyue_ptag+'></div>\
                    </form>\
                    </div>\
                    </div>';
        jq('.window_box').windowBox({
            width: 480,    //弹框宽度
            wbcStr: str,  //可编辑内容
            title:'',
            cancleBtn: false,    //是否显示取消按钮
            confirmBtn: false
        });
        //给关闭按钮添加class
        jq('.window_box_close').addClass('xgt-img12-close').attr('ptag',close_ptag);
        jq('.window_box_close').removeAttr('onClick');
        //点击弹框关闭按钮  并统计
        jq('.xgt-img12-close').click(function(){
            window_box_close(this);
            var ptag = jq(this).attr('ptag');
            if (ptag) {
                try {
                    clickStream.getCvParams(ptag);
                } catch (e) {
                }
            }
        });
        //省市
        var gpm = new GlobalProvincesModule;               //城市类
        gpm.def_province = ["省/市", ""];
        gpm.def_city1 = ["市/地区", ""];
        gpm.initProvince($('User_Shen1'));
        gpm.initCity1($('User_City1'), gpm.getSelValue($('User_Shen1')));
        //表单效果
        jq('.text_wrap > input').val("");
        jq('.text_wrap > .text_lbl').click(function () {
            jq(this).parent().find('input').focus().trigger('click');
        });
        jq('.text_wrap > input').on('keydown', function () {
            jq(this).parent().find('.text_lbl').hide();
        });
        jq('.text_wrap > input').blur(function () {
            if (jq(this).val() == '') jq(this).parent().find('.text_lbl').show();
        });
        //发标加入  点击ckeckbox事件
        jq("input#as_service").on('click',function (){
            if (jq(".neworder-submit").hasClass('btn_login_no')) {
                jq('.neworder-submit').removeClass('btn_login_no');
            } else {
                jq('.neworder-submit').addClass('btn_login_no');
            };
        });
        //改变弹框样式
        jq('.window_box_close').addClass('img12-close');
        jq('.window_box_title').css('height','0px').children('span,em').hide();

        //点击预约
        jq('.img12-box .appoint-btn').click(function(){
            //判读此时是否为未勾选条款(未勾选 则不能点击)
            if(jq(".neworder-submit").hasClass('btn_login_no')){
                return false;
            }
            if (img12validData() && flag){
                //装修设计 点击预约统计
                var ptag = jq('.img12-box .appoint-btn').attr('ptag');
                if (ptag) {
                    try {
                        clickStream.getCvParams(ptag);
                    } catch (e) {
                    }
                };
                var data = formToJSON(jq('#xgt_img12_form'));
                data.type = 'detail';
                data.nowstep = 1;
                data.modeltype = 1;//普通招标
                data.ptag = ptag;
                data.onFirstStepEnd = function(data) {
                    flag = true;
                    window_box_close();
                }
                var sendMsg = new tender();
                sendMsg.init(data);
                flag = false;
            }else {
                return false;
            }
        })
    }
    //数据校验
    function img4validData(){
        var chkArr = [{
            id: jq('.img4-box .element select[name="shen"]')[0],
            className: 'form_error',
            labl: 'em',
            lablClass: 'ico_error',
            info: [{
                reg: [0],
                tip: '请选择所在地'
            }]
        },{
            id: jq('.img4-box .element select[name="city"]')[0],
            parentTip: '.con_bj_cal ',
            className: 'form_error',
            labl: 'em',
            lablClass: 'ico_error',
            info: [{
                reg: [0],
                tip: '请选择所在地'
            }]
        },{
            id: jq('.img4-box  .text_wrap :input[name="square"]')[0],
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
            id: jq('.img4-box  .text_wrap :input[name="phone"]')[0],
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

        if (jq('#img4phone').length > 0) {
            chkArr.push(phoneRule);
        };
        return simplifyCheck2(chkArr);
    }
    //数据校验
    function img12validData(){
        var chkArr = [{
            id: jq('.img12-box .element select[name="shen"]')[0],
            className: 'form_error',
            labl: 'em',
            lablClass: 'ico_error',
            info: [{
                reg: [0],
                tip: '请选择所在地'
            }]
        },{
            id: jq('.img12-box .element select[name="city"]')[0],
            parentTip: '.con_bj_cal ',
            className: 'form_error',
            labl: 'em',
            lablClass: 'ico_error',
            info: [{
                reg: [0],
                tip: '请选择所在地'
            }]
        },{
            id: jq('.img12-box .element input[name="chenghu"]')[0],
            className: 'form_error',
            labl: 'em',
            lablClass: 'ico_error',
            info: [{
                reg: [0],
                tip: '称呼不能为空'
            }]
        }];
        var phoneRule = {
            id: jq('.img12-box  .text_wrap :input[name="phone"]')[0],
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

        if (jq('#img12phone').length > 0) {
            chkArr.push(phoneRule);
        };
        return simplifyCheck2(chkArr);
    }
    //根据面积修改默认房屋类型
    function corresponding_square(square,this_obj){
        jq('#shi,#ting,#chu,#wei,#yangtai').find('option').attr('selected',false);
        if(square < 60){
            jq('#shi').find('option').eq(0).attr('selected',true);
            jq('#ting').find('option').eq(0).attr('selected',true);
            jq('#chu').find('option').eq(0).attr('selected',true);
            jq('#wei').find('option').eq(0).attr('selected',true);
            jq('#yangtai').find('option').eq(0).attr('selected',true);
        }else if(square >= 60 && square < 90){
            jq('#shi').find('option').eq(1).attr('selected',true);
            jq('#ting').find('option').eq(0).attr('selected',true);
            jq('#chu').find('option').eq(0).attr('selected',true);
            jq('#wei').find('option').eq(0).attr('selected',true);
            jq('#yangtai').find('option').eq(0).attr('selected',true);
        }else if(square >= 90 && square < 150){
            jq('#shi').find('option').eq(2).attr('selected',true);
            jq('#ting').find('option').eq(1).attr('selected',true);
            jq('#chu').find('option').eq(0).attr('selected',true);
            jq('#wei').find('option').eq(1).attr('selected',true);
            jq('#yangtai').find('option').eq(0).attr('selected',true);
        }else if(square>=150){
            jq('#shi').find('option').eq(3).attr('selected',true);
            jq('#ting').find('option').eq(1).attr('selected',true);
            jq('#chu').find('option').eq(0).attr('selected',true);
            jq('#wei').find('option').eq(1).attr('selected',true);
            jq('#yangtai').find('option').eq(1).attr('selected',true);
        }else {
            jq('#shi').find('option').eq(0).attr('selected',true);
            jq('#ting').find('option').eq(0).attr('selected',true);
            jq('#chu').find('option').eq(0).attr('selected',true);
            jq('#wei').find('option').eq(0).attr('selected',true);
            jq('#yangtai').find('option').eq(0).attr('selected',true);
        }
    }
    //表单获取数据
    function formToJSON(formEle) {
        var data = formEle.serializeArray();
        var dataObj = {};
        for (var i in data) {
            dataObj[data[i].name] = data[i].value;
        }
        return dataObj;
    }
});
//END 效果图添加在线报价弹窗 2015-8-12
function checkInput() {//临时
    jq('.fq_text[name="yourname"]').blur(function () {
        var str = "";
        var parentSpan = jq(this).parent().find('span.window_box_error');
        if (jq(this).val() == "" && parentSpan.length == 0) {
            str += '<span class="window_box_siyinError window_box_error"><em></em>称呼不能为空</span>';
            jq(this).css('border-color', "#ff6767");
            jq(this).parent().css("height", "auto");
            jq(this).after(str);
        } else if (jq(this).val() != "") {
            jq(this).parent().find('span.window_box_error').remove();
            jq(this).css('border-color', "#ccc");
        }
    })
    jq('.fq_text[name="yourname"]').focus(function () {
        jq(this).css('border-color', "#ccc");
        jq(this).parent().find('span.window_box_error').remove();
    });
    jq('.fq_text[name="youriphone"]').blur(function () {
        var str = "";
        var reg = /^[1][34578]\d{9}$/;
        var parentSpan = jq(this).parent().find('span.window_box_error'),
            phoneValue = jq(this).val();
        if (phoneValue == "" && parentSpan.length == 0) {
            str += '<span class="window_box_siyinError window_box_error"><em></em>手机号码不可以为空</span>';
            jq(this).css('border-color', "#ff6767");
            jq(this).parent().css("height", "auto");
            jq(this).after(str);
        } else if (phoneValue != "" && !reg.test(phoneValue)) {
            str += '<span class="window_box_siyinError window_box_error"><em></em>请填写正确的手机号码</span>';
            jq(this).css('border-color', "#ff6767");
            jq(this).parent().css("height", "auto");
            jq(this).after(str);
        } else {
            jq(this).css('border-color', "#ccc");
            jq(this).parent().find('span.window_box_error').remove();
        }
    });
    jq('.fq_text[name="youriphone"]').focus(function () {
        jq(this).css('border-color', "#ccc");
        jq(this).parent().find('span.window_box_error').remove();
    });
    jq('#User_City').focus(function () {
            jq(this).parent().find('span.window_box_error').remove();
        }
    );
    //发送验证码 不能为空
    jq('.fq_btn').bind('click', function () {
        //判读此时是否为未勾选条款(未勾选 则不能点击)
        if (jq(".neworder-submit").hasClass('btn_login_no')) {
                return false;
        };
        var ptag = jq(this).attr('data-ptag');
        try{
            _hmt && _hmt.push(['_trackEvent', 'zb', 'submit', ptag]);
        }catch(e){

        }
        var str = "";
        var reg = /^[1][34578]\d{9}$/;
        var parentSpan = jq('.fq_text[name="youriphone"]').parent().find('span.window_box_error');
        var phone = jq('.fq_text[name="youriphone"]').val();
        var name = jq('.fq_text[name="yourname"]').val();
        var city = jq('#User_City').val();
        if (city == undefined) {
            city = jq('#User_City1').val();
        }
        var shen = jq('#User_Shen').val();
        if (
            shen == undefined) {
            shen = jq('#User_Shen1').val();
        }

        //前端验证数据不能为空
        if (name == "" && parentSpan.length == 0) {
            if (jq(".neworder-submit").hasClass('btn_login_no')) {
                return false;
            };
            str += '<span class="window_box_siyinError window_box_error"><em></em>称呼不能为空</span>';
            jq('.fq_text[name="yourname"]').css('border-color', "#ff6767");
            jq('.fq_text[name="yourname"]').parent().css("height", "auto");
            if (jq('.fq_text[name="yourname"]').next().length == 0) {
                jq('.fq_text[name="yourname"]').after(str);
            }
            return false;
        } else if (phone == '' || !reg.test(phone)) {
            str += '<span class="window_box_siyinError window_box_error"><em></em>请填写正确的手机号码</span>';
            jq('.fq_text[name="youriphone"]').css('border-color', "#ff6767");
            jq('.fq_text[name="youriphone"]').parent().css("height", "auto");
            if (jq('.fq_text[name="youriphone"]').next().length == 0) {
                jq('.fq_text[name="youriphone"]').after(str);
            }
            return false;
        }
        else if (city == '') {
            str += '<span class="window_box_siyinError window_box_error"><em></em>请选择服务城市</span>';
            if (jq('.freeQuote_box_content ul li').eq(2).find('.window_box_error').length == 0) {
                jq('.freeQuote_box_content ul li').eq(2).css("height", "auto").append(str);
            }
            return false;
        }
        else {
            var sendData ={};
            sendData.id = jq("#show_img").attr('oldaid');
            sendData.id = sendData.id ? sendData.id : (sendData.id + 2000000000);

            //加密
            var encryptData = rsaEncryptNameAndPhone({
                phoneObj: jq('.fq_text[name="youriphone"]'),
                chenhuObj: jq('.fq_text[name="yourname"]')
            }, '', '22',null,true);
            for(var i in encryptData) {
                sendData[i] = encryptData[i];
            }
            sendData.chenghu = name;
            sendData.phone = phone;
            sendData.pos = "outindex";
            sendData.backsuccess = 1;
            sendData.shen = shen;
            sendData.ptag = ptag;
            sendData.city = city;
            sendData.sourceid = 21;
            sendData.s_sourceid = 56;
            sendData.s = Math.random(5);
            sendData.modeltype = 1;
            sendData.nowstep = 1;
            jq('.fq_text[name="yourname"]').val('');
            jq('.fq_text[name="youriphone"]').val('');
            var xgtStart = new tender();
            xgtStart.init(sendData);
            //var _data = 'pos=outindex' + '&backsuccess=1&id=' + id + '&User_Shen=' + shen + '&ptag=' + ptag + '&User_City=' + city + '&sourceid=21&s_sourceid=56&s=' + Math.random(5) + encryptData;
            // insertScript('sInsertScript_userdata',href);

            //jq.ajax({
            //    type: "POST",
            //    url: "http://xiaoguotu.to8to.com/getuserdata.php",
            //    data: _data,
            //    success: function (result) {
            //        if (typeof(JSON) == "undefined") {
            //            var res = eval("(" + result + ")")
            //        } else {
            //            var res = JSON.parse(result)
            //        }
            //        jq('.window_box').remove();
            //        jq('.translucence_layer').remove();
            //        if (res.status == 1) {
            //
            //            if (!res.tmpYid) {
            //                overFive();
            //                yuyue_apply_agin = 0;
            //                return;
            //
            //            }
            //            window_box_close();
            //            //更改部分，完善资料弹窗 2015-3-12 by windy
            //            /*var successStr = zb_first_pop(weixin_code,res.tmpYid);
            //             jq('.window_box').windowBox({
            //             width:560,
            //             title:"提示",
            //             wbcStr:successStr,
            //             closeFn:'stop_code_status'
            //             });*/
            //            indexSubZbStepOneXGT(res, weixin_code);
            //            //End Modify
            //            //zb_getwxstatus(start_qrcode_id,res.tmpYid);
            //            return false;
            //        }
            //        else if (res.status == 5) {
            //            window_box_close();
            //            indexYYFail(res.cityname);
            //            return false;
            //        }
            //        else {
            //            var cityname = encodeURI(res.cityname);
            //            var tyid = encodeURI(res.tmpid);
            //            showPopWin("http://www.to8to.com/zb/frame_global.php?msg=" + cityname + "&tyid=" + tyid, 456, 254, null, true);
            //        }
            //
            //    }
            //});
            /*
             if (yuyue_apply_agin > 0) {
             return false;
             } else {
             yuyue_apply_agin++;
             }
             */
 }
})
;

}
;

var scanNum = 0,
    getwxcodestatus = 0,
    user_time = 0,
    weixin_url = 'http://www.to8to.com/api/weixin/run.php',
    collectionImageId = 0;

//获取微信扫码状态
function getwxstatus(qrcode_id) {
    jq.ajax({
        async: true,
        type: "GET",
        dataType: 'jsonp',
        url: weixin_url,
        data: {action: 'getScanState', cookie_id: 'test', qrcode_id: qrcode_id},
        timeout: 15000,     //ajax请求超时时间15秒
        success: function (data, textStatus) {
            if (data.code == "0") {
                jq(".xgt_login_box #login_nomal").hide();
                jq(".xgt_login_box .wechat_login_success").show();
                jq(".xgt_login_box #login_error").hide();
                getwxuser(qrcode_id);
            }
            if (data.code == '405') {
                getwxcodestatus = getwxcodestatus + 1;
                if (getwxcodestatus > 19) {
                    jq(".xgt_login_box #login_nomal").hide();
                    jq(".xgt_login_box .wechat_login_success").hide();
                    jq(".xgt_login_box #login_error").show();
                }
                else {
                    getwxstatus(qrcode_id);
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            getwxcodestatus = getwxcodestatus + 1;
            if (getwxcodestatus > 19) {
                jq(".xgt_login_box .wechat_login_success").hide();
                jq(".xgt_login_box #login_error").show();
                jq('.xgt_login_box #login_nomal').hide();
            }
            else {
                getwxstatus(qrcode_id);
            }
        }
    });

}

function getwxuser(qrcode_id) {
    jq.ajax({
        async: true,
        type: "GET",
        dataType: 'jsonp',
        url: weixin_url,
        data: {action: 'getLoginState', cookie_id: 'test', qrcode_id: qrcode_id},
        timeout: 15000,     //ajax请求超时时间30秒
        success: function (res) {
            if (res.code == "405") {
                if (user_time > 7) {
                    jq(".xgt_login_box .wechat_login_success").hide();
                    jq(".xgt_login_box #login_error").show();
                }
                else {
                    user_time = user_time + 1;
                    getwxuser(qrcode_id);
                }
            }
            if (res.code == "0") {
                var referer = location.href;
                setCookie('to8to_pop_url', encodeURIComponent(location.href), (5 * 60 * 1000));
                var headerTo = 'http://www.to8to.com/loginfromweixin/callback.php?referer=' + encodeURIComponent(referer) + '&user_name=' + encodeURI(res.user.nickname) + '&open_id=' + res.user.openid + '&qrcode_id=' + res.user.qid + '&header_url=' + res.user.pic_header_url + '&unionID=' + res.user.unionID;
                window.location.href = headerTo;
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            if (user_time > 7) {
                jq(".xgt_login_box .wechat_login_success").hide();
                jq(".xgt_login_box #login_error").show();
            }
            else {
                user_time = user_time + 1;
                getwxuser(qrcode_id);
            }
        }
    });

}

function showhelp() {
    jq('.login_box_wechatqrcode').hide();
    jq("#xgt_wechat_help").show();
}

function hidehelp() {
    jq('.login_box_wechatqrcode').show();
    jq("#xgt_wechat_help").hide();
}

function toLogin() {
    window_box_close();
    showPopWin('http://www.to8to.com/pop_login.php', 500, 426, null, false);
}

function toReg() {
    window_box_close();
    showPopWin('http://www.to8to.com/reg/reg_new.php?act=pop', 500, 500, null, false);
}

function createWechatUrl() {
    // 请求二维码的进度动画
    //jq('.xgt_login_box .qrcodeimg').attr('src', 'http://img.to8to.com/decorate_gallery/images/gif/loading.gif').addClass('qrcode_loading');
    jq('.xgt_login_box .qrcodeimg').attr('src', 'http://img.to8to.com/to8to_img/xgt/collectIMG.png').removeClass('qrcode_loading');
    var data = collectionImageId > 0 ? 'imgid=' + collectionImageId : 'xgt_qrcode';
    jq.ajax({
        async: true,
        type: "GET",
        dataType: 'jsonp',
        url: weixin_url,
        data: {action: 'createQrcode', cookie_id: 'xgt_qrcode', data: data, type: 6},
        success: function (res) {
            if (res.code == 0) {
                var _img = new Image();
                _img.onload = function () {
                    // 原为res.url
                    jq('.xgt_login_box .qrcodeimg').attr('src','http://img.to8to.com/to8to_img/xgt/collectIMG.png').removeClass('qrcode_loading');
                }
                _img.src = res.url;

                qrcodeSession(res.qrcode_id);
                getwxcodestatus = 0;
                getwxstatus(res.qrcode_id);
            }
        }
    });

    jq(".xgt_login_box .wechat_login_success").hide();
    jq(".xgt_login_box #login_error").hide();
    jq(".xgt_login_box #login_nomal").show();
}

//将微信qrcode_id存入session加密
function qrcodeSession(qrcode_id) {
    jq.ajax({
        type: "get",
        dataType: 'jsonp',
        url: "http://www.to8to.com/new_login.php",
        data: {action: 'addQrcodeSession', qrcode_id: qrcode_id}
    });
}

var xgtWechatLoginBox = '<div class="xgt_login_box" id="xgt_login_box">' +
    '<div class="login_box_title">微信扫一扫 立即收藏效果图</div>' +
    '<div class="login_box_wechatqrcode">' +
    '<img width="182" height="182" class="qrcode_loading qrcodeimg" src=""></div>' +
    '<div id="xgt_wechat_help" class="xgt_wechat_help"><img src="http://img.to8to.com/decorate_gallery/images/confirm/wechat_help.jpg?v=1415036769"></div>' +
    '<div class="login_box_tips">' +
    '<div class="wechat_fail" id="login_error" style="display: none;">' +
    '<b></b><strong>二维码失效</strong><span>请点击<a href="javascript:createWechatUrl()">刷新二维码</a></span>' +
    '</div><div class="wechat_login_success" id="login_success" style="display: none;"><b></b><strong>扫描成功</strong><span>请在手机上确认登录</span></div></div>' +
    '<span id="login_nomal" class="weixin_status"><a href="javascript:void(0)" onmouseover="javascript:showhelp()" onmouseout="javascript:hidehelp()" class="wh_link">使用帮助</a>' +
    '</span></div><div class="buttom_tips"><a href="javascript:;" onclick="toLogin()" class="account_btn">土巴兔账号登录</a><span>|</span><a onclick="toReg()" href="javascript:;" class="reg_btn">免费注册</a></div>';

function checkLogin(param) {
    var isXGT = location.host == 'xiaoguotu.to8to.com';
    param = param || 'yz';
    var p_arr = param.split(','),
        _zs_sjs = 0,
        ind = getCookie('to8to_ind');
    // 判断是否是装修公司设计师
    if (in_array('zs_sjs', p_arr)) {
        if (ind == 'zs' && getCookie('to8to_fcm_tid') > 0) {
            _zs_sjs = 1;
        }
    }
    if (!getCookie('auth', true)) {

        if (isXGT) {
            jq('.window_box').windowBox({
                width: 627,    //弹框宽度
                title: '提示', //标题
                wbcStr: xgtWechatLoginBox,
                cancleBtn: false,    //是否显示取消按钮
                confirmBtn: false,  // 是否显示确认按钮
                callback: function () {

                }
            });
            createWechatUrl();

            return false;
        }

        showPopWin('http://www.to8to.com/pop_login.php', 500, 426, null, false);
        return false;
    } else if (in_array(ind, p_arr) == false && _zs_sjs == 0) {
        var _val = '';
        if (in_array('yz', p_arr)) {
            _val = '业主';
        }
        if (in_array('sjs', p_arr)) {
            _val = _val == '' ? '设计师' : _val + ',' + '设计师';
        }
        if (in_array('zs', p_arr)) {
            _val = _val == '' ? '装修公司' : _val + ',' + '装修公司';
        }
        if (in_array('zs_sjs', p_arr)) {
            _val = _val == '' ? '装修公司设计师' : _val + ',' + '装修公司设计师';
        }
        if (in_array('sj', p_arr)) {
            _val = _val == '' ? '商家' : _val + ',' + '商家';
        }
        jq('.window_box').windowBox({
            width: 450,    //弹框宽度
            height: 185,   //弹框高度
            title: "收藏", //标题
            wbcStr: "<p style='text-align:center;margin-top: 55px;font-size: 14px;'>只有'" + _val + "'身份才能进行此操作</p>",
            cancleBtn: false,    //是否显示取消按钮
            confirmBtn: false  // 是否显示确认按钮
        });
        return false;
        return false;
    }
    return true;
}

/**
 * 检测数组中是否有某个元素
 *
 * @param   string  find    要查的数据
 * @param   array   arr     目标数组
 */
function in_array(find, arr) {
    var ret = false;
    for (var i in arr) {
        if (jq.trim(arr[i]) == find) {
            ret = true;
            break;
        }
    }
    return ret;
}


function getuseraids() {
    var aidsval = [];
    jq.ajax({
        url: '/xgt_get_userinfo.php?' + Math.random(),
        success: function (data) {
            if (data.status == true) {
                jq('#imgids').attr('aids', data.aids);
            } else if (data.status == false) {
                jq('#imgids').attr('aids', 'false');
            }
        },
        dataType: 'json'
    });
    return aidsval;
}
function pop_parent_submit() {
    getuseraids();
}

function saveCollection()//提交保存收藏
{
    var uid = getCookie('to8to_uid');
    var tid = getCookie('to8to_fcm_tid');
    var favname = jq("input[name='new_album_input']").val();
    var xfid = jq("select[name='album_select']").val();
    var oldaid = jq('#show_img').attr("oldaid");
    var caseid = jq('#show_img').attr("oldcid");
    var collectType = jq("input[name='collect_type']:checked").val();
    var albumType = jq("input[name='album_type']:checked").val();
    var url = '';
    var data;
    var cbcStr = '<span class="window_box_collectError window_box_error"><em></em>专辑名不能为空</span>';
    if (favname == "" && albumType == 2) {
        jq('.cbc_text[name="new_album_input"]').css('border-color', "#ff6767");
        jq('.cbc_text[name="new_album_input"]').parent().css("height", "auto");
        if (jq('.cbc_text[name="new_album_input"]').next().length == 0) {
            jq('.cbc_text[name="new_album_input"]').after(cbcStr);
        }
        return false;
    } else {
        jq(this).parent().find('span.window_box_error').remove();
        jq('.cbc_text[name="new_album_input"]').css('border-color', "#ccc");
    }

    if (collectType == 1) {
        //单张收藏
        url = '/collection.php?type=2';
        var width, height, filename, title;
        width = jq('#show_img').attr("width");
        height = jq('#show_img').attr("height");
        title = jq('#show_img').attr("title");
        filename = jq('#show_img').attr("filename");

        if (albumType == 1) {
            //单张收藏至已有文件夹
            data = {
                uid: uid,
                tid: tid,
                xfid: xfid,
                aid: oldaid,
                width: width,
                height: height,
                title: title,
                filename: filename
            };
            //alert("单张收藏至已有文件夹");

        }
        else if (albumType == 2) {
            //单张收藏至新建文件夹
            data = {
                uid: uid,
                tid: tid,
                favname: favname,
                aid: oldaid,
                width: width,
                height: height,
                title: title,
                filename: filename
            };
            //alert("单张收藏至新建文件夹");
        }


    }
    else if (collectType == 2) {
        url = '/collection.php?type=5';
        //套图收藏
        if (albumType == 1) {
            //套图收藏至已有文件夹
            data = {uid: uid, tid: tid, xfid: xfid, caseid: caseid};
            //alert("套图收藏至已有文件夹");

        }
        else if (albumType == 2) {
            //套图收藏至新建文件夹
            data = {uid: uid, tid: tid, favname: favname, caseid: caseid};
            //alert("套图收藏至新建文件夹");
        }

    }

    jq.ajax({
        type: "post",
        url: url,
        data: data,
        success: function (data) {
            data = eval('(' + data + ')');
            if (data.status == 1) {
                var aids = jq('#imgids').attr('aids') + ",";
                //先在aids中检索newaids是否存在，不存在就在后面补上,并写入页面
                if (aids.indexOf(data.aids) == -1) {
                    var newaids = aids.concat(data.aids);
                    //字符串转成数组，进行去重
                    newaids = newaids.split(",");
                    jq.unique(newaids);
                    jq('#imgids').attr('aids', newaids);
                }
                jq(".window_box_container").html("<p style='text-align:center;margin-top: 55px;font-size: 14px;'>您已成功收藏图片！请继续逛逛吧！</p>");
                jq(".window_box").css("height", "185px");
            }
            else if (data.status == 0) {
                jq(".window_box_container").html("<p style='text-align:center;margin-top: 55px;font-size: 14px;'>收藏失败，请稍候再试！</p>");
                jq(".window_box").css("height", "185px");
            }
            else if (data.status == -1) {
                jq(".window_box_container").html("<p style='text-align:center;margin-top: 55px;font-size: 14px;'>您已收藏过该图片，请勿重复收藏！</p>");
                jq(".window_box").css("height", "185px");
            }
            else if (data.status == -2) {
                jq(".window_box_container").html("<p style='text-align:center;margin-top: 55px;font-size: 14px;'>警告：您的文本中含有系统不允许的内容，请返回修改！</p>");
                jq(".window_box").css("height", "185px");
            }
        }
    });

}
uid = getCookie('to8to_uid');
if (uid) {
    getuseraids();
}

jq(function () {
    jq('body').on('click', '.clickstream_tag', function () {
        var _tag = jq(this).attr('data-ptag');
        if (_tag) {
            try {
                clickStream.getCvParams(_tag);
            } catch (e) {
            }
        }
    })

})


/*************************************************************************************/

/*****************************  发送到手机  ************************************/

function sendToPhone(_this) {
    //判断cookie是否存在
    var mg = getXgtCookie("to8to_mg");
    var oldaid = jq(_this).parents("div.item").first().attr("oldaid");
    if (mg) {
        var oldid = 'p' + oldaid;
        var html = "<span class='img' style='height:150px;display:block;background:url(http://img.to8to.com/to8to_img/icon/loading.gif?v=20150113) no-repeat center ;'><img id='xgtweixin_image' style='display: block;margin: 30px auto 0' src='' /></span>";
        jq('.window_box').windowBox({
            width: 480,    //弹框宽度
            height: 298,
            title: '<i class="ico_tip_warn_green_s"></i><label>微信扫一扫，美图随时看</label>',  //标题
            wbcStr: html,  //可编辑内容
            cancleBtn: false,    //是否显示取消按钮
            confirmBtn: false,
            width:480,    //弹框宽度
            height:298,
            title:'<i class="ico_tip_warn_green_s"></i><label>微信扫一扫，美图随时看</label>',  //标题
            wbcStr:html,  //可编辑内容
            cancleBtn:false,    //是否显示取消按钮
            confirmBtn:false
        });
        jq.ajax({
            async: true,
            type: "GET",
            dataType: 'jsonp',
            url: "http://www.to8to.com/api/weixin/run.php", /*这个是获取二维码的接口*/
            data: {action: 'createQrcode', cookie_id: 'test', data: oldid, type: 3},
            success: function (res) {
                if (res.code == 0) {
                    /*这是拿到二维码的之后，页面做出的一个效果*/
                    jq("#xgtweixin_image").attr("src", res.url).attr("height", "174px");
                    setCookie('qrcode_id', res.qrcode_id, 90);
                    clickStream.getCvParams('1_2_2_17');
                    /*下面去不断去刷新获取二维码状态值*/
                    zb_getwxstatu(res.qrcode_id);
                }
                else {
                    alert(res.msg);
                }
            }
        });

    }
    else {
        var str = '<div class="freeQuote_box_content freeOffer_box_content clear">\
						<ul>\
							<li>\
								<span class="fbc_name">手机号码</span>\
								<input type="text" class="fq_text" name="chkPhone">\
							</li>\
							<li>\
								<span class="fbc_name">验证码</span>\
								<input type="text" class="fq_text2" name="chkYzm">\
	                        	<img class="passport img_yzm">\
	            			</li>\
						</ul>\
						<input type="submit" value="立即发送" class="fq_btn phone">\
						<div class="fq_description"><em></em>为了你的利益及我们的口碑，你的隐私将被严格保密。</div>\
					</div>';
        jq('.window_box').windowBox({
            width: 480,    //弹框宽度
            title: '<i class="ico_tip_warn_green_s"></i><label>填写号码，即可把美图装进手机</label>',  //标题
            wbcStr: str,  //可编辑内容
            cancleBtn: false,    //是否显示取消按钮
            confirmBtn: false
        });
        jq('.freeOffer_box_content .passport').click(function () {
            newverifypicMy(this);
        }).trigger('click');
        mytitle = jq(_this).parent().next().children("a").text();
        jq('.freeQuote_box_content .phone').click(function () {
            clickStream.getCvParams("1_2_3_122");
            if (checkPhone()) {
                //验证成功，获取图片路径和手机号码。
                var info = {
                    "phone": jq(".freeOffer_box_content").find(':text[name="chkPhone"]').val(),
                    "verify": jq(".freeOffer_box_content").find(':text[name="chkYzm"]').val(),
                    "title": mytitle,
                    "oldaid": oldaid,
                    "type": picType == 1 ? "p" : "c",
                    "ptag": '1_2_3_122',
                    "modeltype": 5,
                    "nowstep": 1
                };
                //获取效果图发标入口
                var xgtStart = new tender();
                xgtStart.init(info);
                //jq.ajax({
                //    type: "POST",
                //    url: "../sendPhoneMessage.php",
                //    data: info,
                //dataType: "json",
                //    success: function(res) {
                //        //var res = eval("(" + result + ")")
                //        if(res.status==1){
                //            window_box_close();
                //            setXgtCookie("to8to_mg",info.phone,7*24*3600*1000, 'xiaoguotu.to8to.com');
                //            var str = '<div class="div_two">\
                //                   <div class="two_div" style=" padding-left:50px;">\
                //                         <p class="p1">恭喜您发送成功 !</p>\
                //                       <p class="p2">短信已发送，土巴兔-互联网装修领导者，感谢您的使用。</p>\
                //                   </div>\
                //            </div>'
                //            jq('.window_box').windowBox({
                //                width:480,    //弹框宽度
                //                height:220,
                //                title: '', //标题
                //                wbcStr:str,  //可编辑内容
                //                cancleBtn:false,    //是否显示取消按钮
                //                confirmBtn:false
                //            });
                //        }else if(res.status==0){
                //            window_box_close();
                //            var str = '<div class="freeQuote_box_content freeOffer_box_content clear">\
                //                 <div class="div_one">\
                //                    <div class="one_div">\
                //                        <p class="p2">'+res.msg+'</p>\
                //                    </div>\
                //                </div></div> '
                //            jq('.window_box').windowBox({
                //                width:480,    //弹框宽度
                //                height:150,
                //                title:' <p class="p1">发送失败 !</p>',  //标题
                //                wbcStr:str,  //可编辑内容
                //                cancleBtn:false,    //是否显示取消按钮
                //                confirmBtn:false
                //            });
                //        }else{
                //            alert("验证码错误!");
                //            jq(".freeOffer_box_content").find(':text[name="chkYzm"]').focus();
                //        }
                //    }
                //})
            }
        });
    }

}
function zb_getwxstatu(zb_qrcode_id) {
    var _this = this;
    _this.timer2 = setTimeout(function () {
        zb_getwxstatu(zb_qrcode_id);
    }, 10000);
    xgtstatus_request = jq.ajax({
        async: true,
        type: "GET",
        dataType: 'jsonp',
        url: "http://www.to8to.com/api/weixin/run.php",
        /*下面是通过qrcode_id 去查库获取二维码的状态值*/
        data: {action: 'getScanState', cookie_id: 'test', qrcode_id: zb_qrcode_id},
        timeout: 15000,     //ajax请求超时时间15秒
        success: function (res, textStatus) {

            if (res.code == "405") {
                if (xgtstatus_num < 20)//没有获取到二维码允许最大次数请求20次
                {
                    xgtstatus_num++;
                }
                else {
                    clearTimeout(_this.timer2);
                    _this.timer2 = '';
                    xgtstatus_num = 0;
                }
            }
            if (res.code == "0") {
                /*这里是二维码被扫，扫面之后二维码失效，显示的内容*/
                jq("#code_message").hide();
                jq("#status_success").show();

                var width, height, filename, title, oldaid, cid = 0;
                width = jq('#show_img').attr("width");
                height = jq('#show_img').attr("height");
                title = jq('#show_img').attr("title");
                filename = jq('#show_img').attr("filename");
                oldaid = jq('#show_img').attr("oldaid");
                clearTimeout(_this.timer2);
                _this.timer2 = '';
                jq('.wechatapp .boximg').hide();
                xgtstatus_num = 0;

                jq.ajax({
                    async: true,
                    type: "GET",
                    dataType: 'jsonp',
                    url: "http://m.to8to.com/Collect/InsertImage/",
                    data: {
                        openid: res.user.openid,
                        unionID: res.user.unionID,
                        qrcode_id: zb_qrcode_id,
                        aid: oldaid,
                        filename: filename,
                        title: title,
                        width: width,
                        height: height,
                        cid: cid
                    },
                    /*data:{weixin_act:'weixin_banding',yid:yid,open_id:res.user.openid,unionID:res.user.unionID,header_url:res.user.pic_header_url,user_name:res.user.nickname,qrcode_id:zb_qrcode_id}, */
                    success: function (data) {
                        if (data.code == "0") {
                            alert(data.msg);
                        }
                    }
                });
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            if (textStatus == "timeout") {
                if (status_num < 200)//一分钟
                {
                    xgtstatus_num++;
                }
            }
        }
    });
}
function checkPhone() {
    var wrapStep2 = jq('.freeOffer_box_content'),
        phone = wrapStep2.find(':text[name="chkPhone"]'),
        yzm = wrapStep2.find(':text[name="chkYzm"]');

    var chkArr = [{
        id: phone[0],
        parentTip: wrapStep2[0],
        info: [{
            reg: [0],
            tip: '请输入手机号码'
        }, {
            reg: [/^1{1}[34578]{1}\d{9}$/],
            tip: '请输入正确的手机号码'
        }]
    }, {
        id: yzm[0],
        parentTip: wrapStep2[0],
        info: [{
            reg: [0],
            tip: '请输入验证码'
        }]
    }];

    return simplifyCheck2(chkArr);
}

/************************************************************************************/
function setXgtCookie(name, value, expire) {
    if (!expire) {
        expire = 5000;
    }
    var expiry = new Date();
    expiry.setTime(expiry.getTime() + expire);
    document.cookie = name + '=' + value + ';expires=' + expiry.toGMTString() + ';path=/;';
}
function getXgtCookie(name) {
    var r = new RegExp("(\\b)" + name + "=([^;]*)(;|$)");
    var m = document.cookie.match(r);
    var res = !m ? "" : decodeURIComponent(m[2]);
    var result = stripscript(res);
    return result;

};
var xfkjIframe = (function ($) {

    function createIframe() {
        var iframe = document.createElement('iframe');
        iframe.src = 'http://www.hhh.com.tw/';
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.border = 'none';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
    }

    return function () {
        createIframe();
    }

})(jQuery);
jq(document).ready(function () {
    //uv统计曝光（只统计一次）
    jq('.threeDshare').on('mouseover', function () {
        if (getCookie('3D_xgt_statistics') == 'true') {
            return false;
        }else{
            clickStream.getCvParams('1_2_10_1325');
            setCookie('3D_xgt_statistics','true',365*24*60*60*1000);
        }        
    })
})
