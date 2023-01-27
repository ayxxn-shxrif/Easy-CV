// Packages imports
import React from 'react';
import uniqid from 'uniqid';

// Components imports
import Button from './Button';
import EditCV from './EditCV';
import PreviewCV from './PreviewCV';

// Styling imports
import '../styles/Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formDisplay: {
        isPersonalFormDisplayed: true,
        isPracticeFormDisplayed: false,
        isEducationFormDisplayed: false,
        isSkillsFormDisplayed: false,
      },
      editMode: true,
      skill: {
        text: '',
        index: 0,
        id: uniqid(),
      },
      error: false,
      cvInfo: {
        personal: {
          name: '',
          professionalTitle: '',
          phone: '',
          email: '',
          linkedin: '',
          github: '',
          about: '',
        },
        skills: [],
        practice: [
          {
            title: '',
            company: '',
            task: '',
            type: '',
            startYear: '',
            startMonth: '',
            endYear: '',
            endMonth: '',
            id: uniqid(),
          },
        ],
        education: [
          {
            school: '',
            field: '',
            degree: '',
            grade: '',
            startYear: '',
            startMonth: '',
            endYear: '',
            endMonth: '',
            id: uniqid(),
          },
        ],
      },
    };
  }

  // GENERAL HANDLING OF FORMS
  // A function to show a certain form when it's 'eye' button is clicked
  handleFormDisplay = (e) => {
    const formType =
      e.target.parentElement.parentElement.getAttribute('data-form');

    // Display/hide a personal form
    if (formType === 'personal') {
      this.setState((prevState) => ({
        formDisplay: {
          ...prevState.formDisplay,
          isPersonalFormDisplayed:
            !prevState.formDisplay.isPersonalFormDisplayed,
        },
      }));

      // Display/hide skills form
    } else if (formType === 'skills') {
      this.setState((prevState) => ({
        formDisplay: {
          ...prevState.formDisplay,
          isSkillsFormDisplayed: !prevState.formDisplay.isSkillsFormDisplayed,
        },
        error: false,
      }));

      // Display/hide a practice form
    } else if (formType === 'practice') {
      this.setState((prevState) => ({
        formDisplay: {
          ...prevState.formDisplay,
          isPracticeFormDisplayed:
            !prevState.formDisplay.isPracticeFormDisplayed,
        },
      }));

      // Display/hide an education form
    } else if (formType === 'education') {
      this.setState((prevState) => ({
        formDisplay: {
          ...prevState.formDisplay,
          isEducationFormDisplayed:
            !prevState.formDisplay.isEducationFormDisplayed,
        },
      }));
    }
  };

  // HANDLING OF MODE
  // A function to change mode of content when the main button is clicked
  handleMode = () => {
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  };

  // HANDLING OF PERSONAL INFORMATION
  // A function to handle changes in inputs fields of a personal form
  handlePersonalChange = (e) => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        personal: {
          ...prevState.cvInfo.personal,
          [e.target.getAttribute('data-info')]: e.target.value,
        },
      },
    }));
  };

  // HANDLING OF SKILLS INFORMATION
  // A function to handle changes in the input field of skills form
  handleSkillsChange = (e) => {
    this.setState((prevState) => ({
      skill: {
        ...prevState.skill,
        text: e.target.value,
      },
    }));
  };

  // A function to handle addition of a skill
  handleSkillAdd = (e) => {
    // If a value of the input is empty - show an error after clicking '+' button
    if (
      e.target.parentElement.firstElementChild.firstElementChild.value === ''
    ) {
      this.setState(() => ({
        error: true,
      }));

      // If a value of the input isn't empty - show added skill after clicking '+' button
    } else {
      this.setState((prevState) => ({
        cvInfo: {
          ...prevState.cvInfo,
          skills: [...prevState.cvInfo.skills].concat(prevState.skill),
        },
        skill: {
          text: '',
          index: prevState.skill.index + 1,
          id: uniqid(),
        },
        error: false,
      }));
    }
  };

  // A function to handle deletion of a skill
  handleSkillDelete = (e) => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        skills: prevState.cvInfo.skills.filter(
          (skill) => skill.id !== e.target.parentElement.getAttribute('data-id')
        ),
      },
      error: false,
    }));
  };

  // HANDLING OF PRACTICAL INFORMATION
  // A function to handle changes in the input field of a practice form
  handlePracticalChange = (e) => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        practice: prevState.cvInfo.practice.map((workplace) => {
          if (workplace.id === e.target.getAttribute('data-key')) {
            return {
              ...workplace,
              [e.target.getAttribute('data-info')]: e.target.value,
            };
          }
          return workplace;
        }),
      },
    }));
  };

  // A function to handle deletion of a practice form
  handlePracticalDelete = (e) => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        practice: prevState.cvInfo.practice.filter(
          (workplace) =>
            workplace.id !== e.target.parentElement.getAttribute('data-id')
        ),
      },
    }));
  };

  // A function to handle addition of a practice form
  handlePracticalAdd = () => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        practice: [
          ...prevState.cvInfo.practice,
          {
            title: '',
            company: '',
            task: '',
            type: '',
            startYear: '',
            startMonth: '',
            endYear: '',
            endMonth: '',
            id: uniqid(),
          },
        ],
      },
    }));
  };

  // HANDLING OF EDUCATIONAL INFORMATION
  // A function to handle changes in the input field of an education form
  handleEducationalChange = (e) => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        education: prevState.cvInfo.education.map((school) => {
          if (school.id === e.target.getAttribute('data-key')) {
            return {
              ...school,
              [e.target.getAttribute('data-info')]: e.target.value,
            };
          }
          return school;
        }),
      },
    }));
  };

  // A function to handle deletion of an education form
  handleEducationalDelete = (e) => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        education: prevState.cvInfo.education.filter(
          (school) =>
            school.id !== e.target.parentElement.getAttribute('data-id')
        ),
      },
    }));
  };

  // A function to handle addition of an education form
  handleEducationalAdd = () => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        education: [
          ...prevState.cvInfo.education,
          {
            school: '',
            field: '',
            degree: '',
            grade: '',
            startYear: '',
            startMonth: '',
            endYear: '',
            endMonth: '',
            id: uniqid(),
          },
        ],
      },
    }));
  };

  render() {
    const { formDisplay, editMode, skill, error, cvInfo } = this.state;
    const {
      handleFormDisplay,

      handleMode,

      handlePersonalChange,

      handleSkillsChange,
      handleSkillDelete,
      handleSkillAdd,

      handlePracticalChange,
      handlePracticalDelete,
      handlePracticalAdd,

      handleEducationalChange,
      handleEducationalDelete,
      handleEducationalAdd,
    } = this;

    // If the current mode of content is 'edit'
    if (editMode) {
      return (
        <main id="Main">
          {/* A button to show 'preview' mode content */}
          <Button
            buttonEvent={handleMode}
            buttonText="PREVIEW"
            buttonClass="main-button green-hover"
          />

          {/* Main 'edit' mode content */}
          <EditCV
            // Forms displaying
            handleFormDisplay={handleFormDisplay}
            personalDisplay={formDisplay.isPersonalFormDisplayed}
            practiceDisplay={formDisplay.isPracticeFormDisplayed}
            educationDisplay={formDisplay.isEducationFormDisplayed}
            skillsDisplay={formDisplay.isSkillsFormDisplayed}
            // All data from forms
            cvInfo={cvInfo}
            // Handling of the personal information
            handlePersonalChange={handlePersonalChange}
            // Handling of skills information
            handleSkillsChange={handleSkillsChange}
            handleSkillDelete={handleSkillDelete}
            handleSkillAdd={handleSkillAdd}
            // Information of a skill
            skill={skill}
            // Boolean of an error
            error={error}
            // Handling of the practice information
            handlePracticalChange={handlePracticalChange}
            handlePracticalDelete={handlePracticalDelete}
            handlePracticalAdd={handlePracticalAdd}
            // Handling of the education information
            handleEducationalChange={handleEducationalChange}
            handleEducationalDelete={handleEducationalDelete}
            handleEducationalAdd={handleEducationalAdd}
          />

          {/* The button to scroll back to top */}
          <div className="floating-container">
            <a href="#Header">
              <Button
                buttonText="up"
                buttonClass="floating-button green-hover"
              />
            </a>
          </div>
        </main>
      );
    }

    // If the current mode of content is 'preview'
    return (
      <main id="Main">
        {/* The button to show 'edit' mode content */}
        <Button
          buttonEvent={handleMode}
          buttonText="EDIT"
          buttonClass="main-button green-hover"
        />

        {/* Main 'preview' mode content */}
        <PreviewCV cvInfo={cvInfo} />

        {/* The button to scroll back to the top */}
        <div className="floating-container">
          <a href="#Header">
            <Button buttonText="up" buttonClass="floating-button green-hover" />
          </a>
        </div>
      </main>
    );
  }
}

export default Main;
