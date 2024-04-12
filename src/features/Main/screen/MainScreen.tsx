/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Shimmering from '../../../components/loading/shimer';
import CachedImage from '../../../components/image/FastImageView';
import axios from 'axios';

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
  const [fetching, setFetching] = useState(true);
  const [photos, setPhotos] = useState<Photo[]>([]);

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

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );
      // setPhotos(response);
      console.log('### res', response);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={fetchPhotos}
        className="h-[55px] bg-yellow-400 items-center justify-center mx-8 rounded-md">
        <Text className="font-bold text-[24px]">FetchData</Text>
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        <View
          className="w-full "
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text className="text-blue-500 ">Hello React Native</Text>
          <CachedImage
            imageUrl="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
            style={styles.image}
            resizeMode="cover"
          />
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
