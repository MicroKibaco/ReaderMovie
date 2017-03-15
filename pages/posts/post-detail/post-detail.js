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

             this.showToast(postsCollected, postCollected);

         },

         showToast: function (postsCollected, postCollected) {

             //设置缓存
             wx.setStorageSync("posts_collected", postsCollected);
             //绑定数据
             this.setData({collected: postCollected});

             wx.showToast({
                              title: postCollected ? "收藏成功" : "取消成功",
                              duration: 1000,
                              icon: "success",

                          });

         },

         showModal: function (postsCollected, postCollected) {
             var that = this;
             wx.showModal({
                              title: "收藏",
                              content: postCollected ? "收藏该文章?" : "取消收藏该文章?",
                              showCancel: "true",
                              cancelText: "取消",
                              cancelColor: "#333",
                              confirmText: "确认",
                              confirmColor: '#405f80',
                              success: function (res) {
                                  if (res.confirm) {
                                      //设置缓存
                                      wx.setStorageSync("posts_collected", postsCollected);
                                      //绑定数据
                                      that.setData({collected: postCollected});
                                  }
                              }
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