const hourSpanElement = document.getElementById("hour");
const minutesSpanElement = document.getElementById("minutes");
const secondsSpanElement = document.getElementById("seconds");
const ampmElement = document.getElementById('ampm');

function updateClock() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let seconds = today.getSeconds();
  let ampm = "AM";

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }
  if(hour < 10){
    hour = '0' + hour;
  }else{
    hour = hour;
  }
  if(minute < 10){
    minute = '0' + minute;
  }else{
    minute = minute;
  }
  seconds = seconds < 10 ? "0" + seconds : seconds;
  hourSpanElement.textContent = hour;
  minutesSpanElement.textContent = minute;
  secondsSpanElement.textContent = seconds;
  ampmElement.textContent = ampm;

  setTimeout(()=>{
    updateClock()
  }, 1000)
}
updateClock();
