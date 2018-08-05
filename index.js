const http = require('http');
const express = require('express');
const morgan = require('morgan');

const port = process.env.PORT || 31415;
const app = express();
app.server = http.createServer(app);

app.use(morgan('dev'));

app.server.listen(port, () => {
  console.log(`PortPi server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.json('Hello PortPi!');
});
