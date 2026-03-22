import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { radii, shadows } from '../theme/theme';

export function GradientCard({ children, colors: gradientColors, style }) {
  return (
    <LinearGradient colors={gradientColors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[styles.wrap, style]}>
      <View style={styles.inner}>{children}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderRadius: radii.xl,
    ...shadows.card,
  },
  inner: {
    borderRadius: radii.xl,
    padding: 18,
  },
});
