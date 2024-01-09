import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RouteParams } from '../types';
import Table from './_Table';
import Switch from './_Switch';
import { AsrMethod, usePreferences } from '../../shared/usePreferences';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
  screenBottom: {
    marginBottom: 40,
  },
  bottomLink: {
    fontSize: 15,
    color: '#37474F',
    letterSpacing: 1,
  }
});

export const ASR_METHODS: { value: AsrMethod, label: string }[] = [
  { value: "shafi", label: "Shafi" },
  { value: "hanafi", label: "Hanafi" },
]

type Props = RouteParams<'Settings'>;

export default ({ navigation }: Props) => {
  const preferences = usePreferences()

  const gotoMainScreen = () => {
    navigation.navigate('Prayers', {})
  }

  const changeAsrMethod = (value: AsrMethod) => {
    preferences.setAsrMethod(value)
  }
  const toggleAsrMethod = <Switch<AsrMethod>
    value={preferences.asrMethod}
    entries={ASR_METHODS}
    onChange={changeAsrMethod} />

  const entries = [
    { key: 'Asr Method', val: toggleAsrMethod }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.screenContent}>
        <Table entries={entries} />
      </View>
      <View style={styles.screenBottom}>
        <Pressable onPress={gotoMainScreen}>
          <Text style={styles.bottomLink}>BACK TO MAIN</Text>
        </Pressable>
      </View>
    </View>
  )
}
