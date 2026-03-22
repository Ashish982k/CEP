import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Card } from './Card';
import { colors, spacing, typography } from '../theme/theme';

export function ToggleRow({ title, subtitle, value, onValueChange }) {
  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        <View style={styles.body}>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
        <Switch value={value} onValueChange={onValueChange} trackColor={{ false: '#CBD5E1', true: '#A78BFA' }} thumbColor={'#FFFFFF'} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    flex: 1,
    marginRight: spacing.md,
  },
  title: {
    ...typography.body,
    fontWeight: '800',
    color: colors.text,
  },
  subtitle: {
    marginTop: 4,
    ...typography.muted,
  },
});
