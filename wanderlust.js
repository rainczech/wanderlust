// <<<<<<< HEAD


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
          $('.showTemp').html(`${response.main.temp}&deg;F`);
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
// =======
// var config = {
//     apiKey: "AIzaSyCSGFZALM3AFGAO6l7rYs0FQxo9skFpoTM",
//     authDomain: "wanderlust-17647.firebaseapp.com",
//     databaseURL: "https://wanderlust-17647.firebaseio.com",
//     projectId: "wanderlust-17647",
//     storageBucket: "",
//     messagingSenderId: "285359026722"
//   };
//   firebase.initializeApp(config);

// var database = firebase.database();

// $(".user-input").on("keypress", function(e) {
//     if(e.keycode == 13) {
//         var input = $(".user-input").val().trim();
//         database.ref.push({input: input});




    // }
   
// >>>>>>> ee7506f21837c15ab5326478142bbc0a8842b877
  // })