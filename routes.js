let Articles = require("./articlesModel.js");
let scraper = require("./scraper.js");
let log = require("con-logger");

let homeTest = {
  articles: [
    {
      title: "test3",
      url: "https://www.google.com",
      body: "This is the body of the article"
    },
    {
      title: "test4",
      url: "https://www.google.com",
      body: "This is the body of the article"
    }
  ]
};

let savedTest = {
  articles: [
    {
      title: "test1",
      url: "https://www.google.com",
      body: "This is the body of the article",
      comments: [
        { comment: "This", user: "Me" },
        { comment: "that" },
        { comment: "the other", user: "They" }
      ]
    },
    {
      title: "test2",
      url: "https://www.google.com",
      body: "This is the body of the article",
      comments: [
        { comment: "This", user: "Me" },
        { comment: "that", user: "You" },
        { comment: "the other", user: "They" }
      ]
    }
  ]
};

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index", homeTest);
  });

  app.get("/saved", function(req, res) {
    //   Query the database and get the saved articles
    res.render("saved", savedTest);
  });

  app.put("/api/clear", function(req, res) {
    //   Clear the saved data in the database

    res.redirect("/saved");
  });

  app.post("/api/newScrape", function(req, res) {
    // Run the scrapper which will return the necessary object
    // Store in the database
    // Redirect to home and render with new data
  });

  app.post("/api/comment", function(req, res) {
    log(req.body);
    // Do all of the logic here
    res.send("Added comment");
  });
};
