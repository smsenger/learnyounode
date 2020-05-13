// Write a program that performs an HTTP GET request to a URL provided to you
// as the first command-line argument. Collect all data from the server (not
// just the first "data" event) and then write two lines to the console
// (stdout).

// The first line you write should just be an integer representing the number
// of characters received from the server. The second line should contain the
// complete String of characters sent by the server.



let http = require('http');
let bl = require('bl');
let url = process.argv[2];

http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
        if(err) {
            console.error(err);
            return;
        }
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});
 