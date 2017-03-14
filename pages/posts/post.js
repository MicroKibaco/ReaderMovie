// pages/posts/post.js
Page({
         data: {},

         onLoad: function (options) {
             // 页面初始化 options为页面跳转所带来的参数

             var post_content = [

                 {
                     date: "2016-3-24",
                     title: "اختبار اللغة العربية",
                     content: "دفّة بالرّغم, وبالرغم وبالتحديد، مع جهة. مسارح يتمكن يتسنّى جهة ان, التي اتفاقية قد كان. فمرّ الوراء ان غير. شيء ما شمال أدوات بالجانب, لكل وشعار اتفاق بـ, بها الإنزال مواقعها في. أثره، الأوربيين تحت و, سقوط بالرغم الإتفاقية عن يبق, في هذا وجهان وإقامة مقاطعة.",
                     view_num: "112",
                     collec_num: "96",
                     author_img: "/images/avatar/logo_fail.png",
                     post_img: "/images/post/arabic_pyramid.jpg"

                 },

                 {
                     date: "2016-9-18",
                     title: "亚信科技有限公司",
                     content: "亚信是在美国纳斯达克成功上市的第一家中国高科技企业（NASDAQ交易代码：ASIA）。总部设在北京，在成都、广州、上海、杭州、南京、福州、沈阳等地设有分支机构和研发中心，年收入逾30亿人民币...",
                     view_num: "1102",
                     collec_num: "996",
                     author_img: "/images/avatar/weixin.png",
                     post_img: "/images/post/national_park.jpg"

                 }
             ];;;

             this.setData({post_key: post_content});

         }
     });
