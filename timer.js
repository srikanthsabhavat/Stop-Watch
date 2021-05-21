
    var milliseconds=0;
    var seconds=0;
    var minutes=0;
    var hours=0;
    let displaySeconds = 0;
    let displayMinutes = 0;
    let displayHours = 0;
    var interval =null;
    var status = "stopped";
    function stopwatch()
    {
            seconds++;
            if(seconds/60 === 1)
            {
                seconds=0;
                minutes++;
                if(minutes/60 === 1)
                {
                    minutes=0;
                    hours++;
                }
            }
            if(seconds < 10){
                displaySeconds = "0" + seconds.toString();
            }
            else{
                displaySeconds = seconds;
            }
        
            if(minutes < 10){
                displayMinutes = "0" + minutes.toString();
            }
            else{
                displayMinutes = minutes;
            }
        
            if(hours < 10){
                displayHours = "0" + hours.toString();
            }
            else{
                displayHours = hours;
            }
            document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    }
    function timerstart()
    {
        if(status === "stopped")
        {
            interval = window.setInterval(stopwatch,1000);
            document.getElementById("start").innerHTML="STOP";
            status="started";
        }
        else
        {
            window.clearInterval(interval);
            document.getElementById("start").innerHTML="START";
            status="stopped";
        }
    }
    function timerreset()
    {
        window.clearInterval(interval);
        Hours=0;
        minutes=0;
        seconds=0;
        document.getElementById("display").innerHTML= "00 : 00 : 00";
        document.getElementById("start").innerHTML="START";
    }