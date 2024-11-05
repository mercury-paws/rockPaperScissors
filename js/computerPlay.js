// randomly returns either ‘Rock’,‘Paper’ or ‘Scissors’.
// use the console to make sure this is returning
// the expected output before moving to the next step!

export function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
