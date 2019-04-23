let axios = require("axios");
let cheerio = require("cheerio");

/**
 * @description - The value returned from this function is a promise that will resolve an array of five objects containing articles form The NYTimes  {link:,  title:, body:}
 */
module.exports = function() {
  return axios.get("https://www.nytimes.com/section/science").then(response => {
    // Load the html body into cherio
    let $ = cheerio.load(response.data);
    let articles = [];

    $(".css-4jyr1y").each(function(i, element) {
      let child = $(element).children("a");
      let link = "https://www.nytimes.com" + child.attr("href");
      let title = $(child)
        .children("h2")
        .text();
      let body = $(child)
        .children("p")
        .text();

      articles.push({ link, title, body });
    });
    // Return them as an array of objects};
    return articles;
  });
};
