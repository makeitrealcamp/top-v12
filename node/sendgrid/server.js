require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect } = require('./src/db');
const usersRouter = require('./src/routes/user');

const port = process.env.PORT || 8000;

const app = express();
connect();

app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});
