let config = require("../config");

var Request = require('request');

module.exports.getFolder = (options) => {
    return new Promise(function (resolve,reject){
        Request.get(options, (error, response, body) => {
            if(error) {
                return reject(error);
            }
            return resolve(response.body);
        }).auth(config.username, config.password, false);
    });
}

module.exports.getSubFolder = (options) => {
    return new Promise (function (resolve,reject){
        Request.get(options, (error, response, body) => {
            if(error) {
                return reject (error);
            }
            return resolve(response.body);
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