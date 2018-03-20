var config = {
    apiKey: "AIzaSyCSGFZALM3AFGAO6l7rYs0FQxo9skFpoTM",
    authDomain: "wanderlust-17647.firebaseapp.com",
    databaseURL: "https://wanderlust-17647.firebaseio.com",
    projectId: "wanderlust-17647",
    storageBucket: "",
    messagingSenderId: "285359026722"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$(".user-input").on("keypress", function(e) {
    if(e.keycode == 13) {
        var input = $(".user-input").val().trim();
        database.ref.push({input: input});




    }
   