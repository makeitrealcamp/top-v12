import React from "react";
import Mouse from './Mouse';

export default function withMouse(Component) {
  return (props) => (
    <Mouse render={mouse => (
      <Component {...props} mouse={mouse} />
    )}/>
  );
}
