import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const NotificationToggle = ({ title, description, value, onValueChange }) => (
  <View className="flex-row items-center justify-between bg-background-light p-4 rounded-lg mb-3">
    <View className="flex-1 mr-4">
      <Text className="text-base font-medium text-black mb-1">{title}</Text>
      <Text className="text-sm text-muted">{description}</Text>
    </View>
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: '#D9D9D9', true: '#0CA6A6' }}
      thumbColor="#FFFFFF"
    />
  </View>
);

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();

  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);

  return (
    <SafeAreaView
      className="flex-1 bg-background"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <ScrollView
        className="flex-1 px-4"
        contentContainerStyle={{
          paddingBottom: insets.bottom + 24,
          paddingTop: 24,
        }}
      >
        {/* Header */}
        <View className="flex-row items-center mb-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className="mr-4 active:opacity-70"
          >
            <Ionicons name="arrow-back" size={24} color="#0CA6A6" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-black">Notifications</Text>
        </View>

        {/* Notification Types */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-black mb-4">Notification Types</Text>
          <NotificationToggle
            title="Push Notifications"
            description="Receive notifications on your device"
            value={pushNotifications}
            onValueChange={setPushNotifications}
          />
          <NotificationToggle
            title="Email Notifications"
            description="Receive updates via email"
            value={emailNotifications}
            onValueChange={setEmailNotifications}
          />
          <NotificationToggle
            title="SMS Notifications"
            description="Receive text message alerts"
            value={smsNotifications}
            onValueChange={setSmsNotifications}
          />
        </View>

        {/* Notification Settings */}
        <View>
          <Text className="text-lg font-semibold text-black mb-4">Sound & Vibration</Text>
          <NotificationToggle
            title="Sound"
            description="Play sound for notifications"
            value={soundEnabled}
            onValueChange={setSoundEnabled}
          />
          <NotificationToggle
            title="Vibration"
            description="Vibrate device for notifications"
            value={vibrationEnabled}
            onValueChange={setVibrationEnabled}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
