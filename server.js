// Initial
const express = require("express");
const app = express();
const PORT = 3000;

// if no view engine, use res.send(), w/ view engine use res.render()

// Greeting page
app.get("/greeting", (req, res) => {
  res.send("Greetings!");
});

// Greetings by name
app.get("/greeting/:name", (req, res) => {
  res.send(`Greetings ${req.params.name}`);
});

// Tip percentage page
app.get("/tip/:total/:tipPercentage", (req, res) => {
  res.send(`Here's your tip ${req.params.tipPercentage}`);
});

const magic8 = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

// Magic page
app.get("/magic", (req, res) => {
  res.send(
    "<h1>" +
      req.query.question +
      "</h1>" +
      "<h2>" +
      magic8[Math.floor(Math.random() * 20) + 1] +
      "</h2>"
  );
});

// Tank Homepage
app.get("/", (req, res) => {
  let tanks = 99;
  res.send(
    "<h1>" +
      `${tanks} tanks running down bottles!` +
      "</h1>" +
      `<a href=/98>` +
      "take one down, pass it around" +
      "</a>"
  );
});

// Number of Tanks left
app.get("/:tanks", (req, res) => {
  tanks = req.params.tanks;
  tanks > 0
    ? res.send(
        `<a href=/${tanks - 1} >` +
          `take one down, pass it around ${tanks} tanks, running down bottles.` +
          "</a>"
      )
    : res.send("<a href=/>" + "Start Over" + "</a>");
});

// Listening port
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
