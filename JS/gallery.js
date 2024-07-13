/*function upDate(previewPic) {
    
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
}

function unDo() {
   
    document.getElementById('image').style.backgroundImage = "url('')"
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';
}*/
/*Name this external file gallery.js*/

function upDate(previewPic){
    x=document.getElementById("image");
    x.innerHTML = previewPic.alt;
    x.style.background = "url(" + previewPic.src + ")";
}
   
function unDo(){
    x=document.getElementById("image");
    x.innerHTML = "Hover over an image below to display here.";
    x.style.background = "url()"+"#8e68ff";
}