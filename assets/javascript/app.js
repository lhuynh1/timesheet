$(document).ready(() => {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyClLk-tb0gJPMMJ8PPvbLeOA9B3ehnv8m4",
    authDomain: "timesheet-ab559.firebaseapp.com",
    databaseURL: "https://timesheet-ab559.firebaseio.com",
    projectId: "timesheet-ab559",
    storageBucket: "timesheet-ab559.appspot.com",
    messagingSenderId: "1068905010063"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
});