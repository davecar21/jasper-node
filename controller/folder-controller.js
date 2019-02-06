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
        url : config.apiUrl+"resources"+req.body.uri+"?createFolders=false",
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
        res.send(response.body);
    }).auth(config.username, config.password, false);
}

module.exports.editCategory = (req,res) => {
    let options = {
        url : config.apiUrl+"resources"+req.body.uri+"?overwrite=true",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/repository.folder+json"
        },
        body: req.body,
        json: true,
    }

    Request.put(options, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        res.send(response.body);
    }).auth(config.username, config.password, false);
}

module.exports.deleteCategory = (req,res) => {
    let url = config.apiUrl+"resources?";
    let resource = req.body.resource;

    resource.forEach((element,index) => {
        if(index != resource.length-1 )
            url += "resourceUri="+element.uri+"&";
        else
            url += "resourceUri="+element.uri;
    });
    
    let options = {
        url : url,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/repository.folder+json"
        },
        body: req.body,
        json: true,
    }

    Request.delete(options, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        res.send(response.body);
    }).auth(config.username, config.password, false);
}

module.exports.sampleCreateComplexReport = (req,res) => {
    //createReport(param1, param2)
    //createSubReports()
    //addImages()
}