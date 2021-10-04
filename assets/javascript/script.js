console.log("success")






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