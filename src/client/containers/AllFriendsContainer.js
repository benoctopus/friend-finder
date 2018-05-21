import React, {Component} from 'react'
import ReactDom from 'react-dom';
import FriendCard from '../presentational/FriendCard'

class AllFriendsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {friends: null}
  }

  componentWillMount() {
    fetch('/api/friends')
      .then(res => res.json())
      .then(data => this.displayFriends(data))
  }

  displayFriends(friends) {
    this.setState(
      {
        friends: friends.map(
          (friend, i) => <li key={i}><FriendCard friend={friend}/></li>
        )
      })
  }

  render() {
    return (
      <div id='all-friends'>
        <ul>
          {this.state.friends ? this.state.friends : null}
        </ul>
      </div>
    )
  }
}

export default AllFriendsContainer;