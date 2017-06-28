// Set up MySQL connection.

var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 8889,
//     user: "root",
//     password: "root",
//     database: "burgers_db"
// });

// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }

//     console.log("connected as id " + connection.threadId);

// });

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection("mysql://oumzxwx7w0a71g2n:y7rnki1l1kwve75e@b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/nu8n0aokaf88xwp3");
} else {
    connection = mysql.createConnection({
        host: "localhost",
        // port: 8889,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
};

connection.connect();
module.exports = connection;