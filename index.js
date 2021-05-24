// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var baseURL =
  'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';

//fetch(baseURL + '/new', { method: 'POST' } )
//  .then(response => response.json(), error => alert(error))
//  .then(data => {
//    console.log(data);
//  });

var key="0d344cd4";

fetch(baseURL + '/post?key='+key+'&msg=[{"titolo": "cane","messaggio":"comprare il cibo"}]',{  method: 'POST'})
  .then(response => response.json(), error => alert(error))
  .then(data => {
    console.log(data);
  });

fetch(baseURL + '/get?key='+key)
  .then(response => response.json(), error => alert(error))
  .then(data => {
    console.log(data);
    var obj= JSON.parse(data);
    console.log(obj[0].titolo);
    console.log(obj[0].messaggio);
  });


