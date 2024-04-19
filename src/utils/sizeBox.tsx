import React from 'react';
import {View} from 'react-native';

interface heightProps {
  height: number;
}

interface widthProps {
  width: number;
}

export const SizeBoxWidth = ({width = 16}: widthProps) => {
  return <View style={{width: width}} />;
};

export const SizeBoxHeight = ({height = 16}: heightProps) => {
  return <View style={{height: height}} />;
};
