import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode.js';
import SearchForm from './SearchForm.jsx';

const Navbar = ({coinList, coin, handleChange}) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <SearchForm coinList={coinList} coin={coin} handleChange={handleChange}/>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
