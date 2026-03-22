import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors, spacing, typography } from '../theme/theme';

export function Header({ title, right, onRightPress }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      {right ? (
        <Pressable onPress={onRightPress} style={({ pressed }) => [styles.right, pressed ? styles.pressed : null]}>
          {right}
        </Pressable>
      ) : (
        <View style={styles.rightPlaceholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.md,
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...typography.h1,
  },
  right: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  rightPlaceholder: {
    width: 40,
    height: 40,
  },
  pressed: {
    opacity: 0.8,
  },
});
