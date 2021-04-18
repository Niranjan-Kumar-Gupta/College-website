const texts = [" Importance under Ministry of Education(Shiksha Mantralaya), Government of India"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type,200);
}());


//------Image slides-------------
var images = ["AcademicProcession.jpg",
              "1.jpg",
              "phDReceiving.jpg",
              "17.jpg",
              "ReceivingFemale.jpg",
              "mainBilding.jpg",
              "Topper.jpg",
              "mech.jpg"];
                       
var i=0;
function slides(){
    document.getElementById("slideimage").src = images[i];
    if(i<(images.length-1))
    {
        i++;
    }
    else
    {
        i=0;
    }
}
setInterval(slides,2000);
