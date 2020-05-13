
//SOLUTION 1:
let mymodule = require('./mymodule');
let directory = process.argv[2];
ext = process.argv[3];

mymodule(directory, ext, function(err, files) {
    if(err) {
        return console.error('error:', err);
    }
    files.forEach(function(file) {
        console.log(file);
    })
})

//SOLUTION 2:
const filterFileName = require('./mymodule');

filterFileNames(process.argv[2], process.argv[3], (err, data) => {
    if(err) {
        console.log("Error" + err);
        return;
    }
    data.forEach(filename => {
        console.log(filename);
    })
})