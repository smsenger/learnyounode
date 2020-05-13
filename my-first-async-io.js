// Write a program that uses a single asynchronous filesystem operation to
// read a file and print the number of newlines it contains to the console
// (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first
// command-line argument.

const fs = require('fs');
fs.readFile(process.argv[2], (err, data) => {
    if(err) {
        console.log('Error:' + err);
        return;
    }

    let str = data.toString();
    let arrayString = str.split('\n');
    console.log(arrayString.length - 1);
});
