// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import Button from './Button';

// Styling imports
import '../styles/InfoTitle.css';

class InfoTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      title,
      border,
      hover,
      formType,
      handleFormDisplay,
      formVisibility,
    } = this.props;

    return (
      <h2 className="info-title" data-form={formType}>
        <span className={`${border} info-border`}>{title}</span>

        {/* The button to show/hide a form */}
        <span>
          <Button
            type="button"
            buttonEvent={handleFormDisplay}
            buttonText={formVisibility ? 'hide' : 'show'}
            buttonClass={`${hover} fontAwesome-button`}
          />
        </span>
      </h2>
    );
  }
}

// Validating prop types
InfoTitle.propTypes = {
  title: PropTypes.string,
  border: PropTypes.string,
  hover: PropTypes.string,
  formType: PropTypes.string.isRequired,
  handleFormDisplay: PropTypes.func.isRequired,
  formVisibility: PropTypes.bool,
};

// Creating default props
InfoTitle.defaultProps = {
  title: '❗TEXT ERROR',
  border: 'green-border',
  hover: 'green-hover',
  formVisibility: false,
};

export default InfoTitle;
