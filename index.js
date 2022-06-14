const countDownDate = new Date('july 13,2022 00:00:00').getTime();
console.log(countDownDate);

var myfunc = setInterval(function(){

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("count-days").innerHTML = days + "d "
    document.getElementById("count-hours").innerHTML = hours + "h " 
    document.getElementById("count-min").innerHTML = minutes + "m " 
    document.getElementById("count-sec").innerHTML = seconds + "s"

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("count-days").innerHTML = ""
        document.getElementById("count-hours").innerHTML = "" 
        document.getElementById("count-min").innerHTML = ""
        document.getElementById("count-sec").innerHTML = ""
        document.getElementById("end").innerHTML = "YAA ITS TIME!!";
    }

},1000)

