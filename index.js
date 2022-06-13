const dateString = new Date('july 14,2022 00:00:00').getTime();
console.log(dateString);

let x = setInterval(Function()){

    let now = new Date().getTime();

    let distance = dateString - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let demo = document.getElementById("counting").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counting").innerHTML = "EXPIRED";
  }
}, 1000)
