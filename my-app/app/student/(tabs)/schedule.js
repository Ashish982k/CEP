import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../../../components/Screen';
import { Header } from '../../../components/Header';
import { ListItem } from '../../../components/ListItem';
import { Badge } from '../../../components/Badge';
import { colors, spacing, typography } from '../../../theme/theme';
import { todaysClassesStudent } from '../../../data/mock';

export default function StudentScheduleScreen() {
  return (
    <Screen>
      <Header title="Schedule" />
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.padX}>
            <Text style={styles.title}>Today’s Classes</Text>
            <Text style={styles.subtitle}>Your schedule in a clean, card layout</Text>
          </View>

          <View style={styles.listWrap}>
            {todaysClassesStudent.map((c) => (
              <ListItem
                key={c.id}
                icon={<Ionicons name="book" size={18} color={colors.purple} />}
                title={c.subject}
                description={c.time}
                right={<Badge label={c.status === 'completed' ? 'COMPLETED' : 'UPCOMING'} variant={c.status === 'completed' ? 'success' : 'warning'} />}
              />
            ))}
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
  padX: { paddingHorizontal: spacing.xl },
  title: {
    marginTop: spacing.sm,
    ...typography.h1,
  },
  subtitle: {
    marginTop: 8,
    ...typography.muted,
  },
  listWrap: {
    paddingHorizontal: spacing.xl,
    gap: spacing.md,
    marginTop: spacing.lg,
  },
});
