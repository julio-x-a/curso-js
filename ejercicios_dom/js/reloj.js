export function initClock(btnClock, btnStop, clock) {
  const d = document;
  let temp;

  d.addEventListener('click', (e) => {
    if (e.target.matches(btnClock)) {
      temp = setInterval(() => {
        d.querySelector(clock).textContent = new Date().toLocaleTimeString();
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(temp);
      d.querySelector(clock).textContent = '⏲';
      d.querySelector(btnClock).disabled = false;
    }
  });
}
export function initAlarm(btnInit, btnStop, sound) {
  const d = document;
  const $alarm = d.createElement('audio');
  $alarm.src = sound;
  let temp;

  d.addEventListener('click', (e) => {
    if (e.target.matches(btnInit)) {
      temp = setInterval(() => {
        $alarm.play();
      }, 0);
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(temp);
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(btnInit).disabled = false;
    }
  });
}
