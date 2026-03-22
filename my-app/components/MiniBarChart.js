import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from './Card';
import { colors, spacing, typography, radii } from '../theme/theme';

const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export function MiniBarChart({ title, data }) {
  const max = Math.max(1, ...(data || [1]));

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      <Card style={styles.card}>
        <View style={styles.bars}>
          {(data || []).map((v, idx) => {
            const h = (v / max) * 68;
            const isZero = v === 0;
            return (
              <View key={idx} style={styles.barCol}>
                <View style={[styles.bar, { height: h, backgroundColor: isZero ? '#E2E8F0' : '#A78BFA' }]} />
                <Text style={styles.label}>{labels[idx] || ''}</Text>
              </View>
            );
          })}
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: spacing.xl,
  },
  title: {
    ...typography.h2,
    marginBottom: spacing.sm,
  },
  card: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  bars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  barCol: {
    alignItems: 'center',
    width: 28,
  },
  bar: {
    width: 14,
    borderRadius: radii.lg,
  },
  label: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '700',
    color: colors.mutedText,
  },
});
