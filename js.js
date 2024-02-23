function $(query) {
    if (query[0] != '#') return document.querySelectorAll(query)
    return document.querySelector(query);
}


const gridMatrix = {
    "one": [1, 1],
    "two": [1, 2],
    "three": [1, 3],
    "four": [2, 1],
    "five": [2, 2],
    "six": [2, 3],
    "seven": [3, 1],
    "eight": [3, 2],
    "nine": [3, 3]
};  
window.onload = () => {
    let boxes = $(".box")
    let boxList = [];
    for (box of boxes.values()) {
        boxList.push(box)
    }
    boxList.forEach(b => {
        b.style.setProperty("grid-area",`${gridMatrix[b.id][0]} / ${gridMatrix[b.id][1]}`)
        b.onclick = () => {
            if (b.classList.contains("gap")) return;
            let gp = $(".gap")[0]
            let pos = gridMatrix[b.id]
            gp.style.setProperty("grid-area", `${pos[0]} /
                ${pos[1]}`)
            b.style.setProperty("grid-area",)
            gridMatrix[b.id] = b.style.getPropertyValue("grid-area").split(' / ').map(n => parseInt(n))
        }
    })
}