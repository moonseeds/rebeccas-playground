const pg = require('pg');
const connectionString = "postgres://postgres:root@localhost:5432/playground";
const pgClient = new pg.Client(connectionString);
pgClient.connect();

// this one works really well !!! ^^
// pgClient.query("SELECT * FROM users", (err, res) => {
//   console.log(err, res);
//   pgClient.end();
// });

pgClient.query("INSERT INTO public.posts(title,content) VALUES('test4','test4')", (err,res) => {
  console.log(err,res);
  pgClient.end();
});
