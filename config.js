'use strict'

var mysql = require('mysql2');

module.exports = {
    name: 'rest-api',
    hostname : 'http://localhost',
    db: {
        get : mysql.createConnection({
			host     : 'localhost',
			user     : 'root',
			password : 'root',
			database : 'Sport_Association'
		})
    }
}
