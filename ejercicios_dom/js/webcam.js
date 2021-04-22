export default function webCam(id) {
    const $video = document.getElementById(id);
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video:true, audio:false})
        .then(strem =>{

        })
        .catch((err) => console.log());
    }
}