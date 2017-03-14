// pages/welcome/weclome.js
Page({
  data:{},

         onTap: function (event) {
             //页面跳转
             // wx.navigateTo({
             // url: "../posts/post"
             // });

             // 去掉两个页面的平行跳转
             wx.redirectTo({
                               url: "../posts/post",
                           })
         }
     });