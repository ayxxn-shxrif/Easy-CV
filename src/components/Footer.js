// Packages imports
import React from 'react';

// Styling imports
import '../styles/Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <footer id="Footer">
        <p>
          ☽ Crafted by&nbsp;
          <a
            href="https://github.com/ayxxn-shxrif"
            target="_blank"
            className="footer-link"
            rel="noreferrer"
          >
            Ayaan Sharif
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://github.com/"
            target="_blank"
            className="footer-link"
            rel="noreferrer"
          >
            Source
          </a>
          &nbsp;☾
        </p>
      </footer>
    );
  }
}

export default Footer;
