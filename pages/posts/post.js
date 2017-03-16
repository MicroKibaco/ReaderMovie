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

         },

         // currentTarget和target的区别
         // currentTarget指的是事件捕获的组件 , target指的是当前点击的组件
         // currentTarget指的是swiper组件 ,target指的是image组件
         // catchTap 可以阻止事件的冒泡  bindTap不会阻止事件冒泡
         onPostTap: function (event) {

             var postId = event.currentTarget.dataset.postid;

             wx.navigateTo({
                               url: "post-detail/post-detail?id=" + postId

                           });

         },
         onSwiperTap: function (event) {

             var postId = event.target.dataset.postid;

             wx.navigateTo({
                               url: "post-detail/post-detail?id=" + postId

                           });



         }
     });
