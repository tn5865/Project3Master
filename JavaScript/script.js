$(function(){
    var picNum = 0;
slide();
                             


function slide() {
    var i;
    var photos = document.getElementsByClassName("welcomePics");

    for (i = 0; i < photos.length; i++) {
        photos[i].style.display = "none";
    }
    console.log("hi");
    picNum++;
    
    if (picNum > photos.length) {
        picNum = 1
    }
    photos[picNum - 1].style.display = "block";
    setTimeout(slide, 3500);

}
});