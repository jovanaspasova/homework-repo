console.log ("works")
// if else
let year = prompt ("enter a year");
let formula = (year - 4 ) % 12;

if (formula === 0 ) {
    console.log("Ur chinese zodiac is Rat");
}
else if (formula === 1) {
    console.log("Ur chinese zodiac is Ox");
}
else if (formula === 2) {
    console.log("Ur chinese zodiac is Tiger");
}
else if (formula === 3) {
    console.log("Ur chinese zodiac is Rabbit");
}
else if (formula === 4) {
    console.log("Ur chinese zodiac is Dragon");
}
else if (formula === 5) {
    console.log("Ur chinese zodiac is Snake");
}
else if (formula === 6) {
    console.log("Ur chinese zodiac is Horse");
}
else if (formula === 7) {
    console.log("Ur chinese zodiac is Goat");
}
else if (formula === 8) {
    console.log("Ur chinese zodiac is Monkey");
}
else if (formula === 9) {
    console.log("Ur chinese zodiac is Rooster");
}
else if (formula === 10) {
    console.log("Ur chinese zodiac is Dog");
}
else if (formula === 11) {
    console.log("Ur chinese zodiac is Pig");
}
// switch

let yearPartTwo = prompt("Enter a year");
let formulaPartTwo = (yearPartTwo - 4 ) % 12;

switch (formula02) {
  case 0:
    console.log("Ur chinese zodiac is Rat");
    break;
  case 1:
    console.log("Ur chinese zodiac is Ox");
    break;
  case 2:
    console.log("Ur chinese zodiac is Tiger");
    break;
  case 3:
    console.log("Ur chinese zodiac is Rabbit");
    break;
  case 4:
    console.log("Ur chinese zodiac is Dragon");
    break;
  case 5:
    console.log("Ur chinese zodiac is Snake");
    break;
  case 6:
    console.log("Ur chinese zodiac is Horse");
    break;
  case 7:
    console.log("Ur chinese zodiac is Goat");
    break;
  case 8:
    console.log("Ur chinese zodiac is Monkey");
    break;
  case 9:
    console.log("Ur chinese zodiac is Rooster");
    break;
  case 10:
    console.log("Ur chinese zodiac is Dog");
    break;
  case 11:
    console.log("Ur chinese zodiac is Pig");
    break;

  default:
    console.log("You have to enter valid numbers (years)");
}