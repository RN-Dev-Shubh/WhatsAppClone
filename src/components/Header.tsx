import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const AntIcon = require('react-native-vector-icons/AntDesign').default;

const Header = ({heading}: any) => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home'); // Redirect to a fallback screen
    }
  };
  return (
    <>
      <Pressable
        onPress={handleBackPress}
        style={{position: 'absolute', top: 15, left: 15, zIndex: 99}}>
        <AntIcon name="left" size={25} color={'#FFFFFF'} />
      </Pressable>
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
