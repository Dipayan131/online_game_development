# Firebase Data and Storage Hooks

This module provides hooks for interacting with Firebase data and storage services. It includes functions for fetching, saving, and checking the existence of data in Firebase real-time database, as well as managing storage data and links.

## Firebase Data Hooks

### `useFirebaseData(path: string)`

This hook fetches data from the specified path in the Firebase real-time database.

### `useFirebaseSave(path: string)`

This hook saves data to the specified path in the Firebase real-time database.

### `useFirebaseDataExist(path: string)`

This hook checks if data with the same templateId and topic exists at the specified path in the Firebase real-time database.

### `useFirebaseSaveAndReplace(path: string)`

This hook saves and replaces data at the specified path in the Firebase real-time database.

## Storage Hooks

### `useStorageDataLinks(path: string)`

This hook manages storage data and links for the specified path in Firebase storage. It provides functionality to list existing files and upload new files.

## Additional Information

- These hooks utilize Firebase database and storage services for data management and storage.
- Ensure that proper security rules are set up in Firebase to control access to data and storage.
- The hooks provide convenient methods for interacting with Firebase services within React components.
