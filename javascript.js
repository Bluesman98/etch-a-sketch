const body = document.body;
const container = document.createElement("div");
container.classList.add("grid-container");


body.append(container);

function createGrid(size, container) {
    container.style.gridTemplateColumns = `repeat(${size},50px)`;
    for(i = 0; i < size*size; i++ ) {
        let div = document.createElement("div");
        div.classList.add("grid-item");
        container.append(div);
    }
}
createGrid(16,container);



function newGrid(container) {
   const  a = document.querySelector(".grid-container");
   while (a.firstChild) {
     a.removeChild(a.lastChild);
   }
   let size = prompt("Enter Size Of Grid");
   createGrid(size,container);
}


container.addEventListener('mouseover', function(e) {
    if(e.target && e.target.classList.contains("grid-item") == true )  {
        e.target.classList.add('grid-active');
    }
});


