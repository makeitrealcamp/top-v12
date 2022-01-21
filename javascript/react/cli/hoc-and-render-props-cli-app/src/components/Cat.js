import React from 'react';

export default function Cat ({ mouse }) {
  return (
    <img src="/cat.jpeg" style={{ width: '300px', position: 'absolute', left: mouse.x, top: mouse.y }} alt="" />
  );
}

