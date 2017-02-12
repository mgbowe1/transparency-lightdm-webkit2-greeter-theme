var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];
var Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function checkTime(i) {
    if(i < 10) {
      i = "0" + i;
    }
    else {
      i = "" + i;
    }
    return i;
}

function startTime() {
  var today = new Date();
  var dm = today.getDate().toString();
  var dw = Days[today.getDay()];
  var mon = Months[today.getMonth()];
  var h = checkTime(today.getHours());
  var min = checkTime(today.getMinutes());
  var s = checkTime(today.getSeconds());
  document.getElementById("current_time").innerHTML = dw + ", " + dm + " " + mon + " " + h + ":" + min + ":" + s;
  var t = setTimeout(startTime, 500);
}
function loginThemeMain() {
  startTime();
  document.getElementById("hostname").innerHTML = lightdm.hostname;
}
loginThemeMain();
