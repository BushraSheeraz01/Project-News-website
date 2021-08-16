// 'use strict';

// function counter() {
//   let seconds = 0;
//   setInterval(() => {
//     seconds += 1;
//     document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
//   }, 1000);
// }

// counter();

// ****  My Project  ****

window.onload = fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=9455fa6ba2fc41c192bf7a5ca2f1a2e9`)
  .then(response => {
    return response.json();

  }).then(function displayResults(response) {
    //console.log(response.status);
    // console.log(response.articles[]);
    for (var i = 0; i <= 5; i++) {
      console.log("data" + i);
      document.getElementById("dd").innerHTML += "<div class='card col-lg-3' id='news-card'><img class='card-img-top' src='" + response.articles[i].urlToImage + "' alt='Card image cap' style='image-size: fill'><h5 class='card-title'>" + response.articles[i].title + "</h5><div><p><button class='btn btn-dark' type='button' data-toggle='collapse' data-target='#collapseExample" + i + "' aria-expanded='false aria-controls='collapseExample'>More</button></p><div class='collapse' id='collapseExample" + i + "'><div class='card-body'><p>" + response.articles[i].description + "</p><p>- " + response.articles[i].author + "</p></div></div></div></div>";
    }

  });


