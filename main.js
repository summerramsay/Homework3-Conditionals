let userChoice;
let randomNumber;
let computerChoice;
userChoice = prompt("Heads or Tails");
//alert("My choice is " + userChoice)
randomNumber = Math.floor(Math.random() * 2)
//alert("random number is " + randomNumber)
if(randomNumber === 0) {
   computerChoice = "heads" 
} else {
    computerChoice = "tails"
} 
//alert("computer choice is " + computerChoice)
if(computerChoice === userChoice) {
    alert("You guessed right! The coin flip landed on " + userChoice)
} else {
    alert("Sorry, the coin flip landed on " + computerChoice)
}
let birthYear;
birthYear = prompt("What year were you born?")
let currentYear = 2022;
let myAge = currentYear - birthYear
alert("I am " + myAge + " years old")
if(myAge > 21) {
    alert("You are old enough to drink in the US")
} else if(myAge === 21) {
    alert("You are old enough to drink in the US...barely")
} else {
    alert("Sorry, you are not old enough to drink in the US")
}


