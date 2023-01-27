// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import InfoTitle from './InfoTitle';
import PracticeForm from './PracticeForm';

class PracticeInfo extends React.Component {
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
      handlePracticalChange,
      handlePracticalDelete,
      handlePracticalAdd,
      practiceInfo,
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

        <PracticeForm
          formVisibility={formVisibility}
          handlePracticalChange={handlePracticalChange}
          handlePracticalDelete={handlePracticalDelete}
          handlePracticalAdd={handlePracticalAdd}
          practiceInfo={practiceInfo}
        />
      </div>
    );
  }
}

// Validating prop types
PracticeInfo.propTypes = {
  formType: PropTypes.string,
  title: PropTypes.string,
  border: PropTypes.string,
  hover: PropTypes.string,
  formVisibility: PropTypes.bool,
  handleFormDisplay: PropTypes.func.isRequired,
  handlePracticalChange: PropTypes.func.isRequired,
  handlePracticalDelete: PropTypes.func.isRequired,
  handlePracticalAdd: PropTypes.func.isRequired,
  practiceInfo: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

// Creating default props
PracticeInfo.defaultProps = {
  formType: 'practice',
  title: 'PRACTICAL EXPERIENCE',
  border: 'orange-border',
  hover: 'orange-hover',
  formVisibility: false,
};

export default PracticeInfo;
