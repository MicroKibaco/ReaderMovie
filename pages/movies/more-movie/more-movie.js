Page({
  data:{

    navigationbartitle:"",

  },
  onLoad:function(options){

    var cagetory = options.cagetory;
   //全局变量 缓存 url anglarJS发射事件和接受事件 传参,实现页面的跳转
   this.data.navigationbartitle = cagetory;
   
  },


  //页面渲染完毕执行的方法
  onReady:function(event){

      wx.setNavigationBarTitle({

            title: this.data.navigationbartitle,
            success: function(res){
        
            } 
        });

  }
});;;;;;;;;