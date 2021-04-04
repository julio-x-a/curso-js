export default function responsiveMedia(id, mq, mobile, desktop) {
  let breakpoint = window.matchMedia(mq);
  const responsive = (e) => {
    if (e.matches) {
      document.getElementById(id).innerHTML = desktop;
    } else {
      document.getElementById(id).innerHTML = mobile;
    }
  };
  breakpoint.addEventListener('change', responsive);
}
