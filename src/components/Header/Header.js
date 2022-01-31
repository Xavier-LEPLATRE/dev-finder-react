import React from 'react';
import '../Header/header.scss'

const Header = ({
  lightMode,
  toggleLightMode,
}
) => {
  
  return (
    <header className="header">
        <p className="header-title">
            devfinder
        </p>
        <button className="header-button" type="button" onClick={() => toggleLightMode()}>
            {lightMode ? 'dark' : 'light' }           
        </button>  
    </header>
  );
};

export default Header;
