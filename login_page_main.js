function AddUser(){
    username = document.getElementById("ID").value;
    localStorage.setItem("user_name", username);
    window.location = "main_page.html";
}