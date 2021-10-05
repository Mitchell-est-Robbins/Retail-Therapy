var productSearch = document.getElementById('product');
var categorySearch = document.getElementById('category');
var resultsLayout = document.getElementById('results-display')
var advancedSearchBtn = document.getElementById('advanced-search')
console.log(productSearch);
productSearch.value = productSearch.textContent
console.log(productSearch.value);
console.log(categorySearch);
console.log(categorySearch.value);
var resultQuantity = 6
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
    resultBlock.classList.add('col', 's12', 'm4');
    console.log(resultBlock);
    resultBlock.textContent = "Hello I'm Block" + i
    resultBlock.id= "block" + i;
    console.log(resultBlock);
    // Push each finished block into an array
    resultBlockArray.push(resultBlock);
    console.log(resultBlockArray);
    // Attach each result to the row
    rowGrid.append(resultBlock);
    console.log(rowGrid);
    // Append rows to the grid
    resultsGrid.append(rowGrid);
    console.log(resultsGrid);
    }
    // Call function to fill each result
    getResultsInfo()
    // Append grid to the page
    resultsLayout.append(resultsGrid);
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
    var result = document.getElementById(`block` + [i])
    // create product Title
    var productTitle = document.createElement('span');
    productTitle.textContent = searchProducts[i].title
    console.log(productTitle)
    // create current Price
    var currentPrice = document.createElement('p')
    currentPrice.textContent = searchProducts[i].price.current_price
    console.log(currentPrice)
    // create image element
    var productImage = document.createElement('img')
    productImage.setAttribute('src', searchProducts[i].thumbnail)
    console.log(productImage);
    // create review stars track
    var reviewStars = document.createElement('span')
    reviewStars.textContent = searchProducts[i].reviews.rating
    console.log(reviewStars)
    // create total review cound
    var reviewCount = document.createElement('span')
    reviewCount.textContent = searchProducts[i].reviews.total_reviews
    console.log(reviewCount)
    // append information to the results
    result.append(productImage);
    result.append(productTitle);
    result.append(currentPrice);
    result.append(reviewStars);
    result.append(reviewCount);
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