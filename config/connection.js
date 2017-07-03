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
    connection = mysql.createConnection("mysql://rjdlm8nj9gcn2r86:achjj0mh5sx2nvzv@ko86t9azcob3a2f9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/nzwmphdgoouubuni");
} else {
    connection = mysql.createConnection({
        host: "ko86t9azcob3a2f9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        // port: 8889,
        user: "rjdlm8nj9gcn2r86",
        password: "achjj0mh5sx2nvzv",
        database: "nzwmphdgoouubuni"
    });
};

connection.connect();
module.exports = connection;