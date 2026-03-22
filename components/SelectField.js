import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, FlatList } from 'react-native';
import { colors, radii, spacing, typography, shadows } from '../theme/theme';
import { Ionicons } from '@expo/vector-icons';

export function SelectField({ label, value, options, onSelect, placeholder = 'Select' }) {
  const [open, setOpen] = useState(false);

  const selected = useMemo(() => options?.find((o) => o.id === value), [options, value]);

  return (
    <View style={styles.wrap}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <Pressable onPress={() => setOpen(true)} style={({ pressed }) => [styles.input, pressed ? styles.pressed : null]}>
        <Text style={[styles.value, !selected ? styles.placeholder : null]} numberOfLines={1}>
          {selected?.label || placeholder}
        </Text>
        <Ionicons name="chevron-down" size={18} color={colors.mutedText} />
      </Pressable>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)}>
          <Pressable style={styles.sheet} onPress={() => {}}>
            <Text style={styles.sheetTitle}>{label || 'Select'}</Text>
            <FlatList
              data={options || []}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <View style={styles.sep} />}
              renderItem={({ item }) => {
                const active = item.id === value;
                return (
                  <Pressable
                    onPress={() => {
                      onSelect?.(item.id);
                      setOpen(false);
                    }}
                    style={({ pressed }) => [styles.option, pressed ? { opacity: 0.85 } : null]}
                  >
                    <Text style={[styles.optionText, active ? { color: colors.purple } : null]}>{item.label}</Text>
                    {active ? <Ionicons name="checkmark" size={18} color={colors.purple} /> : null}
                  </Pressable>
                );
              }}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: spacing.md,
  },
  label: {
    ...typography.muted,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderRadius: radii.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  value: {
    flex: 1,
    marginRight: 10,
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  placeholder: {
    color: '#94A3B8',
  },
  pressed: {
    opacity: 0.92,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(2,6,23,0.45)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radii.xl,
    borderTopRightRadius: radii.xl,
    padding: spacing.lg,
    maxHeight: '60%',
    ...shadows.card,
  },
  sheetTitle: {
    ...typography.h2,
    marginBottom: spacing.md,
  },
  option: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.text,
  },
  sep: {
    height: 1,
    backgroundColor: colors.border,
  },
});
