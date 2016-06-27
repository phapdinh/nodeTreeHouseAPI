//require fs library
var filesys = require("fs");
//get name of file to open
var fileName = process.argv.slice(2)[0];
//get input to write to file
var fileInput = process.argv.slice(2);
var output = '';
for(var i = 1; i < fileInput.length; i++) {
	output += fileInput[i] + ' \n';
}

//Writes a file called output.txt
filesys.writeFile(fileName, output, (err) => {
	if(err) throw err;
	console.log('Wrote output file');
});

//this will display first because callback function is asynchronous
console.log("attempting to write text file... \n");