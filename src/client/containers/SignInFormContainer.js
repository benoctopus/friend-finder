import React, {Component} from 'react'
import ReactDom from 'react-dom';
import SignInForm from '../presentational/SignInForm';

class SignInFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {visibility: 'invisible'}
    this.onMount = this.props.onMount.bind(this);
    this.unMount = this.props.unMount.bind(this);
  }

  componentDidMount() {
    setTimeout(this.onMount, 20)
  }

  componentWillUnmount() {
    this.unMount()
  }

  render() {
    return (
      <form
        className={'intro-form ' + this.state.visibility}
        onSubmit={event => this.props.setUserName(event)}
        children={<SignInForm updateValue={this.props.updateValue}/>}
      />
    )
  }

}

export default SignInFormContainer;