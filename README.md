<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Digital Library API
## Description
This API is dedicated to the management of tournaments, video games (esports) at Colombian level, allowing CRUD operations on tournaments, players and results.
It also includes paging, filtering and sorting functions, as well as data validation and response codes.

## Table of Contents
- [Description](#description)
- [Installation and Setup](#installation-and-setup)
- [Running the App](#running-the-app)
- [Usage](#usage)
  - [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contribution](#contribution)
- [Author](#author)

## Installation and Setup
1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/Richard-01/torneos-van-rossum.git
    cd torneos-van-rossum
    ```
2. Install dependencies using the command:
    ```bash
    npm install
    ```
3. Create a `.env` file based on the `.env.example` file and fill in the required environment variables.

- `DB_USER`: Default database user.
- `DB_HOST`: Hostname or IP address of the database server.
- `DB_PASSWORD`: Password for the database user.
- `DB_NAME`: Name of the database.
- `DB_PORT`: Port number for the database server.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Installation and Setup
1. Clone this repository to your local machine.
2. Install dependencies using the command `npm install`.
3. Configure your PostgreSQL or MySQL database and update the configuration in the `config.ts` file.
4. Start the application using the command `npm run start`.

## Usage
### API Documentation
The API documentation is available in Swagger. After running the application, visit `http://localhost:3000/api-docs` in your browser to access the documentation.

## Project Structure
```
torneos-vanrossum/
├── src/
│   ├── common/
│   │   ├── decorators/
│   │   ├── guards/
│   │   ├── pipes/
│   ├── modules/
│   │   ├── tournaments/
│   │   │   ├── dto/
│   │   │   ├── entities/
│   │   │   ├── controller/
│   │   │   ├── tournaments.controller.ts
│   │   │   ├── services/
│   │   │   ├── tournaments.service.ts
│   │   ├── tournaments.module.ts
│   │   ├── players/
│   │   │   ├── dto/
│   │   │   ├── entities/
│   │   │   ├── controllers/
│   │   │   ├── players.controller.ts
│   │   │   ├── services/
│   │   │   ├── players.service.ts
│   │   ├── players.module.ts
│   │   ├── results/
│   │   │   ├── dto/
│   │   │   ├── entities/
│   │   │   ├── controllers/
│   │   │   ├── results.controller.ts
│   │   │   ├── services/
│   │   │   ├── results.service.ts
│   │   ├── results.module.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   │
├── ... # Other files and folders

```

## Contribution
To contribute to this project, follow these steps:
1. Fork this repository.
2. Create a new branch with the prefix `feature/` followed by your feature name.
3. Make your changes and tests.
4. Make a pull request to the `develop` branch of this repository.

- Author - [Richard Montoya](https://github.com/Richard-01)


