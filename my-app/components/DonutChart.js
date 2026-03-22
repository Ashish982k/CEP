import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';
import { colors, spacing, typography, radii } from '../theme/theme';

export function DonutChart({ title, data }) {
  const total = Math.max(1, (data?.present || 0) + (data?.absent || 0) + (data?.late || 0));
  const presentPct = Math.round(((data?.present || 0) / total) * 100);

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      <Card style={styles.card}>
        <View style={styles.row}>
          <View style={styles.donutOuter}>
            <View style={styles.donutInner}>
              <Text style={styles.centerPct}>{presentPct}%</Text>
              <Text style={styles.centerLbl}>Present</Text>
            </View>
          </View>

          <View style={styles.legend}>
            <LegendItem color={colors.green} label={`Present (${data?.present || 0})`} />
            <LegendItem color={colors.red} label={`Absent (${data?.absent || 0})`} />
            <LegendItem color={colors.amber} label={`Late (${data?.late || 0})`} />
          </View>
        </View>
      </Card>
    </View>
  );
}

function LegendItem({ color, label }) {
  return (
    <View style={styles.legendRow}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={styles.legendText}>{label}</Text>
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
    padding: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  donutOuter: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 14,
    borderColor: '#A78BFA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.lg,
    backgroundColor: '#F5F3FF',
  },
  donutInner: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E6E8F0',
  },
  centerPct: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.text,
  },
  centerLbl: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: '800',
    color: colors.mutedText,
  },
  legend: {
    flex: 1,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: radii.lg,
    marginRight: 10,
  },
  legendText: {
    ...typography.muted,
    fontWeight: '700',
  },
});
