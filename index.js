const express = require('express')
const app = express()
var cors = require('cors')

var Request = require('request')
var parser = require('xml2json');

const port = 3000;

app.use(cors())

const url = 'http://localhost:8080/jasperserver/rest_v2/resources/';
const testUrl = 'https://jsonplaceholder.typicode.com/posts';

app.get('/', (req, res) => {
    Request.get(url, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        res.send(response)
    }).auth('jasperadmin', 'jasperadmin', false);
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))