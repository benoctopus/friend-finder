import React, {Component} from 'react'
import ReactDom from 'react-dom';
import SignInFormContainer from './SignInFormContainer'
import SurveyContainer from './SurveyContainer'

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
    this.setUserName = this.setUserName.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  setUserName(event) {
    event.preventDefault();
    this.setState({username: this.state.value});
  }

  updateValue(event) {
    this.state.value = event.target.value;
    this.setState({value: this.state.value});
  }

  renderView() {
    if (!this.state.username) {
      return <SignInFormContainer
        updateValue={this.updateValue}
        setUserName={this.setUserName}/>;
    }
    else {
      return <SurveyContainer username = {this.state.username}/>;
    }
  }

  render() {
    return (this.renderView())
  }
}

export default ContentContainer;