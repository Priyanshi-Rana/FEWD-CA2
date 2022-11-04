const playButton = document.getElementById("button")
const name1= document.getElementById("name1")
const nickname = document.getElementById("nickName")
const english = document.getElementById("english")
const hindi = document.getElementById("hindi")
const punjabi = document.getElementById("punjabi")

playButton.onclick = game;
var choice;
var one = 0;

function game(){
    var Name = name1.value;
    var nickName = nickname.value;
    if(Name=="" || nickName=="" || one==0){
        alert("Please fill the fields")

    }
    else{
        localStorage.setItem("Name",Name)
        localStorage.setItem("nickName",nickName)
        window.location.assign("gamepage.html")
    }
    
}
english.onclick = English;
function English(){
    choice =1;
    localStorage.setItem("choice",choice)
    if(one==0)
    {
        english.style.border = "5px solid black"
        one++;
    }
    else{
        window.location.reload();
        english.style.border = "5px solid black"
    }
}

hindi.onclick = Hindi;
function Hindi(){
    choice =2;
    localStorage.setItem("choice",choice)
    if(one==0)
    {
        hindi.style.border = "5px solid black"
        one++;
    }
    else{
        window.location.reload();
        hindi.style.border = "5px solid black"
    }
    
}

punjabi.onclick = Punjabi;
function Punjabi(){
    choice =3;
    localStorage.setItem("choice",choice)
    if(one==0)
    {
        punjabi.style.border = "5px solid black"
        one++;
    }
    else{
        window.location.reload();
        punjabi.style.border = "5px solid black"
    }
}
