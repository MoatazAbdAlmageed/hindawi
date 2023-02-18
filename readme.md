# hindawi

```js
var existingEntries = [
  ...(JSON.parse(localStorage.getItem("books")) || JSON.stringify([])),
];
if (existingEntries == null) existingEntries = [];

var page = [...document.querySelectorAll(".bookCover a")]
  .map((a) =>
    `${a.href.replace("www", "downloads")}.kfx`.replace("/.kfx", ".kfx")
  )
  .join(" ");

localStorage.setItem("page", page);
// Save books back to local storage
existingEntries.push(page);
localStorage.setItem("books", JSON.stringify(existingEntries));
```

https://www.youtube.com/watch?v=H3WGvtH69NE&ab_channel=abdulmajeedAlaskar

# hindawi
