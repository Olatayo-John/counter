
var countDownDate = new Date("August 01, 2024 17:00:00").getTime(); //counting down to

var x = setInterval(function () {

    var Localdate = new Date().toLocaleString("en-US", {
        timeZone: "America/Los_Angeles"
    });
    var now = new Date(Localdate).getTime();
    var distance = countDownDate - now; //time between 'counting down to' and 'date of now'

    //calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('#el_d1').html(days);
    $('#el_h1').html(hours);
    $('#el_m1').html(minutes);
    $('#el_s1').html(seconds);

    // If count down is over
    if (distance < 0) {
        clearInterval(x); //stop interval
        $('#el_d1,#el_h1,#el_m1,#el_s1').html('0');
    }
}, 1000);