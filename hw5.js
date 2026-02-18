// задача 1 курсор мыши 

const coordsDisplay = document.getElementById('coordinates');

function updateCoordinates(event) {
     let x = event.clientX;
     let y = event.clientY;
    
    coordsDisplay.textContent = `X: ${x}, Y: ${y}`;
}

document.addEventListener('mousemove', updateCoordinates);