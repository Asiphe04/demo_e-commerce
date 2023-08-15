const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "buwnurkd8a1hwq7ku6j6-mysql.services.clever-cloud.com",
  user: "uhgm9rzbodqfzka4",
  password: "FWhbgQ9RHtMSn9NMxiBz",
  database: "buwnurkd8a1hwq7ku6j6",
});
connection.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Database connected Successfully.");
  }
});

module.exports = connection;
