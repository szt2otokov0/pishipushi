function $(query){
    if(query[0] != '#' ) return document.querySelectorAll(query)
    return document.querySelector(query);
}



window.onload = () => {
    let boxes = $(".box")
    let boxList = [];
    for(box of boxes.values()){
        boxList.push(box)
    }
    const root = $(":root")[0]
    boxList.forEach(b => {
        b.style = "";
        b.onclick = () => {
            if(!b.classList.contains("gap")) {
                let gp = $(".gap")[0]
                gp.style.setProperty("grid-row",root.style.getPropertyValue(`--${b.id}-row`))
                gp.style.setProperty("grid-column",root.style.getPropertyValue(`--${b.id}-col`))
                console.log("gap is at " + gp.style.getPropertyValue("grid-row").toString() + ", " + gp.style.getPropertyValue("grid-column").toString())
            }
        }
    })
}