//require fs library
var filesys = require("fs");
//get name of file to open
var fileName = process.argv.slice(2)[0];

//readFile reads list.txt into a buffer which is a byte array
filesys.readFile(fileName, function(err, data) {
	//if there is an error, throw it and end application
	if(err) throw err;
	
	//convert data array to string
	var list = data.toString();
	
	//log out list
	console.log(list);
});

//this will display first because callback function is asynchronous
console.log("attempting to read text file... \n");