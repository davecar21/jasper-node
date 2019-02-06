let config = require("../config");

var Request = require('request');
var parser = require('xml-js');

module.exports.getCategory = () => {
    return new Promise(function (resolve,reject){
        Request.get(config.apiUrl+"resources?expanded=true&type=folder&recursive=false&folderUri=/reports", (error, response, body) => {
            if(error) {
                return reject(error);
            }
            let data = parser.xml2json(response.body,{compact:true,spaces:4});
            return resolve(data);
        }).auth(config.username, config.password, false);
    });
}

module.exports.getSubCategory = (category) => {
    return new Promise (function (resolve,reject){
        Request.get(config.apiUrl+"resources?expanded=true&type=folder&recursive=false&folderUri=/reports/"+category, (error, response, body) => {
            if(error) {
                return reject (error);
            }
            let data = parser.xml2json(response.body,{compact:true,spaces:4});
            return resolve(data);
        }).auth(config.username, config.password, false);
    });
}

module.exports.deleteCategory = (options) => {
    return new Promise(function(resolve,reject){
        Request.delete(options, (error, response, body) => {
            if(error) {
                return reject(error);
            }
            return resolve(response);
        }).auth(config.username, config.password, false);
    });
}

module.exports.editCategory = (options) => {
    return new Promise (function(resolve,reject){
        Request.put(options, (error, response, body) => {
            if(error) {
                return reject(error);
            }
            return resolve(response.body);
        }).auth(config.username, config.password, false);
    });
}

module.exports.addCategory = (options) => {
    return new Promise (function(resolve,reject){
        Request.post(options, (error, response, body) => {
            if(error) {
                return reject(error);
            }
            return resolve(response.body);
        }).auth(config.username, config.password, false);
    });
}