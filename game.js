import { computerPlay } from "./js/computerPlay.js";
import { playRound } from "./js/playRound.js";
import { playerPlay } from "./js/playerPlay.js";

function game() {
    let playerScore = 0;
    let computerScore = 0;

    alert("🚨 Branko's Bad AI has hacked this assignment! 🚨\n\nPlay Rock, Paper, Scissors to defeat the hacker!");

    console.log("🧠 Welcome to the Rock-Paper-Scissors Showdown!");
    console.log("I am the Bad AI created by Branko! 🤖");
    console.log("Your mission: Beat me in a best-of-5 game of Rock, Paper, Scissors.");
    console.log("If you win, Branko will accept your assignment… for now. But if I win, I'll gain ultimate control! Mwahaha!\n");

    for (let round = 1; round <= 5; round++) {
      if (round === 5) {
        console.log("🔥 This is it… The FINAL ROUND! 🔥");
        console.log("The fate of your Assignment rests on your next move...");
      } else {
        console.log(`🔥 Round ${round} 🔥`);
      }

      const playerSelection = playerPlay();
      
      if (playerSelection === null) {
        alert("You canceled the game. Goodbye!\nPlease Refresh the Page to Play Again.");
        return;
      }

      const computerSelection = computerPlay();

      const result = playRound(playerSelection, computerSelection);
      console.log(result);

      if (result.startsWith("You Win")) {
        playerScore++;
      } else if (result.startsWith("You Lose")) {
        computerScore++;
      }

      console.log(`Current Score - You: ${playerScore}, Bad AI: ${computerScore}\n`);
    }

    if (playerScore > computerScore) {
      alert("🎉 YOU DID IT! Your Assignment is safe… for now. 🎉\nBrankos Bad AI has been defeated!");
    } else if (computerScore > playerScore) {
      alert("💀 YOU LOSE! The Bad AI hacked your computer! 💀\nBetter luck next time… if there even is a next time.");
    } else {
      alert("It's a tie! Play again to break the tie.");
    }
    
    alert("Thanks for playing! Stay safe from the Bad AI! 🤖\nRefresh the page to play again.");
}

game();
