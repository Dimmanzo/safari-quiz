# Safari Quiz

[View live project here!](https://dimmanzo.github.io/safari-quiz/)

- Safari Quiz is a web-based game that tests your knowledge of various safari animals. 
You'll be shown an image of an animal and you must choose the correct name from one of the four provided answers.  
The game tracks your score and, at the end (after 10 questions), you will see your total score.

![Responsive Mockup](https://github.com/Dimmanzo/safari-quiz/blob/main/media/responsive.png)


## Features 

### Existing Features

- __Home Page__

  - Home page includes a logo, a welcoming message, and an option to input your username. Upon opening the page, the username input field is automatically focused, and you can either press the "Enter" key after typing your username or click the "Start Game" button to continue. It also checks that you have entered a username: otherwise, you cannot proceed to the game and will receive an alert. Additionally, the page includes a footer.

![Home Page](https://github.com/Dimmanzo/safari-quiz/blob/main/media/home-page.png)

- __Game__

  - After selecting your username and clicking "Start Game," the username container hides, and the game container shows up. Here, you'll get a welcome message displaying the username you chose, a question with an animal picture that you need to identify, four answer options, and correct and incorrect answers counter.
  - After selecting an answer option, the incorrect options will turn red, while the correct one will turn green. "Next question in 3 seconds..." message will appear, and after 3 seconds, the animal picture and answer options will change.

![Game](https://github.com/Dimmanzo/safari-quiz/blob/main/media/game.png)
![Game 2](https://github.com/Dimmanzo/safari-quiz/blob/main/media/game-2.png)

- __End Game__

  - Once you've answered 10 questions, the game-container will disappear, an end-screen will pop up. Here, you'll find a "Game Over" message displaying your total score, correct and incorrect answers number. Below this, a "Play Again" button will be available. Pressing this button will restart the game from the beginning.

![End Game](https://github.com/Dimmanzo/safari-quiz/blob/main/media/end-game.png)  

### Features to be added

- "Next question in 3 seconds..."
  - Implement a countdown timer to this message.

- Leaderboard
  - Add a leaderboard with high scores.

## Testing 

| Action  | Result | Pass or Fail  |
| :-: | :-: | :-: |
| Open home page | Focus on username input | ✅ |
| Start the game with empty username input | Please enter username alert | ✅ |
| Enter username press on "Start Game" or press "Enter Key" | Game starts | ✅ |
| Click on one of the options | Show correct and incorrect options | ✅ |
| Click on one of the options | Add +1 to one of the scores | ✅ |
| Click on one of the options | Skips to the next question in 3 seconds | ✅ |
| While question is changing click on one of the options | Click is not counted | ✅ |
| Answer 10th question | Game finishes, pops up total score with correct and incorrect answer count | ✅ |
| Press on "Play Again" button at the end game | Starts a new game with the same username | ✅ |


- All functions of the website have been thoroughly tested on various screen sizes and to ensure seamless performance across different devices.
- All functions of the website have been tested across multiple browsers, including: Google Chrome, Microsoft Edge, Mozilla Firefox, Opera.


## Bugs

### Solved bugs
- When playing the game, sometimes two answer options displayed the same animal name. 
  - To fix that I added an array (usedAnimals) to track used animal names: This array keeps track of the animal names already used in the current set of options.
  - Modified the loop that sets up the answer options, added a check to ensure that each incorrect option is selected from animal names not already in (usedAnimals). This ensures that all options are unique within the same question.

- When playing the game, sometimes you would get the same animal picture in those 10 questions.
  - To fix that I added a global array to track used animals.
  - Modified (startGame) function to clear used animals list at the start of a new game.
  - Modified (displayQuestion) function to select a unique animal each time.
   
### Unfixed Bugs

- No bugs were found

### Validator Testing 

- HTML

  - No errors were found when passing through the 
  [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdimmanzo.github.io%2Fsafari-quiz%2F)

- CSS

  - No errors were found when passing through the 
  [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdimmanzo.github.io%2Fsafari-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#warnings)

- JavaScript

  - No errors were found when passing through the
  ![JSHint](https://github.com/Dimmanzo/safari-quiz/blob/main/media/jshint.png)

- Lighthouse testing.

  - ![Home](https://github.com/Dimmanzo/safari-quiz/blob/main/media/lighthouse.png)


## Deployment

- The site was deployed to GitHub pages. These steps were applied: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

Live project can be found here - https://dimmanzo.github.io/safari-quiz/index.html 


## Publishing

### Cloning

- Cloning a repository means making a copy of a project from GitHub onto your computer, so you can work on it locally.
  - On GitHub.com, navigate to the main page of the repository.
  - Above the list of files, click <> Code.
  - Copy the URL for the repository.
  - Type git clone, and then paste the URL you copied earlier.
  - Press Enter to create your local clone.

### Forking

- Forking a repository involves creating your own version of someone else's project on GitHub, allowing you to modify it without altering the original.
  - On GitHub.com, navigate to the main page of the repository.
  - In the top-right corner of the page, click Fork.
  - Under "Owner," select the dropdown menu and click an owner for the forked repository.
  - Click Create fork.


## Technologies used

- HTML
- CSS
- JavaScript


## Credits 

### Content 

- Help with the code came from resources I found online, mostly through [Google](https://www.google.com/) searches and [Code Institute](https://learn.codeinstitute.net/ci_program/diplomainfullstacksoftwarecommoncurriculum) training material.

### Media

- Favicon and logo on the main page was made by me: [Logo.com](https://logo.com/).
- The images used for the animal pictures are sourced from an open-source website: [Safari Animals](https://www.animalspot.net/safari-animals).

