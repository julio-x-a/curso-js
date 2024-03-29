document.addEventListener("DOMContentLoaded", (e) => {
    const includeHTML = (element, url) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', (e) => {
            if (xhr.readyState !==4) return;
            if (xhr.status >= 200 && xhr.status <300) {
                element.outerHTML = xhr.responseText;
            } else {
                let message = xhr.statusText || "Error al cargar el archivo";
                element.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`;
            }
        })
        xhr.open('GET', url);
        xhr.setRequestHeader("Content-Type", "text/html; charset=utf-8");
        xhr.send();
    }
    document
    .querySelectorAll("[data-include]")
    .forEach(element => includeHTML(element, element.getAttribute("data-include")));
});