import Main from '../components/main.html';

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