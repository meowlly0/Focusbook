import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Vibration,
} from 'react-native';
import { TextInput, ProgressBar } from 'react-native-paper';
import { colors } from '../utils/colors';
import { Countdown } from '../components/CountDown';
import { Rounded } from '../components/Rounded';
import { Timing } from './Timing';
import { useKeepAwake } from 'expo-keep-awake';

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];


export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
  Vibration.vibrate(PATTERN);
  setIsStarted(false);
  setProgress(1);
  reset();
  onTimerEnd(focusSubject);
};
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />

        <View style={{ padding: 25 }}>
          <Text style={styles.title}> We are focusing on:</Text>
          <Text style={styles.task}> {focusSubject} </Text>
        </View>
      </View>
      <View style={{ padding: 8 }}>
        <ProgressBar
          progress={progress}
          color={colors.col}
          style={{ height: 8 }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <Rounded title="Start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <Rounded title="Stop" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.buttonWrapper}>
        <Timing style={styles.TWrapper} onChangeTime={setMinutes} />
      </View>
      <View style={styles.ClearWrapper}>
        <Rounded size={50} title="Back" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ClearWrapper: {
    flex: 0.1,
    padding: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  TWrapper: {
    flex: 0.1,
    padding: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  task: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
