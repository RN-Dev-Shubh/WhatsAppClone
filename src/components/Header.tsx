import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
const AntIcon = require('react-native-vector-icons/AntDesign').default;

const Header = ({heading}: any) => {
  return (
    <>
      <View style={{position: 'absolute', top: 15, left: 15, zIndex: 99}}>
        <AntIcon name="left" size={25} color={'#FFFFFF'} />
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>{heading}</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4DABF5',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: 600,
  },
});
