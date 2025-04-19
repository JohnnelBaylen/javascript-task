let diceRoll;
let count = 0;

while (diceRoll !== 5) {
  diceRoll = Math.floor(Math.random() * 6) + 1;
  count++;
  console.log(`Roll ${count}: 🎲 You rolled a ${diceRoll}`);
}

console.log(`It took ${count} roll(s) to get a 6!`);
