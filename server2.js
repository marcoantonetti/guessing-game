//Same as server.js but without the original comments

/*npm install sqlite3 --save. This will install the sqlite3 Node module and add it as a dependency in your quotes-api package.json file.
 Now you'll be able to use the sqlite3 module from your app.*/

var express = require('express')
var sqlite3 = require('sqlite3');// Imports the sqlite3 module in your Node.js project.

var db = new sqlite3.Database('quotes.db');// Creates a SQLite database in the file quotes.db. In other words, it connects to a database

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

    app.get('/quotes/', function(req, res){

        if(req.query.year){//We check the req.query property to determine if the API request includes a year parameter
            db.all('SELECT * FROM quotes WHERE year = CAST(? AS INT)', [req.query.year], function(err, rows){
    // We use the db.all() method to retrieve a set of rows with a SELECT statement          
                if(err){
                    res.send(err.message);
 }// When we used request.body.year to extract the input from the url, it takes YEAR as a string of characters.
 // Thus, we use CAST(? AS INT) to read it as integers
                else{
                    console.log("Return a list of quotes from the year: " + req.query.year);
                    res.json(rows);//We return the result set as JSON using the res.json() method 
                }
            });
        }
        else{
            db.all('SELECT * FROM quotes', function processRows(err, rows){
                if(err){
                    res.send(err.message);
                }
                else{
                    for( var i = 0; i < rows.length; i++){
                        console.log(rows[i].quote);
                    }
                    res.json(rows);
                }
            });
        }
    }); 
    

    app.get('/quotes/:id', function(req, res){
        if(req.params.id){
            db.get('SELECT * FROM quotes WHERE ID = ?', [req.params.id], function(err, rows){
                // Si no tuvieras ID especificado usa rowid y el orden de las filas = id
                //SQLite automatically includes a rowid attribute in our table, that auto-increments for each entry. Thus, each of our quotes has a unique id.
                /* we use the db.get() method to retrieve up to 1 result for the SELECT statement, 
                since there can only be 1 quote with a given id. Pero podes usar each o all tambien aunque al pedo*/
                if(err){
                    res.send(err.message);
 }
                else{
                    console.log("Return a list of quotes from the ID: " + req.query.year);
                    res.json(rows);
                }
            });
        }
        });


       


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/quotes', function(req, res){
    console.log("Insert a new quote: " + req.body.quote);
    db.run("INSERT INTO quotes VALUES( ? , ? , ? )",[req.body.quote, req.body.author, req.body.year], function(err){
// We provide parameters to the INSERT statement, pulling the data from the request body using req.body. for each property 
        if(err){
            console.log(err.message);
        }
        else{
            res.send('Inserted quote with id: ' + this.lastID);
        }})//We send a message with the ID of the new quote in the table, pulling this.lastID from the callback method of the db.run() method.
    
      });

/*Open Postman, or the REST client of your choice, and build an API POST request:

request URL: localhost:3000/quotes
request method: POST
request body:
encoding format: x-www-form-urlencoded
quote: "Sample Quote"
author: "Sample Author"
year: 1940*/

  app.listen(port, function(){
    console.log('Express app listening on port ' + port);
});
