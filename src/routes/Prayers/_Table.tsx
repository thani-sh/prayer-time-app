import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useAppTheme } from '../../shared/useApptheme';

const useStyles = () => {
  const theme = useAppTheme();
  return StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    width: 300,
    paddingVertical: 12,
    borderStyle: 'dotted',
    borderRadius: 1,
    borderColor: theme.lineColor,
  },
  key: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 12,
    fontSize: 18,
    textAlign: 'right',
    color: theme.textColor,
  },
  val: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 12,
    fontSize: 18,
    color: theme.textColor,
    borderStyle: 'dotted',
    borderRadius: 1,
    borderColor: theme.lineColor,
    borderLeftWidth: 1,
  },
});
};

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
  const styles = useStyles();

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
