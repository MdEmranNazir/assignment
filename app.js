
const express = require('express');
const customMiddleware = require('./middleware/middelware');
// Port
const PORT = process.env.PORT || 5000;

// Route files;
const indexRoute = require('./routers/index');

const app = express();
app.use(express.json());
// customMiddleware
app.use(customMiddleware);

// Routes
app.use('/', indexRoute);


app.listen(PORT, () => { console.log(`server running on port ${PORT}`); });
