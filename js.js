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
    boxList.forEach(b => {
        b.style.add("")
        b.onclick = () => {
            if(!b.classList.contains("gap")) {
                
            }
        }
    })
}