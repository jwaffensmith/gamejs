// objects for computer and player choices 
let player = { 
    currentChoice: null
  };
  let computer = { 
   currentChoice: null
  };
  
  // array for game options 
  const gameOptions = ["Lapis", "Papyrus", "Scalpellus"];
  
  // Computer's choice will return gameOptions randomly 
  function computerChooses(){
    const randomChoice = Math.floor(Math.random() * gameOptions.length);
    computer.currentChoice = gameOptions[randomChoice];
  }
  
  // invoke function
  computerChooses();
  
  // player makes their choice
  player.currentChoice = gameOptions[0];
  
  // function to display game results
  function displayResult(result){
    let resultText = document.getElementById("gameResults");
    if (resultText === null) {
      resultText = document.createElement('p');
      resultText.setAttribute("id", "gameResults");
      document.body.appendChild(resultText);
   }
     resultText.innerText = result;
  }
  
  // conditional statements for tie
  function compareChoices(){
    computerChooses();
    if (computer.currentChoice === player.currentChoice){ 
      displayResult("It's a tie! The computer and player both chose " + computer.currentChoice + "!");  
  // conditional statements for computer-reminder rock is 0, paper is 1 and scissors is 2
    }else if(computer.currentChoice === gameOptions[1]){
      if(player.currentChoice === gameOptions[0]){
       displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice + ".");
      }else{
        displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice + ".");   
      }
    }else if (computer.currentChoice === gameOptions[2]){
      if(player.currentChoice === gameOptions[1]){
        displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice + ".");
      }else{
        displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice + "."); 
      }
    }else if(computer.currentChoice === gameOptions[0]){
      if(player.currentChoice === gameOptions[2]){
        displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice + ".");
      }else{
        displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice + ".");   
      }
    }
  }
  
  // invoke compareChoices function
  compareChoices();
  
  // update player's choice based on button clicked 
  function setPlayerChoice(name){
    player.currentChoice = name;
    compareChoices();
  } 
  
  