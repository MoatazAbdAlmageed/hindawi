# hindawi

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
