import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, ActivityIndicator} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import images from '../../constants/images';

interface FastImageWithLoadingAndErrorHandlingProps {
  imageUrl: string;
  style?: any;
  resizeMode?: FastImageProps['resizeMode'];
  placeholderSource?: any;
}

const FastImageWithLoadingAndErrorHandling: React.FC<
  FastImageWithLoadingAndErrorHandlingProps
> = ({imageUrl, style, resizeMode = 'cover', placeholderSource}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoadStart = () => {
    setLoading(true);
    setError(false);
  };

  const handleLoadEnd = () => {
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
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error loading image!</Text>
        </View>
      )}
      <FastImage
        style={[styles.image, style]}
        source={{uri: imageUrl}}
        resizeMode={resizeMode}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
      />
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

export default FastImageWithLoadingAndErrorHandling;
