import React from 'react';
import { View, Text, StyleSheet, Image, Switch, TouchableOpacity, Alert } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(true);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setIsDarkModeEnabled(previousState => !previousState);

  const handleSignOut = () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Sign Out", onPress: () => navigation.navigate('Login') }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }} 
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Muhammad Naseem</Text>
          <Text style={styles.profileEmail}>Naseem@gmail.com</Text>
        </View>
      </View>

      {/* Settings Section */}
      <View style={styles.settingsContainer}>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Notifications</Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={toggleNotifications}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch
            value={isDarkModeEnabled}
            onValueChange={toggleDarkMode}
          />
        </View>

        <TouchableOpacity style={styles.settingItem} onPress={() => console.log("ooo")}>
          <Text style={styles.settingText}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => console.log("ooo")}>
          <Text style={styles.settingText}>Terms of Service</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  settingsContainer: {
    marginTop: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  signOutButton: {
    marginTop: 30,
    backgroundColor: '#ff5a5f',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  signOutText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
