import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

const Buttons = ({ value, color, size, colorText, icon, fun }) => {
  return (
    <TouchableOpacity onPress={fun} style={[styles.button, { backgroundColor: color, width: size }]}>
      <Text style={[styles.buttonText, { color: colorText }]}>{icon || value}</Text>
    </TouchableOpacity>
  );
}

export default Buttons;
