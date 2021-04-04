const actualDate = new Date().getTime();
let date = new Date(2022, 3, 10);
let t;
export default function countdown(count) {
  const $count = document.getElementById(count);
  setInterval(() => {
    t = date.getTime() - actualDate.getTime();
    console.log(t);
    $count.innerHTML = new Date().getTime();
  }, 100);
}
