import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../../../components/Screen';
import { Header } from '../../../components/Header';
import { Card } from '../../../components/Card';
import { AppButton } from '../../../components/AppButton';
import { SelectField } from '../../../components/SelectField';
import { ListItem } from '../../../components/ListItem';
import { colors, spacing, typography } from '../../../theme/theme';
import { teacherClasses, durations } from '../../../data/mock.js';

export default function TeacherQRGeneratorScreen() {
  const [klass, setKlass] = useState(teacherClasses[0]?.id);
  const [duration, setDuration] = useState(durations[0]?.id);

  return (
    <Screen>
      <Header title="Generate QR" />
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.padX}>
            <Card style={styles.card}>
              <SelectField label="Select Class" value={klass} options={teacherClasses} onSelect={setKlass} />
              <SelectField label="Duration" value={duration} options={durations} onSelect={setDuration} />
              <AppButton title="Generate" onPress={() => {}} style={styles.btn} left={<Ionicons name="sparkles" size={18} color="#FFFFFF" />} />
            </Card>
          </View>

          <View style={styles.padX}>
            <Text style={styles.stepsTitle}>Instructions</Text>
          </View>

          <View style={styles.listWrap}>
            <ListItem icon={<Ionicons name="list" size={18} color={colors.purple} />} title="1. Choose class & duration" description="Pick the class and a short validity window (e.g., 5 minutes)." />
            <ListItem icon={<Ionicons name="qr-code" size={18} color={colors.blue} />} title="2. Generate QR" description="A QR will appear for students to scan (mock for now)." />
            <ListItem icon={<Ionicons name="shield-checkmark" size={18} color={colors.green} />} title="3. Keep it visible" description="Display the QR on screen/projector until time expires." />
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
  card: { marginTop: spacing.sm, padding: spacing.lg },
  btn: { marginTop: spacing.lg, backgroundColor: colors.text },
  stepsTitle: { marginTop: spacing.lg, ...typography.h2 },
  listWrap: { paddingHorizontal: spacing.xl, gap: spacing.md, marginTop: spacing.sm },
});