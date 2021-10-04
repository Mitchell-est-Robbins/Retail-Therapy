var productSearch = document.getElementById('product');
var categorySearch = document.getElementById('category');
var resultsLayout = document.getElementById('results-display')
console.log(productSearch);
console.log(productSearch.value);
console.log(categorySearch);
console.log(categorySearch.value);
var resultQuantity = 6
var resultsIndex = 0
function createContainers() {
    var resultsGrid = document.createElement('div');
      // Create a holding grid 
      var rowGrid = document.createElement('div');
      console.log(rowGrid)
      // Set up a div to display in row
      rowGrid.classList.add('row');
      console.log(rowGrid)

    for (var i = 0; i < resultQuantity; i++) {
    // Set up three columns with class s12 and m3
    var resultBlock = document.createElement('div');
    console.log(resultBlock);
    resultBlock.classList.add('col', 's12', 'm4');
    console.log(resultBlock);
    resultBlock.textContent = "Hello I'm Block [i]"
    console.log(resultBlock);
    rowGrid.append(resultBlock)
    console.log(rowGrid);
    resultsGrid.append(rowGrid)
    console.log(resultsGrid);
}
resultsLayout.append(resultsGrid);
}
createContainers()
    
    
    // Repeat the top function again


//=============================================
//Deezer free calls https://rapidapi.com/deezerdevs/api/deezer-1/
//=============================================
// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://deezerdevs-deezer.p.rapidapi.com/radio/%7Bid%7D",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
// 		"x-rapidapi-key": "0043ca6f4dmshdf70dfcdb9f6d49p1d4043jsn7d470c8cf85a"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

//============================================
//Amazon API paid, 3500 calls a month  https://rapidapi.com/logicbuilder/api/amazon-product-reviews-keywords/
//==========================================
// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=iphone&country=US&category=aps",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com",
// 		"x-rapidapi-key": "0043ca6f4dmshdf70dfcdb9f6d49p1d4043jsn7d470c8cf85a"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// KEEP AT BOTTOM OF JAVAFILE

// Initialization of Materialize input field in Sidebar Search
  $(document).ready(function(){
    $('select').formSelect();
  });

  M.AutoInit();
        