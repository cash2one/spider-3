/**
 * Created by tcsd on 2016/1/6.
 */


/*nav left 展开隐藏*/
$(function(){
var showcontents = document.getElementsByClassName('show_content');
var hidecontents = document.getElementsByClassName('hide_content');
var basics = document.getElementsByClassName('basic');
var moreInfors = document.getElementsByClassName('moreInfor');
for (var i = 0; i < showcontents.length; i++) {
    showcontents[i].index = i;
    showcontents[i].onclick = function () {
        hidecontents[this.index].style.display = 'block';
        basics[this.index].style.display = 'none';
        moreInfors[this.index].style.display = 'block';
        showcontents[this.index].style.display = 'none';
    }
    hidecontents[i].index = i;
    hidecontents[i].onclick = function () {
        hidecontents[this.index].style.display = 'none';
        basics[this.index].style.display = 'block';
        moreInfors[this.index].style.display = 'none';
        showcontents[this.index].style.display = 'block';
    }
}
    $(".moreInfor1").hide();
    $(".hide_content1").hide();
    $('.show_content1').click(function () {
        $('.hide_content1').show();
        $('.show_content1').hide();
        $('.moreInfor1').show();
        $('.basic1').hide();
    })
    $('.hide_content1').click(function () {
        $('.show_content1').show();
        $('.hide_content1').hide();
        $('.basic1').show();
        $('.moreInfor1').hide();
    })

    //$("#toggle").click(function() {
    //    $(this).text($("#content").is(":hidden") ? "收起" : "[更多]");
    //    $("#content").slideToggle();
    //    $(this).text($("#directory").is(":hidden") ? "[更多]" : "收起");
    //    $("#directory").slideToggle();
    //});
})


