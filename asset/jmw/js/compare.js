/* $Id: compare.js 15469  xxq $ */
var Compare = new Object();

Compare = {
  add : function(goodsId, goodsName, type)
  {
		if (document.readyState != "complete") {
			var isIE = !!window.ActiveXObject;
			var isIE6 = isIE&&!window.XMLHttpRequest;
			
			if (isIE6) {
				window.location.reload();
			}
			
			return;
		}

    var count = 0;

    for (var k in this.data)
    {
      if (typeof(this.data[k]) == "function")
        continue;
      if (this.data[k].t != type) {
        alert(goods_type_different.replace("%s", goodsName));
        return;
      }
      count++;
    }

    if(count > 2){
      alert(count_limit);
      document.getElementById(goodsId).checked=false;
      return;
    }

    // if (this.data[goodsId])
    // {		
		  // alert(exist.replace("%s",goodsName));
	   //  return;
    // }
    // else
    // {
      this.data[goodsId] = {n:goodsName,t:type,m:goodsId};
    // }
    this.save();
    this.init();
  },
  relocation : function()
  {
		if (document.readyState != "complete") {
			return;
		}

    if (this.compareBox.style.display != "") return;
    var diffY = Math.max(document.documentElement.scrollTop,document.body.scrollTop);

    var percent = .2*(diffY - this.lastScrollY);
    if(percent > 0)
      percent = Math.ceil(percent);
    else
      percent = Math.floor(percent);
    this.compareBox.style.top = parseInt(this.compareBox.style.top)+ percent + "px";

    this.lastScrollY = this.lastScrollY + percent;
  },
  init : function(){
    this.data = new Object();
    var cookieValue = document.getCookie("compareItems");
    if (cookieValue != null) {
      this.data = cookieValue.parseJSON();
    }
    if (!this.compareBox)
    {
      var button_compare='';
      this.compareBox = document.createElement("DIV");
      var submitBtn = document.createElement("INPUT");
      this.app = document.createElement("DIV");
      this.compareList = document.createElement("UL");
      this.compareBox.id = "compareBox";
      this.compareBox.style.display = "none";
      this.compareBox.align = "center";
      this.compareList.id = "compareList";
      this.app.className="compare_box2";
      submitBtn.type = "button";
      submitBtn.value = button_compare;
      this.app.appendChild(this.compareList);
      this.app.appendChild(submitBtn);
      this.compareBox.appendChild(this.app);
      submitBtn.onclick = function() {
        var cookieValue = document.getCookie("compareItems");
        var obj = cookieValue.parseJSON();
        var urls ='';
        var i = 0;
        for(var k in obj)
        {
          if(typeof(obj[k])=="function")
          continue;
          if(i==0)
            urls += k;
          else
            urls += "," + k;
          i++;
        }
        if(i<=1)
        {
          alert(compare_no_goods);
          return ;
        }
		    if(i>3)
        {
          alert(count_limit);
          return ;
        }
		    url = "http://search.jmw.com.cn/compare.php?id="+urls;
        window.open(url,target="_blank");
      }
      document.body.appendChild(this.compareBox);
    }
    this.compareList.innerHTML = "";
    var self = this;
    for (var key in this.data)
    {
      if(typeof(this.data[key]) == "function")
        continue;
      var li = document.createElement("LI");
      var span = document.createElement("SPAN");
      span.id = "m_"+this.data[key].m;
      span.style.overflow = "hidden";
      span.style.width = "130px";
      span.style.height = "20px";
      span.style.display = "block";
      span.innerHTML = this.data[key].n;
      li.appendChild(span);
      li.style.listStyle = "none";
      var delBtn = document.createElement("IMG");
      delBtn.src = "http://image1.jmw.com.cn/search/images/drop.gif";
      delBtn.className = key;
      delBtn.onclick = function(){
        document.getElementById(this.className).checked=false;        
        document.getElementById("compareList").removeChild(this.parentNode);
        delete self.data[this.className];
        self.save();
        self.init();
      }
      li.insertBefore(delBtn,li.childNodes[0]);
      this.compareList.appendChild(li);
    }
    if (this.compareList.childNodes.length > 0)
    {
      this.compareBox.style.display = "";
      // this.timer = window.setInterval(this.relocation.bind(this), 50);
    }
    else
    {
      this.compareBox.style.display = "none";
      window.clearInterval(this.timer);
      this.timer = 0;
    }
  },
  save : function()
  {
		if (document.readyState != "complete") {
			return;
		}

    var date = new Date();
    date.setTime(date.getTime() + 99999999);
    document.setCookie("compareItems", toJSONString(this.data));
  },
  reset : function(goodsId)
  {
    if (this.data[goodsId])
    {   
      delete(this.data[goodsId]);
      return;
    }
  },
  num : function()
  {
    var count = 1;

    for (var k in this.data)
    {
      if (typeof(this.data[k]) == "function")
        continue;
      count++;
    }
    return count;
  },
  lastScrollY : 0
}
