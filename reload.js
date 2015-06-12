// server.js 
var livereload = require('livereload');
var server = livereload.createServer();
server.watch('./');
console.log('livereload has been started.');