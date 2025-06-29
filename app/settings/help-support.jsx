import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SupportItem = ({ title, description, onPress, icon }) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex-row items-center bg-background-light p-4 rounded-lg mb-3 active:opacity-70"
    activeOpacity={0.7}
  >
    <Ionicons name={icon} size={24} color="#0CA6A6" />
    <View className="flex-1 ml-4">
      <Text className="text-base font-medium text-black mb-1">{title}</Text>
      <Text className="text-sm text-muted">{description}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#4F4F4F" />
  </TouchableOpacity>
);

export default function HelpSupportScreen() {
  const insets = useSafeAreaInsets();

  const supportOptions = [
    {
      title: 'FAQ',
      description: 'Find answers to common questions',
      icon: 'help-circle-outline',
      onPress: () => {
        // Navigate to FAQ (example)
        router.push('/faq');
      },
    },
    {
      title: 'Contact Support',
      description: 'Get help from our support team',
      icon: 'mail-outline',
      onPress: () => Linking.openURL('mailto:support@yourapp.com'),
    },
    {
      title: 'Live Chat',
      description: 'Chat with support representatives',
      icon: 'chatbubble-outline',
      onPress: () => {
        // Navigate to live chat screen
        router.push('/live-chat');
      },
    },
    {
      title: 'User Guide',
      description: 'Learn how to use the app',
      icon: 'book-outline',
      onPress: () => {
        // Navigate to user guide screen
        router.push('/user-guide');
      },
    },
    {
      title: 'Report a Bug',
      description: 'Report issues or bugs',
      icon: 'bug-outline',
      onPress: () => {
        // Navigate to bug report form
        router.push('/report-bug');
      },
    },
    {
      title: 'Feature Request',
      description: 'Suggest new features',
      icon: 'bulb-outline',
      onPress: () => {
        // Navigate to feature request form
        router.push('/feature-request');
      },
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
          <Text className="text-xl font-bold text-black">Help & Support</Text>
        </View>

        {/* Support Options */}
        <View className="mb-6">
          {supportOptions.map((option, index) => (
            <SupportItem
              key={index}
              title={option.title}
              description={option.description}
              icon={option.icon}
              onPress={option.onPress}
            />
          ))}
        </View>

        {/* Contact Info */}
        <View className="bg-accent-blue p-4 rounded-lg">
          <Text className="text-center text-black font-medium mb-2">Need more help?</Text>
          <Text className="text-center text-muted text-sm">
            Email us at support@yourapp.com or call +1 (555) 123-4567
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
