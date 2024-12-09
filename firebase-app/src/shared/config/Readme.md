# Firebase Configuration and Storage Integration

This project integrates Firebase to leverage its storage and real-time database services. The configuration and initialization are handled in the `firebase.ts` file, and the storage instance is exported via `storage.ts`.

## Files Overview

### firebase.ts

This file is responsible for initializing the Firebase app with the necessary configurations and exporting the Firebase services used in the application.

#### Code Breakdown

```typescript
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Firebase configuration object containing keys and identifiers for your Firebase project.
export const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  projectId: "<your-project-id>",
  storageBucket: "<your-storage-bucket>",
  messagingSenderId: "<your-messaging-sender-id>",
  appId: "<your-app-id>",
};

// Initialize Firebase with the provided configuration
export const app = initializeApp(firebaseConfig);

// Export Firebase storage and database services
export const storage = getStorage(app);
export const database = getDatabase(app);

**Key Points**:
The Firebase configuration object (firebaseConfig) contains sensitive information such as apiKey, authDomain, databaseURL, etc. Ensure these are secured and not exposed in public repositories.
initializeApp(firebaseConfig): Initializes the Firebase app with the provided configuration.
getStorage(app): Initializes and exports Firebase storage service.
getDatabase(app): Initializes and exports Firebase real-time database service.


storage.ts
This file exports the initialized Firebase storage instance for use in other parts of the application.


```
