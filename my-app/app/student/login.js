import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Screen } from '../../components/Screen';
import { Card } from '../../components/Card';
import { AppButton } from '../../components/AppButton';
import { TextField } from '../../components/TextField';
import { colors, spacing, typography } from '../../theme/theme';

export default function StudentLoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen>
      <SafeAreaView style={styles.safe}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>
          <View style={styles.header}>
            <Text style={styles.title}>Student Access</Text>
            <Text style={styles.subtitle}>Sign in to continue to your dashboard</Text>
          </View>

          <Card style={styles.card}>
            <TextField label="Email" value={email} onChangeText={setEmail} placeholder="student@college.edu" keyboardType="email-address" />
            <TextField label="Password" value={password} onChangeText={setPassword} placeholder="••••••••" secureTextEntry />
            <AppButton
              title="Access Dashboard"
              onPress={() => router.replace('/student')}
              style={styles.btn}
            />
          </Card>

          <View style={styles.bottomHint}>
            <Text style={styles.hintText}>Use mock credentials. No backend connected.</Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
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
  },
  card: {
    padding: spacing.lg,
  },
  btn: {
    marginTop: spacing.lg,
    backgroundColor: colors.text,
  },
  bottomHint: {
    paddingTop: spacing.lg,
    alignItems: 'center',
  },
  hintText: {
    ...typography.muted,
  },
});
