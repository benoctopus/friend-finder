import React, {Component} from 'react'
import ReactDom from 'react-dom';

const Header = () =>
  (
    <header id='intro-header'>
      <div>
        <h1 id='header-title'>Friend Finder</h1>
      </div>
      <div className='header-text'>
        <p className='header-text-child'>Take a Quiz,</p>
        <p className='header-text-child'>Find Some Friends!</p>
      </div>
    </header>
  );


export default Header;