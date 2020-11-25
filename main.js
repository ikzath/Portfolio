

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDW7tPwQ1IocuZYCrdgZ-v5NsAKW5qTNGQ",
    authDomain: "contact-form-60a1a.firebaseapp.com",
    databaseURL: "https://contact-form-60a1a.firebaseio.com",
    projectId: "contact-form-60a1a",
    storageBucket: "contact-form-60a1a.appspot.com",
    messagingSenderId: "1079510630065",
    appId: "1:1079510630065:web:a4608eac217605ccc7ac90"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// reference message collection
const messageRef = firebase.database().ref('messages');


// add key event listener
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    
    const email = getElements('email');    
    const subject = getElements('subject');    
    const text = getElements('text');    
    
    console.log(email);

    // save message
    saveMessage(email, subject, text);

    // show message sent alert
    document.querySelector('.alert').style.display = 'block';
    
    // hide alert after 3 seconds
    setTimeout(() => {
      document.querySelector('.alert').style.display = 'none';

    }, 3000);

    // reset form
    document.getElementById('contactForm').reset();
}


// function to get form values
function getElements(id) {
   return document.getElementById(id).value;  

}

// save message to firebase
function saveMessage(email, subject, text) {
   let newMessage = messageRef.push();
    newMessage.set({
        email,
        subject,
        text
    });

}
