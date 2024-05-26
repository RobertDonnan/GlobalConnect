/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/* global firebase */

// Your web app's Firebase configuration
 firebaseConfig = {
  apiKey: "AIzaSyCPe0_5pK-Ccv9pYfEzhhmlV6d2_dbHM2k",
  authDomain: "globalconnectweb-32060.firebaseapp.com",
  databaseURL: "https://globalconnectweb-32060-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "globalconnectweb-32060",
  storageBucket: "globalconnectweb-32060.appspot.com",
  messagingSenderId: "849990619987",
  appId: "1:849990619987:web:ec2a9ce08d625a5f1307a6",
  measurementId: "G-876NXSQ3LJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Function for login
function login () {
  //Variables for getting user data
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;

  // Validate input fields to ensure no data is missing
  if (validate_email(email) === false || validate_password(password) === false) {
    alert('Email or Password is missing');
    return;
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser;

    // Add this user to Firebase Database
    var database_ref = database.ref();

    //User data stored in database
    var user_data = {
     email : email,
      name : name
    };

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data);

    // If user is signed in successfully, they are directed to home page.
    window.location.href = "home.html";

  })
  .catch(function(error) {
    // Firebase code for handling errors
    var error_code = error.code;
    var error_message = error.message;

    alert(error_message);
  });
  
  
// Validating user input (email characters)
function validate_email(email) {
  characters = /^[^@]+@\w+(\.\w+)+\w$/;
  if (characters.test(email) === true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}

function validate_password(password) {
  // Password must be 8 characters or longer 
  if (password < 8) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field === null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
  }
}


