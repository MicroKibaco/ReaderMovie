var util = require('../../../utils/util.js');

var app = getApp();

Page({
  data:{

    movies:{},
    navigationbartitle:"",
    requestUrl: "",
    totalCount: 0,
    isEmpty: true

  },

         
  //页面渲染完毕执行的方法
  onReady:function(event){

      wx.setNavigationBarTitle({

            title: this.data.navigationbartitle,
            
        });

  },

  onLoad:function(options){

    var cagetory = options.cagetory;
   //全局变量 缓存 url anglarJS发射事件和接受事件 传参,实现页面的跳转
   this.data.navigationbartitle = cagetory;
   var dataUrl = "";
   switch(cagetory){

     case "正在热映":

        dataUrl = app.globalData.doubanBase + "/v2/movie/in_theaters";

        break;

      case "即将上映":

        dataUrl = app.globalData.doubanBase + "/v2/movie/coming_soon";

        break;

      case "豆瓣Top250":

        dataUrl = app.globalData.doubanBase + "/v2/movie/top250";

        break;

   }

        this.data.requestUrl = dataUrl;
        util.http(dataUrl,this.processDouBanData);
   
  },

    onReachBottom:function(event){

      var nextUrl = this.data.requestUrl + "?start=" + this.data.totalCount + "&count=20";
      
      util.http(nextUrl,this.processDouBanData);

      wx.showNavigationBarLoading();
      console.log("加载更多...");

  },

   onMovieTap:function(event){

             var movieId = event.currentTarget.dataset.movieid;
             wx.navigateTo({

                 url:"../movie-detail/movie-detail?id="+movieId,

             });

    },

   onPullDownRefresh: function(event) {

      var refreshUrl = this.data.requestUrl + "?start=0&count=20";
      this.data.movies = {};
      this.data.isEmpty = true;
      this.data.totalCount = 0;
      util.http(refreshUrl,this.processDouBanData);
      wx.showNavigationBarLoading();

   },

    processDouBanData: function(moviesDouban){
    
                           var movies = [];

                            for(var idx in moviesDouban.subjects){

                               var subject = moviesDouban.subjects[idx];
                               var title = subject.title;
                               var star = subject.rating.stars;
                               if(title.length >= 6){


                                   title = title.substring(0,6) + "...";


                               }

                              // [1,1,1,0,0] [1,1,1,1,1]
                               var temp = {

                                title:title,
                                stars:util.convertToStarsArray(star),
                                average:subject.rating.average,
                                coverageUrl:subject.images.large,
                                movieId:subject.id,
                                    
                               };


                               movies.push(temp);
                            

                            }

        var totalMovies = {};
        // 如果要绑定新加载的数据,那么就得和旧的数据加载在一起
                      
                            if(!this.data.isEmpty){

                              totalMovies = this.data.movies.concat(movies);

                            }else {

                              totalMovies = movies;
                              this.data.isEmpty = false;

                            }


                             this.setData({
                                  movies:totalMovies
                             });
                              wx.hideNavigationBarLoading();
                              wx.stopPullDownRefresh();
                              this.data.totalCount += 20;
                        
                    }


  },


);