const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/', (req, res) => {
  res.status(201).json(req.body);
});

app.get('/', (req, res) => {
  res.status(200).sendFile('index.html');
});

module.exports = app.listen(port);