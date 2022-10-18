let maximum = parseInt(prompt("Enter maximum number"));
while (!maximum) { 
  maximum = parseInt(prompt("Enter a valid number"))
}

const targetNum = Math.floor(math.random() * maximum) + 1;