const express = require('express');
const router = express.Router();
const quoteQuery = require('../services/database');

router.get('/', function(req, res) {
	res.send({mensagem: 'Bem vindo(a)!'});
});

router.get('/:id', function(req, res) {
	res.send(quoteQuery.query(req.params.id));
});

router.post('/', function(req, res) {
	const quote = quoteQuery.create(req.body);
	if(quote.status == 200) {
		return res.send({mensagem: quote.message})
	}
	return res.status(quote.status).send({erro: quote.message});
});

router.put('/', function(req, res) {
	res.send(quoteQuery.updateQuote(req.body));
});

router.delete('/:id', function(req, res) {
	res.send(quoteQuery.deleteQuote(req.params.id));
});

module.exports = router;