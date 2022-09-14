function getGiphy(e){
    e.preventDefault();
    let searchValue = document.getElementById("search-input").value;
    
    if (!searchValue){
        searchValue = 'random';
    }
    const img = document.querySelector('img');

    fetch('https://api.giphy.com/v1/gifs/translate?api_key=vjBEEiJBObTTNd2GAyLE3qXTUJU2PYAi&s=' + searchValue, {mode: 'cors'})
    .then(function(response){
       return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    })
    .catch(function(err) {
        console.log(err);
    });
}

function restart(){
    let searchValue = document.getElementById("search-input").value;
    searchValue = "";
}

let searchButton = document.getElementById("search-button")
searchButton.addEventListener("click", getGiphy);

document.addEventListener('DOMContentLoaded', getGiphy);

let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", restart);