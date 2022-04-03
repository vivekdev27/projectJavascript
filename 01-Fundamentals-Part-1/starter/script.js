"use strict";

// let js = "amazing";
// console.log(70000 * 12);
// console.log("jonas");

// let PI = 3.1415;

// let myFirstJob = "Digital Marketing";
// let mySecondJob = "UI developer";

// console.log("myFirstJob");

// let numberType = 23; //number
// let stringType = "kakashi"; //string
// let fullAge = true; //boolean
// let children; //undefined

// mySecondJob = "Web associate";
// console.log(mySecondJob);

// console.log(typeof numberType);
// console.log(typeof stringType);
// console.log(typeof fullAge);

// const firstName = "Randy";
// const lastName = "Orton";
// console.log(firstName + " " + lastName);

// // assignment operators
// let x = 10 + 5;
// x += 20;
// x *= 10;
// x++;
// console.log(x);

// comparision

// const validateAge = ageVivek >= 18;

// console.log(now - 1993 > now - 2018);

// let johnMass = 78;
// let johnHeight = 1.69;

// let johnBMI = johnMass / johnHeight ** 2;

// let markMass = 92;
// let markHeight = 1.95;

// let markBMI = markMass / markHeight ** 2;

// let markHigherBMI = johnBMI > markBMI;

// if (markHigherBMI) {
//   console.log(`john's BMI is higher than marks!😁`);
// } else {
//   console.log(`mark's BMI is higher than marks!🤣`);
// }

// now = 2022;
// const ageVivek = now - 1993;
// const ageRaj = now - 1994;
// console.log(ageVivek * 2, ageRaj / 2 ** 3);

// const adharName = "Vexana";
// const job = "magician";
// const birthYear = 10000;
// const year = 2022;

// const vex =
//   "i'm " + adharName + ", a" + (year - birthYear) + " years old " + job + "!";

// const newVex = ` I'm  ${adharName}, a ${year - birthYear} years old ${job} `;

// console.log(newVex);

// console.log(`well this back ticks ,
// method called as
//  template literals`);

// const age = 15;

// if (age >= 18) {
//   console.log("You are eligible for Driving licence 😜");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`You are too young, please wait another  ${yearsLeft} years ❤`);
// }

// const birthYear = 1993;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(`you are from ${century}st century`);

// const inputYear = "1993";
// console.log(Number(inputYear) + 18, inputYear);

// console.log(Number("johncena"));
// console.log(typeof NaN);

// console.log(String(23));

// console.log("I am " + "23" + " years old");
// console.log("22" + "56");

// console.log(Boolean(" "));
// console.log(Boolean({}));

// const money = "18";

// if (money === 18) console.log("You became an adult 😂(strict)");
// if (money == 18) console.log("You became an adult 😒 (loose)");

// let favColor = prompt("what is your favourite number? ");
/**** not working with == comparator    ******/

// if (favColor === 12) {
//   console.log("cool!, 12 is amazing number!");
// } else if (favColor === 7) {
//   console.log("7 is thala dhoni!");
// } else if (favColor === 3) {
//   console.log("3 omg");
// } else {
//   console.log("Number is not 12,7 or 3");
// }

// if (favColor === 12) console.log("why not 12 🤦‍♂️");

// const hasBattlepass = true;
// const hasFinisherVfx = true;
// const isPlaying = true;

// console.log(hasBattlepass && hasFinisherVfx && !isPlaying);
// console.log(hasBattlepass || hasFinisherVfx);
// console.log(!hasBattlepass);

// const shouldBeRich = hasBattlepass && hasFinisherVfx;

// if (shouldBeRich) {
//   console.log("you richiee richh!");
// } else {
//   console.log("someone else is rich!");
// }

// console.log(hasBattlepass && hasFinisherVfx && isPlaying);

// if (hasBattlepass && hasFinisherVfx && !isPlaying) {
//   console.log("rich but playing 😒");
// } else {
//   console.log("enjoying rich and playing");
// }

// const dolphinRoundOneScore = 10;
// const dolphinRoundTwoScore = 10;
// const dolphinRoundThreeScore = 13;

// const koalaRoundOneScore = 10;
// const koalaRoundTwoScore = 10;
// const koalaRoundThreeScore = 13;

// const dolphinAverageScore =
//   (dolphinRoundOneScore + dolphinRoundTwoScore + dolphinRoundThreeScore) / 3;

// const koalaAverageScore =
//   (koalaRoundOneScore + koalaRoundTwoScore + koalaRoundThreeScore) / 3;

// console.log(`Dolphins score is ${dolphinAverageScore}`);
// console.log(`Koalas score is ${koalaAverageScore}`);

// const DolphinScoredHigh =
//   dolphinAverageScore > koalaAverageScore && dolphinAverageScore >= 100;
// const koalaScoredHigh =
//   koalaAverageScore > dolphinAverageScore && koalaAverageScore >= 100;
// const drawScore = dolphinAverageScore === koalaAverageScore;

// if (drawScore) {
//   console.log("both wins the trophy 🏆!! 🐬🐨");
// } else if (DolphinScoredHigh) {
//   console.log("Dolphins are winners!! 🐬");
// } else if (koalaScoredHigh) {
//   console.log("Koala are winners!! 🐨");
// } else {
//   console.log("Decision not made!");
// }

// let agent = "Yoru";

// switch (agent) {
//   case "Jett":
//     console.log("Dash,Updraft and Bladestorm");
//     console.log("Super Dash");
//     break;
//   case "Yoru":
//   case "Chamber":
//     console.log("Teleport,Vanish");
//     console.log("SonicFlash");
//     break;

//   case "Killjoy":
//     console.log("Nanoswarm,Bot");
//     console.log("Lockdown");
//     break;

//   default:
//     console.log("Agent not yet available!");
// }

// if (agent === "Yoru") {
//   console.log("Dash,Updraft and Bladestorm");
// } else if (agent === "Yoru" && agent === "Chamber") {
//   console.log("Teleport,Vanish");
// } else {
//   console.log("Agent not yet available!");
// }

// let salary = 1000;

// salary >= 50000
//   ? console.log("it's actually a nice package")
//   : console.log("we need to make it happen!");

// const age = 25;
// const drink = age >= 18 ? " Cocktail 🍷" : "Mocktail🍸";

// console.log(drink);

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
// const total = bill + tip;

// console.log(
//   `The bill was ${bill}, the tip was ${tip} and total value ${total}`
// );

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("gg wp");

// function logger() {
//   console.log("my name is Vicky!");
// }

// logger(43);

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} and ${oranges} `;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(5, 2);
// console.log(appleOrangeJuice);

// const num = Number("231231");

// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }
// const age1 = calcAge1(1993);

// console.log(age1);

// const age2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// const age3 = age2(1880);

// console.log(age1, age2);

// const userYear = 123;
// const calcAge = 2037 - userYear;
// console.log(calcAge);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const now = 2022;
//   const age = now - birthYear;
//   const retireAge = 65 - age;
//   return `${firstName} has ${retireAge} years left to retire 😎`;
// };

// console.log(yearsUntilRetirement(1993, "Vivek"));

// const cutFruit = function (fruit) {
//   return fruit * 4;
// };

// const fruitProcessor = function (apples, oranges) {
//   const applecuts = cutFruit(apples);
//   const orangecuts = cutFruit(oranges);
//   const juice = `Juice with ${applecuts} and ${orangecuts} `;
//   return juice;
// };

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const retireAge = 65 - calcAge(birthYear);
//   if (retireAge > 0) {
//     console.log(`${firstName} has ${retireAge} years !🎉 `);
//     return retireAge;
//   } else {
//     console.log(`${firstName} has retired already !🎉 `);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1993, "Johncena"));
// console.log(yearsUntilRetirement(22, "Under Taker"));

// const calcAverage = (x, y, z) => {
//   const averageScore = (x + y + z) / 3;
//   return averageScore;
// };

// const dolphinsAverageScore = calcAverage(85, 54, 41);
// const koalasAverageScore = calcAverage(23, 34, 27);

// console.log(dolphinsAverageScore, koalasAverageScore);

// const checkWinner = function (dolphinsAverageScore, koalasAverageScore) {
//   if (dolphinsAverageScore >= 2 * koalasAverageScore) {
//     console.log(`Dolphins won! 🐬`);
//   } else if (koalasAverageScore >= 2 * dolphinsAverageScore) {
//     console.log(`Koalas won! 🐨`);
//   } else {
//     console.log("no one wins!");
//   }
// };

// checkWinner(dolphinsAverageScore, koalasAverageScore);

// const avengers = ["Iron Man", "Spider Man", "Dr. Strange"];
// console.log(avengers);

// const avengersIndex = new Array(1993, 2000, 2022);
// console.log(avengersIndex);

// console.log(avengers[1]);
// console.log(avengers[2]);
// console.log(avengers[0]);

// console.log(avengers.length);

// console.log(avengers[avengers.length - 1]);

// avengers[0] = "Bat Man";

// const vivek = ["vivek", 2022 - 1993, "Hyderabad", avengers];
// console.log(vivek);

// const calcAge = function (birthYear) {
//   return 2097 - birthYear;
// };

// const years = [1993, 2000, 2022, 2032];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const avengers = ["Iron Man", "Spider Man", "Dr. Strange"];

// const newLength = avengers.push("Moon knight");

// console.log(newLength);

// avengers.unshift("Captain America");

// avengers.pop();
// avengers.push("23");
// console.log(avengers);

// console.log(avengers.indexOf("Spider Man"));

// console.log(avengers.includes("Spider Man"));
// console.log(avengers.includes(23));

// if (avengers.includes("Captain America")) {
//   console.log(`Avengers have best Team Captain! ${avengers[0]}`);
// }

// let calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// if (bill >= 50 && bill <= 300) {
//   const tip = bill * 0.15;
//   return tip;
// } else {
//   const tip = bill * 0.2;
//   return tip;
// }
// };

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const Total = [
//   bills[0] + calcTip(bills[0]),
//   bills[1] + calcTip(bills[1]),
//   bills[1] + calcTip(bills[2]),
// ];
// console.log(Total);

// console.log(vivek);
// console.log(vivek.city);

// console.log(vivek["city"]);

// const nameKey = "Name";

// console.log(vivek["first" + nameKey]);
// console.log(vivek["last" + nameKey]);

// const intrestedIn = prompt(
//   "what do you want to know about Vivek. first name, last name, age or city?"
// );

// if (vivek[intrestedIn]) {
//   console.log(vivek[intrestedIn]);
// } else {
//   console.log("wrong request, please choose other one!");
// }

// console.log(vivek);

// const friendsCount = vivek.friends.length;
// // const bestFriend = vivek.friends[0];

// console.log(friendsCount);

// const declareVivek = `${vivek.firstName} has ${friendsCount} friends, and his best friend is called ${vivek.friends[0]} `;

// console.log(declareVivek);

// const vivek = {
//   firstName: "Vivek",
//   lastName: "Raj",
//   city: "Hyderabad",
//   birthYear: 1993,
//   friends: ["spidey", "cody", "bladey"],
//   social: "@itzvivekvicky",
//   hasLicence: false,
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   summery: function () {
//     return `${this.firstName} ${
//       this.lastName
//     } is ${this.calcAge()} years old and having ${this.hasLicence ? "a" : "no"}
//      licence in ${vivek.city} `;
//   },
// };

// console.log(vivek.summery());

// const Mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (2 * this.height);
//     return this.bmi;
//   },
// };

// const John = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (2 * this.height);
//     return this.bmi;
//   },
// };

// John.calcBMI();
// Mark.calcBMI();

// // this.bmi why its not working!!????? showing undefined
// // console.log(John.bmi); // why undefined?
// // console.log(Mark.calcBMI()); //23.0
// // console.log(John.calcBMI()); //23.5

// console.log(
//   ` ${
//     Mark.bmi > John.bmi
//       ? "Mark Miller " + `(${Mark.bmi})`
//       : "John smith " + `(${John.bmi})`
//   } BMI is higher than
//      ${
//        Mark.bmi > John.bmi
//          ? "John smith " + `(${John.bmi})`
//          : "Mark Miller " + `(${Mark.bmi})`
//      } `
// );

// console.log("lifting weights repetition 1 🏋️‍♀️");
// console.log("lifting weights repetition 2 🏋️‍♀️");
// console.log("lifting weights repetition 3 🏋️‍♀️");
// console.log("lifting weights repetition 4 🏋️‍♀️");
// console.log("lifting weights repetition 5 🏋️‍♀️");
// console.log("lifting weights repetition 6 🏋️‍♀️");
// console.log("lifting weights repetition 7 🏋️‍♀️");
// console.log("lifting weights repetition 8 🏋️‍♀️");
// console.log("lifting weights repetition 9 🏋️‍♀️");
// console.log("lifting weights repetition 10 🏋️‍♀️");

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// const types = [];

// for (let i = 0; i < vivek.length; i++) {
//   console.log(vivek[i], typeof vivek[i]);
//   // types[i] = typeof vivek[i];

//   types.push(typeof vivek[i]);
// }

// console.log(types);

// const years = [1992, 1993, 2000, 2022];

// const ages = [];

// console.log("-------strings only-----------");

// for (let i = 0; i < vivek.length; i++) {
//   if (typeof vivek[i] !== "string") continue;
//   console.log(vivek[i], typeof vivek[i]);
// }

// console.log("-------break with number only-----------");

// for (let i = 0; i < vivek.length; i++) {
//   if (typeof vivek[i] === "number") break;
//   console.log(vivek[i], typeof vivek[i]);
// }

// const vivek = [
//   "vivek",
//   2022 - 1993,
//   "Hyderabad",
//   ["spidey", "Batsy", "Mighty"],
//   "Extra folder",
//   true,
// ];

// // reverse 4,3,2,1..
// for (let i = vivek.length - 1; i >= 0; i--) {
//   console.log(i, vivek[i]);
// }

// for (let exercise = 1; exercise <= 4; exercise++) {
//   console.log(`------starting exercise ${exercise} 🏅----- `);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`exercise ${exercise} : lifting weights reps ${rep} 🏋️‍♀️`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;

// while (rep <= 10) {
//   console.log(`lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }

// const calcTip = function () {
//   for (let i = 0; i < bills.length; i++) {
//     tips.push(bills[i] * 0.15);
//   }
// };

const bills = [22, 95, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function () {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      tips.push(bills[i] * 0.15);
      totals.push(bills[i] + tips[i]);
    } else {
      tips.push(bills[i] * 0.2);
      totals.push(bills[i] + tips[i]);
    }
  }
};

calcTip();

console.log(`Bills array : ${bills}`);
console.log(`tips array : ${tips}`);
console.log(`total array : ${totals}`);

console.log("");
