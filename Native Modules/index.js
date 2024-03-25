const fs = require("fs");

fs.readFile('D:/Downloads/Coding/UDEMY/Web dev/Native Modules/message.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });