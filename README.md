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
- Java JDK

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

## Project Structure

- `/src/app/core` - Services and guards
- `/src/app/pages` - Page components (home, login)
- `/src/app/shared` - Shared components and models
- `/android` - Native Android project
