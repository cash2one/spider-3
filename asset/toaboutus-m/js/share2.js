var Base64_2 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(a) {
        var b, c, d, e, f, g, h, i = "",
            j = 0;
        for (a = Base64_2._utf8_encode(a); j < a.length;)
            b = a.charCodeAt(j++), c = a.charCodeAt(j++), d = a.charCodeAt(j++), e = b >> 2, f = (3 & b) << 4 | c >> 4, g = (15 & c) << 2 | d >> 6, h = 63 & d, isNaN(c) ? g = h = 64 : isNaN(d) && (h = 64), i = i + this._keyStr.charAt(e) + this._keyStr.charAt(f) + this._keyStr.charAt(g) + this._keyStr.charAt(h);
        return i
    },
    decode: function(a) {
        var b, c, d, e, f, g, h, i = "",
            j = 0;
        for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); j < a.length;)
            e = this._keyStr.indexOf(a.charAt(j++)), f = this._keyStr.indexOf(a.charAt(j++)), g = this._keyStr.indexOf(a.charAt(j++)), h = this._keyStr.indexOf(a.charAt(j++)), b = e << 2 | f >> 4, c = (15 & f) << 4 | g >> 2, d = (3 & g) << 6 | h, i += String.fromCharCode(b), 64 != g && (i += String.fromCharCode(c)), 64 != h && (i += String.fromCharCode(d));
        return i = Base64_2._utf8_decode(i)
    },
    _utf8_encode: function(a) {
        a = a.replace(/\r\n/g, "\n");
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128))
        }
        return b
    },
    _utf8_decode: function(a) {
        for (var b = "", c = 0, d = c1 = c2 = 0; c < a.length;)
            d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : d > 191 && 224 > d ? (c2 = a.charCodeAt(c + 1), b += String.fromCharCode((31 & d) << 6 | 63 & c2), c += 2) : (c2 = a.charCodeAt(c + 1), c3 = a.charCodeAt(c + 2), b += String.fromCharCode((15 & d) << 12 | (63 & c2) << 6 | 63 & c3), c += 3);
        return b
    }
};
(function() {
    function a(a) {
        function b(a, b) {
            var c, d, e;
            for (d in b)
                e = b[d], c = new RegExp("(" + d + "=)[^&]+", "i"), a.match(c) ? a = a.replace(c, "$1" + e) : a += -1 === a.indexOf("?") ? "?" + d + "=" + e : "&" + d + "=" + e;
            return a
        }

        function c(a, b) {
            var c;
            for (var d in b)
                c = new RegExp(d + "=" + b[d], "g"), a = a.replace(c, "");
            return a
        }

        function f(a, b) {
            var c = document.createElement("script"),
                d = document.getElementsByTagName("body")[0];
            c.setAttribute("src", a), c.onload = c.onreadystatechange = function() {
                this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (b && b(), c.onload = c.onreadystatechange = null, c.parentNode.removeChild(c))
            }, d.appendChild(c)
        }

        function g(a) {
            var b = document.createElement("div");
            b.style.visibility = "hidden", b.innerHTML = '<iframe src="' + a + '" scrolling="no" width="1" height="1"></iframe>', document.body.appendChild(b), setTimeout(function() {
                b && b.parentNode && b.parentNode.removeChild(b)
            }, 5e3)
        }

        a = a || {};
        this.url = a.url || document.location.href || "";
        this.title = a.title || $("title").text() || "";
        this.desc = a.desc || $("meta[name=description]").attr("content") || this.title;
        this.image = a.image || e;
        this.from = a.from || "\u624B\u673A\u571F\u5DF4\u5154\0A";
        this.newsid = a.newsid || "";
        this.sohupassport = a.passport || "";
        this.appList = { sinaweibo: ["kSinaWeibo", "SinaWeibo", 11, "新浪微博"], wechatfriends: ["kWeixin", "WechatFriends", 1, "微信好友"], wechattimeline: ["kWeixinFriend", "WechatTimeline", "8", "微信朋友圈"], qq: ["kQQ", "QQ", "4", "QQ好友"], qzone: ["kQZone", "QZone", "3", "QQ空间"] }, this.successCallback = a.successCallback || "";
        this.failCallback = a.failCallback || "";

        var h = { share: a.shareOnceCode || "000022_share_", shareback: a.sharebackOnceCode || "000022_shareback_" },
            i = navigator.userAgent.toLowerCase();
        this.device = { os: { version: 0, isiOS: i.indexOf("iphone") > -1 || i.indexOf("ipad") > -1 || i.indexOf("ios") > -1, isAndroid: i.indexOf("android") > -1 || i.indexOf("adr") > -1 || i.indexOf("linux;") > -1 }, browser: { version: 0, isQQ: i.indexOf("mqqbrowser/") > -1, isUC: i.indexOf("ucbrowser/") > -1, isWechat: i.indexOf("micromessenger") > -1, isSamsung: i.indexOf("samsungbrowser/") > -1, isSogou: i.indexOf("sogoumobilebrowser/") > -1, isPinganWifi: i.indexOf("pawifi") > -1 } }, this.getVersion = function(a) {
            var b = a.split(".");
            return parseFloat(b[0] + "." + b[1])
        };
        this.shareWebQzone = function() {
            var a = "http://openmobile.qq.com/api/check2?page=qzshare.html&loginpage=loginindex.html&logintype=qzone",
                b = this.desc.substring(0, 200),
                c = ["title=" + encodeURIComponent(this.title), "imageUrl=" + encodeURIComponent(this.image), "desc=" + encodeURIComponent(b), "summary=" + encodeURIComponent(b), "url=" + this.url, "successUrl=" + this.url, "failUrl=" + this.url, "callbackUrl=" + this.url].join("&");
            window.location.href = a + "&" + c
        };
        this.shareto = function(a) {
            var temp = this.url;

            var d, e = this,
                f = this.device,
                i = this.title,
                j = this.desc,
                k = this.image,
                l = this.from,
                m = this.newsid,
                n = this.failCallback,
                o = Date.now(),
                p = 0;
            if( this.url.indexOf('?') > -1 ){
                if (a == 'wechatfriends') {
                    this.url += '&fenxiang_wxhy' + '&' + Math.random().toString(36).substr(2) + new Date().getTime();
                } else if (a == 'wechattimeline') {
                    this.url += '&fenxiang_wxpyq' + '&' + Math.random().toString(36).substr(2) + new Date().getTime();
                } else if (a == 'qq') {
                    this.url += '&fenxiang_qqhy' + '&' + Math.random().toString(36).substr(2) + new Date().getTime();
                } else if (a == 'qzone') {
                    this.url += '&fenxiang_qqkj' + '&' + Math.random().toString(36).substr(2) + new Date().getTime();
                } else if (a == 'sinaweibo') {
                    this.url += '&fenxiang_xlwb' + '&' + Math.random().toString(36).substr(2) + new Date().getTime();
                }
            }else{
                if (a == 'wechatfriends') {
                    this.url += '?fenxiang_wxhy' + '&' + Math.random().toString(36).substr(2) + new Date().getTime();
                } else if (a == 'wechattimeline') {
                    this.url += '?fenxiang_wxpyq' + '&' + Math.random().toString(36).substr(2) + new Date().getTime();
                } else if (a == 'qq') {
                    this.url += '?fenxiang_qqhy' + '&' + Math.random().toString(36).substr(2) + new Date().getTime();
                } else if (a == 'qzone') {
                    this.url += '?fenxiang_qqkj' + '&' + Math.random().toString(36).substr(2) + new Date().getTime();
                } else if (a == 'sinaweibo') {
                    this.url += '?fenxiang_xlwb' + '&' + Math.random().toString(36).substr(2) + new Date().getTime();
                }
            }
            d = f.browser.isUC ? b(this.url, { _once_: h.shareback + a + "_uc" }) : f.browser.isQQ ? b(this.url, { _once_: h.shareback + a + "_qq" }) : f.browser.isSogou ? b(this.url, { _once_: h.shareback + a + "_sogou" }) : b(this.url, { _once_: h.shareback + a });
            if("qzone" == a){
//                alert('点击qq空间1');
                d = Base64_2.encode(d), k = Base64_2.encode(k), i = Base64_2.encode(i), j = Base64_2.encode(j), l = Base64_2.encode(l);
                var r, s = { android: "mqqapi://share/to_qzone?src_type=app&version=1&file_type=news&req_type=1", ios: "mqqapi://share/to_fri?file_type=news&src_type=app&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A&" },
                    t = Date.now();
                f.os.isAndroid ? f.browser.isUC ? g(b(s.android, { url: d, image_url: k, title: i, description: j, app_name: l })) : window.location.href = b(s.android, { url: d, previewimageUrl: k, title: i, description: j, thirdAppDisplayName: l }) : window.location.href = b(s.ios, { url: d, previewimageUrl: k, title: i, description: j, thirdAppDisplayName: l }), r = setTimeout(function() {
                    var a = Date.now() - t;
                    1100 > a && e.shareWebQzone()
                }, 1e3)
            }else if("qq" == a){
//                alert('点击qq好友1');
                window.location.href = b("mqqapi://share/to_fri?src_type=web&version=1&file_type=news", { share_id: "1101685683", title: Base64_2.encode(i), thirdAppDisplayName: Base64_2.encode("\u624B\u673A\u571F\u5DF4\u5154\0A"), url: Base64_2.encode(d) }), setTimeout(function() {
                    var a = Date.now() - t;
                    1100 > a && alert("\u5206\u4EAB\u5931\u8D25\uFF01\u8BF7\u76F4\u63A5\u590D\u5236\u94FE\u63A5\u5E76\u6253\u5F00QQ\u8FDB\u884C\u5206\u4EAB\uFF01")
                }, 1e3);
            }else if("sinaweibo" == a){
//                alert('点击sina');
                if (f.browser.isUC){
                    f.os.isiOS && "undefined" != typeof ucbrowser ? (a = this.appList[a][0], ucbrowser.web_share(i, i, d, a, "", " @" + l + " ", "")) : "undefined" != typeof ucweb ? (a = this.appList[a][1], ucweb.startRequest("shell.page_share", [i, i + " @" + l + " ", d, a, "", "", ""])) : console.log("UCBrowser native share bypass.");
                }
                else if (f.browser.isQQ) {
                    k = k.replace(/^\/\//, "http://"), a = this.appList[a][2];
                    var u = {url: d,title: i,img_url: k,to_app: a,cus_txt: i + " @\u624b\u673a\u641c\u72d0 "};
                    browser && browser.app && browser.app.share ? browser.app.share(u) : console.log("QQBrowser native share bypass.")
//                } else if (f.browser.isSogou) {
//                    alert('微博且搜狗');
//                    var v = {shareTitle: i,shareContent: j,shareImageUrl: k,shareUrl: d,shareSnapshotTab: "",shareType: null};
//                    "wechatfriends" == a || "wechattimeline" == a ? ("wechatfriends" == a ? v.shareType = 2 : "wechattimeline" == a && (v.shareType = 4), SogouMse && SogouMse.Utility && SogouMse.Utility.shareWithInfo ? SogouMse.Utility.shareWithInfo(v) : console.log("sogouBrowser native share error."), setTimeout(function() {
//                        var a = Date.now() - t;
//                        a < 1100 && alert("\u5206\u4eab\u5931\u8d25\uff01\u8bf7\u76f4\u63a5\u590d\u5236\u94fe\u63a5\u5e76\u6253\u5f00\u5fae\u4fe1\u8fdb\u884c\u5206\u4eab\uff01")
//                    }, 1e3)) : window.location.href = b("http://service.weibo.com/share/share.php?", {title: encodeURIComponent(i),url: encodeURIComponent(d),appkey: "217550396",pic: k,ralateUid: "1934323297",count: "n",size: "middle"})
//                } else if ("wechatfriends" == a || "wechattimeline" == a) {
//                    d = c(d, {_once_: "000022_shareback_" + a}), d = b(d, {shareApp: a}), f.os.isiOS && f.os.version > 8 ? window.location.href = "mttbrowser://url=" + d : g("mttbrowser://url=" + d);
//                    var w = function a() {
//                        o += 1e3, p += 1, p < 3 ? setTimeout(a, 1e3) : Math.abs(o - Date.now()) > 600 || n && "function" == typeof n && alert("\u5206\u4eab\u5931\u8d25\uff01\u8bf7\u76f4\u63a5\u590d\u5236\u94fe\u63a5\u5e76\u6253\u5f00\u5fae\u4fe1\u8fdb\u884c\u5206\u4eab\uff01")
//                    };
//                    setTimeout(w, 1e3)
                } else{
                    "sinaweibo" == a && (window.location.href = b("http://service.weibo.com/share/share.php?", {title: encodeURIComponent(i),url: encodeURIComponent(d),appkey: "217550396",pic: k,ralateUid: "1934323297",count: "n",size: "middle"}));
                }                    
            }else if("wechatfriends" == a || "wechattimeline" == a){
                // alert('点击微信56');
                if (f.browser.isUC){
//                    alert('是UC啊');
                    f.os.isiOS && "undefined" != typeof ucbrowser ? (a = this.appList[a][0], ucbrowser.web_share(i, i, d, a, "", " @" + l + " ", "")) : "undefined" != typeof ucweb ? (a = this.appList[a][1], ucweb.startRequest("shell.page_share", [i, i + " @" + l + " ", d, a, "", "", ""])) : console.log("UCBrowser native share bypass.");
                }
                else if (f.browser.isQQ) {
//                    alert('是QQ啊');
                    k = k.replace(/^\/\//, "http://"), a = this.appList[a][2];
                    var u = {url: d,title: i,img_url: k,to_app: a,cus_txt: i + " @\u624b\u673a\u641c\u72d0 "};
                    browser && browser.app && browser.app.share ? browser.app.share(u) : console.log("QQBrowser native share bypass.")
                } else if (f.browser.isSogou) {
//                    alert('是搜狗啊');
                    var v = {shareTitle: i,shareContent: j,shareImageUrl: k,shareUrl: d,shareSnapshotTab: "",shareType: null};
                    "wechatfriends" == a || "wechattimeline" == a ? ("wechatfriends" == a ? v.shareType = 2 : "wechattimeline" == a && (v.shareType = 4), SogouMse && SogouMse.Utility && SogouMse.Utility.shareWithInfo ? SogouMse.Utility.shareWithInfo(v) : console.log("sogouBrowser native share error."), setTimeout(function() {
                        var a = Date.now() - t;
                        a < 1100 && alert("\u5206\u4eab\u5931\u8d25\uff01\u8bf7\u76f4\u63a5\u590d\u5236\u94fe\u63a5\u5e76\u6253\u5f00\u5fae\u4fe1\u8fdb\u884c\u5206\u4eab\uff01")
                    }, 1e3)) : window.location.href = b("http://service.weibo.com/share/share.php?", {title: encodeURIComponent(i),url: encodeURIComponent(d),appkey: "217550396",pic: k,ralateUid: "1934323297",count: "n",size: "middle"})
                } else{
//                    alert('是其他啊4');
                    $('body').on('touchstart','.share-link-box,.share-load-close,.share-load-btn', function(e){
//                        console.log(e.target);
                        e.preventDefault();
                        $(".share-detail-box,.share-link-box").remove();
                    });
                    this.closedBox=function (obj){
                        $(obj).parents(".share-link-box").remove();
                    }
                    var link_box='',share_box='';
                    link_box='<div class="share-link-box"></div>';
                    share_box='<div class="share-detail-box">\
                                    <div class="share-detail-div">\
                                        <a href="javascript:;" class="share-load-close"></a>\
                                        <div class="load-head">\
                                            <h3>微信分享</h3>\
                                        </div>\
                                        <div class="share-load-con">\
                                            <p class="share-con-title">方式一：</p>\
                                            <p class="share-con-border">点击浏览器底部<i class="share-load-icon1"></i>或<i class="share-load-icon2"></i>分享到微信或朋友圈</p>\
                                            <p><a href="javascript:;" class="share-load-btn">我知道了</a></p>\
                                            <p class="share-con-title">方式二：长按复制下方链接，去粘贴给好友吧：</p>\
                                            <p class="share-con-border"><a href="'+this.url+'">'+this.url+'</a></p>\
                                        </div>\
                                    </div>\
                                </div>';
                    $('body').append(link_box);
                    $('body').append(share_box);
                    "sinaweibo" == a && (window.location.href = b("http://service.weibo.com/share/share.php?", {title: encodeURIComponent(i),url: encodeURIComponent(d),appkey: "217550396",pic: k,ralateUid: "1934323297",count: "n",size: "middle"}));
                }     
            }


            // if (d = f.browser.isUC ? b(this.url, { _once_: h.shareback + a + "_uc" }) : f.browser.isQQ ? b(this.url, { _once_: h.shareback + a + "_qq" }) : f.browser.isSogou ? b(this.url, { _once_: h.shareback + a + "_sogou" }) : b(this.url, { _once_: h.shareback + a }), "sohuwd" == a) {
            //     alert(this.url);
            //     console.log('我可不是随便分享的！');
            // } else if ("qzone" == a) {
            //     d = Base64_2.encode(d), k = Base64_2.encode(k), i = Base64_2.encode(i), j = Base64_2.encode(j), l = Base64_2.encode(l);
            //     var r, s = { android: "mqqapi://share/to_qzone?src_type=app&version=1&file_type=news&req_type=1", ios: "mqqapi://share/to_fri?file_type=news&src_type=app&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A&" },
            //         t = Date.now();
            //     f.os.isAndroid ? f.browser.isUC ? g(b(s.android, { url: d, image_url: k, title: i, description: j, app_name: l })) : window.location.href = b(s.android, { url: d, previewimageUrl: k, title: i, description: j, thirdAppDisplayName: l }) : window.location.href = b(s.ios, { url: d, previewimageUrl: k, title: i, description: j, thirdAppDisplayName: l }), r = setTimeout(function() {
            //         var a = Date.now() - t;
            //         1100 > a && e.shareWebQzone()
            //     }, 1e3)
            // } else if ("qq" == a)
            //     window.location.href = b("mqqapi://share/to_fri?src_type=web&version=1&file_type=news", { share_id: "1101685683", title: Base64_2.encode(i), thirdAppDisplayName: Base64_2.encode("\u624B\u673A\u571F\u5DF4\u5154\0A"), url: Base64_2.encode(d) }), setTimeout(function() {
            //         var a = Date.now() - t;
            //         1100 > a && alert("\u5206\u4EAB\u5931\u8D25\uFF01\u8BF7\u76F4\u63A5\u590D\u5236\u94FE\u63A5\u5E76\u6253\u5F00QQ\u8FDB\u884C\u5206\u4EAB\uFF01")
            //     }, 1e3);
            // else if ("wechatfriends" == a || "wechattimeline" == a || "sinaweibo" == a)
            //     if (f.browser.isUC)
            //         f.os.isiOS && "undefined" != typeof ucbrowser ? (a = this.appList[a][0], ucbrowser.web_share(i, "", d, a, "", " @" + l + " ", "")) : "undefined" != typeof ucweb ? (a = this.appList[a][1], ucweb.startRequest("shell.page_share", [i, "", d, a, "", "", ""])) : console.log("UCBrowser native share bypass.");
            //     else if (f.browser.isQQ) {
            //     a = this.appList[a][2];
            //     var u = { url: d, title: i, img_url: k, to_app: a, cus_txt: "@手机土巴兔" };
            //     browser && browser.app && browser.app.share ? browser.app.share(u) : console.log("QQBrowser native share bypass.");
            // } else if (f.browser.isSogou) {
            //     var v = { shareTitle: i, shareContent: j, shareImageUrl: '', shareUrl: d, shareSnapshotTab: "", shareType: null };
            //     "wechatfriends" == a || "wechattimeline" == a ? ("wechatfriends" == a ? v.shareType = 2 : "wechattimeline" == a && (v.shareType = 4), SogouMse && SogouMse.Utility && SogouMse.Utility.shareWithInfo ? SogouMse.Utility.shareWithInfo(v) : console.log("sogouBrowser native share error."), setTimeout(function() {
            //         var a = Date.now() - t;
            //         1100 > a && alert("\u5206\u4EAB\u5931\u8D25\uFF01\u8BF7\u76F4\u63A5\u590D\u5236\u94FE\u63A5\u5E76\u6253\u5F00\u5FAE\u4FE1\u8FDB\u884C\u5206\u4EAB\uFF01")
            //     }, 1e3)) : window.location.href = b("http://service.weibo.com/share/share.php?", { title: encodeURIComponent(i), url: encodeURIComponent(d), appkey: "", pic: k, ralateUid: "", count: "n", size: "middle" })
            // } else if ("wechatfriends" == a || "wechattimeline" == a) {
            //     d = c(d, { _once_: "000022_shareback_" + a }), d = b(d, { shareApp: a }), f.os.isiOS && f.os.version > 8 ? window.location.href = "mttbrowser://url=" + d : g("mttbrowser://url=" + d);
            //     var w = function x() {
            //         o += 1e3, p += 1, 3 > p ? setTimeout(x, 1e3) : Math.abs(o - Date.now()) > 600 || n && "function" == typeof n && alert("\u5206\u4EAB\u5931\u8D25\uFF01\u8BF7\u76F4\u63A5\u590D\u5236\u94FE\u63A5\u5E76\u6253\u5F00\u5FAE\u4FE1\u8FDB\u884C\u5206\u4EAB\uFF01")
            //     };
            //     setTimeout(w, 1e3)
            // } else {
            //     "sinaweibo" == a && (window.location.href = b("http://service.weibo.com/share/share.php?", { title: encodeURIComponent(i), url: encodeURIComponent(d), appkey: "", pic: k, ralateUid: "", count: "n", size: "middle" }));
            // };
            this.url = temp;
        };
        this.pinganWifiShareTo = function(a) {
            var c = b(this.url, { _once_: h.shareback + a + "_pinganwifi" });
            if (console.log("inter pingan wifi"), "sohuwd" === a) {
                "undefined" == typeof gallery ? 3 : 4;
                window.location.href = b("http://h5.t.sohu.com/feed/share", { url: c, id: this.newsid, type: this.type, title: this.title, pic: this.image, passport: this.sohupassport })
            } else
                window.location.href = b("pawifishare://", { method: "sohuShare", shareType: a, title: Base64_2.encode(this.title || ""), url: Base64_2.encode(c), subtitle: Base64_2.encode(this.desc || ""), imgurl: Base64_2.encode(this.image || "") })
        };
        var j = this;
        this.shareWechatByQQBrowser = function() {
            var a = window.location.href.match(/shareApp=(\w+)/i);
            if (a) {
                var b = a[1];
                $.isFunction(history.replaceState) && (history.replaceState(null, document.title, location.href.replace(/shareApp=wechatfriends/g, "")), history.replaceState(null, document.title, location.href.replace(/shareApp=wechattimeline/g, ""))), j.shareto(b)
            }
        };
        this.init = function() {
            var a = this.device;
            a.browser.isQQ ? f("http://jsapi.qq.com/get?api=app.share", function() {
                j.shareWechatByQQBrowser()
            }) : a.browser.isUC && (a.browser.version = this.getVersion(i.split("ucbrowser/")[1])), a.os.isiOS && (a.os.version = parseInt(i.match(/\s*os\s*\d/gi)[0].split(" ")[2], 10))
        };

        this.init();
        for (var k = $(".sns"), l = 0; l < k.length; l++)
            $(k[l]).on("click", function(a) {
                var b = $(this).attr("data-app");
                if (j.device.browser.isUC) {

                    var c = d.shareMaskView || {
                        ucHide: function() {}
                    };
                    c.ucHide(a), setTimeout(function() {
                        j.shareto(b)
                    }, 500)
                } else {
                    j.device.browser.isPinganWifi ? j.pinganWifiShareTo(b) : j.shareto(b)
                }
            });
        return this;
    }

    var b = window.t8t || (window.t8t = {}),
        c = b.Modules || (b.Modules = {}),
        d = b.Views || (b.Views = {}),
        e = "http://static.to8to.com/img/wap/ad_app_logo.png";
    "function" == typeof define && (define.amd || seajs) ? define("share", [""], function(a) {
        return a;
    }) : "undefined" != typeof module && module.exports && (module.exports = a), c.share = a;
})();
var shareObj = t8t.Modules.share();
