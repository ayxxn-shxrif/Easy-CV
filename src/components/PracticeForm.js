// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import Button from './Button';

// Styling imports
import '../styles/PracticeForm.css';

class PracticeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      formVisibility,
      handlePracticalChange,
      handlePracticalDelete,
      handlePracticalAdd,
      practiceInfo,
    } = this.props;

    // If a practice form is clicked to be visible
    if (formVisibility) {
      // If there are no forms created yet
      if (practiceInfo.length === 0) {
        return (
          <form className="add-practice-form">
            {/* The button to add the first practice form */}
            <Button
              buttonEvent={handlePracticalAdd}
              buttonText="add"
              buttonClass="add-first-form-button green-hover fontAwesome-button"
            />
          </form>
        );
      }

      // Show existing practice form(s)
      return practiceInfo.map((practice, index) => {
        return (
          <form
            key={practice.id}
            data-id={practice.id}
            className="practice-form"
          >
            {/* Company information */}
            <div>
              {/* Position title */}
              <label htmlFor="position-title">
                Title
                <input
                  type="text"
                  id="position-title"
                  name="position-title"
                  data-info="title"
                  data-key={practice.id}
                  value={practice.title}
                  onChange={handlePracticalChange}
                  placeholder="Ex: Front-End Web Developer"
                />
              </label>
              {/* Company name */}
              <label htmlFor="company-name">
                Company name
                <input
                  type="text"
                  id="company-name"
                  name="company-name"
                  data-info="company"
                  data-key={practice.id}
                  value={practice.company}
                  onChange={handlePracticalChange}
                  placeholder="Ex: Tesonet"
                />
              </label>
            </div>

            {/* Main task and employment type */}
            <div className="task-and-type">
              {/* Main task */}
              <label htmlFor="main-task">
                Main task
                <input
                  type="text"
                  id="main-task"
                  name="main-task"
                  data-info="task"
                  data-key={practice.id}
                  value={practice.task}
                  onChange={handlePracticalChange}
                  placeholder="Ex: Maintaining user interface"
                />
              </label>
              {/* Employment type */}
              <label htmlFor="employment-type" className="employment-label">
                Employment type
                <select
                  type="text"
                  id="employment-type"
                  name="employment-type"
                  data-info="type"
                  data-key={practice.id}
                  value={practice.type}
                  onChange={handlePracticalChange}
                >
                  <option value="">Please select</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Temporary">Temporary</option>
                  <option value="Internship">Internship</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>

            {/* Practice start date */}
            <fieldset>
              <legend>Start date</legend>
              <label htmlFor="practice-start-year">
                Year
                <input
                  type="text"
                  id="practice-start-year"
                  name="practice-start-year"
                  data-info="startYear"
                  data-key={practice.id}
                  value={practice.startYear}
                  onChange={handlePracticalChange}
                />
              </label>
              <label
                htmlFor="practice-start-month"
                className="practice-start-month"
              >
                Month
                <select
                  type="text"
                  id="practice-start-month"
                  name="practice-start-month"
                  data-info="startMonth"
                  data-key={practice.id}
                  value={practice.startMonth}
                  onChange={handlePracticalChange}
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

            {/* Practice end date */}
            <fieldset>
              <legend>End date</legend>
              <label htmlFor="practice-end-year">
                Year
                <input
                  type="text"
                  id="practice-end-year"
                  name="practice-end-year"
                  data-info="endYear"
                  data-key={practice.id}
                  value={practice.endYear}
                  onChange={handlePracticalChange}
                />
              </label>
              <label
                htmlFor="practice-end-month"
                className="practice-end-month"
              >
                Month
                <select
                  type="text"
                  id="practice-end-month"
                  name="practice-end-month"
                  data-info="endMonth"
                  data-key={practice.id}
                  value={practice.endMonth}
                  onChange={handlePracticalChange}
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
                  Select &apos;Present&apos; if you are currently working in
                  this position
                </p>
              </label>
            </fieldset>

            {/* Make the '+' button to appear just after the last form */}
            {index === practiceInfo.length - 1 ? (
              // The button to add one more form
              <Button
                buttonEvent={handlePracticalAdd}
                buttonText="add"
                buttonClass="add-button green-hover fontAwesome-button"
              />
            ) : null}

            {/* The button to delete a form */}
            <Button
              buttonEvent={handlePracticalDelete}
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
PracticeForm.propTypes = {
  formVisibility: PropTypes.bool,
  handlePracticalChange: PropTypes.func.isRequired,
  handlePracticalDelete: PropTypes.func.isRequired,
  handlePracticalAdd: PropTypes.func.isRequired,
  practiceInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      company: PropTypes.string,
      task: PropTypes.string,
      type: PropTypes.string,
      startYear: PropTypes.string,
      startMonth: PropTypes.string,
      endYear: PropTypes.string,
      endMonth: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
};

// Creating default props
PracticeForm.defaultProps = {
  formVisibility: false,
};

export default PracticeForm;
