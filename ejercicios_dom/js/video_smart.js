/**
 *Esta función encuentra todos los elementos HTML video, con 
 el data attribute, identifica si está intersectado y se va a
 reproducir o pausar dependiendo de esto.
 */

export default function videoSmart() {
  const $videos = document.querySelectorAll('video[data-smartvideo]');
  const callback = (entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? entry.target.play() : entry.target.pause();
      window.addEventListener('visibilitychange', (e) => {
        document.visibilityState === 'visible'
          ? entry.target.play()
          : entry.target.pause();
      });
    });
  };
  const observer = new IntersectionObserver(callback, {
    threshold: [0.5]
  });
  $videos.forEach((video) => observer.observe(video));
}
