// Global array to track used animals
let usedAnimals = [];

document.addEventListener("DOMContentLoaded", function () {

    // Event listener for the Start Game button
    document.getElementById("start-btn").addEventListener("click", startGame);

    // Event Listener for all answer options
    let options = document.getElementsByClassName("option");
    for (let option of options) {
        option.addEventListener("click", checkAnswer);
    }

    // When index page is opened, automatically focused on input box
    document.getElementById("username").focus();

    // Pressing 'Enter' key continues to the game
    document.getElementById("username").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            startGame();
        }
    })
})


/**
 * Starts the game by getting the player's username and displaying the game interface. 
 * It ensures the username is not empty, hides the username input container, shows the game container, 
 * and displays the first question.
 */
function startGame() {

    // Username entered by user
    let username = document.getElementById("username").value;

    // Check if username input is empty
    if (username === "") {
        alert("Please enter your username");
        return;
    }

    // Clear used animals at the start of each game
    usedAnimals = [];

    // Hides username input container, shows the game and displays user username.
    document.getElementById("username-display").innerText = username;
    document.getElementsByClassName("username-container")[0].style.display = "none";
    document.getElementById("game-container").style.display = "block";

    // Display question
    displayQuestion();
}


/**
 * Displays a new question with multiple options. 
 * Randomly selects an animal image, and sets up the answer options. 
 * Makes sure that the right answer and the other choices aren't the same as the ones seen before.
 */
function displayQuestion() {

    // List of animals
    const animals = [
        { name: "African Elephant", image: "assets/images/african-elephant.png" },
        { name: "African Grey Hornbill", image: "assets/images/african-grey-hornbill.png" },
        { name: "African Lion", image: "assets/images/african-lion.png" },
        { name: "African Penguin", image: "assets/images/african-penguin.png" },
        { name: "Black Rhino", image: "assets/images/black-rhino.png" },
        { name: "Black Wildebeest", image: "assets/images/black-wildebeest.png" },
        { name: "Cape Buffalo", image: "assets/images/cape-buffalo.png" },
        { name: "Cheetah", image: "assets/images/cheetah.png" },
        { name: "Chimpanzee", image: "assets/images/chimpanzee.png" },
        { name: "Common Warthog", image: "assets/images/common-warthog.png" },
        { name: "Egyptian Vulture", image: "assets/images/egyptian-vulture.png" },
        { name: "Ethiopian Wolf", image: "assets/images/ethiopian-wolf.png" },
        { name: "Hippopotamus", image: "assets/images/hippopotamus.png" },
        { name: "Leopard", image: "assets/images/leopard.png" },
        { name: "Marabou Stork", image: "assets/images/marabou-stork.png" },
        { name: "Masai Ostrich", image: "assets/images/masai-ostrich.png" },
        { name: "Mountain Gorilla", image: "assets/images/mountain-gorilla.png" },
        { name: "Nile Crocodile", image: "assets/images/nile-crocodile.png" },
        { name: "Northern Giraffe", image: "assets/images/northern-giraffe.png" },
        { name: "Plains Zebra", image: "assets/images/plains-zebra.png" },
        { name: "Red Billed Buffalo Weaver", image: "assets/images/red-billed-buffalo-weaver.png" },
        { name: "Secretary Bird", image: "assets/images/secretary-bird.png" },
        { name: "Spotted Hyena", image: "assets/images/spotted-hyena.png" },
        { name: "Thomsons Gazelle", image: "assets/images/thomsons-gazelle.png" }
    ];

    // Resets the used animals list if all animal have been used
    if (usedAnimals.length === animals.length) {
        usedAnimals = [];
    }

    // Selects a unique animal from the list
    let selectedAnimal;
    do {
        selectedAnimal = animals[Math.floor(Math.random() * animals.length)];
    } while (usedAnimals.includes(selectedAnimal.name));

    // Adds selected animal to the used animals list
    usedAnimals.push(selectedAnimal.name);

    // Sets image to the selected animal
    document.getElementById("animal-image").src = selectedAnimal.image;

    // Select a random index for the correct option
    const options = document.getElementsByClassName("option");
    const correctOptionIndex = Math.floor(Math.random() * options.length);

    // Array to track used option names for the current question
    let usedOptionNames = new Set();
    usedOptionNames.add(selectedAnimal.name);

    // Assign names to options and mark the correct one
    for (let i = 0; i < options.length; i++) {
        if (i === correctOptionIndex) {

            // Set the correct option
            options[i].innerText = selectedAnimal.name;
            options[i].dataset.correct = "true";
        } else {

            // Set the incorrect options
            let otherAnimal;
            do {
                otherAnimal = animals[Math.floor(Math.random() * animals.length)];
            } while (usedOptionNames.has(otherAnimal.name));

            // Add the selected other animal name
            usedOptionNames.add(otherAnimal.name);

            options[i].innerText = otherAnimal.name;
            options[i].dataset.correct = "false";
        }
    }
}


/**
 * Checks the selected answer after player picks one. 
 * Updates the score based on whether the answer is correct or incorrect. 
 * Highlights the correct and incorrect answers, disables further clicks on options, 
 * Displays the next question after a delay.
 */
function checkAnswer(event) {
    // Get all the option elements
    const options = document.getElementsByClassName("option");

    // Check if selected option is correct
    let selectedAnimal = event.target;
    let isCorrect = selectedAnimal.dataset.correct === "true";

    // Loop through all options to apply the appropriate style
    for (let option of options) {
        if (option.dataset.correct === "true") {
            option.style.backgroundColor = "green";
            option.style.color = "white";
        } else {
            option.style.backgroundColor = "red";
            option.style.color = "white";
        }

        // Disable further clicks on the options
        option.removeEventListener("click", checkAnswer);
    }

    if (isCorrect) {

        // +1 the correct score in answer is correct
        let score = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++score;
    } else {

        // +1 the incorrect score in answer is incorrect
        let incorrect = parseInt(document.getElementById("incorrect").innerText);
        document.getElementById("incorrect").innerText = ++incorrect;
    }

    // Display "Next question in 3 seconds..." message
    const messageElement = document.getElementById("next");
    messageElement.style.display = "block";

    // Wait 3 seconds before displaying the next question
    setTimeout(() => {

        // Remove styles for the next question
        for (let option of options) {
            option.style.backgroundColor = "";
            option.style.color = "";
            option.addEventListener("click", checkAnswer);
        }

        // Hide the message
        messageElement.style.display = "none";

        // Display the next question
        displayQuestion();
    }, 3000);
}

