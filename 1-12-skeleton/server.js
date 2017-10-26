const express = require('express')
const app = express()
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(path.join(__dirname + '/public')));

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})