const container = document.querySelector(".container");
const inputContainer = document.querySelector(".input");
const colorPicker = document.querySelector(".color-picker");

const setBtn = document.querySelector(".dimensions");
const rndBtn = document.querySelector(".randomize");

setBtn.addEventListener("click", () => {
    const rows = inputContainer.children[0];
    const columns = inputContainer.children[1];
    const gap = inputContainer.children[2];

    if (container.children) {
        container.replaceChildren();
    }

    for (let i = 0; i < (rows.value * columns.value); i++) {
        const item = document.createElement("div");
        item.setAttribute("class", "item");
        item.innerText = `#${i + 1}`;
        container.append(item);

        //dynamically generate the grid dimensions according to n amount of items
        generateGridDimensions(rows.value, columns.value, gap.value);
        generateRandomColor(item);
    }

    if (container.offsetWidth > 768) {
        document.body.style.flexDirection = "row";
        inputContainer.style.marginRight = "10px";
    }
});

function generateGridDimensions(rows, cols, gap) {
    const item = document.querySelector(".item");

    container.style.height = ((item.offsetHeight * cols) + (parseInt(container.style.gap) * (cols - 1))) + "px";
    container.style.width = ((item.offsetWidth * rows) + (parseInt(container.style.gap) * (rows - 1))) + "px";
    container.style.gap = gap + "px";
}

function generateRandomColor(item) {
    item.addEventListener("mousemove", (e) => {
        const color = colorPicker.children;

        rndBtn.addEventListener("click", (e) => {
            color[0].value = getRandomInt(255);
            color[1].value = getRandomInt(255);
            color[2].value = getRandomInt(255);
        });

        item.style.backgroundColor = `rgb(${color[0].value}, ${color[1].value}, ${color[2].value})`;
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}