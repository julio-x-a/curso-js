export default function scrollSpy() {
    const $sections = document.querySelectorAll("section[data-scroll-spy]");
    const callback = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.querySelector(`a[data-scroll-spy][href="#${entry.target.id}"]`).
                classList.add('active');
            } else {
                document.querySelector(`a[data-scroll-spy][href="#${entry.target.id}"]`).
                classList.remove('active');
            }
        })
    }
    const observer = new IntersectionObserver(callback, {
        //root
        //rootMargin: "-250px"
        threshold: [0.5, 0.75],
    });
    $sections.forEach(section => observer.observe(section))
}