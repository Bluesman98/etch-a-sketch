const body = document.body;
const container = document.createElement("div");
container.classList.add("grid-container");
for(i = 0; i < 256; i++ ) {
    let div = document.createElement("div");
   // div.textContent = `${i+1}`;
    div.classList.add("grid-item");
    container.append(div);
}

body.append(container);
const grid =document.querySelectorAll('.grid-item');
grid.forEach(e => e.addEventListener('mouseover', event => {
    e.classList.add('grid-active');
}))
