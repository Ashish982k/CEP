import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { spacing, typography } from '../theme/theme';

export function SectionTitle({ title, style }) {
  return <Text style={[styles.title, style]}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    ...typography.h2,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.xl,
  },
});
