(() => {
  const xhr = new XMLHttpRequest();
  $xhr = document.getElementById('xhr');
  $fragment = document.createDocumentFragment();

  xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      console.log(json);
    } else {
      console.log('error');
    }
  });
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.send();
})();
