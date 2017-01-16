 var oparseUrl = {};
    oparseUrl.Re1 = /list-h?(\d+)s(\d+)(i(\d+))?(p(\d+))?/i;
    oparseUrl.Re2 = /search\/(\d+)(-(\d+))?/;
    oparseUrl.Re3 = /keyword=([^&]*?)(&page=(\d+))?(&type=(\d))?$/i;
    oparseUrl.Re4 = /zt-(h)?(\d*)?(s(\d*))?(p(\d*))?$/i;
    oparseUrl.Re5 = /(meitu|tuce)\/p_(\d*).html?/i;
    oparseUrl.Re6 = /(mingshi|mingqi)\/(\w*)\/?(p_(\d*).html)?/i;
    
    oparseUrl.setSomes = function()
    {
        this.btype=0;  //大分类
        this.stype=0;  //小分类
        this.page =1;  //页码
        this.cate =0;  //公家装 1表示公装   对应 picType
        this.sour =0;  //1.代表 list  2.代表 搜索 3.关键词  4专题， 5 图册 6美图 7专题 8 直接搜索词 9名师名企
        this.sort ='';  //0代表默认以时间来排序
        this.home ='';   //户型
        this.hstyle='';  //风格
        this.harea = ''; //区域
        this.zone =''; //空间
        this.gj   =0 //构件
        this.hcolor =0; //颜色
        this.keyid =0;  //关键词id
        this.keyword =0;
        this.sort = 0; // 排序
        this.resurl='';
        this.pictype ='0';
        this.source =0;
        this.msmq = '';

    } 


    oparseUrl.parseurl = function(url) 
    {  
        var a;
        this.setSomes(); //初始化变量
        if(this.Re1.test(url))
        {   
            this.sour = 1;
            this.arr = this.Re1.exec(url);
            if(this.arr[1] !=undefined)
            {
                this.btype=this.arr[1];
            }
             if(this.arr[2] !=undefined)
            {
                this.stype = this.arr[2];
            }
             if(this.arr[4] !=undefined)
            {
                this.cate = this.arr[4];
            }
             if(this.arr[6] !=undefined)
            {
                this.page = this.arr[6];
            }
        }
        else if( this.Re2.test(url) )
        {
            this.sour =2;
            this.pictype =1;
            this.arr =this.Re2.exec(url);
            if(this.arr[1] !=undefined)
            {
                this.keyid = this.arr[1];
            }
            if(this.arr[3] !=undefined)
            {
                this.page = this.arr[3];
            }
        }
        else if (this.Re3.test(url))
        {
            this.sour = 8;
            this.arr =this.Re3.exec(url);
            if(this.arr[1] !=undefined)
            {
                this.keyword = this.arr[1];
            }
            if(this.arr[3] !=undefined)
            {
                this.page = this.arr[3];
            }
        }
        else if (this.Re4.test(url))
        {
            this.sour = 7;
            this.arr = this.Re4.exec(url);
            if(this.arr[2] !=undefined)
            {
                this.btype = this.arr[2];
            }
            if(this.arr[4] !=undefined)
            {
                this.stype = this.arr[4];
            }
            if(this.arr[6] !=undefined)
            {
                this.page = this.arr[6];
            }

        }else if(this.Re5.test(url))
        {
            this.sour = 5;
            this.arr = this.Re5.exec(url);
            if(this.arr[2] !=undefined)
            {
                this.page = this.arr[2];
            }
        }else if(this.Re6.test(url))
        {
            this.sour = 9;
            this.arr = this.Re6.exec(url); 
            if(this.arr[1] !== undefined)
            {
                this.source = this.arr[1];
            }
             if(this.arr[2] !== undefined)
            {
                this.msmq = this.arr[2];
            }
            if(this.arr[3] !== undefined)
            {
                this.page = this.arr[3];
            }
            
        }
        this.ruleurl();  //规整好url;
        if(this.sour){
            a=this.aaa();
        }else{
            a = url.split('?')[1];
        }
     
        return a;
    }
    //规整url   //需要在执行解析url后进行操作;     用于较正 原先老的url;
    oparseUrl.ruleurl = function()
    {
        if((this.sour == 1) && this.btype &&this.stype)
        {
            switch(this.btype)
            {

                case '1':
                    //console.log(this.btype);
                    this.zone = this.stype;
                    this.sour = 6;  //转为单张模式
                    this.pictype = 1;
                    break;
                case '2':
                    this.home = this.stype;
                    this.sour = 5; //转为套图模式
                    break;
                case '3':
                    this.hstyle = this.stype;
                    this.sour = 5;
                    break;
                case '6':
                   this.gj= this.stype;
                   this.sour = 6; //转为单张模式
                   this.pictype = 1;
                    break;
            }
            if(this.cate ==1 )
            {
                if(this.stype !=1)
                {
                   this.home = this.gj; 
                }
                this.gj='';
                this.zone='';
            }

        } 
    }
    //规整好老的url后，就可以得到条件
    oparseUrl.aaa = function()
    {   
        var str = '';

        if(this.sour ==2)
        {
            str = 'a15='+this.keyid+'&a10='+this.page;
        }
        else if(this.sour ==5)
        {
            str = 'a6='+this.hstyle+'&a3='+this.home+'&a10='+this.page;
        }
        else if(this.sour ==8)
        {
            str = 'a16='+this.keyword+'&a10='+this.page;
        }
        else if(this.sour == 9)
        {
            str = 't='+this.source+'&n='+this.msmq+'&a10='+this.page;
        }
        else 
        {
            str  = 'a1='+this.cate+'&a3='+this.home+'&a4='+this.zone+'&a5='+this.gj+'&a6='+this.hstyle+'&a7='+this.hcolor+'&a8='+this.harea+'&a9='+this.sort+'&a10='+this.page;
        }
       return  str;
    }  