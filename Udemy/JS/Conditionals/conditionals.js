// let random = Math.random();
// if(random < 0.5) {
//   console.log("your num is less that 0.5!")
//   console.log(random);
// }

// if(random > 0.5) {
//   console.log("your num is more than 0.5!")
//   console.log(random);
// }



// const dayOfWeek = prompt("Enter a day").toLowerCase();

// if(dayOfWeek === 'monday') {
//   console.log("ughh i hate mondays")
// }
// else if(dayOfWeek === 'saturday') {
//   console.log("yey i love saturdays!")
// }
// else if(dayOfWeek === 'friday') {
//   console.log("awsome! friday is here")
// }
// else {
//   console.log("meh")
// }



// const age = 8;

// if(age < 5) {
//   console.log("You are baby. You get for free!")
// }

// else if(age < 10) {
//   console.log("You are child. You pay $10!")
// }

// else if(age > 16) { 
//   console.log("You are adult. Pay $20!")
// }


const password = prompt("Please enter a new password");
if(password.length >= 6) {
  if(password.indexOf(' ') === -1) {
    console.log("Valid password!")
  } else {
    console.log("There must be no spaces!")
  }
} else {
  console.log("Password too short! Must be 6+ characters!")
}
