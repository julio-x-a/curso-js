let $title = document.querySelector('.title');
$title.setAttribute('onmouseout', 'move()');
$title.setAttribute('onmouseover', 'move()');
function move() {
  //   setInterval(() => {
  //     console.log('ins');
  //   }, 1000);
  $title.classList.toggle('rotate-180');
}

console.log($title);
