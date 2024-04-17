/* eslint-disable react-hooks/exhaustive-deps */
import React, {ReactNode, useEffect, useRef} from 'react';
import {View, Animated, StyleSheet, Easing, Dimensions} from 'react-native';
import theme from '../../constants/theme';

interface SnowingAnimationProps {
  children?: ReactNode;
}

const Snowflake: React.FC<{duration: number; size: number; delay: number}> = ({
  duration,
  size,
  delay,
}) => {
  const position = useRef(new Animated.Value(-size)).current; // Start from above the screen
  const {width} = Dimensions.get('window');
  const randomX = Math.random() * width;
  const {height} = Dimensions.get('window');
  const translateY = position.interpolate({
    inputRange: [-size, height + size],
    outputRange: [-size, height + size],
  });
  const scale = Math.random() * 0.8 + 0.2; // Random scale between 0.2 and 1
  const opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1

  useEffect(() => {
    const animatedLoop = Animated.loop(
      Animated.timing(position, {
        toValue: height + size,
        duration,
        easing: Easing.linear,
        delay,
        useNativeDriver: true,
      }),
    );

    animatedLoop.start();

    return () => {
      animatedLoop.stop();
    };
  }, []);

  return (
    <Animated.View
      style={[
        styles.snowflake,
        {
          width: size * scale,
          height: size * scale,
          transform: [{translateX: randomX}, {translateY}],
          opacity,
        },
      ]}
    />
  );
};

const SnowingAnimation: React.FC<SnowingAnimationProps> = ({children}) => {
  const SNOWFLAKE_COUNT = 50;
  const SNOWFLAKE_SIZE = 5;
  const FALL_DURATION = 5000; // milliseconds

  return (
    <View style={styles.container}>
      {children}
      {[...Array(SNOWFLAKE_COUNT)].map((_, index) => (
        <Snowflake
          key={index}
          duration={FALL_DURATION}
          size={SNOWFLAKE_SIZE}
          delay={Math.random() * FALL_DURATION}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: theme.colors.primary,
  },
  snowflake: {
    position: 'absolute',
    backgroundColor: theme.colors.white,
    borderRadius: 999,
  },
});

export default SnowingAnimation;
