const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number of seconds to count down: ", (input) => {
  let timeLeft = parseInt(input);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  console.log(`Starting countdown from ${timeLeft} seconds...`);
  console.log("Press 's' to stop the countdown early.\n");

  
  const timer = setInterval(() => {
    console.log("Time remaining:", timeLeft);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  
  process.stdin.setRawMode(true);
  process.stdin.resume();
  function checkForStop() {
    setTimeout(() => {
      process.stdin.once("data", (key) => {
        if (key.toString().trim().toLowerCase() === "s") {
          clearInterval(timer);
          console.log("Countdown stopped early.");
          rl.close();
          return;
        } else {
        
          checkForStop();
        }
      });
    }, 200); 
  }

  checkForStop();
});
