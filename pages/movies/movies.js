var util = require('../../utils/util.js');

var app = getApp();

Page({
         data: {
             // 小程序总是会读取data对象作数据绑定,这个动作我们称之为动作A
             // 而这个动作A总是在onLoad方法执行完毕之后执行的

                 inTheaters: {},
                 comingSoon: {},
                 top250: {},
                 containerShow:true,
                 searchPanelShow:false,
                 searchResult:{}

             // 异步处理,初始化赋值

             
         },

         onLoad: function () {


             var inTheatersUrl = app.globalData.doubanBase + "/v2/movie/in_theaters"+"?start=0&count=3";
             var comingSoonUrl = app.globalData.doubanBase + "/v2/movie/coming_soon"+"?start=0&count=3";
             var top250Url = app.globalData.doubanBase + "/v2/movie/top250"+"?start=0&count=3";

             this.getMovieListData(inTheatersUrl,"inTheaters","正在热映");
             this.getMovieListData(comingSoonUrl,"comingSoon","即将上映");
             this.getMovieListData(top250Url,"top250","豆瓣Top250");
         },

         onBindFocus:function(event){

             this.setData({

                 containerShow:false,
                 searchPanelShow:true

             });

         },

         onCancleImgTap:function(event){

             this.setData({

                 containerShow:true,
                 searchPanelShow:false,
                 
                 // 清空数据
                 searchResult:{}
                 
             });

         },

         // bindchange 触发回车键,失去焦点,最新版官方文档维护此API
         // bindburl 失去焦点
         onBindBlur:function(event){

              var text = event.detail.value;
              var searchUrl = app.globalData.doubanBase +  "/v2/movie/search?q=" + text;
              console.log(searchUrl);
              this.getMovieListData(searchUrl,"searchResult","");


         },

         onMoreTap:function(event){

            var cagetory = event.currentTarget.dataset.category;
             wx.navigateTo(

                {
                    url:"more-movie/more-movie?cagetory="+cagetory,
                }

             );

         },

         onMovieTap:function(event){

             wx.navigateTo({

                 url:"movie-detail/movie-detail",

             });

         },

         getMovieListData:function(url,settedKey,cagetoryTitle){

             var that = this;
             wx.request({

                            url: url,
                           // data: {},// 提交数据用
                            method: 'GET',// OPTIONS GET HEAD POST PUT DEFAULT TRACE CONNECT
                            header: { // 设置请求的header
                                "Content-Type": "appication/json"
                            },

                            success: function (res) {

                                that.processDouBanData(res.data,settedKey,cagetoryTitle);

                            },

                            fail: function (error) {

                            },


                        });

         },

                    processDouBanData : function(moviesDouban,settedKey,cagetoryTitle){

                            var movies = [];

                            for(var idx in moviesDouban.subjects){

                               var subject = moviesDouban.subjects[idx];
                               var title = subject.title;
                               var star = subject.rating.stars;
                               if(title.length >= 6){


                                   title = title.substring(0,6) + "...";


                               }

                               var temp = {

                                title:title,
                                stars:util.convertToStarsArray(star),
                                average:subject.rating.average,
                                coverageUrl:subject.images.large,
                                movieId:subject.id,
                                    
                               };


                               movies.push(temp);
                            

                            }

                              var readyData = {};
                              readyData [settedKey] = {
                                movies:movies,
                                cagetoryTitle:cagetoryTitle
                            };
                               this.setData(readyData);
                        
                    }
     });