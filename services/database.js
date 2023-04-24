const sqlite = require('better-sqlite3');
const db = new sqlite('database.db');

function query(quoteID) {
	return db.prepare('SELECT TEXTO, AUTOR FROM CITACAO WHERE ID = ?').get(quoteID);
}

module.exports = {query};