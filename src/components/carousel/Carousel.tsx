import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

interface CarouselItem {
  title: string;
  text: string;
}

const MyCarousel = () => {
  const carouselItems: CarouselItem[] = [
    {title: 'Item 1', text: 'Text 1'},
    {title: 'Item 2', text: 'Text 2'},
    {title: 'Item 3', text: 'Text 3'},
  ];

  const renderItem = ({item}: {item: CarouselItem}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <Carousel
      data={carouselItems}
      renderItem={renderItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth - 60}
      autoplay={true}
      autoplayInterval={1000}
      loop={true}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    padding: 20,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
});

export default MyCarousel;
