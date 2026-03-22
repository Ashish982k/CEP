import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../../../components/Screen';
import { Header } from '../../../components/Header';
import { GradientCard } from '../../../components/GradientCard';
import { AppButton } from '../../../components/AppButton';
import { StatBox } from '../../../components/StatBox';
import { MiniBarChart } from '../../../components/MiniBarChart';
import { colors, gradients, spacing, typography } from '../../../theme/theme';
import { studentStats } from '../../../data/mock.js';

export default function StudentDashboardScreen() {
  return (
    <Screen>
      <Header
        title="Dashboard"
        right={<Ionicons name="notifications" size={18} color={colors.text} />}
        onRightPress={() => router.push('/student/notifications')}
      />

      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.padX}>
            <GradientCard colors={gradients.primary} style={styles.hero}>
              <Text style={styles.heroTitle}>Mark Your Attendance</Text>
              <Text style={styles.heroDesc}>Open the scanner and align the QR inside the frame.</Text>
              <AppButton
                title="Open Scanner"
                onPress={() => router.push('/student/scan')}
                variant="secondary"
                left={<Ionicons name="scan" size={18} color="#FFFFFF" />}
                style={styles.heroBtn}
              />
            </GradientCard>
          </View>

          <View style={[styles.row, styles.padX]}>
            <StatBox
              title="This Month"
              value={`${studentStats.monthPercent}%`}
              subtitle="Attendance rate"
              progressValue={studentStats.monthPercent}
              progressMax={100}
              tint={colors.purple}
            />
            <View style={{ width: spacing.md }} />
            <StatBox
              title="This Week"
              value={`${studentStats.weekCount}/${studentStats.weekTotal}`}
              subtitle="Classes attended"
              progressValue={studentStats.weekCount}
              progressMax={studentStats.weekTotal}
              tint={colors.blue}
            />
          </View>

          <MiniBarChart title="Weekly Overview" data={studentStats.weeklyOverview} />

          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: {
    paddingBottom: spacing.xxl,
  },
  padX: {
    paddingHorizontal: spacing.xl,
  },
  hero: {
    marginTop: spacing.sm,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
  },
  heroDesc: {
    marginTop: 8,
    color: 'rgba(255,255,255,0.88)',
    ...typography.muted,
    fontSize: 13,
    fontWeight: '600',
  },
  heroBtn: {
    marginTop: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    marginTop: spacing.lg,
  },
  bottomSpace: {
    height: 24,
  },
});
