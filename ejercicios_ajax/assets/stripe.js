import STRIPE_KEYS from './stripe-keys.js';

const d = document,
  $coffee = d.getElementById('coffee'),
  $template = d.getElementById('coffee-template').content,
  $fragment = d.createDocumentFragment(),
  fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`
    }
  };

let prices, products;

Promise.all([
  fetch('https://api.stripe.com/v1/products', fetchOptions),
  fetch('https://api.stripe.com/v1/prices', fetchOptions)
])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    console.log(json);
    products = json[0].data;
    console.log(products);
  })
  .catch((err) => {
    console.log(err);
    let msg = err.statusText || 'Ocurrió un error :(';
    $coffee.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
  });

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', (e) => {
  if (xhr.readyState !== 4) return;
  if (xhr.status >= 200 && xhr.status <= 300) {
    let res = xhr.responseText;
  }
});
