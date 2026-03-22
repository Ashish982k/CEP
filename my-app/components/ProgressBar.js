import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, radii } from '../theme/theme';

export function ProgressBar({ value, max = 100, color = colors.purple }) {
  const clamped = Math.max(0, Math.min(value, max));
  const pct = max === 0 ? 0 : (clamped / max) * 100;

  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${pct}%`, backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 10,
    backgroundColor: '#EEF2FF',
    borderRadius: radii.lg,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: radii.lg,
  },
});
