import {Dimensions, Platform} from 'react-native';
import keyStore from './keyStore';

export default class screenSize {
  static isIOS = () => Platform.OS === keyStore.ios;
  static isAndroid = () => Platform.OS === keyStore.android;
  static screenWidth = () => Dimensions.get('window').width;
  static screenHeight = () => Dimensions.get('window').height;
}
