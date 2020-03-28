const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 * CTRL + ASPAS = abre o terminal
 * CTRL + SHIFT + P = ABRE O MENU OPÇÕES
 * CTRL + D = SELECIONA DUAS PALAVRAS SELECIONADAS
 * SHIT + ALT + BAIXO = DUPLICA A LINHA
 * ALT + SETA PARA CIMA OU BAIXO = MOVE A LINHA
 */

 /**
  * Métodos HTTP:
  * 
  * GET => Buscar/Listar uma informção do back-end
  * POST => Criar uma informação no back-end
  * PUT => Alterar uma informação no back-end
  * DELETE => Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params=> Parâmetros nomeados enviados na rota após o símbolo de "?" (Filtros, Paginação)
   * Route Params => São parâmetros utilizados para identificar recursos
   * Request Body => Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc.
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users).select('*').where()
     */

app.listen(3333);