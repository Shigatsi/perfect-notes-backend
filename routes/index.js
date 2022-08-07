const router = require('express').Router();
const users = require('../db');

router.get('/users/:id', (request, response) => {
    const { id } = request.params;
    if(!users[id]) {
        response.send( 'user not found!')
    }
    response.send(users[id]);
});

router.get('/users', (request, response) => {
    response.send(users);
    
});

module.exports = router;