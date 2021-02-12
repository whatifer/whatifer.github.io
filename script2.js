// Location Variable Code Credit to Ronni Chidekel: https://codepen.io/ronnidc/pen/WvZJBr?editors=0010
// Color Generator Code Credit to Chris Coyier: https://css-tricks.com/snippets/javascript/random-hex-color/

var object = document.getElementById('item1');

object.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
};

var object1 = document.getElementById('item2');

object1.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object1.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
};
var object2 = document.getElementById('item3');

object2.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object2.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
};
var object3 = document.getElementById('item4');

object3.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object3.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
};
var object4 = document.getElementById('item5');

object4.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object4.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
var object5 = document.getElementById('item6');
object5.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object5.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
var object6 = document.getElementById('item7');
object6.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object6.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
var object7 = document.getElementById('item8');
object7.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object7.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
var object8 = document.getElementById('item9');
object8.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object8.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
var object9 = document.getElementById('item10');
object9.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object9.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
var object10 = document.getElementById('item11');
object10.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object10.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
var object11 = document.getElementById('item12');
object11.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object11.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
var object12 = document.getElementById('item13');
object12.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object12.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
var object13 = document.getElementById('item14');
object13.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object13.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
var object14 = document.getElementById('item15');
object14.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object14.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
var object15 = document.getElementById('item16');
object15.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object15.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
var object16 = document.getElementById('item17');
object16.onclick=function(){
  var x = Math.floor(Math.random()*1000);
  object16.style.top = x + 'px';
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
(function($) {
  var $window = $(window);
  var $videoWrap = $('.video-wrap');
  var $video = $('.video');
  var videoHeight = $video.outerHeight();

  $window.on('scroll',  function() {
    var windowScrollTop = $window.scrollTop();
    var videoBottom = videoHeight + $videoWrap.offset().top;
    
    if (windowScrollTop > videoBottom) {
      $videoWrap.height(videoHeight);
      $video.addClass('stuck');
    } else {
      $videoWrap.height('auto');
      $video.removeClass('stuck');
    }
  });
}(jQuery));