document.getElementById("playButton").onclick = playFunction;
const Video = document.getElementById("video");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option1_name = document.getElementById("option1.1")
var option2_name = document.getElementById("option2.2")
var option3_name = document.getElementById("option3.3")
const next = document.getElementById("board")
const Next_page = document.getElementById("Next-level")
// Next_page.onclick = reset();
const score_Live = document.getElementById("score")


var Score = 0;
var nextButton = new Image;
var button_check = 0
var audio;
var check = 0;
var i;
var OptionNumber1;
var OptionNumber2;
var OptionNumber3;
var CorrectId;
var Op1 = 0;
var Op2 = 0;
var Op3 = 0;
var WinId = 0;



// Correct Song variables.
var Ans_img = new Image;
var Ans_index;
var Ans_name;


// Option-1 Variable.
var OptionImg1 = new Image;
var Option1_index;
var Optionname1;


// Option-2 Variable.
var OptionImg2 = new Image;
var Option2_index;
var Optionname2;


// Option-boxes in an array for random display
var Options = [
    [option1,option1_name],
    [option2,option2_name],
    [option3,option3_name]
]


// Array of all the songs.
var Songs = 
[
    ["./assets/Songs/Hindi_songs/Ae dil hai mushkil.mp3","./assets/Covers/Hindi_covers/ae dil hai mushkil - Cover.jpg","Ae Dil Hai Mushkil"],
    ["./assets/Songs/Hindi_songs/Galiyaan.mp3","./assets/Covers/Hindi_covers/Galiyan-Cover.jpg","Galiyan"],
    ["./assets/Songs/Hindi_songs/tere Sang Yaara.mp3","./assets/Covers/Hindi_covers/tere sang yara - Cover.jpg","Tere Sang Yaara"],
    ["./assets/Songs/Hindi_songs/Saathiya.mp3","./assets/Covers/Hindi_covers/saathiya-Cover.jpg","Saathiya"],
    ["./assets/Songs/Hindi_songs/ishqwalalove.mp3","./assets/Covers/Hindi_covers/ishq wala love - Cover.jpg","Ishq Wala Love"],
    ["./assets/Songs/Hindi_songs/zara zara.mp3","./assets/Covers/Hindi_covers/Zara-Zara-Bahekta-Hai-Cover.jpg","Zara Zara"],
    ["./assets/Songs/Hindi_songs/Soch Na Sake.mp3","./assets/Covers/Hindi_covers/soch na sake - Cover.jpg","Soch Na Sake"],
    ["./assets/Songs/Hindi_songs/Khairiyat.mp3","./assets/Covers/Hindi_covers/khairiyat-Cover.jpg","Khairiyat"],
    ["./assets/Songs/Hindi_songs/Hasi ban gaya.mp3","./assets/Covers/Hindi_covers/hasi-Cover.jpg","Hasi"],
    ["./assets/Songs/Hindi_songs/gerua.mp3","./assets/Covers/Hindi_covers/gerua-cover.jpg","Gerua"],
    ["./assets/Songs/Hindi_songs/laalbindi.mp3","./assets/Covers/Hindi_covers/laal bindi - Cover.jpg","Laal Bindi"],
    ["./assets/Songs/Hindi_songs/kesariya.mp3","./assets/Covers/Hindi_covers/kesariya-cover.jpg","Kesariya"],
    ["./assets/Songs/Hindi_songs/channa ve.mp3","./assets/Covers/Hindi_covers/Channa ve - Cover.jpg","Channa Ve"]
]


// Required Misc. Functions.
function RandomInt(){
    i = Math.floor(Math.random()*Options.length);
    return i;
}
function randomInteger(){
    index_number = Math.floor(Math.random()*Songs.length);
    return index_number;
}
function Next(){
    // next.style.backgroundColor = "white";
    if(button_check==0)
    {
        button_check++;
        nextButton = new Image
        nextButton.src = "./assets/Next-button.png";
        nextButton.height = "50";
        nextButton.id = "Next-Level";
        next.appendChild(nextButton);
    }
}


//// Increment of the level number.
Level = 1;
function changeLevel(){
    Level++;
    document.getElementById("level").innerText = Level;
}


// Adding Options to the game.
function Song(){
    Ans_index = randomInteger();
    audio = new Audio(Songs[Ans_index][0]);
    return audio;
}
function AnswerSong(){
    Song();
    Ans_img.src = Songs[Ans_index][1];
    Ans_img.height = "200";
    Ans_name = Songs[Ans_index][2];
    Songs.splice(Ans_index,1);
    OptionNumber1 = RandomInt();
    CorrectId = OptionNumber1 + 1;
    Options[OptionNumber1][0].appendChild(Ans_img);
    Options[OptionNumber1][1].innerText = Ans_name;
    Options.splice(OptionNumber1,1)
}
function optionSong1(){
    Option1_index = randomInteger();
    OptionImg1.src = Songs[Option1_index][1];
    Optionname1 = Songs[Option1_index][2];
    OptionImg1.height = "200";
    Songs.splice(Option1_index,1)
}
function optionSong2(){
    Option2_index = randomInteger();
    OptionImg2.src = Songs[Option2_index][1];
    Optionname2 = Songs[Option2_index][2];
    OptionImg2.height = "200";
}

function randomOptions2(){
    optionSong1();
    OptionNumber2 = RandomInt();
    console.log(OptionNumber2);
    Options[OptionNumber2][0].appendChild(OptionImg1);
    Options[OptionNumber2][1].innerText = Optionname1;
    Options.splice(OptionNumber2,1);
}
function randomOptions3(){
    optionSong2();
    OptionNumber3 = RandomInt();
    console.log(OptionNumber3);
    Options[OptionNumber3][0].appendChild(OptionImg2);
    Options[OptionNumber3][1].innerText = Optionname2;
}


// Making game Functional
function playFunction()
{
    if(check==0)
    {
        AnswerSong();
        audio.play();
        Video.play();
        randomOptions2();
        randomOptions3();
        check++;
    }
    audio.onended = ended;
}


function ended(){
    check_now();
}

option1.onclick = do1;
option2.onclick = do2;
option3.onclick = do3;

function do1(){
    if(check==1)
    {
        if(Op1==0)
        {
            WinId++;
            option1.style.backgroundColor = "yellow";
            Op1+=2;
            Op2++;
            Op3++;
        }

    }
}
function do2(){
    if(check==1)
    {
        if(Op2==0)
        {
            WinId+=2;
            option2.style.backgroundColor = "yellow";
            Op1++;
            Op2+=2;
            Op3++;
        }
    }
}
function do3()
{
    if(check==1)
    {
        if(Op3==0)
        {
            WinId+=3;
            option3.style.backgroundColor = "yellow";
            Op1++;
            Op2++;
            Op3+=2;
        }
    }
}


function check_now(){
    Song();
    console.log(check)
    if(CorrectId == WinId)
    {
        Score+=10;
        score_Live.innerText = Score;
        if(Op1==2)
        {
            option1.style.backgroundColor = "green";
            startTimer2();
        }
        else if(Op2==2)
        {
            option2.style.backgroundColor = "green";
            startTimer2();
        }
        else if(Op3==2)
        {
            option3.style.backgroundColor = "green";
            startTimer2();
        }
    }
    else{
        {
            if(Op1==2)
            {
                option1.style.backgroundColor = "red";
                startTimer();
            }
            else if(Op2==2)
            {
                option2.style.backgroundColor = "red";
                startTimer();
            }
            else if(Op3==2)
            {
                option3.style.backgroundColor = "red";
                startTimer();
            }   
        }
        localStorage.setItem("Score",Score);
    }
}

// function reset(){
//     // console.log("Hi")
//     check--;
//     option1.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
//     option2.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
//     option3.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
//     audio.play();
//     Video.play();
//     AnswerSong();
//     randomOptions2();
//     randomOptions3();
//     changeLevel();
// }

// Timer1
var time = 3;
var timerId;

function startTimer() {
  time = 3;
  timerId = setInterval(() => {
    time--;
    if (time == 0)
    {
        localStorage.setItem("Score",Score);
        location.href = "over.html";
    }
  }, 1000);
}


// Timer2
var time2 = 3;
var timerId2;

function startTimer2() {
    time2 = 3;
    timerId2 = setInterval(() => {
    time2--;
    if (time2 == 0)
        {
            localStorage.setItem("Score",Score);
        }
    }, 1000);
}