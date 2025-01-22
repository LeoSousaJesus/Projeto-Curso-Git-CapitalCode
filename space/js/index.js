function _createTag(obj) {
    var tag = document.createElement(obj.tag);
    for (var attr in obj) {
      if (attr !== 'tag' && attr !== 'content') {
        tag.setAttribute(attr, obj[attr]);
      }
    }
    if (obj.hasOwnProperty('content')) {
      tag.appendChild(_createTag(obj.content));
    }
    return tag;
  }

function load() {
    var s, css, dim,
        sky = document.querySelector('.inner'),
        star = {tag: 'div',class: 'star'},
        amount = 100;
    for (var i = 0 ; i < amount ; i++ ) {
      s = _createTag(star);
      dim = Math.random() * (2 - 1) + 1;
      css  = 'top:'+ Math.random() * 100 + '%;';
      css += 'left:'+ Math.random() * 100 + '%;';
      css += 'opacity:'+ Math.random() * 5 / 10 + 0.6+';';
      css += 'width:'+ dim + 'px;';
      css += 'height:'+ dim + 'px;';      
      s.setAttribute("style",css);
      sky.appendChild(s);
    }
  }

load();

function teste(){
    alert("Capital Code");
}

function teste2(){
    console.log("teste 2");
}