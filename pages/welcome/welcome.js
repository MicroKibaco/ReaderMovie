// pages/welcome/weclome.js
Page({
  data:{},

         onTap: function (event) {
             // 页面跳转,为什么redirectTo不出现选项卡?
             //如果tab第一个页面,无论什么方式跳转都可行
             wx.switchTab({
                              url: "../posts/post"
                          });

             //  去掉两个页面的平行跳转
             //   wx.redirectTo({
             //                     url: "../posts/post",
             //                 })

         }
     });