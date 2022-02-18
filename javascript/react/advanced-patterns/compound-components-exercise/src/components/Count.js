import React from 'react';
import PropTypes from 'prop-types';

const Count = ({ count, style }) => {
  return <span style={style}>{count}</span>;
};

Count.propTypes = {
  count: PropTypes.number,
  style: PropTypes.object,
};

export default Count;
