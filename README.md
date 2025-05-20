# Public APIs Explorer (React Native)

## Running the Project

This React Native app was developed and tested using [Expo](https://expo.dev/) and can be easily run on your device using **Expo Go**.

### Steps to run:

1. Install Expo CLI globally if you want to run locally:
npm install -g expo-cli

markdown
Copy
Edit

2. Clone the repository:
https://github.com/Irzakkk/ApiExplorerApp.git
-> Navigate to the project directory: cd ApiExplorerApp


3. Install dependencies:
npm install


5. Start the Expo development server:
npm start


5. Scan the QR code displayed in the terminal or browser with the **Expo Go** app on your Android/iOS device.

---

If you’re not using Expo, you might need to set up native builds for Android/iOS instead.
## 🔧 Setup Instructions

## Folder Structure

/App.tsx
/contexts/
└── ThemeContext.tsx
/navigation/
└── Navigation.tsx
/screens/
└── HomeScreen.tsx
└── DetailsScreen.tsx
/components/
└── ApiItem.tsx

---

##  Features

- ✅ Fetches and displays list of public APIs
- ✅ Search functionality
- ✅ Pull-to-refresh
- ✅ Light/Dark theme toggle using Context API
- ✅ FlatList rendering for performance

---

##  Notes

- The app fetches data from: `https://api.apis.guru/v2/list.json`
- The theme is managed globally using Context API.
- Axios is used for HTTP requests.
