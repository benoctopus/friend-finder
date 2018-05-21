import React, {Component} from 'react'
import ReactDom from 'react-dom';

const SignInForm = props => (
  <div className='sign-in-list'>
    <label {...{children: 'username', htmlFor: 'username'}}
           className='sign-in-label sign-in-elem'/>
    <input
      {...{
        required: true,
        hname: 'username',
        onChange: (event) => props.updateInput(event),
        type: 'text'
      }}
      className='sign-in-elem sign-in-inp'/>
    <input {...{type: 'submit', value: 'SUBMIT'}}
           className='sign-in-elem sign-in-sub'/>
  </div>
);

export default SignInForm;