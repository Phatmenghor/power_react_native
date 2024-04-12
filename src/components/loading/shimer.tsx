/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  StyleProp,
  View,
  ViewStyle,
  StyleSheet,
  LayoutChangeEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface IProps {
  colors?: Array<string>;
  gradientStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle> & {width: number; height: number};
}

const GREY = 'rgb(234, 234, 234)';

const Shimmering: React.FC<IProps> = ({
  colors,
  gradientStyle,
  wrapperStyle,
}) => {
  const [viewWidth, setViewWidth] = useState<number>(-1);
  const shimmeringAnimatedValue = useState(new Animated.Value(0))[0];

  const gradientColors = [GREY, '#fff', GREY];

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(shimmeringAnimatedValue, {
        useNativeDriver: false,
        delay: 1200,
        duration: 750,
        toValue: 1,
      }),
    ).start();
  };

  useEffect(() => {
    startAnimation();
    return () => shimmeringAnimatedValue.stopAnimation();
  }, []);

  const _onLayoutChange = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setViewWidth(width);
  };

  const _getLeftValue = () => {
    return shimmeringAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-viewWidth, viewWidth],
    });
  };

  const width = Dimensions.get('screen').width;
  const loadingStyle = {backgroundColor: GREY};
  const left = _getLeftValue();
  const flexStyle = {flex: 1};

  return (
    <View
      style={{
        width: wrapperStyle?.width ?? width,
        height: wrapperStyle?.height ?? 80,
      }}>
      <View
        style={[styles.container, loadingStyle, wrapperStyle]}
        onLayout={_onLayoutChange}>
        <Animated.View
          style={[
            {
              left,
            },
            flexStyle,
            gradientStyle,
          ]}>
          <LinearGradient
            colors={colors || gradientColors}
            start={{x: 0.3, y: 0.2}}
            end={{x: 0.8, y: 0.5}}
            style={flexStyle}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flex: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default Shimmering;
