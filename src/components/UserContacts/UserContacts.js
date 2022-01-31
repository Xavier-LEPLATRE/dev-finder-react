import React from 'react';
import '../UserContacts/userContacts.scss';

const UserContacts = ({user}) => {
  return (
    <ul className="contacts">
        <li className="contacts-item">
            <span className="fas fa-map-marker-alt"></span>
            <p>{user.location}</p>
        </li>
        <li className="contacts-item">
            <span></span>
            <p>{user.twitter_username}</p>
        </li>
        <li className="contacts-item">
            <span></span>
            <p>{user.company}</p>
        </li>
        <li className="contacts-item">
            <span></span>
            <p>@github</p>
        </li>
    </ul>
  );
};

export default UserContacts;