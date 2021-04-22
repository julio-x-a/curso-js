export default function networkStatus(aviso) {
    const $span = document.getElementById('conexion');
    window.addEventListener("online", (e) => {
        $span.classList.add('online');
        $span.classList.remove('offline');
        $span.innerHTML = "Conexión establecida";
    });
    window.addEventListener("offline", (e) => {
        $span.classList.add('offline');
        $span.classList.remove('online');
        $span.innerHTML = "Conexión perdida";
    });
}