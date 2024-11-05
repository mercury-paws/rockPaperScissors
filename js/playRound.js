export function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
  
    if (player === computer) {
      return "It's a tie!";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "You Win! Player beats Computer!"
    } else {
      return "You Lose! Computer beats Player!";
    }
  }
  
  