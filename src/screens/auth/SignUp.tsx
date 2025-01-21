import {Platform, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as yup from 'yup';
import CustomInput from '../../components/CustomInput';
import {CommonActions, useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';

const SignUp = () => {
  const gender = [
    {label: 'Male', value: 'M.'},
    {label: 'Female', value: 'F.'},
  ];
  const navigation = useNavigation();

  const signUpValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Enter valid email')
      .required('Email is required!'),
    firstName: yup
      .string()
      .min(2, 'Name should be greater then 2 character')
      .required('First name is required!'),
    lastName: yup.string().required('Last name is required!'),
    phone: yup
      .string()
      .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
      .required('Phone number is required!'),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character',
      )
      .required('Password is required!'),
    cpassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required!'),
  });

  const _handleSubmit = async (values: any) => {};

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Header heading="Sign Up" />
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
              marginVertical: 50,
            }}>
            <Text
              style={{
                fontSize: 24,
                color: '#000000',
                textAlign: 'center',
                lineHeight: 30,
              }}>
              {"Welcome! \n  Let's dive into your account!"}
            </Text>
          </View>

          <View
            style={{
              width: '100%',
            }}>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                password: '',
                cpassword: '',
              }}
              validationSchema={signUpValidationSchema}
              onSubmit={values => _handleSubmit(values)}>
              {({handleChange, handleSubmit, values, errors, touched}) => (
                <>
                  {/* first and last name */}
                  <View
                    style={{
                      alignItems: 'center',
                      paddingHorizontal: '10%',
                    }}>
                    {/* first name */}
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 15,
                      }}>
                      <CustomInput
                        label={'First Name'}
                        placeholder={'First name'}
                        value={values.firstName}
                        handleChange={handleChange('firstName')}
                        touched={touched.firstName}
                        error={errors.firstName}
                        icon={'user'}
                      />
                      {/* last name */}
                      <CustomInput
                        label={'Last Name'}
                        placeholder={'Last name'}
                        value={values.lastName}
                        handleChange={handleChange('lastName')}
                        touched={touched.lastName}
                        error={errors.lastName}
                        icon={'user'}
                      />
                    </View>
                    {/* phone number */}
                    <CustomInput
                      label={'Phone'}
                      placeholder={'Enter phone number'}
                      value={values.phone}
                      handleChange={handleChange('phone')}
                      touched={touched.phone}
                      error={errors.phone}
                      icon={'phone'}
                      keyboardType={'phone'}
                    />
                    {/* email input */}

                    <CustomInput
                      label={'Email'}
                      placeholder={'Enter email address'}
                      value={values.email}
                      handleChange={handleChange('email')}
                      touched={touched.email}
                      error={errors.email}
                      icon={'mail'}
                    />
                    <CustomInput
                      label={'Password'}
                      placeholder={'Enter a strong password'}
                      value={values.password}
                      handleChange={handleChange('password')}
                      touched={touched.password}
                      error={errors.password}
                      type={'password'}
                      icon={'lock'}
                    />
                    <CustomInput
                      label={'Confirm Password'}
                      placeholder={'Enter confirm password'}
                      value={values.cpassword}
                      handleChange={handleChange('cpassword')}
                      touched={touched.cpassword}
                      error={errors.cpassword}
                      type={'password'}
                      icon={'lock'}
                    />
                  </View>

                  {/* signup button */}
                  <CustomButton handleSubmit={handleSubmit} text={'Submit'} />
                </>
              )}
            </Formik>
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
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: 'Login'}],
                  }),
                )
              }>
              <Text
                style={{
                  fontSize: 14,
                  color: '#4DABF5',
                }}>
                {' Sign In'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;
