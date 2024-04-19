import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import FastImageView from '../image/FastImageView';
import screenSize from '../../constants/screenSize';

const CarouselMain = () => {
  const carouselItems = [
    {title: 'Item 1', text: 'Text 1'},
    {title: 'Item 2', text: 'Text 2'},
    {title: 'Item 3', text: 'Text 3'},
  ];

  const renderItem = ({_, index}: any) => {
    return (
      <TouchableWithoutFeedback>
        <FastImageView
          imageUrl={`https://picsum.photos/200/300?random=${index}`}
          style={styles.image}
        />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Carousel
      data={carouselItems}
      renderItem={renderItem}
      sliderWidth={screenSize.screenWidth()}
      itemWidth={screenSize.screenWidth() * 0.62}
      firstItem={1}
      inactiveSlideOpacity={0.6}
      slideStyle={styles.slide}
      autoplay={true}
      autoplayInterval={3000}
      loop={true}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: screenSize.screenWidth() * 0.6,
    height: 300,
    position: 'relative',
    borderRadius: 16,
  },
});

export default CarouselMain;
