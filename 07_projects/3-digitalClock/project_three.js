const clock = document.getElementById('clock');
const dateElement = document.getElementById('date');
setInterval(function () {
  let date = new Date();

  dateElement.innerHTML = date.toLocaleDateString();

  clock.innerHTML = date.toLocaleTimeString();

}, 1000);

