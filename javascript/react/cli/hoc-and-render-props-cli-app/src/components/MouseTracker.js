import React from "react";
import Cat from "./Cat";
import Mouse from "./Mouse";

export default function MouseTracker() {
  return <Mouse render={(mouse) => <Cat mouse={mouse} />} />;
}
