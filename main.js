function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/t7OQsaXaC/model.json', modelLoaded);
}
function modelLoaded(){
    console.log("modelLoaded");
}
function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}
function gotResult (error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("Object_span").innerHTML=results[0].label;
        document.getElementById("Accuracy_span").innerHTML=results[0].confidence.toFixed(3);
    }
}