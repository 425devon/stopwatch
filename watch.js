var time = 0.00;
var interval;
var started = false;
var startStop = document.getElementById("startStop");
var reset = document.getElementById("reset");
var record = document.getElementById("record");
var list = document.getElementById("timeRecord")

function startTimer(){
    if(started == false){
        interval = setInterval(function(){
            time += 0.01;
            document.getElementById("timer").innerHTML = "Time Elapsed: " + time.toFixed(2);
        },10);
        started = true;
    }
}

startStop.addEventListener('click',function(){
    if(started == false){
        startTimer();
    }else{
        if(started == true){
            clearInterval(interval);
            started = false;
        }
    }      
});

reset.addEventListener('click', function(){
    clearInterval(interval);
    time = 0;
    document.getElementById("timer").innerHTML = "Time Elapsed: 0.00";
    while(list.hasChildNodes()){
        list.removeChild(list.firstChild);
    }

});

record.addEventListener('click',function(){
    var newLi = document.createElement("li");
    var t = document.createTextNode(time.toFixed(2));
    newLi.appendChild(t);
    list.appendChild(newLi);
});