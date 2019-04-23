let express = require("express");
let logger = require("morgan");
let mongoose = require("mongoose");
let exphbs = require("express-handlebars");

// Initialize express and set the port
let app = express();
let PORT = process.env.PORT || 8080;

// Use morgan logger for logging requests
app.use(logger("dev"));

// Parse requeust as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use public as static folder
app.use(express.static("public"));

// Setup handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use the correct database (local versus deployed)
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ArticlesDb";

// Connect to the mongodb
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Initialize routes
require("./routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
