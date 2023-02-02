//HEADER
const h1 = document.createElement("h1");
h1.textContent = "JavaScript Made This!!";
document.getElementById("header").append(h1);
h1.className="header";

//SUBTITLE
var h2 = document.getElementById("header");
h2.innerHTML += "<span class = 'name'>Chad</span> wrote this JavaScript";
document.getElementById("header").style.textAlign = "center";
// document.getElementById("header").appendChild(h2);

//MESSAGES
const messages = document.getElementsByClassName("message")
messages[0].textContent = "Want to go to the movies later?";
messages[1].textContent = "Sure, What movie?";
messages[2].textContent = "I was thinking Avatar 2.";
messages[3].textContent = "Sounds good to me!";

//CLEAR MESSAGE
var clearButton = document.getElementById("clear-button")


    clearButton.addEventListener('click', function(){
        document.getElementsByClassName("messages")[0].textContent = ""
        })

//THEMES
//const themeOne = document.getElementById("theme-drop-down").value = "theme-one"
//const themeTwo = document.getElementById("theme-drop-down").value = "theme-two"

const dropDown = document.getElementById("theme-drop-down")
    dropDown.addEventListener('change', changeTheme)
    
    function changeTheme(){
        if (dropDown.value == "theme-one") {
            console.log(dropDown.value)
            document.querySelectorAll(".left").forEach(function (change) {
                change.style.backgroundColor = "burlywood"
            })
            document.querySelectorAll(".right").forEach(function (change) {
                change.style.backgroundColor = "lightblue"
                change.style.color = "black"
            })
            // document.getElementsByClassName(".right").style.backgroundColor = "lightblue"
            // document.getElementsByClassName(".messages").style.color = "Black"
            
        } else if (dropDown.value == "theme-two") {
            console.log(dropDown.value)
            document.querySelectorAll(".left").forEach(function (change) {
                change.style.backgroundColor = "red"
            })
            document.querySelectorAll(".right").forEach(function (change) {
                change.style.backgroundColor = "black"
                change.style.color ="white"
            })
            // document.getElementsByClassName(".right").style.backgroundColor = "Black"
            // document.getElementsByClassName(".messages").style.color = "White"
    }}
        


