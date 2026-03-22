import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';
import { colors, spacing, typography } from '../theme/theme';
import { ProgressBar } from './ProgressBar';

export function StatBox({ title, value, subtitle, progressValue, progressMax, tint }) {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      {typeof progressValue === 'number' ? (
        <View style={styles.progress}>
          <ProgressBar value={progressValue} max={progressMax} color={tint || colors.purple} />
        </View>
      ) : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: spacing.md,
  },
  title: {
    ...typography.muted,
  },
  value: {
    marginTop: 6,
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
  },
  subtitle: {
    marginTop: 4,
    ...typography.muted,
  },
  progress: {
    marginTop: 12,
  },
});
