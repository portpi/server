const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const loki = require('lokijs');

const port = process.env.PORT || 15926;
const app = express();

app.server = http.createServer(app);
app.db = new loki('db.json', {
  autoload: true,
  autoloadCallback: () => {
    // db initialize
    app.db.addCollection('jobs');
  },
  autosave: true
});

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

// setup routes
require('./api')(app);

// setup react routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.server.listen(port, () => {
  console.log(`PortPi server is running on port ${port}`);
});
