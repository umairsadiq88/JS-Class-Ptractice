// alert("Welcome! to JavaScript Classes");
// alert("Chapter 1 Alert")
// alert("Chapter 2 Variable for Strings");
// var firstname = "Umair";
// var lastname = "Sadiq";
// alert(firstname );
// alert(lastname);
// Chapter 3
// var balance = 5000;
// var newincome = 45000;
// var currentbalance = (balance + newincome);
// alert(currentbalance);
// Chapter 4 Variable Names Legal and Illegal
// Here are the rest of the rules:
// A variable name can't contain any spaces.
// A variable name can contain only letters, numbers, dollar signs, and underscores.
// Though a variable name can't be any of JavaScript's keywords, it can contain keywords.
// For example, userAlert and myVar are legal.
// Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a
// Rose . If you assign the string "Floribundas" to the variable rose , and then ask JavaScript
// for the value assigned to Rose , you'll come up empty.
// I teach the camelCase naming convention. Why "camelCase"? Because there is a hump or
// two (or three) in the middle if the name is formed by more than one word. A camelCase
// name begins in lower case. If there's more than one word in the name, each subsequent
// word gets an initial cap, creating a hump. If you form a variable name with only one
// word, like response , there's no hump. It's a camel that's out of food. Please adopt the
// camelCase convention. It'll make your variable names more readable, and you'll be less
// likely to get variable names mixed up.

// Chapter 5 Math expressions | Familiar operators
// var num1 = 10;
// var num2 = 100;
// var num3 = (num1 + num2);
// document.write(num3);
// var num3 = (num1 - num2);
// document.write(num3);
// var num3 = (num1 * num2);
// document.write(num3);
// var num3 = (num1 / num2);
// document.write(num3);
// var num3 = (num1 % num2);
// dcument.write(num3, "%");

// Capter 6 Math expressions Unfamiliar operators

// var num1 = 10;
// var num2 = 100;

// var num3 = (++num1)
// document.write(num3);

// var num4 = (--num2)
// document.write(num4);

// Chapter 7: Math expressions Eliminating ambiguity

// var num1 = 2 + 4;
// document.write(num1);
// document.write('<br/>');
// var num2 = (2 + 4) * 8;
// document.write(num2);
// document.write('<br/>');
// var num3 = (2 + 4) * (8 + 10);
// document.write(num3);

//Chapter 8: Concatenating text strings

// var message = "Welcome";
// var username = "Umair";
// var explanation = "!"
// alert(message + username + explanation);
// alert("2" + "5");

//Chapter 9: Prompts
// var question = "Your species?";
// var defaultAnswer = "human";
// var spec = prompt(question, defaultAnswer);
// var numberOfCats = prompt("How many cats?");
// var tooManyCats = numberOfCats + 1;
//Chapter 10: if statements
// var userquestion = prompt("Enter Username");
// if (userquestion == "Umair") {
//     alert("Welcome Umair");
// }

//Chapter 11: Comparison operators

// Here are 4 more comparison operators, usually used to compare numbers.
// > is greater than
// < is less than
// >= is greater than or equal to
// <= is less than or equal to

//Chapter 12: if...else and else if statements

// var x = prompt("What is the largest city of Pakistan?");
// if (x === "Karachi") {
//     alert("Correct!" + "Karachi is beautiful City!");
// }

// else {
//     (x === "Islamabad, Lahore, Faisalabad, Rawalpindi, Peshawar");
//     alert("Wrong!" + "Karachi is the largest city of Pakistan!");
// }

// var username = prompt("Please enter username");
// if (username === "Umair") {
//     alert("Welcome! to my Page");
// }
// else {
//     (username !== "Umair")
//     alert("Access denied!");
// }

//Chapter 14: if statements nested

// var Firstname = prompt("Please enter Firstname");
// var Lastname = prompt("Please enter Lastname");
// var password = prompt("Please enter password");
// if ((Firstname === "Umair" || Lastname === "Sadiq") && password === "12345") {
//     alert("Welcome! to my Page");
// }

// else {
//     (Firstname !== "Umair" || Lastname !== "Sadiq");
//     alert("Access denied!");
// }

//Another Example

// var age = 13;
// if (age >= 18) {
//     console.log("You are qualified for Driving Licence")
// } else {
//     console.log("You are not qualified for Doing Licence" +  )
// }

// One more Example... Try to make Mark Sheet..

// var score = 39;
// if (score >= 80) {
//     console.log("Congrats! You get the Grade A");
// }
// else if (score >= 70) {
//     console.log("Congrats! You get the Grade B");
// }
// else if (score >= 60) {
//     console.log("Congrats! You get the Grade C");
// }
// else if (score >= 50) {
//     console.log("Congrats! You get the Grade D");
// }
// else if (score >= 40) {
//     console.log("Congrats! You get the Grade E");
// }
// else {
//     console.log("Sorry! You are Failed, Try Next Year");
// }

//    //Chapter 15:Arrays

//    var cities = ["Karachi", "Islamabad", "Peshawar",
//     "Rawalpindi", "Sukkur", "Lahore", "Quetta"]

// alert("Welcome to" + " " + cities[0]);

//Chapter 16:  Arrays: Adding and removing elements

// var cities = ["Karachi", "Islamabad", "Peshawar"]
// console.log(cities[2]);

//replace array with index numbers
// cities [0] = "Rawalpindi";
// cities [1] = "Sukkur";
// console.log (cities[2]);

//remove Array

// cities.pop(0);
// console.log (cities);
//or
// cities.pop("Peshawar");
// console.log(cities);

//adding Array

// cities.push("Rawalpindi" , "Sukkur");
// console.log(cities);

//Chapter 17 Arrays: Removing, inserting, and extracting elements

// var cities = ["Karachi", "Islamabad", "Peshawar", "Sindh", "KPK", "Punjab","Balochistan", "Rawalpindi", "Sialkot", "Quetta"];

//add cities

// cities.unshift("Lahore", "Multan");
// console.log(cities);

//remove city

// cities.shift("Lahore");
// console.log(cities);

//replace with range

// cities.splice(2, 2, "Multan", "Lahore");
// console.log(cities);

// cities.splice(2, 0, "Peshawar", "Rawalpindi");

//remove with range
// cities.splice(2,2);
// console.log(cities);

//extract array
// console.log(cities);

// var noCities = cities.splice(3,4);
// console.log(noCities);
// console.log(cities);

//Chapter 18 for loops

// for (var i=0; i<=4; i++) {
//     console.log(i);
//     }

// for (var i = 10 ; i > 0 ; i--) {
//         console.log(i);
//         }

//for loop example

// var num = 3;

// for (var i=1; i<=10; i++) {
//     console.log(num+ " x "+i+" = "+(num*i));

// }

var cityToCheck = prompt("enter your city");

var cities = [
  "Karachi",
  "Islamabad",
  "Peshawar",
  "Rawalpindi",
  "Sialkot",
  "Quetta"
];

for (var i = 0; i <= 6; i++) {
  if (cityToCheck === cities[i]) {
    console.log(cities[i] + " " + "is one of the city of Pakistan");
  }

  else if (cityToCheck != cities[i]) {
    console.log(cityToCheck + " " + "is not the city of Pakistan");
  }

}
