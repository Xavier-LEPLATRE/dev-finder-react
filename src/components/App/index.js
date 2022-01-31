// == Import
import Header from '../Header/Header';
import SearchInput from '../SearchInput/SearchInput';
import Main from '../Main/Main';
import React, { useState, useEffect } from 'react';
import { requestUser } from 'src/tools/requests';

import './styles.scss';

// == Composant
const App = () => {
  const [lightMode, setLightMode] = useState(false);
  const [user, setUser] = useState([]);
  
  const toggleLightMode = () => {
    setLightMode((oldLightMode) =>!oldLightMode);
  }

  const loadUser = async (value) => {
    
    const response = await requestUser(value);
    if(response.status === 200) {
      setUser(response.data);
      console.log(user);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
  <div className={`app ${lightMode ? 'app--light' : ''}`}>
    <Header 
      lightMode={lightMode}
      toggleLightMode={toggleLightMode}
    />
    <SearchInput 
      search={loadUser} />
    <Main 
      user={user}
    />
  </div>
  );
};

// == Export
export default React.memo(App);
