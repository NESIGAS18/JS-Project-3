const btn=document.querySelector('button');
const body=document.querySelector('body');
const color=['violet','green','red','pink','yellow'];
body.style.backgroundColor='blue';
document.addEventListener('click',function(){
    const colorindex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorindex];
});