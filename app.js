let a = document.querySelector(".focusbtn")
let time = document.querySelector(".time")
let minute = document.querySelector(".minute")
let start = document.querySelector(".start")
let minutes = 24;
let second = 59;
let seconds = document.querySelector(".seconds")
let semicolon = document.querySelector(".semicolon")
let shortbreak = document.querySelector(".shortbreak")
let breaki = document.querySelector(".breaki");
let breakminute = document.querySelector(".breakminute")
let breaksemicolon = document.querySelector(".breaksemicolon")
let breakseconds = document.querySelector(".breakseconds")
let breakminutes = 4;
let breaksecond = 59;
let longbreak = document.querySelector(".longbreak")
let longbreaki = document.querySelector(".longbreaki")
let longbreakminute = document.querySelector(".longbreakminute")
let longbreakminutes = 14
let longbreaksemicolon = document.querySelector(".longbreaksemicolon")
let longbreaksecond = document.querySelector(".longbreakseconds")
let longbreakseconds = 59
let timerInterval;

function timer(){
    minutes = 24;
    second = 59;
    minute.innerHTML = minutes
    seconds.innerHTML = second  
    semicolon.innerHTML = ":"
}

function breaktimer(){

     breakminutes = 4;
 breaksecond = 59;

    if(breakminutes <=9){
      
        breakminute.innerHTML ="0"+ breakminutes
        breaksemicolon.innerHTML = ":"
        breakseconds.innerHTML = breaksecond
    }
}

function longbreaktimer(){
    longbreakseconds = 59
    longbreakminutes = 14
    longbreakminute.innerHTML = longbreakminutes;
    longbreaksemicolon.innerHTML = ":"
    longbreaksecond.innerHTML = longbreakseconds;
}



function brektimereduce(){
    breaksecond--
if(breaksecond <=0){

    breakminutes--
    breaksecond =59

}

if(breaksecond <=9){

    breakminute.innerHTML = breakminutes
    breakseconds.innerHTML ="0"+ breaksecond;
    breaksemicolon.innerHTML = ":"
}
else{

    breakminute.innerHTML ="0"+ breakminutes

    breakseconds.innerHTML = breaksecond

    breaksemicolon.innerHTML = ":"

}
}


function longbrektimereduce(){

    longbreakseconds--

if(longbreakseconds <=0){

    longbreakminutes--
    longbreakseconds =59

}

if(longbreakseconds <=9){

    longbreakminute.innerHTML = longbreakminutes;
    if(longbreakminutes <=9){
        longbreakminute.innerHTML ="0"+ longbreakminutes
    }
    else{

        longbreaksecond.innerHTML ="0"+ longbreakseconds;
    }

    longbreaksemicolon.innerHTML = ":";

   
}

else{

    if(longbreakminutes <=9){
        longbreakminute.innerHTML ="0"+ longbreakminutes
    }
    else{
        longbreaksecond.innerHTML ="0"+ longbreakseconds;
    }
    longbreaksecond.innerHTML = longbreakseconds
    longbreaksemicolon.innerHTML = ":"
}
}
function timerreduce(){

second--

if(second <=0){

    minutes--
    second =59

}

if(second <=9){

    minute.innerHTML = minutes

    seconds.innerHTML ="0"+ second;

    semicolon.innerHTML = ":"

}
else{

    minute.innerHTML = minutes

    seconds.innerHTML = second

    semicolon.innerHTML = ":"

}
}
a.addEventListener("click",function(){

    time.style.display = "block";
    longbreaki.style.display = "none"
    breaki.style.display = "none";

    timer()
})
shortbreak.addEventListener("click",function(){

    time.style.display = "none";
    longbreaki.style.display = "none"
    breaki.style.display = "block"
    breaktimer()
    })
    longbreak.addEventListener("click",function(){
        time.style.display = "none";
        breaki.style.display = "none"
        longbreaki.style.display = "block"

        longbreaktimer();

      
    })

var isPaused = false;
let isResumed = false;
let pause = document.querySelector(".pause")
let resume = document.querySelector(".resume")

function pauseTimer() {

    if (isPaused) {
        // Resume the timer
        isPaused = false;
        if (time.style.display === "block") {
            clearInterval(timerInterval);
        } else if (breaki.style.display === "block") {
            clearInterval(timerInterval);
        } else if (longbreaki.style.display === "block") {
            clearInterval(timerInterval);
        }
        console.log("if");
    } 


    else {
        // Pause the timer
        isPaused = true;
        clearInterval(timerInterval);
        console.log("else");
    }

}
function ResumeTimer() {
    isResumed =true;
    if (isResumed) {
        // Resume the timer
        isResumed =false;
        if (time.style.display === "block") {
            timerInterval = setInterval(timerreduce, 1000);
        } else if (breaki.style.display === "block") {
            timerInterval = setInterval(brektimereduce, 1000);
        } else if (longbreaki.style.display === "block") {
            timerInterval = setInterval(longbrektimereduce, 1000);
        }
    } 
}

start.addEventListener("click", function () {

    if (isPaused){
        pauseTimer();
    } 

    else {
        clearInterval(timerInterval);

        if (time.style.display === "block") {

            timerInterval = setInterval(timerreduce, 1000);

        } 

        else if (breaki.style.display === "block") {

            timerInterval = setInterval(brektimereduce, 1000);

        } 

        else if (longbreaki.style.display === "block") {

            timerInterval = setInterval(longbrektimereduce, 1000);

        }

    }
});

pause.addEventListener("click", function () {
    pauseTimer();
});
resume.addEventListener("click", function () {
    ResumeTimer();
});



// ===================summary===================

// sab sai pehlai ui banai phir focus,shor break and longbreak k kisi bhi button par click kron tu innerhtml aajaye
//phir start pause resume k button par click kroon tu functionality chal jaye
// start k button par click karnai sai  time reduce hona start hojaye qk os mai mainai interval call kiya hoa hai sirf waahi call hoga jo block hoga sirf aik hi div block hoga
// pause timer par bhi mainai same logic lagai hai jobhi block ho wo clearinterval hojayee
//resume par bhi same logic lagai hai jo block ho waha setinterval hojaye

