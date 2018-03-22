

$(document).ready(function() {
    $('#searchForm').on("submit", function(event) {
      event.preventDefault();
      let city = $('#search').val();
      $('#search').val("");
      $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=7fbd1c73cafb287415d9c63a48da591a`,
        type: 'GET',
        data: {
          format: 'json'
        
        },
        
        success: function(response) {
          $('#showCity').text(`Current Weather in ${response.name}:`);
          $('.showTemp').text(`${response.main.temp}oF`);
          $('.showCondition').text(`${response.weather[0].description}`);
          $('#conditionIcon').attr("src", `http://openweathermap.org/img/w/${response.weather[0].icon}.png`);
          console.log(response);
        },
        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.")
        }
      });
    });
  });
  
  console.log("connected");

























// Sidney's portion
// ==================

// Creates map setting
function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 32.781176, lng: -96.799383},
      zoom: 13,
      mapTypeId: 'roadmap'
    });
    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
   
    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });
    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();
      if (places.length == 0) {
        return;
      }
      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];
      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };
        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }
  // url call back for google maps
  function loadScript() {
    var script = document.createElement("script");
    script.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAsWkvNbmXG6vlyqnYdfy3JA4jTBKXzaf8/sensor=false&callback=init";
  document.body.appendChild(script);  
  }




















  









// Grace's portion
// ==================
var config = {
    apiKey: "AIzaSyCSGFZALM3AFGAO6l7rYs0FQxo9skFpoTM",
    authDomain: "wanderlust-17647.firebaseapp.com",
    databaseURL: "https://wanderlust-17647.firebaseio.com",
    projectId: "wanderlust-17647",
    storageBucket: "",
    messagingSenderId: "285359026722"
  };
  firebase.initializeApp(config);


$("#formName").on("submit", function(e) {
    e.preventDefault();
    var input = $(".user-input").val().trim();
    database.ref().push({input: input});
    console.log(input);
    $(".fire-base").append(input);
    $(".user-input").val("");

   
});

    // $(".fire-base").text("boop!");

for (var i=0; i<database.length; i++) {
    console.log(database);
    
    // $(".fire-base").append$("<div>"database[i].input"</div>");
}

// var database = firebase.database();