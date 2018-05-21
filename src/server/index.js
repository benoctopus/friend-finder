const express = require('express');
const path = require('path');
const parser = require('body-parser');
const friends = require('./friends');
const questions = require('./questions');
const app = express();

const userData = friends.dummyGen();
const defaultPic = 'https://www.professionalclick.com/images/default.jpg';

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.use(express.static('dist'));

app.get('/api/friends', (req, res) => res.json(userData));

app.get('/api/questions', (req, res) => res.json(questions));

app.post('/api/newfriend', (req, res) => {
  let user = req.body;
  if (!user.photo) {
    user.photo = defaultPic
  }
  res.json(determineCompatibility(user));
  userData.push(user);
});

// app.get('*', (req, res) => res.send('/dist/*'));


app.listen(process.env.PORT || 8000, () => console.log('Listening on port 8080!'));

function determineCompatibility(bachelor) {
  //loop through friends and return lowest compatibility value

  let bestFriend;
  let potential = 99;
  userData.forEach(person => {
    let compatibility = person.scores.reduce((acc, val, i) => (
      acc + Math.abs(val - bachelor.scores[i])
    ));
    if (potential > compatibility) {
      bestFriend = person;
      potential = compatibility
    }
  });
  return {
    friend: bestFriend,
    compatibility: Math.round((1 - (potential - 1) / 40) * 100)
  };
}
