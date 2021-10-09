function animate_string(id) {
    var element = document.getElementById(id) ;
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;
    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 300);
}

document.getElementById("musicRange").value = "0";
document.getElementById("audioPlayer").focus();
window.addEventListener("click", function(){
    document.getElementById("audioPlayer").focus();
})

function musicLoop(){
    var shuffle = document.getElementById("shuffleIt");
    var repeatPlaylist = document.getElementById("repeatPlaylist");
    var repeatOnce = document.getElementById("repeatIt");
    var shuffleAlert = document.getElementById("shuffleAlert");
    var repeatListAlert = document.getElementById("repeatListAlert");
    var repeatOnceAlert = document.getElementById("repeatItAlert");

    if(shuffle.classList.contains("current")){
        shuffle.classList.remove("current");
        shuffleAlert.classList.remove("current");
        repeatPlaylist.classList.add("current");
        repeatListAlert.classList.add("current");
        setTimeout(() => {
            repeatListAlert.classList.remove("current");
        }, 1500);
    }else if(repeatPlaylist.classList.contains("current")){
        repeatPlaylist.classList.remove("current");
        repeatListAlert.classList.remove("current");
        repeatOnce.classList.add("current");
        repeatOnceAlert.classList.add("current");
        setTimeout(() => {
            repeatOnceAlert.classList.remove("current");
        }, 1500);
    }else if(repeatOnce.classList.contains("current")){
        repeatOnce.classList.remove("current");
        repeatOnceAlert.classList.remove("current");
        shuffle.classList.add("current");
        shuffleAlert.classList.add("current");
        setTimeout(() => {
            shuffleAlert.classList.remove("current");
        }, 1500);
    }
}

function playButton(){
    var playIt = document.getElementById("playIt");
    var resumeIt = document.getElementById("pauseIt");
    var playInfo = document.getElementById("playInfo");
    var playSong = document.getElementById("audioPlayer");
    var playButton = document.getElementById("playButton");

    if(playIt.classList.contains("current")){
        playIt.classList.remove("current");
        resumeIt.classList.add("current");
        playInfo.innerHTML= "Now Playing";
        playSong.play();
    }else if(resumeIt.classList.contains("current")){
        resumeIt.classList.remove("current");
        playIt.classList.add("current");
        playInfo.innerHTML= "Paused";
        playSong.pause();
    }
}

function seekBar(){

    var song = document.getElementById("audioPlayer");

    song.ontimeupdate = function (){timeUpdater()}

    function timeUpdater(){

        document.getElementById("musicRange").value = Math.floor(song.currentTime);
        document.getElementById("musicRange").max = Math.floor(song.duration);
    }
}

seekBar();

function getCurTime(){
    var song = document.getElementById("audioPlayer");

    song.addEventListener('timeupdate',function (){

        var duration = song.duration;

        var sec= new Number();
        var min= new Number();
         sec = Math.floor( duration );    
         min = Math.floor( sec / 60 );
        min = min >= 10 ? min : '0' + min;    
        sec = Math.floor( sec % 60 );
        sec = sec >= 10 ? sec : '0' + sec;
    
        document.getElementById("totalTime").innerHTML= (min + ":"+ sec);
    
    });

    song.addEventListener('timeupdate',function (){

        var duration = song.currentTime;
    
        var sec= new Number();
        var min= new Number();
        sec = Math.floor( duration );    
        min = Math.floor( sec / 60 );
        min = min >= 10 ? min : '0' + min;    
        sec = Math.floor( sec % 60 );
        sec = sec >= 10 ? sec : '0' + sec;
    
        document.getElementById("currentTime").innerHTML = (min + ":"+ sec);
    
    });
}

getCurTime();

function spacePress(){
    document.body.onkeyup = function(e){
        var playIt = document.getElementById("playIt");
        var pauseIt = document.getElementById("pauseIt");
        var playInfo = document.getElementById("playInfo");
        if(e.keyCode == 32 && playIt.classList.contains("current")){
            playIt.classList.remove("current");
            pauseIt.classList.add("current");
            playInfo.innerHTML = "Now Playing";
        }else if(e.keyCode == 32 && pauseIt.classList.contains("current")){
            playIt.classList.add("current");
            pauseIt.classList.remove("current");
            playInfo.innerHTML = "Paused";
        }
    }
}

spacePress();

function seekPause(){
    var musicRange = document.getElementById("musicRange");
    musicRange.addEventListener("mousedown", function(){
        playIt.classList.add("current");
        pauseIt.classList.remove("current");
        playInfo.innerHTML = "Paused";
        document.getElementById("audioPlayer").pause();
    });

    musicRange.addEventListener("mouseup", function(){
        playIt.classList.remove("current");
        pauseIt.classList.add("current");
        playInfo.innerHTML = "Now Playing";
        document.getElementById("audioPlayer").play();
    })
}

seekPause();

function updateSeekBar(){
    var musicRange = document.getElementById("musicRange");
    musicRange.onchange = function(){timeChange()}

    function timeChange(){
        var inputVal = document.getElementById("musicRange").value;
        console.log(inputVal);
        document.getElementById("audioPlayer").currentTime = inputVal;
    }
}

updateSeekBar();