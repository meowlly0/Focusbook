import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors'; // Assuming colors are defined in utils/colors
import { Rounded } from '../components/Rounded'; // Your custom rounded button component

export const Focus = ({ addSubject }) => {
  const [Subject, setSubject] = useState(null);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.primary }]}>Focus Feature</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setSubject}
          label="What would you like to focus on?"
          style={[styles.input, { backgroundColor: colors.white }]} // White background for input
          theme={{ colors: { primary: colors.primary, placeholder: colors.text } }} // Customizing the input
        />
        <Rounded
          title="+"
          size={120}
          onPress={() => addSubject(Subject)}
          style={{ backgroundColor: colors.primary }} // Button background color
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: 0, 
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 5,
  },
  inputContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
});
