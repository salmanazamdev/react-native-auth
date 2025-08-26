/**
 * Google Sign-In React Native Example
 * Using @react-native-google-signin/google-signin
 */

import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Button, Text, Image } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { GoogleSignin, statusCodes, User } from '@react-native-google-signin/google-signin';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    // Configure Google Sign-In
    GoogleSignin.configure({
      webClientId: '620250915616-91abe9ebp5h39rv7uvc8dvg0teoanrn6.apps.googleusercontent.com', 
      offlineAccess: true, // if you want to access Google APIs on behalf of the user
    });
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const [userInfo, setUserInfo] = useState<User | null>(null);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setUserInfo(user);
      console.log('User Info:', user);
      console.log('Full user object:', JSON.stringify(user, null, 2));
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available or outdated');
      } else {
        console.error(error);
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUserInfo(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      {userInfo ? (
        <View style={styles.profileContainer}>
          {/* Add null check for photo */}
          {userInfo.user?.photo && (
            <Image source={{ uri: userInfo.user.photo }} style={styles.profileImage} />
          )}
          <Text style={styles.text}>Welcome, {userInfo.user?.name || 'User'}</Text>
          <Text style={styles.text}>Email: {userInfo.user?.email || 'No email'}</Text>
          <Button title="Sign Out" onPress={signOut} />
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Sign in with Google below:</Text>
          <Button title="Sign In with Google" onPress={signIn} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    gap: 12,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default App;