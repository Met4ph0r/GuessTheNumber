var systemGuess = Math.ceil(Math.random()*100)
var count=0;
function check(){
    var num = parseInt(document.getElementById('input').value)
    if(num === '' || num>100 || num<1){
        document.getElementById('res').innerHTML = "Invalid input."
        count-=1
    }
    else if((num-systemGuess) > 30){
        document.getElementById('res').innerHTML = "Your guess is too high."
    }
    else if((num-systemGuess) < 30 && (num-systemGuess) > 0){
        document.getElementById('res').innerHTML = "Your guess is a little high."
    }
    else if((systemGuess - num) > 30){
        document.getElementById('res').innerHTML = "Your guess is too low."
    }
    else if((systemGuess - num) < 30 && (systemGuess - num) > 0){
        document.getElementById('res').innerHTML = "Your guess is little low."
    }
    else if(num==systemGuess){
        document.getElementById('res').innerHTML = "Congrats. <br> The number is " + systemGuess + ". <br> <p> Now reset. </p>"
        document.getElementById('check').disabled=true
    }
    count+=1
    document.getElementById('count').innerHTML = "Number of tries: " + count
}

function reset(){
    document.getElementById('input').value = ''
    document.getElementById('check').disabled=false
    document.getElementById('res').innerHTML = ""
    document.getElementById('count').innerHTML = "Number of tries: "
    systemGuess = Math.ceil(Math.random()*100)
    count=0;
}