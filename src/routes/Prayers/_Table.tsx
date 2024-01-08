import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },
  row: {
    flexDirection: 'row',
    width: 240,
    paddingVertical: 12,
    borderStyle: 'dotted',
    borderRadius: 1,
    borderColor: '#222222',
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
    fontSize: 18,
    color: '#ffffff',
    borderStyle: 'dotted',
    borderRadius: 1,
    borderColor: '#222222',
    borderLeftWidth: 1,
  },
});

function formatTime(hour: number, minute: number): string {
  const h = String(hour > 12 ? hour - 12 : hour);
  const m = minute.toString().padStart(2, '0');
  const a = hour > 12 ? 'pm' : 'am';
  return `${h}:${m} ${a}`;
}

export interface Props {
  entries: {key: string; val: {hour: number; minute: number}}[];
}

export default (props: Props) => {
  return (
    <View style={styles.container}>
      {props.entries.map(({key, val}, i) => (
        <View key={key} style={{...styles.row, borderTopWidth: i === 0 ? 0 : 1}}>
          <Text style={styles.key}>{key}</Text>
          <Text style={styles.val}>{formatTime(val.hour, val.minute)}</Text>
        </View>
      ))}
    </View>
  );
};
