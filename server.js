const express = require("express");
const mongodb = require("./db/connect");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const app = express();

app
  .use(cors())
  .use(express.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(
      `Connected to DB and listening on ${PORT}`
    );
  }
});