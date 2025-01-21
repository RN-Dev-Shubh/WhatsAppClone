import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({handleSubmit, text}: any) => {
  return (
    <TouchableOpacity
      onPress={handleSubmit}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4DABF5',
        marginHorizontal: '10%',
        padding: 12,
        borderRadius: 8,
        marginTop: 15,
      }}>
      <Text style={{color: '#ffffff'}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
