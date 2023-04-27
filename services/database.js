const sqlite = require('better-sqlite3');
const db = new sqlite('database.db');

function query(quoteID) {
	return db.prepare('SELECT TEXTO, AUTOR FROM CITACAO WHERE ID = ?').get(quoteID);
}

function validateCreate(quote) {
	let alertMessages = [];

	if(Object.keys(quote).length == 0) {
		alertMessages.push('Nenhum objeto fornecido');
	}

	if(typeof quote.text == 'undefined') {
		alertMessages.push('Nenhuma mensagem fornecida');
	}

	if(typeof quote.author == 'undefined') {
		alertMessages.push('Nenhum autor fornecido');
	}

	if(alertMessages.length > 0) {
		return alertMessages;
	}

	return alertMessages;
}

function create(quote) {
	let validation = validateCreate(quote);
	const stmt = db.prepare('INSERT INTO CITACAO (TEXTO, AUTOR) VALUES (@text, @author)');
	
	if(validation.length == 0) {
		stmt.run({
			text: quote.text,
			author: quote.author
		});
		let success = 'Mensagem criada com sucesso';
		return {success};
	}

	return {validation};
}

module.exports = {query, create};