import React, {Component} from 'react'
import ReactDom from 'react-dom';
import SignInFormContainer from './SignInFormContainer'
import SurveyContainer from './SurveyContainer'
import NewFriendContainer from './NewFriendContainer'
import AllFriendsContainer from './AllFriendsContainer'

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      results: null,
      showFriends: false
    };
    this.setUserName = this.setUserName.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.grabResults = this.grabResults.bind(this);
    this.allFriends = this.allFriends.bind(this)
  }

  setUserName(event) {
    event.preventDefault();
    this.setState({username: this.state.value});
  }
  
  allFriends() {
    this.setState({showFriends: true})
  }

  grabResults(results) {
    results.allFriends = this.allFriends;
    this.setState({results})
  }

  updateInput(event) {
    this.state.value = event.target.value;
    this.setState({value: this.state.value});
  }

  renderView() {
    if (this.state.showFriends) {
      return <AllFriendsContainer/>
    }
    else if (!this.state.username) {
      return <SignInFormContainer
        updateInput={this.updateInput}
        setUserName={this.setUserName}
      />;
    }
    else {
      return <SurveyContainer
        allFriends={this.allFriends}
        grabResults={this.grabResults}
        username={this.state.username}
        newFriend={this.state.results ?
          <NewFriendContainer results={this.state.results}/>
          : null
        }
      />;
    }
  }

  onMount() {
    this.setState({visibility: null})
  }

  unMount() {
    this.setState({visibility: 'invisible'});
    return new Promise(resolve => {
      setTimeout(() => resolve(), 250)
    })
  }

  render() {
    return (this.renderView())
  }
}

export default ContentContainer;