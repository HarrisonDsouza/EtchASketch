// create boxes
function createBoxes(count){
    let side = count;
    for(let i=1; i<=(side*side); i++){
        let div = document.createElement('div')
        canvas.appendChild(div);
    }
    
    let nodes = document.querySelectorAll('main .container > *');
    nodes.forEach(node => {
        node.style.flexBasis = `${100/side}%`;
    })
}

// Input canvas size from user
let canvas = document.querySelector('main .container');
let input = document.querySelector('main .field input');
createBoxes(input.value);
input.oninput = () =>{
    while(canvas.firstElementChild){
        canvas.removeChild(canvas.lastElementChild);  
    }
    createBoxes(input.value);
}