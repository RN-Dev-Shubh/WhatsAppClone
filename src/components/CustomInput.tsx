import {View, Text, TextInput, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
const AntDesign = require('react-native-vector-icons/AntDesign').default;

const CustomInput = ({
  label,
  placeholder,
  value,
  handleChange,
  touched,
  error,
  icon,
  keyboardType,
  type,
}: any) => {
  const [values, _values] = useState();

  useEffect(() => {
    _values(value);
  }, [value]);

  const onChangeText = (e: any) => {
    _values(e);
    handleChange(e);
  };
  const isTablet = Dimensions.get('window').width > 600;
  return (
    <View
      style={{
        flex: 1,
      }}>
      {label ? (
        <Text
          style={{
            color: '#1F1F1F',
            marginVertical: 5,
            fontSize: 14,
          }}>
          {label}
        </Text>
      ) : (
        <View style={{marginBottom: 10}} />
      )}
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#F5F5F5',
          borderRadius: 8,
          paddingHorizontal: 15,
          gap: 15,
        }}>
        {icon && (
          <AntDesign name={icon} size={isTablet ? 25 : 15} color={'#AEAEAE'} />
        )}
        <TextInput
          autoCorrect
          autoCapitalize="none"
          style={{
            fontSize: 14,
            color: '#000000',
            height: isTablet ? 70 : 50,
            flex: 1,
          }}
          secureTextEntry={type ? true : false}
          placeholder={placeholder}
          placeholderTextColor={'#AEAEAE'}
          value={values}
          onChangeText={onChangeText}
          selectionColor={'#4DABF5'}
          maxLength={keyboardType ? 10 : 50}
          keyboardType={keyboardType ? 'number-pad' : 'default'}
        />
      </View>
      {touched && error ? (
        <Text
          style={{
            color: 'red',
            marginBottom: isTablet ? 15 : 5,
            fontSize: 12,
          }}>
          {error}
        </Text>
      ) : (
        <></>
      )}
    </View>
  );
};

export default CustomInput;
