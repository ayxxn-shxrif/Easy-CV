// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import Button from './Button';

// Styling imports
import '../styles/SkillsList.css';
import '../styles/Button.css';

class SkillsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { skillsInfo, handleSkillDelete } = this.props;

    return (
      <div className="skills-list">
        {skillsInfo.map((skill) => {
          return (
            <div key={skill.id} data-id={skill.id} className="skill">
              <p key={skill.id} className="skill-text">
                {skill.text}
              </p>

              {/* The button to delete an added skill */}
              <Button
                type="button"
                buttonEvent={handleSkillDelete}
                buttonText="delete"
                buttonClass="delete-skill-button red-hover"
              />
            </div>
          );
        })}
      </div>
    );
  }
}

// Validating prop types
SkillsList.propTypes = {
  skillsInfo: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleSkillDelete: PropTypes.func.isRequired,
};

export default SkillsList;
