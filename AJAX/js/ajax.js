/** Peticion ajax usando el objeto XMLHttpRequest */
(() => {
  const STATE_OK = (state) => state >= 200 && state < 300;
  const xhr = new XMLHttpRequest();
  const $xhr = document.getElementById('xhr');
  const $fragment = document.createDocumentFragment();

  xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState !== 4) return;
    if (STATE_OK(xhr.status)) {
      let json = JSON.parse(xhr.responseText);
      json.forEach((user) => {
        const $li = document.createElement('li');
        $li.textContent = `${user.name} - ${user.email}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      let message = xhr.statusText || 'Ocurrió un error!';
      $xhr.innerHTML = `Error: ${xhr.status}: ${message}`;
    }
  });
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.send();
})();

/** Petición AJAX usando la api Fetch y Promesas */
(() => {
  const $fetch = document.getElementById('fetch');
  const $fragment = document.createDocumentFragment();

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .then((json) => {
      json.forEach((user) => {
        const $li = document.createElement('li');
        $li.innerHTML = `${user.name} - ${user.email}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      let message = err.statusText || 'Ocurrió un error!';
      $fetch.innerHTML = `Error: ${err.status}: ${message}`;
    })
    .finally(() => {
      console.log('Finally');
    });
})();

/** Petición AJAX usando Fetch asyn await */
(() => {
  const $fetchAsync = document.getElementById('fetch-async');
  const $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/users');
      let json = await res.json();
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      json.forEach((user) => {
        const $li = document.createElement('li');
        $li.innerHTML = `${user.name} - ${user.email}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      let message = err.statusText || 'Ocurrió un error!';
      $fetchAsync.innerHTML = `Error: ${err.status}: ${message}`;
    }
  }
  getData();
})();

/** AJAX con la librería axios con PROMESAS*/
(() => {
  const $axios = document.getElementById('axios');
  const $fragment = document.createDocumentFragment();

  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      const json = res.data;
      json.forEach((user) => {
        const $li = document.createElement('li');
        $li.innerHTML = `${user.name} - ${user.email}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      let message = err.response.statusText || 'Ocurrió un error!';
      $axios.innerHTML = `Error: ${err.response.status}: ${message}`;
    })
    .finally(() => {});
})();

/** AJAX con axios + asyn - await */
(() => {
  const $axiosAsync = document.getElementById('axios-async');
  const $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get('https://jsonplaceholder.typicode.com/users');
      let json = await res.data;
      json.forEach((user) => {
        const $li = document.createElement('li');
        $li.innerHTML = `${user.name} - ${user.email}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
    } catch (err) {
      let message = err.response.statusText || 'Ocurrió un error!';
      $axiosAsync.innerHTML = `Error: ${err.response.status}: ${message}`;
    }
  }
  getData();
})();
