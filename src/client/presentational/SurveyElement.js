import React, {Component} from 'react'
import ReactDom from 'react-dom';

const SurveyElement = props => (
  <li key={parseInt(props.name)}>
    <p>{props.name + '.  ' + props.question}</p>
    <div>
      <div>
        <label htmlFor='1'>1</label>
        <input type='radio' name={props.name} value='1' onChange={() => props.checkTracker(props.name, 1)}/>
      </div>
      <div>
        <label htmlFor='2'>2</label>
        <input type='radio' name={props.name} value='2' onChange={() => props.checkTracker(props.name, 2)}/>
      </div>
      <div>
        <label htmlFor='3'>3</label>
        <input type='radio' name={props.name} value='3' onChange={() => props.checkTracker(props.name, 3)}/>
      </div>
      <div>
        <label htmlFor='4'>4</label>
        <input type='radio' name={props.name} value='4' onChange={() => props.checkTracker(props.name, 4)}/>
      </div>
      <div>
        <label htmlFor='5'>5</label>
        <input type='radio' name={props.name} value='5' onChange={() => props.checkTracker(props.name, 5)}/>
      </div>
    </div>
  </li>
);

export default SurveyElement;