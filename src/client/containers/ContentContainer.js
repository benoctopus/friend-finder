import React, {Component} from 'react'
import ReactDom from 'react-dom';
import SignInFormContainer from './SignInFormContainer'
import SurveyContainer from './SurveyContainer'
import NewFriendContainer from './NewFriendContainer'

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      results: null
    };
    this.setUserName = this.setUserName.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.grabResults = this.grabResults.bind(this);
  }

  setUserName(event) {
    event.preventDefault();
    this.setState({username: this.state.value});
  }

  grabResults(results) {
    console.log(results);
    this.setState({results})
  }

  updateValue(event) {
    this.state.value = event.target.value;
    this.setState({value: this.state.value});
  }

  renderView() {
    if (this.state.results) {
      return <NewFriendContainer {...this.state.results}/>
    }
    else if (!this.state.username) {
      return <SignInFormContainer
        updateValue={this.updateValue}
        setUserName={this.setUserName}
      />;
    }
    else {
      return <SurveyContainer
        grabResults={this.grabResults}
        username={this.state.username}
      />;
    }
  }

  render() {
    return (this.renderView())
  }
}

export default ContentContainer;