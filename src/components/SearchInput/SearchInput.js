import PropTypes from 'prop-types';
import React, { useState } from 'react';
import '../SearchInput/searchInput.scss'

const SearchInput = ({
  search,
}) => {
  const [userInput, setUserInput] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    search(userInput);
  }

  const onChange = (event) => {
    setUserInput(event.target.value);
  }
  return (
    <form className="form"  onSubmit={onSubmit}>
        <i className='fas fa-search'></i>
        <input className="form-input" type="text" name="" id="" placeholder="Search Github username..." onChange={onChange} />
        <button className="form-button" type="submit">search</button>
    </form>
  );
};

SearchInput.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchInput;
