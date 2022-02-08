import './less/index.less'

// Your code goes here!
const funBus = document.querySelector('h1');
const funBusImage = document.querySelector('div > header > img');

funBus.addEventListener('mousedown', ()=>{
    funBus.style.fontSize = 'smaller';
})
funBus.addEventListener('mouseup', ()=>{
    funBus.style.fontSize = 'xx-large';
})

document.querySelector('body').addEventListener('keydown',()=>{
    if(document.body.style.color === 'blue'){
        document.body.style.color = 'black';
    }
    else{
        document.body.style.color = 'blue';
    }
});

//adding random colors to nav
document.querySelectorAll('nav>a').forEach((item) => {
    const rndCol = `rgb(${Math.random()*255+1}, ${Math.random()*255+1}, ${Math.random()*255+1})`;
    item.addEventListener('mouseover',()=>{
        item.style.color = rndCol;
    })
    item.addEventListener('mouseout',()=>{
        item.style.color = 'black';
    })
});

document.querySelectorAll('h2, h4').forEach((item) => {
    item.addEventListener('dblclick', ()=>{
        item.style.backgroundColor = 'red';
    });
});

window.onresize=()=>{
    funBusImage.style.width = '50%';
};

window.onscroll=()=>{
    funBusImage.style.width = '100%';
}
  
 
const bottomImg = document.querySelector('.content-destination > img');
bottomImg.onwheel = ()=>{
    let scale = 1;
    scale += event.deltaY * -0.005;
    bottomImg.style.transform = `scale(${scale})`;
};

document.querySelectorAll('.destination > div').forEach((item) => {
    item.addEventListener('copy',(event)=>{
        event.preventDefault();
        item.innerHTML = 'Why have you stolen my secrets???????';
        item.style.color = 'red';
    })
});