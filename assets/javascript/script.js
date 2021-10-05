var productSearch = document.getElementById('product');
var categorySearch = document.getElementById('category');
var resultsLayout = document.getElementById('results-display')
var advancedSearchBtn = document.getElementById('advanced-search')
console.log(productSearch);
productSearch.value = productSearch.textContent
console.log(productSearch.value);
console.log(categorySearch);
console.log(categorySearch.value);
var resultQuantity = 12
var resultsIndex = 0
var resultBlockArray = []


function createContainers() {
    var resultsGrid = document.createElement('div');
      // Create a holding grid 
      var rowGrid = document.createElement('div');
      console.log(rowGrid)
      // Set up a div to display in row
      rowGrid.classList.add('row');
      console.log(rowGrid)

    for (var i = 0; i < resultQuantity; i++) {
    // Set up three columns with class s12 and m3 and unique ID
    var resultBlock = document.createElement('div');
    console.log(resultBlock);
    // resultBlock.classList.add('col', 's12', 'm4',);
    resultBlock.className ='card small';
    // console.log(resultBlock);
    // resultBlock.textContent = "Hello I'm Block" + i
    resultBlock.id= "block" + i;
    // console.log(resultBlock);
    // Push each finished block into an array
    resultBlockArray.push(resultBlock);
    console.log(resultBlockArray);
    // Attach each result to the row
    rowGrid.append(resultBlock);
    // console.log(rowGrid);
    // Append rows to the grid
    resultsGrid.append(rowGrid);
    // console.log(resultsGrid);
    }
    resultsLayout.append(resultsGrid);
    // Call function to fill each result
    getResultsInfo();
    // Append grid to the page
    ;
}

function getResultsInfo(){
    // pass productSearch value into the api
    var productSearch = "tv";
    var categorySearch = "aps";

    var apiURL = 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=' + productSearch + '&country=US&category=' + categorySearch;    
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
    }).then(function(data){
        console.log(data.products);
        // call functions to use the data
        createCards(data.products);
    });
}

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
    imageDiv.append(productImage);
    console.log(productImage);
    
    // create card content Div
    var cardContentDiv = document.createElement('div');
    cardContentDiv.classList.add('card-content');
    // create product Title and append content
    var productTitle = document.createElement('span');
    productTitle.classList.add('center-align', 'card-title');
    productTitle.textContent = searchProducts[i].title;
    cardContentDiv.append(productTitle);
    console.log(productTitle);
    // create current Price and append to content
    var currentPrice = document.createElement('p')
    currentPrice.classList.add('description')
    currentPrice.textContent = "Sale Price: " + searchProducts[i].price.current_price
    cardContentDiv.append(currentPrice);
    console.log(currentPrice)
    // create review stars track and append to card content
    var reviewStars = document.createElement('p')
    reviewStars.classList.add('description')
    reviewStars.textContent = "Amazon Product Rating: " + searchProducts[i].reviews.rating
    cardContentDiv.append(reviewStars)
    console.log(reviewStars)
    // create br element
    // var pageSpace = document.createElement('br')
    // cardContentDiv.append(pageSpace)
    // create total review count and append to card content
    var reviewCount = document.createElement('p')
    reviewCount.classList.add('description')
    reviewCount.textContent = "Total Reviws: " + searchProducts[i].reviews.total_reviews
    cardContentDiv.append(reviewCount)
    console.log(reviewCount)
    // append card content to card
    // append image div to card div
    result.append(imageDiv)
    result.append(cardContentDiv)
    // append card to results
    // result.append(cardDiv);
    }
}


// // KEEP AT BOTTOM OF JAVAFILE


// Initialization of Materialize input field in Sidebar Search
  $(document).ready(function(){
    $('select').formSelect();
  });

  M.AutoInit();
        
//  Functions with click events at the bottom
createContainers()