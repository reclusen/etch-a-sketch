const container = document.querySelector(".container");
const inputContainer = document.querySelector(".input");
const setBtn = document.querySelector(".dimensions");

setBtn.addEventListener("click", () => {
    const rows = document.getElementById("rows");
    const columns = document.getElementById("cols");
    const gap = document.getElementById("gap");

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

        item.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "red";
        });
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