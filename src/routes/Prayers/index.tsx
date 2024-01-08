import {forDate} from '@thani-sh/prayer-time-lk';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Dates from './_Dates';
import Table from './_Table';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenContent: {
    flex: 1,
    marginBottom: -60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenBottom: {
    marginBottom: 40,
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
    {key: 'Fajr', val: times.fajr},
    {key: 'Sunrise', val: times.sunrise},
    {key: 'Dhuhr', val: times.dhuhr},
    {key: 'Asr', val: times.asr},
    {key: 'Asr (حَنَفِية)', val: times.asr_hanafi},
    {key: 'Maghrib', val: times.maghrib},
    {key: 'Isha', val: times.isha},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.screenContent}>
        <Text style={styles.screenTitle}>Prayer Time</Text>
        <Table entries={entries} />
      </View>
      <View style={styles.screenBottom}>
        <Dates value={date} onChange={setDate} />
      </View>
    </View>
  );
};
