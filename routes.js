let Articles = require("./articlesModel.js");
let scraper = require("./scraper.js");

module.exports = function(app) {
  app.post("/api/newScrape", function(req, res) {
    // Run the scrapper which will return the necessary object
    // Store in the database
    // Redirect to home and render with new data
  });

  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/saved", function(req, res) {
    res.render("saved");
  });
};
