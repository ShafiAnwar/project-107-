function startClassification(){
navigator.mediaDevices.getUserMedia({
    audio:true
});
classifier=ml5.sounclassifier("https://teachablemachine.withgoogle.com/models/Avr9RxpMU/model.json",modelReady)
}
function modelReady(){
classifier.classify(gotResult);
}