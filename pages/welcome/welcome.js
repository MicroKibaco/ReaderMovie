// pages/welcome/weclome.js
Page({
  data:{},

         onTap: function (event) {
             // 页面跳转,为什么redirectTo不出现选项卡?
             //如果tab第一个页面,无论什么方式跳转都可行
             //奇淫技巧:可以在相对路径前，加少于5个"../",都可以跳转成功
             wx.switchTab({
                              url: "../posts/post"
                          });

             //  去掉两个页面的平行跳转
             //   wx.redirectTo({
             //                     url: "../posts/post",
             //                 })

         }
     });