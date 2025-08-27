# React Native Google Authentication

A complete React Native Android app demonstrating Google Sign-In integration with proper error handling and debugging solutions.

## 🔥 What's Included

This repository contains a **working React Native Android app** that successfully implements Google OAuth authentication. Based on real debugging experience, this project solves the most common Google Sign-In integration issues.

### ✅ Features Implemented:
- **Google Sign-In Integration** using `@react-native-google-signin/google-signin`
- **Complete OAuth Flow** - Sign in and Sign out functionality
- **User Profile Display** - Name, Email, Profile Photo, and User ID
- **Proper Error Handling** - Handles all common Google Sign-In errors
- **Real Device Testing** - Tested and working on physical Android devices
- **Debug Logging** - Console outputs for troubleshooting
- **Modern React Native** - Built with latest React Native and TypeScript

### 🛠️ Technology Stack:
- **React Native** (Latest version)
- **TypeScript** for type safety
- **@react-native-google-signin/google-signin** library
- **React Native Safe Area Context** for proper layout
- **Google Cloud Console** OAuth configuration
- **Firebase** project integration

## 📱 Homescreen

The app displays:
- Welcome screen with "Sign In with Google" button
- User profile after successful authentication showing:
  - Profile photo
  - Welcome message with user's name
  - Email address
  - User ID
  - Sign out button

## 🚀 Getting Started

### Prerequisites:
- Node.js (14 or later)
- React Native development environment
- Android Studio and SDK
- Physical Android device or emulator

### Installation:

1. **Clone the repository:**
```bash
git clone https://github.com/salmanazamdev/react-native-auth.git
cd react-native-auth
```

2. **Install dependencies:**
```bash
npm install
```

3. **Android Setup:**
```bash
cd android
./gradlew clean
cd ..
```

### Configuration Required:

⚠️ **Important**: This repository contains the working code, but you'll need to set up your own Google OAuth credentials:

1. **Create Google Cloud Project**
2. **Set up Firebase project**
3. **Create Web OAuth Client** (use this ID in App.tsx)
4. **Create Android OAuth Client** with your package name and SHA-1
5. **Download google-services.json** and place in `android/app/`

### Package Name:
- Current package name: `com.reactnativeauth.test`
- You can change this in `android/app/build.gradle` → `applicationId`

## 🐛 Common Issues Solved

This project addresses the most frustrating Google Sign-In errors:

### ✅ "Developer Error" 
- **Issue**: Missing Android OAuth client configuration
- **Solution**: Proper SHA-1 fingerprint setup and Android client creation

### ✅ "Package name already in use"
- **Issue**: OAuth client conflicts in Google Cloud Console  
- **Solution**: Using unique package name (`com.reactnativeauth.test`)

### ✅ "No matching client found"
- **Issue**: google-services.json doesn't match package name
- **Solution**: Updated Firebase configuration for current package name

### ✅ "Welcome User, email: No email"
- **Issue**: Wrong user data structure access
- **Solution**: Correct data path (`userInfo.data.user.name`)

### ✅ Android Manifest Errors
- **Issue**: Deprecated package attribute in AndroidManifest.xml
- **Solution**: Removed package attribute (modern Android requirement)

## 📁 Project Structure

```
react-native-auth/
├── App.tsx                 # Main app component with Google Sign-In
├── android/
│   ├── app/
│   │   ├── build.gradle   # Package name configuration
│   │   ├── google-services.json   # Firebase configuration
│   │   └── src/main/AndroidManifest.xml   # Android manifest
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🔧 Key Configuration Files

### App.tsx
- Google Sign-In configuration with Web Client ID
- Complete authentication flow implementation
- User data display with proper data structure handling
- Error handling for all common scenarios

### android/app/build.gradle
- Package name: `com.reactnativeauth.test`
- Google Services plugin configuration
- Proper dependency management

### AndroidManifest.xml
- Clean manifest without deprecated package attribute
- Modern Android configuration

## 📝 Code Highlights

### Google Sign-In Configuration:
```javascript
GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
  offlineAccess: true,
});
```

### Proper User Data Access:
```javascript
// Handles the correct data structure returned by Google Sign-In
const userData = userInfo.data?.user;
const name = userData?.name;
const email = userData?.email;
const photo = userData?.photo;
```

### Complete Error Handling:
```javascript
// Handles all Google Sign-In error scenarios
if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  console.log('User cancelled the login flow');
} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  console.log('Play services not available or outdated');
}
```

## 🎯 What This Repository Demonstrates

1. **Working Google OAuth Implementation** - Complete sign-in/sign-out flow
2. **Real-world Debugging Solutions** - Based on actual development challenges  
3. **Proper Error Handling** - Graceful handling of all authentication scenarios
4. **Modern React Native Patterns** - TypeScript, hooks, and best practices
5. **Production-Ready Code** - Clean, maintainable, and well-documented

## 🚀 Running the App

1. **Start Metro bundler:**
```bash
npm start
```

2. **Run on Android:**
```bash
npm run android
```

3. **For debugging:**
```bash
npx react-native log-android
```

## 🔍 Debug Output

The app includes comprehensive logging to help troubleshoot issues:
```
User Info: { type: 'success', data: { user: { name: '...', email: '...' } } }
Full user object: { ... detailed JSON structure ... }
```

## ⚡ Quick Setup Checklist

- [ ] Clone repository
- [ ] Install dependencies (`npm install`)
- [ ] Create Google Cloud OAuth clients (Web + Android)
- [ ] Generate SHA-1 fingerprint for Android client
- [ ] Download google-services.json from Firebase
- [ ] Update Web Client ID in App.tsx
- [ ] Run `npm run android`

## 🤝 Contributing

Found an issue or want to improve the implementation? Feel free to:
- Open an issue for bugs or questions
- Submit pull requests for improvements
- Share your debugging experiences


## 🙋‍♂️ Author

**Salman Azam** - [GitHub](https://github.com/salmanazamdev)

Built with ❤️ and lots of debugging sessions!

---

## 📚 Related Articles

- [Complete Guide to Google OAuth 2.0 in React Native Android (2025)](https://medium.com/@salmanazam/the-complete-guide-to-google-oauth-in-react-native-android-from-setup-hell-to-success-2025-23b024e935c9)

---

**⭐ If this repository helped you implement Google Sign-In, please give it a star!**