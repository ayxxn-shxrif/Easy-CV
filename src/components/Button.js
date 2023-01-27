// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash,
  faTrashAlt,
  faPlus,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

// Styling imports
import '../styles/Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { buttonEvent, buttonText, buttonClass } = this.props;
    let buttonValue = buttonText;

    // Button's icon of showing a form
    if (buttonValue === 'show') {
      buttonValue = (
        <FontAwesomeIcon icon={faEye} className="fa-fw" pointerEvents="none" />
      );

      // Button's icon of hiding a form
    } else if (buttonValue === 'hide') {
      buttonValue = (
        <FontAwesomeIcon
          icon={faEyeSlash}
          className="fa-fw"
          pointerEvents="none"
        />
      );

      // Button's icon of deleting a form
    } else if (buttonValue === 'delete') {
      buttonValue = (
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="fa-fw"
          pointerEvents="none"
        />
      );

      // Button's icon of adding a form
    } else if (buttonValue === 'add') {
      buttonValue = (
        <FontAwesomeIcon icon={faPlus} className="fa-fw" pointerEvents="none" />
      );

      // Button's icon of scrolling to top
    } else if (buttonValue === 'up') {
      buttonValue = (
        <FontAwesomeIcon
          icon={faArrowUp}
          className="fa-fw"
          pointerEvents="none"
        />
      );
    }

    return (
      <button type="button" onClick={buttonEvent} className={buttonClass}>
        {buttonValue}
      </button>
    );
  }
}

// Validating prop types
Button.propTypes = {
  buttonEvent: PropTypes.func,
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string.isRequired,
};

// Creating default props
Button.defaultProps = {
  buttonEvent: () => {},
  buttonText: '❗TEXT ERROR',
};

export default Button;
