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
    let workingMatrix = {...gridMatrix}
    boxList.forEach(b => {
        b.style.setProperty("grid-area", `${workingMatrix[b.id][0]} / ${workingMatrix[b.id][1]}`)
        b.onclick = () => {
            if (b.classList.contains("gap")) return;
            let gp = $(".gap")[0]
            let gapPos = gp.style.getPropertyValue("grid-area").split(' / ').map(n => parseInt(n))
            let pos = workingMatrix[b.id]
            gp.style.setProperty("grid-area", `${pos[0]} /
                ${pos[1]}`)
            b.style.setProperty("grid-area", `${gapPos[0]} / ${gapPos[1]}`)
            workingMatrix[b.id] = gapPos;
            checkWin();
        }
    })

    function checkWin() {
        for(box in workingMatrix){
            if(workingMatrix[box][0] !== gridMatrix[box][0] || workingMatrix[box][1] !== gridMatrix[box][1]) {
                console.log("losing! because " + workingMatrix[box] + " is not the same as " + gridMatrix[box])
                return;
            }
        }
        console.log("you're winner!")
    }
}