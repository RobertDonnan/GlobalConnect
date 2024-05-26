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

// Initialize Firebase Authentication
const auth = firebase.auth();

// Initialize variables
const database = firebase.database();

// Set up our register function
function addvisa() {
  // Get input values
  const countryValue = document.getElementById('Country').value;
  const passportValue = document.getElementById('Passport').value;
  const typeValue = document.getElementById('Type').value;
  const issueValue = document.getElementById('Issue').value;
  const expiryValue = document.getElementById('Expiry').value;

  // Check if a user is logged in
  const user = auth.currentUser;
  if (user) {
    // User is logged in, associate visa with their Unique ID 
    const userData = {
      country: countryValue,
      passport: passportValue,
      type: typeValue,
      issue: issueValue,
      expiry: expiryValue,
      userId: user.uid // Store the user's unique ID to match user with visa details 
    };
    
if(!countryValue.includes('DROP') && !countryValue.includes('INSERT') && !countryValue.includes('UPDATE') && !countryValue.includes('DELETE') && countryValue  && !passportValue.includes('DROP') && !passportValue.includes('INSERT') && !passportValue.includes('UPDATE') && !passportValue.includes('DELETE') && passportValue && !typeValue.includes('DROP') && !typeValue.includes('INSERT') && !typeValue.includes('UPDATE') && !typeValue.includes('DELETE') && typeValue && !issueValue.includes('DROP') && !issueValue.includes('INSERT') && !issueValue.includes('UPDATE') && !issueValue.includes('DELETE') && issueValue && !expiryValue.includes('DROP') && !expiryValue.includes('INSERT') && !expiryValue.includes('UPDATE') && !expiryValue.includes('DELETE') && expiryValue)
{
    // Add this user's passport to Firebase Database
    const visaRef = database.ref('visa');
    visaRef.push(userData);

    // Inform the user that the passport has been added
    alert('Visa added successfully!');
  } else {
      alert("Some values are missing or contain SQL statements")
  }
  }
  
}


