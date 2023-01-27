// Packages imports
import React from 'react';

// Styling imports
import '../styles/Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header id="Header">
        <h1 className="cv-title">Easy-CV</h1>
      </header>
    );
  }
}

export default Header;
