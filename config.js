// var Sequelize = require('sequelize');
// const config = {
// 	database : 'Sport_Association',
// 	username : 'root',
// 	password : 'root'
// }
// const sequelize = new Sequelize(
//     config['database'], 
//     config['username'], 
//     config['password'], 
//     {
//         host : 'localhost',
//         dialect: 'mysql'
//     });

// sequelize.authenticate().then(() => {
//     console.log('Database Connection Success!')
// }).catch(
//     err => {console.error('Database Connection Failed!', err)}
// );

// module.exports = sequelize

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