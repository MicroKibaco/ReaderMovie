var app = getApp();

Page({
         data: {
             // 小程序总是会读取data对象作数据绑定,这个动作我们称之为动作A
             // 而这个动作A总是在onLoad方法执行完毕之后执行的
         },

         onLoad: function () {


             var inTheatersUrl = app.globalData.doubanBase + "/v2/movie/in_theaters";
             var comingSoonUrl = app.globalData.doubanBase + "/v2/movie/coming_soon";
             var top250Url = app.globalData.doubanBase + "/v2/movie/top250";

             this.getMovieListData(inTheatersUrl);
             this.getMovieListData(comingSoonUrl);
             this.getMovieListData(top250Url);
         },

         getMovieListData:function(url){

                
             wx.request({

                            url: url,
                           // data: {},// 提交数据用
                            method: 'GET',// OPTIONS GET HEAD POST PUT DEFAULT TRACE CONNECT
                            header: { // 设置请求的header
                                "Content-Type": "appication/json"
                            },

                            success: function (res) {

                                console.log("数据返回成功: " + res);
                            },

                            fail: function (error) {

                                console.log("数据返回失败: " + error);

                            },


                        });

         }
     });