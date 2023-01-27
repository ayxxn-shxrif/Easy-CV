// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import Button from './Button';

// Styling imports
import '../styles/EducationForm.css';

class EducationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      formVisibility,
      handleEducationalChange,
      handleEducationalDelete,
      handleEducationalAdd,
      educationInfo,
    } = this.props;

    // If an education form is clicked to be visible
    if (formVisibility) {
      // If there are no forms created yet
      if (educationInfo.length === 0) {
        return (
          <form className="add-education-form">
            {/* The button to add the first education form */}
            <Button
              buttonEvent={handleEducationalAdd}
              buttonText="add"
              buttonClass="add-first-form-button green-hover fontAwesome-button"
            />
          </form>
        );
      }

      // Show existing education form(s)
      return educationInfo.map((education, index) => {
        return (
          <form
            key={education.id}
            data-id={education.id}
            className="education-form"
          >
            {/* School and study information */}
            <div>
              {/* School name */}
              <label htmlFor="school-name">
                School
                <input
                  type="text"
                  id="school-name"
                  name="school-name"
                  data-info="school"
                  data-key={education.id}
                  value={education.school}
                  onChange={handleEducationalChange}
                  placeholder="Ex: Harvard University"
                />
              </label>
              {/* Field of study */}
              <label htmlFor="study-title">
                Field of study
                <input
                  type="text"
                  id="study-title"
                  name="study-title"
                  data-info="field"
                  data-key={education.id}
                  value={education.field}
                  onChange={handleEducationalChange}
                  placeholder="Ex: Software Engineering"
                />
              </label>
            </div>

            {/* Degree and grade information */}
            <div>
              {/* Degree */}
              <label htmlFor="education-degree">
                Degree
                <input
                  type="text"
                  id="education-degree"
                  name="education-degree"
                  data-info="degree"
                  data-key={education.id}
                  value={education.degree}
                  onChange={handleEducationalChange}
                  placeholder="Ex: Bachelor’s"
                />
              </label>
              {/* Grade */}
              <label htmlFor="education-grade">
                Grade
                <input
                  type="text"
                  id="education-grade"
                  name="education-grade"
                  data-info="grade"
                  data-key={education.id}
                  value={education.grade}
                  onChange={handleEducationalChange}
                />
              </label>
            </div>

            {/* Education start date */}
            <fieldset>
              <legend>Start date</legend>
              <label htmlFor="education-start-year">
                Year
                <input
                  type="text"
                  id="education-start-year"
                  name="education-start-year"
                  data-info="startYear"
                  data-key={education.id}
                  value={education.startYear}
                  onChange={handleEducationalChange}
                />
              </label>
              <label
                htmlFor="education-start-month"
                className="education-start-month"
              >
                Month
                <select
                  type="text"
                  id="education-start-month"
                  name="education-start-month"
                  data-info="startMonth"
                  data-key={education.id}
                  value={education.startMonth}
                  onChange={handleEducationalChange}
                >
                  <option value="">Please select</option>
                  <option value="Jan.">January</option>
                  <option value="Feb.">February</option>
                  <option value="Mar.">March</option>
                  <option value="Apr.">April</option>
                  <option value="May">May</option>
                  <option value="Jun.">June</option>
                  <option value="Jul.">July</option>
                  <option value="Aug.">August</option>
                  <option value="Sep.">September</option>
                  <option value="Oct.">October</option>
                  <option value="Nov.">November</option>
                  <option value="Dec.">December</option>
                </select>
              </label>
            </fieldset>

            {/* Education end date */}
            <fieldset>
              <legend>End date</legend>
              <label htmlFor="education-end-year">
                Year
                <input
                  type="text"
                  id="education-end-year"
                  name="education-end-year"
                  data-info="endYear"
                  data-key={education.id}
                  value={education.endYear}
                  onChange={handleEducationalChange}
                />
              </label>
              <label
                htmlFor="education-end-month"
                className="education-end-month"
              >
                Month
                <select
                  type="text"
                  id="education-end-month"
                  name="education-end-month"
                  data-info="endMonth"
                  data-key={education.id}
                  value={education.endMonth}
                  onChange={handleEducationalChange}
                >
                  <option value="">Please select</option>
                  <option value="Present">Present</option>
                  <option value="Jan.">January</option>
                  <option value="Feb.">February</option>
                  <option value="Mar.">March</option>
                  <option value="Apr.">April</option>
                  <option value="May">May</option>
                  <option value="Jun.">June</option>
                  <option value="Jul.">July</option>
                  <option value="Aug.">August</option>
                  <option value="Sep.">September</option>
                  <option value="Oct.">October</option>
                  <option value="Nov.">November</option>
                  <option value="Dec.">December</option>
                </select>
                {/* A tip for selecting the right value */}
                <p className="present-comment">
                  Select &apos;Present&apos; if you are currently studying in
                  this field
                </p>
              </label>
            </fieldset>

            {/* Make the '+' button to appear just after the last form */}
            {index === educationInfo.length - 1 ? (
              // The button to add one more form
              <Button
                buttonEvent={handleEducationalAdd}
                buttonText="add"
                buttonClass="add-button green-hover fontAwesome-button"
              />
            ) : null}

            {/* The button to delete a form */}
            <Button
              buttonEvent={handleEducationalDelete}
              buttonText="delete"
              buttonClass="delete-button red-hover fontAwesome-button"
            />
          </form>
        );
      });
    }
    return null;
  }
}

// Validating prop types
EducationForm.propTypes = {
  formVisibility: PropTypes.bool,
  handleEducationalChange: PropTypes.func.isRequired,
  handleEducationalDelete: PropTypes.func.isRequired,
  handleEducationalAdd: PropTypes.func.isRequired,
  educationInfo: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string,
      study: PropTypes.string,
      degree: PropTypes.string,
      grade: PropTypes.string,
      startYear: PropTypes.string,
      startMonth: PropTypes.string,
      endYear: PropTypes.string,
      endMonth: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
};

// Creating default props
EducationForm.defaultProps = {
  formVisibility: false,
};

export default EducationForm;
