// literals allows you to values directly

let mood: "Happy" | "Sad" = "Sad";
mood = "Happy";
console.log(mood);

// mood cn only be "Happy" or "Sad"
// mood = "Excited";


const giveAnswer = (answer: "yes" | "no" | "maybe") => {
  return `Your response was ${answer}`;
}

giveAnswer("maybe");
//giveAnswer("dunno");