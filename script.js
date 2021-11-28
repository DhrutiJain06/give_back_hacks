function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    const interval_var = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            clearInterval(interval_var);
            notifyUser();
        }
    }, 1000);
}

function callTimer(){
    var mins = $('#water').val() * 60;
    var fiveMinutes = 60
    display = $('#atimer');
    startTimer(mins, display);
}
function callTimerB(){
  var mins = $('#water2').val() * 60;
  var fiveMinutes = 60
  display = $('#btimer');
  startTimer(mins, display);
}

function notifyUser() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Time to take a break!",{
          body: "Take a break for a while!",
          requireInteraction: true
      });
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Notification permission granted succesfully!", { 
            body : 'Click on me to dismiss', 
            requireInteraction: true 
         });
        }
      });
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  }