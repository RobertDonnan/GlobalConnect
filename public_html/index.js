/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Set up our register function
function register() {
  // Get input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;

  // Validate input fields
  if (!validate_email(email) || !validate_password(password)) {
    alert('Email or Password is missing.');
    return;
    // Don't continue running the code
  }
  if (!validate_field(name)) {
    alert('Name is required.');
    return;
  }

  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      const user = auth.currentUser;

      // Add this user to Firebase Database
      const database_ref = database.ref();

      // Create User data
      const user_data = {
        email: email,
        name: name
      };


      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data);

      // Alert message to inform user account has been created successfully
      alert('User Created');
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      const error_message = error.message;
      alert(error_message);
    });
    

// Validating user input
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
  }
}
 