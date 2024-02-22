function $(query) {
    if (query[0] != '#') return document.querySelectorAll(query)
    return document.querySelector(query);
}



window.onload = () => {
    let boxes = $(".box")
    let boxList = [];
    for (box of boxes.values()) {
        let randIndex = Math.random * boxes.length;
        boxList.push(boxes[randIndex])
        boxes.splice(boxes.indexOf(box),1)
    }
    const root = $(":root")[0];
    const rootStyle = getComputedStyle(root);
    boxList.forEach(b => {
        b.onclick = () => {
            if (!b.classList.contains("gap")) {
                let gp = $(".gap")[0]
                gp.style.setProperty("grid-area", `${rootStyle.getPropertyValue(`--${b.id}-row`)} /
                 ${rootStyle.getPropertyValue(`--${b.id}-col`)}`)
                const location = getComputedStyle(b).getPropertyValue("grid-row")
                console.log(location)
                root.style.setProperty(`--${b.id}-row`,location[0])
                root.style.setProperty(`--${b.id}-col`,location[1])
            }
        }
    })
}