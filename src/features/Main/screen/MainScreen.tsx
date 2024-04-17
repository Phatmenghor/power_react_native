/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Shimmering from '../../../components/loading/shimer';
import MyCarousel from '../../../components/carousel/Carousel';

const {width: screenWidth} = Dimensions.get('screen');
const width = screenWidth * 0.92 - 30;
const list = new Array(10).fill(undefined).map((val, index) => ({
  id: index,
  name: 'name',
}));

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
