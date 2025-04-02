const clock = document.getElementById("clock");
const date = document.getElementById("date");

function theTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let day = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  date.innerHTML = `${day} / ${month} / ${year}`;
}
theTime();
setInterval(theTime, 1000);
