const express = require('express');
const path = require('path');
const parser = require('body-parser');
const friends = require('./friends');
const questions = require('./questions');
const app = express();

const userData = friends.dummyGen();


app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.use(express.static('dist'));

app.get('/api/friends', (req, res) => res.json(userData));

app.get('/api/questions', (req, res) => res.json(questions));

app.post('/api/newfriend', (req, res) => {
  console.log(req.body);
  res.json({text: 'success!'})
});


app.listen(8080, () => console.log('Listening on port 8080!'));
