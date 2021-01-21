
// Get the modal
var modal = document.getElementById('myModal');
var count = 0;

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

var tops = document.getElementsByClassName('open_modal');
for (var i=0, len=tops.length; i<len; i++) {
    tops[i].onclick = function() {
        modal.style.display = "block";
        document.body.style.overflowY = "hidden";
        if(count == 0){
            //Counter Start
            var fiveMinutes = 234,// 03:34
                display = document.querySelector('#time');
            startTimer(fiveMinutes, display);

            count = 1;
        }

    }
}
var tops = document.getElementsByClassName('open_modal1');
for (var i=0, len=tops.length; i<len; i++) {
    tops[i].onclick = function() {
        modal.style.display = "block";
        document.body.style.overflowY = "hidden";
        if(count == 0){
            //Counter Start
            var fiveMinutes = 234,// 03:34
                display = document.querySelector('#time');
            startTimer(fiveMinutes, display);

            count = 1;
        }

    }
}

var tops = document.getElementsByClassName('btn-start1');
for (var i=0, len=tops.length; i<len; i++) {
    tops[i].onclick = function() {
        modal.style.display = "block";
        document.body.style.overflowY = "hidden";
        if(count == 0){
            //Counter Start
            var fiveMinutes = 234,// 03:34
                display = document.querySelector('#time');
            startTimer(fiveMinutes, display);

            count = 1;
        }

    }
}

var tops = document.getElementsByClassName('btn-start2');
for (var i=0, len=tops.length; i<len; i++) {
    tops[i].onclick = function() {
        modal.style.display = "block";
        document.body.style.overflowY = "hidden";
        if(count == 0){
            //Counter Start
            var fiveMinutes = 234,// 03:34
                display = document.querySelector('#time');
            startTimer(fiveMinutes, display);

            count = 1;
        }

    }
}

var tops = document.getElementsByClassName('animated-button1');
for (var i=0, len=tops.length; i<len; i++) {
    tops[i].onclick = function() {
        modal.style.display = "block";
        document.body.style.overflowY = "hidden";
        if(count == 0){
            //Counter Start
            var fiveMinutes = 234,// 03:34
                display = document.querySelector('#time');
            startTimer(fiveMinutes, display);

            count = 1;
        }

    }
}



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
//btn.onclick = function() {
//    modal.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflowY = "scroll";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflowY = "scroll";
    }
}


/////////////// Count Down Timer ////////////////
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "00:"+minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {

};
