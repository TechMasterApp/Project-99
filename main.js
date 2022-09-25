var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var textbox = document.getElementById("textbox");

function start() {
    textbox.innerHTML = ""
    recognition.start()
}

recognition.onresult = function(event) {
    console.log(event)
    res = event.results[0][0].transcript
    textbox.innerHTML = res
    if (textbox.innerHTML == "take my selfie" || textbox.innerHTML == "Take my selfie") {
        speakThis()
        setTimeout(() => {
            takeSnapshot()
            save()
        }, 7000)
    }
}

function speakThis() {
    var synth = window.speechSynthesis
    var speakData = "Taking your selfie in 10 seconds! Please position yourself in front of your camera."
    Webcam.attach("#camera")
    var utterThis = new SpeechSynthesisUtterance(speakData)
    synth.speak(utterThis)
}

function takeSnapshot() {
    Webcam.snap((data_uri) => {
        document.getElementById("result").innerHTML = "<img id='Selfie' src=" + data_uri + ">"
    })
}

Webcam.set({
    height: 245,
    width: 330,
    image_format: "png",
    png_quality:90
})

function save() {
    link = document.getElementById("link")
    image = document.getElementById("Selfie".src)
    link.href = image
    link.click()
}