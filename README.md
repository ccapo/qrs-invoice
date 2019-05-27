# qrs-invoice

A simple invoice application for Quantech Resource Services (QRS), based on the blog article [Using Sequelize.js and SQLite in an Express.js App](http://stackabuse.com/using-sequelize-js-and-sqlite-in-an-express-js-app/).

## Usage

1) Clone repo

```sh
git clone https://github.com/ccapo/qrs-invoice.git
```

2) install dependencies (Built with Node.js version 8.10)

```sh
cd qrs-invoice/
npm install
```

3) run migrations and seeders

```sh
node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize db:seed:all
```

4) start express server

```sh
npm start
```
