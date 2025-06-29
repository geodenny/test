import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const DeviceItem = ({ name, type, lastSeen, isCurrentDevice = false }) => (
  <View className="bg-background-light p-4 rounded-lg mb-3 border border-background-medium">
    <View className="flex-row items-center justify-between mb-2">
      <View className="flex-row items-center">
        <Ionicons
          name={
            type === 'mobile'
              ? 'phone-portrait'
              : type === 'tablet'
              ? 'tablet-portrait'
              : 'laptop'
          }
          size={20}
          color="#0CA6A6"
        />
        <Text className="text-base font-medium text-black ml-3">{name}</Text>
      </View>
      {isCurrentDevice && (
        <View className="bg-accent-green px-2 py-1 rounded-full">
          <Text className="text-xs text-white font-medium">Current</Text>
        </View>
      )}
    </View>
    <Text className="text-sm text-muted ml-6">Last seen: {lastSeen}</Text>
  </View>
);

export default function DevicesScreen() {
  const insets = useSafeAreaInsets();

  const devices = [
    {
      name: 'iPhone 15 Pro',
      type: 'mobile',
      lastSeen: 'Now',
      isCurrentDevice: true,
    },
    {
      name: 'MacBook Pro',
      type: 'laptop',
      lastSeen: '2 hours ago',
      isCurrentDevice: false,
    },
    {
      name: 'iPad Air',
      type: 'tablet',
      lastSeen: '1 day ago',
      isCurrentDevice: false,
    },
  ];

  return (
    <SafeAreaView
      className="flex-1 bg-background"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <ScrollView
        className="flex-1 px-4"
        contentContainerStyle={{ paddingBottom: insets.bottom + 24, paddingTop: 24 }}
      >
        {/* Header */}
        <View className="flex-row items-center mb-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className="mr-4 active:opacity-70"
          >
            <Ionicons name="arrow-back" size={24} color="#0CA6A6" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-black">Devices</Text>
        </View>

        {/* Device List */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-black mb-4">Connected Devices</Text>
          {devices.map((device, index) => (
            <DeviceItem
              key={index}
              name={device.name}
              type={device.type}
              lastSeen={device.lastSeen}
              isCurrentDevice={device.isCurrentDevice}
            />
          ))}
        </View>

        {/* Actions */}
        <View className="p-4 items-center">
          <TouchableOpacity className="bg-brand px-6 py-3 rounded-xl w-2/3 active:opacity-80 mb-6">
            <Text className="text-white text-center font-medium">Add New Device</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-accent-red px-6 py-3 rounded-xl w-2/3 active:opacity-80">
            <Text className="text-white text-center font-medium">Remove All Devices</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
