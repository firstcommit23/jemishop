const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

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
   /* connection.query(
      "SELECT * FROM USERS",
      (err, rows, fields) => {
        res.send(rows);
      }
    )*/
    res.send([
      {
        id : 0,
        title : "White and Black",
        content : "Born in France",
        price : 120000
      },
    
      {
        id : 1,
        title : "Red Knit",
        content : "Born in Seoul",
        price : 110000
      },
    
      {
        id : 2,
        title : "Grey Yordan",
        content : "Born in the States",
        price : 130000
      }
    ] );

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