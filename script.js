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
}

// paint boxes on click
function color(){
    let boxes = document.querySelectorAll('main .container > *')

    let isDown = false;


    for (let box of boxes){
        box.addEventListener('mousedown', () => {
            box.classList.add('clicked');
            isDown = true;
        })
    }
    for (let box of boxes){
        box.addEventListener('mouseup', () => {
            isDown = false;
        })
    }
    for (let box of boxes){
        box.addEventListener('mouseover', () => {
            if(isDown){
                box.classList.add('clicked');
            }
        })
    }
}

// Input canvas size from user
let canvas = document.querySelector('main .container');
let input = document.querySelector('main .field input');
createBoxes(input.value);
color();
input.oninput = () =>{
    while(canvas.firstElementChild){
        canvas.removeChild(canvas.lastElementChild);  
    }
    createBoxes(input.value);
    color();
}
