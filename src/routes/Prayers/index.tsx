import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {usePrayerTimes} from '../../shared/usePrayerTimes';
import {RouteParams} from '../types';
import Table from './_Table';
import { useAppTheme } from '../../shared/useApptheme';

const useStyles = () => {
  const theme = useAppTheme();
  return StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenContent: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: -40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: 42,
    fontWeight: '600',
    color: theme.textColor,
  },
  screenSubtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  selectedDate: {
    fontSize: 15,
    color: theme.linkColor,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  resetToToday: {
    marginLeft: 10,
    fontSize: 10,
    color: theme.textColor,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  screenBottom: {
    marginBottom: 40,
  },
  bottomLink: {
    fontSize: 15,
    color: theme.linkColor,
    letterSpacing: 1,
  },
});
};

function formatDate(date: Date): string {
  return date.toLocaleString('en', {month: 'long', day: 'numeric', year: 'numeric'});
}

type Props = RouteParams<'Prayers'>;

export default ({navigation}: Props) => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const entries = usePrayerTimes(date);

  const isDateToday = date.toDateString() === new Date().toDateString();
  const gotoPreferences = () => {
    navigation.navigate('Settings', {});
  };

  return (
    <View style={styles.container}>
      <View style={styles.screenContent}>
        <Text style={styles.screenTitle}>Prayer Times</Text>
        <View style={styles.screenSubtitle}>
          <Pressable onPress={() => setOpen(true)}>
            <Text style={styles.selectedDate}>{formatDate(date)}</Text>
          </Pressable>
          {!isDateToday && (
            <Pressable onPress={() => setDate(new Date())}>
              <Text style={styles.resetToToday}>RESET</Text>
            </Pressable>
          )}
        </View>
        <Table entries={entries} />
      </View>

      <View style={styles.screenBottom}>
        <Pressable onPress={gotoPreferences}>
          <Text style={styles.bottomLink}>PREFERENCES</Text>
        </Pressable>
      </View>

      <DatePicker
        modal
        open={open}
        mode="date"
        theme="dark"
        date={date}
        onConfirm={value => {
          setOpen(false);
          setDate(value);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};
