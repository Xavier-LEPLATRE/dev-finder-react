import PropTypes from 'prop-types';
import React from 'react';
import '../UserRepo/userRepo.scss';

const UserRepo = ({user}) => {
  return (
    <ul>
        <li>
            <p>Repos</p>
            <p>{user.public_repos}</p>
        </li>
        <li>
            <p>Followers</p>
            <p>{user.followers}</p>
        </li>
        <li>
            <p>Following</p>
            <p>{user.following}</p>
        </li>
    </ul>
  );
};

UserRepo.propTypes = {
  user: PropTypes.shape({
    public_repos: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number,
  })
};

UserRepo.defaultProps = {
  public_repos: 0,
  followers: 0,
  following: 0,
}

export default UserRepo;
