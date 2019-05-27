# qrs-invoice

A simple invoice application based on the blog article [Using Sequelize.js and SQLite in an Express.js App](http://stackabuse.com/using-sequelize-js-and-sqlite-in-an-express-js-app/).

### Usage

1) Clone repo

```sh
git clone https://github.com/ccapo/qrs-invoice.git
```

2) Install dependencies (Built with Node.js v10.15)

```sh
cd qrs-invoice/
npm install
```

3) Run migrations and seeders

```sh
node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize db:seed:all
```

4) Start express server

```sh
npm start
```
