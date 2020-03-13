
const express = require('express');
// Port
const PORT = process.env.PORT || 5000;

const customMiddleware = require('./middleware/middelware');

const app = express();
app.use(express.json());
// customMiddleware
app.use(customMiddleware);
// post router
app.post('/post', (req, res) => {
	res.status(200).json({ message: 'Post Successfully', post: req.body });
	console.log(req.body);
});


app.listen(PORT, () => { console.log(`server running on port ${PORT}`); });
