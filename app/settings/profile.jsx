import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets(); // ← Get safe area padding

  const [editMode, setEditMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [profile, setProfile] = useState({
    image: null,
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '9876543210',
    dob: '1990-01-01',
    gender: 'Male',
  });

  const handleImagePick = async () => {
    if (!editMode) return;
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });
    if (!result.canceled) {
      setProfile({ ...profile, image: result.assets[0].uri });
    }
  };

  const handleInputChange = (key, value) => {
    setProfile({ ...profile, [key]: value });
  };

  const cancelEdit = () => {
    setEditMode(false);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Profile Picture */}
        <TouchableOpacity
          onPress={handleImagePick}
          activeOpacity={editMode ? 0.8 : 1}
          className="items-center mb-6"
        >
           <View className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
            <Image
              source={
                profile.image
                  ? { uri: profile.image }
                  : require('../../assets/avatar-placeholder.png')
              }
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
          {editMode && (
            <Text className="text-sm text-blue-500 mt-2">Change Photo</Text>
          )}
        </TouchableOpacity>

        {/* Input Fields */}
        {['fullName', 'email', 'phone', 'dob', 'gender'].map((field) => (
          <View key={field} className="mb-4">
            <Text className="text-gray-600 font-medium capitalize">
              {field.replace(/([A-Z])/g, ' $1')}
            </Text>
            <TextInput
              editable={editMode}
              value={profile[field]}
              onChangeText={(val) => handleInputChange(field, val)}
              className={`mt-1 border ${
                editMode ? 'border-gray-400' : 'border-transparent'
              } px-3 py-2 rounded-md bg-gray-100`}
              placeholder={`Enter ${field}`}
            />
          </View>
        ))}

        {/* Buttons */}
        {!editMode ? (
          <TouchableOpacity
            onPress={() => setEditMode(true)}
            className="bg-[#0CA6A6] py-3 rounded-lg mt-6"
          >
            <Text className="text-white text-center font-semibold">Edit Profile</Text>
          </TouchableOpacity>
        ) : (
          <View className="mt-6 space-y-4">
            <TouchableOpacity className="bg-[#0CA6A6] py-3 rounded-lg">
              <Text className="text-white text-center font-semibold">Save Changes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelEdit}
              className="border border-gray-400 py-3 rounded-lg"
            >
              <Text className="text-center text-gray-700 font-semibold">Cancel</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Change Password */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="mt-10 py-3"
        >
          <Text className="text-center text-blue-500 font-semibold">Change Password</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white p-6 rounded-lg w-[90%]">
            <Text className="text-lg font-bold mb-4">Change Password</Text>
            <TextInput
              placeholder="Current Password"
              secureTextEntry
              className="border border-gray-300 rounded px-3 py-2 mb-3"
            />
            <TextInput
              placeholder="New Password"
              secureTextEntry
              className="border border-gray-300 rounded px-3 py-2 mb-3"
            />
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry
              className="border border-gray-300 rounded px-3 py-2 mb-4"
            />
            <View className="flex-row justify-between">
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text className="text-blue-500 font-semibold">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-[#0CA6A6] font-semibold">Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
