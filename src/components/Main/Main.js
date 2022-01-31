import React from 'react';
import UserRepo from '../UserRepo/UserRepo'
import UserContacts from '../UserContacts/UserContacts';
import PropTypes from 'prop-types';
import domPurify from 'dompurify';

import '../Main/main.scss';

const Main = ({
    user,
}) => {
  return (
    <main className="main">
        <div className="main-left">
            <div className="main-left--avatar"><img src={user.avatar_url} alt="" /></div>
        </div>
        <div className="main-right">
            <header className="main-right--header">
                <h2 className="main-right--name">{user.name}</h2>
                <span className="main-right--date">Joined 01 Jan 2022</span>
                <p className="main-right--login">{user.login}</p>
                <p 
                    className="main-right--bio" 
                    dangerouslySetInnerHTML={{ __html: domPurify.sanitize(user.bio) }}
                />
            </header>
            <div className="main-right--repo">
                <UserRepo user={user} />
            </div>
            <footer className="main-right--footer">
                <UserContacts user={user} />
            </footer>
        </div>

    </main>
  );
};

Main.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired,
        bio: PropTypes.string,
        created_at: PropTypes.string.isRequired,
        location: PropTypes.string,
    }).isRequired,    
};

Main.defaultProps = {
    bio: '',
    location: '',
}

export default React.memo(Main);
