import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#37474F',
    fontSize: 18,
  }
})

export interface Props<T> {
  value: T
  entries: { value: T, label: string }[]
  onChange: (value: T) => void
}

export default function<T>({ value, entries, onChange }: Props<T>) {
  const idx = entries.findIndex(e => e.value === value)
  const val = entries[idx]

  const onPressHandler = () => {
    const nextIdx = (idx + 1) % entries.length
    onChange(entries[nextIdx].value)
  }

  return (
    <Pressable onPress={onPressHandler}>
      <Text style={styles.text}>{val.label}</Text>
    </Pressable>
  )
}
