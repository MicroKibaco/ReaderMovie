var util = require('../../../utils/util.js');
var app = getApp();

Page({
  data:{
      movie:{}
  },
  onLoad:function(options){

      var movieId = options.id;
      var url = app.globalData.doubanBase + "/v2/movie/subject/" + movieId;
      util.http(url,this.processDoubanData);

      
  },


  // 查看图片
  viewMoviePostImg: function(e){
        console.log("viewMoviePostImg: "+e);
         var src = e.currentTarget.dataset.src;
         wx.previewImage({

             current:src, // 当前图片显示的http链接
             urls: [src]  // 需要预览的图片http链接列表


         });

    },

  processDoubanData:function(data){

      if(!data){

          return;

      }

      var director = {

          avatars: "",
          id: "",
          name: ""

      };


      if(data.directors[0] != null){

          if(data.directors[0].avatars != null) {

                director.avatars = data.directors[0].avatars.large;

          }

            director.id = data.directors[0].id;
            director.name = data.directors[0].name;

      }

      var movie = {

        movieImg: data.images ? data.images.large:"",
        country: data.countries[0],
        title:data.title,
        originalTitle:data.original_title,
        wishCount:data.wish_count,
        commentsCount:data.comments_count,
        year:data.year,
        genres:data.genres.join(", "),
        stars:util.convertToStarsArray(data.rating.stars),
        score: data.rating.average,
        director:director,
        casts:util.convertToCastString(data.casts),
        castsInfo:util.convertToCastInfos(data.casts),
        summary:data.summary

      };


      this.setData({

          movie:movie

      });

  },

  
});