// Declare all variables at top of page
var productSearch = document.querySelector('#product');
var categorySearch = document.querySelector('#category');
var resultsLayout = document.getElementById('results-display')
var advancedSearchBtn = document.querySelector('#advanced-search');
var newQuote = "";
var motivatorBtn = document.getElementById("motivator")
var motoWords = document.getElementById("mototext")
// console.log(productSearch);
// // productSearch.value = productSearch.textContent
// console.log(productSearch.value);
// console.log(categorySearch);
// console.log(categorySearch.value);

// Declares amount of results displayed
var resultQuantity = 12
var resultsIndex = 0
var resultBlockArray = []

// Function to create card elements on page
function createContainers(event) {
  if (event) {
    event.preventDefault()
  }
  // Clears everything besides sidebar and navigation bar
  resultsLayout.innerHTML=""
  
  // Create a holding grid 
  var resultsGrid = document.createElement('div');
  // Set up a div to display in row
  var rowGrid = document.createElement('div');
  // console.log(rowGrid)
  rowGrid.classList.add('row');
  // console.log(rowGrid)

  // Creates card as dicated by result quantity
  for (var i = 0; i < resultQuantity; i++) {
    // Set up three columns with responsive classes
    var resultBlock = document.createElement('div');
    // console.log(resultBlock);
    // resultBlock.classList.add('col', 's12', 'm4',);
    resultBlock.className = 'card large';
    resultBlock.classList.add('col', 's12', 'm4', 'l3', 'card-background');
    
    // console.log(resultBlock);
    // resultBlock.textContent = "Hello I'm Block" + i
    resultBlock.id = "block" + i;
    // console.log(resultBlock);
    // Push each finished block into an array
    resultBlockArray.push(resultBlock);
    // console.log(resultBlockArray);
    // Attach each result to the row
    rowGrid.append(resultBlock);
    // console.log(rowGrid);
    // Append rows to the grid
    resultsGrid.append(rowGrid);
    // console.log(resultsGrid);
  };
  // Append grid to the page
  resultsLayout.append(resultsGrid);
  // Call function to fill each result
  getResultsInfo();

}

function getResultsInfo() {
  // Declares local storage variable if existing
  var promise = localStorage.getItem('search')
  var firstSearch = JSON.parse(promise)
  console.log(promise);
  console.log(firstSearch);
  // pass productSearch value into the api
  //   var productSearch = ProductSearchTerm;
  //   var categorySearch = CategorySearchTerm;

  // Check if local storage = true, get search terms from local storage
  if (localStorage.length !==0) {
    ProductSearchTerm = firstSearch;
    console.log(firstSearch);
    console.log(ProductSearchTerm)
    CategorySearchTerm = 'aps'
  } else {
    // Else get search terms from user input
    var ProductSearchTerm = productSearch.value
    console.log(ProductSearchTerm)
    var CategorySearchTerm = categorySearch.value
  }

  // Responsive api
  var apiURL = 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=' + ProductSearchTerm + '&country=US&category=' + CategorySearchTerm;
  
  console.log(apiURL)
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": apiURL,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com",
      "x-rapidapi-key": "0043ca6f4dmshdf70dfcdb9f6d49p1d4043jsn7d470c8cf85a"
    }
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  }).then(function (data) {
    console.log(data.products);
    // call functions to use the data
    createCards(data.products);
  });

}

// Function to create the correct cards given the api response
function createCards(searchProducts) {
  console.log(searchProducts);
  for (var i = 0; i < resultQuantity; i++) {
    // create template literal to attach result to correct block
    var result = document.getElementById(`block` + [i]);
    // create card div
    // var cardDiv = document.createElement('div');
    // cardDiv.classList.add('card small');
    // create image div
    var imageDiv = document.createElement('div');
    imageDiv.classList.add('card-image');
    // create image element and append to imageDiv
    var productImage = document.createElement('img');
    productImage.setAttribute('src', searchProducts[i].thumbnail);
    // productImage.setAttribute('style', 'max-height:300px')
    // productImage.setAttribute('style', 'width: 20vw')
    imageDiv.append(productImage);
    // console.log(productImage);
    // create card content Div
    var cardContentDiv = document.createElement('div');
    cardContentDiv.classList.add('card-content');
    // create product Title and append content
    var productTitle = document.createElement('p');
    var string = searchProducts[i].title;
    var length = 75;
    var trimmedString = string.substring(0, length);
    productTitle.textContent = trimmedString;
    cardContentDiv.append(productTitle);
    productTitle.setAttribute('style', 'font-size: 14px, font-style: inherit')
    productTitle.classList.add('center-align', 'title-of-card');
    // console.log(productTitle);
    // create review stars track and append to card content
    var reviewStars = document.createElement('p')
    reviewStars.textContent = "Amazon Product Rating: " + searchProducts[i].reviews.rating
    reviewStars.setAttribute('style', 'font-size: 14px, font-style: inherit')
    reviewStars.classList.add('description')
    cardContentDiv.append(reviewStars)
    // console.log(reviewStars)
    // create current Price and append to content
    var currentPrice = document.createElement('p')
    currentPrice.textContent = "Sale Price: $" + searchProducts[i].price.current_price
    currentPrice.setAttribute('style', 'font-size: 14px, font-style: inherit')
    currentPrice.classList.add('description')
    cardContentDiv.append(currentPrice);
    // console.log(currentPrice)
    // Create view on Amazon hyperlink
    var productLink = document.createElement('a')
    var uniqueLink = searchProducts[i].url
    console.log(uniqueLink)
    productLink.setAttribute('href', uniqueLink)
    productLink.setAttribute('style', 'font-size: 14px, font-style: inherit, color: white, text-decoration: underline')
    productLink.classList.add('description', 'unique-link')
    productLink.textContent = 'View this product on Amazon'
    cardContentDiv.append(productLink)
    // create total review count and append to card content
    var reviewCount = document.createElement('p')
    reviewCount.textContent = "Total Reviews: " + searchProducts[i].reviews.total_reviews
    reviewCount.setAttribute('style', 'font-size: 14px, font-style: inherit')
    cardContentDiv.append(reviewCount)
    // console.log(reviewCount)
    reviewCount.classList.add('description')
    // Style paragraphs and card title
    // paragraphs.setAttribute('style', 'font-size: 14px, font-style: inherit')
    // append image div to card div
    result.append(imageDiv)
    // append card content to card
    result.append(cardContentDiv)
  }
  // Clears local storage so it is responsive to user input on next search
  localStorage.clear();
  console.log(localStorage)
}

// ========================API  #2 motivational quotes


function motoTextGeneration() {
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://motivational-quotes1.p.rapidapi.com/motivation",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "x-rapidapi-host": "motivational-quotes1.p.rapidapi.com",
      "x-rapidapi-key": "0043ca6f4dmshdf70dfcdb9f6d49p1d4043jsn7d470c8cf85a"
    },
    "processData": false,
    "data": {
      "key1": "value",
      "key2": "value"
    }
  };
  

  $.ajax(settings).done(function (response) {
    // console.log(response);
    //clears quote box and add response
    newQuote = ""
    newQuote = response
    console.log (newQuote);
    motoWords.textContent = newQuote
  });
}

// // KEEP AT BOTTOM OF JAVAFILE

// Initialization of Materialize input field in Sidebar Search
$(document).ready(function () {
  $('select').formSelect();
});

M.AutoInit();

//  Functions with click events at the bottom
advancedSearchBtn.addEventListener('click', createContainers)
motivatorBtn.addEventListener('click',motoTextGeneration)
// var motivatorBtn = document.getElementById("motivator").addEventListener("click", function () {
//   //fun the function to generate the newquote 
//   motoTextGeneration()
// })

// Runs after window initialization if there is local storage
function init() {
  if(localStorage.length !==0){
  $('#product').attr('placeholder', JSON.parse(localStorage.getItem('search')))
  createContainers();
}}
// Calls for function on initialization which will only run on redirect
init()