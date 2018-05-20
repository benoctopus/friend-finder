module.exports = {

  Friend: class Friend {
    constructor(name, photoUrl, scores) {
      this.name = name;
      this.photo = photoUrl ?
        photoUrl :
        'https://www.professionalclick.com/images/default.jpg';
      this.scores = scores
    }
  },

  autoScores() {
    let scores = [];
    for (let i = 0; i < 10; i++) {
      scores.push(
        Math.floor((Math.random() * 4.99) + 1)
      )
    }
    return scores;
  },

  dummyData: [
    {name: 'jimmy', photoUrl: ''},
    {name: 'tom', photoUrl: ''},
    {name: 'lucy', photoUrl: ''},
    {name: 'kanye', photoUrl: ''},
    {name: 'kim', photoUrl: ''},
    {name: 'drake', photoUrl: ''},
    {name: 'misha', photoUrl: ''},
    {name: 'ben', photoUrl: ''},
    {name: 'DAVID', photoUrl: ''},
    {name: 'will', photoUrl: ''},
    {name: 'kendrick', photoUrl: ''},
    {name: 'diddy', photoUrl: ''},
    {name: 'lauren', photoUrl: ''},
    {name: 'kelsey', photoUrl: ''},
    {name: 'james', photoUrl: ''},
    {name: 'frank', photoUrl: ''},
    {name: 'jesus', photoUrl: ''},
    {name: 'horus', photoUrl: ''},
    {name: 'bill', photoUrl: ''},
    {name: 'emma', photoUrl: ''},
  ],

  dummyGen() {
    const friends = [];
    let scope = this;
    this.dummyData.forEach(
      person => friends.push(
        new scope.Friend(
          person.name,
          person.photoUrl,
          scope.autoScores())
      )
    );
    return friends;
  }
};


