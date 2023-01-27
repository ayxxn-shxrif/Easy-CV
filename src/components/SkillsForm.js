// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import Button from './Button';
import ErrorMessage from './ErrorMessage';
import SkillsList from './SkillsList';

// Styling imports
import '../styles/SkillsForm.css';
import '../styles/Button.css';

class SkillsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      formVisibility,
      handleSkillsChange,
      handleSkillAdd,
      handleSkillDelete,
      skillsInfo,
      skill,
      error,
    } = this.props;

    // If skills form is clicked to be visible
    if (formVisibility) {
      return (
        <form className="skills-form">
          <div className="skills-handling">
            {/* The input of a skill */}
            <label htmlFor="skill">
              Skill
              <input
                id="skill"
                type="text"
                name="skill"
                value={skill.text}
                onChange={handleSkillsChange}
                placeholder="Ex: React.js"
              />
            </label>

            {/* The button to add another skill */}
            <Button
              buttonEvent={handleSkillAdd}
              buttonText="add"
              buttonClass="add-skill-button green-hover fontAwesome-button"
            />
          </div>

          {/* If at least one skill is added - show the list of skills */}
          {skillsInfo.length > 0 ? (
            <SkillsList
              skillsInfo={skillsInfo}
              handleSkillDelete={handleSkillDelete}
            />
          ) : null}

          {/* If a value of the input is empty - show an error after clicking the '+' button */}
          {error === true ? <ErrorMessage /> : null}
        </form>
      );
    }
    return null;
  }
}

// Validating prop types
SkillsForm.propTypes = {
  formVisibility: PropTypes.bool,
  handleSkillsChange: PropTypes.func.isRequired,
  handleSkillAdd: PropTypes.func.isRequired,
  handleSkillDelete: PropTypes.func.isRequired,

  skillsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      index: PropTypes.number,
      id: PropTypes.string,
    })
  ).isRequired,

  skill: PropTypes.shape({
    text: PropTypes.string,
    index: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,

  error: PropTypes.bool,
};

// Creating default props
SkillsForm.defaultProps = {
  formVisibility: false,
  error: false,
};

export default SkillsForm;
