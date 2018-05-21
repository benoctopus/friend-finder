import React, {Component} from 'react'
import ReactDom from 'react-dom';
import SignInForm from '../presentational/SignInForm';

class SignInFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {visibility: 'invisible'}
  }


  render() {
    return (
      <form
        className={'intro-form ' + this.state.visibility}
        onSubmit={event => this.props.setUserName(event)}
        children={<SignInForm updateInput={this.props.updateInput}/>}
      />
    )
  }

}

export default SignInFormContainer;