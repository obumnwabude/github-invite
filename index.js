const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/', (req, res) => {
  res.status(201).json(req.body);
});

app.get('/', (req, res) => {
  res.status(200).end('server is working');
});

module.exports = app.listen(port);