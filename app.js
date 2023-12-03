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
let longbreakminutes = 15
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
    longbreakminutes = 15
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


start.addEventListener("click",function(){

    clearInterval(timerInterval);

    if(time.style.display === "block"){
        timerInterval = setInterval(timerreduce, 1000);
    }

     if(breaki.style.display === "block"){
        timerInterval = setInterval(brektimereduce, 1000);

       
    }

    if(longbreaki.style.display === "block"){
        timerInterval = setInterval(longbrektimereduce, 1000);

        
    }
})
