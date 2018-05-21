import React, {Component} from 'react'
import ReactDom from 'react-dom';
import FriendCard from '../presentational/FriendCard'

class NewFriendContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {visibility: 'invisible'};
    // this.onMount = this.props.onMount.bind(this);
    // this.unMount = this.props.unMount.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return <FriendCard
      // vis = {this.state.visibility}
      {...this.props.results}/>
  }

}

export default NewFriendContainer;