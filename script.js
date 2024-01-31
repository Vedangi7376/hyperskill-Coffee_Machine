const input = require('sync-input')
const inventory = {
  water: 400,
  milk: 540,
  coffeeBeans: 120,
  cups: 9,
  money: 550
}
const recipe = {
  espresso: {
    water: 250,
    coffeeBeans: 16,
    money: 4
  },
  
  latte:{
  water: 350,
  milk: 75,
  coffeeBeans: 20,
  money: 7
  },

  cappuccino:{
  water: 200,
  milk: 100,
  coffeeBeans: 12,
  money: 6
  }
}
while (true) {
  console.log("Write action (buy, fill, take, remaining, exit): ");
  let action = input();

  switch (action){
    case "buy":{
     buy();
    console.log("Thank you for choosing us, Have a nice day !!!");
     break; 
    }

    case "fill":{
      fill();
      break;
    }
      case "take":{
      take();
      break;
    }
      case "remaining":{
      remaining()
      break;
    }
      
  }
  if (action==="exit")
  {
    break;
  }
  
}

function buy() {

  console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ");
  let option = input();
  
 if(option=== "1"){
   if (inventory.water < recipe.espresso.water) {
     console.log("Sorry, not enough water!");
   }
   else if (inventory.coffeeBeans < recipe.espresso.coffeeBeans) {
      console.log("Sorry, not enough coffee!");
     }
   else {
     console.log("I have enough resources, making you a coffee!");
     inventory.money += recipe.espresso.money;
     inventory.water -= recipe.espresso.water;
     inventory.coffeeBeans -= recipe.espresso.coffeeBeans;
     inventory.cups--;
   }
 }
   
 else if(option=== "2"){
     if (inventory.water < recipe.latte.water) {
     console.log("Sorry, not enough water!");
   }
   else if (inventory.coffeeBeans < recipe.latte.coffeeBeans) {
      console.log("Sorry, not enough coffee!");
     
   }
   else if (inventory.milk < recipe.latte.milk) {
      console.log("Sorry, not enough milk!");
     
   }
   else {
     console.log("I have enough resources, making you a coffee!");
     inventory.money += recipe.latte.money;
     inventory.water -= recipe.latte.water;
     inventory.coffeeBeans -= recipe.latte.coffeeBeans;
     inventory.milk -= recipe.latte.milk;
     inventory.cups--;
   }
 }
   
 else if(option=== "3"){
   if (inventory.water < recipe.cappuccino.water) {
     console.log("Sorry, not enough water!");
   }
   else if (inventory.coffeeBeans < recipe.cappuccino.coffeeBeans) {
      console.log("Sorry, not enough coffee!");
     
   }
   else if (inventory.milk < recipe.cappuccino.milk) {
      console.log("Sorry, not enough milk!");
     
   }
   else {
     console.log("I have enough resources, making you a coffee!");
     inventory.money += recipe.cappuccino.money;
     inventory.water -= recipe.cappuccino.water;
     inventory.coffeeBeans -= recipe.cappuccino.coffeeBeans;
     inventory.milk -= recipe.cappuccino.milk;
     inventory.cups--;
   }
   
 }
  else if(option === "back")
  {
   return; 
  }
  
}

function fill() {
  console.log("Write how many ml of water you want to add: ");
  let newWater = Number(input());

  console.log("Write how many ml of milk you want to add: ");
  let newMilk = Number(input());

  console.log("Write how many grams of coffee beans you want to add:  ");
  let newCoffeeBeans = Number(input());

  console.log("Write how many disposable cups you want to add:  ");
  let newCups = Number(input());

  inventory.water += newWater;
  inventory.milk += newMilk;
  inventory.coffeeBeans += newCoffeeBeans;
  inventory.cups += newCups;
  
  
}
function take() {
  let totalMoney = inventory.money;
  console.log(`I gave you $${totalMoney}`);
  inventory.money = 0; 
}

function remaining() {

console.log(`The coffee machine has:
${inventory.water} ml of water
${inventory.milk} ml of milk
${inventory.coffeeBeans} g of coffee beans
${inventory.cups} disposable cups
$${inventory.money} of money`);
  
}
