var postsData = require('../../../data/post-data.js');


Page({
         data: {},

         onLoad: function (option) {

             var postId = option.id;
             var postdata = postsData.postsList[postId];
             this.setData({postdata: postdata});
             //   this.data.postdata = postdata; 在onLoad同步方法里面可以这样用
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