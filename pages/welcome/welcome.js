// pages/welcome/weclome.js
Page({
  data:{},

         onTap: function () {
             //页面跳转
             // wx.navigateTo({
             // url: "../posts/post"
             // });

             // 去掉两个页面的平行跳转
             wx.redirectTo({
                               url: "../posts/post"
                           });
         },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
      console.log("Weclome page is onLoad");
  },
  onReady:function(){
    // 页面渲染完成
      console.log("Weclome page is onReady");
  },
  onShow:function(){
    // 页面显示
      console.log("Weclome page is onShow");
  },
  onHide:function(){
    // 页面隐藏
      console.log("Weclome page is onHide");
  },
  onUnload:function(){
    // 页面关闭
      console.log("Weclome page is onUnload");
  }
     });