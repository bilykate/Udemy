const userName = prompt("Please enter your name")
const userAge = prompt("Please enter your age")

if(userAge < 18) {
  alert("You are not allowed to visit this website")
}
 else if(userAge >= 18 && userAge <= 22) {
  const userAnswer = confirm('Are you sure you want to continue?')
  if(userAnswer) {
    alert('Welcome' + ' ' + userName)
  } else {
    alert('You are not allowed to visit this website')
  }
} else { 
  alert('Welcome' + ' ' + userName)
}

while (!userName) {
  userName = prompt("Please enter valid name")
}
while (!userAge) { 
  userAge = parseInt(prompt("Please enter valid number"))
}

