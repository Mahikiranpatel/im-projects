Webcam.set({
Width:300,
height:400,
image_format:'png',
png_quality:100


});


camera=document.getElementById("webcame")
Webcam.attach(camera);
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='result'>";
    })
}


console.log('version of ml5 is=',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pmXAt8Dhd/model.json',modelLoded);

function modelLoded(){
    console.log("modal loded")
}



function check(){
    img=document.getElementById("identily");
    classifier.classify(img,gotResult)
}



function gotResults(error,results){
    if(error){
         console.error(error);

    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML =results[0].label;
        document.getElementById("accuracy").innerHTML =results[0].confidence.toFixed(3);
    }
}


