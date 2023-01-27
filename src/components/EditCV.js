// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import PersonalInfo from './PersonalInfo';
import PracticeInfo from './PracticeInfo';
import EducationInfo from './EducationInfo';
import SkillsInfo from './SkillsInfo';

class EditCV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      // Functions of showing/hiding forms
      handleFormDisplay,
      personalDisplay,
      skillsDisplay,
      practiceDisplay,
      educationDisplay,

      // All the information of CV object
      cvInfo,
      // Watching changes in inputs of the personal form
      handlePersonalChange,

      // Watching changes in the input of skills form
      handleSkillsChange,
      // Deleting/adding a skill
      handleSkillDelete,
      handleSkillAdd,

      // Object of a skill
      skill,

      // Boolean of an error
      error,

      // Watching changes in inputs of practice form
      handlePracticalChange,
      // Deleting/adding a practice form
      handlePracticalDelete,
      handlePracticalAdd,

      // Watching changes in inputs of education form
      handleEducationalChange,
      // Deleting/adding an education form
      handleEducationalDelete,
      handleEducationalAdd,
    } = this.props;

    return (
      <div>
        <PersonalInfo
          formType="personal"
          title="PERSONAL INFORMATION"
          border="red-border"
          hover="red-hover"
          formVisibility={personalDisplay}
          handleFormDisplay={handleFormDisplay}
          handlePersonalChange={handlePersonalChange}
          personalInfo={cvInfo.personal}
        />

        <SkillsInfo
          formType="skills"
          title="ADDITIONAL SKILLS"
          border="blue-border"
          hover="blue-hover"
          formVisibility={skillsDisplay}
          handleFormDisplay={handleFormDisplay}
          handleSkillsChange={handleSkillsChange}
          handleSkillAdd={handleSkillAdd}
          handleSkillDelete={handleSkillDelete}
          skill={skill}
          error={error}
          skillsInfo={cvInfo.skills}
        />

        <PracticeInfo
          formType="practice"
          title="PRACTICAL EXPERIENCE"
          border="orange-border"
          hover="orange-hover"
          formVisibility={practiceDisplay}
          handleFormDisplay={handleFormDisplay}
          handlePracticalChange={handlePracticalChange}
          handlePracticalDelete={handlePracticalDelete}
          handlePracticalAdd={handlePracticalAdd}
          practiceInfo={cvInfo.practice}
        />

        <EducationInfo
          formType="education"
          title="EDUCATIONAL EXPERIENCE"
          border="purple-border"
          hover="purple-hover"
          formVisibility={educationDisplay}
          handleFormDisplay={handleFormDisplay}
          handleEducationalChange={handleEducationalChange}
          handleEducationalDelete={handleEducationalDelete}
          handleEducationalAdd={handleEducationalAdd}
          educationInfo={cvInfo.education}
        />
      </div>
    );
  }
}

// Validating prop types
EditCV.propTypes = {
  handleFormDisplay: PropTypes.func.isRequired,
  personalDisplay: PropTypes.bool,
  practiceDisplay: PropTypes.bool,
  educationDisplay: PropTypes.bool,
  skillsDisplay: PropTypes.bool,

  handlePersonalChange: PropTypes.func.isRequired,

  handleSkillsChange: PropTypes.func.isRequired,
  handleSkillDelete: PropTypes.func.isRequired,
  handleSkillAdd: PropTypes.func.isRequired,

  skill: PropTypes.shape({}).isRequired,

  error: PropTypes.bool,

  handlePracticalChange: PropTypes.func.isRequired,
  handlePracticalDelete: PropTypes.func.isRequired,
  handlePracticalAdd: PropTypes.func.isRequired,

  handleEducationalChange: PropTypes.func.isRequired,
  handleEducationalDelete: PropTypes.func.isRequired,
  handleEducationalAdd: PropTypes.func.isRequired,

  cvInfo: PropTypes.shape({
    personal: PropTypes.shape({}),
    skills: PropTypes.arrayOf(PropTypes.shape({})),
    practice: PropTypes.arrayOf(PropTypes.shape({})),
    education: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

// Creating default props
EditCV.defaultProps = {
  personalDisplay: false,
  practiceDisplay: false,
  educationDisplay: false,
  skillsDisplay: false,
  error: false,
};

export default EditCV;
