const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./app/config/db");
const app = express();

const corsOptions = {
  origin: "http://localhost:3001",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Footy Goods." });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
