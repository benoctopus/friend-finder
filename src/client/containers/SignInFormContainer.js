import React, {Component} from 'react'
import ReactDom from 'react-dom';
import SignInForm from '../presentational/SignInForm';

class SignInFormContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
 }

  render() {
    return (
      <form
        className='intro-form'
        onSubmit={event => this.props.setUserName(event)}
        children={<SignInForm updateValue={this.props.updateValue}/>}
      />
    )
  }

}

export default SignInFormContainer;