# rockPaperScissors Algorithm
ReviewLink: https://mercury-paws.github.io/rockPaperScissors/

1. the game starts with initialization of player's and computer's score, notification of first round and max number of rounds 5.
2. enter the loop:
   2.1. computer is randomly choosing the rock/paper/scissors
   2.2. player is invited to choose from rock/paper/scissors
   2.3. it is shown what player and computer have chosen;
   2.4. comparison of results of the players (call playRound):
   -if players have chosen equally - notify them of draw
   2.5. define the cases when player wins :
   -- his paper over computer's rock;
   -- his scissors over computer's paper;
   -- his rock over computer's scissors - other cases - player loses
   2.6. if the player wins - increase his score by adding 1 to his existent score and notify him
   2.7. if the computer wins - increase his score by adding 1 to his existent score and notify player
   2.8. after each result's comparisson - increase the round by adding 1 to the existing number of rounds
3. repeat step 2.
4. after number of rounds become 5, exit the loop, compare the scores: if player's score is bigger then computer's - he has won. otherwise he has lost. In any case - notify him.
