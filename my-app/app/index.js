import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../components/Screen';
import { Card } from '../components/Card';
import { GradientCard } from '../components/GradientCard';
import { AppButton } from '../components/AppButton';
import { colors, gradients, spacing, typography } from '../theme/theme';

export default function RoleSelectionScreen() {
  return (
    <Screen>
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <Text style={styles.title}>Smart Attendance</Text>
          <Text style={styles.subtitle}>A smarter, secure way to manage attendance</Text>
        </View>

        <View style={styles.cards}>
          <RoleCard
            gradient={gradients.primary}
            icon={<Ionicons name="school" size={26} color="#FFFFFF" />}
            title="Student"
            description="Access your dashboard, scan QR, and track attendance." 
            button="Continue"
            onPress={() => router.push('/student/login')}
          />

          <RoleCard
            gradient={gradients.cool}
            icon={<Ionicons name="person" size={26} color="#FFFFFF" />}
            title="Teacher"
            description="Generate QR codes, manage schedules, and track class stats." 
            button="Continue"
            onPress={() => router.push('/teacher/login')}
          />
        </View>

        <Card style={styles.footerCard}>
          <Text style={styles.footerText}>Secure. Fast. Minimal.</Text>
        </Card>
      </SafeAreaView>
    </Screen>
  );
}

function RoleCard({ gradient, icon, title, description, button, onPress }) {
  return (
    <GradientCard colors={gradient} style={styles.roleGradient}>
      <View style={styles.roleTop}>
        <View style={styles.roleIcon}>{icon}</View>
        <Text style={styles.roleTitle}>{title}</Text>
        <Text style={styles.roleDesc}>{description}</Text>
      </View>
      <AppButton title={button} onPress={onPress} variant="secondary" />
    </GradientCard>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingHorizontal: spacing.xl,
  },
  header: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },
  title: {
    ...typography.title,
  },
  subtitle: {
    marginTop: 8,
    ...typography.muted,
    fontSize: 14,
  },
  cards: {
    gap: spacing.lg,
    flex: 1,
  },
  roleGradient: {
    borderRadius: 28,
  },
  roleTop: {
    paddingBottom: spacing.md,
  },
  roleIcon: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  roleTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
  roleDesc: {
    marginTop: 8,
    color: 'rgba(255,255,255,0.85)',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
    marginBottom: spacing.lg,
  },
  footerCard: {
    marginBottom: spacing.lg,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  footerText: {
    color: colors.mutedText,
    fontWeight: '700',
  },
});
