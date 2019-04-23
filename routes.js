let Articles = require("./articlesModel.js");
let scraper = require("./scraper.js");
let log = require("con-logger");

let homeTest = {
  articles: [
    {
      title: "test3",
      url: "https://www.google.com",
      body: "This is the body of the article",
      saved: false
    },
    {
      title: "test4",
      url: "https://www.google.com",
      body: "This is the body of the article",
      saved: false
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
      ],
      saved: true
    },
    {
      title: "test2",
      url: "https://www.google.com",
      body: "This is the body of the article",
      comments: [
        { comment: "This", user: "Me" },
        { comment: "that", user: "You" },
        { comment: "the other", user: "They" }
      ],
      saved: true
    }
  ]
};

module.exports = function(app) {
  app.get("/", function(req, res) {
    Articles.find({}, (err, data) => {
      if (err) log(err);
      let articles = [];
      data.forEach(article => {
        let newArticle = {};
        newArticle.title = article.title;
        newArticle.link = article.link;
        newArticle.body = article.body;
        newArticle.comments = article.comments;
        newArticle.saved = article.saved;
        articles.push(newArticle);
      });
      res.render("index", { articles: articles });
    });
  });

  app.get("/saved", function(req, res) {
    Articles.find({}, (err, data) => {
      if (err) log(err);
      let articles = [];
      data.forEach(article => {
        if (article.saved) {
          let newArticle = {};
          newArticle.title = article.title;
          newArticle.link = article.link;
          newArticle.body = article.body;
          newArticle.comments = article.comments;
          newArticle.saved = article.saved;
          articles.push(newArticle);
        }
      });
      res.render("saved", { articles: articles });
    });
  });

  app.put("/api/clear", function(req, res) {
    //   Clear the saved data in the database
    Articles.collection.drop();
    res.send("/");
  });

  app.post("/api/newScrape", async function(req, res) {
    // Run the scrapper which will return the necessary object
    let articles = await scraper();
    // Store in the database
    articles.forEach(article => {
      Articles.create(article);
    });
    res.redirect("/");
  });

  app.post("/api/comment", function(req, res) {
    log(req.body);
    Articles.updateOne(
      { _title: req.body.title },
      { $set: { comment: req.body.comment } }
    ).then(() => {
      res.send("Added comment");
    });
    // Do all of the logic here
  });
};
