// pages/posts/post.js
Page({
         data: {},

         imagePath: "/images/...",

         process: function () {

             var data = "Nov 8 2016";

         },
         
         onLoad: function (options) {
             // 页面初始化 options为页面跳转所带来的参数

             var post_content1 = {
                 date: "Sept 18 2016",
                 title: "اختبار اللغة العربية",
                 content: "دفّة بالرّغم, وبالرغم وبالتحديد، مع جهة. مسارح يتمكن يتسنّى جهة ان, التي اتفاقية قد كان. فمرّ الوراء ان غير. شيء ما شمال أدوات بالجانب, لكل وشعار اتفاق بـ, بها الإنزال مواقعها في. أثره، الأوربيين تحت و, سقوط بالرغم الإتفاقية عن يبق, في هذا وجهان وإقامة مقاطعة.",
                 view_num: "112",
                 collec_num: "96",
                 img: {
                     author_img: "/images/avatar/logo_fail.png",
                     post_img: "/images/post/arabic_pyramid.jpg"
                 },
                 image_condition: true
             };;;

             this.setData(post_content1);

         },
         onReady: function () {
             // 页面渲染完成
             console.log("onReady");
         },
         onShow: function () {
             // 页面显示
             console.log("onShow");
         },
         onHide: function () {
             // 页面隐藏
             console.log("onHide");
         },
         onUnload: function () {
             // 页面关闭
             console.log("onUnload");
         }
     });;;