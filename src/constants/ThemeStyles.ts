import {Dimensions, Platform} from 'react-native';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

export default {
  isTablet: DeviceWidth > 600,
  DeviceWidth,
  DeviceHeight,
  colors: {
    BLUE: '#064D7B',
    LIGHTBLUE: '#148fd5',
    DARKBG: '#111827',

    NAVYBLUE: '#2E3D51',

    WHITE: '#FFFFFF',
    OFFWHITE: '#A4ACBA',

    BLACK: '#000000',
    LIGHTBLACK: '#464646',

    PLACEHOLDER: '#AEAEAE',
    LABEL: '#1F1F1F',

    GREEN: '#627945',
    LIGHTGREEN: '#92AE6D',

    GRAY: '#808080',
    LIGHTGRAY: '#F5F5F5',
  },
  fontSize: {
    xs: 10,
    s: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    xxxl: 22,
    heading: 26,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  lightShadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1.5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
};
