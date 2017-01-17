	var gpm;
    $(function(){
        gpm = new GlobalProvincesModule();
        gpm.def_province = ["省", "省"];
        gpm.def_city1 = ["市", "市"];
        gpm.initProvince(get("s1"));
        gpm.initProvince(get("s1_1"));
        $('#zxys').click(function(){
            $('.zx').show();
            $('.layerout').show();
        })
        $('.closeX').click(function(){
            $('.zx').hide();
            $('.layerout').hide();
            $('.detail').hide();
        })
    
    function checkForm() {
        var tel = $('#zxd-tel').val(),
            province = $('#s1').val(),
            oarea = $.trim($('[name=oarea]').val()),
            city = $('#s2').val(); 
        if (province == '省') {
            msgalertn('请填写您所在的省');
            return false;
        }
        if (city == '市') {
            msgalertn('请填写您所在的市');
            return false;
        }
        if ($('[name=oarea]').length && (!oarea || oarea < 0 || (parseFloat(oarea) + "") != (oarea + ''))) {
            msgalertn('请您填写真实的房屋面积');
            return false;
        }
        if ((oarea < 5 && oarea >= 0) || oarea > 1000) {
            msgalertn("房屋面积必须在5-1000范围");
            return false;
        }
        var telRegexp = /^(1[3|4|5|7|8])[\d]{9}$/;
        if (!telRegexp.test(tel)) {
            msgalertn('请填写正确的联系电话');
            return false;
        } 
        return true;
    }
    var data = {dangci: "jianzhuang",modeltype: 2,nowstep: 1,town: "",type: "detail"};
        data.onFirstStepEnd = function(resultData) {
            doubleClick = false;
            var shi = 0;
            var ting = 0;
            var chu = 0;
            var wei = 0;
            var yang = 0;
            for(var i = 0; i< resultData.res.length; i++) {
                if(resultData.res[i].key ==='shi_arr[]')
                {
                    shi += resultData.priceInfo[i].price;
                }
                else if(resultData.res[i].key ==='ting_arr[]')
                {
                    ting += resultData.priceInfo[i].price;
                }
                else if(resultData.res[i].key ==='chu_arr[]')
                {
                    chu += resultData.priceInfo[i].price;
                }
                else if(resultData.res[i].key ==='wei_arr[]')
                {
                    wei += resultData.priceInfo[i].price;
                }
                else if(resultData.res[i].key ==='yangtai_arr[]')
                {
                    yang += resultData.priceInfo[i].price;
                }
            }
        }
        var doubleClick = false;
       $('#zxd-form-submit').bind('click', function(){
                if(doubleClick){
                    return;
                }
                doubleClick = true;
                try {
                    _hmt && _hmt.push(['_trackEvent', 'zb', 'submit', $('.data-ptag').attr('data-ptag')]);
                } catch (e) {

                }
                var data = {dangci: "jianzhuang",modeltype: 2,nowstep: 1,town: "",type: "detail"};
                data.onFirstStepEnd = function(resultData) {
                    doubleClick = false;
                    var shi = 0;
                    var ting = 0;
                    var chu = 0;
                    var wei = 0;
                    var yang = 0;
                    for(var i = 0; i< resultData.res.length; i++) {
                        if(resultData.res[i].key ==='shi_arr[]')
                        {
                            shi += resultData.priceInfo[i].price;
                        }
                        else if(resultData.res[i].key ==='ting_arr[]')
                        {
                            ting += resultData.priceInfo[i].price;
                        }
                        else if(resultData.res[i].key ==='chu_arr[]')
                        {
                            chu += resultData.priceInfo[i].price;
                        }
                        else if(resultData.res[i].key ==='wei_arr[]')
                        {
                            wei += resultData.priceInfo[i].price;
                        }
                        else if(resultData.res[i].key ==='yangtai_arr[]')
                        {
                            yang += resultData.priceInfo[i].price;
                        }
                    }
                    var other=resultData.priceInfo[resultData.priceInfo.length - 1].price;
                    var totle=parseInt(resultData.banbaoPrice / 1000) / 10;
                    $('#shi').html(shi);
                    $('#ting').html(ting);
                    $('#chu').html(chu);
                    $('#wei').html(wei);
                    $('#yang').html(yang);
                    $('#other').html(other);
                    $('#totle').html(totle);
                    $('.zx').hide();
                    $('.detail').show();
                    $('.layerout').show();
            }
            if(checkForm()){
                    (typeof clickStream !== 'undefined') && clickStream.getCvParams($('.data-ptag').attr('data-ptag'));
                    data.phone = $('#zxd-tel').val();
                    data.ptag = $('.data-ptag').attr('data-ptag');
                    data.shen = $('#s1').val();
                    data.city = $('#s2').val();
                    data.square = $('#oarea').val();
                    var sendMsg = new tender();
                    sendMsg.init(data);
            }else{
                doubleClick = false;
            }
		})

})










