const router = require('express').Router();


router.post('/post', (req, res, next) => {
  res.status(200).json({ message: 'Post Successfully', post: req.body });
  req.reqParams = req.params;
  next();
});

module.exports = router;