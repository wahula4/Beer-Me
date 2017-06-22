 // $("#search-button").on("click", function() {

  	// var city = $("#city-input").val().trim();
  	var queryURL = "http://beermapping.com/webservice/loccity/1e07e953394846ca559ab1d498fb5b41/" + "denver,co" + "&s=json";
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
        	console.log(response);
        	for (var i = 0; i < response.length; i++) {
        		$("#breweries").append(response[i].name)
        	}
        	
        });

// });
