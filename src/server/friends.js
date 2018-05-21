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
    {name: 'jimmy', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'tom', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'lucy', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'kanye', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'kim', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'drake', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'misha', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'ben', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'DAVID', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'will', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'kendrick', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'diddy', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'lauren', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'kelsey', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'james', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'frank', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'jesus', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'horus', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'bill', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
    {name: 'emma', photoUrl: 'https://fthmb.tqn.com/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg'},
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


