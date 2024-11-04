export function playerPlay() {
  let playerChoise;
  while (true) {
    playerChoise = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
    if (["rock", "paper", "scissors"].includes(playerChoise)) {
      return playerChoise;
      // .charAt(0).toUpperCase() + playerChoise.slice(1);
    } else {
      alert("Invalid input. Please enter either Rock, Paper, or Scissors");
    }
  }
}
