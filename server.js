var express = require('express')

var app = express();
var port = 3000;

var quotes = [
    {
        id: 1,
        quote: "The best is yet to come",
        author: "Unknown",
        year: 2000
    },
    {
        id: 2,
        quote: "This is a quote",
        author: "First Last",
        year: 1930
    },
    {
        id: 3,
        quote: "This is another quote",
        author: "First2 Last2",
        year: 1910
    }
    ];
// Estas rutas extraen propiedades de var quotes.

    app.get('/quotes/', function(request, response){
/*Query strings can be included in the request URI in the following format: 
baseURL/path?query=value With query being the name of the query string, and value being its value.  */

/*In Express, we can access these query strings in a route callback function using 
req.query.<queryString>, where <queryString> is the name of the value you are expecting.*/
        if(request.query.year){
            response.send("Return a list of quotes from the year: " + request.query.year + request.query.quote);
          }
          else{
            response.json(quotes);
          }
          
    });
    /*If the endpoint for the Express API were defined as: GET /cars/:id, then the value for "id" would automatically be processed into 
    the id parameter within the GET /quotes route.

In an Express app, we can then access these parameters using req.params.<param>, where <param> is the name of the named route parameter.*/


    app.get('/quotes/:id', function(req, res){
        console.log("return quote with the ID: " + req.params.id);
        res.send("Return quote with the ID: " + req.params.id);
    });
    

       
/*In the previous section, we tested our API endpoints by simply entering the URL for a request into our web browser, with the application running on localhost.

This is fine for GET requests, because we can include the request and associated data (parameters and query strings) within the request URL in the browser window.

However, for POST and PUT requests, where we need to include information in the body of the request, we don't have a way to do that using a web browser.

In these situations, it can be useful to use a REST client that allows you to manually send HTTP requests to a specified web server and endpoint.

We'll work with Postman, which is available for free across platforms, but there are others as well.*/

//--------------------------------------------------------------------------------------------------------------------------------------------


/*Unlike GET requests, where all of the data for parameters and query strings can be passed in the request URL,
 data associated with a POST request is sent as part of the request method's body.*/


var bodyParser = require('body-parser');
/* body-parser is a middleware that retrieves data from the request body message and parses it into key-values pairs for us
key-value pairs allows as to access data using req.body */

/*app.use() tells our Express app to use body-parser as middleware for url-encoded form data
 (this is the data format we expect to receive from HTML forms)*/
app.use(bodyParser.urlencoded({ extended: true }));

// So body-parser retrieves data
// key-value access data
// req.body is a kew-value

/*That's it! Once we complete these steps, we can use req.body to access the key-value 
pairs of data that were passed in the request body for a POST request.*/

app.post('/quotes', function(req, res){
    console.log("Insert a new quote: " + req.body.quote);
    res.json(req.body);
  });

  /*We are using req.body.quote to get the quote string, 
  and responding the full JSON object representing all of the quote's data (quote, author, year), using req.body*/

  app.listen(port, function(){
    console.log('Express app listening on port ' + port);
});
