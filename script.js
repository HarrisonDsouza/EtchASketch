// create boxes
function createBoxes(count){
    let side = count;
    for(let i=1; i<=(side*side); i++){
        let div = document.createElement('div')
        canvas.appendChild(div);
    }
    
    let boxes = document.querySelectorAll('main .container > *');
    
    boxes.forEach(box => {
        box.style.flexBasis = `${100/side}%`;
    })

    canvasSize.textContent = `${side}x${side}`;
}   

// paint boxes on click
function color(option = 'black'){
    let boxes = document.querySelectorAll('main .container > *')

    let isDown = false;
    
    for (let box of boxes){
        let brightness = 100;
        box.addEventListener('mousedown', () => {
            if(isMixed){//checks if mixed color option is selected
                option ="#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
            }
            if(isGrayScale){//check if gray scale mode is selected
                brightness -= 10;
                option = `hsl(0, 0%, ${brightness}%)`;
                
            }

            box.style.backgroundColor = option;
            isDown = true;
        })
    }
    for (let box of boxes){
        box.addEventListener('mouseup', () => {
            isDown = false;
        })
    }
    for (let box of boxes){
        let brightness = 100;
        box.addEventListener('mouseover', () => {
            if(isMixed){//checks if mixed color option is selected
                option ="#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
            }
            if(isGrayScale){//check if gray scale mode is selected
                brightness -= 10;
                option = `hsl(0, 0%, ${brightness}%)`;
                
            }
            if(isDown){
                box.style.backgroundColor = option;
            }
        })
    }
}

// Drawing options

let black = document.querySelector('main .customization .black');
let erase = document.querySelector('main .customization .erase');
let mixed = document.querySelector('main .customization .mixed');
let grayScale = document.querySelector('main .customization .gray-scale');
let isMixed = false;
let isGrayScale = false;

black.addEventListener('click', ()=>{
    color('black');
    isMixed = false;
    isGrayScale = false;
});

mixed.addEventListener('click', () => {
    isMixed = true;
    isGrayScale = false;
});

grayScale.addEventListener('click', () => {
    isMixed = false;
    isGrayScale = true;

});

erase.addEventListener('click', ()=>{
    color('transparent');
    isMixed = false;
    isGrayScale = false;
});




// Input canvas size from user
let canvas = document.querySelector('main .container');
let input = document.querySelector('main .field input');
let canvasSize = document.querySelector('main .slider-value span');

createBoxes(input.value);
color();
input.oninput = () =>{
    while(canvas.firstElementChild){
        canvas.removeChild(canvas.lastElementChild);  
    }
    createBoxes(input.value);
    color();
}
