//require fs library
var filesys = require("fs");
//get name of file to open
var fileName = process.argv.slice(2)[0];
//get input to write to file
var fileInput = process.argv.slice(2)[1];

//Writes a file called output.txt
filesys.writeFile(fileName, fileInput, (err) => {
	if(err) throw err;
	console.log('Wrote output.txt');
});

//this will display first because callback function is asynchronous
console.log("attempting to write text file... \n");