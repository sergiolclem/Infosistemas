# Infosistemas

## Descrição

Projeto proposto pela Infosistemas para fins de processo seletivo. O projeto conta com as seguites características:
 - Backend em Node.js;
 - CRUD de veículos com os atributos: id, placa, chassi, renavam, modelo, marca, ano;
 - Testes unitários em Mocha para: Create, Read, Update, Delete;
 - Recursos REST para acesso aos dados dos veículos;
 - Frontend em Angular;
 - Página com lista de veículos obtida do backend;
 
 ## Principais tecnologias/bibliotecas utilizadas - BACKEND
 
 Foi possível desenvolver o projeto graças a utilização das bibliotecas descritas a seguir.
 
 ### [Express.js](https://expressjs.com/)
 
 Express js é um framework utilizado no backend de aplicações web. Propicia um conjunto de ferramentas e permite a roteirização de API's de maneira simples e ágil.
 
 ### [Express Cors Middleware](https://expressjs.com/en/resources/middleware/cors.html)
 
 Express Cors é uma biblioteca que permite a configuração do protocolo cors.
 
 ### [Knex](http://knexjs.org/)
 
 Knex é um query builder desenvolvido para Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift. Neste projeto em específico, será utilizado para gerenciar o banco de dados SQLite3.
 
 ### [SQLite3](https://www.sqlite.org/index.html)
 
 SQLite é um banco de dados SQL rápido, leve e confiável.
 
 ### [Nodemon](https://www.npmjs.com/package/nodemon)
 
 Nodemon é uma biblioteca que auxilia o desenvolvedor detectando as mudanças no código e, automaticamente, *restartando* o servidor. 
 *(dev mode only)*

 ## Módulos de teste

 ### [Mocha](https://mochajs.org/)

*Test framework* para Node.js.

 ### [Sinon](https://sinonjs.org/)
 
Provedor de *spies*, *mocks* e *stubs* para *frameworks unit tests*;

 ### [Chai](https://www.chaijs.com/)

 Biblioteca de asserção para Node.js.
