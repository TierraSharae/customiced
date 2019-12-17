function init(){

var hdr = document.createElement('div');
hdr.setAttribute('class', 'header');
document.body.appendChild(hdr);

var mp = document.createElement('div');
mp.setAttribute('class', 'mice-pics');
hdr.appendChild(mp);

var m = document.createElement('img');
m.setAttribute('class', 'mice');
m.src = 'http://tierrasharae.github.io/customiced/img/mice.png';
m.alt = 'Customiced';
mp.appendChild(m);

var m_flip = document.createElement('img');
m_flip.setAttribute('class', 'mice');
m_flip.src = 'http://tierrasharae.github.io/customiced/img/mice_r.png';
m_flip.alt = 'Customiced';
mp.appendChild(m_flip);

}

window.onload = function() {
  init();
}
