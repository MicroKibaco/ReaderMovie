// pages/posts/post.js
// 只能用相对路径
var postsData = require('../../data/post-data.js');

Page({
         data: {
             //小程序总是会读取data对象作数据绑定,这个动作我们称之为动作A
             //而这个动作A总是在onLoad方法执行完毕之后执行的
         },

         onLoad: function () {
             // 页面初始化 options为页面跳转所带来的参数

             this.setData({post_key: postsData.postsList});

         }
     });
