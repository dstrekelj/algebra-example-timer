var timerElement = document.getElementById('timer');
var startButton = document.querySelector('[data-action-start]');

var timerElementStyle = getComputedStyle(timerElement);
var initialFontSize = parseInt(timerElementStyle.fontSize);

var intervalId = null;

startButton.addEventListener('click', function () {
  var time = parseInt(timerElement.dataset.startTime);
  var blinkTime = parseInt(timerElement.dataset.blinkTime);
  var fontSize = initialFontSize;

  if (intervalId !== null) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(function () {
    timerElement.innerHTML = time;
    timerElement.style.fontSize = fontSize + 'px';
    fontSize += 5;

    timerElement.classList.toggle('blink', time > 0 && time < blinkTime);
    timerElement.classList.toggle('expired', time === 0);

    if (time === 0) {
      clearInterval(intervalId);
      intervalId = null;

      return;
    }

    time--;
  }, 1000);
});
