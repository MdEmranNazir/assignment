
const express = require('express');

const fs = require('fs');

const app = express();

const requestTime = new Date().toISOString();
const customMiddleware = (req, res, next) => {
	console.log(`${req.method} - ${req.url} - ${requestTime}`);
	next();
};


// customMiddleware
app.use(customMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// GET
app.get('/', (req, res) => {
	res.json('GEt');
});

// GET ID
app.get('/user/:id', (req, res) => {
	res.json(`I am a delete ${req.params.id}`);
});

// fileWrite

app.post('/write', (req, res) => {
	const users = {
		name: req.body.name,
		address: req.body.address,
		country: req.body.country,
		queryParameter: req.query,
	};

	const data = JSON.stringify(users);
	fs.writeFile(`./write-file/text${Date.now()}.json`, data, (err) => {
		if (err) {
			res.json(err);
		} else {
			res.json('File write successful');
		}
	});
});

app.listen(3000);
