var http = require("http");
//This will give you access to the http module in your project. The http module helps your server handle http requests and responses.

var port = 3000;
//This is the port your server will use to listen for requests. Clients will send requests to this port to access the server.

var requestHandler = function(request, response){
    console.log('New request to: ' + request.url);
    response.end('Hello, World!');
    
}

/*This sets up a function that will handle requests from clients. 
This function has parameters to accept a request and reponse object.
The function uses the request object to identify the url the request was sent to. 
 It uses the response object to create and send a response message.*/

 var server = http.createServer(requestHandler);

 /*Use the http.createServer method to create a server object. 
 The http.createServer method expects a function to handle requests.
  We'll use the function we created in step 6.*/

  server.listen(port, function(){
    console.log('listening on port ' + port);
   });
   /*
This tells the server to start listening for requests on the port 
specified and then run the code in the function provided. 
In this case, that function is printing a message to the console. 
Si ponemos server.listen(port) es lo mismo solo que no nos tira un mensaje confirmando que esta escuchando*/
