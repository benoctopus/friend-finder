import React, {Component} from 'react'
import ReactDom from 'react-dom';

const FriendCard = props => (

  <div className={'friend-card'}>
    <img src={props.friend.photo} alt='image not available'/>
    <div>
      <h2>{props.friend.name}</h2>
      {
        props.compatibility ?
          <h2>{props.compatibility}% Match!</h2> :
          <ul>
            {props.friend.scores.map((score, index) => {
              return (
                <li key={index + 1}>
                  <p>Question: {index + 1} score: {score}</p>
                </li>
              )
            })}
          </ul>
      }
    </div>
  </div>
);

export default FriendCard;