export default function getGeolocation(id) {
  const $id = document.getElementById(id);
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
  };

  const succes = (position) => {
    let coords = position.coords;
    $id.innerHTML = `
      <p>Posición:</p>
      <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precisión: <b>${coords.accuracy}</b> metros</li>
      </ul>
      <a href="https://www.google.com/maps/@${coords.latitude},
      ${coords.longitude}, 1z" target="_blank" rel="noopener">
      Ver en Google Maps
      </a>
    `;
  };

  const error = (err) => {
    $id.innerHTML = `<p><mark>Error: ${err.message}</mark></p>`;
  };

  navigator.geolocation.getCurrentPosition(succes, error, options);
}
