import React, {Component} from 'react'
import ReactDom from 'react-dom';

const FriendCard = props => (

  <div className={props.compatibility ? 'friend-card friend-modal' : 'friend-card'}>
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
                  <p>Question: {index + 1} </p>
                  <p>score: {score}</p>
                </li>
              )
            })}
          </ul>
      }
      <div>
        {
          props.compatibility ?
            <a onClick={() => props.allFriends()}>View All Friends</a>
            : null
        }
      </div>
    </div>

  </div>
);

export default FriendCard;