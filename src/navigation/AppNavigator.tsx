import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();
const AppNavigator = () => {
  useEffect(() => {
    Toast.show({
      text1: 'App Opend!',
    });
  }, []);
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <View style={{zIndex: 9999}}>
          <Toast />
        </View>
        <Stack.Navigator initialRouteName="SignUP">
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUP"
            component={SignUp}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppNavigator;
