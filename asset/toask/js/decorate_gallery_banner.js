jq(function(){
	jq('.nx_layer>a').each(function(index,ele){
		switch(index){
			case 0:
				jq(this).on('click',function(){
					clickStream.getCvParams('1_2_3_1');
				});
				break;
			case 1:
				jq(this).on('click',function(){
					clickStream.getCvParams('1_2_3_2');
				});
				break;
			case 2:
				jq(this).on('click',function(){
					clickStream.getCvParams('1_2_3_3');
				});
				break;
			case 3:
			jq(this).on('click',function(){
				clickStream.getCvParams('1_2_3_4');
			});
 			 break;
		}
	});
    jq('.xgt_layout_content_one>dd').each(function(index,ele){
        switch(index){
            case 0:
                jq(this).on('click',function(){
                    clickStream.getCvParams('1_2_3_16');
                });
                break;
            case 1:
                jq(this).on('click',function(){
                    clickStream.getCvParams('1_2_3_15');
                });
                break;
            case 2:
                jq(this).on('click',function(){
                    clickStream.getCvParams('1_2_3_14');
                });
                break;
            case 3:
                jq(this).on('click',function(){
                    clickStream.getCvParams('1_2_3_13');
                });
                break;
        }
    });
    jq('.xgt_layout_content_two>dd').each(function(index,ele){
        switch(index){
            case 0:
                jq(this).on('click',function(){
                    clickStream.getCvParams('1_2_3_21');
                });
                break;
            case 1:
                jq(this).on('click',function(){
                    clickStream.getCvParams('1_2_3_20');
                });
                break;
            case 2:
                jq(this).on('click',function(){
                    clickStream.getCvParams('1_2_3_19');
                });
                break;
            case 3:
                jq(this).on('click',function(){
                    clickStream.getCvParams('1_2_3_18');
                });
                break;
        }
    });
    jq('.xgt_layout_content_one>dt').click(function(){
        clickStream.getCvParams('1_2_3_12');
    });
    jq('.xgt_layout_content_two>dt').click(function(){
        clickStream.getCvParams('1_2_3_17');
    });
    jq('.xgt_photos_big').click(function(){
        clickStream.getCvParams('1_2_3_6');
    });
    jq('.xlut_first').click(function(){
        clickStream.getCvParams('1_2_3_7');
    });
    jq('.xgt_photos_small').each(function(index,ele){
        switch(index){
            case 0:
                jq(this).on('click',function(){
                    clickStream.getCvParams('1_2_3_8');
                });
                break;
            case 1:
                jq(this).on('click',function(){
                    clickStream.getCvParams('1_2_3_9');
                });
                break;
            case 2:
                jq(this).on('click',function(){
                    clickStream.getCvParams('1_2_3_10');
                });
                break;
            case 3:
                jq(this).on('click',function(){
                    clickStream.getCvParams('1_2_3_11');
                });
                break;
        }
    });

jq('.slider_font >li>h2>a').each(function(index,ele){
		switch (index)
		{
			case 0:
				jq(this).on('click',function(){
					clickStream.getCvParams('1_2_3_1');
				});
			case 1:
				jq(this).on('click',function(){
					clickStream.getCvParams('1_2_3_2');
				});
			case 2:
				jq(this).on('click',function(){
					clickStream.getCvParams('1_2_3_3');
				});
			case 3:
			jq(this).on('click',function(){
				clickStream.getCvParams('1_2_3_4');
			});
		}
	})
//finework_p.html
jq('.add2').each(function(index,ele){
		switch(index){
			case 0:
				jq(this).on('click',function(){
					clickStream.getCvParams('1_2_2_19');

				});
				break;
			case 1:
				jq(this).on('click',function(){
					clickStream.getCvParams('1_2_2_20');
				});
				break;
			
		
		}
	});	
//finework_c.html
jq('.add3').each(function(index,ele){
		switch(index){
			case 0:
				jq(this).on('click',function(){
					clickStream.getCvParams('1_2_2_19');
				});
				break;
			case 1:
				jq(this).on('click',function(){
					clickStream.getCvParams('1_2_2_20');
				});
				break;
		}
	});

});

//通栏广告位
    jq(".xgt_ad>a").click(function(){
  	try{clickStream.getCvParams('1_2_3_5');}catch(e){};
    });