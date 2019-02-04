const express = require('express')
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser');

let fileRoute = require('./routes/fileRoute');

const port = 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(cors());
app.use('/resources',fileRoute);
app.use('/jobs',fileRoute);
app.use('/reportExecutions',fileRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))