const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

console.log("Connecting to mongodb");
require('monk')('localhost/myDb').then((db) => {
  console.log("Connected to db");
  app.prepare().then(() => {

    const server = express()

    server.get('/api/resources', (req, res) => {
      console.log('making query');
      db.get('resources').find().then((results) => res.json(results));
    });

    server.all('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
});
