


 const lista = document.querySelector('.posts');
 const item = document.querySelector('#template');
fetch('https://api.themoviedb.org/3/movie/popular?api_key=535029b12126fd0395272f6e0b4b8764&language=en-US&page=1')
.then( response => response.json())
    .then( data => {
         console.log(data);
         data.results.map(element => {
          console.log(element);
          });
          for( const info of data.results){
            const article = document.importNode(item.content,true);
            article.querySelector('h2').textContent = info.title;
            article.querySelector('p').textContent = info.overview;
            lista.append(article)
        }
    })
