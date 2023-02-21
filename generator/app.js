// Loading the dependencies. We don't need pretty
// because we shall not log html to the terminal
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const books = [];
const topic = "history";

// Async function which scrapes the data
async function scrapeData() {
  try {
    // todo:: build for to get topics
    // const url = `https://www.hindawi.org/books/`;
    // const { data } = await axios.get(url);
    // // Load HTML we fetched in the previous line
    // const $ = cheerio.load(data);
    // // Select all the list items in plainlist class
    // const listItems = $(".accordion .parent li");
    // const accordions = [];
    // listItems.each((idx, el) => {
    //   // // Object holding data for each country/jurisdiction
    //   // const country = { name: "", iso3: "" };
    //   // // Select the text content of a and span elements
    //   // // Store the textcontent in the above object
    //   href = $(el).children("a").attr("href");
    //   console.log("href", href);

    //   if (href && href.includes("collections")) {
    //     accordions.push(`${href}`);
    //   }
    // });
    // console.log("accordions", accordions);
    // return;
    for (let index = 1; index < 40; index++) {
      // URL of the page we want to scrape
      const url = `https://www.hindawi.org/books/categories/${topic}/${index}`;
      // Fetch HTML of the page we want to scrape
      const { data } = await axios.get(url);
      // Load HTML we fetched in the previous line
      const $ = cheerio.load(data);
      // Select all the list items in plainlist class
      const listItems = $(".books_covers ul li");
      // Stores data for all books
      // Use .each method to loop through the li we selected
      listItems.each((idx, el) => {
        // // Object holding data for each country/jurisdiction
        // const country = { name: "", iso3: "" };
        // // Select the text content of a and span elements
        // // Store the textcontent in the above object
        href = $(el).children("a").attr("href").slice(0, -1);
        console.log("href", href);
        // console.log("boook", boook.href);
        books.push(`https://downloads.hindawi.org${href}.epub`);
      });
      // Logs books array to the console
      console.dir(books);

      var file = fs.createWriteStream(`${topic}.txt`);
      file.on("error", function (err) {
        /* error handling */
      });
      books.forEach(function (book) {
        file.write(book + "\n");
      });
      file.end();
    }
  } catch (err) {
    console.error(err);
  }
}
// Invoke the above function
scrapeData();
