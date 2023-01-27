// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Styling imports
import '../styles/SkillsPreview.css';

class SkillsPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { skillsInfo } = this.props;

    return (
      <div className="skills-preview">
        <h3 className="preview-info-heading">ADDITIONAL SKILLS</h3>

        <div className="skills-preview-list">
          {skillsInfo.map((skill) => {
            return (
              <p key={skill.id} className="skills-preview-text">
                {skill.text}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

// Validating prop types
SkillsPreview.propTypes = {
  skillsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      index: PropTypes.number,
      id: PropTypes.string,
    })
  ).isRequired,
};

export default SkillsPreview;
