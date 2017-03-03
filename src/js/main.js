import Main from '../components/main.html';
import http from './http.js';

const component = new Main({
  target: document.querySelector( 'main' ),
  data: {
      title: 'Songster config',
      interval: 5,
      folder: 'songs/eame/',
      sort: 'random',
      latitude: 44.123,
      longitude: -120.555,
      cycle: 'diurnal'
  }
});

component.observe('sort', sort => {
  http.put({sort});
});

component.observe('interval', interval => {
  http.put({interval});
});

component.observe('cycle', cycle => {
  http.put({cycle});
});