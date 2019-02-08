//get Reports (per category) *List
//edit report
//delete report/s

let config = require("../config");

let reportService = require('../services/reports-service');

//create Report (Adhoc & Scheduled will be handled with condition)
module.exports.createReport = async (req,res) => {
    let createReportResult = await reportService.addReport(req.body);
    res.send(createReportResult);
}

module.exports.editReport = async (req,res) => {
    let editReportResult = await reportService.editReport(req.body);
    res.send(editReportResult);
}
