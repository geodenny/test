import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Switch } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ToggleItem = ({ title, description, value, onValueChange }) => (
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

const ActionItem = ({ title, description, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex-row items-center justify-between bg-background-light p-4 rounded-lg mb-3 active:opacity-70"
    activeOpacity={0.7}
  >
    <View className="flex-1">
      <Text className="text-base font-medium text-black mb-1">{title}</Text>
      <Text className="text-sm text-muted">{description}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#4F4F4F" />
  </TouchableOpacity>
);

export default function PrivacySecurityScreen() {
  const [biometricAuth, setBiometricAuth] = useState(true);
  const [dataEncryption, setDataEncryption] = useState(true);
  const [analytics, setAnalytics] = useState(false);
  const [locationTracking, setLocationTracking] = useState(false);

  const insets = useSafeAreaInsets();

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
          <Text className="text-xl font-bold text-black">Privacy & Security</Text>
        </View>

        {/* Security Section */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-black mb-4">Security</Text>
          <ToggleItem
            title="Biometric Authentication"
            description="Use fingerprint or face ID to unlock the app"
            value={biometricAuth}
            onValueChange={setBiometricAuth}
          />
          <ToggleItem
            title="Data Encryption"
            description="Encrypt your data for enhanced security"
            value={dataEncryption}
            onValueChange={setDataEncryption}
          />
        </View>

        {/* Privacy Section */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-black mb-4">Privacy</Text>
          <ToggleItem
            title="Analytics"
            description="Share anonymous usage data to improve the app"
            value={analytics}
            onValueChange={setAnalytics}
          />
          <ToggleItem
            title="Location Tracking"
            description="Allow location access for personalized features"
            value={locationTracking}
            onValueChange={setLocationTracking}
          />
        </View>

        {/* Actions Section */}
        <View>
          <Text className="text-lg font-semibold text-black mb-4">Actions</Text>
          <ActionItem
            title="Privacy Policy"
            description="Read our privacy policy"
            onPress={() => {}}
          />
          <ActionItem
            title="Terms of Service"
            description="View terms and conditions"
            onPress={() => {}}
          />
          <ActionItem
            title="Data Export"
            description="Download your personal data"
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
