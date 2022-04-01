import React, {useState, useCallback} from 'react';
import BounceIn from '../components/Animations/BounceIn.component';
import {
  View,
  Text,
  Button,
  Animated,
  StyleSheet,
  Dimensions,
  Easing,
} from 'react-native';

export default function DetailsScreen({route, navigation}) {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [scale, setScale] = useState(new Animated.Value(0));
  const {width, height} = Dimensions.get('window');
  const size = Math.min(width, height) - 1;
  const {itemId, description} = route.params;

  const handleBtnClicked = useCallback(() => {
    setIsBtnClicked(true);
    Animated.timing(scale, {
      toValue: 4,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  const getLeftPosition = () => {
    const halfSize = size / 2;
    const marginHorizontalTopLeft = -halfSize;
    return marginHorizontalTopLeft + width;
  };

  const getTopPosition = () => {
    const halfSize = size / 2;
    const halfHeight = height / 2;
    const marginVerticalTopLeft = -halfSize;
    return marginVerticalTopLeft + halfHeight;
  };

  const topPosition = getTopPosition();
  const leftPosition = getLeftPosition();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen {`${description + itemId}`}</Text>
      <Button title="Go back to Home" onPress={() => navigation.goBack()} />
      <Button title="Show animation" onPress={handleBtnClicked} />
      {isBtnClicked && (
        <>
          <View
            style={{...StyleSheet.absoluteFillObject, ...styles.wrapperText}}>
            <BounceIn delay={300}>
              <Text style={styles.text}>Animation running </Text>
            </BounceIn>
          </View>
          <Animated.View
            style={{
              ...styles.circleTransition,
              top: topPosition,
              left: leftPosition,
              width: size,
              height: size,
              borderRadius: size / 2,
              transform: [
                {
                  scale: scale,
                },
              ],
            }}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperText: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '40%',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    zIndex: 10,
  },
  text: {
    color: 'white',
    fontSize: 32,
  },
  circleTransition: {
    position: 'absolute',
    backgroundColor: '#1D2F65',
  },
});
