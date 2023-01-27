// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Styling imports
import '../styles/EducationPreview.css';

class EducationPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { educationInfo } = this.props;

    return (
      <div className="education-preview">
        <h3 className="preview-info-heading">EDUCATION</h3>

        {educationInfo.map((education) => {
          return (
            <div key={education.id}>
              <p className="education-school">
                {education.school}{' '}
                <span className="education-field">— {education.field}</span>
              </p>

              <p className="preview-date">
                {education.startMonth} {education.startYear} -{' '}
                {education.endMonth}{' '}
                {/* Don't show end year if this is the current field of studies */}
                {education.endMonth === 'Present' ? null : education.endYear}
              </p>

              <p className="education-degree">
                <span>Degree:</span> {education.degree}
              </p>

              <p className="education-grade">
                <span>Grade:</span> {education.grade}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

// Validating prop types
EducationPreview.propTypes = {
  educationInfo: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string,
      field: PropTypes.string,
      degree: PropTypes.string,
      grade: PropTypes.string,
      startYear: PropTypes.string,
      startMonth: PropTypes.string,
      endYear: PropTypes.string,
      endMonth: PropTypes.string,
    })
  ).isRequired,
};

export default EducationPreview;
