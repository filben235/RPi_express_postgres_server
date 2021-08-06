let pool = require("../config/database");

//enables inserting into database from web
exports.postContent = function (req, res) {
  let content = req.body.content;

  //checks that submitted contntent is either string or a number
  let dataValid = typeof content == "number" || typeof content == "string";

  if (dataValid) {
    //DO NOT INSERT USER GENERATED VALUES INTO THE STRING DIRECTLY, SQL INJECTION RISK
    let insertSQL = "INSERT INTO content (contentinfo) VALUES ($1);";
    let value = [content];

    // Pass an array of values as the second
    // argument for pool.query() method to
    // build the query string safely.
    pool.query(insertSQL, value, (error, result) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(200).send("Saved to database.\n");
      }
    });
  } else {
    res.status(400).send("Please check that your data types are correct");
  }
};

//Gets most recent submitted content from db and returns as JSON
exports.getLatestContent = function (req, res) {
  pool.query(
    "SELECT * FROM content ORDER BY id DESC LIMIT 1;",
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};
