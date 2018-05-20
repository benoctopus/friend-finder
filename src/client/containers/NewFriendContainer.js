import React, {Component} from 'react'
import ReactDom from 'react-dom';
import FriendCard from '../presentational/FriendCard'

class NewFriendContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <FriendCard {...this.props}/>
  }

}

export default NewFriendContainer;