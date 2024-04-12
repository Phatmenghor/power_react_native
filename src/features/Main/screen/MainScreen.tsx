/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Shimmering from '../../../components/loading/shimer';
import CachedImage from '../../../components/image/FastImageView';
import axios from 'axios';
import images from '../../../constants/images';
import MyCarousel from '../../../components/carousel/Carousel';

const {width: screenWidth} = Dimensions.get('screen');
const width = screenWidth * 0.92 - 30;
const list = new Array(10).fill(undefined).map((val, index) => ({
  id: index,
  name: 'name',
}));

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: number;
}

function MainScreen() {
  const renderList = () => {
    return list.map((val, index) => (
      <React.Fragment key={index}>
        <View style={styles.profileWrapper}>
          <Shimmering
            wrapperStyle={{width: 60, height: 60, borderRadius: 30}}
          />
          <View style={styles.profile}>
            <Shimmering
              wrapperStyle={{
                width: width * 0.5,
                height: 25,
                borderRadius: 5,
              }}
            />
            <Shimmering
              wrapperStyle={{
                width: width * 0.9,
                height: 30,
                borderRadius: 5,
                marginTop: 4,
              }}
            />
          </View>
        </View>
        <View style={styles.postWrapper}>
          <Shimmering
            wrapperStyle={{
              borderRadius: 10,
              width: width * 1.12,
              height: 100,
            }}
          />
        </View>
      </React.Fragment>
    ));
  };

  const dataTest = Array.from({length: 100}, (_, index) => ({
    key: String(index),
  }));

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          className="w-full "
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text className="text-blue-500 ">Hello React Native</Text>
          {/* {dataTest.length > 1 &&
            dataTest.map((item, index) => (
              <CachedImage
                key={index}
                imageUrl={`https://picsum.photos/200/300?random=${item.key}`}
                style={styles.image}
                resizeMode="cover"
              />
            ))} */}
          <MyCarousel />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 10,
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    marginHorizontal: 10,
  },
  postWrapper: {
    marginVertical: 10,
  },
});

export default MainScreen;
