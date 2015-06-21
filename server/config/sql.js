var db = require('mysql');
connection = db.createConnection({

  host: "localhost",
  port : 8889,
  user: "root",
  password: "root",
  database: "projectSchema",

  multipleStatements: true
  
});

module.exports = (function() {
  return {
    add_status: function (request, response) {
      var query = "insert into status(s_text,t_status) values ('" + s.status + "',CURRENT_TIMESTAMP)";
        connection.query(query, function (err, rows) {
        if (err) {
          console.log("Connot execute");
        }
        else {
          console.log("Status " + s.status + " is been added to Database");
          response.end("Yes");
        }
      });
    },
    retrieve: function (request, response) {
      console.log("RETRIEVE")
      var query = "SELECT * FROM users"
      connection.query(query, function (err, rows){
        if (err) {
          console.log("Connot execute", err);
        }
        else {
          console.log(rows);
          response.json(rows);
        }
      })
    }
  }
})();