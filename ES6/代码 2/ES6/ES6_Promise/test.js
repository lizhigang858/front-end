const fs = require('fs');

fs.readFile('file1.txt', function (err,data) {
    if (err) {
        console.log(err.toString());
    } else {

        console.log(data.toString());
    }
});