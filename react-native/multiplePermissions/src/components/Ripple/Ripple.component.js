import React, {useEffect, useState} from 'react';
import {Animated, Easing} from 'react-native';

const Ripple = ({
  duration = 1000,
  maxOpacity = 0.01,
  delay = 0,
  size,
  loop = true,
  ...props
}) => {
  const [animatedValue] = useState(new Animated.Value(0));

  const animatedStyles = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, maxOpacity],
    }),
  };

  useEffect(() => {
    const animation = Animated.timing(animatedValue, {
      toValue: 1,
      duration,
      easing: Easing.bezier(0.0, 0.0, 0.2, 1),
      useNativeDriver: true,
      delay,
    });
    (loop ? Animated.loop(animation) : animation).start();
  }, [animatedValue, delay, duration, loop]);

  return (
    <Animated.View
      {...props}
      style={[
        props?.style,
        {width: size, height: size, borderRadius: size / 2},
        animatedStyles,
      ]}
    />
  );
};

export default Ripple;
