require("dotenv").config({ path: __dirname + "/.env" });
const pool = require("./config/database");

const express = require("express");
const app = express();
const port = 3000;
const contentRouter = require("./routes/contentRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/content/", contentRouter);

app.listen(port, () => {
  console.log(`app is up and running at http://localhost:${port}`);
});
