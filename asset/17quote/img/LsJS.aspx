var LR_lxurl = 'http://dkt.zoosnet.net/';
var LR_ssl = 0;
var LR_sysurl = 'http://dkt.zoosnet.net/';
var LR_websiteid = 'DKT85079174';
var LiveReceptionCode_isonline = 1;
var LR_6ce00='948BB5CAC69940759603ABADCA2F69F6';LR_6ce00=((4+1).toString()+LR_6ce00+(4*1).toString());var LR_isMobile = 1;
var LR_lng = 'en';
var LR_e816d=LR_6ce00.replace(/1/g,'3').replace(/0/g,'2');var LR_siteid = '85079174';
var LR_627d9=LR_e816d.replace(/1/g,'3').replace(/0/g,'2');if(typeof(LR_showfloat)=='undefined')var LR_showfloat = 0;
var LR_Tick=new Date().getTime().toString()+parseInt(Math.random()*499999999+Math.random()*400000000+100000000).toString();
var LR_imgurl = 'http://dkt.zoosnet.net/';
LR_627d9=((5+4).toString()+LR_627d9+(5*4).toString());var LR_LCBO=LR_627d9.replace(/5/g,'6').replace(/7/g,'1');if(typeof(LR_cid) == 'undefined')
{
	var _lr_helpalt_on=unescape("");
	var _lr_helpsrc_on=unescape("js%2fm_blue%2f1.gif");
	var _lr_helpalt_of=unescape("");
	var _lr_helpsrc_of=unescape("js%2fm_blue%2f1.gif");
	var _lr_closesrc0='7.gif';
	var _lr_closesrc1='spacer.gif';
	var _lr_toright=1;
	var _lr_tobottom=1;
	var _lr_left=0;
	var _lr_top=250;
	var _lr_issupport_track= LiveReceptionCode_isonline;
	LR_hasInstall=0;
	var _lr_invitetitle=unescape("");
	var _lr_invitestring='';
	var _lr_invite_interval=0;
	var offline_invite_hidden=1;
	if('1'=='1')LR_showfloat=0;
	var LR_invite_hide_float=1;
	var LR_above_flash=0;
	var LR_UserInviteDiv=null;
	var LR_hidden_region='';
	var LR_repeatinvite=1;
	var LR_defineregion=0;
	var LR_invitesearchkey=0;
	var LR_invitestring1_auto=unescape("");
	var LR_auto_pagetitle=0;
	var LR_issupport_feydj=0;
	var LR_chated_no_invite=0;
	var LR_userurl0=0;
	var LR_invite_display_kind=0;
	var LR_fade_invite=0;
	var LR_confirm_closechat=unescape("You are in a online chat%2c are you sure to end this conversation%3f");
	var _lr_mobileinviteimgsrc=unescape("js%2fm_blue%2f2.gif");
	var _lr_minipath=LR_imgurl + 'LR/mini_blue/';
	var LR_pm001=1;
	var _lr_mfloat_toright=1;
	var _lr_mfloat_tobottom=1;
	var _lr_mfloat_imgleft=0;
	var _lr_mfloat_imgtop=0;
	var LR_pm002=0;
	var LR_pm003=0;
	var LR_pm004=1;
	var LR_pm006='#00a6f1';
	if(typeof(LR_showminiDivtimeout)=='undefined')var LR_showminiDivtimeout=2;
	var LR_pm007=0;
	var LR_pm008=0;
	var LR_pm009=1;
	var LR_pm010=0;
	var LR_pm011=0;
	var LR_pm012=30;
	var LR_pm005='90';
	function minichathtml() {return '<div style="width:100%; height:100%;display:block;" id="LRMINIWIN"><iframe id="LR_miniframe" name="LR_miniframe" width="100%" height="100%" frameborder="0" scrolling="No" allowtransparency="true" src="about:blank"></iframe></div>';}
function LR_SetCookie(name,value,minutes)
{
	if (name.indexOf(LR_websiteid)==-1){name='N'+LR_websiteid+name;}
	var exp  = new Date();
	exp.setTime(exp.getTime() + minutes*60*1000);
	document.cookie = name + '='+ escape (value) + ';'+getRDomain()+'path=/;expires=' + exp.toGMTString();
}
function LR_getCookie(name)
{
	if (name.indexOf(LR_websiteid)==-1){
	var arr = document.cookie.match(new RegExp('(^| )'+'N'+LR_websiteid+name+'=([^;]*)(;|$)'));
	if(arr != null) return unescape(arr[2]);
	}
	var arr = document.cookie.match(new RegExp('(^| )'+name+'=([^;]*)(;|$)'));
	if(arr != null) return unescape(arr[2]);
	if(name=='LiveWS'+LR_websiteid)
	{
		LR_SetCookie(name,LR_Tick,2628000);
		return LR_Tick;
	}
	if(name=='LiveWS'+LR_websiteid+'sessionid')
	{
		LR_SetCookie(name,LR_Tick,720);
		return LR_Tick;
	}
	return null;
}
function getRDomain(){var d,a=location.hostname,b='',c=['.com','.co','.cn','.vn','.info','.net','.org','.me','.mobi','.us','.biz','.xxx','.ca','.co.jp','.com.cn','.net.cn','.org.cn','.gov.cn','.cq.cn','.ac.cn','.edu.cn','.mx','.tv','.ws','.ag','.com.ag','.net.ag','.org.ag','.am','.asia','.at','.be','.com.br','.net.br','.bz','.com.bz','.net.bz','.cc','.com.co','.net.co','.nom.co','.de','.es','.com.es','.nom.es','.org.es','.eu','.fm','.fr','.gs','.in','.co.in','.firm.in','.gen.in','.ind.in','.net.in','.org.in','.it','.jobs','.jp','.ms','.com.mx','.nl','.nu','.co.nz','.net.nz','.org.nz','.se','.tc','.tk','.tw','.com.tw','.com.hk','.idv.tw','.org.tw','.hk','.co.uk','.me.uk','.org.uk','.vg','.name'];return c=c.join('|').replace('.','\\.'),d=new RegExp('\\.?([^.]+('+c+'))$'),a.replace(d,function(a,c){b=c}),''!=b?'domain=.'+b+';':b}
var LR_cookie_test=1;function LR_cookie_test1() {LR_SetCookie('LR_cookie_t0',1,0.05);LR_cookie_test=(LR_getCookie('LR_cookie_t0')!=null);}LR_cookie_test1();
	LR_hasInstall=0;
if(LR_ssl){_lr_helpsrc_on=_lr_helpsrc_on.replace('http://','https://');_lr_helpsrc_of=_lr_helpsrc_of.replace('http://','https://');_lr_closesrc0=_lr_closesrc0.replace('http://','https://');}function LR_addnew0(){
if(_lr_issupport_track)
{
var data='id='+LR_siteid+'&sid='+LR_sid+'&cid='+LR_cid+'&lng='+LR_lng;
	data+='&p='+escape(location.href)+'&r='+lr_refer5237+'&e='+escape(LR_explain)+'&OAGD='+LR_LCBO;
	if(typeof(LR_username)!='undefined'){data+='&un='+escape(LR_username);}
	if(typeof(LR_userdata)!='undefined'){data+='&ud='+escape(LR_userdata);}
	if(typeof(LR_pagetitle)!='undefined'){data+='&pt='+escape(LR_pagetitle);}
	if(LR_issupport_feydj){data+='&f=1';}
checkcount=-1;LR_inviteimgJS=0;LR_hcloopJS(LR_sysurl+'js/JS_Float.aspx',data);LR_explain='';
}else{LR_sidexists=2;}
}
		document.write('<link href="http://dkt.zoosnet.net/js/JS5.css" rel="stylesheet" type="text/css" />');
var LR_MCount1 = 5000;

function LR_CheckUserUrl(_url) {
	if (_url == null) {
		return '';
	}
	if (_url.indexOf('//') == -1) {
		return LR_imgurl + _url;
	}
	if (LR_sysurl.substring(0, LR_sysurl.indexOf('//')) == 'http:') {
		return _url.replace(LR_sysurl, LR_imgurl).replace('https://', 'http://');
	} else {
		return _url.replace('http://', 'https://');
	}
}

function LR_checkagent(_lr_na) {
	var _lr_o = _lr_na.split('|');
	for (_lr_w = 0; _lr_w < _lr_o.length; _lr_w++) {
		if (navigator.userAgent.toLowerCase().indexOf(_lr_o[_lr_w]) > -1) return true;
	}
	return false;
}
var LR_cid = null;
var LR_sid = null;
var LR_fistvisitetime = null;
var LR_visitetime = new Date().getTime();
var LR_lastvisitetime = null;
var LR_visitecounts = 0;
LR_visitepages = 0;
var LR_ip = null;
var LR_ip1 = null;
var LR_ip2 = null;
var LR_showinvite = 1;
var LR_invite0 = '';
var LR_invite1 = null;
var LR_sidexists = -1;
var LR_lastinvite = new Date().getTime();
var checkcount = 0;
var LR_inviteimgJS = 1;
var lr_refer5237 = escape(document.referrer);
if (typeof(lr_refer5236) != 'undefined') lr_refer5237 = escape(lr_refer5236);
var LR_cname = null;
var LR_ccolor = null;
var LR_lastoname = null;
var LR_nexttimerID = null;
var LR_istate = 0,
	LR_gstate = 0;
var LR_skey = null;
var LR_surl = null;
var LR_ClientEnd = 1;
var LR_cur_invite = null;
var LR_cookie_ctick = 0;
var lr_newcount=0;
var miniclosetime=0;

function LR_GetObj(id, theDoc) {
	if (!theDoc) {
		theDoc = document;
	}
	if (theDoc.getElementById) {
		return theDoc.getElementById(id);
	} else if (document.all) {
		return theDoc.all(id);
	}
}
if (LR_auto_pagetitle && typeof(LR_pagetitle) == 'undefined') {
	var LR_pagetitle = document.title;
}
if (typeof(LiveReceptionCode_need_help_html) != 'undefined') LR_showfloat = 1;
if (typeof(LR_explain) == 'undefined') {
	LR_explain = '';
	if (typeof(LiveReception_explain) != 'undefined') {
		LR_explain = unescape(LiveReception_explain);
	}
	if (typeof(LiveReceptionCode_chatexplain_online) != 'undefined') {
		LR_explain = unescape(LiveReceptionCode_chatexplain_online);
	}
}

function LR_Check_region() {
	if (LR_defineregion) {
		var invitec0 = unescape(LR_ip1) + ' ' + unescape(LR_ip2);
		if (typeof(only_invite_list) != 'undefined') {
			LR_showinvite = 0;
			var invitec1 = only_invite_list.split('|');
			for (w = 0; w < invitec1.length; w++) {
				if (invitec1[w].length == 0) continue;
				if (invitec0.indexOf(invitec1[w]) != -1) {
					LR_showinvite = 1;
					break;
				}
			}
		} else if (typeof(never_invite_list) != 'undefined') {
			var invitec1 = never_invite_list.split('|');
			for (w = 0; w < invitec1.length; w++) {
				if (invitec1[w].length == 0) continue;
				if (invitec0.indexOf(invitec1[w]) != -1) {
					LR_showinvite = 0;
					break;
				}
			}
		}
	}
	if (LR_hidden_region != '') {
		var lrhgs = LR_hidden_region.split(",");
		var ipfrom = unescape(LR_ip1) + ' ' + unescape(LR_ip2);
		for (w = 0; w < lrhgs.length; w++) {
			if (lrhgs[w] == '') continue;
			if (ipfrom.indexOf(lrhgs[w]) != -1) {
				LR_showinvite = 0;
				return;
			};
		}
		if (LR_showfloat) LR_Floaters[0].showdiv(1);
	}
}

function LR_buildfloat() {
	return (typeof(LiveReceptionCode_need_help_html) != 'undefined') ? LiveReceptionCode_need_help_html : '<img ' + (LiveReceptionCode_isonline ? 'title="' + _lr_helpalt_on + '" alt="' + _lr_helpalt_on + '" src="' + LR_CheckUserUrl(_lr_helpsrc_on) + '"' : 'title="' + _lr_helpalt_of + '" alt="' + _lr_helpalt_of + '" src="' + LR_CheckUserUrl(_lr_helpsrc_of) + '"') + '  style="cursor:pointer" onclick="openZoosUrl(\'chatwin\');">';
}

function LR_check_block(lrobjinner) {
	if (typeof(lrobjinner) == 'undefined') return true;
	return ((lrobjinner.indexOf('.gif') == -1 && lrobjinner.indexOf('.jpg') == -1 && lrobjinner.indexOf('.png') == -1 && lrobjinner.indexOf('.swf') == -1) || lrobjinner.indexOf(' Blocked_') != -1);
}
var LR_Floaters = new Array();
if (typeof(LR_Fid) == 'undefined') {
	var LR_Fid = 0;
	var LR_invitew = 120;
	var LR_inviteh = 60;
	var LR_inviteim = new Image;
	LR_inviteim.src = LR_CheckUserUrl(_lr_mobileinviteimgsrc);
	eval("function OnlinerIcon(){this.pms=new Array();this.LR_scrollTimer=null;this.autoScroll=LR_autoScroll;this.get_tip_str=onliner_get_tip_str;this.start=onliner_start;this.imageTimer=onliner_imageTimer;this.get_close_str=onliner_get_close_str;this.hidden=hidden_div;this.showdiv=show_div;}function LR_autoScroll(){this.imageTimer();}function onliner_get_tip_str(){  var tt = 'z-index:2147483647;position:fixed;'+((this.pms['xCenter']==1)?'left:50%;margin-left:-'+(typeof (lr_xCenter) != 'undefined'?lr_xCenter:LR_invitew)+'px!important;':((this.pms['alignx']==1)?'right':'left')+':'+this.pms['alignW']+'px;')+((this.pms['yCenter']==1)?'top:50%;margin-top:-'+(typeof (lr_yCenter) != 'undefined'?lr_yCenter:LR_inviteh)+'px!important;':((this.pms['aligny']==1)?'bottom':'top')+':'+this.pms['alignH']+'px;')+'';return tt;}function onliner_get_close_str(){if(this.pms['closer_show']==1) return '<div id=\"swtColse\" style=\"width:20px; height:15px; top:0px; right:0px; position:absolute;background-image: url('+this.pms['closer_img']+');background-repeat: no-repeat;background-position: right top;cursor:pointer;\" onclick=\"LR_Hidemobileinvite('+this.pms['LR_Fid']+');onlinerIcon'+this.pms['LR_Fid']+'.hidden();\"></div>'; return '';}function hidden_div(){this.pms['show']='none';LR_GetObj(this.pms['LRdiv']).style.display='none';}function show_div(showclose){this.pms['show']='block';LR_GetObj(this.pms['LRdiv']).style.display='block';if(LR_GetObj(this.pms['LRfloater']+'close')!=null)LR_GetObj(this.pms['LRfloater']+'close').style.display=showclose?'block':'none';}function onliner_imageTimer(hand){var _lrobj=LR_GetObj(this.pms['LRdiv']); if(hand || (this.pms['show']=='block' && _lrobj!=null && LR_check_block(_lrobj.innerHTML) && !LR_check_block(this.pms['html']))){var con_img=this.pms['html'];var tt='';tt+='<DIV id=\"'+this.pms['LRfloater']+'\" >'+this.get_close_str()+con_img+'</div>';  _lrobj.innerHTML=tt; LR_GetObj(this.pms['LRfloater']).style.cssText=this.get_tip_str();LR_GetObj(this.pms['LRdiv']).style.display=this.pms['show'];}	}function onliner_start(){	document.write('<div id=\"'+this.pms['LRdiv']+'\" style=\"display:none;\"></div>');}");
} else {
	LR_Fid++;
}
eval('var onlinerIcon' + LR_Fid + '=new OnlinerIcon();');
eval('onlinerIcon' + LR_Fid + '.pms[\'LR_Fid\']=LR_Fid;');
eval('onlinerIcon' + LR_Fid + '.pms[\'show\']=(LR_showfloat && LR_hidden_region.length==0)?\'block\':\'none\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'aligny\']=_lr_tobottom;');
eval('onlinerIcon' + LR_Fid + '.pms[\'alignx\']=_lr_toright;');
eval('onlinerIcon' + LR_Fid + '.pms[\'alignW\']=_lr_left;');
eval('onlinerIcon' + LR_Fid + '.pms[\'alignH\']=_lr_top;');
eval('onlinerIcon' + LR_Fid + '.pms[\'html\']=LR_buildfloat();');
eval('onlinerIcon' + LR_Fid + '.pms[\'closer_show\']=(_lr_closesrc0==\'\')?0:1;');
eval('onlinerIcon' + LR_Fid + '.pms[\'closer_img\']="' + LR_imgurl + 'LR/closeimg/' + _lr_closesrc0 + '";');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRfloater\']=\'LRfloater' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRdiv\']=\'LRdiv' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.start();');
eval('onlinerIcon' + LR_Fid + '.LR_scrollTimer = window.setInterval(\'onlinerIcon' + LR_Fid + '.autoScroll()\', 200); ');
eval('LR_Floaters.push(onlinerIcon' + LR_Fid + ');');
if (!LR_checkagent('ucbrowser') && document.body) document.body.appendChild(LR_GetObj('LRdiv' + LR_Fid));
LR_Fid++;
eval('var onlinerIcon' + LR_Fid + '=new OnlinerIcon();');
eval('onlinerIcon' + LR_Fid + '.pms[\'LR_Fid\']=LR_Fid;');
eval('onlinerIcon' + LR_Fid + '.pms[\'show\']=\'none\';');
if ((typeof(Invite_ToBottom) != 'undefined') && (typeof(Invite_ToRight) != 'undefined') && (typeof(Invite_left) != 'undefined') && (typeof(Invite_top) != 'undefined')) {
	eval('onlinerIcon' + LR_Fid + '.pms[\'aligny\']=Invite_ToBottom;');
	eval('onlinerIcon' + LR_Fid + '.pms[\'alignx\']=Invite_ToRight;');
	eval('onlinerIcon' + LR_Fid + '.pms[\'alignW\']=Invite_left;');
	eval('onlinerIcon' + LR_Fid + '.pms[\'alignH\']=Invite_top;');
} else {
	eval('onlinerIcon' + LR_Fid + '.pms[\'xCenter\']=1;');
	eval('onlinerIcon' + LR_Fid + '.pms[\'yCenter\']=1;');
}
eval('onlinerIcon' + LR_Fid + '.pms[\'html\']=\'\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'closer_show\']=0;');
eval('onlinerIcon' + LR_Fid + '.pms[\'closer_img\']="' + LR_sysurl + 'LR/closeimg/' + _lr_closesrc1 + '";');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRfloater\']=\'LRfloater' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRdiv\']=\'LRdiv' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.start();');
eval('onlinerIcon' + LR_Fid + '.LR_scrollTimer = window.setInterval(\'onlinerIcon' + LR_Fid + '.autoScroll()\', 200); ');
eval('LR_Floaters.push(onlinerIcon' + LR_Fid + ');');

function LR_showInviteDiv(h1, h2) {
	if (!LR_showinvite) return;
	if (h1 == null && h2 == null) return;
	if (h1 == '1' && h2 == '1' && LR_chated_no_invite && LR_getCookie('LR_lastchat') == '1') {
		return;
	}
	var LR_ikind1 = (!LR_invite_display_kind || h2 == '1');
	if (typeof(LiveAutoInvite0) != 'undefined' && h1 == '1') h1 = LiveAutoInvite0;
	if (h2 == '1') h2 = LR_GetAutoInvite2();
	if (h1.indexOf('%IP%') != -1) {
		var ipfrom = unescape(LR_ip1);
		if (ipfrom.length < 3 || (LR_ip1 == null && LR_ip2 == null)) {
			h1 = '';
		} else {
			h1 = h1.replace('%IP%', ipfrom);
		}
	}
	LR_cur_invite = h2;

	LR_m_f(LR_m_d);
	if ((typeof(LR_invite_m) != 'undefined') && LR_invite_m) LR_m_d = LR_m_e();

	if (LR_UserInviteDiv != null && LR_ikind1) {
		LR_Floaters[1].pms['html'] = LR_UserInviteDiv.replace(/\{0\}/g, 'openZoosUrl();LR_HideInvite();').replace(/\{1\}/g, 'LR_RefuseChat();LR_HideInvite();');
	} else {
		onlinerIcon1.pms['closer_show'] = 0;
		if (LR_inviteim.readyState == 'complete' || (LR_inviteim.readyState != 'undefined' && LR_inviteim.complete)) {
			LR_invitew = LR_inviteim.width / 2;
			LR_inviteh = LR_inviteim.height / 2;
		}
		LR_Floaters[1].pms['html'] = '<div id="LR_swtbox" style="background:url(' + LR_CheckUserUrl(_lr_mobileinviteimgsrc) + ');background-repeat: no-repeat;background-position: right;overflow:hidden;width:' + LR_invitew * 2 + 'px; height:' + LR_inviteh * 2 + 'px;position:relative;"><div id="LR_swtchat" style="width:' + LR_invitew * 2 + 'px; height:' + LR_inviteh * 2 + 'px; top:0px; right:0px; position:absolute"> <a href="javascript:void(0)" onClick="openZoosUrl();LR_HideInvite();return false;"  style="display:block; height:' + LR_inviteh * 2 + 'px; text-indent:-999em"></a></div><div id="LR_swtColse" style="width:35px; height:30px; top:0; right:0; position:absolute"><a href="javascript:void(0)" onClick="LR_RefuseChat();LR_HideInvite();return false;" style="display:block; height:30px; text-indent:-999em" ></a></div></div>';
	}
	LR_Floaters[1].showdiv(0);
	LR_Floaters[1].imageTimer(true);
	if (LR_fade_invite) LR_fadeIn('LRfloater1');
	if (document.body) {
		document.body.appendChild(LR_GetObj('LRdiv0'));
		document.body.appendChild(LR_GetObj('LRdiv1'));
	}
	if (LR_invite_hide_float && LR_showfloat) LR_Floaters[0].hidden();
	window.focus();
	LR_SetCookie('lastshowinvite', new Date().getTime(), 720);
}

function LR_showHfloat() {
	if (LR_invite_hide_float && LR_showfloat) {
		LR_Floaters[0].showdiv(1);
		if (document.body) document.body.appendChild(LR_GetObj('LRdiv0'));
	}
}

function LR_HideInvite() {
	if (LR_Floaters[1].pms['html'] == '') return;
	LR_Floaters[1].pms['html'] = '';
	LR_showHfloat();

	LR_m_f(LR_m_d);

	if (LR_fade_invite) {
		if (LR_GetObj('LRfloater1') == null) return;
		LR_fadeOut('LRfloater1');
	} else {
		LR_Floaters[1].hidden();
	}

	if (LR_istate == 1) {
		LR_istate = 0;
	}
}

function LR_Hidemobileinvite(lid) {
	if (lid != 1) return;
	LR_RefuseChat();
	LR_HideInvite();
}

function LR_SetOpacity(ev, v) {
	ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')' : ev.style.opacity = v / 100;
}

function LR_fadeIn(elem) {
	if (LR_GetObj(elem) == null) {
		return;
	}
	speed = 120;
	opacity = 100;
	LR_GetObj(elem).style.display = 'block';
	LR_SetOpacity(LR_GetObj(elem), 0);
	var val = 0;
	(function() {
		LR_SetOpacity(LR_GetObj(elem), val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}

function LR_fadeOut(elem) {
	if (LR_GetObj(elem) == null) {
		return;
	}
	speed = 50;
	opacity = 0;
	var val = 100;
	(function() {
		LR_SetOpacity(LR_GetObj(elem), val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val <= 0) {
			LR_GetObj(elem).style.display = 'none';
		}
	})();
}


LR_Fid++;
eval('var onlinerIcon' + LR_Fid + '=new OnlinerIcon();');
eval('onlinerIcon' + LR_Fid + '.pms[\'LR_Fid\']=LR_Fid;');
eval('onlinerIcon' + LR_Fid + '.pms[\'show\']=\'none\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'aligny\']=1;');
eval('onlinerIcon' + LR_Fid + '.pms[\'alignx\']=1;');
eval('onlinerIcon' + LR_Fid + '.pms[\'alignW\']=0;');
eval('onlinerIcon' + LR_Fid + '.pms[\'alignH\']=0;');
eval('onlinerIcon' + LR_Fid + '.pms[\'html\']=\'\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'closer_show\']=0;');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRfloater\']=\'LRfloater' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRdiv\']=\'LRdiv' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.start();');
eval('onlinerIcon' + LR_Fid + '.LR_scrollTimer = window.setInterval(\'onlinerIcon' + LR_Fid + '.autoScroll()\', 200); ');
eval('LR_Floaters.push(onlinerIcon' + LR_Fid + ');');
LR_Fid++;
eval('var onlinerIcon' + LR_Fid + '=new OnlinerIcon();');
eval('onlinerIcon' + LR_Fid + '.pms[\'LR_Fid\']=LR_Fid;');
eval('onlinerIcon' + LR_Fid + '.pms[\'show\']=\'none\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'aligny\']=1;');
eval('onlinerIcon' + LR_Fid + '.pms[\'alignx\']=1;');
eval('onlinerIcon' + LR_Fid + '.pms[\'alignW\']=0;');
eval('onlinerIcon' + LR_Fid + '.pms[\'alignH\']=0;');
eval('onlinerIcon' + LR_Fid + '.pms[\'html\']=\'\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'closer_show\']=0;');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRfloater\']=\'LRfloater' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRdiv\']=\'LRdiv' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.start();');
eval('onlinerIcon' + LR_Fid + '.LR_scrollTimer = window.setInterval(\'onlinerIcon' + LR_Fid + '.autoScroll()\', 200); ');
eval('LR_Floaters.push(onlinerIcon' + LR_Fid + ');');
var lr_winunload = window.onunload;

function lrmove() {
	_lr_mfloat_toright = !_lr_mfloat_toright;
	var LR_o1 = LR_GetObj('LRfloater2').style;
	if (_lr_mfloat_toright == 1) {
		LR_o1.left = '';
		LR_o1.right = _lr_mfloat_imgleft + 'px';
	} else {
		LR_o1.right = '';
		LR_o1.left = _lr_mfloat_imgleft + 'px';
	}
}




function LR_showminiDiv(islrminimin) {
    if(!islrminimin)islrminimin=false;
    if(LR_pm010)islrminimin=true;
	LR_MCount1=20000;
	if (LR_Floaters[3].pms['html'] == '') 
	{
		LR_Floaters[3].pms['html'] = minibarhtml();
	    LR_Floaters[3].imageTimer(true);
	    if (document.body) {
		    document.body.appendChild(LR_GetObj('LRdiv3'));
	    }
	   LR_Floaters[3].showdiv(0);
		    
	}
	LR_GetObj('LRdiv2').style.display=LR_pm007?'block':'none';
	
	LR_GetObj('LRMINIBar').style.display = (!LR_pm007 || islrminimin)?'block':'none';
	
	if(LR_Floaters[2].pms['html']=='')
	{
	    LR_Floaters[2].pms['html'] = minichathtml();
	    LR_Floaters[2].imageTimer(true);
	    if (document.body) {
		document.body.appendChild(LR_GetObj('LRdiv2'));
	    }
	    setTimeout("LR_miniframe.location=LR_sysurl + 'LR/MiniChat_M.aspx?id=' + LR_websiteid + '&cid=' + LR_cid + '&lng=' + LR_lng + '&sid=' + LR_sid + '&p=' + escape(location.href) + '&r=' + lr_refer5237", 100);
	    if(LR_pm007 && !islrminimin)LR_Floaters[2].showdiv(0);
	    var _obj=LR_GetObj('LRfloater2').style;
        _obj.width='100%';
        var t_h=parseInt(LR_geth()*LR_pm005/100);
        if(t_h<350){t_h=350;LR_pm005=parseInt(35000/LR_geth())+5;}
        _obj.height=lr_is_ios?t_h+'px':LR_pm005+'%';
        return;
	}
	
   LR_Floaters[0].hidden();
    LR_HideInvite();
}

var lr_is_ios = LR_checkagent("ipad|iphone|ipod");





function lrminiMin() {
    LR_showHfloat();
	if (LR_Floaters[2].pms['html'] == '') return;
    LR_Floaters[2].hidden();
	if (LR_GetObj('LRMINIBar').style.display == 'block') {
		return;
	}
	LR_GetObj('LRMINIWIN').style.display = 'none';
	LR_GetObj('LRMINIBar').style.display = 'block';
	miniclosetime = new Date().getTime();
}

function lrminiMax() {
     if(LR_pm010){openZoosUrl();return;}
    LR_Floaters[0].hidden();
	LR_HideInvite();
	if (LR_GetObj('LRMINIWIN') == null) return;
	LR_GetObj('LRdiv2').style.display=LR_GetObj('LRMINIWIN').style.display = 'block';
	LR_GetObj('LRMINIWIN').style.width = '100%';
	LR_GetObj('LRMINIBar').style.display = 'none';
	LR_GetObj('LR-CIRCLE').style.display='none';
	LR_GetObj('LR-BUBBLE').style.display='none';
    lr_newcount=0;
}



if (typeof(LrinviteTimeout) == 'undefined' || isNaN(LrinviteTimeout) || LrinviteTimeout < 1) {
	LrinviteTimeout = 1;
}
if (!_lr_issupport_track && (LiveReceptionCode_isonline || !offline_invite_hidden)) {
	LR_nextinvite(1);
}

function LR_checkagent(_lr_na) {
	var _lr_o = _lr_na.split('|');
	for (_lr_w = 0; _lr_w < _lr_o.length; _lr_w++) {
		if (navigator.userAgent.toLowerCase().indexOf(_lr_o[_lr_w]) > -1) return true;
	}
	return false;
}

function lr_refer5238() {
	if (typeof(lr_refer5236) != 'undefined') {
		return '&r=' + escape(lr_refer5236);
	}
	var lr_refer5235 = LR_getCookie('lr_refer5');
	if (lr_refer5235 != null) {
		LR_SetCookie('lr_refer5', '', -60);
		return '&r=' + lr_refer5235;
	}
	var ur = document.referrer;
	var i = ur.lastIndexOf('.');
	return '&rf1=' + escape(ur.substring(0, i)) + '&rf2=' + escape(ur.substr(i));
}
if((/MicroMessenger/.test(navigator.userAgent) || /baiduboxapp/.test(navigator.userAgent) || /MQQBrowser\/6.9.1/.test(navigator.userAgent) || /baidubrowser\/4/.test(navigator.userAgent) || /Version/.test(navigator.userAgent)) && (/Mac OS/.test(navigator.userAgent)))
{
LR_pm010=1;
}
if(/OPPO R7/.test(navigator.userAgent))
{
LR_pm010=1;
}
function openZoosUrl(url, data) {
	if (typeof(openZoosUrl_UserDefine) == 'function') {
		if (openZoosUrl_UserDefine()) return;
	};
	if (typeof(LR_istate) != 'undefined') {
		LR_istate = 3;
	}
	var lr_url1 = url;
	if (typeof(LR_opentimeout) != 'undefined' && typeof(LR_next_invite_seconds) != 'undefined') LR_next_invite_seconds = 999999;
	if (url == 'sendnote') {
		url = LR_sysurl + 'LR/Chatwin2.aspx?siteid=' + LR_websiteid + '&cid=' + LR_cid + '&sid=' + LR_sid + '&lng=' + LR_lng + '&p=' + escape(location.href) + lr_refer5238();
	} else {
		url = ((LR_userurl0 && typeof(LR_userurl) != 'undefined') ? LR_userurl : (LR_sysurl + 'LR/Chatpre.aspx')) + '?id=' + LR_websiteid + '&cid=' + LR_cid + '&lng=' + LR_lng + '&sid=' + LR_sid + '&p=' + escape(location.href) + lr_refer5238();
	}
	if (LR_ssl && url.charAt(4) == ':') url = url.substring(0, 4) + 's' + url.substring(4, url.length);
	if (!data) {
		if (typeof(LR_explain) != 'undefined' && LR_explain != '') {
			url += '&e=' + escape(escape(LR_explain));
		} else if (typeof(LiveAutoInvite1) != 'undefined') {
			url += '&e=' + escape(escape(LiveAutoInvite1));
		}
	}
	if (typeof(LR_username) != 'undefined') {
		url += '&un=' + escape(LR_username);
	}
	if (typeof(LR_userdata) != 'undefined') {
		url += '&ud=' + escape(LR_userdata);
	}
	if (typeof(LR_ucd) != 'undefined') {
		url += '&ucd=' + escape(LR_ucd);
	}
	if (data) url += data;
	url += '&d=' + new Date().getTime();
	if (typeof(LR_imgint) != 'undefined') url += '&imgint=' + LR_imgint;
	if (lr_url1 == 'fchatwin') {
		LR_ClientEnd = 0;
		window.location = url + '&f=1';
		return;
	}
	if (LR_sidexists != 2 && LiveReceptionCode_isonline && lr_url1 != 'bchatwin' && typeof(LR_pm003) != 'undefined' && LR_pm003 == 1 && !LR_pm010) {
		LR_HideInvite();
		LR_istate = 1;
		LR_showminiDiv();
		lrminiMax();
		return;
	}
	LR_ClientEnd = 0;
	window.location = url;
}

function LR_useCookie() {
	LR_cid = LR_getCookie('LiveWS' + LR_websiteid);
	LR_sid = LR_getCookie('LiveWS' + LR_websiteid + 'sessionid');
	LR_fistvisitetime = LR_getCookie('fistvisitetime');
	LR_lastvisitetime = LR_getCookie('lastvisitetime');
	LR_visitecounts = LR_getCookie('visitecounts');
	LR_visitepages = LR_getCookie('visitepages');
	LR_cname = LR_getCookie('cname');
	LR_ccolor = LR_getCookie('ccolor');
	if (LR_fistvisitetime == null) {
		LR_SetCookie('fistvisitetime', new Date().getTime(), 2628000);
		LR_SetCookie('lastvisitetime', new Date().getTime(), 2628000);
		LR_SetCookie('visitecounts', 1, 2628000);
		LR_SetCookie('visitepages', 1, 2628000);
	} else {
		LR_SetCookie('lastvisitetime', new Date().getTime(), 2628000);
		if ((new Date().getTime() - parseInt(LR_lastvisitetime)) > 43200000) {
			LR_SetCookie('visitecounts', (parseInt(LR_visitecounts) + 1), 2628000);
		}
		LR_SetCookie('visitepages', (parseInt(LR_visitepages) + 1), 2628000);
	}
	LR_addnew0();
}
LR_useCookie();



function LR_GetAutoInvite2() {
	if (LR_invitesearchkey && LR_skey != null && typeof(LiveAutoInvite3) != 'undefined') {
		return LiveAutoInvite3.replace('%SKEY%', unescape(LR_skey));
	} else if (LR_invitestring1_auto != '') {
		return LR_invitestring1_auto;
	} else {
		return LiveAutoInvite2.replace(/\\"/g, '"');
	}
}

function clearinviteTimeout() {
	if (LR_nexttimerID != null) {
		clearTimeout(LR_nexttimerID);
		LR_nexttimerID = null;
	}
	LR_HideInvite();
}

function LR_invitef() {
	if (LR_invite0 == 'fopenchatwin') {
		LR_gstate = 1;
		if (LR_istate < 2) {
			clearinviteTimeout();
			LR_istate = 2;
			window.focus();
			openZoosUrl('fchatwin');
		}
	} else if (LR_invite0 == 'no') {
		LR_gstate = 2;
		clearinviteTimeout();
		if (LR_istate > 0) {
			LR_istate = 0;
		}
	} else if (LR_invite0 == 'openchatwin') {
		LR_gstate = 1;
		if (LR_istate > -1) {
			clearinviteTimeout();
			LR_istate = 1;
			LR_showminiDiv();
		}
	} else if (LR_invite0 != '') {
		LR_gstate = 1;
		if (LR_istate > -1) {
			clearinviteTimeout();
			LR_istate = 1;
			LR_showInviteDiv(LR_invite0, LR_invite1);
		}
	}
}
function LR_IPCB(_lrip) {
    if(_lrip.status==0)
    {
        LR_hcloopJS(LR_sysurl + 'LS/newsidip.aspx', 'id=' + LR_siteid + '&sid=' + LR_sid + '&lng='+_lrip.result.location.lng+'&lat='+_lrip.result.location.lat+'&nation='+escape(_lrip.result.ad_info.nation)+'&province='+escape(_lrip.result.ad_info.province)+'&city='+escape(_lrip.result.ad_info.city));
    }
}
function LR_LS() {
	if (LR_sidexists == -1) {
		setTimeout('LR_LS()', 100);
		return;
	}
	LR_Check_region();
	if (LR_invite0 == 'alerturl') {
		var oo5 = LR_invite1.split(',');
		alert(unescape(oo5[1]));
		window.location = oo5[0];
	} else if (LR_invite0 == 'url') {
		window.location = LR_invite1;
	} else if (LR_invite0 == 'alert') {
		alert(LR_invite1);
		LR_gstate = -2;
	}

	function LRedithref(pm, pv, href) {
		if (href.indexOf(pm) == -1) href += pm + pv;
		return href;
	}

	function LRedithref1() {
		var aList = document.getElementsByTagName('a');
		for (var i = 0; i < aList.length; i++) {
			var href0 = aList[i].href.toLowerCase();
			if (href0 && /chatpre.aspx|chatwin.aspx/.test(href0) && href0.indexOf('=' + LR_websiteid.toLowerCase()) > -1) {
				href0 = LRedithref('&r=', lr_refer5238(), href0);
				href0 = LRedithref('&p=', escape(location.href), href0);
				href0 = LRedithref('&cid=', LR_cid, href0);
				href0 = LRedithref('&sid=', LR_sid, href0);
				aList[i].href = href0;
			}
		}
	}
	LRedithref1();
	if (_lr_issupport_track) {
		if (LR_sidexists == 0) {
			var LR_Color = 16;
			if (navigator.appName != 'Netscape') {
				LR_Color = screen.colorDepth;
			} else {
				LR_Color = screen.pixelDepth;
			}
			var LR_sSize = screen.width + '*' + screen.height;
			var data = 'id=' + LR_siteid + '&sid=' + LR_sid + '&s=' + LR_sSize + '&ft=' + LR_fistvisitetime + '&fl=' + LR_lastvisitetime + '&vc=' + LR_visitecounts + '&vp=' + LR_visitepages + '&c=' + LR_Color + '&lng=' + LR_lng + '&cid=' + LR_cid + '&z=' + (new Date()).getTimezoneOffset() / 60;
			data += '&cn=' + escape(LR_cname) + '&co=' + escape(LR_ccolor);
			checkcount = -1;
			LR_inviteimgJS = 0;
			LR_hcloopJS(LR_sysurl + 'LS/newsid0.aspx', data);
			if(typeof(LR_IPTK) != 'undefined')
			{
			    data = 'ip='+LR_ip+'&key='+LR_IPTK+'&output=jsonp&callback=LR_IPCB';
			    LR_hcloopJS('http://apis.map.qq.com/ws/location/v1/ip', data);
			}
		}
	}
	if (!LiveReceptionCode_isonline && offline_invite_hidden) {
		//	if (LR_pm004) LR_showminiDiv_of();
		return;
	}
	LR_invitef();
	if (_lr_issupport_track) LR_nextinvite(1);
	if (LR_sidexists == 2) return;
	if (LiveReceptionCode_isonline && _lr_issupport_track) {
		LR_hcloop();
	}
}
LR_LS();
var lronunload0 = window.onunload;
window.onunload = lronunload1;

function lronunload1() {
	if (!LR_ClientEnd) return;
	LR_ClientEnd = 0;
	LR_inviteimgJS = 0;
	LR_hcloopJS(LR_sysurl + 'LR/ClientEndJS.aspx', 'id=' + LR_siteid + '&lng=' + LR_lng + '&sid=' + LR_sid);
	try {
		if (typeof(lronunload0) == 'function') lronunload0();
	} catch (e) {}
}

function LR_RefuseChat() {
	if (LR_gstate == 1) {
		LR_invite0 = '';
		LR_istate = -1;
	}
	LR_nextinvite();
}

function LR_nextinvite(fic) {
	if (LR_gstate < 1 && LR_istate == 0 && typeof(LiveAutoInvite0) != 'undefined') {
		if (!fic && (!LR_repeatinvite || typeof(LR_next_invite_seconds) == 'undefined')) return;
		var lastshowinvite = parseInt(LR_getCookie('lastshowinvite'));
		if (isNaN(lastshowinvite)) {
			lastshowinvite = 0;
		}
		var intimeout = _lr_invite_interval * 1000 - (new Date().getTime() - lastshowinvite);
		var intimeout1 = (fic ? LrinviteTimeout : LR_next_invite_seconds) * 1000;
		if (intimeout > 0) {
			intimeout1 += intimeout;
		}
		LR_istate = 1;
		LR_nexttimerID = setTimeout('LR_showInviteDiv("1","1")', intimeout1);
	}
}

function LR_hcloopJS(url, param) {
	var me = arguments.callee;
	var src = url.indexOf('?') == '-1' ? url + '?' : url;
	src += param;
	if (src.indexOf('&d=') == '-1') src += '&d=' + new Date().getTime();
	me.Script && me.Script.parentNode.removeChild(me.Script);
	me.Script = document.createElement('script');
	me.Script.setAttribute('type', 'text/javascript');
	me.Script.src = src;
	document.getElementsByTagName('head')[0].appendChild(me.Script);
}






function LR_CheckImgJS(w, w1, w2, w3) {
    LR_inviteimgJS = 1;
	if (!w) {
		return;
	}
	if (w == 28) {
		return;
	}
	if (checkcount == -1 && w != 6) return;
	if (w > 0) {
		if (w == 2) {
			LR_gstate = 1;
			if (LR_istate < 2) {
				clearinviteTimeout();
				LR_istate = 2;
				window.focus();
				openZoosUrl('fchatwin');
				return;
			}
		}
		if (w == 8) {
			LR_gstate = 1;
			if (LR_istate > -1) {
				clearinviteTimeout();
				LR_istate = 1;
				LR_showminiDiv();
			}
			return;
		}
		 if (w == 4) {
			LR_gstate = 0;
			if (LR_istate > 1) {
				LR_istate = 0;
			}
			LR_nextinvite();
			LR_showminiDiv2();
			return;
		} 
		if (w == 5) {
		    clearinviteTimeout();
		    if (LR_istate > 0) {
				LR_istate = 0;
			}
			if (LR_gstate != 2) {
				LR_gstate = 2;
				LR_SetCookie('LR_lastchat', '1', 720);
			}
			
			
			
			if (LR_GetObj('LRMINIBar') == null && ((LR_pm001 && LR_pm002) ||  LR_pm009)) {
				LR_HideInvite();
				LR_istate = 1;
				LR_showminiDiv();
			}
			return;
		} 
		if (w == 7) {
			LR_gstate = -1;
			if (LR_istate > 1) {
				LR_istate = 0;
			}
			LiveReceptionCode_isonline = 0;
			if (typeof(LR_offline) == 'function') LR_offline();
			LR_Floaters[0].pms['html'] = LR_buildfloat();
			LR_Floaters[0].imageTimer(true);
			return;
		} 
		if (w == 1) {
			if (LR_gstate == 1) return;
			checkcount = 2;
			LR_invite0 = w1;
			LR_invite1 = w2;
			LR_invitef();
		}
	}
}

function LR_hcloop() {
	if (!LiveReceptionCode_isonline || !_lr_issupport_track || (LR_visitetime + 1800000) < new Date().getTime()) return;
	
	if (checkcount == -1 || !LR_inviteimgJS) {
		setTimeout('LR_hcloop()', 500);
		return;
	}
	if (LR_istate == -1) {
		LR_istate = -2;
		checkcount = -1;
		LR_inviteimgJS = 0;
		LR_hcloopJS(LR_sysurl + 'JS/RefuseChatjs.aspx', 'id=' + LR_siteid + '&sid=' + LR_sid + '&lng=' + LR_lng);
		setTimeout('LR_hcloop()', 500);
		return;
	}
	if (LR_getCookie('lastinvite') != null) LR_lastinvite = LR_getCookie('lastinvite');
	if (LR_lastinvite != null) {
		if (LR_MCount1 < 5000) LR_MCount1 = 5000;
		if ((new Date().getTime() - parseInt(LR_lastinvite)) > LR_MCount1) {
			LR_lastinvite = new Date().getTime();
			LR_SetCookie('lastinvite', LR_lastinvite, 720);
			LR_inviteimgJS = 0;
			var url = '';
			if (LR_explain != '') {
				url = '&e=' + escape(escape(LR_explain));
				LR_explain = '';
			}
			LR_hcloopJS(LR_lxurl + 'js/CheckInvitejs.aspx', 'id=' + LR_siteid + '&sid=' + LR_sid + url);
		}
	}
	setTimeout('LR_hcloop()', 500);
}


function LR_showminiDiv2() {
	if (typeof(LR_showminiDiv_no) != 'undefined' || !LR_pm001 || !LiveReceptionCode_isonline || !LR_pm002 || LR_sidexists == 2) return;
	if (LR_cid == null) {
		setTimeout('LR_showminiDiv2();', 300);
		return;
	}
	setTimeout('if(LR_Floaters[2].pms["html"]==""){LR_HideInvite();LR_istate=1;LR_showminiDiv();}', typeof(LR_showminiDivtimeout) != 'undefined' ? LR_showminiDivtimeout * 1000 : 2000);
	return;
}
LR_showminiDiv2();


var LR_m_d=null;
function LR_m_e(p1,p2,p3)
{
	if(LR_m_d!=null)return null;
	var div=document.createElement('DIV');
	div.id='LR_m_h_'+new Date().getTime();
	with(div.style)
	{
		zIndex=8998;
		top='0px';
		left='0px';
		width='100%';
		height='100%';
		border='none';
		margin=padding=0;
		position='absolute';
		backgroundColor='#000';
		opacity='0.2';
		filter='alpha(opacity=20)';
		duration=1000;
	}
	document.body.insertBefore(div,document.body.firstChild);
	if(!p3)LR_m_a('SELECT');
	if(!p2)LR_m_a('OBJECT');
	if(!p1)LR_m_a('IFRAME');
	LR_m_c(div);
	return div;
}
function LR_m_c(obj)
{
	obj.style.width='100%';
	obj.style.height='100%';
	var bodyCW=0,bodyCH=0;
	if(document.documentElement&&document.documentElement.clientWidth)
	{
		bodyCW=document.documentElement.clientWidth;
	}
	else if(window.innerWidth)
	{
		bodyCW=window.innerWidth;
	}
	else if(document.body)
	{
		bodyCW=document.body.clientWidth;
	}
	if(window.innerHeight)bodyCH=window.innerHeight;
	else if(document.documentElement&&document.documentElement.clientHeight)
		bodyCH=document.documentElement.clientHeight;
	else if(document.body)bodyCH=document.body.clientHeight;
	setTimeout(function()
	{
		bodyCW=Math.max(document.body.scrollWidth,bodyCW);
		bodyCH=Math.max(document.body.scrollHeight,bodyCH);
		obj.style.width=bodyCW+'px';
		obj.style.height=bodyCH+'px';
	},1);
}
function LR_m_b(TagName)
{
	var   s=document.getElementsByTagName(TagName);
	for(var i=0,n=s.length;i<n;i++)
	{
		if(s[i].id=='LR_Flash')continue;s[i].style.visibility=s[i].getAttribute('LR_m_g');
		s[i].removeAttribute('LR_m_g');
	}
};
function LR_m_a(TagName)
{
	var   s=document.getElementsByTagName(TagName);
	for(var i=0,n=s.length;i<n;i++)
	{
		if(s[i].id=='LR_Flash')continue;s[i].setAttribute('LR_m_g',s[i].style.visibility,0);
		s[i].style.visibility='hidden';
	}
};
function LR_m_f(obj,p1,p2,p3){
	if(LR_m_d==null)return;
	try{
		if(obj){document.body.removeChild(obj);LR_m_d=null;
	if(!p3)LR_m_b('SELECT');
	if(!p2)LR_m_b('OBJECT');
	if(!p1)LR_m_b('IFRAME');
	}}catch(e){}
}



window.addEventListener('message', function (e) {
            var lr_cmd = e.data;
            if(lr_cmd.a=='hide')
            {
               lrminiMin();return;
            }
             if(lr_cmd.a=='maxme')
            {
               openZoosUrl('fchatwin');return;
            }
            if(lr_cmd.a=='scroll')
            {
               window.scrollTo(0, 9999);return;
            }
            if(lr_cmd.a=='newmsg' && LR_GetObj('LRMINIBar').style.display=='block')
            {
               lr_newcount++;
               var _obj=LR_GetObj('LR-CIRCLE');_obj.innerHTML=lr_newcount;_obj.style.display='block';
               LR_GetObj('LR-BUBBLE-title').style.display=(!lr_cmd.d || !lr_cmd.c)?'none':'block';
               
               LR_GetObj('LR-BUBBLE-MSG').innerHTML=lr_cmd.b;
               LR_GetObj('LR-BUBBLE-AVATAR').src=lr_cmd.c;
               if(LR_pm008!=1)LR_GetObj('LR-BUBBLE').style.display='block';
               LR_GetObj('LR-BUBBLE-NAME').innerHTML=lr_cmd.d;return;
            }
        }, false);
        
        
         function closebarhtml(evt) {
         evt = evt || window.event;
         LR_GetObj('LR-BUBBLE').style.display='none';
            evt.cancelBubble = true;
		    evt.returnValue = false;
		    if (evt.preventDefault && evt.stopPropagation) {
			    evt.preventDefault();
			    evt.stopPropagation();
		    }
		}
        
        function minibarhtml() {return '<div id="LRMINIBar" class="LR_Mini_ICON" style="display:none;'+(LR_pm011?'left':'right')+': 15px;bottom: '+LR_pm012+'px;" onclick="lrminiMax();"><a class="LR-BTN" style="background-color: '+LR_pm006+';'+(LR_pm008==2?'display:none;':'')+'"><span class="LR-ICON LR-ICON-CHAT1" id="LR-BTN-ICON"></span><span id="LR-CIRCLE" style="display:none;background-color: '+LR_pm006+';"></span> </a><div id="LR-BUBBLE" style="display:none;cursor:pointer;right: 0;bottom: '+LR_pm012+'px;"><span class="LR-ICON" id="LR-BUBBLE-CLOSE" onclick="return closebarhtml(event);"></span><div id="LR-BUBBLE-INSIDE"><div id="LR-BUBBLE-title"><img id="LR-BUBBLE-AVATAR" src=""><span id="LR-BUBBLE-NAME"></span></div><div id="LR-BUBBLE-MSG"></div></div></div></div>';}
        
        function LiveReceptionCode_BuildChatWin(_lrchatexplain,_lrhelpalt)
        {
	        return ' href="javascript:void(0)"  onclick="openZoosUrl(\'chatwin\',\'&e='+escape(escape(_lrchatexplain))+'\');return false;" title="'+unescape(_lrhelpalt)+'" target="_self" ';
        }

function LR_geth() {
    var sclh = document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : window.innerHeight != null ? window.innerHeight : document.body != null ? document.body.clientHeight : 0;
    return sclh;
}}
