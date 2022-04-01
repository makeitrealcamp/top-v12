import React, {useEffect, useMemo, useState} from 'react';
import {Animated} from 'react-native';

const animatedOptions = {
  toValue: 1,
  speed: 5,
  bounciness: 8,
  useNativeDriver: true,
};

const BounceIn = ({
  delay = 300,
  initialSize = 0,
  disabled,
  style,
  children,
  ...props
}) => {
  const bounceInTransform = useBounceInTransform(delay, initialSize);

  const animatedStyles = useMemo(
    () =>
      disabled
        ? undefined
        : {
            transform: [bounceInTransform],
          },
    [disabled, bounceInTransform],
  );

  return (
    <Animated.View {...props} style={[style, animatedStyles]}>
      {children}
    </Animated.View>
  );
};

export function useBounceInTransform(delay = 300, initialSize) {
  const [scale] = useState(() => new Animated.Value(0));

  useEffect(() => {
    const animation = Animated.spring(scale, {...animatedOptions, delay});
    animation.start();
    return () => animation.stop();
  }, [delay, scale]);

  return useMemo(
    () => ({
      scale: scale.interpolate({
        inputRange: [0, 1],
        outputRange: [initialSize, 1],
      }),
    }),
    [scale, initialSize],
  );
}

export default BounceIn;
