// Create web server
// Load the modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = require('./comments');

// Create web server
http.createServer(function(request, response) {
	// Parse the request URL
	var pathname = url.parse(request.url).pathname;
	// Log the request URL
	console.log("Request for " + pathname + " received.");
});