# quote-api-rest
Uma API REST utilizando o framework Express para manipular frases de livros, pensadores, provérbios, etc.

## Implementação
Tecnologias utilizadas
- Framework: [Express](https://expressjs.com/)
- Banco de Dados: [SQLite](https://sqlite.org/index.html)
- Biblioteca: [better-sqlite3](https://www.npmjs.com/package/better-sqlite3?activeTab=readme)

## Executando o Projeto
1. Clone o projeto
2. Execute o comando `` npm install `` para instalar todos os pacotes e as dependências necessárias
3. Na raiz do projeto crie o arquivo **database.db** e execute a constraint:
```
CREATE TABLE CITACAO (
	ID INTEGER PRIMARY KEY AUTOINCREMENT,
	TEXTO TEXT NOT NULL UNIQUE,
	AUTOR TEXT NOT NULL
)
```
4. Adicione registros no banco de dados
5. Na raiz do projeto execute o comando ``node index.js``

## Rotas
### Retorna uma citação pelo ID
```HTTP
GET /frases/:id
```
**Retorno**
```JSON
{
 "TEXTO": "string",
 "AUTOR": "string"
}
```

### Salva uma nova citação
```HTTP
POST /frases
```
**Estrutura JSON**
```JSON
{
 "text": "string",
 "author": "string"
}
```

### Atualiza uma citação
```HTTP
PUT /frases
```
**Estrutura JSON**
```JSON
{
 "id": ":id",
 "text": "string",
 "author": "string"
}
```
**Retorno**
```JSON
{
 "message": "Registro atualizado com sucesso"
}
```

### Exclui uma citação
```HTTP
DELETE /frases/:id
```
**Retorno**
```JSON
{
 "message": "Citação excluída"
}
```
