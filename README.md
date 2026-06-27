# Angular RGB Exam

Ionic Angular mobile application with authentication and social media features.

## Features

- User authentication (login/logout)
- Social media list view
- Social details modal
- Loading states with custom component
- Action sheet for profile actions

## Tech Stack

- Angular 20.3
- Ionic 8
- Capacitor 8
- TypeScript
- SCSS with Tailwind CSS

## Prerequisites

- Node.js
- npm
- Android Studio (for Android builds)
- Java JDK 21 or higher
- Gradle 8.12.0

## Installation

```bash
npm install
```

## Development

```bash
# Web development server
npm start

# Build for production
npm run build

# Run tests
npm run test

# Lint
npm run lint
```

## Build Android APK

```bash
# Sync web assets to native platform
npx cap sync android

# Open in Android Studio
npx cap open android

# Or build from command line
cd android
./gradlew assembleDebug
```

APK location: `android/app/build/outputs/apk/debug/app-debug.apk`

## Run on Android Studio Emulator

1. Open Android Studio
2. Open the android folder: `npx cap open android`
3. Wait for Gradle sync to complete
4. Create/start an AVD (Android Virtual Device):
   - Tools → Device Manager → Create Device
   - Select a device definition (e.g., Pixel 6)
   - Select a system image (API 33+ recommended)
   - Finish and start the emulator
5. Click the "Run" button (green play icon) or press Shift+F10
6. Select your running emulator from the device list

The app will build and install on the emulator automatically.

## Run with Live Reload on Emulator

Live reload allows you to see code changes instantly without rebuilding:

```bash
# Run with live reload on Android emulator
ionic cap run android -l --external

# Or specify the emulator
ionic cap run android -l --external --target=<emulator-name>
```

The app will:
1. Build and install on the emulator
2. Watch for file changes
3. Automatically reload when you save changes

**Note**: Ensure your emulator is running before executing the command.

## Project Structure

- `/src/app/core` - Services and guards
- `/src/app/pages` - Page components (home, login)
- `/src/app/shared` - Shared components and models
- `/android` - Native Android project
