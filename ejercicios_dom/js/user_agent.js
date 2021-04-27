export default function userDeviceInfo(elementHtml) {
    const $element = document.querySelector(elementHtml);
    const userAgent = navigator.userAgent;
    window.addEventListener('load', (e) => {
        $element.innerHTML = userAgent;
        // if(userAgent.match(/chrome/i)) console.log(userAgent.match(/chrome/i));;
    });
    
    //window.location.href = ""; <- Redireccionar
}