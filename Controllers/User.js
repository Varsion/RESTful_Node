var config = require('../config');
var connection = config.db.get;
var response = require('../Response/Response');

exports.Hello = function (req, res) {
    connection.query('select * from sgin_code', function (error, results, fields) {
        if (error) {
            res.send(response.response(300, error.message, null));
            return;
        }
        res.send(response.response(200, "", results));
    });
}
