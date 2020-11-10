const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

app.get('/api/item', (req, res) => {
    connection.query(
      "SELECT * FROM item",
      (err, rows, fields) => {
        res.send(rows);
      }
    )
});

app.get('/api/detail/:id', (req, res) => {
    let sql = "SELECT * FROM item where id = ?";
    let params = [req.params.id];

    connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.get('/api/user', (req, res) => {
  
   connection.query(
     "SELECT * FROM users",
     (err, rows, fields) => {
       console.log(err)
       res.send(rows);
     }
   );

});
app.listen(port, () => console.log(`Listening on port ${port}`));