let color = document.getElementById('colorPicker').value;


function setupGrid(size){
    let etchASketch = document.getElementById('etch-a-sketch');
    while(etchASketch.firstChild){
        etchASketch.removeChild(etchASketch.firstChild)
    }
    
    etchASketch.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    etchASketch.style.gridTemplateRows = `repeat(${size} , 1fr)`;
        
    for(let i = 0; i<size*size;i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSelection)
        square.style.backgroundColor='whitesmoke';
        square.className='pixel';
        etchASketch.append(square);
    }
}
setupGrid(16);


function colorSelection()  {
    this.style.backgroundColor = color
}

function changeColor(i){
    color = i;
}
function clearSketch(){
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach((div) => div.style.backgroundColor='whitesmoke');
}