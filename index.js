// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var baseURL =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
var postit = [
  {
    titolo: 'cane',
    messaggio: 'comprare il cibo',
    importante: true
  }
];
var msg = JSON.stringify(postit);
fetch(baseURL + '/new?secret=ssw2022')  // new request
  .then(response => response.json(), error => console.log(error))
  .then(key => {
    console.log(key);
    fetch(baseURL + '/set?key=' + key, { method: 'POST', body: msg }) // set request
      .then(response => response.json(), error => console.log(error))
      .then(data => {
        console.log(data);
        fetch(baseURL + '/get?key=' + key)  // get request
          .then(response => response.json(), error => console.log(error))
          .then(data => {
            console.log(data);
            var obj = JSON.parse(data);
            console.log(obj[0].titolo);
            console.log(obj[0].messaggio);
          });
      });
  });
