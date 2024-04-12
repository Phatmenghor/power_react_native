import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import colors from '../constants/colors';
import keyIcon from '../constants/keyIcon';

interface IconProps {
  name: string;
  size: number;
  color?: string;
  type?: string;
  iconStyle?: any;
}

const IconUtil: React.FC<IconProps> = ({
  name,
  size,
  color = colors.primaryColor,
  type = keyIcon.material,
  iconStyle,
}) => {
  switch (type) {
    case keyIcon.material:
      return <MIcon name={name} size={size} color={color} style={iconStyle} />;
    case keyIcon.antDesign:
      return (
        <AntDesign name={name} size={size} color={color} style={iconStyle} />
      );
    case keyIcon.fontawsome:
      return (
        <FontAwesome name={name} size={size} color={color} style={iconStyle} />
      );
    case keyIcon.foundation:
      return (
        <Foundation name={name} size={size} color={color} style={iconStyle} />
      );
    case keyIcon.ionIcon:
      return (
        <IonIcon name={name} size={size} color={color} style={iconStyle} />
      );
    case keyIcon.fontawsome5:
      return (
        <FontAwesome5 name={name} size={size} color={color} style={iconStyle} />
      );
    case keyIcon.octicons:
      return (
        <Octicons name={name} size={size} color={color} style={iconStyle} />
      );
    case keyIcon.entypo:
      return <Entypo name={name} size={size} color={color} style={iconStyle} />;
    case keyIcon.materialCommunity:
      return (
        <MaterialCommunity
          name={name}
          size={size}
          color={color}
          style={iconStyle}
        />
      );
    case keyIcon.feather:
      return (
        <Feather name={name} size={size} color={color} style={iconStyle} />
      );
    case keyIcon.materialIcon:
      return (
        <MaterialIcons
          name={name}
          size={size}
          color={color}
          style={iconStyle}
        />
      );
    case keyIcon.evilIcons:
      return (
        <EvilIcons name={name} size={size} color={color} style={iconStyle} />
      );
    case keyIcon.simpleLineIcons:
      return (
        <SimpleLineIcons
          name={name}
          size={size}
          color={color}
          style={iconStyle}
        />
      );
    case keyIcon.zocial:
      return <Zocial name={name} size={size} color={color} style={iconStyle} />;
    default:
      return null;
  }
};

export default IconUtil;
