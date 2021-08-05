export function ajax(props) {
  let { url, success } = props;
  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => success(data))
    .catch((err) => console.log(err));
}
