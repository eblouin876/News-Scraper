let Articles = require("./articlesModel.js");
let scraper = require("./scraper.js");

let test = {
  articles: [
    {
      title: "test",
      url: "https://www.google.com",
      body: "This is the body of the article"
    },
    {
      title: "test",
      url: "https://www.google.com",
      body: "This is the body of the article"
    }
  ]
};
module.exports = function(app) {
  app.post("/api/newScrape", function(req, res) {
    // Run the scrapper which will return the necessary object
    // Store in the database
    // Redirect to home and render with new data
  });

  app.get("/", function(req, res) {
    res.render("index", test);
  });

  app.get("/saved", function(req, res) {
    res.render("saved", test);
  });
};
