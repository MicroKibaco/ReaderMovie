var app = getApp();

Page({
         data: {
             // 小程序总是会读取data对象作数据绑定,这个动作我们称之为动作A
             // 而这个动作A总是在onLoad方法执行完毕之后执行的

             data:{

                 inTheaters : {},
                 comingSoon : {},
                 top250 : {}

             }
         },

         onLoad: function () {


             var inTheatersUrl = app.globalData.doubanBase + "/v2/movie/in_theaters"+"?start=0&count=3";
             var comingSoonUrl = app.globalData.doubanBase + "/v2/movie/coming_soon"+"?start=0&count=3";
             var top250Url = app.globalData.doubanBase + "/v2/movie/top250"+"?start=0&count=3";

             this.getMovieListData(inTheatersUrl,"inTheaters");
             this.getMovieListData(comingSoonUrl,"comingSoon");
             this.getMovieListData(top250Url,"top250");
         },

         getMovieListData:function(url,settedKey){

             var that = this;
             wx.request({

                            url: url,
                           // data: {},// 提交数据用
                            method: 'GET',// OPTIONS GET HEAD POST PUT DEFAULT TRACE CONNECT
                            header: { // 设置请求的header
                                "Content-Type": "appication/json"
                            },

                            success: function (res) {

                                console.log("数据返回成功: " + res);
                                that.processDouBanData(res.data,settedKey);

                            },

                            fail: function (error) {

                                console.log("数据返回失败: " + error);

                            },


                        });

         },

                    processDouBanData : function(moviesDouban,settedKey){

                            var movies = [];

                            for(var idx in moviesDouban.subjects){

                               var subject = moviesDouban.subjects[idx];
                               var title = subject.title;
                               if(title.length >= 6){


                                   title = title.substring(0,6) + "...";


                               }

                               var temp = {


                                    title:title,
                                    average:subject.rating.average,
                                    coverageUrl:subject.images.large,
                                    movieId:subject.id,




                               };;;;


                               movies.push(temp);
                            

                            }

                              var readyData = {};
                              readyData [settedKey] = movies;
                              this.setData(readyData);
                        
                    }
     });