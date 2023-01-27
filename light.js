let button = document.querySelector('.button');
let body = document.querySelector('body');
let audio = document.querySelector('#audio');
button.onclick = function(){
    body.classList.toggle('on');
    audio.play();
}