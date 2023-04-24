const express = require('express');
const router = express.Router();
const quoteQuery = require('../services/database');

router.get('/', function(req, res) {
	res.send('Rota funcionando');
});

router.get('/:id', function(req, res) {
	res.send(quoteQuery.query(req.params.id));
});

module.exports = router;