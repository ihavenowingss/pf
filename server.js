const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.port || 3001;

app.use(express.static(__dirname + '/dist/anotha'));

app.get('/*', (req,res) => res.sendfile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log('Running... Available at: localhost:' + port));
