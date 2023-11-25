var firebaseConfig = {
    apiKey: "AIzaSyD4Talg8b5vsilEK_YfPcRZxE4gr2c--I0",
    authDomain: "kwitter-5c34c.firebaseapp.com",
    databaseURL: "https://kwitter-5c34c-default-rtdb.firebaseio.com",
    projectId: "kwitter-5c34c",
    storageBucket: "kwitter-5c34c.appspot.com",
    messagingSenderId: "425177677992",
    appId: "1:425177677992:web:2d1489e4fc9a5feeae829d"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function addUser(){
    username=document.getElementById("user_name").value;
    firebase.database().ref("/").child(username).update({
        purpose : "adding user"
    });
}
//ADD YOUR FIREBASE LINKS