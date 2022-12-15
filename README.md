# arfudy-dbmanager

Projeto criado em JavaScript para versionamento dos scripts de banco de dados


## Variáveis de ambiente

Para rodar este projeto, você precisará criar e adicionar essas variáveis de ambiente em um arquivo .env

* `DEV_DATABASE_URL` - Url para conexão com o banco de dados

Exemplo: 
```.env
DEV_DATABASE_URL=postgresql://[user[:password]@][netloc][:port][/dbname][?param1=value1&...]
```


## Rodar localmente

Clonar o projeto

```bash
  git clone https://github.com/time-7/arfudy-dbmanager
```

Acesse o diretório do projeto

```bash
  cd arfudy-dbmanager
```

Instale as dependências

```bash
  npm install
```

Rodar os migrations para criação das tabelas no banco de dados

```bash
  ./node_modules/.bin/sequelize db:migrate
```

Rodar todos os seeders para inserção dos dados no banco

```bash
  ./node_modules/.bin/sequelize db:seed:all
```
