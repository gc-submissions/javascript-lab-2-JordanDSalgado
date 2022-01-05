let randomDamage=() => (Math.random() * 10) + 1

chooseOption = (opt1,opt2) => {
 randNum = (Math.random() * 1)
 if (randNum === 1) {
     return opt1
 } else if (randNum === 0) {
     return opt2
 }
}

let attackPlayer = function (health) {
return health - (randomDamage)
}

logHealth = (player,health) => 
console.log(player," health:",health)

logDeath = (winner,loser) =>
console.log(winner," deafeated ",loser)

isDead = (health) =>
health <= 0

function fight (player1,player2,player1Health,player2Health) {
  let attacker = chooseOption (player1,player2)
    while (player1Health > 0 || player2Health > 0 ){
    if(attacker === player1) {
      player2Health = attackPlayer (player2Health);
      logHealth (player2,player2Health);
      isDead (player2Health) <= 0;   
      logDeath (player1,player2); 
      break;} 
    else
     {player1Health = attackPlayer (player1Health);
     logHealth(player1,player1Health);
     isDead (player1Health) <= 0;
     logDeath (player2,player1);
     break;}}


fight ("mike","nick",100,100);}
