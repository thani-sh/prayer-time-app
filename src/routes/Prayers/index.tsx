import { forDate } from '@thani-sh/prayer-time-lk';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Table from './Table';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: 40,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default () => {
  const [date, setDate] = useState(new Date());
  const times = forDate(date);

  const entries = [
    { key: 'Fajr', val: times.fajr },
    { key: 'Sunrise', val: times.sunrise },
    { key: 'Dhuhr', val: times.dhuhr },
    { key: 'Asr', val: times.asr },
    { key: 'Asr (حَنَفِية)', val: times.asr_hanafi },
    { key: 'Maghrib', val: times.maghrib },
    { key: 'Isha', val: times.isha },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Prayer Time</Text>
      <Table entries={entries} />
    </View>
  );
};
