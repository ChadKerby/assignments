document.getElementById("square").addEventListener("mouseover", function onMouseOver(){
    document.getElementById("square").style.backgroundColor = "blue";
})
document.getElementById("square").addEventListener("mouseout", function onMouseOut(){
    document.getElementById("square").style.backgroundColor = "black";
})
document.getElementById("square").addEventListener("mousedown", function onMouseDown(){
    document.getElementById("square").style.backgroundColor = "red";
})
document.getElementById("square").addEventListener("mouseup", function onMouseUp(){
    document.getElementById("square").style.backgroundColor = "yellow";
})
document.getElementById("square").addEventListener("dblclick", function ondDblClick(){
    document.getElementById("square").style.backgroundColor = "green";
})
document.getElementById("square").addEventListener("wheel", function onWheel(){
    document.getElementById("square").style.backgroundColor = "orange";
})