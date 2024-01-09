import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    width: 240,
    paddingVertical: 12,
  },
  key: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 12,
    fontSize: 18,
    textAlign: 'right',
    color: '#ffffff',
  },
  val: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export interface Props {
  entries: {key: string; val: React.ReactNode}[];
}

export default (props: Props) => {
  return (
    <View style={styles.container}>
      {props.entries.map(({key, val}, i) => (
        <View key={key} style={{...styles.row, borderTopWidth: i === 0 ? 0 : 1}}>
          <Text style={styles.key}>{key}</Text>
          <View style={styles.val}>{val}</View>
        </View>
      ))}
    </View>
  );
};
