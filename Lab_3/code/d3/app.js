var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

// Connection URL
const url = 'mongodb://admin:A123456@ds131971.mlab.com:31971/lab';

// Database Name
const dbName = 'lab';

//Body Parser is used to parse the incomeing request.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cors is used to allow all domain
app.use(cors());

//Get method is used to fetch the data from database.
app.get("/", (req, res, next) => {
    //Connecting the mongodb
    MongoClient.connect(url,{ useNewUrlParser: true }, function (err, client) {
        //If connection failed the it will go to if condition.
        if (err) {
            res.send(JSON.stringify(err));
            res.end();
        }
        const db = client.db(dbName);
        //Fectching the data
        db.collection('d3').find().toArray(function (err, result) {
            if (err) {
                res.send("fetching  d3 data failed");
                res.end();
            } else {

                res.send(JSON.stringify(result));
            }
        });
    });
});


//Created the node server adn listing at port 3001 
app.listen("3001", () => {
    console.log("localhost:3001");
});