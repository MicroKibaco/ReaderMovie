var postsData = require('../../../data/post-data.js');


Page({
         data: {
             isPlayingMusic: false
         },

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

             var itemList = [
                 "分享给微信好友",
                 "分享到朋友圈",
                 "分享给联系人",
                 "分享到QQ",
                 "分享到QQ空间",
                 "分享到微博"];

             wx.showActionSheet({
                                    itemList: itemList,

                                    itemColor: "#405f80",

                                    success: function (res) {
                                        // res.cancel 用户是不是点击了取消按钮
                                        // 数组元素的序号,从0开始
                                        wx.showModal({
                                                         title: "用户 " + itemList[res.tapIndex],
                                                         content: "用户是否取消? " + res.cancel
                                                                  + "现在还无法实现分享功能,什么时候能实现呢?"
                                                     });

                                    }
                                });

         },

         onCollectionTap: function (event) {

             //同步方法:
             this.getpostsCollectedSyc();

             //异步方法:
             //this.getpostsCollectedAsy();

         },

         onMusicTap: function (event) {

             var isPlayingMusic = this.data.isPlayingMusic;

             var currentPostId = this.data.currentPostId;

             var postData = postsData.postsList[currentPostId];

             if (isPlayingMusic) {

                 wx.pauseBackgroundAudio();

                 this.setData({
                                  isPlayingMusic: false
                              });

             } else {

                 wx.playBackgroundAudio({
                                            dataUrl: postData.music.url,
                                            title: postData.music.title,
                                            coverImgUrl: postData.music.coverImg
                                    });

                 this.setData({
                                  isPlayingMusic: true
                              });

             }

         },

         getpostsCollectedSyc: function () {
                
             var postsCollected = wx.getStorageSync("posts_collected");
             var postCollected = postsCollected[this.data.currentPostId];

             //收藏变为未收藏
             postCollected = !postCollected;
             postsCollected[this.data.currentPostId] = postCollected;

             this.showToast(postsCollected, postCollected);

         },

         getpostsCollectedAsy: function () {

             var that = this;
             wx.getStorage({
                               key: "posts_collected",
                               success: function (res) {
                                   var postsCollected = res.data;
                                   var postCollected = postsCollected[that.data.currentPostId];

                                   //收藏变为未收藏
                                   postCollected = !postCollected;
                                   postsCollected[that.data.currentPostId] = postCollected;

                                   that.showToast(postsCollected, postCollected);
                               }
                           });
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



     });