import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../../../components/Screen';
import { Header } from '../../../components/Header';
import { AppButton } from '../../../components/AppButton';
import { StatBox } from '../../../components/StatBox';
import { ListItem } from '../../../components/ListItem';
import { colors, spacing, typography } from '../../../theme/theme';
import { scheduleManagement } from '../../../data/mock';

const tabs = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function TeacherScheduleManagementScreen() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = useMemo(() => {
    if (activeTab === 'All') return scheduleManagement.classes;
    return scheduleManagement.classes.filter((c) => c.day === activeTab);
  }, [activeTab]);

  return (
    <Screen>
      <Header title="Schedule" />
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={[styles.padX, styles.row, { marginTop: spacing.sm }]}>
            <AppButton title="Add New Class" onPress={() => {}} style={styles.actionBtn} left={<Ionicons name="add" size={18} color="#FFFFFF" />} />
            <View style={{ width: spacing.md }} />
            <AppButton title="Reschedule Class" onPress={() => {}} style={styles.actionBtn} left={<Ionicons name="swap-horizontal" size={18} color="#FFFFFF" />} />
          </View>

          <View style={[styles.row, styles.padX, { marginTop: spacing.lg }]}>
            <StatBox title="Total Classes" value={`${scheduleManagement.stats.totalClasses}`} />
            <View style={{ width: spacing.md }} />
            <StatBox title="Students" value={`${scheduleManagement.stats.students}`} />
            <View style={{ width: spacing.md }} />
            <StatBox title="Active Days" value={`${scheduleManagement.stats.activeDays}`} />
          </View>

          <View style={styles.padX}>
            <Text style={styles.tabTitle}>Filter</Text>
          </View>

          <View style={styles.tabRow}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabContent}>
              {tabs.map((t) => {
                const active = t === activeTab;
                return (
                  <Pressable key={t} onPress={() => setActiveTab(t)} style={[styles.tab, active ? styles.tabActive : null]}>
                    <Text style={[styles.tabText, active ? styles.tabTextActive : null]}>{t}</Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>

          <View style={styles.padX}>
            <Text style={styles.sectionTitle}>Class List</Text>
          </View>

          <View style={styles.listWrap}>
            {filtered.map((c) => (
              <ListItem
                key={c.id}
                icon={<Ionicons name="clipboard" size={18} color={colors.purple} />}
                title={`${c.subject} · ${c.room}`}
                description={`${c.day} · ${c.time} · ${c.students} students`}
                right={
                  <View style={{ gap: 10 }}>
                    <SmallAction title="View Details" onPress={() => {}} icon="eye" />
                    <SmallAction title="Take Attendance" onPress={() => {}} icon="checkmark-done" />
                  </View>
                }
              />
            ))}
          </View>

          <View style={{ height: spacing.xxl }} />
        </ScrollView>
      </SafeAreaView>
    </Screen>
  );
}

function SmallAction({ title, onPress, icon }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.smallAction, pressed ? { opacity: 0.85 } : null]}>
      <Ionicons name={icon} size={14} color={colors.text} />
      <Text style={styles.smallActionText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { paddingBottom: spacing.xxl },
  padX: { paddingHorizontal: spacing.xl },
  row: { flexDirection: 'row' },
  actionBtn: {
    flex: 1,
    backgroundColor: colors.text,
  },
  tabTitle: {
    marginTop: spacing.lg,
    ...typography.h2,
  },
  tabRow: {
    marginTop: spacing.sm,
  },
  tabContent: {
    paddingHorizontal: spacing.xl,
    gap: 10,
  },
  tab: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tabActive: {
    backgroundColor: '#111827',
    borderColor: '#111827',
  },
  tabText: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.text,
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  sectionTitle: {
    marginTop: spacing.lg,
    ...typography.h2,
  },
  listWrap: {
    paddingHorizontal: spacing.xl,
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  smallAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 14,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  smallActionText: {
    fontSize: 12,
    fontWeight: '900',
    color: colors.text,
  },
});
