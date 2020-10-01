const fs   = require('fs');
const path = require('path');

// Loop through file and create a services array
var files = fs.readdirSync(path.join(__dirname, 'services'));
var services = [];

files.forEach(function(file) {
	if (file.match(/.*\.js/i)) {                          //beginif of loop
		var mod = require('./services/' + file);
		services.push(mod);                                 //end loop
	}
});

module.exports = services;
