var postsData = require('../../../data/post-data.js');


Page({
         data: {},

         onLoad: function (option) {

             var postId = option.id;
             this.data.currentPostId = postId;
             var postdata = postsData.postsList[postId];
             this.setData({postdata: postdata});
             //   小程序暂且不支持webview
             //   this.data.postdata = postdata; 在onLoad同步方法里面可以这样用
             var postsCollected = wx.getStorageSync("posts_collected");
             if (postsCollected) {

                 var postCollected = postsCollected[postId];

                 this.setData({
                                  collected: postCollected
                              });

             } else {
                 var postsCollected = {};
                 postsCollected[postId] = false;
                 wx.setStorageSync("posts_collected", postsCollected);

             }
         },

         // 缓存上限不能超过10M
         onShareTap: function (event) {


         },

         onCollectionTap: function (event) {

             var postsCollected = wx.getStorageSync("posts_collected");
             var postCollected = postsCollected[this.data.currentPostId];

             //收藏变为未收藏
             postCollected = !postCollected;
             postsCollected[this.data.currentPostId] = postCollected;

             //设置缓存
             wx.setStorageSyncset("posts_collected", postsCollected);

             //绑定数据
             this.setData({
                              collected: postsCollected
                          });

         },

         onShow: function () {

         },
         onHide: function () {

         },

         onReady: function () {

         },

         UnLoad: function () {

         }

     });