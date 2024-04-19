import React from 'react';
import SnowingAnimation from '../../../components/background/Snowflake';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import IconUtil from '../../../utils/iconUtil';
import keyIcon from '../../../constants/keyIcon';
import theme from '../../../constants/theme';
import {Column, Label, RowCenter} from '../../../utils/itemRN';
import CarouselMain from '../../../components/carousel/Carousel';
import {SizeBoxHeight} from '../../../utils/sizeBox';
import MovieList from './component/movieList';

function MainScreen() {
  return (
    <SnowingAnimation>
      <SafeAreaView className="flex-1 z-10">
        {/* Header */}
        <RowCenter className="justify-between mx-[16px]">
          <TouchableOpacity>
            {IconUtil({
              type: keyIcon.fontawsome5,
              name: 'align-left',
              size: 20,
              color: theme.colors.white,
            })}
          </TouchableOpacity>
          <Label className="font-bold text-[24px] text-white">
            <Label className="font-bold text-[24px] text-[#F34C30]">M</Label>
            ovie
          </Label>
          <TouchableOpacity>
            {IconUtil({
              type: keyIcon.materialIcon,
              name: 'person-search',
              size: 28,
              color: theme.colors.white,
            })}
          </TouchableOpacity>
        </RowCenter>

        {/* Sider */}
        <SizeBoxHeight height={32} />
        <ScrollView>
          <CarouselMain />

          {/* Movie List  */}
          <MovieList title="Up cming" />
        </ScrollView>
      </SafeAreaView>
    </SnowingAnimation>
  );
}

export default MainScreen;
