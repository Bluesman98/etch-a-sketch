const body = document.body;
const container = document.createElement("div");
container.classList.add("grid-container");
body.append(container);

function createGrid(size, container) {
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    container.style.gridTemplateRows = `repeat(${size},1fr)`;
    for(i = 0; i < size*size; i++ ) {
        let div = document.createElement("div");
        div.classList.add("grid-item");
        container.append(div);
    }
}

function newGrid(container) {
   const  a = document.querySelector(".grid-container");
   while (a.firstChild) {
     a.removeChild(a.lastChild);
   }
   let size = prompt("Enter Size Of Grid");
   if(size <= 64) createGrid(size,container);
   else alert("Please enter size < 64!")
}

container.addEventListener('mouseover', function(e) {
    if(e.target && e.target.classList.contains("grid-item") == true )  {
        e.target.classList.add('grid-active');
    }
});


