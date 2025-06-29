import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SettingsItem = ({ title, icon, onPress, iconColor = '#0CA6A6' }) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex-row items-center justify-between bg-background-light px-6 py-4 rounded-2xl mb-3 border border-background-medium shadow-sm active:opacity-70"
    activeOpacity={0.7}
  >
    <View className="flex-row items-center flex-1">
      <Ionicons name={icon} size={28} color={iconColor} />
      <Text
        className="text-lg font-semibold ml-4 text-brand-dark dark:text-brand-dark"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
    </View>
    <Ionicons name="chevron-forward" size={22} color="#4F4F4F" />
  </TouchableOpacity>
);

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View
        className="flex-1"
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingHorizontal: 20,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            paddingVertical: 30,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View className="flex-row items-center mb-10 self-center">
            <Ionicons name="settings-outline" size={28} color="#058B8B" />
            <Text className="text-2xl font-bold text-[#058B8B] ml-3">
              Settings
            </Text>
          </View>

          {/* Settings List */}
          <View className="space-y-3">
            <SettingsItem
              title="Profile"
              icon="person-circle-outline"
              iconColor="#6C63FF"
              onPress={() => router.push('/settings/profile')}
            />
            <SettingsItem
              title="Privacy & Security"
              icon="shield-checkmark-outline"
              iconColor="#0CA6A6"
              onPress={() => router.push('/settings/privacy-security')}
            />
            <SettingsItem
              title="Notifications"
              icon="notifications-outline"
              iconColor="#FFD700"
              onPress={() => router.push('/settings/notifications')}
            />
            <SettingsItem
              title="Devices"
              icon="phone-portrait-outline"
              iconColor="#34C759"
              onPress={() => router.push('/settings/devices')}
            />
            <SettingsItem
              title="Preferences"
              icon="settings-outline"
              iconColor="#ADD8E6"
              onPress={() => router.push('/settings/preferences')}
            />
            <SettingsItem
              title="Help & Support"
              icon="help-circle-outline"
              iconColor="#FF6B6B"
              onPress={() => router.push('/settings/help-support')}
            />
          </View>

          {/* Footer - App Info */}
          <View className="mt-10 px-5 py-4 rounded-2xl bg-accent-lavender border border-background-medium self-center">
            <Text className="text-center text-red-500 dark:text-yellow-500 text-sm">
              App Version
            </Text>
            <Text className="text-center text-black font-semibold text-base">
              1.0.0
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
