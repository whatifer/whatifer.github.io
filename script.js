var object = document.getElementById('item');

object.onclick=function(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  object.style.top = x + 'px';
  object.style.left = y + 'px';
};