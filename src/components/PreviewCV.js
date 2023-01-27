// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import PersonalPreview from './PersonalPreview';
import SkillsPreview from './SkillsPreview';
import PracticePreview from './PracticePreview';
import EducationPreview from './EducationPreview';

// Styling imports
import '../styles/PreviewCV.css';

class PreviewCV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { cvInfo } = this.props;

    return (
      <div className="preview-box">
        <PersonalPreview personalInfo={cvInfo.personal} />
        <SkillsPreview skillsInfo={cvInfo.skills} />
        <PracticePreview practiceInfo={cvInfo.practice} />
        <EducationPreview educationInfo={cvInfo.education} />
      </div>
    );
  }
}

// Validating prop types
PreviewCV.propTypes = {
  cvInfo: PropTypes.shape({
    personal: PropTypes.shape({}),
    skills: PropTypes.arrayOf(PropTypes.shape({})),
    practice: PropTypes.arrayOf(PropTypes.shape({})),
    education: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default PreviewCV;
