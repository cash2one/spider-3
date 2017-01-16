var popLunbo;

$(function(){

//页面上只会存在一个激活的弹窗轮播，所以所有弹窗都是直接操纵这一个对象了
popLunbo = {
    boxObj: null,
    imgsObj: null,
    index: 0,
    init:function(boxObj,imgsObj) {
        popLunbo.boxObj = boxObj;
        popLunbo.imgsObj = imgsObj;

        //加事件（鼠标悬停时停止播放，鼠标移出时开始自动播放）
		$('.poplunbo-btn-prev').unbind();//清干净事件
		$('.poplunbo-btn-next').unbind();//清干净事件
        //设定向左、向右按钮
        $('.poplunbo-btn-prev').click(function(){
            popLunbo.goprev();
        });
        $('.poplunbo-btn-next').click(function(){
            popLunbo.gonext();
        });
        popLunbo.go(0);//初始化，显示第一张

		//右上角关闭按钮
		boxObj.find('.js-close').click(function(){
			$(this).parents('.pop-lunbo-box').hide();
			$('.popmask').hide();
		});


	},
    goprev:function() {//上一张
        popLunbo.index--;
        if (popLunbo.index < 0) {popLunbo.index = popLunbo.imgsObj.length-1;}
        popLunbo.go(popLunbo.index);
    },

    gonext:function() {//下一张
		//console.log('ddxxxxxxxx-55')
        popLunbo.index++;
        if (popLunbo.index == popLunbo.imgsObj.length) {popLunbo.index = 0;}
        popLunbo.go(popLunbo.index);
    },
    go:function(idx) {
        popLunbo.index = idx;
        popLunbo.imgsObj.eq(idx).fadeIn(300).siblings().hide();
        //popLunbo.imgsObj.eq(idx).fadeIn(300);
        //console.log(idx);
        $('.pagination-bullet').eq(idx).addClass('active').siblings().removeClass('active');
    }
};





});
