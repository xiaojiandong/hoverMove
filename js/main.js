


$(function(){
    var overMaskInfo = {
        0 : {
            img : 'http://cf-attach.i-sogi.com/cn/article/img/201405/2014051608161691434.jpg',
            content : '阿里巴巴'
        },
        1 : {
            img : 'http://images.enet.com.cn/egames/articleimage/2012/0903/20120903031320718.jpg',
            content : '腾讯'
        },
        2 : {
            img : 'http://img.storage.17wanba.org.cn/news/2016/02/29/0dbee7b460ab0e51a233d0960e7b70b9.jpg',
            content : '百度'
        },
        3 : {
            img : 'http://img1.cache.netease.com/catchpic/C/C5/C595B1540EE7064431BFDB7281D9D84E.jpg',
            content : '小米'
        },
        4 : {
            img : 'http://image1.hhczy.com/web/2014/7/12/5119281215370305.700x700.jpg',
            content : '奇虎360'
        },
        5 : {
            img : 'http://img.vipcn.com/img2015/12/12/2015121257401893.png',
            content : '爱奇艺'
        },
        6 : {
            img : 'http://i.ce.cn/ce/culture/gd/201408/21/W020140821347672730557.jpg',
            content : '优酷土豆'
        },
        7 : {
            img : 'http://pic.wenwo.com/fimg/7203597805_405.jpg',
            content : '京东'
        },
        8 : {
            img : 'http://www.cnautonews.com/qchl/kj/201509/W020150921463431071255.jpg',
            content : '滴滴出行'
        },
        9 : {
            img : 'http://img.youxiguancha.com/game/2014/09/22/1411371973_15.jpg',
            content : '美团网'
        },
        10 : {
            img : 'http://i0.sinaimg.cn/cj/2014/0723/U11224P31DT20140723204300.jpg',
            content : '携程网'
        },
        11 : {
            img : 'http://a3.att.hudong.com/18/67/01300534773959135942674793711.jpg',
            content : '凤凰网'
        }
    };


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


});



