var Sentiment = require("sentiment");
var sentiment = new Sentiment();

let text = [
  "Cats are cool.",
  "Amazing weather today.",
  "I am feeling great",
  "I was tired yesterday.",
  "i felt undecided.",
];

text.forEach((t) => {
  let result = sentiment.analyze(t);
  console.dir(result);
});
