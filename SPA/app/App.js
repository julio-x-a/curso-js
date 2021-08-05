import API from './helpers/poke_api.js';
import { ajax } from './helpers/ajax.js';

export function App() {
  document.getElementById('root').innerHTML = `<h1>SPA</h1>`;
  ajax();
}
