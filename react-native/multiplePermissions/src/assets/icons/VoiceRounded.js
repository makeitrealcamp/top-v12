import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgVoiceRounded(props, svgRef) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      fill="#fff"
      ref={svgRef}
      {...props}
    >
      <Path d="M1024 512c0 282.77-229.23 512-512 512S0 794.77 0 512 229.23 0 512 0s512 229.23 512 512z" />
      <Path
        fill="currentColor"
        d="M581.888 478.528c-.416.8-41.008 75.888-103.776 103.088l-.032-.016c-16.256 5.81-35.009 9.168-54.547 9.168h-.318.016c-44.736 0-86.72-17.392-118.256-48.928-65.296-65.36-65.296-171.536 0-236.704C335.119 274.786 376.873 256 423.015 256h.346-.018c44.72 0 86.816 17.504 118.464 49.12 30.255 30.283 48.966 72.104 48.966 118.295 0 19.609-3.372 38.43-9.568 55.915l.362-1.171.32.368zM753.76 666.64c19.856 24.096 18.832 60.8-2.368 83.568-9.971 10.91-24.247 17.741-40.119 17.792h-.009c-14.635-.065-27.902-5.864-37.682-15.265l.018.017L512 598.912c51.568-29.392 86.336-85.76 97.92-106.608l11.184 13.568 10.144-10.896 30.88 33.152-12.016 12.896L753.76 666.64z"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgVoiceRounded);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
