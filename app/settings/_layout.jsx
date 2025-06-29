import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack screenOptions={{ headerShown:false }}>
      <Stack.Screen name="privacy-security" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="devices" />
      <Stack.Screen name="preferences" />
      <Stack.Screen name="help-support" />
    </Stack>
  );
}