export function playerPlay() {
  let playerChoice;
  while (true) {
    playerChoice = prompt("Enter Rock, Paper, or Scissors");
    if (playerChoice === null) {
      return null;
    }
    playerChoice = playerChoice.trim();
    if (["rock", "paper", "scissors"].includes(playerChoice.toLowerCase())) {
      return playerChoice;
    } else {
      alert("Invalid input. Please enter either Rock, Paper, or Scissors");
    }
  }
}
