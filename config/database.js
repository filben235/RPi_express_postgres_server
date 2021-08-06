require("dotenv").config({ path: __dirname + "/.env" });
const Pool = require("pg").Pool;
const pool = new Pool({
  host: process.env["DB_HOST"],
  port: process.env["DB_PORT"],
  database: process.env["DB_NAME"],
  user: process.env["DB_USER"],
  password: process.env["DB_PASSWORD"],
});

module.exports = pool;
