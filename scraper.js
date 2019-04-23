let axios = require("axios");
let cheerio = require("cheerio");
let log = require("con-logger");

/**
 * @description - The value returned from this function is a promise that will resolve an array of five objects containing articles form The Onion
 */
module.exports = function() {
  // Go to cnet
  axios.get("https://www.cnet.com/news/").then(response => {
    // Load the html body into cherio
    let $ = cheerio.load(response.data);

    $(".riverPost").each(function(i, element) {
      let info = "";
      let url = "";
      let title = "";
      let summary = "";
      if ($(element).children().length === 4) {
        info = $(element).children("assetText");
        log(
          info
            .children("h3")
            .children()
            .attr("href")
        );
      }
    });
    // Scrape five articles

    // Return them as an array of objects};
  });
};
