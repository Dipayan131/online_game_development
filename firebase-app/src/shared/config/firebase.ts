import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// import dotenv from "dotenv";

// dotenv.config();

// TODO: Add SDKs for Firebase products that you want to use
// export const firebaseConfig = {
//   apiKey: process.env.VITE_API_KEY,
//   authDomain: process.env.VITE_AUTH_DOMAIN,
//   databaseURL: process.env.VITE_DATABASE_URL,
//   projectId: process.env.VITE_PROJECT_ID,
//   storageBucket: process.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: process.env.VITE_MESSAGING_SENDER_ID,
//   appId: process.env.VITE_APP_ID,
// };
// export const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   databaseURL: import.meta.env.VITE_DATABASE_URL,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

export const firebaseConfig = {
  apiKey: "AIzaSyCvDVmKbESf-_prdyfjGFa1IhEN00Agd3c",
  authDomain: "thegoodgametheory-quiz.firebaseapp.com",
  databaseURL:
    "https://thegoodgametheory-quiz-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thegoodgametheory-quiz",
  storageBucket: "thegoodgametheory-quiz.appspot.com",
  messagingSenderId: "263648910820",
  appId: "1:263648910820:web:9cd1fd041861fd56773bf1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getDatabase(app);
