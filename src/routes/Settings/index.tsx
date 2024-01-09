import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {RouteParams} from '../types';
import Table from './_Table';
import Switch from './_Switch';
import {AppTheme, AsrMethod, usePreferences} from '../../shared/usePreferences';
import {useAppTheme} from '../../shared/useApptheme';

const useStyles = () => {
  const theme = useAppTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.pageColor,
    },
    screenContent: {
      flex: 1,
      flexDirection: 'column',
      marginBottom: -40,
      alignItems: 'center',
      justifyContent: 'center',
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

export const ASR_METHODS: {value: AsrMethod; label: string}[] = [
  {value: 'shafi', label: 'Shafi, ...'},
  {value: 'hanafi', label: 'Hanafi'},
];

export const APP_THEMES: {value: AppTheme; label: string}[] = [
  {value: 'light', label: 'Light'},
  {value: 'dark', label: 'Dark'},
];

type Props = RouteParams<'Settings'>;

export default ({navigation}: Props) => {
  const styles = useStyles();
  const preferences = usePreferences();

  const gotoMainScreen = () => {
    navigation.navigate('Prayers', {});
  };

  const changeAsrMethod = (value: AsrMethod) => {
    preferences.setAsrMethod(value);
  };
  const toggleAsrMethod = (
    <Switch<AsrMethod> value={preferences.asrMethod} entries={ASR_METHODS} onChange={changeAsrMethod} />
  );

  const changeAppTheme = (value: AppTheme) => {
    preferences.setAppTheme(value);
  };
  const toggleAppTheme = (
    <Switch<AppTheme> value={preferences.appTheme} entries={APP_THEMES} onChange={changeAppTheme} />
  );

  const entries = [
    {key: 'Calculation', val: toggleAsrMethod},
    {key: 'Theme', val: toggleAppTheme},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.screenContent}>
        <Table entries={entries} />
      </View>
      <View style={styles.screenBottom}>
        <Pressable onPress={gotoMainScreen}>
          <Text style={styles.bottomLink}>BACK</Text>
        </Pressable>
      </View>
    </View>
  );
};
