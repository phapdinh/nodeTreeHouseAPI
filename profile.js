//Installed follow-redirects to allow for http calls to follow url redirections
var http = require("follow-redirects").http;
function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) " 
	+ points + " points in javascript.";
	console.log(message);
}

function printError(error) {
	console.log(error.message);
};

function get(username) {
	var request = http.get('http://teamtreehouse.com/' + username + ".json", function(response) {
		console.log(response.statusCode);
		var body = "";
		response.on("data",function(chunk) {
			body += chunk;
		});
		
		response.on("end",function() {
			if(response.statusCode === 200) {
				try {
					var profile = JSON.parse(body);
					printMessage(username,profile.badges.length,profile.points.JavaScript)
				}
				catch(error) {
					printError(error);
				}
			}
			else {
				printError({message: "There was an error getting profile for " +
				username + "."})
			}
		});
	});
	
	request.on("error", printError); 
}

module.exports.get = get;