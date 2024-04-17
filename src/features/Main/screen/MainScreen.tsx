/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import SnowingAnimation from '../../../components/background/Snowflake';
import {SafeAreaView} from 'react-native';
import IconUtil from '../../../utils/iconUtil';
import keyIcon from '../../../constants/keyIcon';
import theme from '../../../constants/theme';

function MainScreen() {
  return (
    <SnowingAnimation>
      <SafeAreaView className="flex-1">
        {IconUtil({
          type: keyIcon.fontawsome5,
          name: 'align-left',
          size: 20,
          color: theme.colors.white,
        })}
      </SafeAreaView>
    </SnowingAnimation>
  );
}

export default MainScreen;
