const express = require('express');
const {PORT = 3000} = process.env;
const app = express();
const router = require('./routes/index');
const users = require('./db')

app.use('/', router);


app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT}`);

});

