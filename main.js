var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="" ;
    Recognition.start();
}

Recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        console.log("taking selfie in 5 seconds");
        speak();
    }
}

function speak(){
    var synth=window.speechSynthesis;
    var speakdata="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        takesnapshot();
        save();
    },5000);
}

camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';

    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
    
}


