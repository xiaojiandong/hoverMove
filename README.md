# hoverMove
js控制悬浮框跟随鼠标移动

## 效果图：
![image](https://github.com/xiaojiandong/hoverMove/blob/master/img/move-view.png)

## js代码：
```js
    $('.banner-img').each(function(index , value){
        $(value).attr('src' , overMaskInfo[index].img);
    });

      $('.js_box').bind('mouseover',function(){
          var currentBoxObj=$(this);
          var currentBoxPos=currentBoxObj.position();
          var currentIndex = currentBoxObj.index();
          $(".boxBor").html(overMaskInfo[currentIndex].content);
          $(".boxBor").stop(false,false).animate({
//                opacity : 0.6,
                left : currentBoxPos.left+5,
                top : currentBoxPos.top+5,
                width : currentBoxObj.width(),
                height : currentBoxObj.height()
            },250)
      });
```
