import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../../../components/Screen';
import { Header } from '../../../components/Header';
import { Card } from '../../../components/Card';
import { AppButton } from '../../../components/AppButton';
import { ListItem } from '../../../components/ListItem';
import { colors, spacing, typography } from '../../../theme/theme';

export default function StudentScannerScreen() {
  return (
    <Screen>
      <Header title="Scan" />
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.padX}>
            <Card style={styles.scannerCard}>
              <View style={styles.scannerArea}>
                <Ionicons name="scan" size={36} color={colors.mutedText} />
                <Text style={styles.placeholder}>Camera Preview</Text>
              </View>
              <Text style={styles.instruction}>Position QR code within the frame</Text>
              <AppButton title="Start Scanning" onPress={() => {}} style={styles.startBtn} />
            </Card>
          </View>

          <View style={styles.padX}>
            <Text style={styles.stepsTitle}>Steps</Text>
          </View>

          <View style={styles.listWrap}>
            <ListItem
              title="1. Open scanner"
              description="Make sure your camera is clear and well-lit."
              icon={<Ionicons name="camera" size={18} color={colors.purple} />}
            />
            <ListItem
              title="2. Align QR"
              description="Center the QR inside the frame for quick detection."
              icon={<Ionicons name="qr-code" size={18} color={colors.blue} />}
            />
            <ListItem
              title="3. Confirm"
              description="Wait for the confirmation message before leaving."
              icon={<Ionicons name="checkmark-circle" size={18} color={colors.green} />}
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
  padX: { paddingHorizontal: spacing.xl },
  scannerCard: {
    marginTop: spacing.sm,
  },
  scannerArea: {
    height: 260,
    borderRadius: 22,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    marginTop: 10,
    ...typography.muted,
    fontWeight: '700',
  },
  instruction: {
    marginTop: spacing.md,
    ...typography.body,
    fontWeight: '800',
    color: colors.text,
  },
  startBtn: {
    marginTop: spacing.md,
    backgroundColor: colors.text,
  },
  stepsTitle: {
    marginTop: spacing.lg,
    ...typography.h2,
  },
  listWrap: {
    paddingHorizontal: spacing.xl,
    gap: spacing.md,
    marginTop: spacing.sm,
  },
});
