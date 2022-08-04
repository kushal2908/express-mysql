const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "192.168.7.117",
  user: "ipdc",
  password: "Ipdc@321",
  database: "ipdc_live_copy",
});
connection.connect((err) => {
  if (err) {
    console.log("------------------------------");
    console.log("DB connection error");
    console.log("------------------------------");
    console.log(err.stack);
  } else {
    console.log("------------------------------");
    console.log("DB connected successfully");
    console.log("------------------------------");
  }
});

module.exports = connection;
