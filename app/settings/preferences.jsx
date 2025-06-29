import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PreferenceToggle = ({ title, description, value, onValueChange }) => (
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

const LanguagePicker = ({ language, setLanguage }) => (
  <View className="bg-background-light p-4 rounded-lg mb-3">
    <Text className="text-base font-medium text-black mb-1">Language</Text>
    <View className="border border-gray-200 rounded-lg overflow-hidden">
      <Picker
        selectedValue={language}
        onValueChange={(itemValue) => setLanguage(itemValue)}
        dropdownIconColor="#6B7280"
        style={{ color: '#0CA6A6', fontSize: 14 }} // 👈 Decreased font size
      >
        <Picker.Item label="English" value="English" />
        <Picker.Item label="Malayalam" value="Malayalam" />
      </Picker>
    </View>
  </View>
);



export default function PreferencesScreen() {
  const insets = useSafeAreaInsets();

  const [autoSync, setAutoSync] = useState(true);
  const [language, setLanguage] = useState('English');
  const [theme, setTheme] = useState('Light');
  const [useDefaultTheme, setUseDefaultTheme] = useState(true);

  const handleThemeToggle = () => {
    const nextTheme = theme === 'Light' ? 'Dark' : 'Light';
    setTheme(nextTheme);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View
        className="flex-1"
        style={{
          paddingTop: insets.top + 16,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View className="flex-row items-center mb-6 px-4">
            <TouchableOpacity
              onPress={() => router.back()}
              className="mr-4 active:opacity-70"
            >
              <Ionicons name="arrow-back" size={24} color="#0CA6A6" />
            </TouchableOpacity>
            <Text className="text-xl font-bold text-black">Preferences</Text>
          </View>

          {/* Appearance */}
          <View className="mb-6 px-4">
            <Text className="text-lg font-semibold text-black mb-4">Appearance</Text>
            <View className="bg-background-light p-4 rounded-lg">
              {/* Use System Default */}
              <View className="flex-row items-center justify-between mb-2">
                <View className="flex-1 mr-4">
                  <Text className="text-base font-medium text-black mb-1">Use System Default</Text>
                  <Text className="text-sm text-muted">
                    Automatically adjust theme based on system setting
                  </Text>
                </View>
                <Switch
                  value={useDefaultTheme}
                  onValueChange={setUseDefaultTheme}
                  trackColor={{ false: '#D9D9D9', true: '#0CA6A6' }}
                  thumbColor="#FFFFFF"
                />
              </View>

              {/* Theme Toggle */}
              {!useDefaultTheme && (
                <View className="items-center mt-4">
                  <TouchableOpacity
                    onPress={handleThemeToggle}
                    activeOpacity={0.8}
                    className={`flex-row items-center justify-between px-4 py-2 rounded-full w-48 ${
                      theme === 'Dark' ? 'bg-black' : 'bg-gray-200'
                    }`}
                  >
                    <View className="flex-row items-center">
                      <View className="w-8 h-8 rounded-full items-center justify-center mr-3 bg-white">
                        <Ionicons
                          name={theme === 'Dark' ? 'moon-outline' : 'sunny-outline'}
                          size={20}
                          color="black"
                        />
                      </View>
                      <Text
                        className={`text-base font-bold ${
                          theme === 'Dark' ? 'text-white' : 'text-black'
                        }`}
                      >
                        {theme === 'Dark' ? 'NIGHTMODE' : 'DAYMODE'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>

          {/* General */}
          <View className="mb-6 px-4">
            <Text className="text-lg font-semibold text-black mb-4">General</Text>
            <LanguagePicker language={language} setLanguage={setLanguage} />
            <PreferenceToggle
              title="Auto Sync"
              description="Automatically sync data when connected"
              value={autoSync}
              onValueChange={setAutoSync}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
