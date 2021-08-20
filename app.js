const express = require('express');
var mssql = require("./Data/mssql");
var sql = require('mssql/msnodesqlv8');

var app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded( {extended:true}));


app.get('/alien', function (req, res) {
    
    sql.connect(mssql.dbConfig, function (err){

        //display error
        if(err) console.log(err);

        // create request query
        var request = new sql.Request();

        request.query('select * from Aliens', function (err, recordset) {
            if(err) console.log(err);
            res.send(recordset);
        });
    });
});

app.post('/opret', (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});