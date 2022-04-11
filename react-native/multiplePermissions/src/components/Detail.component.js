import React, {useState, useCallback, useEffect, useRef} from 'react';
import VoiceRoundedWaves from '../assets/icons/VoiceRoundedWaves';
import Ripple from '../components/Ripple';
import Voice from '@react-native-voice/voice';
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

const VOICELESS_TIME = 1000;

export default function DetailsScreen({route, navigation}) {
  const timeoutRef = useRef(null);
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [scale, setScale] = useState(new Animated.Value(0));
  const [voiceTerm, setVoiceTerm] = useState(null);
  const [voiceActive, setVoiceActive] = useState(false);
  const {width, height} = Dimensions.get('window');
  const size = Math.min(width, height) - 1;
  const {itemId, description} = route.params;

  useEffect(() => {
    if (!voiceActive) {
      return;
    }
    let valid = true;

    Voice.onSpeechPartialResults = ({value}) => {
      if (valid && value) {
        const result = value[0];
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setVoiceTerm(result);
          setVoiceActive(false);
        }, VOICELESS_TIME);
      }
    };

    Voice.start('es-MX').catch(error => {
      if (valid) {
        console.warn('error', error);
        setVoiceActive(false);
      }
    });

    return () => {
      valid = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      Voice.removeAllListeners();
      Voice.destroy();
    };
  }, [voiceActive]);

  const handleBtnClicked = useCallback(() => {
    setIsBtnClicked(true);
    setVoiceActive(true);
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
              <View style={styles.speechIconWrapper}>
                <Ripple size={265} delay={100} style={styles.rippleRounded} />
                <Ripple size={200} delay={120} style={styles.rippleRounded} />
                <VoiceRoundedWaves
                  width={130}
                  height={130}
                  fill="white"
                  color="#52c852"
                />
              </View>
              <Text style={styles.text}>{voiceTerm}</Text>
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
  voiceIcon: {
    marginRight: 8,
  },
  rippleRounded: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    position: 'absolute',
  },
  speechIconWrapper: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});
