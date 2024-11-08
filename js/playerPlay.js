export function playerPlay() {
  let playerChoise;
  while (true) {
    playerChoise = prompt("Enter Rock, Paper, or Scissors");
    if (playerChoise === null) {
      return null;
    }
    if (["rock", "paper", "scissors"].includes(playerChoise.toLowerCase())) {
      return playerChoise;
    } else {
      alert("Invalid input. Please enter either Rock, Paper, or Scissors");
    }
  }
}
