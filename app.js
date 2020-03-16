const express = require('express');
const customMiddleware = require('./middleware/middelware');
const errorHandler = require('./middleware/errorHandler');

// Port
const PORT = process.env.PORT || 5000;

// Route files;
const indexRoute = require('./routers/index');

const app = express();
app.use(express.json());

// view engine
app.set('view engine');


// customMiddleware
app.use(customMiddleware);

// Routes
app.use('/', indexRoute);

// Error
app.use('*', (req, res, next) => {
	res.render('notFound.ejs');
	next();
});
// Error handler
app.use(errorHandler);

app.listen(PORT, () => { console.log(`server running on port ${PORT}`); });
