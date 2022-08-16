image.addEventListener("mousedown", mouseStart);
image.addEventListener("mouseup", mouseEnd);

var clickStartTime = 0;
function mouseStart() {
    clickStartTime = Date.now();
};
function mouseEnd() {
    var result = Date.now() - clickStartTime;
    if(Number(result) > 800){ //롱 클릭 발생
        console.log("[start] : " + clickStartTime);
        console.log("[end] : " + Date.now());
        console.log("[data] : " + Number(result)); 
        alert("LongClick: "+ event.offsetX + "/" + event.offsetY);
    } 			
};