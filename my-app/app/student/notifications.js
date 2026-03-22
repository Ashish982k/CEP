import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../../components/Screen';
import { Header } from '../../components/Header';
import { ListItem } from '../../components/ListItem';
import { ToggleRow } from '../../components/ToggleRow';
import { colors, spacing, typography } from '../../theme/theme';
import { notifications } from '../../data/mock';

function typeIcon(type) {
  if (type === 'success') return { name: 'checkmark-circle', color: colors.green };
  if (type === 'warning') return { name: 'alert-circle', color: colors.amber };
  return { name: 'notifications', color: colors.blue };
}

export default function StudentNotificationsScreen() {
  const [attendanceAlerts, setAttendanceAlerts] = useState(true);
  const [scheduleUpdates, setScheduleUpdates] = useState(true);

  return (
    <Screen>
      <Header title="Notifications" />
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.listWrap}>
            {notifications.map((n) => {
              const icon = typeIcon(n.type);
              return (
                <ListItem
                  key={n.id}
                  icon={<Ionicons name={icon.name} size={18} color={icon.color} />}
                  title={n.title}
                  description={n.description}
                  right={<Text style={styles.time}>{n.time}</Text>}
                />
              );
            })}
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Notification Settings</Text>
          </View>

          <View style={styles.settingsWrap}>
            <ToggleRow
              title="Attendance alerts"
              subtitle="Low attendance warnings and confirmations"
              value={attendanceAlerts}
              onValueChange={setAttendanceAlerts}
            />
            <ToggleRow
              title="Schedule updates"
              subtitle="Reschedules and upcoming class reminders"
              value={scheduleUpdates}
              onValueChange={setScheduleUpdates}
            />
          </View>

          <View style={{ height: spacing.xxl }} />
        </ScrollView>
      </SafeAreaView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { paddingBottom: spacing.xxl },
  listWrap: {
    paddingHorizontal: spacing.xl,
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  time: {
    ...typography.muted,
    fontWeight: '800',
  },
  sectionHeader: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    ...typography.h2,
  },
  settingsWrap: {
    paddingHorizontal: spacing.xl,
    gap: spacing.md,
  },
});
