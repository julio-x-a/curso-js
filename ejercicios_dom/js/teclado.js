const doc = document,
  LEFT = 37,
  UP = 38,
  RIGHT = 39,
  DOWN = 40;

let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
  const $ball = doc.querySelector(ball);
  const $stage = doc.querySelector(stage);
  let limitBall = $ball.getBoundingClientRect();
  let limitStage = $stage.getBoundingClientRect();
  switch (e.keyCode) {
    case LEFT:
      if (limitBall.left > limitStage.left) x--;
      e.preventDefault();
      break;
    case UP:
      if (limitBall.left > limitStage.left) y--;
      e.preventDefault();
      break;
    case RIGHT:
      if (limitBall.left > limitStage.left) y--;
      e.preventDefault();
      break;
    case DOWN:
      if (limitBall.left > limitStage.left) y--;
      e.preventDefault();
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
  let key = e.key;

  switch (key) {
    case 'a':
      if (e.altKey) alert('Alert');
      break;
    case 'c':
      if (e.altKey) confirm('Confirm');
      break;
    case 'p':
      if (e.altKey) prompt('Prompt');
      break;
  }
}
