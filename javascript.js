const body = document.body;
const container = document.createElement("div");
container.classList.add("grid-container");
container.setAttribute('grid-template-rows', 'repeat(16, 1fr)');
for(i = 0; i < 256; i++ ) {
    let div = document.createElement("div");
    div.textContent = `${i+1}`;
    div.classList.add("grid-item");
    container.append(div);
}

body.append(container);
