import countdown from './countdown.js';
import setTheme from './dark_mode.js';
import showPanel from './menu_hamburguesa.js';
import { initAlarm, initClock } from './reloj.js';
import { printUpButton, goTop } from './scroll.js';
import { moveBall, shortcuts } from './teclado.js';
import responsiveMedia from './responsive_js.js';
import testResponsive from './responsive-tester.js';
import userDeviceInfo from './user_agent.js';
import networkStatus from './network_detection.js';
import webCam from './webcam.js';
import getGeolocation from './geolocalizacion.js';

const doc = document;

doc.addEventListener('DOMContentLoaded', (e) => {
  showPanel('.panel-btn', '.panel', '.menu a');
  initClock('#init-clock', '#stop-clock', '.clock');
  initAlarm('#init-alarm', '#stop-alarm', './assets/alarm.mp3');
  goTop('#btn-scroll');
  responsiveMedia('youtube', '(min-width: 1024px)', 'Mobile', 'Desktop');
  testResponsive('responsive-tester');
  userDeviceInfo('#user-agent');
  webCam('webcam');
  getGeolocation('geolocation');
  // countdown('count');
});

doc.addEventListener('keydown', (e) => {
  shortcuts(e);
  moveBall(e, '.ball', '.stage');
});

doc.addEventListener('scroll', (e) => {
  printUpButton('.btn-scroll');
});

setTheme('.btn-dark');
networkStatus('#conexion');
