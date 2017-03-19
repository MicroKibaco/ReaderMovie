function convertToStarsArray(stars) {

  var num = stars.toString().substring(0, 1);

  var array = [];

  for (var i = 1; i <= 5; i++) {

    if (i <= num) {

      array.push(1);

    }

    else {

      array.push(0);

    }

  }

  return array;


}



function convertToCastString(casts) {

  var castsjoin = "";

  for (var idx in casts) {
    castsjoin = castsjoin + casts[idx].name + " / ";
  }

  return castsjoin.substring(0, castsjoin.length - 2);

}

 function http(url,callBack){

             wx.request({

                            url: url,
                            method: 'GET',
                            header: { // 设置请求的header
                                "Content-Type": "json"
                            },

     

                            success: function (res) {

                                console.log("成功回调: "+res.data);
                                callBack(res.data);
                                

                            },

                            fail: function (error) {


                            },


                        });

}


function convertToCastInfos(casts) {

  var castsArray = [];
    for (var idx in casts) {

    var cast = {

      img: casts[idx].avatars ? casts[idx].avatars.large : "",
      name: casts[idx].name

    };
      castsArray.push(cast);

  }
  
  return castsArray;
}




module.exports = {

  convertToStarsArray: convertToStarsArray,

  http: http,

  convertToCastString:convertToCastString,

  convertToCastInfos:convertToCastInfos

};