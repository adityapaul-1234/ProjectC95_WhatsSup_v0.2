user_name = localStorage.getItem("user_name");
document.getElementById("name_display").innerHTML = "Welcome " + user_name + ", let's get you started! Please choose one of the options below:"

var firebaseConfig = {
    apiKey: "AIzaSyC8UTeCp2gI8gYPWOoaJIZg8krnqWTCPWE",
    authDomain: "what-s-sup.firebaseapp.com",
    databaseURL: "https://what-s-sup-default-rtdb.firebaseio.com",
    projectId: "what-s-sup",
    storageBucket: "what-s-sup.appspot.com",
    messagingSenderId: "775966961781",
    appId: "1:775966961781:web:c289d493cb82d366a4c83c"
  };

  firebase.initializeApp(firebaseConfig);

function AddNewRoom(){
    room_name = document.getElementById("new_room").value
    firebase.database().ref("/").child(room_name).update({
        Purpose: "Adding Room Name"
  });
    localStorage.setItem("Room_Name", room_name);
}

//window.location = "chat_page.html"
//Note: Add this code in above AddNewRoom() function before submitting. Without this piece of code, the web app won't work. The code has been removed for purpose of satisfaction of purpose temporarily. Don't forget to add it before submitting without fail.

function getData(){
    firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;

        console.log("Room Names" + Room_names);
        row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;   
  
  });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("Room_Name", name);
    window.location = "chat_page.html";
}