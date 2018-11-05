let links = document.querySelector('.divCad');

let click = document.querySelector('.postit1');
let visible = document.querySelector('.opaca');

let xis1 = document.querySelector('.a1');
let xis2 = document.querySelector('.a2');
let xis3 = document.querySelector('.a3');
let xis4 = document.querySelector('.a4');

if(location.pathname == '/contato.html'){
    xis2.style.backgroundColor = 'white';
}else{
    xis2.style.backgroundColor = '';
}

if(location.pathname == '/index.html'){
    xis1.style.backgroundColor = 'white';
}else{
    xis1.style.backgroundColor = '';
}

if(location.pathname == '/sobre.html'){
    xis3.style.backgroundColor = 'white';
}else{
    xis3.style.backgroundColor = 'tranparent';
}
 

if(location.pathname == '/voce.html'){
    xis4.style.backgroundColor = 'white';
}else{
    xis4.style.backgroundColor = '';
}

xis2.onclick = function(){
    links.classList.toggle('divCad2');
}

click.onclick = function(){
    click.classList.toggle('postit12');
    visible.classList.toggle('op');
}