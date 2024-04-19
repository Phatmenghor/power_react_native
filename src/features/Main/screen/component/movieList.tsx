import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Label, RowCenter} from '../../../../utils/itemRN';
import FastImageView from '../../../../components/image/FastImageView';
import styles from '../MainStyles';

interface MovieListProps {
  title?: string;
  movieName?: string;
}
const MovieList = ({
  title = 'Upcoming',
  movieName = 'Movie',
}: MovieListProps) => {
  const data = ['', '', ''];
  return (
    <View>
      <RowCenter className="justify-between mx-4 mt-4">
        <Label>{title}</Label>
        <TouchableOpacity>
          <Label>See all</Label>
        </TouchableOpacity>
      </RowCenter>
      <RowCenter>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {data.map((_, index) => {
            return (
              <TouchableWithoutFeedback>
                <View className="mr-4 mt-4">
                  <FastImageView
                    imageUrl={`https://picsum.photos/200/300?random=${index}`}
                    style={styles.imageList}
                  />
                  <Label className="text-[12px] mt-1">
                    {movieName.length > 14
                      ? movieName.slice(0, 14) + '...'
                      : movieName}
                  </Label>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </ScrollView>
      </RowCenter>
    </View>
  );
};

export default MovieList;
