import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../../../components/Screen';
import { Header } from '../../../components/Header';
import { GradientCard } from '../../../components/GradientCard';
import { Card } from '../../../components/Card';
import { AppButton } from '../../../components/AppButton';
import { StatBox } from '../../../components/StatBox';
import { DonutChart } from '../../../components/DonutChart';
import { ListItem } from '../../../components/ListItem';
import { colors, gradients, spacing, typography } from '../../../theme/theme';
import { teacherStats, todaysClassesTeacher } from '../../../data/mock';

export default function TeacherDashboardScreen() {
  return (
    <Screen>
      <Header title="Dashboard" />
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={[styles.row, styles.padX, { marginTop: spacing.sm }]}>
            <QuickAction
              title="Generate QR"
              subtitle="For today’s class"
              icon="qr-code"
              gradient={gradients.primary}
              onPress={() => router.push('/teacher/qr')}
            />
            <View style={{ width: spacing.md }} />
            <QuickAction
              title="Schedule"
              subtitle="Manage classes"
              icon="time"
              gradient={gradients.cool}
              onPress={() => router.push('/teacher/schedule')}
            />
          </View>

          <View style={[styles.row, styles.padX, { marginTop: spacing.lg }]}>
            <StatBox title="Students" value={`${teacherStats.studentsCount}`} subtitle="Active" />
            <View style={{ width: spacing.md }} />
            <StatBox title="Classes" value={`${teacherStats.classesCount}`} subtitle="Today" />
          </View>

          <View style={[styles.padX, { marginTop: spacing.md }]}>
            <Card style={{ padding: spacing.md }}>
              <Text style={styles.avgLabel}>Average attendance</Text>
              <Text style={styles.avgValue}>{teacherStats.avgAttendance}%</Text>
            </Card>
          </View>

          <DonutChart title="Today’s Attendance" data={teacherStats.donut} />

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today’s Classes</Text>
          </View>

          <View style={styles.listWrap}>
            {todaysClassesTeacher.map((c) => (
              <ListItem
                key={c.id}
                icon={<Ionicons name="book" size={18} color={colors.purple} />}
                title={c.subject}
                description={c.time}
                right={
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.count}>{c.attendanceCount}</Text>
                    <View style={{ height: 10 }} />
                    <AppButton title="Start Attendance" onPress={() => {}} style={styles.smallBtn} />
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

function QuickAction({ title, subtitle, icon, gradient, onPress }) {
  return (
    <GradientCard colors={gradient} style={{ flex: 1 }}>
      <View style={styles.qaIcon}>
        <Ionicons name={icon} size={20} color="#FFFFFF" />
      </View>
      <Text style={styles.qaTitle}>{title}</Text>
      <Text style={styles.qaSub}>{subtitle}</Text>
      <AppButton title="Open" onPress={onPress} variant="secondary" style={{ marginTop: spacing.md }} />
    </GradientCard>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { paddingBottom: spacing.xxl },
  padX: { paddingHorizontal: spacing.xl },
  row: { flexDirection: 'row' },
  qaIcon: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qaTitle: {
    marginTop: spacing.md,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },
  qaSub: {
    marginTop: 6,
    color: 'rgba(255,255,255,0.86)',
    ...typography.muted,
    fontSize: 13,
    fontWeight: '600',
  },
  avgLabel: {
    ...typography.muted,
  },
  avgValue: {
    marginTop: 6,
    fontSize: 22,
    fontWeight: '900',
    color: colors.text,
  },
  sectionHeader: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    ...typography.h2,
  },
  listWrap: {
    paddingHorizontal: spacing.xl,
    gap: spacing.md,
  },
  count: {
    fontSize: 13,
    fontWeight: '900',
    color: colors.text,
  },
  smallBtn: {
    height: 36,
    borderRadius: 14,
    paddingHorizontal: 12,
    backgroundColor: colors.text,
  },
});
