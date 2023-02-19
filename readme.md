# hindawi

downlaod hindawi books for kindle

## Usage

- cd business && wget -i books

## this snippet to generate books file

TODO: create chrome extention to generate fil of node script

```js
var existingEntries = [
  ...(JSON.parse(localStorage.getItem("books")) || JSON.stringify([])),
];
if (existingEntries == null) existingEntries = [];

var page = [...document.querySelectorAll(".bookCover a")]
  .map((a) =>
    `${a.href.replace("www", "downloads")}.epub`.replace("/.epub", ".epub")
  )
  .join(" ");

localStorage.setItem("page", page);
// Save books back to local storage
existingEntries.push(page);
localStorage.setItem("books", JSON.stringify(existingEntries));
```

## convert epub to .epub

https://www.youtube.com/watch?v=H3WGvtH69NE&ab_channel=abdulmajeedAlaskar
