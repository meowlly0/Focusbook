import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors'; // Assuming colors are defined in utils/colors
import { fontSizes, spacing } from '../utils/sizes'; // Assuming these sizes are defined

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) {
    return <Text style={styles.empty}>We did not focus yet!</Text>; // Empty state
  }

  const renderItem = ({ item }) => <Text style={styles.item}> - {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>We focused on:</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.col, // Ensure the background is consistent
    padding: 20,
  },
  empty: {
    color: colors.secondary, // Use a different color for the empty state text
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: spacing.sm,
  },
  title: {
    color: colors.white, // Title color set to white
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    paddingBottom: spacing.sm,
  },
  item: {
    color: colors.white, // White color for each item
    fontSize: fontSizes.md,
    paddingVertical: spacing.sm,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 10, // Adjust margin for spacing between title and list
  },
});
