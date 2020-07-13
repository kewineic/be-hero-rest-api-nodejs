const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes') /* "./" para identificar que routes é um arquivo
e nao um pacote*/ 
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes) /*Precisa ser abaixo da linha acima */
app.use(errors())

module.exports = app


/**
 * Rota/Recurso
 */

/**
 * > Métodos HTTP > Métodos de rota > manipulaçao de recursos
 
  * GET: Buscar/Listar uma informaçao do back-end
  * POST: Criar/enviar uma informaçao no back-end
  * PUT: Alterar uma informaçao no back-end
  * DELETE: Deletar uma informaçao no back-end
*/

/**
   * > Tipos de parametros: 

    *Query: Parametros nomeados e enviados na rota após o 
    "?" e com > "&" (Filtros, paginaçao) > "&"
    *Route: Parametros utilizados para identificar recursos
    *Request Body: Corpo da requisiçao, utilizado para criar
     ou alterar recursos
*/

/**
 * > Bancos de Dados
 
  *SQL: MySQL, SQLite, PostgreSQL, Oracle, 
  Microsoft SQL Server
  *NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * > SQL BUILDER
   
   *Driver: 
   *QueryBuilder: table('users').select('*').where()
 */
