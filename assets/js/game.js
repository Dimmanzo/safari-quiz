document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the Start Game button
    document.getElementById("start-btn").addEventListener("click", startGame);

    // Event Lisntener for all answer options
    let options = document.getElementsByClassName("option");
    for (let option of options) {
        option.addEventListener("click", checkAnswer);
    }

    // When index page is opened, automatically focused on input box
    document.getElementById("username").focus();

    // Pressing 'Enter' key continues to the game
    document.getElementById("username").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            startGame();
        }
    })
})

function startGame() {
    // Username entered by user
    let username = document.getElementById("username").value;

    // Check if username input is empty
    if (username === "") {
        alert("Please enter your username");
        return;
    }

    // Hides username input container, shows the game and displays user username.
    document.getElementById("username-display").innerText = username;
    document.getElementsByClassName("username-container")[0].style.display = "none";
    document.getElementById("game-container").style.display = "block";

    // Display question
    displayQuestion();
}

function displayQuestion() {

}

function checkAnswer() {

}

