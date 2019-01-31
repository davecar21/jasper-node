const express = require('express')
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser');

var Request = require('request')
var parser = require('xml2json');


const port = 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(cors())

const url = 'http://localhost:8080/jasperserver/rest_v2/resources/reports/interactive';
const urlPost = 'http://localhost:8080/jasperserver/rest_v2/resources?createFolders=true';
const testUrl = 'https://jsonplaceholder.typicode.com/posts';


// GET METHOD
app.get('/', (req, res) => {
    Request.get(url, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        let data = parser.toJson(response.body);
        res.send(data)
    }).auth('jasperadmin', 'jasperadmin', false);
    
})


// POST METHOD
app.post('/', (req, res) => {
    let options = {
        url : urlPost,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/repository.folder+json"
        },
        body: req.body,
        json: true,
    }

    Request.post(options, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        // let data = parser.toJson(response.body);
        res.send(response)
    }).auth('jasperadmin', 'jasperadmin', false);
    
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))