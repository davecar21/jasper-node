let config = require("../config");

var Request = require('request');

module.exports.getFolder = () => {
    let options = {
        url: config.apiUrl+"/resources?expanded=true&type=folder&recursive=false&folderUri=/reports",
        headers:{
            "Accept": "application/json"
        }
    }
    return new Promise(function (resolve,reject){
        Request.get(options, (error, response, body) => {
            if(error) {
                return reject(error);
            }
            return resolve(response.body);
        }).auth(config.username, config.password, false);
    });
}

module.exports.getSubFolder = (category) => {
    let options = {
        url: config.apiUrl+"/resources?expanded=true&type=folder&recursive=false&folderUri=/reports/"+category,
        headers:{
            "Accept": "application/json"
        }
    }
    return new Promise (function (resolve,reject){
        Request.get(options, (error, response, body) => {
            if(error) {
                return reject (error);
            }
            return resolve(response.body);
        }).auth(config.username, config.password, false);
    });
}

module.exports.deleteCategory = (url) => {
    let options = {
        url : url,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/repository.folder+json"
        },
        body: req.body,
        json: true,
    }

    return new Promise(function(resolve,reject){
        Request.delete(options, (error, response, body) => {
            if(error) {
                return reject(error);
            }
            return resolve(response);
        }).auth(config.username, config.password, false);
    });
}

module.exports.editCategory = (body) => {
    let options = {
        url : config.apiUrl+"/resources"+body.uri+"?overwrite=true",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/repository.folder+json"
        },
        body: body,
        json: true,
    }

    return new Promise (function(resolve,reject){
        Request.put(options, (error, response, body) => {
            if(error) {
                return reject(error);
            }
            return resolve(response.body);
        }).auth(config.username, config.password, false);
    });
}

module.exports.addCategory = (body) => {
    let options = {
        url : config.apiUrl+"/resources"+body.uri+"?createFolders=false",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/repository.folder+json"
        },
        body: body,
        json: true,
    }

    return new Promise (function(resolve,reject){
        Request.post(options, (error, response, body) => {
            if(error) {
                return reject(error);
            }
            return resolve(response.body);
        }).auth(config.username, config.password, false);
    });
}