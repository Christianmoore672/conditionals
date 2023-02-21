// Conditionals
if(2+2 === 4){
    console.log("Math works");
} else {
    console.log("Math is broken")
}

// <= is less than or equal to 
// >= is greater than or equal to 
// with && will run if both are true
// || will run as an "or" 

if(1+1 > 5){
    console.log("True Fact!");
} else {
    console.log("LIES!")
}

if(4*5 <= 20){
    console.log("True Fact!");
} else {
    console.log("LIES!")
}

if(6-2 >= 0){
    console.log("True Fact!");
} else {
    console.log("LIES!")
}

let likesDogs = "no"
if (likesDogs === "true"){
    console.log("You're a dog person!");
} else {
    console.log("You're a cat person!");
}

const christian = {
    name: "Christian",
    preferredLanguage: "French",
}

let language = christian.preferredLanguage;

if (language === "English"){
  console.log("Hello, Christian");
} else if (language === "Spanish"){
  console.log("Hola, Christian");
} else if (language === "French"){
  console.log("Bonjour, Christian");
} 

let grade = 86 
// x = grade

if(grade <= 69){
    console.log("F");
} else if (grade >= 70 && grade <= 76){
    console.log("D");
  } else if (grade >= 77 && grade <= 84){
    console.log("C");
  } else if (grade >= 85 && grade <= 92){
    console.log("B");
  } else if (grade >= 93 && grade <= 100){
    console.log("A");
  } 