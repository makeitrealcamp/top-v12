const express = require('express');
const ExpressRedisCache = require('express-redis-cache');

const app = express();
const port = 3000;

const cache = ExpressRedisCache({
  expire: 10, // optional: expire every 10 seconds
});

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function greet(req, res) {
  const range =
    1000 + Math.floor(Math.random() * Math.floor(2000))
  wait(range).then(() =>
    res.send(`Hello, I just waited ${range} ms`),
  )
}

app.get('/', greet);
app.get('/cached', cache.route(), greet);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));