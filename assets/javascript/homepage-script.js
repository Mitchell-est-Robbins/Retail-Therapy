var homeSearch = document.getElementById('search')
var homeButton = document.getElementById('searchBtn')

var promise = localStorage.getItem('search')

function fullfillSearch(event) {
    promise = homeSearch.value
    console.log(promise)
    event.preventDefault();
    localStorage.setItem('search', JSON.stringify(promise));
    console.log(localStorage)
    window.location.href = 'search-results.html'
}

// Set up listening event
homeButton.addEventListener('click', fullfillSearch)