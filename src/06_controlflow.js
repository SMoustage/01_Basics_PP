// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 35;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)


// if(true)             //Wahrheitswert(e)
// if(false)
// if(isJohnOlder)      // Verweis
// if(ageJohn > ageMark)   // direkter Test
    
// {
// console.log("John ist äter. ");
// }

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein


// if (true)
// if (false) 
// if (isJohnOlder) 
// if(ageJohn > ageMark)
//     {
//     console.log("John ist äter. ");
// } else {
//   console.log("John ist jünger. ");  
// }

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

// if(isJohnOlder)
// {
//     console.log("John ist äter. ");
// } 
// else if(isJohnEqual)
// {
//     console.log("John ist gleich Alt. ");
// }
// else 
// {
//   console.log("John ist jünger. ");  
// }


/****** Fallunterscheidung / SWITCH|CASE 1 ******/

const firstName = "Jane";
let job;

job = "driver";      // .. fährt TAXI! / UBER
job = "diver";       // .. taucht im Rhein!
job = "artist";       // .. malt ein Bild!
job = "pilot";       // .. macht etwas anderes! --> default
job = "teacher";     // .. unterrichtet!
job = "instructor";  // .. unterrichtet!

switch (job) 
{
  case "driver":
    console.log(firstName + " fährt TAXI! / UBER")
    break;
  case "diver":
    console.log(firstName + " taucht im Rhein!")
    break;
  case "artist":
    console.log(firstName + " malt ein Bild!")
    break;
  case "teacher":
  case "instructor":
    console.log(firstName + " unterrichtet!")
    break;
 

  default: // WICHTIG !!!!
        console.log(firstName + " macht was anderes!")

    break;
}


