# Public APIs Explorer (React Native)

A mobile app built using **React Native + TypeScript** that fetches and displays public APIs from [APIs.guru](https://apis.guru/).

## 🔧 Setup Instructions

1. Clone the repository: https://github.com/Irzakkk/ApiExplorerApp.git
2.  Navigate to the project directory: cd ApiExplorerApp
3.   Install dependencies:
npm install
4. Run the app:
- For Android:
  ```
  npx react-native run-android
  ```
- For iOS:
  ```
  npx react-native run-ios
  ```
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
