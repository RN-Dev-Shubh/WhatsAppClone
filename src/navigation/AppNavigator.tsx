import {View, SafeAreaView, StatusBar} from 'react-native';
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
      <StatusBar backgroundColor={'#4DABF5'} />
      <SafeAreaView style={{flex: 1, backgroundColor: '#4DABF5'}}>
        <View style={{zIndex: 9999}}>
          <Toast />
        </View>
        <Stack.Navigator initialRouteName="SignUp">
          <Stack.Screen
            name="Login"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="Home"
            component={SignUp}
            options={{headerShown: false}}
          /> */}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppNavigator;
