console.log("Hello Node.js");

const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
	if(err){
		console.error("Error reading a file:", err);
		return;
	}
	console.log("Contents of the file data.txt:", data);
}); 
