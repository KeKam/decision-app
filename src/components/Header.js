import React from 'react';

const Header = ({ title, subtitle }) => (
  <div className='header'>
    <div className='container'>
      <h1 className='header-title'>{title}</h1>
      {subtitle && <h2 className='header-subtitle'>{subtitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Decision',
  subtitle: 'Leave your decisions in the hands of a computer!'
}

export default Header;

