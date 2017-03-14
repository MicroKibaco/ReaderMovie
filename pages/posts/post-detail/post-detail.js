var postsData = require('../../../data/post-data.js');


Page({
         data: {},

         onLoad: function (option) {

             var postId = option.id;
             var postdata = postsData.postsList[postId];
             this.setData({postdata: postdata});
             //   小程序暂且不支持webview
             //   this.data.postdata = postdata; 在onLoad同步方法里面可以这样用

             //wx.setStorageSync('String',"小木箱");

             //修改缓存
             wx.setStorageSync('key', {
                 game: "Android开发",
                 developer: "杨正友"
             });

         },

         onCollectionTap: function (event) {

             var game = wx.getStorageSync('key');
             console.log("game: " + game);

         },

         onShareTap: function (event) {

             wx.removeStorageSyncs('key');

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