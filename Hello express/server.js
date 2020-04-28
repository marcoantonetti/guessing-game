//Fijate la poca cantidad de lineas de codigo que usamos en comparacion a http
var express = require('express')
/*Use the express function to create an express app object.
 This will always be the first step we'll take to use express in our project:*/
var app = express();
var port = 3000;

// Ahora definamos las routes. Esta primero es para manejar el request "/"
app.get('/', function(request, response){
    response.send('Hello, World!');
});
// "/" Is the request that is sent when you try to access the root (homepage) of your server.

// Route para /marco
app.get('/marco', function(request, response){
    response.send('Hello, Marco!');
});

app.listen(port, function(){
    console.log('Express app listening on port ' + port);
});
