// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Styling imports
import '../styles/PersonalPreview.css';

class PersonalPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { personalInfo } = this.props;

    return (
      <div className="personal-preview">
        {/* Name and professional title of a person */}
        <h2 className="person-name">
          {personalInfo.name.toUpperCase()}&nbsp;|&nbsp;
          <span className="person-title">{personalInfo.professionalTitle}</span>
        </h2>

        {/* Contacts of a person */}
        <div className="person-contacts">
          {/* Phone and email of a person */}
          <div>
            <p>
              <span>Email:</span>&nbsp;{personalInfo.email.toLowerCase()}
            </p>
            <p>
              <span>Phone:</span>&nbsp;{personalInfo.phone}
            </p>
          </div>

          {/* Socials of a person */}
          <div>
            <p>
              <span>LinkedIn:</span>&nbsp;{personalInfo.linkedin}
            </p>
            <p>
              <span>GitHub:</span>&nbsp;{personalInfo.github}
            </p>
          </div>
        </div>

        {/* 'About' information of a person */}
        <h3 className="preview-info-heading">ABOUT</h3>
        <p className="person-about">
          <span>&ldquo;</span>
          {personalInfo.about}
          <span>&rdquo;</span>
        </p>
      </div>
    );
  }
}

// Validating prop types
PersonalPreview.propTypes = {
  personalInfo: PropTypes.shape({
    name: PropTypes.string,
    professionalTitle: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
};

export default PersonalPreview;
