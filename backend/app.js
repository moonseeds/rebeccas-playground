const {Pool, Client} = require('pg');
const connectionString = "postgres://postgres:root@localhost:5432/playground";

const express = require('express');
const bodyParser = require("body-parser");

// const pg = require('pg');
// const pgClient = new pg.Client(connectionString);
const app = express();

const pool = new Pool({
  connectionString: connectionString,
});
const client = new Client({
  connectionString: connectionString,
});
client.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
  res.setHeader("Access-Control-Allow_Methods", "GET, POST, DELETE, OPTIONS");
  next();
});


app.post("/api/posts", function(req,res){
  pgClient.connect(function (err) {
    if(err) {
      throw err;
    }

    var query = "INSERT INTO public.posts(title,content) VALUES($1,$2)";

    var data = [
      req.body.title,
      req.body.content
    ];

    pgClient.query(query, data, function (err) {
      if(err) {
        throw err;
      } else {
        console.log('Success!!');
        res.redirect('/');
        pgClient.end();
      }

    })
  })
});


app.get("/api/posts",(req, resp, next) => {

  pgClient.connect(function (err) {
    if (err) {
      throw err;
    }

    var query = "SELECT * FROM public.posts";
    pgClient.query(query, function (err, res) {
      if (err) {
        throw err;
      } else {
        console.log(res.rows);
       // resp.status(200).send(res.rows);
        resp.status(200).json({
          message: 'Posts fetched successfully!',
          posts: res.rows
        });
         pgClient.end();
      }
    });
  });
});

module.exports = app;
