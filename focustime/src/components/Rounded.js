import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

export const Rounded =({
  style={},
  textStyle={},
  size= 80,
  ...props
}) => {
  return (
    <TouchableOpacity style= {[styles(size).radius, style]} onPress= {props.onPress}>
    <Text style = {[styles(size).text, textStyle]}> {props.title}
    </Text>
    </TouchableOpacity>

  );

};

const styles = (size) => ({
  radius: {
  borderRadius: size /4,
  width: size,
  height: size, 
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: colors.white,  // Fixed
  borderWidth: 3  // Fixed
},
  text:{
    color: colors.white, 
    fontSize: size/3
  },
});