// Dice Roller Program
function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const values = [];
  
    for (let i = 0; i < numOfDice; i++) {
      const value = Math.ceil(Math.random() * 6);
      values.push(value);
    }
  
    diceResult.textContent = `Dice: ${values.join(", ")}`;
  }