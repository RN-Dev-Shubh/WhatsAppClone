import React, {useState} from 'react';
import {
  View,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Header from '../../components/Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {CommonActions, useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();

  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to validate email
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  // Handle submit button click
  const handleSubmit = () => {
    const emailError = !email
      ? 'Email is required!'
      : !validateEmail(email)
      ? 'Please enter a valid email!'
      : '';

    if (emailError) {
      setError(emailError);
    } else {
      setError('');
      // Perform further actions, such as API calls
      Alert.alert('Success', 'You have successfully signed in!');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Header heading="Login" />
      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps="always"
        extraScrollHeight={Platform.select({android: 100, ios: 0})}>
        <ScrollView
          contentContainerStyle={{marginBottom: 50}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always">
          <View
            style={{
              gap: 10,
              alignItems: 'center',
              marginTop: '35%',
              marginBottom: '15%',
            }}>
            <Text
              style={{
                fontSize: 24,
                color: '#000000',
                textAlign: 'center',
                lineHeight: 30,
              }}>
              {'Please sign into your \n Account!'}
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              paddingHorizontal: '10%',
            }}>
            {/* Email Field */}
            <CustomInput
              placeholder="Enter email address"
              value={email}
              handleChange={setEmail}
              icon="mail"
            />
            {error ? (
              <Text
                style={{
                  color: 'red',
                  fontSize: 12,
                  textAlign: 'left',
                  width: '100%',
                }}>
                {error}
              </Text>
            ) : null}

            {/* Password Field */}
            <CustomInput
              placeholder="Enter password"
              value={password}
              handleChange={setPassword}
              icon="lock"
              secureTextEntry={true}
            />
          </View>

          <View style={{width: '100%'}}>
            <CustomButton handleSubmit={handleSubmit} text="Login" />
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#464646',
              }}>
              Not a member yet?
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: 'SignUp'}],
                  }),
                )
              }>
              <Text
                style={{
                  fontSize: 14,
                  color: '#4DABF5',
                }}>
                {' Sign Up'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignIn;
