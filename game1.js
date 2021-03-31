function adduser(){
    player1 =document.getElementById("player_1").value;
    player2 =document.getElementById("player_2").value;

    window.localStorage.setItem("player_1_name",player1);
    window.localStorage.setItem("player_2_name",player2);

    window.location="gamepage.html"
}