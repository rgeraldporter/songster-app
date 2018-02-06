import Main from "../components/main.html";
import http from "./http.js";

const component = new Main({
  target: document.querySelector("main"),
  data: {
    title: "Songster config",
    interval: 0.2,
    directory: "EAME",
    sort: "random",
    latitude: 44.123,
    longitude: -120.555,
    cycle: "diurnal",
    pause: false,
    volume: 4,
    folderNameOptions: ['EAME', 'BOBO']
  }
});

http
  .get()
  .then(data => component.set(JSON.parse(data)))
  .then(() => wait(2000))
  .then(() => component.observe('interval', interval => http.put({interval})))
  .then(() => component.observe('cycle', cycle => http.put({cycle})))
  .then(() => component.observe('pause', pause => http.put({pause})))
  .then(() => component.observe('sort', sort => http.put({sort})))
  .then(() => component.observe('latitude', latitude => http.put({latitude})))
  .then(() => component.observe('longitude', longitude => http.put({longitude})))
  .then(() => component.observe('directory', directory => http.put({directory})))
  .catch(console.error);

function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}