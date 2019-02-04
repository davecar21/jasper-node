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
    let category = req.params.categoryId;
    Request.get(config.apiUrl+"resources?expanded=true&type=folder&recursive=false&folderUri=/reports/"+category, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        let data = parser.xml2json(response.body,{compact:true,spaces:4});
        res.send(data)
    }).auth(config.username, config.password, false);
}



module.exports.addCategory = (req,res) => {
    let options = {
        url : config.apiUrl+"resources?createFolders=true",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/repository.folder+json"
        },
        body: req.body,
        json: true,
    }
    // res.send(options);

    Request.post(options, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        let data = parser.xml2json(response.body,{compact:true,spaces:4});
        res.send(data);
    }).auth(config.username, config.password, false);
}