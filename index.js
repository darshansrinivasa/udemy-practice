const fs = require("fs");

fs.writeFile("message.txt", "Hello world from index.js", (err) => {
    if (err) console.log(err);
    else console.log("File saved successfully");
});