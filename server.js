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
// Routes that get quotes.

    app.get('/quotes/', function(request, response){

        if(request.query.year){
            response.send("Return a list of quotes from the year: " + request.query.year + request.query.quote);
          }
          else{
            response.json(quotes);
          }
          
    });

    /*If the endpoint for the Express API were defined as: GET /cars/:id, then the value for "id" would automatically be processed into 
    the id parameter within the GET /quotes route.*/


    app.get('/quotes/:id', function(req, res){
        console.log("return quote with the ID: " + req.params.id);
        res.send("Return quote with the ID: " + req.params.id);
    });
    

       


//--------------------------------------------------------------------------------------------------------------------------------------------




var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/quotes', function(req, res){
    console.log("Insert a new quote: " + req.body.quote);
    res.json(req.body);
  });

  app.listen(port, function(){
    console.log('Express app listening on port ' + port);
});
