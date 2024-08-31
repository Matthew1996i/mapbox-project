# Project Mapbox

<div style="display: inline-block;">
  <img style="width: 200px; vertical-align: middle;" alt="firebase" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png"/>
  <img style="width: 200px; vertical-align: middle;" alt="nodejs" src="https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png"/>
  <img style="width: 200px; vertical-align: middle;" alt="typescript" src="https://www.svgrepo.com/show/374144/typescript.svg"/>
</div>

## Tecnologias Usadas

- **Vite**
- **NodeJS**

## Requisitos

- **Node.js** versão 20.9.0
- **NPM** versão 10.1.0
- **Yarn** versão 1.22.19

## Instalação

Para instalar os pacotes necessários, utilize o yarn ou npm:

- Para instalar a api:

```bash
  $ cd api
  $ yarn | npm install
```

- Para instalar o app:

```bash
  $ cd front
  $ yarn | npm install
```

## Scripts Disponíveis

### API

- `dev`: Executar em ambiente de desenvolvimento.
- `start`: Executar em ambiente de produção.
- `test`: Executa os testes utilizando Jest.
- `test:watch`: Executa os testes em modo watch.
- `build`: Gera um build do projeto.

### FRONT

- `dev`: Executar em ambiente de desenvolvimento.
- `build`: Gera um build do projeto.
- `lint`: Verifica o código utilizando ESLint.

## Execução

#### Em cada projeto tem um aquivo example.env que podem ser alterado de acordo com as suas variaveis.

### API

#### Edite o arquivo "exemple.env" e renomeie para ".env" ou crie um arquivo ".env" dentro de cada pasta raiz do projeto.

```shell
  DATABASE_URL= #acesso do banco de dados adaptado para uso do prisma
  PORT= #porta da api
  APP_SECRET= #gere uma palavra secret para a api
  APP_REFRESH_SECRET= #gere uma palavra secret para a api
```

### FRONT

#### Edite o arquivo "exemple.env" e renomeie para ".env" ou crie um arquivo ".env" dentro de cada pasta raiz do projeto.

```shell
  VITE_API_URL= #url da api
  VITE_MAPBOX_TOKEN= #token gerado no site do mapbox
```

## Endpoints

### POST /sessions - auth user

```json
{
	"email": string,
	"password": string
}
```

### POST /user - create user

```json
{
  "name": "teste",
  "email": "test@test.com",
  "password": "test123"
}
```

## Doctors

### GET /doctors - gets doctors

```json
NO BODY DATA

"authentication": "Bearer Token"
```

### POST /doctors - create doctor

```json
{
	"NM_MEDICO": "Nome"
}

"authentication": "Bearer Token"
```

## Hospitals

### GET /hospitals - gets hospitals

```json
NO BODY DATA

"authentication": "Bearer Token"
```

### POST /hospitals - create hospitals

```json
{
	"NM_HOSPITAL": "HOSPITAL teste",
	"NR_LATITUDE": -22.9037912,
	"NR_LONGITUDE": -47.06816936
}

"authentication": "Bearer Token"
```

## Calleds

### GET /calleds - gets calleds

```json
NO BODY DATA

"authentication": "Bearer Token"
```

### POST /calleds - create calleds

```json
{
	"NM_HOSPITAL": "HOSPITAL 1",
	"NR_LATITUDE": -22.9037912,
	"NR_LONGITUDE": -47.06816936
}

"authentication": "Bearer Token"
```
