# Plugins / Dependências

CORS
Express
Nodemon
MongoBD
Mongoose

# Instalar as dependências indicadas no package.json

npm install

# Formas de rodar o projeto - http://localhost:8001/

npm start
nodemon src/app.js

# Banco de Dados - mongodb://localhost/tagme-db

MongoDB

# Dados do banco de dados

Os dados do banco encontram-se no caminho src/assets/json para serem importados.

# Programa para testes da API

Postman

### Problemas

# Acessar arquivos na assets

Não consegui mostrar no frontend as imagens das receitas

# Rotas

As rotas estão comentadas no app.js, pois estavam retornando um erro, por este motivo deixei o acesso ao banco de dados na própria app.js

# Foreign Keys

Não estou muito acostumado com bancos não relacionais, vi duas formas de criação de Chave Estrangueira/Entidades Relacionadas.

A primeira era referenciar na entidade de maior valor as entidades filhas, exemplo: Receita ter a lista de Ingredientes e Passos, fiz dessa forma, mas não consegui fazer o cadastro da Receita quando informava o Array das entidades filhas e o banco sempre me retornava como vazio, quando inseri diretamente no banco.

A segunda forma é a que esta atualmente no src/assets/json, elas estão separadas e com referencia ao ReceitaId nas filhas, porém a questão do retorno delas continua vindo vazio, o que comprometeu a amostragem da tela de Detalhes Receita no frontend. Por questão da entrega mantive dessa forma.

# Observações

Queria dizer que me diverti muito fazendo o projeto, foi o meu primeiro contato com NodeJS e MongoDB.

Infelizmente não pude dar a atenção que gostaria devido as minhas outras obrigações, mas vou continuar estudando e implementando este projeto.

Muito obrigado.
