// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import InfoTitle from './InfoTitle';
import SkillsForm from './SkillsForm';

class SkillsInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      formType,
      title,
      border,
      hover,
      formVisibility,
      handleFormDisplay,
      handleSkillsChange,
      handleSkillAdd,
      handleSkillDelete,
      skillsInfo,
      skill,
      error,
    } = this.props;

    return (
      <div>
        <InfoTitle
          formType={formType}
          title={title}
          border={border}
          hover={hover}
          formVisibility={formVisibility}
          handleFormDisplay={handleFormDisplay}
        />

        <SkillsForm
          formVisibility={formVisibility}
          handleSkillsChange={handleSkillsChange}
          handleSkillAdd={handleSkillAdd}
          handleSkillDelete={handleSkillDelete}
          skillsInfo={skillsInfo}
          skill={skill}
          error={error}
        />
      </div>
    );
  }
}

// Validating prop types
SkillsInfo.propTypes = {
  formType: PropTypes.string,
  title: PropTypes.string,
  border: PropTypes.string,
  hover: PropTypes.string,
  formVisibility: PropTypes.bool,
  handleFormDisplay: PropTypes.func.isRequired,
  skill: PropTypes.shape({}).isRequired,
  error: PropTypes.bool,
  skillsInfo: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleSkillsChange: PropTypes.func.isRequired,
  handleSkillAdd: PropTypes.func.isRequired,
  handleSkillDelete: PropTypes.func.isRequired,
};

// Creating default props
SkillsInfo.defaultProps = {
  formType: 'skills',
  title: 'SKILLS',
  border: 'blue-border',
  hover: 'blue-hover',
  formVisibility: false,
  error: false,
};

export default SkillsInfo;
