const express = require('express');
const app = express();
const path = require('path');
let bowshock = require('node-bowshock');

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// ForceSSL middleware
app.use(forceSSL());
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);

app.get('/apod', function(req, res) {
  bowshock.eva().then((data) => {
    res.json(data);
  })
  
}); 
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

