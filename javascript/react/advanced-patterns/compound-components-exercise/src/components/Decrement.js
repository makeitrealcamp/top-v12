import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "./styles.js";
import PropTypes from 'prop-types';

const Decrement = ({ decrement, disabled }) => {
  return (
    <StyledButton onClick={decrement} disabled={disabled}>
      <FontAwesomeIcon icon="minus" color="#17a2b8" />
    </StyledButton>
  );
};

Decrement.propTypes = {
  decrement: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Decrement;
