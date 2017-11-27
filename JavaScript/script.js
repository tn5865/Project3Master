var picNum = 0;
slide();

function slide() {
    var i;
    var x = document.getElementByClassName("welcomePics");
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    
    picNum++;
    if(picNum > x.length){picNum = 1}
    x[picNum-1].style.display = "block";
    setTimeout(slide, 2000);

}
