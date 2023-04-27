const express = require('express');
const app = express();
const port = 3000;
const quotesRouter = require('./routes/quotes');

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Seja bem vindo(a)!');
});

app.use('/frases', quotesRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});