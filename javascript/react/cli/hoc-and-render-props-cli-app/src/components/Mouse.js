import React, { useState, useCallback } from 'react';

const Mouse = ({ render }) => {
  const [ x, setX ] = useState(0);
  const [y, setY ] = useState(0);

  const handleMouseMove = useCallback((event) => {
    setX(event.clientX);
    setY(event.clientY);
  }, []);

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
        {render({x, y})}
    </div>
  );
}

export default Mouse;

