

$(document).ready(function() {
    $('#search').click(function() {
      let city = $('#location').val();
      $('#location').val("");
      $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=7fbd1c73cafb287415d9c63a48da591a`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
          $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
          console.log(response);
        },
        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.")
        }

      });

    });
  });

  console.log("connected");