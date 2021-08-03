function addUser(){
    name1 = document.getElementById("name1").value;
    name2 = document.getElementById("name2").value;

    localStorage.setItem("Player 1 Name", name1);
    localStorage.setItem("Player 2 Name", name2);
    

    window.location = "game_page.html";
}