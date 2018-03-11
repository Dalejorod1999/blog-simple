const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');


const app = express();
const server = http.createServer(app);

const _config = {
	PORT: 2020,
	dir: {
		root: path.resolve(__dirname, '../'),
		db: path.resolve(__dirname, './db')
	}
};

app.use(bodyParser.urlencoded({extended: true}));

app.listen(_config.PORT, () => {
  console.log(`Listening on ${_config.PORT}`);
});

app.get('/', (req, res) => {
	let dir = `${_config.dir.root}/client/index.html`;
	console.log(`Request log: "/" - ${dir}`);
	res.sendFile(dir);
});

app.get('/index.css', (req, res) => {
	let dir = `${_config.dir.root}/client/index.css`;
	console.log(`Request log: "/index.css" - ${dir}`);
  res.sendFile(dir);
});

app.get('/index.js', (req, res) => {
	let dir = `${_config.dir.root}/client/index.js`;
	console.log(`Request log: "/index.js" - ${dir}`);
  res.sendFile(dir);
});

app.get('/posts', (req, res) => {
	let dir = `${_config.dir.db}/posts.json`;
	console.log(`Request log: "/posts" - ${dir}`);
	res.sendFile(dir);
});
