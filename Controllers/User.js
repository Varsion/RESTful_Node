var config = require('../config');
var connection = config.db.get;


exports.Hello = function (req, res) {
    connection.query('select * from sgin_code', function (error, results, fields) {
        if (error) throw error;
        let response = {
            code : "200",
            msg  : "Success",
            data : results
        };
        res.end(JSON.stringify(response));
    });
}