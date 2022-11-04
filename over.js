const game = document.getElementById("playAgain")
const Score_now = document.getElementById("score")
var New_Score = localStorage.getItem("Score");
Score_now.innerText = New_Score;
game.onclick = playAgain;
function playAgain(){
    window.location.assign("homepage.html")
}