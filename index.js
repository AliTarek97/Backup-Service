const express = require('express');
const app = express();
const router = require('./routes/router');
const dotenv = require('dotenv');
dotenv.config();

app.use('/api',router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('listening on port', port);
});