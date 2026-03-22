import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radii } from '../theme/theme';

export function Badge({ label, variant = 'neutral' }) {
  const bg =
    variant === 'success'
      ? '#DCFCE7'
      : variant === 'warning'
      ? '#FEF3C7'
      : variant === 'danger'
      ? '#FEE2E2'
      : '#E2E8F0';

  const fg =
    variant === 'success'
      ? colors.green
      : variant === 'warning'
      ? colors.amber
      : variant === 'danger'
      ? colors.red
      : colors.mutedText;

  return (
    <View style={[styles.wrap, { backgroundColor: bg }]}
    >
      <Text style={[styles.text, { color: fg }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radii.lg,
  },
  text: {
    fontSize: 12,
    fontWeight: '800',
  },
});
