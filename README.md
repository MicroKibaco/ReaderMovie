# 微信小程序
> 小程序的四大特征：无需下载、触手可及、随用随走、无需卸载。

## 项目目标
##### 最大程度的解决小程序爱好者从0基础到入门,小程序入门需要有JS,CSS3 FlexBox和ES6基础,想尽早尝试小程序的小伙伴们赶紧下手学习基础语法吧

## 特点
##### 小程序适用于低频应用,应用简单,用完即走,性能要求低的开发,类似于一些推送,嵌webview,视频直播和手机游戏应用,小程序还没有那么大的能耐哦!

## 开发环境
##### 官方推荐IDEA:web开发者工具,小编推荐Egret Wing3

##### 非常感谢 小楼昨夜又秋分 微信小程序教学资源支持

## 效果图

[![小程序](http://www.android-gems.com/badge)](http://www.android-gems.com/badge)

##### so,看一下实现效果图吧!
<div  align="center">  
<img src="/images/document/weclome.png" width="200px" height="360px" />
<img src="/images/document/home.png" width="200px" height="360px"/>
<img src="/images/document/playmusic.png" width="200px" height="360px"/>
<img src="/images/document/share.png" width="200px" height="360px"/>
</div>


<div  align="center">  
<img src="/images/document/viewpreview.png" width="200px" height="360px" />
<img src="/images/document/movielist.png" width="200px" height="360px"/>
<img src="/images/document/movie_search.png" width="200px" height="360px"/>
<img src="/images/document/movie-info.png" width="200px" height="360px"/>
</div>

## 常见问题

 1. ###### 为什么会出现“脚本错误或者未正确调用Page（）”的错误提示
 
 <img src="/images/document/page_error.png" />

```
出现这个错误的原因通常是因为对应页面的js文件里，没有调用Page方法。即使js文件里没有任何代码，也需要在js里添加一个空的 Page（{ }）。注意Page的P要大写。
```



2. ###### 为什么会出现“Expecting ‘String，‘Number，‘NULL，‘True....’”’’的错误提示？
<img src="/images/document/invalid-error.png" />

```
出现这个错误的原因在于对应页面的json文件没有加入{ }。即使json文件里没有任何内容，也需要加入一个{ }，作为默认代码。json文件不允许出现注释代码，如果有注释的代码，同样会报这个错误
```



3. ###### 为什么出现“ Failed to load image http://2110932784.debug.open.weixin.qq.com/pages/posts/images/post/crab.png : the server responded with a status of 404 (HTTP/1.1 404 Not Found) From server 127.0.0.1”
<img src="/images/document/faild_load.png" />

```
出现类似的这种错误，通常是由于图片的路径不对而引起的。外网的图片，我们这里不再说了，因为没有相对和绝对的路径概念，如果报错了就是你外网的图片url错了。我们说说本地的图片路径问题。请注意，如果图片路径被写在一个js文件A里，而B引用了这个js文件，那么图片的路径必须是相对于B的相对路径。所以，最好在公共的js文件里使用绝对路径。还有一点，提醒大家，小程序对资源文件，比如图片是有缓存的，这个大家要注意
```  
  
  
  
4. ###### 出现please do not register multiple Pages in undefined.js 错误
  <img src="/images/document/undenfinedjs.png" />
  
  ```
这多半是在 app.js里添加了Page（）。app.js是应用程序级别的不能用Page（），Page*（）只能用于页面的js文件中。app.js请使用App（）
```



5. ###### 为什么在真机预览时，会出现“缺少文件，错误信息：error:iconPath=.......file not found?”

<img src="/images/document/FileNotFound.png" />


```
app.json的tabBar选项中，list下的iconPath出现了绝对路径 “ / ”比如:
```


``` javascript
  "list": [{
      "pagePath": "pages/movies/movies",
      "iconPath": "/images/tab/dianying.png",
      "selectedIconPath": "images/tab/dianying_hl.png",
      "text": "电影"
    }, {
        "pagePath": "pages/setting/setting",
        "iconPath": "/images/tab/set.png",
        "selectedIconPath": "images/tab/set_hl.png",
        "text": "设置"
      }],   
```

## 预览图
##### 接下来,我们就来看看aiReader的演示图吧!
<img src="/images/document/preview.gif" />

## 其他问题
### 作者信息:
* ##### 小木箱

### 文档参考:

* ##### [小楼昨夜又秋分](https://zhuanlan.zhihu.com/oldtimes)
* ##### [微信公众平台Q&A](http://developers.weixin.qq.com/home?tab=1&labels=&lang=zh_CN&token=)