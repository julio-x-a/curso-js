export default function videoSmart() {
    const $video = document.getElementById('video-smart');
    const callback = (entry) =>{
      console.log(entry.isIntersecting);
    }
    const observer = new IntersectionObserver(callback, {
        threshold: [0.5, 0.75]
    });
    observer.observe($video);
}