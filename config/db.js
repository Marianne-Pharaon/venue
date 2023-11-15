require("dotenv").config();
const mysql = require("mysql");
const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_NAME = process.env.DATABASE_NAME;

const connection = mysql.createPool({
  host: DATABASE_HOST,
  user: DATABASE_USER,
  database: DATABASE_NAME,
  password: DATABASE_PASSWORD,
});

connection.getConnection((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected to the database ");
});

module.exports = connection;