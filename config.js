const express = require("express");

let config={
    apiUrl:"http://localhost:8080/jasperserver/rest_v2/",
    username: "jasperadmin",
    password: "jasperadmin",
    dataSource: "/datasources/jasper_oracle"
}

module.exports = config;