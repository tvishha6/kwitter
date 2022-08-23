



 const firebaseConfig = {
  apiKey: "AIzaSyCGzuq4C5JvshbxU9SHPg42AklyqtBSlGw",
  authDomain: "memories-e02c0.firebaseapp.com",
  projectId: "memories-e02c0",
  storageBucket: "memories-e02c0.appspot.com",
  messagingSenderId: "249620899633",
  appId: "1:249620899633:web:2f3369ac70a03da111f210",
  measurementId: "G-XH8NG8WFST"
};

firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;

    getData();