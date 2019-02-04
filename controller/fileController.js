
module.exports.getResources = (req,res) => {
    Request.get(url, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        let data = parser.toJson(response.body);
        res.send(data)
    }).auth('jasperadmin', 'jasperadmin', false);
}