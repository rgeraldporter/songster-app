
const get = () => new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:8813/config', true);
    req.onload = function () {
        this.status >= 200 && this.status < 300
            ? resolve(req.response)
            : reject(req);
    }
    req.onerror = () => reject(req);
    req.send();
});

const put = config => new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('PUT', 'http://localhost:8813/config');
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload = function () {
        this.status >= 200 && this.status < 300
            ? resolve(req.response)
            : reject(req);
    }
    req.onerror = () => reject(req);
    req.send(JSON.stringify(config));
});

export default {
    get,
    put
}
