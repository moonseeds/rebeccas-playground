const pg = require('pg');
const connectionString = "postgres://postgres:root@localhost:5432/playground";
const pgClient = new pg.Client(connectionString);
pgClient.connect();

// var query = pgClient.query("SELECT * FROM users ");
//
// query.on('row', function(row, result) {
//   console.log('row');
//   result.addRow(row);
// });
//
// query.on("end", function(row) {
//   pgClient.end();
// });

// this one works really well !!! ^^
pgClient.query("SELECT * FROM users", (err, res) => {
  console.log(err, res);
  pgClient.end();
});
