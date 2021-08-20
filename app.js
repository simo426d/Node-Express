const express = require('express');
var app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded( {extended:true}));


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
});

app.post('/opret', (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});