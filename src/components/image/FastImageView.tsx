import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, Animated} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import images from '../../constants/images';

interface FastImageWithLoadingAndErrorHandlingProps {
  imageUrl: string;
  style?: any;
  resizeMode?: FastImageProps['resizeMode'];
  placeholderSource?: any;
}

const FastImageView: React.FC<FastImageWithLoadingAndErrorHandlingProps> = ({
  imageUrl,
  style,
  resizeMode = 'cover',
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageScaleValue] = useState(new Animated.Value(0));

  const handleLoadStart = () => {
    setLoading(true);
    setError(false);
  };

  const handleLoadEnd = () => {
    Animated.timing(imageScaleValue, {
      toValue: 1,
      duration: 300,
      delay: 5,
      useNativeDriver: true,
    }).start();
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loadingContainer}>
          <Image
            style={[styles.image, style]}
            source={images.hun}
            resizeMode="cover"
          />
        </View>
      )}
      {error && (
        <View style={[styles.errorContainer, style]}>
          <Text style={styles.errorText}>Error loading image!</Text>
        </View>
      )}
      <Animated.View style={{opacity: imageScaleValue}}>
        <FastImage
          style={[styles.image, style]}
          source={{uri: imageUrl}}
          resizeMode={resizeMode}
          onLoadStart={handleLoadStart}
          onLoadEnd={handleLoadEnd}
          onError={handleError}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  errorContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
  },
  errorText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default FastImageView;
