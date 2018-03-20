$(document).ready(function(){



var config = {
    apiKey: "AIzaSyAqSCI7SHLfZuCKrKeq86h6hErJNS8YmTQ",
    authDomain: "train-c6945.firebaseapp.com",
    databaseURL: "https://train-c6945.firebaseio.com",
    projectId: "train-c6945",
    storageBucket: "",
    messagingSenderId: "266654395375"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#add-train").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#name-input").val().trim();
    var dest = $("#destination-input").val().trim();
    var time = $("#time-input").val().trim();
    var frequency = $("#number-input").val().trim();
  
    // Creates local "temporary" object for holding employee data
    var addTrain = {
      name: trainName,
      destination: dest,
      time: time,
     frequency: frequency
    };
  
    // Uploads employee data to the database
    database.ref().push(addTrain);
  
    // Logs everything to console
    console.log(addTrain.name);
    console.log(addTrain.destination);
    console.log(addTrain.time);
    console.log(addTrain.frequency);

    $("#-name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#number-input").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var dest = childSnapshot.val().destination;
  var time = childSnapshot.val().time;
  var frequency = childSnapshot.val().frequency;

  // Employee Info
  console.log(trainName);
  console.log(dest);
  console.log(time);
  console.log(frequency);


  // Add each train's data into the table
  $("#employee-table > tbody").append("<tr><td>" + trainName + "</td><td>" + dest + "</td><td>" +
  time + "</td><td>" + frequency +"</td></tr>");
});



})