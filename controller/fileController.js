// const url = 'http://localhost:8080/jasperserver/rest_v2/resources/reports/';
// const urlPost = 'http://localhost:8080/jasperserver/rest_v2/resources?createFolders=true';
// const testUrl = 'https://jsonplaceholder.typicode.com/posts';
// const urlCat = 'http://localhost:8080/jasperserver/rest_v2/resources?expanded=true&type=folder&folderUri=/reports&recursive=false'
let config = require("../config");

var Request = require('request');
var parser = require('xml-js');

module.exports.getCategories = (req,res) => {
    Request.get(config.apiUrl+"resources?expanded=true&type=folder&recursive=false&folderUri=/reports", (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        let data = parser.xml2json(response.body,{compact:true,spaces:4});
        res.send(data)
    }).auth(config.username, config.password, false);
}

module.exports.getSubCategories = (req,res) => {
    Request.get(config.apiUrl+'resources/reports', (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        let data = parser.xml2json(response.body,{compact:true,spaces:4});
        res.send(data)
    }).auth(config.username, config.password, false);
}



module.exports.addResources = (req,res) => {
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
        let data = parser.xml2json(response.body,{compact:true,spaces:4});
        res.send(response)
    }).auth('jasperadmin', 'jasperadmin', false);
}