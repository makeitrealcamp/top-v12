import React from 'react';
import { StyledButton } from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

const Increment = ({ increment, size, disabled }) => {
  return (
    <StyledButton onClick={increment} disabled={disabled}>
      <FontAwesomeIcon icon="plus" color="#17a2b8" />
    </StyledButton>
  );
};

Increment.propTypes = {
  increment: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Increment;
