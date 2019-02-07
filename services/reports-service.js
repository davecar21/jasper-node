//get Reports (per category) *List
//edit report
//delete report/s

let config = require("../config");

var Request = require('request');

//create Report (Adhoc & Scheduled will be handled with condition)
module.exports.addReport = (content) => {
    
    let report = {
        "label":content.label,
        "description": content.description,
        "dataSource": {
            "dataSourceReference" : {
                "uri" : "/datasources/jasper_oracle"
            }
        },
        "jrxml":{
            "jrxmlFile" : {
                "type": "jrxml",
                "label": content.label+"-template",
                "content": content.jrxml
            }
        }
    }
    
    let options = {
        url: config.apiUrl+"resources/reports",
        headers:{
            "Content-Type": "application/repository.reportUnit+json",
            "Accept": "application/json"
        },
        body: report,
        json: true,
    };

    return new Promise (function(resolve,reject){
        Request.post(options, (error, response, body) => {
            if(error) {
                return reject(error);
            }
            return resolve(response.body);
        }).auth(config.username, config.password, false);
    });
}