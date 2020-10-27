const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/item', (req, res) => {
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
      ]);

});

app.listen(port, () => console.log(`Listening on port ${port}`));