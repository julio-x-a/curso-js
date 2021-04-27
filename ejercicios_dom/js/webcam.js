export default function webCam(id) {
  const $video = document.getElementById(id);
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((strem) => {
        $video.srcObject = strem;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML('beforebegin', `<p><mark>${err}</mark></p>`);
        console.log(`Error: ${err}`);
      });
  }
}
