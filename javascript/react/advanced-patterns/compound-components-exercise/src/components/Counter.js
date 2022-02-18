import React, { useState } from 'react';
import styled from "styled-components";
import Count from './Count';
import Decrement from './Decrement';
import Increment from './Increment';
import PropTypes from 'prop-types';

const Counter = ({
  min,
  max,
  decrement: decrementProps,
  increment: incrementProps,
  count: countProps,
}) => {
  const [count, setCount] = useState(min ?? 0);

  const decrement = () => setCount((count) => Math.max(min ?? 0, count - 1));

  const increment = () =>
    setCount((count) => Math.min(max ?? Number.MAX_SAFE_INTEGER, count + 1));

  return (
    <StyledCounter>
      <Decrement
        {...decrementProps}
        decrement={decrement}
        disabled={count === min}
      />
      <Count {...countProps} count={count} />
      <Increment
        {...incrementProps}
        increment={increment}
        disabled={count === max}
      />
    </StyledCounter>
  );
};

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
`;

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  count: PropTypes.shape({
    style: PropTypes.object,
  }),
};

export default Counter;
