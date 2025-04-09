import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Rounded } from '../components/Rounded';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
    <View style={styles.TButton}>
      <Rounded size={50} title={15} onPress={() => onChangeTime(15)} />
    </View><View style={styles.TButton}>
      <Rounded size={50} title={10} onPress={() => onChangeTime(10)} />
    </View><View style={styles.TButton}>
      <Rounded size={50} title={5} onPress={() => onChangeTime(5)} />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  TButton: {
    flex: 1,
    alignItems: 'center',
  },

});
