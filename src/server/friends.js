module.exports = {

  Friend: class Friend {
    constructor(name, photoUrl, scores) {
      this.name = name;
      this.photo = photoUrl;
      this.scores = scores
    }
  },

  autoScores() {
    let scores = [];
    for (let i = 0; i < 11; i++) {
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


