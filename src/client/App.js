import React, {Component} from 'react';
import Header from './presentational/Header'
import Content from './containers/ContentContainer'
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}
