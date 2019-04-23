import React from 'react';

const Header = ({ title }) => (
  <div>
    <div>
      <h1>{title}</h1>
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Decision'
}

export default Header;

