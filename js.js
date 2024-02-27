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
    let usedSpaces = {}
    let workingMatrix = {...gridMatrix}
    for(box of boxList){
        let posToTake = [0,0]
        do{
            for(tile in gridMatrix){
                let rand = Math.round(Math.random()*100)
                if(rand % 2 == 0 && !usedSpaces[tile]){
                    posToTake = gridMatrix[tile]
                    usedSpaces[tile] = posToTake;
                    break;
                }
            }
        } while(posToTake[0] == 0 && posToTake[1] == 0)
        box.style.setProperty("grid-area",`${posToTake[0]} / ${posToTake[1]}`)
        workingMatrix[box.id] = [posToTake[0],posToTake[1]]
    }

    boxList.forEach(b => {
        b.onclick = () => {
            let currentPos = getPosition(b)
            let gapPos = getPosition($(".gap")[0])
            const distance = Math.abs(Math.sqrt(Math.pow(currentPos[0] - gapPos[0], 2) + Math.pow(currentPos[1] - gapPos[1], 2)));
            let isNotClickableBox = b.classList.contains("gap") || (distance > 1)
            if (isNotClickableBox) return;
            let gp = $(".gap")[0]
            let storedPos = workingMatrix[b.id]
            gp.style.setProperty("grid-area", `${storedPos[0]} /
                ${storedPos[1]}`)
            b.style.setProperty("grid-area", `${gapPos[0]} / ${gapPos[1]}`)
            workingMatrix[b.id] = gapPos;
            checkWin();
        }
    })

    function getPosition(element){
        return element.style.getPropertyValue("grid-area").split(' / ').map(n => parseInt(n));
    }

    function checkWin() {
        for(box in workingMatrix){
            if(workingMatrix[box][0] !== gridMatrix[box][0] || workingMatrix[box][1] !== gridMatrix[box][1]) return;
        }
        alert("Nyertél!")
    }
}