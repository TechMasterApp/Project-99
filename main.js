var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    textbox.innerHTML = ""
    recognition.start();
} 

recognition.onresult = function(event) {
    console.log(event)
    res = event.results[0][0].transcript
    textbox.innerHTML = res
    if (textbox.innerHTML == "selfie" || textbox.innerHTML == "Selfie") {
        speakThis()
        setTimeout(() => {
            takeSnapshot()
            save()
        }, 7000)
    }
}


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}

function takeSnapshot() {
    Webcam.snap((data_uri) => {
        if(img_id=="selfie1") {
            document.getElementById("result1").innerHTML = "<img id='selfie1' src=" + data_uri + ">"
        }
        if(img_id=="selfie2") {
            document.getElementById("result2").innerHTML = "<img id='selfie2' src=" + data_uri + ">"
        }
        if(img_id=="selfie3") {
            document.getElementById("result3").innerHTML = "<img id='selfie3' src=" + data_uri + ">"
        }
    })
}

function save() {
    link = document.getElementById("link")
    image = document.getElementById("Selfie".src)
    link.href = image
    link.click()
}