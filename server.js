var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var port = process.env.PORT || 5000;

app = express();

app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(serveStatic('/'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port);
console.log('server started '+port);
