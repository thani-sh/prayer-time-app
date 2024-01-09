import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RouteParams } from '../types';

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
    marginBottom: -60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenBottom: {
    marginBottom: 40,
  },
  bottomLink: {
    fontSize: 12,
    color: '#37474F',
    letterSpacing: 1,
  }
});

type Props = RouteParams<'Settings'>;

export default ({ navigation }: Props) => {
  const gotoMainScreen = () => {
    navigation.navigate('Prayers', {})
  }

  return (
    <View style={styles.container}>
      <View style={styles.screenContent}>
        {/*  */}
      </View>
      <View style={styles.screenBottom}>
        <Pressable onPress={gotoMainScreen}>
          <Text style={styles.bottomLink}>BACK TO MAIN</Text>
        </Pressable>
      </View>
    </View>
  )
}
