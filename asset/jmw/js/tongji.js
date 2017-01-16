  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-4873603-1']);
  _gaq.push(['_setDomainName', '.jmw.com.cn']);
  _gaq.push(['_setAllowHash', false]);
  _gaq.push(['_trackPageview']);

    //google
//    var ga = document.createElement('script'); 
//    ga.type = 'text/javascript'; 
//    ga.async = true;
//    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//    var s = document.getElementsByTagName('script')[0]; 
//    s.parentNode.insertBefore(ga, s);


    //baidu
    var _bdhmProtocol = document.createElement('script');
      _bdhmProtocol.type = 'text/javascript';
      _bdhmProtocol.async = true;
      _bdhmProtocol.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + unescape('hm.baidu.com/h.js%3Fa106c437d4a312c39ce75b83f27c57aa');
    var m = document.getElementsByTagName('script')[0];
      m.parentNode.insertBefore(_bdhmProtocol, m); 

    //jquery
    if(!window.jQuery) {     
      var jqueryPackage = document.createElement('script');
      jqueryPackage.type = 'text/javascript';
      jqueryPackage.async = true;
      jqueryPackage.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + unescape('image1.jmw.com.cn/public/js/jquery-1.6.min.js');    
      var first = document.getElementsByTagName('script')[0];
      first.parentNode.insertBefore(jqueryPackage, first);
    }

    //新商桥
     var _bdhmProtocol = document.createElement('script');
    _bdhmProtocol.type = 'text/javascript';
    _bdhmProtocol.async = true;
    _bdhmProtocol.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + unescape('function.jmw.com.cn/js/newshangqiao.js');    
    var m = document.getElementsByTagName('script')[0];
    m.parentNode.insertBefore(_bdhmProtocol, m);

    
    //记录点击轨迹
//    var _getLinkTracking = document.createElement('script');
//    _getLinkTracking.type = 'text/javascript';
//    _getLinkTracking.async = true;
//    _getLinkTracking.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + unescape('function.jmw.com.cn/js/getLinkTracking.js');    
//    var m = document.getElementsByTagName('script')[0];
//    m.parentNode.insertBefore(_getLinkTracking, m);
    
 // 360抓取注册
var _mvq = window._mvq || [];window._mvq = _mvq;
_mvq.push(['$setAccount', 'm-100526-0']);
_mvq.push(['$setGeneral', 'registered', '', /*用户名*/ '', /*用户id*/ '']);
_mvq.push(['$logConversion']);
  
if(window.jQuery) {
  jQuery(function(){    
    // alert(jQuery("input[SearchAutoComplete='true']").length);
    jQuery('body').append('<link type="text/css" rel="stylesheet" href="http://image1.jmw.com.cn/public/css/search_tips.css">');
   
    jQuery("#keyword").keyup(function(){
      jQuery('#SearchAutoCompleteUl').remove();
      var searchKeyword = jQuery(this).val();
      if(searchKeyword=='')
      {
          jQuery('#SearchAutoCompleteUl').remove();return;
      }
      var id = jQuery(this).attr('id');
      var width=jQuery(this).outerWidth()-2;
      var height=jQuery(this).outerHeight()-1;
      var top_val=jQuery(this).offset().top;
      var count = height+top_val;
      var left_val=jQuery(this).offset().left;
      jQuery.ajax({
        type: "GET",
        url:'http://protectedapi.jmw.com.cn/project/SearchAutoComple.php',
        data:"keyword="+encodeURIComponent(searchKeyword),
        dataType:'jsonp',
        cache:false,
        jsonp:"jsonpcallback",
        success: function(html){
          jQuery('#SearchAutoCompleteUl').remove();
          if(html!='')  
          {
             jQuery('body').append(html);
             jQuery('#SearchAutoCompleteUl').attr("style",'width:'+width+'px;top:'+count+'px;left:'+left_val+'px;');
             jQuery('#SearchAutoCompleteUl').attr("chooseId",id);
          }
        }
      }); 
    });
    jQuery(window).resize(function(){
          if(jQuery("#keyword").length>0)
          {
            var left_val=jQuery("#keyword").offset().left;
            jQuery('#SearchAutoCompleteUl').css({            
                   'left':left_val
            });
          }
    });
    jQuery("#keyword").blur(function(){
      setTimeout(function() {
          jQuery('#SearchAutoCompleteUl').remove();
      }, 500);
    });
  }); 
}
  
function chooseContent(content)
{
   var chooseId = jQuery('#SearchAutoCompleteUl').attr('chooseId');
   jQuery("#"+chooseId).val(content).focus();
   jQuery('#SearchAutoCompleteUl').remove();
}

if(window.jQuery) {
  jQuery(function(){    
    // alert(jQuery("input[SearchAutoComplete='true']").length);
    jQuery('body').append('<link type="text/css" rel="stylesheet" href="http://image1.jmw.com.cn/public/css/search_tips.css">');
   
    jQuery("#keyword_fenci_m").keyup(function(){
      jQuery('#SearchAutoCompleteUl').remove();
      var searchKeyword = jQuery(this).val();
      if(searchKeyword=='')
      {
          jQuery('#SearchAutoCompleteUl').remove();return;
      }
      var id = jQuery(this).attr('id');
      var width=jQuery(this).outerWidth()-2;
      var height=jQuery(this).outerHeight()-1;
      var top_val=jQuery(this).offset().top;
      var count = height+top_val;
      var left_val=jQuery(this).offset().left;
      jQuery.ajax({
        type: "GET",
        url:'http://m.jmw.com.cn/MSearch.php',
        data:"keyword="+encodeURIComponent(searchKeyword),
        dataType:'jsonp',
        cache:false,
        jsonp:"jsonpcallback",
        success: function(html){
          jQuery('#SearchAutoCompleteUl').remove();
          if(html!='')  
          {
             jQuery('body').append(html);
             jQuery('#SearchAutoCompleteUl').attr("style",'width:'+width+'px;top:'+count+'px;left:'+left_val+'px;');
             jQuery('#SearchAutoCompleteUl').attr("chooseId",id);
          }
        }
      }); 
    });
    jQuery(window).resize(function(){
          if(jQuery("#keyword_fenci_m").length>0)
          {
            var left_val=jQuery("#keyword_fenci_m").offset().left;
            jQuery('#SearchAutoCompleteUl').css({            
                   'left':left_val
            });
          }
    });
    jQuery("#keyword_fenci_m").blur(function(){
      setTimeout(function() {
          jQuery('#SearchAutoCompleteUl').remove();
      }, 500);
    });
  }); 
}
function chooseContent(content)
{
   var chooseId = jQuery('#SearchAutoCompleteUl').attr('chooseId');
   jQuery("#"+chooseId).val(content).focus();
   jQuery('#SearchAutoCompleteUl').remove();
}
