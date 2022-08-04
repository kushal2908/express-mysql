require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 3131;
const route = require("./routes/routes");

// CORS OPTIONS
let corsOptions = {
  origin: "*",
};

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use(express.static("public"));

//view engine
app.set("view engine", "ejs");

//ROUTING
app.use(route);

//404
app.use((req, res) => {
  res.status(404).render("404", { title: "Oh crap!!" });
});

// SERVER LISTEN
app.listen(port, () => {
  console.log("--------------------------------------------------------------------");
  console.log(`Server started on ${port}`);
  console.log("--------------------------------------------------------------------");
});
