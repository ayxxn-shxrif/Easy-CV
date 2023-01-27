// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Styling imports
import '../styles/PersonalForm.css';
import '../styles/Button.css';

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { formVisibility, handlePersonalChange, personalInfo } = this.props;

    // If a personal form is clicked to be visible
    if (formVisibility) {
      return (
        <form className="personal-form">
          {/* Personal information */}
          <div>
            {/* Name */}
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                name="name"
                data-info="name"
                value={personalInfo.name}
                onChange={handlePersonalChange}
              />
            </label>
            {/* Professional title */}
            <label htmlFor="professionalTitle" className="professional-title">
              Professional Title
              <input
                type="text"
                id="professional-title"
                name="professionalTitle"
                data-info="professionalTitle"
                value={personalInfo.professionalTitle}
                onChange={handlePersonalChange}
                placeholder="Ex: Front-End Web Developer"
              />
            </label>
          </div>

          {/* Contacts information */}
          <div>
            {/* Phone */}
            <label htmlFor="phone">
              Phone
              <input
                type="text"
                id="phone"
                name="phone"
                data-info="phone"
                value={personalInfo.phone}
                onChange={handlePersonalChange}
              />
            </label>
            {/* Email */}
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                data-info="email"
                value={personalInfo.email}
                onChange={handlePersonalChange}
              />
            </label>
          </div>

          {/* Socials information */}
          <div>
            {/* LinkedIn */}
            <label htmlFor="linkedin">
              LinkedIn
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                data-info="linkedin"
                value={personalInfo.linkedin}
                onChange={handlePersonalChange}
              />
            </label>
            {/* GitHub */}
            <label htmlFor="github">
              GitHub
              <input
                type="text"
                id="github"
                name="github"
                data-info="github"
                value={personalInfo.github}
                onChange={handlePersonalChange}
              />
            </label>
          </div>

          {/* About information */}
          <div>
            <label htmlFor="about">
              About
              <textarea
                id="about"
                name="about"
                data-info="about"
                value={personalInfo.about}
                onChange={handlePersonalChange}
                placeholder="Ex: Mern Stack Developer who suffer from Imposter Syndrone"
              />
            </label>
          </div>
        </form>
      );
    }
    return null;
  }
}

// Validating Prop Types
PersonalForm.propTypes = {
  formVisibility: PropTypes.bool,
  handlePersonalChange: PropTypes.func.isRequired,
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

// Creating default props
PersonalForm.defaultProps = {
  formVisibility: true,
};

export default PersonalForm;
