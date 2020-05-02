
var search = "dogs";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=3ItiEd1WuPVZcujYQ40nlOrMKpMJ4uom";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });

  function searchResults() {
    var search = $("#searchTerm").val();
    var records
  }