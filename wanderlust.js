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

$("#formName").on("submit", function(e) {
    e.preventDefault();
    var input = $(".user-input").val().trim();
    database.ref().push({input: input});
    console.log(input);

   
});

    $(".fire-base").text("boop!");

for (var i=0; i<database.length; i++) {
    console.log(database[i].input);
    $(".fire-base").text("blah");
}
