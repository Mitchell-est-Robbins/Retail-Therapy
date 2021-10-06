// Declare all variables
var homeSearch = document.getElementById('search');
var homeButton = document.getElementById('searchBtn');
// Declare local storage variable
var promise = localStorage.getItem('search');

// Create function to store search to local storage and redirect
function fullfillSearch(event) {
    // clears local storage which is neccessary for proper functionality
    localStorage.clear();
    // sets promise as the value of the search input
    promise = homeSearch.value;
    console.log(promise);
    event.preventDefault();
    // Create local storage variable
    localStorage.setItem('search', JSON.stringify(promise));
    console.log(localStorage);
    // Redirect to next page
    window.location.href = 'search-results.html';
}

// Set up listening event
homeButton.addEventListener('click', fullfillSearch)