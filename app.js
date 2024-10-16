const prompt = require("prompt-sync")();

// array destructuring
const userName = ["Naz", 25];

const [myName, age] = userName;

console.log(myName, age);

// object destructuring
const userNameObj = {
  name2: "Naz2",
  age2: 26,
};

const { name2, age2 } = userNameObj;

console.log(name2, age2);

// statement control
const password = prompt("Enter your password ");

if (password === "Hello") {
  console.log("Correct password");
} else if (password === "hello") {
  console.log("Nice try");
} else {
  console.log("Wrong password");
}

// passing functions as arguments/values
function handleTimeout() {
  console.log("Timed out");
}

const handleTimeout2 = () => {
  console.log("Timed out.... again");
};

setTimeout(handleTimeout2, 3000); // passed as a variable - not as a function call

function greeter(greetFnc) {
  greetFnc();
}

greeter(() => console.log("Greetings!"));

