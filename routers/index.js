const router = require('express').Router();

router.post('/post', (req, res, next) => {
	res.status(200).json({ message: 'Post Successfully', post: req.body });
	req.reqParams = req.params;
	next();
});

router.get('/', (req, res, next) => {
	try {
		res.render('index.ejs', { user: 'Md Emran Nazir' });
	} catch (err) {
		next(err);
	}
});

// This route will throw an error
router.get('/error', (req, res, next) => {
	try {
	// eslint-disable-next-line
	  something_goes_wrong_here___
	} catch (err) {
		next(err);
	}
});
module.exports = router;
