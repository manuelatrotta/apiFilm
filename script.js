alert('creare');

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src ='logo.png';

const h1 = document.createElement('TITOLO');
  h1.textContent ='Lista di films';

const container = document.createElement('div');

app.appendChild(logo);
app.appendChild(h1);
app.appendChild(container);



//richiesta
var request = new XMLHttpRequest();
request.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=535029b12126fd0395272f6e0b4b8764&language=en-US&page=1');
request.onload = function () {

  // creare risposta in formato json
  var data = JSON.parse(this.response);
  console.log(data);
  if (request.status >= 200 && request.status < 400) {
      for (var i = 0; i < data.results.length; i++) {
        console.log(data.results[i]);
        const card = document.createElement('div');

        const h1 = document.createElement('h1');
        h1.textContent = data.results[i].title;



        container.appendChild(card);
        card.appendChild(h1);
    
      }
  } else {
    const errorMessage = document.createElement('errore');
    errorMessage.textContent = `Non è connesso!`;
    app.appendChild(errorMessage);
  }
}

request.send();
